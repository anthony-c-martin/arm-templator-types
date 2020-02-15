// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-10-01/Microsoft.PowerBIDedicated.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
  name?: Expressionable<('A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6')>;
}

export interface CapacityProperties {
  administration?: Expressionable<any>;
}

export interface administrator {
}

export namespace capacities {
  export function create(name: Expressionable<string>, properties: CapacityProperties, location: Expressionable<string>): ResourceDefinition<CapacityProperties> {
    return {
      type: 'Microsoft.PowerBIDedicated/capacities',
      apiVersion: '2017-10-01',
      name: name,
      location,
      properties,
    };
  }
}
