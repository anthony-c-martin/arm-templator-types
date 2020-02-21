import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AvroSerialization {
  properties?: Expressionable<any>;
  type: Expressionable<('Avro')>;
}

export interface AzureDataLakeStoreOutputDataSource {
  properties?: Expressionable<AzureDataLakeStoreOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.DataLake/Accounts')>;
}

export interface AzureDataLakeStoreOutputDataSourceProperties {
  accountName?: Expressionable<string>;
  dateFormat?: Expressionable<string>;
  filePathPrefix?: Expressionable<string>;
  refreshToken?: Expressionable<string>;
  tenantId?: Expressionable<string>;
  timeFormat?: Expressionable<string>;
  tokenUserDisplayName?: Expressionable<string>;
  tokenUserPrincipalName?: Expressionable<string>;
}

export interface AzureMachineLearningWebServiceFunctionBinding {
  properties?: Expressionable<AzureMachineLearningWebServiceFunctionBindingProperties>;
  type: Expressionable<('Microsoft.MachineLearning/WebService')>;
}

export interface AzureMachineLearningWebServiceFunctionBindingProperties {
  apiKey?: Expressionable<string>;
  batchSize?: Expressionable<number>;
  endpoint?: Expressionable<string>;
  inputs?: Expressionable<AzureMachineLearningWebServiceInputs>;
  outputs?: Expressionable<AzureMachineLearningWebServiceOutputColumn[]>;
}

export interface AzureMachineLearningWebServiceInputColumn {
  dataType?: Expressionable<string>;
  mapTo?: Expressionable<number>;
  name?: Expressionable<string>;
}

export interface AzureMachineLearningWebServiceInputs {
  columnNames?: Expressionable<AzureMachineLearningWebServiceInputColumn[]>;
  name?: Expressionable<string>;
}

export interface AzureMachineLearningWebServiceOutputColumn {
  dataType?: Expressionable<string>;
  name?: Expressionable<string>;
}

export interface AzureSqlDatabaseOutputDataSource {
  properties?: Expressionable<AzureSqlDatabaseOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.Sql/Server/Database')>;
}

export interface AzureSqlDatabaseOutputDataSourceProperties {
  database?: Expressionable<string>;
  password?: Expressionable<string>;
  server?: Expressionable<string>;
  table?: Expressionable<string>;
  user?: Expressionable<string>;
}

export interface AzureTableOutputDataSource {
  properties?: Expressionable<AzureTableOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.Storage/Table')>;
}

export interface AzureTableOutputDataSourceProperties {
  accountKey?: Expressionable<string>;
  accountName?: Expressionable<string>;
  batchSize?: Expressionable<number>;
  columnsToRemove?: Expressionable<string[]>;
  partitionKey?: Expressionable<string>;
  rowKey?: Expressionable<string>;
  table?: Expressionable<string>;
}

export interface BlobOutputDataSource {
  properties?: Expressionable<BlobOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.Storage/Blob')>;
}

export interface BlobOutputDataSourceProperties {
  container?: Expressionable<string>;
  dateFormat?: Expressionable<string>;
  pathPattern?: Expressionable<string>;
  storageAccounts?: Expressionable<StorageAccount[]>;
  timeFormat?: Expressionable<string>;
}

export interface BlobReferenceInputDataSource {
  properties?: Expressionable<BlobReferenceInputDataSourceProperties>;
  type: Expressionable<('Microsoft.Storage/Blob')>;
}

export interface BlobReferenceInputDataSourceProperties {
  container?: Expressionable<string>;
  dateFormat?: Expressionable<string>;
  pathPattern?: Expressionable<string>;
  storageAccounts?: Expressionable<StorageAccount[]>;
  timeFormat?: Expressionable<string>;
}

export interface BlobStreamInputDataSource {
  properties?: Expressionable<BlobStreamInputDataSourceProperties>;
  type: Expressionable<('Microsoft.Storage/Blob')>;
}

export interface BlobStreamInputDataSourceProperties {
  container?: Expressionable<string>;
  dateFormat?: Expressionable<string>;
  pathPattern?: Expressionable<string>;
  sourcePartitionCount?: Expressionable<number>;
  storageAccounts?: Expressionable<StorageAccount[]>;
  timeFormat?: Expressionable<string>;
}

export interface CsvSerialization {
  properties?: Expressionable<CsvSerializationProperties>;
  type: Expressionable<('Csv')>;
}

