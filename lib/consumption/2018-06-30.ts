import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface BudgetProperties {
  amount: Expressionable<number>;
  category: Expressionable<('Cost' | 'Usage')>;
  filters?: Expressionable<Filters>;
  notifications?: Expressionable<any>;
  timeGrain: Expressionable<('Monthly' | 'Quarterly' | 'Annually')>;
  timePeriod: Expressionable<BudgetTimePeriod>;
}

export interface BudgetTimePeriod {
  endDate?: Expressionable<string>;
  startDate: Expressionable<string>;
}

export interface CostTagProperties {
  key?: Expressionable<string>;
}

export interface CostTagsModel {
  costTags?: Expressionable<CostTagProperties[]>;
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

export namespace budgets {
  export type BudgetsResource = ResourceDefinition<BudgetProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: BudgetProperties): BudgetsResource {
    return {
      type: 'Microsoft.Consumption/budgets',
      apiVersion: '2018-06-30',
      name: [name],
      properties,
    };
  }
}