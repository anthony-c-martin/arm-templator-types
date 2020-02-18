import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace deviceServices {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.WindowsIoT/deviceServices',
      apiVersion: '2019-06-01',
      name: name,
      properties,
    };
  }
}