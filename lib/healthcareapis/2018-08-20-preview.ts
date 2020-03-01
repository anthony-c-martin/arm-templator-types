import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ServiceAccessPolicyEntry {
  objectId: Expressionable<string>;
}

export interface ServiceCosmosDbConfigurationInfo {
  offerThroughput?: Expressionable<number>;
}

export interface ServiceAuthenticationConfigurationInfo {
  authority?: Expressionable<string>;
  audience?: Expressionable<string>;
  smartProxyEnabled?: Expressionable<boolean>;
}

export interface ServiceCorsConfigurationInfo {
  origins?: Expressionable<string[]>;
  headers?: Expressionable<string[]>;
  methods?: Expressionable<('DELETE' | 'GET' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT')[]>;
  maxAge?: Expressionable<number>;
  allowCredentials?: Expressionable<boolean>;
}

export interface ServicesProperties {
  accessPolicies: Expressionable<ServiceAccessPolicyEntry[]>;
  cosmosDbConfiguration?: Expressionable<ServiceCosmosDbConfigurationInfo>;
  authenticationConfiguration?: Expressionable<ServiceAuthenticationConfigurationInfo>;
  corsConfiguration?: Expressionable<ServiceCorsConfigurationInfo>;
}

export namespace services {
  export interface AdditionalProps {
    kind: Expressionable<('fhir' | 'fhir-Stu3' | 'fhir-R4')>;
  }
  
  export type ServicesResource = ResourceDefinition<ServicesProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ServicesProperties, location: Expressionable<string>, kind: Expressionable<('fhir' | 'fhir-Stu3' | 'fhir-R4')>): ServicesResource {
    return {
      type: 'Microsoft.HealthcareApis/services',
      apiVersion: '2018-08-20-preview',
      name: [name],
      location,
      properties,
      additional: {
        kind,
      },
    };
  }
}