import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ActionGroupsInformation {
  customEmailSubject?: Expressionable<string>;
  customWebhookPayload?: Expressionable<string>;
  groupIds: Expressionable<string[]>;
}

export interface AlertRuleProperties {
  actionGroups: Expressionable<ActionGroupsInformation>;
  description?: Expressionable<string>;
  detector: Expressionable<Detector>;
  frequency: Expressionable<string>;
  scope: Expressionable<string[]>;
  severity: Expressionable<('Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4')>;
  state: Expressionable<('Enabled' | 'Disabled')>;
  throttling?: Expressionable<ThrottlingInformation>;
}

export interface Detector {
  description?: Expressionable<string>;
  id: Expressionable<string>;
  imagePaths?: Expressionable<string[]>;
  name?: Expressionable<string>;
  parameters?: Expressionable<any>;
  supportedResourceTypes?: Expressionable<string[]>;
}

export interface ThrottlingInformation {
  duration?: Expressionable<string>;
}

export namespace smartDetectorAlertRules {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type SmartDetectorAlertRulesResource = ResourceDefinition<AlertRuleProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AlertRuleProperties, location?: Expressionable<string>, tags?: Expressionable<any>): SmartDetectorAlertRulesResource {
    return {
      type: 'microsoft.alertsManagement/smartDetectorAlertRules',
      apiVersion: '2019-06-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}