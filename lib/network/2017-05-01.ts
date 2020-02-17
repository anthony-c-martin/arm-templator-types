// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-05-01/Microsoft.Network.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace trafficManagerProfiles {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/trafficManagerProfiles',
      apiVersion: '2017-05-01',
      name: name,
      location,
      properties,
    };
  }
}
