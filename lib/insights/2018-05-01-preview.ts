// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-05-01-preview/Microsoft.Insights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ProactiveDetectionConfigurationRule {
  name: Expressionable<string>;
  enabled: Expressionable<boolean>;
  sendEmailsToSubscriptionOwners?: Expressionable<boolean>;
  customEmails?: Expressionable<string[]>;
}

export namespace ProactiveDetectionConfigs {
  export function create(name: Expressionable<string>, properties: ProactiveDetectionConfigurationRule, location: Expressionable<string>): ResourceDefinition<ProactiveDetectionConfigurationRule> {
    return {
      type: 'Microsoft.Insights/ProactiveDetectionConfigs',
      apiVersion: '2018-05-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
