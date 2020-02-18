import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: ServerProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<ServerProperties> & AdditionalProps {
    return {
      type: 'Microsoft.AnalysisServices/servers',
      apiVersion: '2016-05-16',
      name: name,
      location,
      sku,
      properties,
    };
  }
}