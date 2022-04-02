// Historical Data
export interface HistoricalRate {
  success: boolean;
  historical: boolean;
  date: Date;
  timestamp: number;
  base: string;
  rates: object;
}
