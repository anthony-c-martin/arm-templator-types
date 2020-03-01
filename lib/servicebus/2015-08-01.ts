import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface NamespaceProperties {
  createACSNamespace?: Expressionable<boolean>;
  enabled?: Expressionable<boolean>;
  status?: Expressionable<('Unknown' | 'Creating' | 'Created' | 'Activating' | 'Enabling' | 'Active' | 'Disabling' | 'Disabled' | 'SoftDeleting' | 'SoftDeleted' | 'Removing' | 'Removed' | 'Failed')>;
}

export interface QueueProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  deadLetteringOnMessageExpiration?: Expressionable<boolean>;
  defaultMessageTimeToLive?: Expressionable<string>;
  duplicateDetectionHistoryTimeWindow?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  enableExpress?: Expressionable<boolean>;
  enablePartitioning?: Expressionable<boolean>;
  entityAvailabilityStatus?: Expressionable<('Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown')>;
  isAnonymousAccessible?: Expressionable<boolean>;
  lockDuration?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  maxSizeInMegabytes?: Expressionable<number>;
  requiresDuplicateDetection?: Expressionable<boolean>;
  requiresSession?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown')>;
  supportOrdering?: Expressionable<boolean>;
}

export interface SharedAccessAuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  name?: Expressionable<('Basic' | 'Standard' | 'Premium')>;
  tier: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export interface SubscriptionProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  deadLetteringOnFilterEvaluationExceptions?: Expressionable<boolean>;
  deadLetteringOnMessageExpiration?: Expressionable<boolean>;
  defaultMessageTimeToLive?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  entityAvailabilityStatus?: Expressionable<('Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown')>;
  isReadOnly?: Expressionable<boolean>;
  lockDuration?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  requiresSession?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown')>;
}

export interface TopicProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  defaultMessageTimeToLive?: Expressionable<string>;
  duplicateDetectionHistoryTimeWindow?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  enableExpress?: Expressionable<boolean>;
  enablePartitioning?: Expressionable<boolean>;
  entityAvailabilityStatus?: Expressionable<('Available' | 'Limited' | 'Renaming' | 'Restoring' | 'Unknown')>;
  filteringMessagesBeforePublishing?: Expressionable<boolean>;
  isAnonymousAccessible?: Expressionable<boolean>;
  isExpress?: Expressionable<boolean>;
  maxSizeInMegabytes?: Expressionable<number>;
  requiresDuplicateDetection?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Creating' | 'Deleting' | 'Disabled' | 'ReceiveDisabled' | 'Renaming' | 'Restoring' | 'SendDisabled' | 'Unknown')>;
  supportOrdering?: Expressionable<boolean>;
}

export namespace namespaces {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<NamespaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: NamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2015-08-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/AuthorizationRules',
        apiVersion: '2015-08-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace queues {
    export type QueuesResource = ResourceDefinition<QueueProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: QueueProperties, location: Expressionable<string>): QueuesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/queues',
        apiVersion: '2015-08-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace queues {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules',
          apiVersion: '2015-08-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export type TopicsResource = ResourceDefinition<TopicProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TopicProperties, location: Expressionable<string>): TopicsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/topics',
        apiVersion: '2015-08-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules',
          apiVersion: '2015-08-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export namespace subscriptions {
      export type SubscriptionsResource = ResourceDefinition<SubscriptionProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SubscriptionProperties, location: Expressionable<string>): SubscriptionsResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/topics/subscriptions',
          apiVersion: '2015-08-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}