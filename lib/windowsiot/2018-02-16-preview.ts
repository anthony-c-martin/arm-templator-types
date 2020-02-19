import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DeviceServiceProperties {
  adminDomainName?: Expressionable<string>;
  notes?: Expressionable<string>;
  quantity?: Expressionable<number>;
}

export namespace deviceServices {
  export function create(name: Expressionable<string>, properties: DeviceServiceProperties, location?: Expressionable<string>): ResourceDefinition<DeviceServiceProperties> {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2018-02-16-preview',
      name: [name],
      location,
      properties,
    };
  }
}