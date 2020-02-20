import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
  }
  
  export type ClustersResource = ResourceDefinition<any> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, sku: Expressionable<Sku>): ClustersResource {
    return {
      type: 'Microsoft.Kusto/clusters',
      apiVersion: '2017-09-07-privatepreview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace clusters {
  export namespace databases {
    export type DatabasesResource = ResourceDefinition<DatabaseProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DatabaseProperties): DatabasesResource {
      return {
        type: 'Microsoft.Kusto/clusters/databases',
        apiVersion: '2017-09-07-privatepreview',
        name: name,
        properties,
      };
    }
  }
}