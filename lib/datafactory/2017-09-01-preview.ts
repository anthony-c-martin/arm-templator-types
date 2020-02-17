// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-09-01-preview/Microsoft.DataFactory.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Activity {
  additionalProperties?: Expressionable<any>;
  dependsOn?: Expressionable<ActivityDependency[]>;
  description?: Expressionable<string>;
  name: Expressionable<string>;
}

export interface ActivityDependency {
  activity: Expressionable<string>;
  additionalProperties?: Expressionable<any>;
  dependencyConditions: Expressionable<('Succeeded' | 'Failed' | 'Skipped' | 'Completed')[]>;
}

export interface ActivityPolicy {
  additionalProperties?: Expressionable<any>;
  retry?: Expressionable<any>;
  retryIntervalInSeconds?: Expressionable<number>;
  secureOutput?: Expressionable<boolean>;
  timeout?: Expressionable<any>;
}

export interface AmazonMWSLinkedService {
  type: Expressionable<('AmazonMWS')>;
  typeProperties: Expressionable<AmazonMWSLinkedServiceTypeProperties>;
}

export interface AmazonMWSLinkedServiceTypeProperties {
  accessKeyId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  marketplaceID: Expressionable<any>;
  mwsAuthToken?: Expressionable<SecretBase>;
  secretKey?: Expressionable<SecretBase>;
  sellerID: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface AmazonMWSObjectDataset {
  type: Expressionable<('AmazonMWSObject')>;
}

export interface AmazonMWSSource {
  query?: Expressionable<any>;
  type: Expressionable<('AmazonMWSSource')>;
}

export interface AmazonRedshiftLinkedService {
  type: Expressionable<('AmazonRedshift')>;
  typeProperties: Expressionable<AmazonRedshiftLinkedServiceTypeProperties>;
}

export interface AmazonRedshiftLinkedServiceTypeProperties {
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface AmazonRedshiftSource {
  query?: Expressionable<any>;
  redshiftUnloadSettings?: Expressionable<RedshiftUnloadSettings>;
  type: Expressionable<('AmazonRedshiftSource')>;
}

export interface AmazonS3Dataset {
  type: Expressionable<('AmazonS3Object')>;
  typeProperties: Expressionable<AmazonS3DatasetTypeProperties>;
}

export interface AmazonS3DatasetTypeProperties {
  bucketName: Expressionable<any>;
  compression?: Expressionable<DatasetCompression>;
  format?: Expressionable<DatasetStorageFormat>;
  key?: Expressionable<any>;
  prefix?: Expressionable<any>;
  version?: Expressionable<any>;
}

export interface AmazonS3LinkedService {
  type: Expressionable<('AmazonS3')>;
  typeProperties: Expressionable<AmazonS3LinkedServiceTypeProperties>;
}

export interface AmazonS3LinkedServiceTypeProperties {
  accessKeyId?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  secretAccessKey?: Expressionable<SecretBase>;
}

export interface AvroFormat {
  type: Expressionable<('AvroFormat')>;
}

export interface AzureBatchLinkedService {
  type: Expressionable<('AzureBatch')>;
  typeProperties: Expressionable<AzureBatchLinkedServiceTypeProperties>;
}

export interface AzureBatchLinkedServiceTypeProperties {
  accessKey?: Expressionable<SecretBase>;
  accountName: Expressionable<any>;
  batchUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  poolName: Expressionable<any>;
}

export interface AzureBlobDataset {
  type: Expressionable<('AzureBlob')>;
  typeProperties: Expressionable<AzureBlobDatasetTypeProperties>;
}

export interface AzureBlobDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
  tableRootLocation?: Expressionable<any>;
}

export interface AzureDatabricksLinkedService {
  type: Expressionable<('AzureDatabricks')>;
  typeProperties: Expressionable<AzureDatabricksLinkedServiceTypeProperties>;
}

export interface AzureDatabricksLinkedServiceTypeProperties {
  accessToken: Expressionable<SecretBase>;
  domain: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  existingClusterId?: Expressionable<any>;
  newClusterNodeType?: Expressionable<any>;
  newClusterNumOfWorker?: Expressionable<any>;
  newClusterSparkConf?: Expressionable<any>;
  newClusterVersion?: Expressionable<any>;
}

export interface AzureDataLakeAnalyticsLinkedService {
  type: Expressionable<('AzureDataLakeAnalytics')>;
  typeProperties: Expressionable<AzureDataLakeAnalyticsLinkedServiceTypeProperties>;
}

export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {
  accountName: Expressionable<any>;
  dataLakeAnalyticsUri?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  resourceGroupName?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  subscriptionId?: Expressionable<any>;
  tenant: Expressionable<any>;
}

export interface AzureDataLakeStoreDataset {
  type: Expressionable<('AzureDataLakeStoreFile')>;
  typeProperties: Expressionable<AzureDataLakeStoreDatasetTypeProperties>;
}

export interface AzureDataLakeStoreDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileName?: Expressionable<any>;
  folderPath: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
}

export interface AzureDataLakeStoreLinkedService {
  type: Expressionable<('AzureDataLakeStore')>;
  typeProperties: Expressionable<AzureDataLakeStoreLinkedServiceTypeProperties>;
}

export interface AzureDataLakeStoreLinkedServiceTypeProperties {
  accountName?: Expressionable<any>;
  dataLakeStoreUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  resourceGroupName?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  subscriptionId?: Expressionable<any>;
  tenant?: Expressionable<any>;
}

export interface AzureDataLakeStoreSink {
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('AzureDataLakeStoreSink')>;
}

export interface AzureDataLakeStoreSource {
  recursive?: Expressionable<any>;
  type: Expressionable<('AzureDataLakeStoreSource')>;
}

export interface AzureKeyVaultLinkedService {
  type: Expressionable<('AzureKeyVault')>;
  typeProperties: Expressionable<AzureKeyVaultLinkedServiceTypeProperties>;
}

export interface AzureKeyVaultLinkedServiceTypeProperties {
  baseUrl: Expressionable<any>;
}

export interface AzureKeyVaultSecretReference {
  secretName: Expressionable<any>;
  secretVersion?: Expressionable<any>;
  store: Expressionable<LinkedServiceReference>;
  type: Expressionable<('AzureKeyVaultSecret')>;
}

export interface AzureMLBatchExecutionActivity {
  type: Expressionable<('AzureMLBatchExecution')>;
  typeProperties: Expressionable<AzureMLBatchExecutionActivityTypeProperties>;
}

export interface AzureMLBatchExecutionActivityTypeProperties {
  globalParameters?: Expressionable<any>;
  webServiceInputs?: Expressionable<any>;
  webServiceOutputs?: Expressionable<any>;
}

export interface AzureMLLinkedService {
  type: Expressionable<('AzureML')>;
  typeProperties: Expressionable<AzureMLLinkedServiceTypeProperties>;
}

export interface AzureMLLinkedServiceTypeProperties {
  apiKey: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  mlEndpoint: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
  updateResourceEndpoint?: Expressionable<any>;
}

export interface AzureMLUpdateResourceActivity {
  type: Expressionable<('AzureMLUpdateResource')>;
  typeProperties: Expressionable<AzureMLUpdateResourceActivityTypeProperties>;
}

export interface AzureMLUpdateResourceActivityTypeProperties {
  trainedModelFilePath: Expressionable<any>;
  trainedModelLinkedServiceName: Expressionable<LinkedServiceReference>;
  trainedModelName: Expressionable<any>;
}

export interface AzureMLWebServiceFile {
  filePath: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
}

export interface AzureMySqlLinkedService {
  type: Expressionable<('AzureMySql')>;
  typeProperties: Expressionable<AzureMySqlLinkedServiceTypeProperties>;
}

export interface AzureMySqlLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface AzureMySqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('AzureMySqlSource')>;
}

export interface AzureMySqlTableDataset {
  type: Expressionable<('AzureMySqlTable')>;
  typeProperties: Expressionable<AzureMySqlTableDatasetTypeProperties>;
}

export interface AzureMySqlTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface AzurePostgreSqlLinkedService {
  type: Expressionable<('AzurePostgreSql')>;
  typeProperties: Expressionable<AzurePostgreSqlLinkedServiceTypeProperties>;
}

export interface AzurePostgreSqlLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface AzurePostgreSqlSource {
  query?: Expressionable<any>;
  type: Expressionable<('AzurePostgreSqlSource')>;
}

