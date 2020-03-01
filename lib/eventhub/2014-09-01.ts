import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<NamespaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: NamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.EventHub/namespaces',
      apiVersion: '2014-09-01',
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
        type: 'Microsoft.EventHub/namespaces/AuthorizationRules',
        apiVersion: '2014-09-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export type EventhubsResource = ResourceDefinition<EventHubProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventHubProperties, location: Expressionable<string>): EventhubsResource {
      return {
        type: 'Microsoft.EventHub/namespaces/eventhubs',
        apiVersion: '2014-09-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules',
          apiVersion: '2014-09-01',
          name: name,
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
      export type ConsumergroupsResource = ResourceDefinition<ConsumerGroupProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ConsumerGroupProperties, location: Expressionable<string>): ConsumergroupsResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups',
          apiVersion: '2014-09-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}