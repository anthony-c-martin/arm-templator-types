import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface CustomerSubscriptionProperties {
  tenantId?: Expressionable<string>;
}

export interface RegistrationParameterProperties {
  registrationToken: Expressionable<string>;
}

export namespace registrations {
  export type RegistrationsResource = ResourceDefinition<RegistrationParameterProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: RegistrationParameterProperties, location: Expressionable<('global')>): RegistrationsResource {
    return {
      type: 'Microsoft.AzureStack/registrations',
      apiVersion: '2017-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace registrations {
  export namespace customerSubscriptions {
    export type CustomerSubscriptionsResource = ResourceDefinition<CustomerSubscriptionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CustomerSubscriptionProperties, location: Expressionable<('global')>): CustomerSubscriptionsResource {
      return {
        type: 'Microsoft.AzureStack/registrations/customerSubscriptions',
        apiVersion: '2017-06-01',
        name: name,
        location,
        properties,
      };
    }
  }
}