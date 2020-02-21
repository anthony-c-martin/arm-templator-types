import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Capability {
  name?: Expressionable<string>;
}

export interface CassandraKeyspaceCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<CassandraKeyspaceResource>;
}

export interface CassandraKeyspaceResource {
  id: Expressionable<string>;
}

export interface CassandraPartitionKey {
  name?: Expressionable<string>;
}

export interface CassandraSchema {
  clusterKeys?: Expressionable<ClusterKey[]>;
  columns?: Expressionable<Column[]>;
  partitionKeys?: Expressionable<CassandraPartitionKey[]>;
}

export interface CassandraTableCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<CassandraTableResource>;
}

export interface CassandraTableResource {
  defaultTtl?: Expressionable<number>;
  id: Expressionable<string>;
  schema?: Expressionable<CassandraSchema>;
}

export interface ClusterKey {
  name?: Expressionable<string>;
  orderBy?: Expressionable<string>;
}

export interface Column {
  name?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface CompositePath {
  order?: Expressionable<('Ascending' | 'Descending')>;
  path?: Expressionable<string>;
}

export interface ConflictResolutionPolicy {
  conflictResolutionPath?: Expressionable<string>;
  conflictResolutionProcedure?: Expressionable<string>;
  mode?: Expressionable<('LastWriterWins' | 'Custom')>;
}

export interface ConsistencyPolicy {
  defaultConsistencyLevel: Expressionable<('Eventual' | 'Session' | 'BoundedStaleness' | 'Strong' | 'ConsistentPrefix')>;
  maxIntervalInSeconds?: Expressionable<number>;
  maxStalenessPrefix?: Expressionable<number>;
}

export interface ContainerPartitionKey {
  kind?: Expressionable<('Hash' | 'Range')>;
  paths?: Expressionable<string[]>;
  version?: Expressionable<number>;
}

export interface DatabaseAccountCreateUpdateProperties {
  capabilities?: Expressionable<Capability[]>;
  connectorOffer?: Expressionable<('Small')>;
  consistencyPolicy?: Expressionable<ConsistencyPolicy>;
  databaseAccountOfferType: Expressionable<('Standard')>;
  disableKeyBasedMetadataWriteAccess?: Expressionable<boolean>;
  enableAutomaticFailover?: Expressionable<boolean>;
  enableCassandraConnector?: Expressionable<boolean>;
  enableMultipleWriteLocations?: Expressionable<boolean>;
  ipRangeFilter?: Expressionable<string>;
  isVirtualNetworkFilterEnabled?: Expressionable<boolean>;
  keyVaultKeyUri?: Expressionable<string>;
  locations: Expressionable<Location[]>;
  virtualNetworkRules?: Expressionable<VirtualNetworkRule[]>;
}

export interface ExcludedPath {
  path?: Expressionable<string>;
}

export interface GremlinDatabaseCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<GremlinDatabaseResource>;
}

export interface GremlinDatabaseResource {
  id: Expressionable<string>;
}

export interface GremlinGraphCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<GremlinGraphResource>;
}

export interface GremlinGraphResource {
  conflictResolutionPolicy?: Expressionable<ConflictResolutionPolicy>;
  defaultTtl?: Expressionable<number>;
  id: Expressionable<string>;
  indexingPolicy?: Expressionable<IndexingPolicy>;
  partitionKey?: Expressionable<ContainerPartitionKey>;
  uniqueKeyPolicy?: Expressionable<UniqueKeyPolicy>;
}

export interface IncludedPath {
  indexes?: Expressionable<Indexes[]>;
  path?: Expressionable<string>;
}

export interface Indexes {
  dataType?: Expressionable<('String' | 'Number' | 'Point' | 'Polygon' | 'LineString' | 'MultiPolygon')>;
  kind?: Expressionable<('Hash' | 'Range' | 'Spatial')>;
  precision?: Expressionable<number>;
}

