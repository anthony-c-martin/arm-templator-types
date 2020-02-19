import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: RegistryPropertiesCreateParameters, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<RegistryPropertiesCreateParameters> & AdditionalProps {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-03-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}