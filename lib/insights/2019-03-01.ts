// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-03-01/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ActionGroup {
  groupShortName: Expressionable<string>;
  enabled: Expressionable<boolean>;
  emailReceivers?: Expressionable<EmailReceiver[]>;
  smsReceivers?: Expressionable<SmsReceiver[]>;
  webhookReceivers?: Expressionable<WebhookReceiver[]>;
  itsmReceivers?: Expressionable<ItsmReceiver[]>;
  azureAppPushReceivers?: Expressionable<AzureAppPushReceiver[]>;
  automationRunbookReceivers?: Expressionable<AutomationRunbookReceiver[]>;
  voiceReceivers?: Expressionable<VoiceReceiver[]>;
  logicAppReceivers?: Expressionable<LogicAppReceiver[]>;
  azureFunctionReceivers?: Expressionable<AzureFunctionReceiver[]>;
}

export interface EmailReceiver {
  name: Expressionable<string>;
  emailAddress: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface SmsReceiver {
  name: Expressionable<string>;
  countryCode: Expressionable<string>;
  phoneNumber: Expressionable<string>;
}

export interface WebhookReceiver {
  name: Expressionable<string>;
  serviceUri: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface ItsmReceiver {
  name: Expressionable<string>;
  workspaceId: Expressionable<string>;
  connectionId: Expressionable<string>;
  ticketConfiguration: Expressionable<string>;
  region: Expressionable<string>;
}

export interface AzureAppPushReceiver {
  name: Expressionable<string>;
  emailAddress: Expressionable<string>;
}

export interface AutomationRunbookReceiver {
  automationAccountId: Expressionable<string>;
  runbookName: Expressionable<string>;
  webhookResourceId: Expressionable<string>;
  isGlobalRunbook: Expressionable<boolean>;
  name?: Expressionable<string>;
  serviceUri?: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface VoiceReceiver {
  name: Expressionable<string>;
  countryCode: Expressionable<string>;
  phoneNumber: Expressionable<string>;
}

export interface LogicAppReceiver {
  name: Expressionable<string>;
  resourceId: Expressionable<string>;
  callbackUrl: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface AzureFunctionReceiver {
  name: Expressionable<string>;
  functionAppResourceId: Expressionable<string>;
  functionName: Expressionable<string>;
  httpTriggerUrl: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface ArmRoleReceiver {
  name: Expressionable<string>;
  roleId: Expressionable<string>;
  useCommonAlertSchema: Expressionable<boolean>;
}

export interface Action {
  actionGroupId?: Expressionable<string>;
}

export namespace actionGroups {
  export function create(name: Expressionable<string>, properties: ActionGroup, location: Expressionable<string>): ResourceDefinition<ActionGroup> {
    return {
      type: 'Microsoft.Insights/actionGroups',
      apiVersion: '2019-03-01',
      name: name,
      location,
      properties,
    };
  }
}
