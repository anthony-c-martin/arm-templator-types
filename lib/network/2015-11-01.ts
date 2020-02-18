import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export namespace trafficManagerProfiles {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<('global')>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Network/trafficManagerProfiles',
      apiVersion: '2015-11-01',
      name: name,
      location,
      properties,
    };
  }
}