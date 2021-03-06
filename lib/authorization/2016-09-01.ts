import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ManagementLockProperties {
  level: Expressionable<('NotSpecified' | 'CanNotDelete' | 'ReadOnly')>;
  notes?: Expressionable<string>;
}

export namespace locks {
  export type LocksResource = ResourceDefinition<ManagementLockProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ManagementLockProperties): LocksResource {
    return {
      type: 'Microsoft.Authorization/locks',
      apiVersion: '2016-09-01',
      name: [name],
      properties,
    };
  }
}