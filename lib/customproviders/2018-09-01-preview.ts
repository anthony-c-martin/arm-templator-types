import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AssociationProperties {
  targetResourceId?: Expressionable<string>;
}

export interface CustomRPActionRouteDefinition {
  endpoint: Expressionable<string>;
  name: Expressionable<string>;
  routingType?: Expressionable<('Proxy')>;
}

export interface CustomRPManifestProperties {
  actions?: Expressionable<CustomRPActionRouteDefinition[]>;
  resourceTypes?: Expressionable<CustomRPResourceTypeRouteDefinition[]>;
  validations?: Expressionable<CustomRPValidations[]>;
}

export interface CustomRPResourceTypeRouteDefinition {
  endpoint: Expressionable<string>;
  name: Expressionable<string>;
  routingType?: Expressionable<('Proxy' | 'Proxy,Cache')>;
}

export interface CustomRPValidations {
  specification: Expressionable<string>;
  validationType?: Expressionable<('Swagger')>;
}

export namespace resourceProviders {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ResourceProvidersResource = ResourceDefinition<CustomRPManifestProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: CustomRPManifestProperties, location: Expressionable<string>, tags?: Expressionable<any>): ResourceProvidersResource {
    return {
      type: 'Microsoft.CustomProviders/resourceProviders',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}