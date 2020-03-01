import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface ArmDisasterRecoveryProperties {
  alternateName?: Expressionable<string>;
  partnerNamespace?: Expressionable<string>;
}

export interface AuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface CaptureDescription {
  destination?: Expressionable<Destination>;
  enabled?: Expressionable<boolean>;
  encoding?: Expressionable<('Avro' | 'AvroDeflate')>;
  intervalInSeconds?: Expressionable<number>;
  sizeLimitInBytes?: Expressionable<number>;
  skipEmptyArchives?: Expressionable<boolean>;
}

export interface ConsumerGroupProperties {
  userMetadata?: Expressionable<string>;
}

export interface Destination {
  name?: Expressionable<string>;
  properties?: Expressionable<DestinationProperties>;
}

export interface DestinationProperties {
  archiveNameFormat?: Expressionable<string>;
  blobContainer?: Expressionable<string>;
  storageAccountResourceId?: Expressionable<string>;
}

export interface EHNamespaceProperties {
  isAutoInflateEnabled?: Expressionable<boolean>;
  kafkaEnabled?: Expressionable<boolean>;
  maximumThroughputUnits?: Expressionable<number>;
}

export interface EventhubProperties {
  captureDescription?: Expressionable<CaptureDescription>;
  messageRetentionInDays?: Expressionable<number>;
  partitionCount?: Expressionable<number>;
  status?: Expressionable<('Active' | 'Disabled' | 'Restoring' | 'SendDisabled' | 'ReceiveDisabled' | 'Creating' | 'Deleting' | 'Renaming' | 'Unknown')>;
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

export interface Sku {
  capacity?: Expressionable<number>;
  name: Expressionable<('Basic' | 'Standard')>;
  tier?: Expressionable<('Basic' | 'Standard')>;
}

export interface Subnet {
  id: Expressionable<string>;
}

export namespace namespaces {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<EHNamespaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: EHNamespaceProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.EventHub/namespaces',
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
    export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
      return {
        type: 'Microsoft.EventHub/namespaces/AuthorizationRules',
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
        type: 'Microsoft.EventHub/namespaces/disasterRecoveryConfigs',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export type EventhubsResource = ResourceDefinition<EventhubProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EventhubProperties): EventhubsResource {
      return {
        type: 'Microsoft.EventHub/namespaces/eventhubs',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace eventhubs {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules',
          apiVersion: '2017-04-01',
          name: name,
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
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ConsumerGroupProperties): ConsumergroupsResource {
        return {
          type: 'Microsoft.EventHub/namespaces/eventhubs/consumergroups',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace networkRuleSets {
    export type NetworkRuleSetsResource = ResourceDefinition<NetworkRuleSetProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: NetworkRuleSetProperties): NetworkRuleSetsResource {
      return {
        type: 'Microsoft.EventHub/namespaces/networkRuleSets',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}