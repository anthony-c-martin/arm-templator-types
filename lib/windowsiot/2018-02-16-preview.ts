import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DeviceServiceProperties {
  adminDomainName?: Expressionable<string>;
  notes?: Expressionable<string>;
  quantity?: Expressionable<number>;
}

export namespace deviceServices {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type DeviceServicesResource = ResourceDefinition<DeviceServiceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: DeviceServiceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): DeviceServicesResource {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2018-02-16-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}