import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.HybridData/dataManagers',
      apiVersion: '2016-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace dataManagers {
  export namespace dataServices {
    export namespace jobDefinitions {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobDefinitionProperties): ResourceDefinition<JobDefinitionProperties> {
        return {
          type: 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions',
          apiVersion: '2016-06-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace dataManagers {
  export namespace dataStores {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DataStoreProperties): ResourceDefinition<DataStoreProperties> {
      return {
        type: 'Microsoft.HybridData/dataManagers/dataStores',
        apiVersion: '2016-06-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}