export interface AzurePostgreSqlTableDataset {
  type: Expressionable<('AzurePostgreSqlTable')>;
}

export interface AzureQueueSink {
  type: Expressionable<('AzureQueueSink')>;
}

export interface AzureSearchIndexDataset {
  type: Expressionable<('AzureSearchIndex')>;
  typeProperties: Expressionable<AzureSearchIndexDatasetTypeProperties>;
}

export interface AzureSearchIndexDatasetTypeProperties {
  indexName: Expressionable<any>;
}

export interface AzureSearchIndexSink {
  type: Expressionable<('AzureSearchIndexSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface AzureSearchLinkedService {
  type: Expressionable<('AzureSearch')>;
  typeProperties: Expressionable<AzureSearchLinkedServiceTypeProperties>;
}

export interface AzureSearchLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  key?: Expressionable<SecretBase>;
  url: Expressionable<any>;
}

export interface AzureSqlDatabaseLinkedService {
  type: Expressionable<('AzureSqlDatabase')>;
  typeProperties: Expressionable<AzureSqlDatabaseLinkedServiceTypeProperties>;
}

export interface AzureSqlDatabaseLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureSqlDWLinkedService {
  type: Expressionable<('AzureSqlDW')>;
  typeProperties: Expressionable<AzureSqlDWLinkedServiceTypeProperties>;
}

export interface AzureSqlDWLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  tenant?: Expressionable<any>;
}

export interface AzureSqlDWTableDataset {
  type: Expressionable<('AzureSqlDWTable')>;
  typeProperties: Expressionable<AzureSqlDWTableDatasetTypeProperties>;
}

export interface AzureSqlDWTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface AzureSqlTableDataset {
  type: Expressionable<('AzureSqlTable')>;
  typeProperties: Expressionable<AzureSqlTableDatasetTypeProperties>;
}

export interface AzureSqlTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface AzureStorageLinkedService {
  type: Expressionable<('AzureStorage')>;
  typeProperties: Expressionable<AzureStorageLinkedServiceTypeProperties>;
}

export interface AzureStorageLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  sasUri?: Expressionable<SecretBase>;
}

export interface AzureTableDataset {
  type: Expressionable<('AzureTable')>;
  typeProperties: Expressionable<AzureTableDatasetTypeProperties>;
}

export interface AzureTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface AzureTableSink {
  azureTableDefaultPartitionKeyValue?: Expressionable<any>;
  azureTableInsertType?: Expressionable<any>;
  azureTablePartitionKeyName?: Expressionable<any>;
  azureTableRowKeyName?: Expressionable<any>;
  type: Expressionable<('AzureTableSink')>;
}

export interface AzureTableSource {
  azureTableSourceIgnoreTableNotFound?: Expressionable<any>;
  azureTableSourceQuery?: Expressionable<any>;
  type: Expressionable<('AzureTableSource')>;
}

export interface BlobEventsTrigger {
  type: Expressionable<('BlobEventsTrigger')>;
  typeProperties: Expressionable<BlobEventsTriggerTypeProperties>;
}

export interface BlobEventsTriggerTypeProperties {
  blobPathBeginsWith?: Expressionable<string>;
  blobPathEndsWith?: Expressionable<string>;
  events: Expressionable<('Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobDeleted')[]>;
  ignoreEmptyBlobs?: Expressionable<boolean>;
  scope: Expressionable<string>;
}

export interface BlobSink {
  blobWriterAddHeader?: Expressionable<any>;
  blobWriterDateTimeFormat?: Expressionable<any>;
  blobWriterOverwriteFiles?: Expressionable<any>;
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('BlobSink')>;
}

export interface BlobSource {
  recursive?: Expressionable<any>;
  skipHeaderLineCount?: Expressionable<any>;
  treatEmptyAsNull?: Expressionable<any>;
  type: Expressionable<('BlobSource')>;
}

export interface BlobTrigger {
  type: Expressionable<('BlobTrigger')>;
  typeProperties: Expressionable<BlobTriggerTypeProperties>;
}

export interface BlobTriggerTypeProperties {
  folderPath: Expressionable<string>;
  linkedService: Expressionable<LinkedServiceReference>;
  maxConcurrency: Expressionable<number>;
}

export interface CassandraLinkedService {
  type: Expressionable<('Cassandra')>;
  typeProperties: Expressionable<CassandraLinkedServiceTypeProperties>;
}

export interface CassandraLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface CassandraSource {
  consistencyLevel?: Expressionable<any>;
  query?: Expressionable<any>;
  type: Expressionable<('CassandraSource')>;
}

export interface CassandraTableDataset {
  type: Expressionable<('CassandraTable')>;
  typeProperties: Expressionable<CassandraTableDatasetTypeProperties>;
}

export interface CassandraTableDatasetTypeProperties {
  keyspace?: Expressionable<any>;
  tableName?: Expressionable<any>;
}

export interface ConcurLinkedService {
  type: Expressionable<('Concur')>;
  typeProperties: Expressionable<ConcurLinkedServiceTypeProperties>;
}

export interface ConcurLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface ConcurObjectDataset {
  type: Expressionable<('ConcurObject')>;
}

export interface ConcurSource {
  query?: Expressionable<any>;
  type: Expressionable<('ConcurSource')>;
}

export interface ControlActivity {
  type: Expressionable<('Container')>;
}

export interface CopyActivity {
  inputs?: Expressionable<DatasetReference[]>;
  outputs?: Expressionable<DatasetReference[]>;
  type: Expressionable<('Copy')>;
  typeProperties: Expressionable<CopyActivityTypeProperties>;
}

export interface CopyActivityTypeProperties {
  cloudDataMovementUnits?: Expressionable<any>;
  enableSkipIncompatibleRow?: Expressionable<any>;
  enableStaging?: Expressionable<any>;
  parallelCopies?: Expressionable<any>;
  redirectIncompatibleRowSettings?: Expressionable<RedirectIncompatibleRowSettings>;
  sink: Expressionable<CopySink>;
  source: Expressionable<CopySource>;
  stagingSettings?: Expressionable<StagingSettings>;
  translator?: Expressionable<any>;
}

export interface CopySink {
  additionalProperties?: Expressionable<any>;
  sinkRetryCount?: Expressionable<any>;
  sinkRetryWait?: Expressionable<any>;
  writeBatchSize?: Expressionable<any>;
  writeBatchTimeout?: Expressionable<any>;
}

export interface CopySource {
  additionalProperties?: Expressionable<any>;
  sourceRetryCount?: Expressionable<any>;
  sourceRetryWait?: Expressionable<any>;
}

export interface CosmosDbLinkedService {
  type: Expressionable<('CosmosDb')>;
  typeProperties: Expressionable<CosmosDbLinkedServiceTypeProperties>;
}

export interface CosmosDbLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface CouchbaseLinkedService {
  type: Expressionable<('Couchbase')>;
  typeProperties: Expressionable<CouchbaseLinkedServiceTypeProperties>;
}

export interface CouchbaseLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface CouchbaseSource {
  query?: Expressionable<any>;
  type: Expressionable<('CouchbaseSource')>;
}

export interface CouchbaseTableDataset {
  type: Expressionable<('CouchbaseTable')>;
}

export interface CustomActivity {
  type: Expressionable<('Custom')>;
  typeProperties: Expressionable<CustomActivityTypeProperties>;
}

export interface CustomActivityReferenceObject {
  datasets?: Expressionable<DatasetReference[]>;
  linkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface CustomActivityTypeProperties {
  command: Expressionable<any>;
  extendedProperties?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  referenceObjects?: Expressionable<CustomActivityReferenceObject>;
  resourceLinkedService?: Expressionable<LinkedServiceReference>;
}

export interface CustomDataset {
  type: Expressionable<('CustomDataset')>;
  typeProperties: Expressionable<any>;
}

export interface CustomDataSourceLinkedService {
  type: Expressionable<('CustomDataSource')>;
  typeProperties: Expressionable<any>;
}

export interface DatabricksNotebookActivity {
  type: Expressionable<('DatabricksNotebook')>;
  typeProperties: Expressionable<DatabricksNotebookActivityTypeProperties>;
}

export interface DatabricksNotebookActivityTypeProperties {
  baseParameters?: Expressionable<any>;
  notebookPath: Expressionable<any>;
}

export interface DataLakeAnalyticsUSQLActivity {
  type: Expressionable<('DataLakeAnalyticsU-SQL')>;
  typeProperties: Expressionable<DataLakeAnalyticsUSQLActivityTypeProperties>;
}

export interface DataLakeAnalyticsUSQLActivityTypeProperties {
  compilationMode?: Expressionable<any>;
  degreeOfParallelism?: Expressionable<any>;
  parameters?: Expressionable<any>;
  priority?: Expressionable<any>;
  runtimeVersion?: Expressionable<any>;
  scriptLinkedService: Expressionable<LinkedServiceReference>;
  scriptPath: Expressionable<any>;
}

export interface Dataset {
  additionalProperties?: Expressionable<any>;
  annotations?: Expressionable<any[]>;
  description?: Expressionable<string>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  parameters?: Expressionable<any>;
  structure?: Expressionable<any>;
}

export interface DatasetBZip2Compression {
  type: Expressionable<('BZip2')>;
}

export interface DatasetCompression {
  additionalProperties?: Expressionable<any>;
}

export interface DatasetDeflateCompression {
  level?: Expressionable<any>;
  type: Expressionable<('Deflate')>;
}

export interface DatasetGZipCompression {
  level?: Expressionable<any>;
  type: Expressionable<('GZip')>;
}

export interface DatasetReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('DatasetReference')>;
}

