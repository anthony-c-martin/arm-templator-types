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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: ControllerProperties, sku: Expressionable<Sku>, location?: Expressionable<string>): ResourceDefinition<ControllerProperties> & AdditionalProps {
    return {
      type: 'Microsoft.DevSpaces/controllers',
      apiVersion: '2019-04-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}