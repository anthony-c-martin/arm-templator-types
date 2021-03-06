import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface CustomerSecret {
  algorithm: Expressionable<('None' | 'RSA1_5' | 'RSA_OAEP' | 'PlainText')>;
  keyIdentifier: Expressionable<string>;
  keyValue: Expressionable<string>;
}

export interface DataStoreProperties {
  customerSecrets?: Expressionable<CustomerSecret[]>;
  dataStoreTypeId: Expressionable<string>;
  extendedProperties?: Expressionable<any>;
  repositoryId?: Expressionable<string>;
  state: Expressionable<('Disabled' | 'Enabled' | 'Supported')>;
}

export interface JobDefinitionProperties {
  customerSecrets?: Expressionable<CustomerSecret[]>;
  dataServiceInput?: Expressionable<any>;
  dataSinkId: Expressionable<string>;
  dataSourceId: Expressionable<string>;
  lastModifiedTime?: Expressionable<string>;
  runLocation?: Expressionable<('none' | 'australiaeast' | 'australiasoutheast' | 'brazilsouth' | 'canadacentral' | 'canadaeast' | 'centralindia' | 'centralus' | 'eastasia' | 'eastus' | 'eastus2' | 'japaneast' | 'japanwest' | 'koreacentral' | 'koreasouth' | 'southeastasia' | 'southcentralus' | 'southindia' | 'northcentralus' | 'northeurope' | 'uksouth' | 'ukwest' | 'westcentralus' | 'westeurope' | 'westindia' | 'westus' | 'westus2')>;
  schedules?: Expressionable<Schedule[]>;
  state: Expressionable<('Disabled' | 'Enabled' | 'Supported')>;
  userConfirmation?: Expressionable<('NotRequired' | 'Required')>;
}

export interface Schedule {
  name?: Expressionable<string>;
  policyList?: Expressionable<string[]>;
}

export interface Sku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
}

export namespace dataManagers {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type DataManagersResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): DataManagersResource {
    return {
      type: 'Microsoft.HybridData/dataManagers',
      apiVersion: '2016-06-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}
export namespace dataManagers {
  export namespace dataServices {
    export namespace jobDefinitions {
      export type JobDefinitionsResource = ResourceDefinition<JobDefinitionProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobDefinitionProperties): JobDefinitionsResource {
        return {
          type: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions',
          apiVersion: '2016-06-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace dataManagers {
  export namespace dataStores {
    export type DataStoresResource = ResourceDefinition<DataStoreProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataStoreProperties): DataStoresResource {
      return {
        type: 'Microsoft.HybridData/dataManagers/dataStores',
        apiVersion: '2016-06-01',
        name: name,
        properties,
      };
    }
  }
}