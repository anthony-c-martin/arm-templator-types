import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
  name?: Expressionable<('D1' | 'S1' | 'S2' | 'S4')>;
}

export interface ServerProperties {
  asAdministrators?: Expressionable<any>;
  managedMode?: Expressionable<(0 | 1)>;
}

export interface administrator {
}

export namespace servers {
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
  }
  
  export type ServersResource = ResourceDefinition<ServerProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ServersResource {
    return {
      type: 'Microsoft.AnalysisServices/servers',
      apiVersion: '2016-05-16',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}