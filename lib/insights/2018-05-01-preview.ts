import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ProactiveDetectionConfigurationRule {
  name: Expressionable<string>;
  enabled: Expressionable<boolean>;
  sendEmailsToSubscriptionOwners?: Expressionable<boolean>;
  customEmails?: Expressionable<string[]>;
}

export namespace ProactiveDetectionConfigs {
  export type ProactiveDetectionConfigsResource = ResourceDefinition<ProactiveDetectionConfigurationRule>;
  
  export function create(name: Expressionable<string>, properties: ProactiveDetectionConfigurationRule, location: Expressionable<string>): ProactiveDetectionConfigsResource {
    return {
      type: 'Microsoft.Insights/ProactiveDetectionConfigs',
      apiVersion: '2018-05-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}