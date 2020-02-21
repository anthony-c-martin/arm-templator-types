import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface IoTSpacesProperties {
  storageContainer?: Expressionable<StorageContainerProperties>;
}

export interface IoTSpacesSkuInfo {
  name: Expressionable<('F1' | 'S1' | 'S2' | 'S3')>;
}

export interface StorageContainerProperties {
  connectionString?: Expressionable<string>;
  containerName?: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export namespace Graph {
  export interface AdditionalProps {
    sku: Expressionable<IoTSpacesSkuInfo>;
    tags?: Expressionable<any>;
  }
  
  export type GraphResource = ResourceDefinition<IoTSpacesProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: IoTSpacesProperties, location: Expressionable<string>, sku: Expressionable<IoTSpacesSkuInfo>, tags?: Expressionable<any>): GraphResource {
    return {
      type: 'Microsoft.IoTSpaces/Graph',
      apiVersion: '2017-10-01-preview',
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