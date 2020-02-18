import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ConsumerGroupProperties {
  userMetadata?: Expressionable<string>;
}

export interface EventHubProperties {
  messageRetentionInDays?: Expressionable<number>;
  partitionCount?: Expressionable<number>;
  status?: Expressionable<('Active' | 'Disabled' | 'Restoring' | 'SendDisabled' | 'ReceiveDisabled' | 'Creating' | 'Deleting' | 'Renaming' | 'Unknown')>;
}

export interface NamespaceProperties {
  createdAt?: Expressionable<string>;
  enabled?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
  serviceBusEndpoint?: Expressionable<string>;
  status?: Expressionable<('Unknown' | 'Creating' | 'Created' | 'Activating' | 'Enabling' | 'Active' | 'Disabling' | 'Disabled' | 'SoftDeleting' | 'SoftDeleted' | 'Removing' | 'Removed' | 'Failed')>;
  updatedAt?: Expressionable<string>;
}

export interface SharedAccessAuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  name?: Expressionable<('Basic' | 'Standard')>;
  tier: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export namespace namespaces {
  export function create(name: Expressionable<string>, properties: NamespaceProperties, location: Expressionable<string>): ResourceDefinition<NamespaceProperties> {
    return {
      type: 'Microsoft.EventHub/namespaces',
      apiVersion: '2015-08-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location: Expressionable<string>): ResourceDefinition<SharedAccessAuthorizationRuleProperties> {
      return {
        type: 'Microsoft.EventHub/namespaces/AuthorizationRules',
        apiVersion: '2015-08-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventHubProperties, location: Expressionable<string>): ResourceDefinition<EventHubProperties> {
      return {
        type: 'Microsoft.EventHub/namespaces/eventhubs',
        apiVersion: '2015-08-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export namespace authorizationRules {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location: Expressionable<string>): ResourceDefinition<SharedAccessAuthorizationRuleProperties> {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules',
          apiVersion: '2015-08-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export namespace consumergroups {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ConsumerGroupProperties, location: Expressionable<string>): ResourceDefinition<ConsumerGroupProperties> {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups',
          apiVersion: '2015-08-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}