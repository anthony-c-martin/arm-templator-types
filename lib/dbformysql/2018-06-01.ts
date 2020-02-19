import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): ResourceDefinition<PrivateEndpointConnectionProperties> {
      return {
        type: 'Microsoft.DBforMySQL/servers/privateEndpointConnections',
        apiVersion: '2018-06-01',
        name: name,
        properties,
      };
    }
  }
}