export interface IndexingPolicy {
  automatic?: Expressionable<boolean>;
  compositeIndexes?: Expressionable<CompositePath[][]>;
  excludedPaths?: Expressionable<ExcludedPath[]>;
  includedPaths?: Expressionable<IncludedPath[]>;
  indexingMode?: Expressionable<('Consistent' | 'Lazy' | 'None')>;
  spatialIndexes?: Expressionable<SpatialSpec[]>;
}

export interface Location {
  failoverPriority?: Expressionable<number>;
  isZoneRedundant?: Expressionable<boolean>;
  locationName?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
}

export interface MongoDBCollectionCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<MongoDBCollectionResource>;
}

export interface MongoDBCollectionResource {
  id: Expressionable<string>;
  indexes?: Expressionable<MongoIndex[]>;
  shardKey?: Expressionable<any>;
}

export interface MongoDBDatabaseCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<MongoDBDatabaseResource>;
}

export interface MongoDBDatabaseResource {
  id: Expressionable<string>;
}

export interface MongoIndex {
  key?: Expressionable<MongoIndexKeys>;
  options?: Expressionable<MongoIndexOptions>;
}

export interface MongoIndexKeys {
  keys?: Expressionable<string[]>;
}

export interface MongoIndexOptions {
  expireAfterSeconds?: Expressionable<number>;
  unique?: Expressionable<boolean>;
}

export interface SpatialSpec {
  path?: Expressionable<string>;
  types?: Expressionable<('Point' | 'LineString' | 'Polygon' | 'MultiPolygon')[]>;
}

export interface SqlContainerCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<SqlContainerResource>;
}

export interface SqlContainerResource {
  conflictResolutionPolicy?: Expressionable<ConflictResolutionPolicy>;
  defaultTtl?: Expressionable<number>;
  id: Expressionable<string>;
  indexingPolicy?: Expressionable<IndexingPolicy>;
  partitionKey?: Expressionable<ContainerPartitionKey>;
  uniqueKeyPolicy?: Expressionable<UniqueKeyPolicy>;
}

export interface SqlDatabaseCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<SqlDatabaseResource>;
}

export interface SqlDatabaseResource {
  id: Expressionable<string>;
}

export interface SqlStoredProcedureCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<SqlStoredProcedureResource>;
}

export interface SqlStoredProcedureResource {
  body?: Expressionable<string>;
  id: Expressionable<string>;
}

export interface SqlTriggerCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<SqlTriggerResource>;
}

export interface SqlTriggerResource {
  body?: Expressionable<string>;
  id: Expressionable<string>;
  triggerOperation?: Expressionable<('All' | 'Create' | 'Update' | 'Delete' | 'Replace')>;
  triggerType?: Expressionable<('Pre' | 'Post')>;
}

export interface SqlUserDefinedFunctionCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<SqlUserDefinedFunctionResource>;
}

export interface SqlUserDefinedFunctionResource {
  body?: Expressionable<string>;
  id: Expressionable<string>;
}

export interface TableCreateUpdateProperties {
  options: Expressionable<any>;
  resource: Expressionable<TableResource>;
}

export interface TableResource {
  id: Expressionable<string>;
}

export interface ThroughputSettingsResource {
  throughput: Expressionable<number>;
}

export interface ThroughputSettingsUpdateProperties {
  resource: Expressionable<ThroughputSettingsResource>;
}

export interface UniqueKey {
  paths?: Expressionable<string[]>;
}

export interface UniqueKeyPolicy {
  uniqueKeys?: Expressionable<UniqueKey[]>;
}

export interface VirtualNetworkRule {
  id?: Expressionable<string>;
  ignoreMissingVNetServiceEndpoint?: Expressionable<boolean>;
}

export namespace databaseAccounts {
  export interface AdditionalProps {
    kind?: Expressionable<('GlobalDocumentDB' | 'MongoDB' | 'Parse')>;
    tags?: Expressionable<any>;
  }
  
