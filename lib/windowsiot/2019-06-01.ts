import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace deviceServices {
  export type DeviceServicesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): DeviceServicesResource {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2019-06-01',
      name: [name],
      properties,
    };
  }
}