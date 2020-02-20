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
  export interface AddedResourceProps {
    sku: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type RegistriesResource = ResourceDefinition<RegistryProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>, sku: Expressionable<Sku>, tags?: Expressionable<any>): RegistriesResource {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-06-01-preview',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace registries {
  export namespace replications {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ReplicationsResource = ResourceDefinition<ReplicationProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ReplicationProperties, location: Expressionable<string>, tags?: Expressionable<any>): ReplicationsResource {
      return {
        type: 'Microsoft.ContainerRegistry/registries/replications',
        apiVersion: '2017-06-01-preview',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace registries {
  export namespace webhooks {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type WebhooksResource = ResourceDefinition<WebhookPropertiesCreateParameters> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WebhookPropertiesCreateParameters, location: Expressionable<string>, tags?: Expressionable<any>): WebhooksResource {
      return {
        type: 'Microsoft.ContainerRegistry/registries/webhooks',
        apiVersion: '2017-06-01-preview',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}