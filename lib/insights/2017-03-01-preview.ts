// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-03-01-preview/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ActivityLogAlert {
  scopes: Expressionable<string[]>;
  enabled?: Expressionable<boolean>;
  condition: Expressionable<ActivityLogAlertAllOfCondition>;
  actions: Expressionable<ActivityLogAlertActionList>;
  description?: Expressionable<string>;
}

export interface ActivityLogAlertActionGroup {
  actionGroupId: Expressionable<string>;
}

export interface ActivityLogAlertActionList {
  actionGroups?: Expressionable<ActivityLogAlertActionGroup[]>;
}

export interface ActivityLogAlertAllOfCondition {
  allOf: Expressionable<ActivityLogAlertLeafCondition[]>;
}

export interface ActivityLogAlertLeafCondition {
  field: Expressionable<string>;
  equals: Expressionable<string>;
}

export interface ActionGroup {
  groupShortName: Expressionable<string>;
  enabled: Expressionable<boolean>;
  emailReceivers?: Expressionable<EmailReceiver[]>;
  smsReceivers?: Expressionable<SmsReceiver[]>;
  webhookReceivers?: Expressionable<WebhookReceiver[]>;
}

export interface EmailReceiver {
  name: Expressionable<string>;
  emailAddress: Expressionable<string>;
}

export interface SmsReceiver {
  name: Expressionable<string>;
  countryCode: Expressionable<string>;
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
      apiVersion: '2017-03-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace activityLogAlerts {
  export function create(name: Expressionable<string>, properties: ActivityLogAlert, location: Expressionable<string>): ResourceDefinition<ActivityLogAlert> {
    return {
      type: 'Microsoft.Insights/activityLogAlerts',
      apiVersion: '2017-03-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
