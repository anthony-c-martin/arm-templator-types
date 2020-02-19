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
  interface AdditionalProps {
    sku: Expressionable<IoTSpacesSkuInfo>;
  }
  
  export function create(name: Expressionable<string>, properties: IoTSpacesProperties, location: Expressionable<string>, sku: Expressionable<IoTSpacesSkuInfo>): ResourceDefinition<IoTSpacesProperties> & AdditionalProps {
    return {
      type: 'Microsoft.IoTSpaces/Graph',
      apiVersion: '2017-10-01-preview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}