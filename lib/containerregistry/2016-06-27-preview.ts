import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface RegistryProperties {
  adminUserEnabled?: Expressionable<boolean>;
  storageAccount: Expressionable<StorageAccountProperties>;
}

export interface StorageAccountProperties {
  accessKey: Expressionable<string>;
  name: Expressionable<string>;
}

export namespace registries {
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>): ResourceDefinition<RegistryProperties> {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2016-06-27-preview',
      name: [name],
      location,
      properties,
    };
  }
}