  export type DatabaseAccountsResource = ResourceDefinition<DatabaseAccountCreateUpdateProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DatabaseAccountCreateUpdateProperties, location?: Expressionable<string>, kind?: Expressionable<('GlobalDocumentDB' | 'MongoDB' | 'Parse')>, tags?: Expressionable<any>): DatabaseAccountsResource {
    return {
      type: 'Microsoft.DocumentDB/databaseAccounts',
      apiVersion: '2019-12-12',
      name: [name],
      location,
      properties,
      additional: {
        kind,
        tags,
      },
    };
  }
}
export namespace databaseAccounts {
  export namespace cassandraKeyspaces {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type CassandraKeyspacesResource = ResourceDefinition<CassandraKeyspaceCreateUpdateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CassandraKeyspaceCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): CassandraKeyspacesResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces',
        apiVersion: '2019-12-12',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace databaseAccounts {
  export namespace cassandraKeyspaces {
    export namespace tables {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type TablesResource = ResourceDefinition<CassandraTableCreateUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CassandraTableCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): TablesResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace cassandraKeyspaces {
    export namespace tables {
      export namespace throughputSettings {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace cassandraKeyspaces {
    export namespace throughputSettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace gremlinDatabases {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type GremlinDatabasesResource = ResourceDefinition<GremlinDatabaseCreateUpdateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GremlinDatabaseCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): GremlinDatabasesResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases',
        apiVersion: '2019-12-12',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace databaseAccounts {
  export namespace gremlinDatabases {
    export namespace graphs {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type GraphsResource = ResourceDefinition<GremlinGraphCreateUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: GremlinGraphCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): GraphsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace gremlinDatabases {
    export namespace graphs {
      export namespace throughputSettings {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace gremlinDatabases {
    export namespace throughputSettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace mongodbDatabases {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type MongodbDatabasesResource = ResourceDefinition<MongoDBDatabaseCreateUpdateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: MongoDBDatabaseCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): MongodbDatabasesResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases',
        apiVersion: '2019-12-12',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace databaseAccounts {
  export namespace mongodbDatabases {
    export namespace collections {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type CollectionsResource = ResourceDefinition<MongoDBCollectionCreateUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: MongoDBCollectionCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): CollectionsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace mongodbDatabases {
    export namespace collections {
      export namespace throughputSettings {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace mongodbDatabases {
    export namespace throughputSettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type SqlDatabasesResource = ResourceDefinition<SqlDatabaseCreateUpdateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SqlDatabaseCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): SqlDatabasesResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases',
        apiVersion: '2019-12-12',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace containers {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ContainersResource = ResourceDefinition<SqlContainerCreateUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SqlContainerCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ContainersResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace containers {
      export namespace storedProcedures {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type StoredProceduresResource = ResourceDefinition<SqlStoredProcedureCreateUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SqlStoredProcedureCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): StoredProceduresResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace containers {
      export namespace throughputSettings {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace containers {
      export namespace triggers {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type TriggersResource = ResourceDefinition<SqlTriggerCreateUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SqlTriggerCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): TriggersResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace containers {
      export namespace userDefinedFunctions {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type UserDefinedFunctionsResource = ResourceDefinition<SqlUserDefinedFunctionCreateUpdateProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SqlUserDefinedFunctionCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): UserDefinedFunctionsResource {
          return {
            type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions',
            apiVersion: '2019-12-12',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace sqlDatabases {
    export namespace throughputSettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace databaseAccounts {
  export namespace tables {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type TablesResource = ResourceDefinition<TableCreateUpdateProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TableCreateUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): TablesResource {
      return {
        type: 'Microsoft.DocumentDB/databaseAccounts/tables',
        apiVersion: '2019-12-12',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace databaseAccounts {
  export namespace tables {
    export namespace throughputSettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type ThroughputSettingsResource = ResourceDefinition<ThroughputSettingsUpdateProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ThroughputSettingsUpdateProperties, location?: Expressionable<string>, tags?: Expressionable<any>): ThroughputSettingsResource {
        return {
          type: 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings',
          apiVersion: '2019-12-12',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}