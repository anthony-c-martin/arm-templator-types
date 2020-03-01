import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ResourceReference {
  id?: Expressionable<string>;
}

export interface ConnectionProperties {
  displayName?: Expressionable<string>;
  api?: Expressionable<ResourceReference>;
}

export interface CustomApiProperties {
  displayName?: Expressionable<string>;
  description?: Expressionable<string>;
  brandColor?: Expressionable<string>;
  iconUri?: Expressionable<string>;
  backendService?: Expressionable<BackendServiceProperties>;
}

export interface BackendServiceProperties {
  serviceUrl?: Expressionable<string>;
}

export interface ConnectionGatewayProperties {
  description?: Expressionable<string>;
  connectionGatewayInstallation?: Expressionable<ResourceReference>;
}

export namespace connections {
  export type ConnectionsResource = ResourceDefinition<ConnectionProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ConnectionProperties, location?: Expressionable<string>): ConnectionsResource {
    return {
      type: 'Microsoft.Web/connections',
      apiVersion: '2016-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace connectionGateways {
  export type ConnectionGatewaysResource = ResourceDefinition<ConnectionGatewayProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ConnectionGatewayProperties, location?: Expressionable<string>): ConnectionGatewaysResource {
    return {
      type: 'Microsoft.Web/connectionGateways',
      apiVersion: '2016-06-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace customApis {
  export type CustomApisResource = ResourceDefinition<CustomApiProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: CustomApiProperties, location?: Expressionable<string>): CustomApisResource {
    return {
      type: 'Microsoft.Web/customApis',
      apiVersion: '2016-06-01',
      name: [name],
      location,
      properties,
    };
  }
}