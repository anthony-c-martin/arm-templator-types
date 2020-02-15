// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-09-01/Microsoft.Authorization.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ManagementLockProperties {
  level: Expressionable<('NotSpecified' | 'CanNotDelete' | 'ReadOnly')>;
  notes?: Expressionable<string>;
}

export namespace locks {
  export function create(name: Expressionable<string>, properties: ManagementLockProperties, location: Expressionable<string>): ResourceDefinition<ManagementLockProperties> {
    return {
      type: 'Microsoft.Authorization/locks',
      apiVersion: '2016-09-01',
      name: name,
      location,
      properties,
    };
  }
}
