// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-03-01/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ActionGroup {
  automationRunbookReceivers?: Expressionable<AutomationRunbookReceiver[]>;
  azureAppPushReceivers?: Expressionable<AzureAppPushReceiver[]>;
  azureFunctionReceivers?: Expressionable<AzureFunctionReceiver[]>;
  emailReceivers?: Expressionable<EmailReceiver[]>;
  enabled: Expressionable<boolean>;
  groupShortName: Expressionable<string>;
  itsmReceivers?: Expressionable<ItsmReceiver[]>;
  logicAppReceivers?: Expressionable<LogicAppReceiver[]>;
  smsReceivers?: Expressionable<SmsReceiver[]>;
  voiceReceivers?: Expressionable<VoiceReceiver[]>;
  webhookReceivers?: Expressionable<WebhookReceiver[]>;
}

export interface AutomationRunbookReceiver {
  automationAccountId: Expressionable<string>;
  isGlobalRunbook: Expressionable<boolean>;
  name?: Expressionable<string>;
  runbookName: Expressionable<string>;
  serviceUri?: Expressionable<string>;
  webhookResourceId: Expressionable<string>;
}

export interface AzureAppPushReceiver {
  emailAddress: Expressionable<string>;
  name: Expressionable<string>;
}

export interface AzureFunctionReceiver {
  functionAppResourceId: Expressionable<string>;
  functionName: Expressionable<string>;
  httpTriggerUrl: Expressionable<string>;
  name: Expressionable<string>;
}

export interface DynamicMetricCriteria {
  alertSensitivity: Expressionable<('Low' | 'Medium' | 'High')>;
  criterionType: Expressionable<('DynamicThresholdCriterion')>;
  failingPeriods: Expressionable<DynamicThresholdFailingPeriods>;
  ignoreDataBefore?: Expressionable<string>;
  operator: Expressionable<('GreaterThan' | 'LessThan' | 'GreaterOrLessThan')>;
}

export interface DynamicThresholdFailingPeriods {
  minFailingPeriodsToAlert: Expressionable<number>;
  numberOfEvaluationPeriods: Expressionable<number>;
}

export interface EmailReceiver {
  emailAddress: Expressionable<string>;
  name: Expressionable<string>;
}

export interface ItsmReceiver {
  connectionId: Expressionable<string>;
  name: Expressionable<string>;
  region: Expressionable<string>;
  ticketConfiguration: Expressionable<string>;
  workspaceId: Expressionable<string>;
}

export interface LogicAppReceiver {
  callbackUrl: Expressionable<string>;
  name: Expressionable<string>;
  resourceId: Expressionable<string>;
}

export interface MetricAlertAction {
  actionGroupId?: Expressionable<string>;
  webhookProperties?: Expressionable<any>;
}

export interface MetricAlertCriteria {
  additionalProperties?: Expressionable<any>;
}

export interface MetricAlertMultipleResourceMultipleMetricCriteria {
  allOf?: Expressionable<MultiMetricCriteria[]>;
  'odata.type': Expressionable<('Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria')>;
}

export interface MetricAlertProperties {
  actions?: Expressionable<MetricAlertAction[]>;
  autoMitigate?: Expressionable<boolean>;
  criteria: Expressionable<MetricAlertCriteria>;
  description: Expressionable<string>;
  enabled: Expressionable<boolean>;
  evaluationFrequency: Expressionable<string>;
  scopes?: Expressionable<string[]>;
  severity: Expressionable<number>;
  targetResourceRegion?: Expressionable<string>;
  targetResourceType?: Expressionable<string>;
  windowSize: Expressionable<string>;
}

export interface MetricAlertSingleResourceMultipleMetricCriteria {
  allOf?: Expressionable<MetricCriteria[]>;
  'odata.type': Expressionable<('Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria')>;
}

export interface MetricCriteria {
  additionalProperties?: Expressionable<any>;
  criterionType: Expressionable<('StaticThresholdCriterion')>;
  dimensions?: Expressionable<MetricDimension[]>;
  metricName: Expressionable<string>;
  metricNamespace?: Expressionable<string>;
  name: Expressionable<string>;
  operator: Expressionable<('Equals' | 'NotEquals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual')>;
  threshold: Expressionable<number>;
  timeAggregation: Expressionable<('Average' | 'Minimum' | 'Maximum' | 'Total')>;
}

export interface MetricDimension {
  name: Expressionable<string>;
  operator: Expressionable<string>;
  values: Expressionable<string[]>;
}

export interface MultiMetricCriteria {
  additionalProperties?: Expressionable<any>;
  dimensions?: Expressionable<MetricDimension[]>;
  metricName: Expressionable<string>;
  metricNamespace?: Expressionable<string>;
  name: Expressionable<string>;
  timeAggregation: Expressionable<('Average' | 'Minimum' | 'Maximum' | 'Total')>;
}

export interface SmsReceiver {
  countryCode: Expressionable<string>;
  name: Expressionable<string>;
  phoneNumber: Expressionable<string>;
}

export interface VoiceReceiver {
  countryCode: Expressionable<string>;
  name: Expressionable<string>;
  phoneNumber: Expressionable<string>;
}

export interface WebhookReceiver {
  name: Expressionable<string>;
  serviceUri: Expressionable<string>;
}

export namespace actionGroups {
  export function create(name: Expressionable<string>, properties: ActionGroup, location: Expressionable<string>): ResourceDefinition<ActionGroup> {
    return {
      type: 'Microsoft.Insights/actionGroups',
      apiVersion: '2018-03-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace metricAlerts {
  export function create(name: Expressionable<string>, properties: MetricAlertProperties, location: Expressionable<string>): ResourceDefinition<MetricAlertProperties> {
    return {
      type: 'Microsoft.Insights/metricAlerts',
      apiVersion: '2018-03-01',
      name: name,
      location,
      properties,
    };
  }
}