export interface DatasetStorageFormat {
  additionalProperties?: Expressionable<any>;
  deserializer?: Expressionable<any>;
  serializer?: Expressionable<any>;
}

export interface DatasetZipDeflateCompression {
  level?: Expressionable<any>;
  type: Expressionable<('ZipDeflate')>;
}

export interface Db2LinkedService {
  type: Expressionable<('Db2')>;
  typeProperties: Expressionable<Db2LinkedServiceTypeProperties>;
}

export interface Db2LinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic')>;
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface DistcpSettings {
  distcpOptions?: Expressionable<any>;
  resourceManagerEndpoint: Expressionable<any>;
  tempScriptPath: Expressionable<any>;
}

export interface DocumentDbCollectionDataset {
  type: Expressionable<('DocumentDbCollection')>;
  typeProperties: Expressionable<DocumentDbCollectionDatasetTypeProperties>;
}

export interface DocumentDbCollectionDatasetTypeProperties {
  collectionName: Expressionable<any>;
}

export interface DocumentDbCollectionSink {
  nestingSeparator?: Expressionable<any>;
  type: Expressionable<('DocumentDbCollectionSink')>;
}

export interface DocumentDbCollectionSource {
  nestingSeparator?: Expressionable<any>;
  query?: Expressionable<any>;
  type: Expressionable<('DocumentDbCollectionSource')>;
}

export interface DrillLinkedService {
  type: Expressionable<('Drill')>;
  typeProperties: Expressionable<DrillLinkedServiceTypeProperties>;
}

export interface DrillLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface DrillSource {
  query?: Expressionable<any>;
  type: Expressionable<('DrillSource')>;
}

export interface DrillTableDataset {
  type: Expressionable<('DrillTable')>;
}

export interface DynamicsEntityDataset {
  type: Expressionable<('DynamicsEntity')>;
  typeProperties: Expressionable<DynamicsEntityDatasetTypeProperties>;
}

export interface DynamicsEntityDatasetTypeProperties {
  entityName?: Expressionable<any>;
}

export interface DynamicsLinkedService {
  type: Expressionable<('Dynamics')>;
  typeProperties: Expressionable<DynamicsLinkedServiceTypeProperties>;
}

