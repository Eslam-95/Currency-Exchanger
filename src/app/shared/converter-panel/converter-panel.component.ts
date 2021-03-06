import { ConverterModel } from './../../core/models/convrtermodel';
import { EnteredAmountService } from './../../core/services/enteredAmount/entered-amount.service';
import { CurrencyconverterService } from './../../core/services/currencyconverter/currencyconverter.service';
import { ConvertedCurrency } from './../../core/models/convertCurrency';
import { Symbols } from './../../core/models/symbols';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
})
export class ConverterPanelComponent implements OnInit {
  @Input()
  isHome!: boolean;
  converterForm!: FormGroup;
  allSymbols!: any;
  result = 'Result';
  oneBasedOnSelected!: string;
  @Output() topCurrencies = new EventEmitter<object>();
  @Output() convertedValue = new EventEmitter<number>();
  @Output() requestedValue = new EventEmitter<number>();
  @Output() convertedToCurrency = new EventEmitter<string>();
  @Output() convertedFromCurrency = new EventEmitter<string>();
  @Output() currentTitle = new EventEmitter<string>();
  constructor(
    private currencyService: CurrencyconverterService,
    private enteredAmount: EnteredAmountService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getDefaultBaseCurrency();
    this.getQueryParams();
  }

  private getQueryParams(): void {
    this.route.queryParamMap.subscribe((qParams) => {
      const filters: ConverterModel = {
        amount: '',
        to: 'USD',
        from: 'EUR',
      };

      qParams.keys.forEach((key: any) => {
        if (key) {
          filters[key as keyof typeof filters] = qParams.get(key);
        }
      });
      this.converterForm.setValue(filters);
      this.getAllSybmols();
      if (this.converterForm.valid) {
        this.submit();
      }
    });
  }

  // initializing Converter Form
  initForm(): void {
    this.converterForm = new FormGroup({
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d*\.?\d*$/),
        Validators.min(1),
      ]),
      from: new FormControl(
        { value: 'EUR', disabled: true },
        Validators.required
      ),
      to: new FormControl(
        { value: 'USD', disabled: true },
        Validators.required
      ),
    });
    this.enteredAmount.enteredAmount.subscribe((enteredAmount: number) => {
      this.converterForm.controls.amount.setValue(enteredAmount);
    });
  }

  // enable disable select box depends on place and validation
  checkValidation(): void {
    if (this.converterForm.controls.amount.valid && this.isHome) {
      this.converterForm.controls.from.enable();
      this.converterForm.controls.to.enable();
    } else if (this.converterForm.controls.amount.valid && !this.isHome) {
      this.converterForm.controls.to.enable();
    } else if (this.converterForm.controls.amount.invalid) {
      this.converterForm.controls.from.disable();
      this.converterForm.controls.to.disable();
    }
  }

  // for swaping between currencies in home page
  swapCurrency(): void {
    if (this.isHome) {
      const currentToValue = this.converterForm.controls.to.value;
      const currentFromValue = this.converterForm.controls.from.value;
      this.converterForm.controls.from.setValue(currentToValue);
      this.converterForm.controls.to.setValue(currentFromValue);
      this.submit();
    }
  }

  getAllSybmols(): void {
    this.currencyService
      .getAllSybmols()
      .pipe(take(1))
      .subscribe((res: Symbols) => {
        this.allSymbols = res.symbols;
        const fullTitle: any = Object.entries(this.allSymbols).find(
          (title) => title[0] === this.converterForm.controls.from.value
        );
        this.currentTitle.emit(
          this.converterForm.controls.from.value + ' - ' + fullTitle?.[1]
        );
      });
  }

  getTopTenCurrencies(topCurrencies: object): void {
    const currencies: object[] = [];
    Object.entries(topCurrencies).forEach((currency, index: number) => {
      if (index <= 8) {
        currencies.push(currency);
      }
    });
    this.topCurrencies.emit(currencies);
  }

  getDefaultBaseCurrency(): void {
    this.currencyService
      .getDefaultCurrency('USD')
      .pipe(take(1))
      .subscribe((res: ConvertedCurrency) => {
        this.oneBasedOnSelected =
          1 +
          ' ' +
          res.base +
          ' ' +
          Object.values(res.rates)[0] +
          ' ' +
          Object.keys(res.rates)[0];
      });
  }

  // submit form and convert amount value
  submit(): void {
    if (this.converterForm.valid) {
      this.currencyService
        .convertCurrency()
        .subscribe((res: ConvertedCurrency) => {
          this.getTopTenCurrencies(res.rates);
          const fromBasedOnEUR: any = Object.entries(res.rates).find(
            (fromvalue) =>
              fromvalue[0] === this.converterForm.controls.from.value
          );
          const toBasedOnEUR: any = Object.entries(res.rates).find(
            (fromvalue) => fromvalue[0] === this.converterForm.controls.to.value
          );
          const toBasedOnFrom: number = toBasedOnEUR?.[1] / fromBasedOnEUR?.[1];

          this.result =
            toBasedOnFrom * this.converterForm.controls.amount.value +
            ' ' +
            this.converterForm.controls.to.value;
          this.convertedValue.emit(fromBasedOnEUR?.[1]);
          this.convertedToCurrency.emit(this.converterForm.controls.to.value);
          this.convertedFromCurrency.emit(
            this.converterForm.controls.from.value
          );
          this.requestedValue.emit(this.converterForm.controls.amount.value);
          this.enteredAmount.enteredAmount.next(
            this.converterForm.controls.amount.value
          );
        });
    } else {
      this.converterForm.markAllAsTouched();
    }
  }
}
