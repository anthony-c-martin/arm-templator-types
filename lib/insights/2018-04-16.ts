import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Action {
}

export interface AlertingAction {
  aznsAction?: Expressionable<AzNsActionGroup>;
  'odata.type': Expressionable<('Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.AlertingAction')>;
  severity: Expressionable<('0' | '1' | '2' | '3' | '4')>;
  throttlingInMin?: Expressionable<number>;
  trigger: Expressionable<TriggerCondition>;
}

export interface AzNsActionGroup {
  actionGroup?: Expressionable<string[]>;
  customWebhookPayload?: Expressionable<string>;
  emailSubject?: Expressionable<string>;
}

export interface Criteria {
  dimensions?: Expressionable<Dimension[]>;
  metricName: Expressionable<string>;
}

export interface Dimension {
  name: Expressionable<string>;
  operator: Expressionable<('Include')>;
  values: Expressionable<string[]>;
}

export interface LogMetricTrigger {
  metricColumn?: Expressionable<string>;
  metricTriggerType?: Expressionable<('Consecutive' | 'Total')>;
  threshold?: Expressionable<number>;
  thresholdOperator?: Expressionable<('GreaterThan' | 'LessThan' | 'Equal')>;
}

export interface LogSearchRule {
  action: Expressionable<Action>;
  description?: Expressionable<string>;
  enabled?: Expressionable<('true' | 'false')>;
  schedule?: Expressionable<Schedule>;
  source: Expressionable<Source>;
}

export interface LogToMetricAction {
  criteria: Expressionable<Criteria[]>;
  'odata.type': Expressionable<('Microsoft.WindowsAzure.Management.Monitoring.Alerts.Models.Microsoft.AppInsights.Nexus.DataContracts.Resources.ScheduledQueryRules.LogToMetricAction')>;
}

export interface Schedule {
  frequencyInMinutes: Expressionable<number>;
  timeWindowInMinutes: Expressionable<number>;
}

export interface Source {
  authorizedResources?: Expressionable<string[]>;
  dataSourceId: Expressionable<string>;
  query?: Expressionable<string>;
  queryType?: Expressionable<('ResultCount')>;
}

export interface TriggerCondition {
  metricTrigger?: Expressionable<LogMetricTrigger>;
  threshold: Expressionable<number>;
  thresholdOperator: Expressionable<('GreaterThan' | 'LessThan' | 'Equal')>;
}

export namespace scheduledQueryRules {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ScheduledQueryRulesResource = ResourceDefinition<LogSearchRule> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: LogSearchRule, location: Expressionable<string>, tags?: Expressionable<any>): ScheduledQueryRulesResource {
    return {
      type: 'Microsoft.Insights/scheduledQueryRules',
      apiVersion: '2018-04-16',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}