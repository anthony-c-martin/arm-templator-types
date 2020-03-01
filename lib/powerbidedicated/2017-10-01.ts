import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Sku {
  name?: Expressionable<('A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6')>;
}

export interface CapacityProperties {
  administration?: Expressionable<any>;
}

export interface administrator {
}

export namespace capacities {
  export interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export type CapacitiesResource = ResourceDefinition<CapacityProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: CapacityProperties, location: Expressionable<string>, sku: Expressionable<Sku>): CapacitiesResource {
    return {
      type: 'Microsoft.PowerBIDedicated/capacities',
      apiVersion: '2017-10-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}