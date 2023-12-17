export interface Dashboard {
  balance: Balance;
  money_statistics: Moneystatistics;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  date: string;
  name: string;
  status: string;
  type: string;
  amount: number;
}

export interface Moneystatistics {
  total_income: Totalincome;
  total_expense: Totalincome;
  total_investment: Totalincome;
}

export interface Totalincome {
  value: number;
  trend: number;
  trend_color: string;
}

export interface Balance {
  total_balance: number;
  monthly_payment_limit: number;
  payment_done_so_far: number;
  payment_done_percentage: number;
}