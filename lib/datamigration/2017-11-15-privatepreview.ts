import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ConnectionInfo {
  userName?: Expressionable<string>;
  password?: Expressionable<string>;
  type: Expressionable<string>;
}

export interface ConnectToSourceMySqlTaskInput {
  sourceConnectionInfo: Expressionable<MySqlConnectionInfo>;
  checkPermissionsGroup?: Expressionable<('Default' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI' | 'MigrationFromSqlServerToAzureVM' | 'MigrationFromOracleToSQL' | 'MigrationFromOracleToAzureDB' | 'MigrationFromOracleToAzureDW' | 'MigrationFromMySQLToSQL' | 'MigrationFromMySQLToAzureDB')>;
}

export interface ConnectToSourceMySqlTaskProperties {
  input?: Expressionable<ConnectToSourceMySqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface ConnectToSourceOracleTaskInput {
  sourceConnectionInfo: Expressionable<OracleConnectionInfo>;
  checkPermissionsGroup?: Expressionable<('Default' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI' | 'MigrationFromSqlServerToAzureVM' | 'MigrationFromOracleToSQL' | 'MigrationFromOracleToAzureDB' | 'MigrationFromOracleToAzureDW' | 'MigrationFromMySQLToSQL' | 'MigrationFromMySQLToAzureDB')>;
}

export interface ConnectToSourceOracleTaskProperties {
  input?: Expressionable<ConnectToSourceOracleTaskInput>;
  taskType: Expressionable<string>;
}

export interface ConnectToSourceSqlServerTaskInput {
  sourceConnectionInfo: Expressionable<SqlConnectionInfo>;
  checkPermissionsGroup?: Expressionable<('Default' | 'MigrationFromSqlServerToAzureDB' | 'MigrationFromSqlServerToAzureMI' | 'MigrationFromSqlServerToAzureVM' | 'MigrationFromOracleToSQL' | 'MigrationFromOracleToAzureDB' | 'MigrationFromOracleToAzureDW' | 'MigrationFromMySQLToSQL' | 'MigrationFromMySQLToAzureDB')>;
}

export interface ConnectToSourceSqlServerTaskProperties {
  input?: Expressionable<ConnectToSourceSqlServerTaskInput>;
  taskType: Expressionable<string>;
}

export interface ConnectToTargetCloudDbTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
}

export interface ConnectToTargetCloudDbTaskProperties {
  input?: Expressionable<ConnectToTargetCloudDbTaskInput>;
  taskType: Expressionable<string>;
}

export interface ConnectToTargetSqlDbTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
}

export interface ConnectToTargetSqlDbTaskProperties {
  input?: Expressionable<ConnectToTargetSqlDbTaskInput>;
  taskType: Expressionable<string>;
}

export interface ConnectToTargetSqlServerTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
}

export interface ConnectToTargetSqlServerTaskProperties {
  input?: Expressionable<ConnectToTargetSqlServerTaskInput>;
  taskType: Expressionable<string>;
}

export interface DatabaseFileInput {
  id?: Expressionable<string>;
  logicalName?: Expressionable<string>;
  physicalFullName?: Expressionable<string>;
  restoreFullName?: Expressionable<string>;
  fileType?: Expressionable<('Rows' | 'Log' | 'Filestream' | 'NotSupported' | 'Fulltext')>;
}

export interface DatabaseInfo {
  sourceDatabaseName: Expressionable<string>;
}

export interface DataMigrationServiceProperties {
  virtualSubnetId: Expressionable<string>;
}