export interface DynamicsLinkedServiceTypeProperties {
  authenticationType: Expressionable<any>;
  deploymentType: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  hostName?: Expressionable<any>;
  organizationName?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  serviceUri?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface DynamicsSink {
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('DynamicsSink')>;
  writeBehavior: Expressionable<('Upsert')>;
}

export interface DynamicsSource {
  query?: Expressionable<any>;
  type: Expressionable<('DynamicsSource')>;
}

export interface EloquaLinkedService {
  type: Expressionable<('Eloqua')>;
  typeProperties: Expressionable<EloquaLinkedServiceTypeProperties>;
}

export interface EloquaLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface EloquaObjectDataset {
  type: Expressionable<('EloquaObject')>;
}

export interface EloquaSource {
  query?: Expressionable<any>;
  type: Expressionable<('EloquaSource')>;
}

export interface EntityReference {
  referenceName?: Expressionable<string>;
  type?: Expressionable<('IntegrationRuntimeReference' | 'LinkedServiceReference')>;
}

export interface ExecutePipelineActivity {
  type: Expressionable<('ExecutePipeline')>;
  typeProperties: Expressionable<ExecutePipelineActivityTypeProperties>;
}

export interface ExecutePipelineActivityTypeProperties {
  parameters?: Expressionable<any>;
  pipeline: Expressionable<PipelineReference>;
  waitOnCompletion?: Expressionable<boolean>;
}

export interface ExecuteSSISPackageActivity {
  type: Expressionable<('ExecuteSSISPackage')>;
  typeProperties: Expressionable<ExecuteSSISPackageActivityTypeProperties>;
}

export interface ExecuteSSISPackageActivityTypeProperties {
  connectVia: Expressionable<IntegrationRuntimeReference>;
  environmentPath?: Expressionable<any>;
  executionCredential?: Expressionable<SSISExecutionCredential>;
  loggingLevel?: Expressionable<any>;
  logLocation?: Expressionable<SSISLogLocation>;
  packageConnectionManagers?: Expressionable<any>;
  packageLocation: Expressionable<SSISPackageLocation>;
  packageParameters?: Expressionable<any>;
  projectConnectionManagers?: Expressionable<any>;
  projectParameters?: Expressionable<any>;
  propertyOverrides?: Expressionable<any>;
  runtime?: Expressionable<any>;
}

export interface ExecutionActivity {
  linkedServiceName?: Expressionable<LinkedServiceReference>;
  policy?: Expressionable<ActivityPolicy>;
  type: Expressionable<('Execution')>;
}

export interface Expression {
  type: Expressionable<('Expression')>;
  value: Expressionable<string>;
}

export interface FactoryIdentity {
  type: Expressionable<('SystemAssigned')>;
}

export interface FactoryProperties {
  vstsConfiguration?: Expressionable<FactoryVSTSConfiguration>;
}

export interface FactoryVSTSConfiguration {
  accountName?: Expressionable<string>;
  collaborationBranch?: Expressionable<string>;
  lastCommitId?: Expressionable<string>;
  projectName?: Expressionable<string>;
  repositoryName?: Expressionable<string>;
  rootFolder?: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface FileServerLinkedService {
  type: Expressionable<('FileServer')>;
  typeProperties: Expressionable<FileServerLinkedServiceTypeProperties>;
}

export interface FileServerLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userId?: Expressionable<any>;
}

export interface FileShareDataset {
  type: Expressionable<('FileShare')>;
  typeProperties: Expressionable<FileShareDatasetTypeProperties>;
}

export interface FileShareDatasetTypeProperties {
  compression?: Expressionable<DatasetCompression>;
  fileFilter?: Expressionable<any>;
  fileName?: Expressionable<any>;
  folderPath?: Expressionable<any>;
  format?: Expressionable<DatasetStorageFormat>;
}

export interface FileSystemSink {
  copyBehavior?: Expressionable<any>;
  type: Expressionable<('FileSystemSink')>;
}

export interface FileSystemSource {
  recursive?: Expressionable<any>;
  type: Expressionable<('FileSystemSource')>;
}

export interface FilterActivity {
  type: Expressionable<('Filter')>;
  typeProperties: Expressionable<FilterActivityTypeProperties>;
}

export interface FilterActivityTypeProperties {
  condition: Expressionable<Expression>;
  items: Expressionable<Expression>;
}

export interface ForEachActivity {
  type: Expressionable<('ForEach')>;
  typeProperties: Expressionable<ForEachActivityTypeProperties>;
}

export interface ForEachActivityTypeProperties {
  activities: Expressionable<Activity[]>;
  batchCount?: Expressionable<number>;
  isSequential?: Expressionable<boolean>;
  items: Expressionable<Expression>;
}

export interface FtpServerLinkedService {
  type: Expressionable<('FtpServer')>;
  typeProperties: Expressionable<FtpServerLinkedServiceTypeProperties>;
}

export interface FtpServerLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Anonymous')>;
  enableServerCertificateValidation?: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface GetMetadataActivity {
  type: Expressionable<('GetMetadata')>;
  typeProperties: Expressionable<GetMetadataActivityTypeProperties>;
}

export interface GetMetadataActivityTypeProperties {
  dataset: Expressionable<DatasetReference>;
  fieldList?: Expressionable<any[]>;
}

export interface GoogleBigQueryLinkedService {
  type: Expressionable<('GoogleBigQuery')>;
  typeProperties: Expressionable<GoogleBigQueryLinkedServiceTypeProperties>;
}

export interface GoogleBigQueryLinkedServiceTypeProperties {
  additionalProjects?: Expressionable<any>;
  authenticationType: Expressionable<('ServiceAuthentication' | 'UserAuthentication')>;
  clientId?: Expressionable<SecretBase>;
  clientSecret?: Expressionable<SecretBase>;
  email?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  keyFilePath?: Expressionable<any>;
  project: Expressionable<any>;
  refreshToken?: Expressionable<SecretBase>;
  requestGoogleDriveScope?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface GoogleBigQueryObjectDataset {
  type: Expressionable<('GoogleBigQueryObject')>;
}

export interface GoogleBigQuerySource {
  query?: Expressionable<any>;
  type: Expressionable<('GoogleBigQuerySource')>;
}

export interface GreenplumLinkedService {
  type: Expressionable<('Greenplum')>;
  typeProperties: Expressionable<GreenplumLinkedServiceTypeProperties>;
}

export interface GreenplumLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface GreenplumSource {
  query?: Expressionable<any>;
  type: Expressionable<('GreenplumSource')>;
}

export interface GreenplumTableDataset {
  type: Expressionable<('GreenplumTable')>;
}

export interface HBaseLinkedService {
  type: Expressionable<('HBase')>;
  typeProperties: Expressionable<HBaseLinkedServiceTypeProperties>;
}

export interface HBaseLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Basic')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface HBaseObjectDataset {
  type: Expressionable<('HBaseObject')>;
}

export interface HBaseSource {
  query?: Expressionable<any>;
  type: Expressionable<('HBaseSource')>;
}

export interface HdfsLinkedService {
  type: Expressionable<('Hdfs')>;
  typeProperties: Expressionable<HdfsLinkedServiceTypeProperties>;
}

export interface HdfsLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface HdfsSource {
  distcpSettings?: Expressionable<DistcpSettings>;
  recursive?: Expressionable<any>;
  type: Expressionable<('HdfsSource')>;
}

export interface HDInsightHiveActivity {
  type: Expressionable<('HDInsightHive')>;
  typeProperties: Expressionable<HDInsightHiveActivityTypeProperties>;
}

export interface HDInsightHiveActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  scriptLinkedService?: Expressionable<LinkedServiceReference>;
  scriptPath?: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HDInsightLinkedService {
  type: Expressionable<('HDInsight')>;
  typeProperties: Expressionable<HDInsightLinkedServiceTypeProperties>;
}

export interface HDInsightLinkedServiceTypeProperties {
  clusterUri: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  hcatalogLinkedServiceName?: Expressionable<LinkedServiceReference>;
  linkedServiceName?: Expressionable<LinkedServiceReference>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface HDInsightMapReduceActivity {
  type: Expressionable<('HDInsightMapReduce')>;
  typeProperties: Expressionable<HDInsightMapReduceActivityTypeProperties>;
}

export interface HDInsightMapReduceActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  className: Expressionable<any>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  jarFilePath: Expressionable<any>;
  jarLibs?: Expressionable<any[]>;
  jarLinkedService?: Expressionable<LinkedServiceReference>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HDInsightOnDemandLinkedService {
  type: Expressionable<('HDInsightOnDemand')>;
  typeProperties: Expressionable<HDInsightOnDemandLinkedServiceTypeProperties>;
}

export interface HDInsightOnDemandLinkedServiceTypeProperties {
  additionalLinkedServiceNames?: Expressionable<LinkedServiceReference[]>;
  clusterNamePrefix?: Expressionable<any>;
  clusterPassword?: Expressionable<SecretBase>;
  clusterResourceGroup: Expressionable<any>;
  clusterSize: Expressionable<any>;
  clusterSshPassword?: Expressionable<SecretBase>;
  clusterSshUserName?: Expressionable<any>;
  clusterType?: Expressionable<any>;
  clusterUserName?: Expressionable<any>;
  coreConfiguration?: Expressionable<any>;
  dataNodeSize?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  hBaseConfiguration?: Expressionable<any>;
  hcatalogLinkedServiceName?: Expressionable<LinkedServiceReference>;
  hdfsConfiguration?: Expressionable<any>;
  headNodeSize?: Expressionable<any>;
  hiveConfiguration?: Expressionable<any>;
  hostSubscriptionId: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  mapReduceConfiguration?: Expressionable<any>;
  oozieConfiguration?: Expressionable<any>;
  servicePrincipalId?: Expressionable<any>;
  servicePrincipalKey?: Expressionable<SecretBase>;
  sparkVersion?: Expressionable<any>;
  stormConfiguration?: Expressionable<any>;
  tenant: Expressionable<any>;
  timeToLive: Expressionable<any>;
  version: Expressionable<any>;
  yarnConfiguration?: Expressionable<any>;
  zookeeperNodeSize?: Expressionable<any>;
}

export interface HDInsightPigActivity {
  type: Expressionable<('HDInsightPig')>;
  typeProperties: Expressionable<HDInsightPigActivityTypeProperties>;
}

export interface HDInsightPigActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  defines?: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  scriptLinkedService?: Expressionable<LinkedServiceReference>;
  scriptPath?: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HDInsightSparkActivity {
  type: Expressionable<('HDInsightSpark')>;
  typeProperties: Expressionable<HDInsightSparkActivityTypeProperties>;
}

export interface HDInsightSparkActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  className?: Expressionable<string>;
  entryFilePath: Expressionable<any>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  proxyUser?: Expressionable<any>;
  rootPath: Expressionable<any>;
  sparkConfig?: Expressionable<any>;
  sparkJobLinkedService?: Expressionable<LinkedServiceReference>;
}

export interface HDInsightStreamingActivity {
  type: Expressionable<('HDInsightStreaming')>;
  typeProperties: Expressionable<HDInsightStreamingActivityTypeProperties>;
}

export interface HDInsightStreamingActivityTypeProperties {
  arguments?: Expressionable<any[]>;
  combiner?: Expressionable<any>;
  commandEnvironment?: Expressionable<any[]>;
  defines?: Expressionable<any>;
  fileLinkedService?: Expressionable<LinkedServiceReference>;
  filePaths: Expressionable<any[]>;
  getDebugInfo?: Expressionable<('None' | 'Always' | 'Failure')>;
  input: Expressionable<any>;
  mapper: Expressionable<any>;
  output: Expressionable<any>;
  reducer: Expressionable<any>;
  storageLinkedServices?: Expressionable<LinkedServiceReference[]>;
}

export interface HiveLinkedService {
  type: Expressionable<('Hive')>;
  typeProperties: Expressionable<HiveLinkedServiceTypeProperties>;
}

export interface HiveLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  serverType?: Expressionable<('HiveServer1' | 'HiveServer2' | 'HiveThriftServer')>;
  serviceDiscoveryMode?: Expressionable<any>;
  thriftTransportProtocol?: Expressionable<('Binary' | 'SASL' | 'HTTP ')>;
  trustedCertPath?: Expressionable<any>;
  useNativeQuery?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
  zooKeeperNameSpace?: Expressionable<any>;
}

export interface HiveObjectDataset {
  type: Expressionable<('HiveObject')>;
}

export interface HiveSource {
  query?: Expressionable<any>;
  type: Expressionable<('HiveSource')>;
}

export interface HttpDataset {
  type: Expressionable<('HttpFile')>;
  typeProperties: Expressionable<HttpDatasetTypeProperties>;
}

export interface HttpDatasetTypeProperties {
  additionalHeaders?: Expressionable<any>;
  compression?: Expressionable<DatasetCompression>;
  format?: Expressionable<DatasetStorageFormat>;
  relativeUrl?: Expressionable<any>;
  requestBody?: Expressionable<any>;
  requestMethod?: Expressionable<any>;
}

export interface HttpLinkedService {
  type: Expressionable<('HttpServer')>;
  typeProperties: Expressionable<HttpLinkedServiceTypeProperties>;
}

export interface HttpLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Anonymous' | 'Digest' | 'Windows' | 'ClientCertificate')>;
  certThumbprint?: Expressionable<any>;
  embeddedCertData?: Expressionable<any>;
  enableServerCertificateValidation?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface HttpSource {
  httpRequestTimeout?: Expressionable<any>;
  type: Expressionable<('HttpSource')>;
}

