// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-09-07-privatepreview/Microsoft.Kusto.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Sku {
}

export interface AzureSku {
  name: Expressionable<('KC8' | 'KC16' | 'KS8' | 'KS16')>;
  tier: Expressionable<('Standard')>;
}

export interface DatabaseProperties {
  softDeletePeriodInDays: Expressionable<number>;
}

export namespace clusters {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Kusto/clusters',
      apiVersion: '2017-09-07-privatepreview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace clusters {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties, location: Expressionable<string>): ResourceDefinition<DatabaseProperties> {
      return {
        type: 'Microsoft.Kusto/clusters/databases',
        apiVersion: '2017-09-07-privatepreview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
