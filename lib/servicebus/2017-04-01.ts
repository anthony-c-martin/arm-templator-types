import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Action {
  compatibilityLevel?: Expressionable<number>;
  requiresPreprocessing?: Expressionable<boolean>;
  sqlExpression?: Expressionable<string>;
}

export interface ArmDisasterRecoveryProperties {
  alternateName?: Expressionable<string>;
  partnerNamespace?: Expressionable<string>;
}

export interface CorrelationFilter {
  contentType?: Expressionable<string>;
  correlationId?: Expressionable<string>;
  label?: Expressionable<string>;
  messageId?: Expressionable<string>;
  properties?: Expressionable<any>;
  replyTo?: Expressionable<string>;
  replyToSessionId?: Expressionable<string>;
  requiresPreprocessing?: Expressionable<boolean>;
  sessionId?: Expressionable<string>;
  to?: Expressionable<string>;
}

export interface MigrationConfigPropertiesProperties {
  postMigrationName: Expressionable<string>;
  targetNamespace: Expressionable<string>;
}

export interface NetworkRuleSetProperties {
  defaultAction?: Expressionable<('Allow' | 'Deny')>;
  ipRules?: Expressionable<NWRuleSetIpRules[]>;
  virtualNetworkRules?: Expressionable<NWRuleSetVirtualNetworkRules[]>;
}

export interface NWRuleSetIpRules {
  action?: Expressionable<('Allow')>;
  ipMask?: Expressionable<string>;
}

export interface NWRuleSetVirtualNetworkRules {
  ignoreMissingVnetServiceEndpoint?: Expressionable<boolean>;
  subnet?: Expressionable<Subnet>;
}

export interface Ruleproperties {
  action?: Expressionable<Action>;
  correlationFilter?: Expressionable<CorrelationFilter>;
  filterType?: Expressionable<('SqlFilter' | 'CorrelationFilter')>;
  sqlFilter?: Expressionable<SqlFilter>;
}

export interface SBAuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface SBNamespaceProperties {
}

export interface SBQueueProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  deadLetteringOnMessageExpiration?: Expressionable<boolean>;
  defaultMessageTimeToLive?: Expressionable<string>;
  duplicateDetectionHistoryTimeWindow?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  enableExpress?: Expressionable<boolean>;
  enablePartitioning?: Expressionable<boolean>;
  forwardDeadLetteredMessagesTo?: Expressionable<string>;
  forwardTo?: Expressionable<string>;
  lockDuration?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  maxSizeInMegabytes?: Expressionable<number>;
  requiresDuplicateDetection?: Expressionable<boolean>;
  requiresSession?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Disabled' | 'Restoring' | 'SendDisabled' | 'ReceiveDisabled' | 'Creating' | 'Deleting' | 'Renaming' | 'Unknown')>;
}

export interface SBSku {
  capacity?: Expressionable<number>;
  name: Expressionable<('Basic' | 'Standard' | 'Premium')>;
  tier?: Expressionable<('Basic' | 'Standard' | 'Premium')>;
}

export interface SBSubscriptionProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  deadLetteringOnFilterEvaluationExceptions?: Expressionable<boolean>;
  deadLetteringOnMessageExpiration?: Expressionable<boolean>;
  defaultMessageTimeToLive?: Expressionable<string>;
  duplicateDetectionHistoryTimeWindow?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  forwardDeadLetteredMessagesTo?: Expressionable<string>;
  forwardTo?: Expressionable<string>;
  lockDuration?: Expressionable<string>;
  maxDeliveryCount?: Expressionable<number>;
  requiresSession?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Disabled' | 'Restoring' | 'SendDisabled' | 'ReceiveDisabled' | 'Creating' | 'Deleting' | 'Renaming' | 'Unknown')>;
}

export interface SBTopicProperties {
  autoDeleteOnIdle?: Expressionable<string>;
  defaultMessageTimeToLive?: Expressionable<string>;
  duplicateDetectionHistoryTimeWindow?: Expressionable<string>;
  enableBatchedOperations?: Expressionable<boolean>;
  enableExpress?: Expressionable<boolean>;
  enablePartitioning?: Expressionable<boolean>;
  maxSizeInMegabytes?: Expressionable<number>;
  requiresDuplicateDetection?: Expressionable<boolean>;
  status?: Expressionable<('Active' | 'Disabled' | 'Restoring' | 'SendDisabled' | 'ReceiveDisabled' | 'Creating' | 'Deleting' | 'Renaming' | 'Unknown')>;
  supportOrdering?: Expressionable<boolean>;
}

export interface SqlFilter {
  compatibilityLevel?: Expressionable<number>;
  requiresPreprocessing?: Expressionable<boolean>;
  sqlExpression?: Expressionable<string>;
}

export interface Subnet {
  id: Expressionable<string>;
}

export namespace namespaces {
  export interface AdditionalProps {
    sku?: Expressionable<SBSku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<SBNamespaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: SBNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<SBSku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.ServiceBus/namespaces',
      apiVersion: '2017-04-01',
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
    export type AuthorizationRulesResource = ResourceDefinition<SBAuthorizationRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): AuthorizationRulesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/AuthorizationRules',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace disasterRecoveryConfigs {
    export type DisasterRecoveryConfigsResource = ResourceDefinition<ArmDisasterRecoveryProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ArmDisasterRecoveryProperties): DisasterRecoveryConfigsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace migrationConfigurations {
    export type MigrationConfigurationsResource = ResourceDefinition<MigrationConfigPropertiesProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: MigrationConfigPropertiesProperties): MigrationConfigurationsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/migrationConfigurations',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace networkRuleSets {
    export type NetworkRuleSetsResource = ResourceDefinition<NetworkRuleSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties): NetworkRuleSetsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/networkRuleSets',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace queues {
    export type QueuesResource = ResourceDefinition<SBQueueProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SBQueueProperties): QueuesResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/queues',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace queues {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SBAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/queues/authorizationRules',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export type TopicsResource = ResourceDefinition<SBTopicProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SBTopicProperties): TopicsResource {
      return {
        type: 'Microsoft.ServiceBus/namespaces/topics',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SBAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/topics/authorizationRules',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export namespace subscriptions {
      export type SubscriptionsResource = ResourceDefinition<SBSubscriptionProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SBSubscriptionProperties): SubscriptionsResource {
        return {
          type: 'Microsoft.ServiceBus/namespaces/topics/subscriptions',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace topics {
    export namespace subscriptions {
      export namespace rules {
        export type RulesResource = ResourceDefinition<Ruleproperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Ruleproperties): RulesResource {
          return {
            type: 'Microsoft.ServiceBus/namespaces/topics/subscriptions/rules',
            apiVersion: '2017-04-01',
            name: name,
            properties,
          };
        }
      }
    }
  }
}