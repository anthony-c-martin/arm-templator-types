// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-02-16-preview/Microsoft.WindowsIoT.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface DeviceServiceProperties {
  adminDomainName?: Expressionable<string>;
  notes?: Expressionable<string>;
  quantity?: Expressionable<number>;
}

export namespace deviceServices {
  export function create(name: Expressionable<string>, properties: DeviceServiceProperties, location: Expressionable<string>): ResourceDefinition<DeviceServiceProperties> {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2018-02-16-preview',
      name: name,
      location,
      properties,
    };
  }
}
