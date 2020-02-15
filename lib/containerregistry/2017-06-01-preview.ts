// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2017-06-01-preview/Microsoft.ContainerRegistry.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface RegistryProperties {
  adminUserEnabled?: Expressionable<boolean>;
  storageAccount?: Expressionable<StorageAccountProperties>;
}

export interface ReplicationProperties {
}

export interface Sku {
  name: Expressionable<('Basic' | 'Managed_Basic' | 'Managed_Standard' | 'Managed_Premium')>;
}

export interface StorageAccountProperties {
  id: Expressionable<string>;
}

export interface WebhookPropertiesCreateParameters {
  actions: Expressionable<('push' | 'delete')[]>;
  customHeaders?: Expressionable<any>;
  scope?: Expressionable<string>;
  serviceUri: Expressionable<string>;
  status?: Expressionable<('enabled' | 'disabled')>;
}

export namespace registries {
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>): ResourceDefinition<RegistryProperties> {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace registries {
  export namespace replications {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ReplicationProperties, location: Expressionable<string>): ResourceDefinition<ReplicationProperties> {
      return {
        type: 'Microsoft.ContainerRegistry/registries/replications',
        apiVersion: '2017-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace registries {
  export namespace webhooks {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WebhookPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<WebhookPropertiesCreateParameters> {
      return {
        type: 'Microsoft.ContainerRegistry/registries/webhooks',
        apiVersion: '2017-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
