import { MyBig } from "@/lib/big";

export const toCent = (amount: number) =>
  Number(new MyBig(amount).mul(100).round(2).toFixed());

export const fromCent = (amount: number) =>
  Number(new MyBig(amount).div(100).round(2).toFixed());

export const toCurrencyFromCent = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(fromCent(amount));