export interface GetProjectDetailsMySqlSqlTaskProperties {
  input?: Expressionable<GetProjectDetailsNonSqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface GetProjectDetailsNonSqlTaskInput {
  projectName: Expressionable<string>;
  projectLocation: Expressionable<string>;
}

export interface GetProjectDetailsOracleSqlTaskProperties {
  input?: Expressionable<GetProjectDetailsNonSqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface GetUserTablesSqlTaskInput {
  connectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<string[]>;
}

export interface GetUserTablesSqlTaskProperties {
  input?: Expressionable<GetUserTablesSqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface MigrateMySqlSqlTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  targetDatabaseName: Expressionable<string>;
  projectName: Expressionable<string>;
  projectLocation: Expressionable<string>;
  selectedTables: Expressionable<NonSqlDataMigrationTable[]>;
  sourceConnectionInfo: Expressionable<MySqlConnectionInfo>;
}

export interface MigrateMySqlSqlTaskProperties {
  input?: Expressionable<MigrateMySqlSqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface MigrateOracleSqlTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  targetDatabaseName: Expressionable<string>;
  projectName: Expressionable<string>;
  projectLocation: Expressionable<string>;
  selectedTables: Expressionable<NonSqlDataMigrationTable[]>;
  sourceConnectionInfo: Expressionable<OracleConnectionInfo>;
}

export interface MigrateOracleSqlTaskProperties {
  input?: Expressionable<MigrateOracleSqlTaskInput>;
  taskType: Expressionable<string>;
}

export interface MigrateSqlServerCloudDbTaskInput {
  sourceConnectionInfo: Expressionable<SqlConnectionInfo>;
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<MigrateSqlServerSqlServerDatabaseInput[]>;
  backupShareUserName: Expressionable<string>;
  backupSharePassword?: Expressionable<string>;
}

export interface MigrateSqlServerCloudDbTaskProperties {
  input?: Expressionable<MigrateSqlServerCloudDbTaskInput>;
  taskType: Expressionable<string>;
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

export interface MigrateSqlServerSqlDbTaskProperties {
  input?: Expressionable<MigrateSqlServerSqlDbTaskInput>;
  taskType: Expressionable<string>;
}

export interface MigrateSqlServerSqlServerDatabaseInput {
  name?: Expressionable<string>;
  restoreDatabaseName?: Expressionable<string>;
  backupAndRestoreFolder?: Expressionable<string>;
  databaseFiles?: Expressionable<DatabaseFileInput[]>;
}

export interface MigrateSqlServerSqlServerTaskInput {
  sourceConnectionInfo: Expressionable<SqlConnectionInfo>;
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<MigrateSqlServerSqlServerDatabaseInput[]>;
}

export interface MigrateSqlServerSqlServerTaskProperties {
  input?: Expressionable<MigrateSqlServerSqlServerTaskInput>;
  taskType: Expressionable<string>;
}

export interface MigrationValidationOptions {
  enableSchemaValidation?: Expressionable<boolean>;
  enableDataIntegrityValidation?: Expressionable<boolean>;
  enableQueryAnalysisValidation?: Expressionable<boolean>;
}

export interface MySqlConnectionInfo {
  userName?: Expressionable<string>;
  password?: Expressionable<string>;
  serverName: Expressionable<string>;
  port: Expressionable<number>;
  type: Expressionable<string>;
}

export interface NonSqlDataMigrationTable {
  sourceName?: Expressionable<string>;
}

export interface OracleConnectionInfo {
  userName?: Expressionable<string>;
  password?: Expressionable<string>;
  serverName?: Expressionable<string>;
  port?: Expressionable<number>;
  connectionMode?: Expressionable<('ConnectionString' | 'Standard')>;
  instance?: Expressionable<string>;
  customConnectionString?: Expressionable<string>;
  type: Expressionable<string>;
}

export interface ProjectProperties {
  sourcePlatform: Expressionable<('SQL' | 'Access' | 'DB2' | 'MySQL' | 'Oracle' | 'Sybase' | 'Unknown')>;
  targetPlatform: Expressionable<('SQL10' | 'SQL11' | 'SQL12' | 'SQL13' | 'SQL14' | 'SQLDB' | 'SQLDW' | 'SQLMI' | 'SQLVM' | 'Unknown')>;
  sourceConnectionInfo?: Expressionable<ConnectionInfo>;
  targetConnectionInfo?: Expressionable<ConnectionInfo>;
  databasesInfo?: Expressionable<DatabaseInfo[]>;
}

export interface ProjectTaskProperties {
  taskType: Expressionable<string>;
}

export interface ServiceSku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  family?: Expressionable<string>;
  size?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SqlConnectionInfo {
  userName?: Expressionable<string>;
  password?: Expressionable<string>;
  dataSource: Expressionable<string>;
  authentication?: Expressionable<('None' | 'WindowsAuthentication' | 'SqlAuthentication' | 'ActiveDirectoryIntegrated' | 'ActiveDirectoryPassword')>;
  encryptConnection?: Expressionable<boolean>;
  additionalSettings?: Expressionable<string>;
  trustServerCertificate?: Expressionable<boolean>;
  type: Expressionable<string>;
}

export interface ValidateMigrationInputSqlServerCloudDbTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<MigrateSqlServerSqlServerDatabaseInput[]>;
  backupShareUserName: Expressionable<string>;
  backupSharePassword?: Expressionable<string>;
}

export interface ValidateMigrationInputSqlServerCloudDbTaskProperties {
  input?: Expressionable<ValidateMigrationInputSqlServerCloudDbTaskInput>;
  taskType: Expressionable<string>;
}

export interface ValidateMigrationInputSqlServerSqlServerTaskInput {
  targetConnectionInfo: Expressionable<SqlConnectionInfo>;
  selectedDatabases: Expressionable<MigrateSqlServerSqlServerDatabaseInput[]>;
}

export interface ValidateMigrationInputSqlServerSqlServerTaskProperties {
  input?: Expressionable<ValidateMigrationInputSqlServerSqlServerTaskInput>;
  taskType: Expressionable<string>;
}

export namespace services {
  export interface AdditionalProps {
    sku?: Expressionable<ServiceSku>;
    kind?: Expressionable<string>;
  }
  
  export type ServicesResource = ResourceDefinition<DataMigrationServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DataMigrationServiceProperties, location: Expressionable<string>, sku?: Expressionable<ServiceSku>, kind?: Expressionable<string>): ServicesResource {
    return {
      type: 'Microsoft.DataMigration/services',
      apiVersion: '2017-11-15-privatepreview',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        kind,
      },
    };
  }
}
export namespace services {
  export namespace projects {
    export type ProjectsResource = ResourceDefinition<ProjectProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ProjectProperties, location: Expressionable<string>): ProjectsResource {
      return {
        type: 'Microsoft.DataMigration/services/projects',
        apiVersion: '2017-11-15-privatepreview',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace services {
  export namespace projects {
    export namespace tasks {
      export type TasksResource = ResourceDefinition<ProjectTaskProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProjectTaskProperties): TasksResource {
        return {
          type: 'Microsoft.DataMigration/services/projects/tasks',
          apiVersion: '2017-11-15-privatepreview',
          name: name,
          properties,
        };
      }
    }
  }
}