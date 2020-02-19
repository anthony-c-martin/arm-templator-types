import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: NamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<NamespaceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2015-08-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): ResourceDefinition<SharedAccessAuthorizationRuleProperties> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: QueueProperties, location: Expressionable<string>): ResourceDefinition<QueueProperties> {
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): ResourceDefinition<SharedAccessAuthorizationRuleProperties> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TopicProperties, location: Expressionable<string>): ResourceDefinition<TopicProperties> {
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): ResourceDefinition<SharedAccessAuthorizationRuleProperties> {
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SubscriptionProperties, location: Expressionable<string>): ResourceDefinition<SubscriptionProperties> {
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