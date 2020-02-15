// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2016-06-27-preview/Microsoft.ContainerRegistry.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
      name: name,
      location,
      properties,
    };
  }
}
