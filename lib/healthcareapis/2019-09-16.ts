// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2019-09-16/Microsoft.HealthcareApis.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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

export interface Identity {
  type: Expressionable<('SystemAssigned' | 'None')>;
}

export namespace services {
  export function create(name: Expressionable<string>, properties: ServicesProperties, location: Expressionable<string>): ResourceDefinition<ServicesProperties> {
    return {
      type: 'Microsoft.HealthcareApis/services',
      apiVersion: '2019-09-16',
      name: name,
      location,
      properties,
    };
  }
}
