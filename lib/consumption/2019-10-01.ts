import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface BudgetProperties {
  amount: Expressionable<number>;
  category: Expressionable<('Cost' | 'Usage')>;
  filters?: Expressionable<Filters>;
  notifications?: Expressionable<any>;
  timeGrain: Expressionable<('Monthly' | 'Quarterly' | 'Annually' | 'BillingMonth' | 'BillingQuarter' | 'BillingAnnual')>;
  timePeriod: Expressionable<BudgetTimePeriod>;
}

export interface BudgetTimePeriod {
  endDate?: Expressionable<string>;
  startDate: Expressionable<string>;
}

export interface Filters {
  meters?: Expressionable<string[]>;
  resourceGroups?: Expressionable<string[]>;
  resources?: Expressionable<string[]>;
  tags?: Expressionable<any>;
}

export interface Notification {
  contactEmails: Expressionable<string[]>;
  contactGroups?: Expressionable<string[]>;
  contactRoles?: Expressionable<string[]>;
  enabled: Expressionable<boolean>;
  operator: Expressionable<('EqualTo' | 'GreaterThan' | 'GreaterThanOrEqualTo')>;
  threshold: Expressionable<number>;
}
