import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ActivityLogAlert {
  scopes: Expressionable<string[]>;
  enabled?: Expressionable<(true | false)>;
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
  enabled: Expressionable<(true | false)>;
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
  export function create(name: Expressionable<string>, properties: ActionGroup): ResourceDefinition<ActionGroup> {
    return {
      type: 'Microsoft.Insights/actionGroups',
      apiVersion: '2017-04-01',
      name: name,
      properties,
    };
  }
}
export namespace activityLogAlerts {
  export function create(name: Expressionable<string>, properties: ActivityLogAlert): ResourceDefinition<ActivityLogAlert> {
    return {
      type: 'Microsoft.Insights/activityLogAlerts',
      apiVersion: '2017-04-01',
      name: name,
      properties,
    };
  }
}