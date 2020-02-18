import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: RelayNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<RelayNamespaceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Relay/namespaces',
      apiVersion: '2016-07-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
      return {
        type: 'Microsoft.Relay/namespaces/AuthorizationRules',
        apiVersion: '2016-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace HybridConnections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: HybridConnectionProperties): ResourceDefinition<HybridConnectionProperties> {
      return {
        type: 'Microsoft.Relay/namespaces/HybridConnections',
        apiVersion: '2016-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace HybridConnections {
    export namespace authorizationRules {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
        return {
          type: 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules',
          apiVersion: '2016-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace namespaces {
  export namespace WcfRelays {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WcfRelayProperties): ResourceDefinition<WcfRelayProperties> {
      return {
        type: 'Microsoft.Relay/namespaces/WcfRelays',
        apiVersion: '2016-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace WcfRelays {
    export namespace authorizationRules {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
        return {
          type: 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules',
          apiVersion: '2016-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}