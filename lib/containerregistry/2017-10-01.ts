import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface IPRule {
  action?: Expressionable<('Allow')>;
  value: Expressionable<string>;
}

export interface NetworkRuleSet {
  defaultAction: Expressionable<('Allow' | 'Deny')>;
  ipRules?: Expressionable<IPRule[]>;
  virtualNetworkRules?: Expressionable<VirtualNetworkRule[]>;
}

export interface RegistryProperties {
  adminUserEnabled?: Expressionable<boolean>;
  networkRuleSet?: Expressionable<NetworkRuleSet>;
  storageAccount?: Expressionable<StorageAccountProperties>;
}

export interface ReplicationProperties {
}

export interface Sku {
  name: Expressionable<('Classic' | 'Basic' | 'Standard' | 'Premium')>;
}

export interface StorageAccountProperties {
  id: Expressionable<string>;
}

export interface VirtualNetworkRule {
  action?: Expressionable<('Allow')>;
  id: Expressionable<string>;
}

export interface WebhookPropertiesCreateParameters {
  actions: Expressionable<('push' | 'delete' | 'quarantine' | 'chart_push' | 'chart_delete')[]>;
  customHeaders?: Expressionable<any>;
  scope?: Expressionable<string>;
  serviceUri: Expressionable<string>;
  status?: Expressionable<('enabled' | 'disabled')>;
}

export namespace registries {
  export function create(name: Expressionable<string>, properties: RegistryProperties, location: Expressionable<string>): ResourceDefinition<RegistryProperties> {
    return {
      type: 'Microsoft.ContainerRegistry/registries',
      apiVersion: '2017-10-01',
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
        apiVersion: '2017-10-01',
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
        apiVersion: '2017-10-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}