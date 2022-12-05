
// Section Title
// Orders
export type GlobalState = {
    apiKey?: string;
}
  
export interface OrderResponseObject {
    order: Order;
}
export interface Order {
    id: string;
    location_id: string;
    source: Source;
    service_charges: ServiceCharge[];
    net_amounts: NetAmounts;
    created_at: Date;
    updated_at: Date;
    state: string;
    version: number;
    total_money: TotalMoney3;
    total_tax_money: TotalTaxMoney2;
    total_discount_money: TotalDiscountMoney;
    total_tip_money: TotalTipMoney;
    total_service_charge_money: TotalServiceChargeMoney;
    net_amount_due_money: NetAmountDueMoney;
}

export interface Source {
    name: string;
}

export interface AmountMoney {
    amount: number;
    currency: string;
}

export interface AppliedMoney {
    amount: number;
    currency: string;
}

export interface TotalMoney {
    amount: number;
    currency: string;
}

export interface TotalTaxMoney {
    currency: string;
}

export interface ServiceCharge {
    uid: string;
    name: string;
    amount_money: AmountMoney;
    applied_money: AppliedMoney;
    total_money: TotalMoney;
    total_tax_money: TotalTaxMoney;
    calculation_phase: string;
    type: string;
}

export interface TotalMoney2 {
    amount: number;
    currency: string;
}

export interface TaxMoney {
    currency: string;
}

export interface DiscountMoney {
    currency: string;
}

export interface TipMoney {
    currency: string;
}

export interface ServiceChargeMoney {
    amount: number;
    currency: string;
}

export interface NetAmounts {
    total_money: TotalMoney2;
    tax_money: TaxMoney;
    discount_money: DiscountMoney;
    tip_money: TipMoney;
    service_charge_money: ServiceChargeMoney;
}

export interface TotalMoney3 {
    amount: number;
    currency: string;
}

export interface TotalTaxMoney2 {
    currency: string;
}

export interface TotalDiscountMoney {
    currency: string;
}

export interface TotalTipMoney {
    currency: string;
}

export interface TotalServiceChargeMoney {
    amount: number;
    currency: string;
}

export interface NetAmountDueMoney {
    amount: number;
    currency: string;
}

export type ContextAction = {type: string; data: any}