export interface CsvSerializationProperties {
  encoding?: Expressionable<('UTF8')>;
  fieldDelimiter?: Expressionable<string>;
}

export interface DocumentDbOutputDataSource {
  properties?: Expressionable<DocumentDbOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.Storage/DocumentDB')>;
}

export interface DocumentDbOutputDataSourceProperties {
  accountId?: Expressionable<string>;
  accountKey?: Expressionable<string>;
  collectionNamePattern?: Expressionable<string>;
  database?: Expressionable<string>;
  documentId?: Expressionable<string>;
  partitionKey?: Expressionable<string>;
}

export interface EventHubOutputDataSource {
  properties?: Expressionable<EventHubOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.ServiceBus/EventHub')>;
}

export interface EventHubOutputDataSourceProperties {
  eventHubName?: Expressionable<string>;
  partitionKey?: Expressionable<string>;
  serviceBusNamespace?: Expressionable<string>;
  sharedAccessPolicyKey?: Expressionable<string>;
  sharedAccessPolicyName?: Expressionable<string>;
}

export interface EventHubStreamInputDataSource {
  properties?: Expressionable<EventHubStreamInputDataSourceProperties>;
  type: Expressionable<('Microsoft.ServiceBus/EventHub')>;
}

export interface EventHubStreamInputDataSourceProperties {
  consumerGroupName?: Expressionable<string>;
  eventHubName?: Expressionable<string>;
  serviceBusNamespace?: Expressionable<string>;
  sharedAccessPolicyKey?: Expressionable<string>;
  sharedAccessPolicyName?: Expressionable<string>;
}

export interface Function {
  name?: Expressionable<string>;
  properties?: Expressionable<FunctionProperties>;
}

export interface FunctionBinding {
}

export interface FunctionInput {
  dataType?: Expressionable<string>;
  isConfigurationParameter?: Expressionable<boolean>;
}

export interface FunctionOutput {
  dataType?: Expressionable<string>;
}

export interface FunctionProperties {
}

export interface Input {
  name?: Expressionable<string>;
  properties?: Expressionable<InputProperties>;
}

export interface InputProperties {
  serialization?: Expressionable<Serialization>;
}

export interface IoTHubStreamInputDataSource {
  properties?: Expressionable<IoTHubStreamInputDataSourceProperties>;
  type: Expressionable<('Microsoft.Devices/IotHubs')>;
}

export interface IoTHubStreamInputDataSourceProperties {
  consumerGroupName?: Expressionable<string>;
  endpoint?: Expressionable<string>;
  iotHubNamespace?: Expressionable<string>;
  sharedAccessPolicyKey?: Expressionable<string>;
  sharedAccessPolicyName?: Expressionable<string>;
}

export interface JavaScriptFunctionBinding {
  properties?: Expressionable<JavaScriptFunctionBindingProperties>;
  type: Expressionable<('Microsoft.StreamAnalytics/JavascriptUdf')>;
}

export interface JavaScriptFunctionBindingProperties {
  script?: Expressionable<string>;
}

export interface JsonSerialization {
  properties?: Expressionable<JsonSerializationProperties>;
  type: Expressionable<('Json')>;
}

export interface JsonSerializationProperties {
  encoding?: Expressionable<('UTF8')>;
  format?: Expressionable<('LineSeparated' | 'Array')>;
}

export interface Output {
  name?: Expressionable<string>;
  properties?: Expressionable<OutputProperties>;
}

export interface OutputDataSource {
}

export interface OutputProperties {
  datasource?: Expressionable<OutputDataSource>;
  serialization?: Expressionable<Serialization>;
}

export interface PowerBIOutputDataSource {
  properties?: Expressionable<PowerBIOutputDataSourceProperties>;
  type: Expressionable<('PowerBI')>;
}

export interface PowerBIOutputDataSourceProperties {
  dataset?: Expressionable<string>;
  groupId?: Expressionable<string>;
  groupName?: Expressionable<string>;
  refreshToken?: Expressionable<string>;
  table?: Expressionable<string>;
  tokenUserDisplayName?: Expressionable<string>;
  tokenUserPrincipalName?: Expressionable<string>;
}

export interface ReferenceInputDataSource {
}

export interface ReferenceInputProperties {
  datasource?: Expressionable<ReferenceInputDataSource>;
  type: Expressionable<('Reference')>;
}

