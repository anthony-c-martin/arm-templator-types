import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface SearchServiceProperties {
  replicaCount?: Expressionable<number>;
  partitionCount?: Expressionable<(1 | 2 | 3 | 4 | 6 | 12)>;
  hostingMode?: Expressionable<('default' | 'highDensity')>;
}

export interface Sku {
  name?: Expressionable<('free' | 'basic' | 'standard' | 'standard2' | 'standard3')>;
}

export namespace searchServices {
  export interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export type SearchServicesResource = ResourceDefinition<SearchServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SearchServiceProperties, location: Expressionable<string>, sku: Expressionable<Sku>): SearchServicesResource {
    return {
      type: 'Microsoft.Search/searchServices',
      apiVersion: '2015-08-19',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}