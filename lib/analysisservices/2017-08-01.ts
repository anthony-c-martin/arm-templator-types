import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Sku {
  name?: Expressionable<('D1' | 'B1' | 'B2' | 'S0' | 'S1' | 'S2' | 'S4' | 'S8' | 'S9')>;
  capacity?: Expressionable<number>;
}

export interface ServerProperties {
  asAdministrators?: Expressionable<any>;
  managedMode?: Expressionable<(0 | 1)>;
  backupBlobContainerUri?: Expressionable<string>;
  gatewayDetails?: Expressionable<any>;
  querypoolConnectionMode?: Expressionable<('All' | 'Readonly')>;
  ipV4FirewallSettings?: Expressionable<any>;
  serverMonitorMode?: Expressionable<(0 | 1)>;
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
      apiVersion: '2017-08-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}