// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-04-01/Microsoft.DevSpaces.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ControllerProperties {
  targetContainerHostCredentialsBase64: Expressionable<string>;
  targetContainerHostResourceId: Expressionable<string>;
}

export interface Sku {
  name: Expressionable<('S1')>;
  tier?: Expressionable<('Standard')>;
}

export namespace controllers {
  export function create(name: Expressionable<string>, properties: ControllerProperties, location: Expressionable<string>): ResourceDefinition<ControllerProperties> {
    return {
      type: 'Microsoft.DevSpaces/controllers',
      apiVersion: '2019-04-01',
      name: name,
      location,
      properties,
    };
  }
}
