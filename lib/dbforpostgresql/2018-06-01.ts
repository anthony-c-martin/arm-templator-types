import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface PrivateEndpointConnectionProperties {
  privateEndpoint?: Expressionable<PrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionStateProperty>;
}

export interface PrivateEndpointProperty {
  id?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionStateProperty {
  description: Expressionable<string>;
  status: Expressionable<string>;
}

export namespace servers {
  export namespace privateEndpointConnections {
    export type PrivateEndpointConnectionsResource = ResourceDefinition<PrivateEndpointConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): PrivateEndpointConnectionsResource {
      return {
        type: 'Microsoft.DBforPostgreSQL/servers/privateEndpointConnections',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}