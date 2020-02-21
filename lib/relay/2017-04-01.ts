import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface HybridConnectionProperties {
  requiresClientAuthorization?: Expressionable<boolean>;
  userMetadata?: Expressionable<string>;
}

export interface RelayNamespaceProperties {
}

export interface Sku {
  name: Expressionable<('Standard')>;
  tier?: Expressionable<('Standard')>;
}

export interface WcfRelayProperties {
  relayType?: Expressionable<('NetTcp' | 'Http')>;
  requiresClientAuthorization?: Expressionable<boolean>;
  requiresTransportSecurity?: Expressionable<boolean>;
  userMetadata?: Expressionable<string>;
}

export namespace namespaces {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<RelayNamespaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: RelayNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.Relay/namespaces',
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
  export namespace authorizationRules {
    export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
      return {
        type: 'Microsoft.Relay/namespaces/authorizationRules',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace hybridConnections {
    export type HybridConnectionsResource = ResourceDefinition<HybridConnectionProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: HybridConnectionProperties): HybridConnectionsResource {
      return {
        type: 'Microsoft.Relay/namespaces/hybridConnections',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace hybridConnections {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace wcfRelays {
    export type WcfRelaysResource = ResourceDefinition<WcfRelayProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WcfRelayProperties): WcfRelaysResource {
      return {
        type: 'Microsoft.Relay/namespaces/wcfRelays',
        apiVersion: '2017-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace wcfRelays {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules',
          apiVersion: '2017-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}