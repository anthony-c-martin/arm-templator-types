import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ManagementLockProperties {
  level: Expressionable<('NotSpecified' | 'CanNotDelete' | 'ReadOnly')>;
  notes?: Expressionable<string>;
}

export namespace locks {
  export type LocksResource = ResourceDefinition<ManagementLockProperties>;
  
  export function create(name: Expressionable<string>, properties: ManagementLockProperties): LocksResource {
    return {
      type: 'Microsoft.Authorization/locks',
      apiVersion: '2016-09-01',
      name: [name],
      properties,
    };
  }
}