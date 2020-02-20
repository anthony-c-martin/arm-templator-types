import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ControllerProperties {
  targetContainerHostCredentialsBase64: Expressionable<string>;
  targetContainerHostResourceId: Expressionable<string>;
}

export interface Sku {
  name: Expressionable<('S1')>;
  tier?: Expressionable<('Standard')>;
}

export namespace controllers {
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type ControllersResource = ResourceDefinition<ControllerProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ControllerProperties, sku: Expressionable<Sku>, location?: Expressionable<string>, tags?: Expressionable<any>): ControllersResource {
    return {
      type: 'Microsoft.DevSpaces/controllers',
      apiVersion: '2019-04-01',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}