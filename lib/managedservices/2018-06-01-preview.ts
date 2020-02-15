// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-06-01-preview/Microsoft.ManagedServices.json'
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
  export function create(name: Expressionable<string>, properties: RegistrationAssignmentProperties, location: Expressionable<string>): ResourceDefinition<RegistrationAssignmentProperties> {
    return {
      type: 'Microsoft.ManagedServices/registrationAssignments',
      apiVersion: '2018-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace registrationDefinitions {
  export function create(name: Expressionable<string>, properties: RegistrationDefinitionProperties, location: Expressionable<string>): ResourceDefinition<RegistrationDefinitionProperties> {
    return {
      type: 'Microsoft.ManagedServices/registrationDefinitions',
      apiVersion: '2018-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
