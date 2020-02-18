import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Authorization {
  principalId: Expressionable<string>;
  roleDefinitionId: Expressionable<string>;
}

export interface Plan {
  name: Expressionable<string>;
  publisher: Expressionable<string>;
  product: Expressionable<string>;
  version: Expressionable<string>;
}

export interface RegistrationAssignmentProperties {
  registrationDefinitionId: Expressionable<string>;
}

export interface RegistrationDefinitionProperties {
  description?: Expressionable<string>;
  authorizations: Expressionable<Authorization[]>;
  registrationDefinitionName?: Expressionable<string>;
  managedByTenantId: Expressionable<string>;
}

export namespace registrationAssignments {
  export function create(name: Expressionable<string>, properties: RegistrationAssignmentProperties): ResourceDefinition<RegistrationAssignmentProperties> {
    return {
      type: 'Microsoft.ManagedServices/registrationAssignments',
      apiVersion: '2019-06-01',
      name: name,
      properties,
    };
  }
}
export namespace registrationDefinitions {
  interface AdditionalProps {
    plan?: Expressionable<Plan>;
  }
  
  export function create(name: Expressionable<string>, properties: RegistrationDefinitionProperties, plan?: Expressionable<Plan>): ResourceDefinition<RegistrationDefinitionProperties> & AdditionalProps {
    return {
      type: 'Microsoft.ManagedServices/registrationDefinitions',
      apiVersion: '2019-06-01',
      name: name,
      plan,
      properties,
    };
  }
}