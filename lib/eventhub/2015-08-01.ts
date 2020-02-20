import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  export interface AddedResourceProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<NamespaceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: NamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.EventHub/namespaces',
      apiVersion: '2015-08-01',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
      return {
        type: 'Microsoft.EventHub/namespaces/AuthorizationRules',
        apiVersion: '2015-08-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export type EventhubsResource = ResourceDefinition<EventHubProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventHubProperties, location: Expressionable<string>): EventhubsResource {
      return {
        type: 'Microsoft.EventHub/namespaces/eventhubs',
        apiVersion: '2015-08-01',
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
      export type AuthorizationRulesResource = ResourceDefinition<SharedAccessAuthorizationRuleProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SharedAccessAuthorizationRuleProperties, location?: Expressionable<string>): AuthorizationRulesResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules',
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
  export namespace eventhubs {
    export namespace consumergroups {
      export type ConsumergroupsResource = ResourceDefinition<ConsumerGroupProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ConsumerGroupProperties, location: Expressionable<string>): ConsumergroupsResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups',
          apiVersion: '2015-08-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}