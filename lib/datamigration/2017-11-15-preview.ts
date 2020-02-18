import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ConnectToSource_SqlServer {
}

export interface ConnectToSourceSqlServerTaskInput {
  sourceConnectionInfo: Expressionable<SqlConnectionInfo>;
  checkPermissionsGroup?: Expressionable<('Default' | 'MigrationFromSqlServerToAzureDB')>;
}

export interface ConnectToTarget_SqlDb {
}

export interface ConnectToTargetSqlDbTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
}

export interface DatabaseInfo {
  sourceDatabaseName: Expressionable<string>;
}

export interface DataMigrationServiceProperties {
  virtualSubnetId: Expressionable<string>;
}

export interface GetUserTables_Sql {
}

export interface GetUserTablesSqlTaskInput {
  connectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<string[]>;
}

export interface Migrate_SqlServer_SqlDb {
}

export interface MigrateSqlServerSqlDbDatabaseInput {
  name?: Expressionable<string>;
  targetDatabaseName?: Expressionable<string>;
  makeSourceDbReadOnly?: Expressionable<boolean>;
}

export interface MigrateSqlServerSqlDbTaskInput {
  sourceConnectionInfo: Expressionable<SqlConnectionInfo>;
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<MigrateSqlServerSqlDbDatabaseInput[]>;
  validationOptions?: Expressionable<MigrationValidationOptions>;
}

export interface MigrationValidationOptions {
  enableSchemaValidation?: Expressionable<boolean>;
  enableDataIntegrityValidation?: Expressionable<boolean>;
  enableQueryAnalysisValidation?: Expressionable<boolean>;
}

export interface ProjectProperties {
  sourcePlatform: Expressionable<('SQL' | 'Unknown')>;
  targetPlatform: Expressionable<('SQLDB' | 'Unknown')>;
  sourceConnectionInfo?: Expressionable<Unknown>;
  targetConnectionInfo?: Expressionable<Unknown>;
  databasesInfo?: Expressionable<DatabaseInfo[]>;
}

export interface ServiceSku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  family?: Expressionable<string>;
  size?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SqlConnectionInfo {
}

export interface Unknown {
}

export namespace services {
  interface AdditionalProps {
    kind?: Expressionable<string>;
    sku?: Expressionable<ServiceSku>;
  }
  
  export function create(name: Expressionable<string>, properties: DataMigrationServiceProperties, location: Expressionable<string>, sku?: Expressionable<ServiceSku>, kind?: Expressionable<string>): ResourceDefinition<DataMigrationServiceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.DataMigration/services',
      apiVersion: '2017-11-15-preview',
      name: name,
      location,
      sku,
      kind,
      properties,
    };
  }
}
export namespace services {
  export namespace projects {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ProjectProperties, location: Expressionable<string>): ResourceDefinition<ProjectProperties> {
      return {
        type: 'Microsoft.DataMigration/services/projects',
        apiVersion: '2017-11-15-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace services {
  export namespace projects {
    export namespace tasks {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Unknown): ResourceDefinition<Unknown> {
        return {
          type: 'Microsoft.DataMigration/services/projects/tasks',
          apiVersion: '2017-11-15-preview',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}