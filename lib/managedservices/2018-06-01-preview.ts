import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export type RegistrationAssignmentsResource = ResourceDefinition<RegistrationAssignmentProperties>;
  
  export function create(name: Expressionable<string>, properties: RegistrationAssignmentProperties): RegistrationAssignmentsResource {
    return {
      type: 'Microsoft.ManagedServices/registrationAssignments',
      apiVersion: '2018-06-01-preview',
      name: [name],
      properties,
    };
  }
}
export namespace registrationDefinitions {
  export interface AddedResourceProps {
    plan?: Expressionable<Plan>;
  }
  
  export type RegistrationDefinitionsResource = ResourceDefinition<RegistrationDefinitionProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RegistrationDefinitionProperties, plan?: Expressionable<Plan>): RegistrationDefinitionsResource {
    return {
      type: 'Microsoft.ManagedServices/registrationDefinitions',
      apiVersion: '2018-06-01-preview',
      name: [name],
      plan,
      properties,
    };
  }
}