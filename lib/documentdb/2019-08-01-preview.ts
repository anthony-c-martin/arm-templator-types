import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface PrivateEndpointConnectionProperties {
  privateEndpoint?: Expressionable<PrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionStateProperty>;
}

export interface PrivateEndpointProperty {
  id?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionStateProperty {
  description?: Expressionable<string>;
  status?: Expressionable<string>;
}

export namespace databaseAccounts {
  export namespace privateEndpointConnections {
    export type PrivateEndpointConnectionsResource = ResourceDefinition<PrivateEndpointConnectionProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): PrivateEndpointConnectionsResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections',
        apiVersion: '2019-08-01-preview',
        name: name,
        properties,
      };
    }
  }
}