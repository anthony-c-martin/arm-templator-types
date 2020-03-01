import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ConfigurationStoreProperties {
}

export namespace configurationStores {
  export type ConfigurationStoresResource = ResourceDefinition<ConfigurationStoreProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ConfigurationStoreProperties, location: Expressionable<string>): ConfigurationStoresResource {
    return {
      type: 'Microsoft.AppConfiguration/configurationStores',
      apiVersion: '2019-02-01-preview',
      name: [name],
      location,
      properties,
    };
  }
}