import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<ServerProperties> & AdditionalProps {
    return {
      type: 'Microsoft.AnalysisServices/servers',
      apiVersion: '2017-08-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}