export interface HubspotLinkedService {
  type: Expressionable<('Hubspot')>;
  typeProperties: Expressionable<HubspotLinkedServiceTypeProperties>;
}

export interface HubspotLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  refreshToken?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface HubspotObjectDataset {
  type: Expressionable<('HubspotObject')>;
}

export interface HubspotSource {
  query?: Expressionable<any>;
  type: Expressionable<('HubspotSource')>;
}

export interface IfConditionActivity {
  type: Expressionable<('IfCondition')>;
  typeProperties: Expressionable<IfConditionActivityTypeProperties>;
}

export interface IfConditionActivityTypeProperties {
  expression: Expressionable<Expression>;
  ifFalseActivities?: Expressionable<Activity[]>;
  ifTrueActivities?: Expressionable<Activity[]>;
}

export interface ImpalaLinkedService {
  type: Expressionable<('Impala')>;
  typeProperties: Expressionable<ImpalaLinkedServiceTypeProperties>;
}

export interface ImpalaLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'SASLUsername' | 'UsernameAndPassword')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface ImpalaObjectDataset {
  type: Expressionable<('ImpalaObject')>;
}

export interface ImpalaSource {
  query?: Expressionable<any>;
  type: Expressionable<('ImpalaSource')>;
}

export interface IntegrationRuntime {
  additionalProperties?: Expressionable<any>;
  description?: Expressionable<string>;
}

export interface IntegrationRuntimeComputeProperties {
  additionalProperties?: Expressionable<any>;
  location?: Expressionable<string>;
  maxParallelExecutionsPerNode?: Expressionable<number>;
  nodeSize?: Expressionable<string>;
  numberOfNodes?: Expressionable<number>;
  vNetProperties?: Expressionable<IntegrationRuntimeVNetProperties>;
}

export interface IntegrationRuntimeCustomSetupScriptProperties {
  blobContainerUri?: Expressionable<string>;
  sasToken?: Expressionable<SecureString>;
}

export interface IntegrationRuntimeDataProxyProperties {
  connectVia?: Expressionable<EntityReference>;
  path?: Expressionable<string>;
  stagingLinkedService?: Expressionable<EntityReference>;
}

export interface IntegrationRuntimeReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('IntegrationRuntimeReference')>;
}

export interface IntegrationRuntimeSsisCatalogInfo {
  additionalProperties?: Expressionable<any>;
  catalogAdminPassword?: Expressionable<SecureString>;
  catalogAdminUserName?: Expressionable<string>;
  catalogPricingTier?: Expressionable<string>;
  catalogServerEndpoint?: Expressionable<string>;
}

export interface IntegrationRuntimeSsisProperties {
  additionalProperties?: Expressionable<any>;
  catalogInfo?: Expressionable<IntegrationRuntimeSsisCatalogInfo>;
  customSetupScriptProperties?: Expressionable<IntegrationRuntimeCustomSetupScriptProperties>;
  dataProxyProperties?: Expressionable<IntegrationRuntimeDataProxyProperties>;
  edition?: Expressionable<('Standard' | 'Enterprise')>;
  licenseType?: Expressionable<('BasePrice' | 'LicenseIncluded')>;
}

export interface IntegrationRuntimeVNetProperties {
  additionalProperties?: Expressionable<any>;
  subnet?: Expressionable<string>;
  vNetId?: Expressionable<string>;
}

export interface JiraLinkedService {
  type: Expressionable<('Jira')>;
  typeProperties: Expressionable<JiraLinkedServiceTypeProperties>;
}

export interface JiraLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username: Expressionable<any>;
}

export interface JiraObjectDataset {
  type: Expressionable<('JiraObject')>;
}

export interface JiraSource {
  query?: Expressionable<any>;
  type: Expressionable<('JiraSource')>;
}

export interface JsonFormat {
  encodingName?: Expressionable<any>;
  filePattern?: Expressionable<('setOfObjects' | 'arrayOfObjects')>;
  jsonNodeReference?: Expressionable<any>;
  jsonPathDefinition?: Expressionable<any>;
  nestingSeparator?: Expressionable<any>;
  type: Expressionable<('JsonFormat')>;
}

export interface LinkedIntegrationRuntimeKey {
  authorizationType: Expressionable<('Key')>;
  key: Expressionable<SecureString>;
}

export interface LinkedIntegrationRuntimeProperties {
}

export interface LinkedIntegrationRuntimeRbac {
  authorizationType: Expressionable<('RBAC')>;
  resourceId: Expressionable<string>;
}

export interface LinkedIntegrationRuntimeTypeProperties {
  linkedInfo?: Expressionable<LinkedIntegrationRuntimeProperties>;
}

export interface LinkedService {
  additionalProperties?: Expressionable<any>;
  annotations?: Expressionable<any[]>;
  connectVia?: Expressionable<IntegrationRuntimeReference>;
  description?: Expressionable<string>;
  parameters?: Expressionable<any>;
}

export interface LinkedServiceReference {
  parameters?: Expressionable<any>;
  referenceName: Expressionable<string>;
  type: Expressionable<('LinkedServiceReference')>;
}

export interface LookupActivity {
  type: Expressionable<('Lookup')>;
  typeProperties: Expressionable<LookupActivityTypeProperties>;
}

export interface LookupActivityTypeProperties {
  dataset: Expressionable<DatasetReference>;
  firstRowOnly?: Expressionable<any>;
  source: Expressionable<CopySource>;
}

export interface MagentoLinkedService {
  type: Expressionable<('Magento')>;
  typeProperties: Expressionable<MagentoLinkedServiceTypeProperties>;
}

export interface MagentoLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface MagentoObjectDataset {
  type: Expressionable<('MagentoObject')>;
}

export interface MagentoSource {
  query?: Expressionable<any>;
  type: Expressionable<('MagentoSource')>;
}

export interface ManagedIntegrationRuntime {
  type: Expressionable<('Managed')>;
  typeProperties: Expressionable<ManagedIntegrationRuntimeTypeProperties>;
}

export interface ManagedIntegrationRuntimeTypeProperties {
  computeProperties?: Expressionable<IntegrationRuntimeComputeProperties>;
  ssisProperties?: Expressionable<IntegrationRuntimeSsisProperties>;
}

export interface MariaDBLinkedService {
  type: Expressionable<('MariaDB')>;
  typeProperties: Expressionable<MariaDBLinkedServiceTypeProperties>;
}

export interface MariaDBLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface MariaDBSource {
  query?: Expressionable<any>;
  type: Expressionable<('MariaDBSource')>;
}

export interface MariaDBTableDataset {
  type: Expressionable<('MariaDBTable')>;
}

export interface MarketoLinkedService {
  type: Expressionable<('Marketo')>;
  typeProperties: Expressionable<MarketoLinkedServiceTypeProperties>;
}

export interface MarketoLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface MarketoObjectDataset {
  type: Expressionable<('MarketoObject')>;
}

export interface MarketoSource {
  query?: Expressionable<any>;
  type: Expressionable<('MarketoSource')>;
}

export interface MongoDbCollectionDataset {
  type: Expressionable<('MongoDbCollection')>;
  typeProperties: Expressionable<MongoDbCollectionDatasetTypeProperties>;
}

export interface MongoDbCollectionDatasetTypeProperties {
  collectionName: Expressionable<any>;
}

export interface MongoDbLinkedService {
  type: Expressionable<('MongoDb')>;
  typeProperties: Expressionable<MongoDbLinkedServiceTypeProperties>;
}

export interface MongoDbLinkedServiceTypeProperties {
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType?: Expressionable<('Basic' | 'Anonymous')>;
  authSource?: Expressionable<any>;
  databaseName: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface MongoDbSource {
  query?: Expressionable<any>;
  type: Expressionable<('MongoDbSource')>;
}

export interface MultiplePipelineTrigger {
  pipelines?: Expressionable<TriggerPipelineReference[]>;
  type: Expressionable<('MultiplePipelineTrigger')>;
}

export interface MySqlLinkedService {
  type: Expressionable<('MySql')>;
  typeProperties: Expressionable<MySqlLinkedServiceTypeProperties>;
}

export interface MySqlLinkedServiceTypeProperties {
  connectionString: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
}

export interface NetezzaLinkedService {
  type: Expressionable<('Netezza')>;
  typeProperties: Expressionable<NetezzaLinkedServiceTypeProperties>;
}

export interface NetezzaLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface NetezzaSource {
  query?: Expressionable<any>;
  type: Expressionable<('NetezzaSource')>;
}

export interface NetezzaTableDataset {
  type: Expressionable<('NetezzaTable')>;
}

export interface ODataLinkedService {
  type: Expressionable<('OData')>;
  typeProperties: Expressionable<ODataLinkedServiceTypeProperties>;
}

export interface ODataLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Anonymous')>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface ODataResourceDataset {
  type: Expressionable<('ODataResource')>;
  typeProperties: Expressionable<ODataResourceDatasetTypeProperties>;
}

