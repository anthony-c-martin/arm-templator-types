// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-09-01-preview/Microsoft.BareMetal.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface crayServersProperties {
  ipAddress: Expressionable<string>;
  subnetResourceId: Expressionable<string>;
}

export namespace crayServers {
  export function create(name: Expressionable<string>, properties: crayServersProperties, location: Expressionable<string>): ResourceDefinition<crayServersProperties> {
    return {
      type: 'Microsoft.BareMetal/crayServers',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
