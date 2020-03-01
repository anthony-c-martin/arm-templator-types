import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface RegistryProperties {
  adminUserEnabled?: Expressionable<boolean>;
  storageAccount: Expressionable<StorageAccountProperties>;
}

export interface StorageAccountProperties {
  accessKey: Expressionable<string>;
  name: Expressionable<string>;
}

export namespace registries {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type RegistriesResource = ResourceDefinition<RegistryProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>, tags?: Expressionable<any>): RegistriesResource {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2016-06-27-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}