export interface ODataResourceDatasetTypeProperties {
  path?: Expressionable<any>;
}

export interface OdbcLinkedService {
  type: Expressionable<('Odbc')>;
  typeProperties: Expressionable<OdbcLinkedServiceTypeProperties>;
}

export interface OdbcLinkedServiceTypeProperties {
  authenticationType?: Expressionable<any>;
  connectionString: Expressionable<any>;
  credential?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface OdbcSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('OdbcSink')>;
}

export interface OracleLinkedService {
  type: Expressionable<('Oracle')>;
  typeProperties: Expressionable<OracleLinkedServiceTypeProperties>;
}

export interface OracleLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface OracleSink {
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('OracleSink')>;
}

export interface OracleSource {
  oracleReaderQuery?: Expressionable<any>;
  queryTimeout?: Expressionable<any>;
  type: Expressionable<('OracleSource')>;
}

export interface OracleTableDataset {
  type: Expressionable<('OracleTable')>;
  typeProperties: Expressionable<OracleTableDatasetTypeProperties>;
}

export interface OracleTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface OrcFormat {
  type: Expressionable<('OrcFormat')>;
}

export interface ParameterSpecification {
  defaultValue?: Expressionable<any>;
  type: Expressionable<('Object' | 'String' | 'Int' | 'Float' | 'Bool' | 'Array' | 'SecureString')>;
}

export interface ParquetFormat {
  type: Expressionable<('ParquetFormat')>;
}

export interface PaypalLinkedService {
  type: Expressionable<('Paypal')>;
  typeProperties: Expressionable<PaypalLinkedServiceTypeProperties>;
}

export interface PaypalLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface PaypalObjectDataset {
  type: Expressionable<('PaypalObject')>;
}

export interface PaypalSource {
  query?: Expressionable<any>;
  type: Expressionable<('PaypalSource')>;
}

export interface PhoenixLinkedService {
  type: Expressionable<('Phoenix')>;
  typeProperties: Expressionable<PhoenixLinkedServiceTypeProperties>;
}

export interface PhoenixLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface PhoenixObjectDataset {
  type: Expressionable<('PhoenixObject')>;
}

export interface PhoenixSource {
  query?: Expressionable<any>;
  type: Expressionable<('PhoenixSource')>;
}

export interface Pipeline {
  activities?: Expressionable<Activity[]>;
  annotations?: Expressionable<any[]>;
  concurrency?: Expressionable<number>;
  description?: Expressionable<string>;
  parameters?: Expressionable<any>;
}

export interface PipelineReference {
  name?: Expressionable<string>;
  referenceName: Expressionable<string>;
  type: Expressionable<('PipelineReference')>;
}

export interface PolybaseSettings {
  additionalProperties?: Expressionable<any>;
  rejectSampleValue?: Expressionable<any>;
  rejectType?: Expressionable<any>;
  rejectValue?: Expressionable<any>;
  useTypeDefault?: Expressionable<any>;
}

export interface PostgreSqlLinkedService {
  type: Expressionable<('PostgreSql')>;
  typeProperties: Expressionable<PostgreSqlLinkedServiceTypeProperties>;
}

export interface PostgreSqlLinkedServiceTypeProperties {
  connectionString: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
}

export interface PrestoLinkedService {
  type: Expressionable<('Presto')>;
  typeProperties: Expressionable<PrestoLinkedServiceTypeProperties>;
}

export interface PrestoLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'LDAP')>;
  catalog: Expressionable<any>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  serverVersion: Expressionable<any>;
  timeZoneID?: Expressionable<any>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface PrestoObjectDataset {
  type: Expressionable<('PrestoObject')>;
}

export interface PrestoSource {
  query?: Expressionable<any>;
  type: Expressionable<('PrestoSource')>;
}

export interface QuickBooksLinkedService {
  type: Expressionable<('QuickBooks')>;
  typeProperties: Expressionable<QuickBooksLinkedServiceTypeProperties>;
}

export interface QuickBooksLinkedServiceTypeProperties {
  accessToken: Expressionable<SecretBase>;
  accessTokenSecret: Expressionable<SecretBase>;
  companyId: Expressionable<any>;
  consumerKey: Expressionable<any>;
  consumerSecret: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
}

export interface QuickBooksObjectDataset {
  type: Expressionable<('QuickBooksObject')>;
}

export interface QuickBooksSource {
  query?: Expressionable<any>;
  type: Expressionable<('QuickBooksSource')>;
}

export interface RecurrenceSchedule {
  additionalProperties?: Expressionable<any>;
  hours?: Expressionable<number[]>;
  minutes?: Expressionable<number[]>;
  monthDays?: Expressionable<number[]>;
  monthlyOccurrences?: Expressionable<RecurrenceScheduleOccurrence[]>;
  weekDays?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[]>;
}

export interface RecurrenceScheduleOccurrence {
  additionalProperties?: Expressionable<any>;
  day?: Expressionable<('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')>;
  occurrence?: Expressionable<number>;
}

export interface RedirectIncompatibleRowSettings {
  additionalProperties?: Expressionable<any>;
  linkedServiceName: Expressionable<any>;
  path?: Expressionable<any>;
}

export interface RedshiftUnloadSettings {
  bucketName: Expressionable<any>;
  s3LinkedServiceName: Expressionable<LinkedServiceReference>;
}

export interface RelationalSource {
  query?: Expressionable<any>;
  type: Expressionable<('RelationalSource')>;
}

export interface RelationalTableDataset {
  type: Expressionable<('RelationalTable')>;
  typeProperties: Expressionable<RelationalTableDatasetTypeProperties>;
}

export interface RelationalTableDatasetTypeProperties {
  tableName?: Expressionable<any>;
}

export interface ResponsysLinkedService {
  type: Expressionable<('Responsys')>;
  typeProperties: Expressionable<ResponsysLinkedServiceTypeProperties>;
}

export interface ResponsysLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ResponsysObjectDataset {
  type: Expressionable<('ResponsysObject')>;
}

export interface ResponsysSource {
  query?: Expressionable<any>;
  type: Expressionable<('ResponsysSource')>;
}

export interface RetryPolicy {
  count?: Expressionable<any>;
  intervalInSeconds?: Expressionable<number>;
}

export interface SalesforceLinkedService {
  type: Expressionable<('Salesforce')>;
  typeProperties: Expressionable<SalesforceLinkedServiceTypeProperties>;
}

export interface SalesforceLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  environmentUrl?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  securityToken?: Expressionable<SecretBase>;
  username?: Expressionable<any>;
}

export interface SalesforceMarketingCloudLinkedService {
  type: Expressionable<('SalesforceMarketingCloud')>;
  typeProperties: Expressionable<SalesforceMarketingCloudLinkedServiceTypeProperties>;
}

export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface SalesforceMarketingCloudObjectDataset {
  type: Expressionable<('SalesforceMarketingCloudObject')>;
}

export interface SalesforceMarketingCloudSource {
  query?: Expressionable<any>;
  type: Expressionable<('SalesforceMarketingCloudSource')>;
}

export interface SalesforceObjectDataset {
  type: Expressionable<('SalesforceObject')>;
  typeProperties: Expressionable<SalesforceObjectDatasetTypeProperties>;
}

export interface SalesforceObjectDatasetTypeProperties {
  objectApiName?: Expressionable<any>;
}

