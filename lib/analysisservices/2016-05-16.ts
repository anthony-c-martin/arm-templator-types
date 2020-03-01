import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export type ServersResource = ResourceDefinition<ServerProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ServersResource {
    return {
      type: 'Microsoft.AnalysisServices/servers',
      apiVersion: '2016-05-16',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}