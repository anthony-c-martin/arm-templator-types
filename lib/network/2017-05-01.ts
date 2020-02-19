import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export namespace trafficManagerProfiles {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<('global')>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/trafficManagerProfiles',
      apiVersion: '2017-05-01',
      name: [name],
      location,
      properties,
    };
  }
}