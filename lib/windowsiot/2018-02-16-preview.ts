import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface DeviceServiceProperties {
  adminDomainName?: Expressionable<string>;
  notes?: Expressionable<string>;
  quantity?: Expressionable<number>;
}

export namespace deviceServices {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type DeviceServicesResource = ResourceDefinition<DeviceServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DeviceServiceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): DeviceServicesResource {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2018-02-16-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}