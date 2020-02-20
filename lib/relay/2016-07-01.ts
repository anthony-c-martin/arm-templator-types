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
  tier: Expressionable<('Standard')>;
}

export interface WcfRelayProperties {
  relayType?: Expressionable<('NetTcp' | 'Http')>;
  requiresClientAuthorization?: Expressionable<boolean>;
  requiresTransportSecurity?: Expressionable<boolean>;
  userMetadata?: Expressionable<string>;
}

export namespace namespaces {
  export interface AddedResourceProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type NamespacesResource = ResourceDefinition<RelayNamespaceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RelayNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): NamespacesResource {
    return {
      type: 'Microsoft.Relay/namespaces',
      apiVersion: '2016-07-01',
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
    export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
      return {
        type: 'Microsoft.Relay/namespaces/AuthorizationRules',
        apiVersion: '2016-07-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace HybridConnections {
    export type HybridConnectionsResource = ResourceDefinition<HybridConnectionProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: HybridConnectionProperties): HybridConnectionsResource {
      return {
        type: 'Microsoft.Relay/namespaces/HybridConnections',
        apiVersion: '2016-07-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace HybridConnections {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules',
          apiVersion: '2016-07-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace WcfRelays {
    export type WcfRelaysResource = ResourceDefinition<WcfRelayProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WcfRelayProperties): WcfRelaysResource {
      return {
        type: 'Microsoft.Relay/namespaces/WcfRelays',
        apiVersion: '2016-07-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace WcfRelays {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<AuthorizationRuleProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules',
          apiVersion: '2016-07-01',
          name: name,
          properties,
        };
      }
    }
  }
}