export interface SalesforceSink {
  externalIdFieldName?: Expressionable<any>;
  ignoreNullValues?: Expressionable<any>;
  type: Expressionable<('SalesforceSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface SalesforceSource {
  query?: Expressionable<any>;
  readBehavior?: Expressionable<any>;
  type: Expressionable<('SalesforceSource')>;
}

export interface SapBWLinkedService {
  type: Expressionable<('SapBW')>;
  typeProperties: Expressionable<SapBWLinkedServiceTypeProperties>;
}

export interface SapBWLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  systemNumber: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface SapCloudForCustomerLinkedService {
  type: Expressionable<('SapCloudForCustomer')>;
  typeProperties: Expressionable<SapCloudForCustomerLinkedServiceTypeProperties>;
}

export interface SapCloudForCustomerLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface SapCloudForCustomerResourceDataset {
  type: Expressionable<('SapCloudForCustomerResource')>;
  typeProperties: Expressionable<SapCloudForCustomerResourceDatasetTypeProperties>;
}

export interface SapCloudForCustomerResourceDatasetTypeProperties {
  path: Expressionable<any>;
}

export interface SapCloudForCustomerSink {
  type: Expressionable<('SapCloudForCustomerSink')>;
  writeBehavior?: Expressionable<any>;
}

export interface SapCloudForCustomerSource {
  query?: Expressionable<any>;
  type: Expressionable<('SapCloudForCustomerSource')>;
}

export interface SapEccLinkedService {
  type: Expressionable<('SapEcc')>;
  typeProperties: Expressionable<SapEccLinkedServiceTypeProperties>;
}

export interface SapEccLinkedServiceTypeProperties {
  encryptedCredential?: Expressionable<string>;
  password?: Expressionable<SecretBase>;
  url: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface SapEccResourceDataset {
  type: Expressionable<('SapEccResource')>;
  typeProperties: Expressionable<SapEccResourceDatasetTypeProperties>;
}

export interface SapEccResourceDatasetTypeProperties {
  path: Expressionable<any>;
}

export interface SapEccSource {
  query?: Expressionable<any>;
  type: Expressionable<('SapEccSource')>;
}

export interface SapHanaLinkedService {
  type: Expressionable<('SapHana')>;
  typeProperties: Expressionable<SapHanaLinkedServiceProperties>;
}

export interface SapHanaLinkedServiceProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface ScheduleTrigger {
  type: Expressionable<('ScheduleTrigger')>;
  typeProperties: Expressionable<ScheduleTriggerTypeProperties>;
}

export interface ScheduleTriggerRecurrence {
  additionalProperties?: Expressionable<any>;
  endTime?: Expressionable<string>;
  frequency?: Expressionable<('NotSpecified' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month' | 'Year')>;
  interval?: Expressionable<number>;
  schedule?: Expressionable<RecurrenceSchedule>;
  startTime?: Expressionable<string>;
  timeZone?: Expressionable<string>;
}

export interface ScheduleTriggerTypeProperties {
  recurrence: Expressionable<ScheduleTriggerRecurrence>;
}

export interface SecretBase {
}

export interface SecureString {
  type: Expressionable<('SecureString')>;
  value: Expressionable<string>;
}

export interface SelfHostedIntegrationRuntime {
  type: Expressionable<('SelfHosted')>;
  typeProperties: Expressionable<LinkedIntegrationRuntimeTypeProperties>;
}

export interface ServiceNowLinkedService {
  type: Expressionable<('ServiceNow')>;
  typeProperties: Expressionable<ServiceNowLinkedServiceTypeProperties>;
}

export interface ServiceNowLinkedServiceTypeProperties {
  authenticationType: Expressionable<('Basic' | 'OAuth2')>;
  clientId?: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface ServiceNowObjectDataset {
  type: Expressionable<('ServiceNowObject')>;
}

export interface ServiceNowSource {
  query?: Expressionable<any>;
  type: Expressionable<('ServiceNowSource')>;
}

export interface SftpServerLinkedService {
  type: Expressionable<('Sftp')>;
  typeProperties: Expressionable<SftpServerLinkedServiceTypeProperties>;
}

export interface SftpServerLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'SshPublicKey')>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  hostKeyFingerprint?: Expressionable<any>;
  passPhrase?: Expressionable<SecretBase>;
  password?: Expressionable<SecretBase>;
  port?: Expressionable<any>;
  privateKeyContent?: Expressionable<SecretBase>;
  privateKeyPath?: Expressionable<any>;
  skipHostKeyValidation?: Expressionable<any>;
  userName?: Expressionable<any>;
}

export interface ShopifyLinkedService {
  type: Expressionable<('Shopify')>;
  typeProperties: Expressionable<ShopifyLinkedServiceTypeProperties>;
}

export interface ShopifyLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ShopifyObjectDataset {
  type: Expressionable<('ShopifyObject')>;
}

export interface ShopifySource {
  query?: Expressionable<any>;
  type: Expressionable<('ShopifySource')>;
}

export interface SparkLinkedService {
  type: Expressionable<('Spark')>;
  typeProperties: Expressionable<SparkLinkedServiceTypeProperties>;
}

export interface SparkLinkedServiceTypeProperties {
  allowHostNameCNMismatch?: Expressionable<any>;
  allowSelfSignedServerCert?: Expressionable<any>;
  authenticationType: Expressionable<('Anonymous' | 'Username' | 'UsernameAndPassword' | 'WindowsAzureHDInsightService')>;
  enableSsl?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  httpPath?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  port: Expressionable<any>;
  serverType?: Expressionable<('SharkServer' | 'SharkServer2' | 'SparkThriftServer')>;
  thriftTransportProtocol?: Expressionable<('Binary' | 'SASL' | 'HTTP ')>;
  trustedCertPath?: Expressionable<any>;
  username?: Expressionable<any>;
  useSystemTrustStore?: Expressionable<any>;
}

export interface SparkObjectDataset {
  type: Expressionable<('SparkObject')>;
}

export interface SparkSource {
  query?: Expressionable<any>;
  type: Expressionable<('SparkSource')>;
}

export interface SqlDWSink {
  allowPolyBase?: Expressionable<any>;
  polyBaseSettings?: Expressionable<PolybaseSettings>;
  preCopyScript?: Expressionable<any>;
  type: Expressionable<('SqlDWSink')>;
}

export interface SqlDWSource {
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlDWSource')>;
}

export interface SqlServerLinkedService {
  type: Expressionable<('SqlServer')>;
  typeProperties: Expressionable<SqlServerLinkedServiceTypeProperties>;
}

export interface SqlServerLinkedServiceTypeProperties {
  connectionString: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  userName?: Expressionable<any>;
}

export interface SqlServerStoredProcedureActivity {
  type: Expressionable<('SqlServerStoredProcedure')>;
  typeProperties: Expressionable<SqlServerStoredProcedureActivityTypeProperties>;
}

export interface SqlServerStoredProcedureActivityTypeProperties {
  storedProcedureName: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
}

export interface SqlServerTableDataset {
  type: Expressionable<('SqlServerTable')>;
  typeProperties: Expressionable<SqlServerTableDatasetTypeProperties>;
}

export interface SqlServerTableDatasetTypeProperties {
  tableName: Expressionable<any>;
}

export interface SqlSink {
  preCopyScript?: Expressionable<any>;
  sqlWriterStoredProcedureName?: Expressionable<any>;
  sqlWriterTableType?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlSink')>;
}

export interface SqlSource {
  sqlReaderQuery?: Expressionable<any>;
  sqlReaderStoredProcedureName?: Expressionable<any>;
  storedProcedureParameters?: Expressionable<any>;
  type: Expressionable<('SqlSource')>;
}

export interface SquareLinkedService {
  type: Expressionable<('Square')>;
  typeProperties: Expressionable<SquareLinkedServiceTypeProperties>;
}

export interface SquareLinkedServiceTypeProperties {
  clientId: Expressionable<any>;
  clientSecret?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  redirectUri: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface SquareObjectDataset {
  type: Expressionable<('SquareObject')>;
}

export interface SquareSource {
  query?: Expressionable<any>;
  type: Expressionable<('SquareSource')>;
}

export interface SSISAccessCredential {
  domain: Expressionable<any>;
  password: Expressionable<SecretBase>;
  userName: Expressionable<any>;
}

export interface SSISExecutionCredential {
  domain: Expressionable<any>;
  password: Expressionable<SecureString>;
  userName: Expressionable<any>;
}

export interface SSISExecutionParameter {
  value: Expressionable<any>;
}

export interface SSISLogLocation {
  logPath: Expressionable<any>;
  type: Expressionable<('File')>;
  typeProperties: Expressionable<SSISLogLocationTypeProperties>;
}

export interface SSISLogLocationTypeProperties {
  accessCredential?: Expressionable<SSISAccessCredential>;
  logRefreshInterval?: Expressionable<any>;
}

export interface SSISPackageLocation {
  packagePath: Expressionable<any>;
  type?: Expressionable<('SSISDB' | 'File')>;
  typeProperties?: Expressionable<SSISPackageLocationTypeProperties>;
}

export interface SSISPackageLocationTypeProperties {
  accessCredential?: Expressionable<SSISAccessCredential>;
  configurationPath?: Expressionable<any>;
  packagePassword?: Expressionable<SecretBase>;
}

export interface SSISPropertyOverride {
  isSensitive?: Expressionable<boolean>;
  value: Expressionable<any>;
}

export interface StagingSettings {
  additionalProperties?: Expressionable<any>;
  enableCompression?: Expressionable<any>;
  linkedServiceName: Expressionable<LinkedServiceReference>;
  path?: Expressionable<any>;
}

export interface StoredProcedureParameter {
  type?: Expressionable<any>;
  value: Expressionable<any>;
}

export interface SybaseLinkedService {
  type: Expressionable<('Sybase')>;
  typeProperties: Expressionable<SybaseLinkedServiceTypeProperties>;
}

export interface SybaseLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  database: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  schema?: Expressionable<any>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface TeradataLinkedService {
  type: Expressionable<('Teradata')>;
  typeProperties: Expressionable<TeradataLinkedServiceTypeProperties>;
}

export interface TeradataLinkedServiceTypeProperties {
  authenticationType?: Expressionable<('Basic' | 'Windows')>;
  encryptedCredential?: Expressionable<any>;
  password?: Expressionable<SecretBase>;
  server: Expressionable<any>;
  username?: Expressionable<any>;
}

export interface TextFormat {
  columnDelimiter?: Expressionable<any>;
  encodingName?: Expressionable<any>;
  escapeChar?: Expressionable<any>;
  firstRowAsHeader?: Expressionable<any>;
  nullValue?: Expressionable<any>;
  quoteChar?: Expressionable<any>;
  rowDelimiter?: Expressionable<any>;
  skipLineCount?: Expressionable<any>;
  treatEmptyAsNull?: Expressionable<any>;
  type: Expressionable<('TextFormat')>;
}

export interface Trigger {
  additionalProperties?: Expressionable<any>;
  description?: Expressionable<string>;
}

export interface TriggerPipelineReference {
  parameters?: Expressionable<any>;
  pipelineReference?: Expressionable<PipelineReference>;
}

export interface TumblingWindowTrigger {
  pipeline: Expressionable<TriggerPipelineReference>;
  type: Expressionable<('TumblingWindowTrigger')>;
  typeProperties: Expressionable<TumblingWindowTriggerTypeProperties>;
}

export interface TumblingWindowTriggerTypeProperties {
  delay?: Expressionable<any>;
  endTime?: Expressionable<string>;
  frequency: Expressionable<('Minute' | 'Hour')>;
  interval: Expressionable<number>;
  maxConcurrency: Expressionable<number>;
  retryPolicy?: Expressionable<RetryPolicy>;
  startTime: Expressionable<string>;
}

export interface UntilActivity {
  type: Expressionable<('Until')>;
  typeProperties: Expressionable<UntilActivityTypeProperties>;
}

export interface UntilActivityTypeProperties {
  activities: Expressionable<Activity[]>;
  expression: Expressionable<Expression>;
  timeout?: Expressionable<any>;
}

export interface VerticaLinkedService {
  type: Expressionable<('Vertica')>;
  typeProperties: Expressionable<VerticaLinkedServiceTypeProperties>;
}

export interface VerticaLinkedServiceTypeProperties {
  connectionString?: Expressionable<any>;
  encryptedCredential?: Expressionable<any>;
}

export interface VerticaSource {
  query?: Expressionable<any>;
  type: Expressionable<('VerticaSource')>;
}

export interface VerticaTableDataset {
  type: Expressionable<('VerticaTable')>;
}

export interface WaitActivity {
  type: Expressionable<('Wait')>;
  typeProperties: Expressionable<WaitActivityTypeProperties>;
}

export interface WaitActivityTypeProperties {
  waitTimeInSeconds: Expressionable<number>;
}

export interface WebActivity {
  type: Expressionable<('WebActivity')>;
  typeProperties: Expressionable<WebActivityTypeProperties>;
}

export interface WebActivityAuthentication {
  password?: Expressionable<SecureString>;
  pfx?: Expressionable<SecureString>;
  resource?: Expressionable<string>;
  type: Expressionable<string>;
  username?: Expressionable<string>;
}

export interface WebActivityTypeProperties {
  authentication?: Expressionable<WebActivityAuthentication>;
  body?: Expressionable<any>;
  datasets?: Expressionable<DatasetReference[]>;
  headers?: Expressionable<any>;
  linkedServices?: Expressionable<LinkedServiceReference[]>;
  method: Expressionable<('GET' | 'POST' | 'PUT' | 'DELETE')>;
  url: Expressionable<any>;
}

export interface WebAnonymousAuthentication {
  authenticationType: Expressionable<('Anonymous')>;
}

export interface WebBasicAuthentication {
  authenticationType: Expressionable<('Basic')>;
  password: Expressionable<SecretBase>;
  username: Expressionable<any>;
}

export interface WebClientCertificateAuthentication {
  authenticationType: Expressionable<('ClientCertificate')>;
  password: Expressionable<SecretBase>;
  pfx: Expressionable<SecretBase>;
}

export interface WebLinkedService {
  type: Expressionable<('Web')>;
  typeProperties: Expressionable<WebLinkedServiceTypeProperties>;
}

export interface WebLinkedServiceTypeProperties {
  url: Expressionable<any>;
}

export interface WebSource {
  type: Expressionable<('WebSource')>;
}

export interface WebTableDataset {
  type: Expressionable<('WebTable')>;
  typeProperties: Expressionable<WebTableDatasetTypeProperties>;
}

export interface WebTableDatasetTypeProperties {
  index: Expressionable<any>;
  path?: Expressionable<any>;
}

export interface XeroLinkedService {
  type: Expressionable<('Xero')>;
  typeProperties: Expressionable<XeroLinkedServiceTypeProperties>;
}

export interface XeroLinkedServiceTypeProperties {
  consumerKey?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  host: Expressionable<any>;
  privateKey?: Expressionable<SecretBase>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface XeroObjectDataset {
  type: Expressionable<('XeroObject')>;
}

export interface XeroSource {
  query?: Expressionable<any>;
  type: Expressionable<('XeroSource')>;
}

export interface ZohoLinkedService {
  type: Expressionable<('Zoho')>;
  typeProperties: Expressionable<ZohoLinkedServiceTypeProperties>;
}

export interface ZohoLinkedServiceTypeProperties {
  accessToken?: Expressionable<SecretBase>;
  encryptedCredential?: Expressionable<any>;
  endpoint: Expressionable<any>;
  useEncryptedEndpoints?: Expressionable<any>;
  useHostVerification?: Expressionable<any>;
  usePeerVerification?: Expressionable<any>;
}

export interface ZohoObjectDataset {
  type: Expressionable<('ZohoObject')>;
}

export interface ZohoSource {
  query?: Expressionable<any>;
  type: Expressionable<('ZohoSource')>;
}

export namespace factories {
  export function create(name: Expressionable<string>, properties: FactoryProperties, location: Expressionable<string>): ResourceDefinition<FactoryProperties> {
    return {
      type: 'Microsoft.DataFactory/factories',
      apiVersion: '2017-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace factories {
  export namespace datasets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Dataset, location: Expressionable<string>): ResourceDefinition<Dataset> {
      return {
        type: 'Microsoft.DataFactory/factories/datasets',
        apiVersion: '2017-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace integrationRuntimes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IntegrationRuntime, location: Expressionable<string>): ResourceDefinition<IntegrationRuntime> {
      return {
        type: 'Microsoft.DataFactory/factories/integrationRuntimes',
        apiVersion: '2017-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace linkedservices {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LinkedService, location: Expressionable<string>): ResourceDefinition<LinkedService> {
      return {
        type: 'Microsoft.DataFactory/factories/linkedservices',
        apiVersion: '2017-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace pipelines {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Pipeline, location: Expressionable<string>): ResourceDefinition<Pipeline> {
      return {
        type: 'Microsoft.DataFactory/factories/pipelines',
        apiVersion: '2017-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace factories {
  export namespace triggers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Trigger, location: Expressionable<string>): ResourceDefinition<Trigger> {
      return {
        type: 'Microsoft.DataFactory/factories/triggers',
        apiVersion: '2017-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
