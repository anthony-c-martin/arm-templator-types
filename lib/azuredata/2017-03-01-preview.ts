// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-03-01-preview/Microsoft.AzureData.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: SqlServerRegistrationProperties, location: Expressionable<string>): ResourceDefinition<SqlServerRegistrationProperties> {
    return {
      type: 'Microsoft.AzureData/sqlServerRegistrations',
      apiVersion: '2017-03-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace sqlServerRegistrations {
  export namespace sqlServers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SqlServerProperties, location: Expressionable<string>): ResourceDefinition<SqlServerProperties> {
      return {
        type: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers',
        apiVersion: '2017-03-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
