import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AppProperties {
  displayName?: Expressionable<string>;
  subdomain?: Expressionable<string>;
  template?: Expressionable<string>;
}

export interface AppSkuInfo {
  name: Expressionable<('F1' | 'S1' | 'ST0' | 'ST1' | 'ST2')>;
}

export namespace IoTApps {
  export interface AdditionalProps {
    sku: Expressionable<AppSkuInfo>;
    tags?: Expressionable<any>;
  }
  
  export type IoTAppsResource = ResourceDefinition<AppProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AppProperties, location: Expressionable<string>, sku: Expressionable<AppSkuInfo>, tags?: Expressionable<any>): IoTAppsResource {
    return {
      type: 'Microsoft.IoTCentral/IoTApps',
      apiVersion: '2018-09-01',
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