import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface SqlServerProperties {
  cores?: Expressionable<number>;
  edition?: Expressionable<string>;
  propertyBag?: Expressionable<string>;
  registrationID?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface SqlServerRegistrationProperties {
  propertyBag?: Expressionable<string>;
  resourceGroup?: Expressionable<string>;
  subscriptionId?: Expressionable<string>;
}

export namespace sqlServerRegistrations {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type SqlServerRegistrationsResource = ResourceDefinition<SqlServerRegistrationProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SqlServerRegistrationProperties, location: Expressionable<string>, tags?: Expressionable<any>): SqlServerRegistrationsResource {
    return {
      type: 'Microsoft.AzureData/sqlServerRegistrations',
      apiVersion: '2017-03-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace sqlServerRegistrations {
  export namespace sqlServers {
    export type SqlServersResource = ResourceDefinition<SqlServerProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SqlServerProperties): SqlServersResource {
      return {
        type: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers',
        apiVersion: '2017-03-01-preview',
        name: name,
        properties,
      };
    }
  }
}