import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AccountProperties {
}

export interface ADLSGen1FileDataSet {
  kind: Expressionable<('AdlsGen1File')>;
  properties: Expressionable<ADLSGen1FileProperties>;
}

export interface ADLSGen1FileProperties {
  accountName: Expressionable<string>;
  fileName: Expressionable<string>;
  folderPath: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen1FolderDataSet {
  kind: Expressionable<('AdlsGen1Folder')>;
  properties: Expressionable<ADLSGen1FolderProperties>;
}

export interface ADLSGen1FolderProperties {
  accountName: Expressionable<string>;
  folderPath: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FileDataSet {
  kind: Expressionable<('AdlsGen2File')>;
  properties: Expressionable<ADLSGen2FileProperties>;
}

export interface ADLSGen2FileDataSetMapping {
  kind: Expressionable<('AdlsGen2File')>;
  properties: Expressionable<ADLSGen2FileDataSetMappingProperties>;
}

export interface ADLSGen2FileDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  filePath: Expressionable<string>;
  fileSystem: Expressionable<string>;
  outputType?: Expressionable<('Csv' | 'Parquet')>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FileProperties {
  filePath: Expressionable<string>;
  fileSystem: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FileSystemDataSet {
  kind: Expressionable<('AdlsGen2FileSystem')>;
  properties: Expressionable<ADLSGen2FileSystemProperties>;
}

export interface ADLSGen2FileSystemDataSetMapping {
  kind: Expressionable<('AdlsGen2FileSystem')>;
  properties: Expressionable<ADLSGen2FileSystemDataSetMappingProperties>;
}

export interface ADLSGen2FileSystemDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  fileSystem: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FileSystemProperties {
  fileSystem: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FolderDataSet {
  kind: Expressionable<('AdlsGen2Folder')>;
  properties: Expressionable<ADLSGen2FolderProperties>;
}

export interface ADLSGen2FolderDataSetMapping {
  kind: Expressionable<('AdlsGen2Folder')>;
  properties: Expressionable<ADLSGen2FolderDataSetMappingProperties>;
}

export interface ADLSGen2FolderDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  fileSystem: Expressionable<string>;
  folderPath: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface ADLSGen2FolderProperties {
  fileSystem: Expressionable<string>;
  folderPath: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobContainerDataSet {
  kind: Expressionable<('Container')>;
  properties: Expressionable<BlobContainerProperties>;
}

export interface BlobContainerDataSetMapping {
  kind: Expressionable<('Container')>;
  properties: Expressionable<BlobContainerMappingProperties>;
}

export interface BlobContainerMappingProperties {
  containerName: Expressionable<string>;
  dataSetId: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobContainerProperties {
  containerName: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobDataSet {
  kind: Expressionable<('Blob')>;
  properties: Expressionable<BlobProperties>;
}

export interface BlobDataSetMapping {
  kind: Expressionable<('Blob')>;
  properties: Expressionable<BlobMappingProperties>;
}

export interface BlobFolderDataSet {
  kind: Expressionable<('BlobFolder')>;
  properties: Expressionable<BlobFolderProperties>;
}

export interface BlobFolderDataSetMapping {
  kind: Expressionable<('BlobFolder')>;
  properties: Expressionable<BlobFolderMappingProperties>;
}

export interface BlobFolderMappingProperties {
  containerName: Expressionable<string>;
  dataSetId: Expressionable<string>;
  prefix: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobFolderProperties {
  containerName: Expressionable<string>;
  prefix: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobMappingProperties {
  containerName: Expressionable<string>;
  dataSetId: Expressionable<string>;
  filePath: Expressionable<string>;
  outputType?: Expressionable<('Csv' | 'Parquet')>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface BlobProperties {
  containerName: Expressionable<string>;
  filePath: Expressionable<string>;
  resourceGroup: Expressionable<string>;
  storageAccountName: Expressionable<string>;
  subscriptionId: Expressionable<string>;
}

export interface Identity {
  type?: Expressionable<('SystemAssigned')>;
}

export interface InvitationProperties {
  targetActiveDirectoryId?: Expressionable<string>;
  targetEmail?: Expressionable<string>;
  targetObjectId?: Expressionable<string>;
}

export interface KustoClusterDataSet {
  kind: Expressionable<('KustoCluster')>;
  properties: Expressionable<KustoClusterDataSetProperties>;
}

export interface KustoClusterDataSetMapping {
  kind: Expressionable<('KustoCluster')>;
  properties: Expressionable<KustoClusterDataSetMappingProperties>;
}

export interface KustoClusterDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  kustoClusterResourceId: Expressionable<string>;
}

export interface KustoClusterDataSetProperties {
  kustoClusterResourceId: Expressionable<string>;
}

export interface KustoDatabaseDataSet {
  kind: Expressionable<('KustoDatabase')>;
  properties: Expressionable<KustoDatabaseDataSetProperties>;
}

export interface KustoDatabaseDataSetMapping {
  kind: Expressionable<('KustoDatabase')>;
  properties: Expressionable<KustoDatabaseDataSetMappingProperties>;
}

export interface KustoDatabaseDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  kustoClusterResourceId: Expressionable<string>;
}

export interface KustoDatabaseDataSetProperties {
  kustoDatabaseResourceId: Expressionable<string>;
}

export interface ScheduledSynchronizationSetting {
  kind: Expressionable<('ScheduleBased')>;
  properties: Expressionable<ScheduledSynchronizationSettingProperties>;
}

export interface ScheduledSynchronizationSettingProperties {
  recurrenceInterval: Expressionable<('Hour' | 'Day')>;
  synchronizationTime: Expressionable<string>;
}

export interface ScheduledTrigger {
  kind: Expressionable<('ScheduleBased')>;
  properties: Expressionable<ScheduledTriggerProperties>;
}

export interface ScheduledTriggerProperties {
  recurrenceInterval: Expressionable<('Hour' | 'Day')>;
  synchronizationMode?: Expressionable<('Incremental' | 'FullSync')>;
  synchronizationTime: Expressionable<string>;
}

export interface ShareProperties {
  description?: Expressionable<string>;
  shareKind?: Expressionable<('CopyBased' | 'InPlace')>;
  terms?: Expressionable<string>;
}

export interface ShareSubscriptionProperties {
  invitationId: Expressionable<string>;
  sourceShareLocation: Expressionable<string>;
}

export interface SqlDBTableDataSet {
  kind: Expressionable<('SqlDBTable')>;
  properties?: Expressionable<SqlDBTableProperties>;
}

export interface SqlDBTableDataSetMapping {
  kind: Expressionable<('SqlDBTable')>;
  properties: Expressionable<SqlDBTableDataSetMappingProperties>;
}

export interface SqlDBTableDataSetMappingProperties {
  databaseName: Expressionable<string>;
  dataSetId: Expressionable<string>;
  schemaName: Expressionable<string>;
  sqlServerResourceId: Expressionable<string>;
  tableName: Expressionable<string>;
}

export interface SqlDBTableProperties {
  databaseName: Expressionable<string>;
  schemaName: Expressionable<string>;
  sqlServerResourceId: Expressionable<string>;
  tableName: Expressionable<string>;
}

export interface SqlDWTableDataSet {
  kind: Expressionable<('SqlDWTable')>;
  properties?: Expressionable<SqlDWTableProperties>;
}

export interface SqlDWTableDataSetMapping {
  kind: Expressionable<('SqlDWTable')>;
  properties: Expressionable<SqlDWTableDataSetMappingProperties>;
}

export interface SqlDWTableDataSetMappingProperties {
  dataSetId: Expressionable<string>;
  dataWarehouseName: Expressionable<string>;
  schemaName: Expressionable<string>;
  sqlServerResourceId: Expressionable<string>;
  tableName: Expressionable<string>;
}

export interface SqlDWTableProperties {
  dataWarehouseName: Expressionable<string>;
  schemaName: Expressionable<string>;
  sqlServerResourceId: Expressionable<string>;
  tableName: Expressionable<string>;
}

export namespace accounts {
  export interface AddedResourceProps {
    identity: Expressionable<Identity>;
    tags?: Expressionable<any>;
  }
  
  export type AccountsResource = ResourceDefinition<AccountProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: AccountProperties, identity: Expressionable<Identity>, location?: Expressionable<string>, tags?: Expressionable<any>): AccountsResource {
    return {
      type: 'Microsoft.DataShare/accounts',
      apiVersion: '2019-11-01',
      name: [name],
      location,
      identity,
      tags,
      properties,
    };
  }
}
export namespace accounts {
  export namespace shares {
    export type SharesResource = ResourceDefinition<ShareProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ShareProperties): SharesResource {
      return {
        type: 'Microsoft.DataShare/accounts/shares',
        apiVersion: '2019-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace shareSubscriptions {
    export type ShareSubscriptionsResource = ResourceDefinition<ShareSubscriptionProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ShareSubscriptionProperties): ShareSubscriptionsResource {
      return {
        type: 'Microsoft.DataShare/accounts/shareSubscriptions',
        apiVersion: '2019-11-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace accounts {
  export namespace shareSubscriptions {
    export namespace dataSetMappings {
      export type DataSetMappingsResource = ResourceDefinition<BlobMappingProperties | BlobFolderMappingProperties | BlobContainerMappingProperties | ADLSGen2FileDataSetMappingProperties | ADLSGen2FolderDataSetMappingProperties | ADLSGen2FileSystemDataSetMappingProperties | KustoClusterDataSetMappingProperties | KustoDatabaseDataSetMappingProperties | SqlDWTableDataSetMappingProperties | SqlDBTableDataSetMappingProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BlobMappingProperties | BlobFolderMappingProperties | BlobContainerMappingProperties | ADLSGen2FileDataSetMappingProperties | ADLSGen2FolderDataSetMappingProperties | ADLSGen2FileSystemDataSetMappingProperties | KustoClusterDataSetMappingProperties | KustoDatabaseDataSetMappingProperties | SqlDWTableDataSetMappingProperties | SqlDBTableDataSetMappingProperties): DataSetMappingsResource {
        return {
          type: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings',
          apiVersion: '2019-11-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace accounts {
  export namespace shareSubscriptions {
    export namespace triggers {
      export type TriggersResource = ResourceDefinition<ScheduledTriggerProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ScheduledTriggerProperties): TriggersResource {
        return {
          type: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers',
          apiVersion: '2019-11-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace accounts {
  export namespace shares {
    export namespace dataSets {
      export type DataSetsResource = ResourceDefinition<BlobProperties | BlobFolderProperties | BlobContainerProperties | ADLSGen2FileProperties | ADLSGen2FolderProperties | ADLSGen2FileSystemProperties | ADLSGen1FolderProperties | ADLSGen1FileProperties | KustoClusterDataSetProperties | KustoDatabaseDataSetProperties | SqlDWTableProperties | SqlDBTableProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: BlobProperties | BlobFolderProperties | BlobContainerProperties | ADLSGen2FileProperties | ADLSGen2FolderProperties | ADLSGen2FileSystemProperties | ADLSGen1FolderProperties | ADLSGen1FileProperties | KustoClusterDataSetProperties | KustoDatabaseDataSetProperties | SqlDWTableProperties | SqlDBTableProperties): DataSetsResource {
        return {
          type: 'Microsoft.DataShare/accounts/shares/dataSets',
          apiVersion: '2019-11-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace accounts {
  export namespace shares {
    export namespace invitations {
      export type InvitationsResource = ResourceDefinition<InvitationProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: InvitationProperties): InvitationsResource {
        return {
          type: 'Microsoft.DataShare/accounts/shares/invitations',
          apiVersion: '2019-11-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace accounts {
  export namespace shares {
    export namespace synchronizationSettings {
      export type SynchronizationSettingsResource = ResourceDefinition<ScheduledSynchronizationSettingProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ScheduledSynchronizationSettingProperties): SynchronizationSettingsResource {
        return {
          type: 'Microsoft.DataShare/accounts/shares/synchronizationSettings',
          apiVersion: '2019-11-01',
          name: name,
          properties,
        };
      }
    }
  }
}