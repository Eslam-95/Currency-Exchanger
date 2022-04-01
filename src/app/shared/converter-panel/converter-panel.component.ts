import { ConvertedCurrency } from './../../core/models/convertCurrency';
import { Symbols } from './../../core/models/symbols';
import { CurrencyconverterService } from './../../core/services/currencyconverter.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';

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
  result: any;
  oneBasedOnSelected: any;
  @Output() topCurrencies = new EventEmitter<any>();
  @Output() convertedValue = new EventEmitter<number>();
  @Output() requestedValue = new EventEmitter<number>();

  demoObject = {
    AED: 4.057342,
    AFN: 97.207827,
    ALL: 121.066157,
    AMD: 535.502541,
    ANG: 1.99213,
    AOA: 491.089933,
    ARS: 122.742642,
    AUD: 1.474969,
    AWG: 1.988335,
    AZN: 1.876237,
    BAM: 1.953487,
    BBD: 2.231853,
    BDT: 95.310488,
    BGN: 1.956869,
    BHD: 0.416513,
    BIF: 2221.411681,
    BMD: 1.10463,
    BND: 1.498694,
    BOB: 7.610433,
    BRL: 5.194527,
    BSD: 1.10534,
    BTC: 2.3830067e-5,
    BTN: 83.960458,
    BWP: 12.683588,
    BYN: 3.600283,
    BYR: 21650.755318,
    BZD: 2.228058,
    CAD: 1.383605,
    CDF: 2220.307232,
    CHF: 1.022224,
    CLF: 0.031307,
    CLP: 863.655545,
    CNY: 7.028873,
    COP: 4160.744949,
    CRC: 724.43833,
    CUC: 1.10463,
    CUP: 29.272705,
    CVE: 110.407689,
    CZK: 24.375658,
    DJF: 196.794013,
    DKK: 7.437354,
    DOP: 60.809994,
    DZD: 158.198832,
    EGP: 20.191578,
    ERN: 16.569461,
    ETB: 56.347027,
    EUR: 1,
    FJD: 2.325238,
    FKP: 0.847206,
    GBP: 0.842724,
    GEL: 3.429872,
    GGP: 0.847206,
    GHS: 8.295781,
    GIP: 0.847206,
    GMD: 59.37373,
    GNF: 9803.59446,
    GTQ: 8.494821,
    GYD: 231.255361,
    HKD: 8.654365,
    HNL: 26.919866,
    HRK: 7.560866,
    HTG: 117.718377,
    HUF: 367.933618,
    IDR: 15874.587864,
    ILS: 3.53817,
    IMP: 0.847206,
    INR: 83.954062,
    IQD: 1612.760345,
    IRR: 46670.633357,
    ISK: 142.011433,
    JEP: 0.847206,
    JMD: 169.458423,
    JOD: 0.783209,
    JPY: 135.356433,
    KES: 127.032423,
    KGS: 90.050014,
    KHR: 4479.276045,
    KMF: 490.842205,
    KPW: 994.167723,
    KRW: 1347.991805,
    KWD: 0.336136,
    KYD: 0.921166,
    KZT: 525.689615,
    LAK: 12979.406804,
    LBP: 1672.409996,
    LKR: 328.792208,
    LRD: 168.676922,
    LSL: 16.171883,
    LTL: 3.261686,
    LVL: 0.66818,
    LYD: 5.125363,
    MAD: 10.521328,
    MDL: 20.251016,
    MGA: 4401.951966,
    MKD: 61.541202,
    MMK: 1965.495191,
    MNT: 3179.979863,
    MOP: 8.921419,
    MRO: 394.352853,
    MUR: 49.32091,
    MVR: 17.066507,
    MWK: 903.034063,
    MXN: 21.928073,
    MYR: 4.644695,
    MZN: 70.508957,
    NAD: 16.172094,
    NGN: 459.216786,
    NIO: 39.445696,
    NOK: 9.665803,
    NPR: 134.336653,
    NZD: 1.599411,
    OMR: 0.425382,
    PAB: 1.10534,
    PEN: 4.112515,
    PGK: 3.888555,
    PHP: 57.000585,
    PKR: 202.755162,
    PLN: 4.640939,
    PYG: 7656.306976,
    QAR: 4.021999,
    RON: 4.946316,
    RSD: 117.733369,
    RUB: 94.998155,
    RWF: 1123.961405,
    SAR: 4.143577,
    SBD: 8.861892,
    SCR: 15.912014,
    SDG: 494.317234,
    SEK: 10.341218,
    SGD: 1.498867,
    SHP: 1.521518,
    SLL: 13117.485448,
    SOS: 647.313224,
    SRD: 22.894597,
    STD: 22863.618488,
    SVC: 9.672095,
    SYP: 2774.831871,
    SZL: 16.171494,
    THB: 36.936079,
    TJS: 14.337108,
    TMT: 3.877253,
    TND: 3.244345,
    TOP: 2.486578,
    TRY: 16.223126,
    TTD: 7.508458,
    TWD: 31.695712,
    TZS: 2563.847149,
    UAH: 32.498929,
    UGX: 3951.861093,
    USD: 1.10463,
    UYU: 45.302829,
    UZS: 12592.786721,
    VEF: 236203358334.0816,
    VND: 25228.653097,
    VUV: 126.056667,
    WST: 2.896392,
    XAF: 655.118034,
    XAG: 0.044697,
    XAU: 0.000574,
    XCD: 2.985319,
    XDR: 0.799476,
    XOF: 651.188823,
    XPF: 119.300157,
    YER: 276.433715,
    ZAR: 16.226802,
    ZMK: 9942.996363,
    ZMW: 19.814339,
    ZWL: 355.69053,
  };

  constructor(private currencyService: CurrencyconverterService) {}

  ngOnInit(): void {
    Object.entries(this.demoObject).forEach((currency, index: number) => {
      if (index <= 8) {
        this.topCurrencies.emit(currency);
      }
    });
    this.initForm();
    this.getAllSybmols();
  }

  // initializing Converter Form
  initForm(): void {
    this.converterForm = new FormGroup({
      amount: new FormControl('1', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]*$'),
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
    this.submit();
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
      });
  }

  // submit form and convert amount value
  submit(): void {
    if (this.converterForm.valid) {
      this.currencyService
        .convertCurrency()
        .subscribe((res: ConvertedCurrency) => {
          const fromBasedOnEUR: any = Object.entries(res.rates).find(
            (fromvalue) =>
              fromvalue[0] === this.converterForm.controls.from.value
          );
          const toBasedOnEUR: any = Object.entries(res.rates).find(
            (fromvalue) => fromvalue[0] === this.converterForm.controls.to.value
          );
          const toBasedOnFrom: number = toBasedOnEUR?.[1] / fromBasedOnEUR?.[1];

          this.oneBasedOnSelected =
            1 +
            ' ' +
            this.converterForm.controls.from.value +
            ' ' +
            toBasedOnFrom +
            ' ' +
            this.converterForm.controls.to.value;
          this.result =
            toBasedOnFrom * this.converterForm.controls.amount.value +
            ' ' +
            this.converterForm.controls.to.value;
          this.convertedValue.emit(fromBasedOnEUR?.[1]);
          this.requestedValue.emit(this.converterForm.controls.amount.value);
        });
    } else {
      this.converterForm.markAllAsTouched();
    }
  }
}
