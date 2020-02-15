// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-06-01/Microsoft.WindowsIoT.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace deviceServices {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2019-06-01',
      name: name,
      location,
      properties,
    };
  }
}
