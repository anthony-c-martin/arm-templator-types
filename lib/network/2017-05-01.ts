import { Expressionable, ResourceDefinition } from 'arm-templator';

export namespace trafficManagerProfiles {
  export type TrafficManagerProfilesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<('global')>): TrafficManagerProfilesResource {
    return {
      type: 'Microsoft.Network/trafficManagerProfiles',
      apiVersion: '2017-05-01',
      name: [name],
      location,
      properties,
    };
  }
}