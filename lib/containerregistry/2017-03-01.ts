import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface RegistryPropertiesCreateParameters {
  adminUserEnabled?: Expressionable<boolean>;
  storageAccount: Expressionable<StorageAccountParameters>;
}

export interface Sku {
  name: Expressionable<string>;
}

export interface StorageAccountParameters {
  accessKey: Expressionable<string>;
  name: Expressionable<string>;
}

export namespace registries {
  export function create(name: Expressionable<string>, properties: RegistryPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<RegistryPropertiesCreateParameters> {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-03-01',
      name: name,
      location,
      properties,
    };
  }
}