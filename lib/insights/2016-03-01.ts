import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AlertRule {
  name: Expressionable<string>;
  description?: Expressionable<string>;
  isEnabled: Expressionable<boolean>;
  condition: Expressionable<RuleCondition>;
  actions?: Expressionable<RuleAction[]>;
}

export interface ManagementEventAggregationCondition {
  operator?: Expressionable<('GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual')>;
  threshold?: Expressionable<number>;
  windowSize?: Expressionable<string>;
}

export interface LocationThresholdRuleCondition {
}

export interface ManagementEventRuleCondition {
}

export interface RuleEmailAction {
}

export interface RuleManagementEventDataSource {
}

export interface RuleMetricDataSource {
}

export interface RuleWebhookAction {
}

export interface ThresholdRuleCondition {
}

export interface RuleAction {
}

export interface RuleCondition {
}

export interface RuleDataSource {
}

export interface RuleManagementEventClaimsDataSource {
  emailAddress?: Expressionable<string>;
}

export namespace alertrules {
  export type AlertrulesResource = ResourceDefinition<AlertRule, undefined>;
  
  export function create(name: Expressionable<string>, properties: AlertRule, location: Expressionable<string>): AlertrulesResource {
    return {
      type: 'microsoft.insights/alertrules',
      apiVersion: '2016-03-01',
      name: [name],
      location,
      properties,
    };
  }
}