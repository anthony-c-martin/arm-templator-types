// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-02-01-preview/Microsoft.AppConfiguration.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ConfigurationStoreProperties {
}

export namespace configurationStores {
  export function create(name: Expressionable<string>, properties: ConfigurationStoreProperties, location: Expressionable<string>): ResourceDefinition<ConfigurationStoreProperties> {
    return {
      type: 'Microsoft.AppConfiguration/configurationStores',
      apiVersion: '2019-02-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
