import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ActionGroup {
  groupShortName: Expressionable<string>;
  enabled: Expressionable<(true | false)>;
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
  export function create(name: Expressionable<string>, properties: ActionGroup): ResourceDefinition<ActionGroup> {
    return {
      type: 'Microsoft.Insights/actionGroups',
      apiVersion: '2019-03-01',
      name: [name],
      properties,
    };
  }
}