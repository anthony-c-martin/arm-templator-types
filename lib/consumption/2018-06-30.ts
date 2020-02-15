// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-06-30/Microsoft.Consumption.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: BudgetProperties, location: Expressionable<string>): ResourceDefinition<BudgetProperties> {
    return {
      type: 'Microsoft.Consumption/budgets',
      apiVersion: '2018-06-30',
      name: name,
      location,
      properties,
    };
  }
}
