import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties): ResourceDefinition<PrivateEndpointConnectionProperties> {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections',
        apiVersion: '2019-08-01-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}