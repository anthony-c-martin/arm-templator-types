import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Permission {
  actions?: Expressionable<string[]>;
  notActions?: Expressionable<string[]>;
}

export interface RoleAssignmentProperties {
  roleDefinitionId?: Expressionable<string>;
  principalId?: Expressionable<string>;
}

export interface RoleDefinitionProperties {
  roleName?: Expressionable<string>;
  description?: Expressionable<string>;
  type?: Expressionable<string>;
  permissions?: Expressionable<Permission[]>;
  assignableScopes?: Expressionable<string[]>;
}

export namespace roleAssignments {
  export function create(name: Expressionable<string>, properties: RoleAssignmentProperties): ResourceDefinition<RoleAssignmentProperties> {
    return {
      type: 'Microsoft.Authorization/roleAssignments',
      apiVersion: '2017-09-01',
      name: name,
      properties,
    };
  }
}
export namespace roleDefinitions {
  export function create(name: Expressionable<string>, properties: RoleDefinitionProperties): ResourceDefinition<RoleDefinitionProperties> {
    return {
      type: 'Microsoft.Authorization/roleDefinitions',
      apiVersion: '2017-09-01',
      name: name,
      properties,
    };
  }
}