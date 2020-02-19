import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<RegistryProperties> & AdditionalProps {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-06-01-preview',
      name: [name],
      location,
      sku,
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
        name: name,
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
        name: name,
        location,
        properties,
      };
    }
  }
}