export interface ScalarFunctionConfiguration {
  binding?: Expressionable<FunctionBinding>;
  inputs?: Expressionable<FunctionInput[]>;
  output?: Expressionable<FunctionOutput>;
}

export interface ScalarFunctionProperties {
  properties?: Expressionable<ScalarFunctionConfiguration>;
  type: Expressionable<('Scalar')>;
}

export interface Serialization {
}

export interface ServiceBusQueueOutputDataSource {
  properties?: Expressionable<ServiceBusQueueOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.ServiceBus/Queue')>;
}

export interface ServiceBusQueueOutputDataSourceProperties {
  propertyColumns?: Expressionable<string[]>;
  queueName?: Expressionable<string>;
  serviceBusNamespace?: Expressionable<string>;
  sharedAccessPolicyKey?: Expressionable<string>;
  sharedAccessPolicyName?: Expressionable<string>;
}

export interface ServiceBusTopicOutputDataSource {
  properties?: Expressionable<ServiceBusTopicOutputDataSourceProperties>;
  type: Expressionable<('Microsoft.ServiceBus/Topic')>;
}

export interface ServiceBusTopicOutputDataSourceProperties {
  propertyColumns?: Expressionable<string[]>;
  serviceBusNamespace?: Expressionable<string>;
  sharedAccessPolicyKey?: Expressionable<string>;
  sharedAccessPolicyName?: Expressionable<string>;
  topicName?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<('Standard')>;
}

export interface StorageAccount {
  accountKey?: Expressionable<string>;
  accountName?: Expressionable<string>;
}

export interface StreamingJobProperties {
  compatibilityLevel?: Expressionable<('1.0')>;
  dataLocale?: Expressionable<string>;
  eventsLateArrivalMaxDelayInSeconds?: Expressionable<number>;
  eventsOutOfOrderMaxDelayInSeconds?: Expressionable<number>;
  eventsOutOfOrderPolicy?: Expressionable<('Adjust' | 'Drop')>;
  functions?: Expressionable<Function[]>;
  inputs?: Expressionable<Input[]>;
  outputErrorPolicy?: Expressionable<('Stop' | 'Drop')>;
  outputs?: Expressionable<Output[]>;
  outputStartMode?: Expressionable<('JobStartTime' | 'CustomTime' | 'LastOutputEventTime')>;
  outputStartTime?: Expressionable<string>;
  sku?: Expressionable<Sku>;
  transformation?: Expressionable<Transformation>;
}

export interface StreamInputDataSource {
}

export interface StreamInputProperties {
  datasource?: Expressionable<StreamInputDataSource>;
  type: Expressionable<('Stream')>;
}

export interface Transformation {
  name?: Expressionable<string>;
  properties?: Expressionable<TransformationProperties>;
}

export interface TransformationProperties {
  query?: Expressionable<string>;
  streamingUnits?: Expressionable<number>;
}

export namespace streamingjobs {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type StreamingjobsResource = ResourceDefinition<StreamingJobProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: StreamingJobProperties, location?: Expressionable<string>, tags?: Expressionable<any>): StreamingjobsResource {
    return {
      type: 'Microsoft.StreamAnalytics/streamingjobs',
      apiVersion: '2016-03-01',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace streamingjobs {
  export namespace functions {
    export type FunctionsResource = ResourceDefinition<FunctionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FunctionProperties): FunctionsResource {
      return {
        type: 'Microsoft.StreamAnalytics/streamingjobs/functions',
        apiVersion: '2016-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace streamingjobs {
  export namespace inputs {
    export type InputsResource = ResourceDefinition<InputProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: InputProperties): InputsResource {
      return {
        type: 'Microsoft.StreamAnalytics/streamingjobs/inputs',
        apiVersion: '2016-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace streamingjobs {
  export namespace outputs {
    export type OutputsResource = ResourceDefinition<OutputProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: OutputProperties): OutputsResource {
      return {
        type: 'Microsoft.StreamAnalytics/streamingjobs/outputs',
        apiVersion: '2016-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace streamingjobs {
  export namespace transformations {
    export type TransformationsResource = ResourceDefinition<TransformationProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TransformationProperties): TransformationsResource {
      return {
        type: 'Microsoft.StreamAnalytics/streamingjobs/transformations',
        apiVersion: '2016-03-01',
        name: name,
        properties,
      };
    }
  }
}