import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    sku: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type RegistriesResource = ResourceDefinition<RegistryPropertiesCreateParameters, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: RegistryPropertiesCreateParameters, location: Expressionable<string>, sku: Expressionable<Sku>, tags?: Expressionable<any>): RegistriesResource {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-03-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}