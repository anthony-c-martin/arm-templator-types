// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-08-19/Microsoft.Search.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface SearchServiceProperties {
  replicaCount?: Expressionable<number>;
  partitionCount?: Expressionable<number>;
  hostingMode?: Expressionable<('default' | 'highDensity')>;
}

export interface Sku {
  name?: Expressionable<('free' | 'basic' | 'standard' | 'standard2' | 'standard3')>;
}

export namespace searchServices {
  export function create(name: Expressionable<string>, properties: SearchServiceProperties, location: Expressionable<string>): ResourceDefinition<SearchServiceProperties> {
    return {
      type: 'Microsoft.Search/searchServices',
      apiVersion: '2015-08-19',
      name: name,
      location,
      properties,
    };
  }
}
