// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-06-01/Microsoft.AzureStack.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface CustomerSubscriptionProperties {
  tenantId?: Expressionable<string>;
}

export interface RegistrationParameterProperties {
  registrationToken: Expressionable<string>;
}

export namespace registrations {
  export function create(name: Expressionable<string>, properties: RegistrationParameterProperties, location: Expressionable<string>): ResourceDefinition<RegistrationParameterProperties> {
    return {
      type: 'Microsoft.AzureStack/registrations',
      apiVersion: '2017-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace registrations {
  export namespace customerSubscriptions {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CustomerSubscriptionProperties, location: Expressionable<string>): ResourceDefinition<CustomerSubscriptionProperties> {
      return {
        type: 'Microsoft.AzureStack/registrations/customerSubscriptions',
        apiVersion: '2017-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
