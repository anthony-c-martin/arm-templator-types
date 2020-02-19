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
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: RelayNamespaceProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<RelayNamespaceProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Relay/namespaces',
      apiVersion: '2017-04-01',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace authorizationRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: HybridConnectionProperties): ResourceDefinition<HybridConnectionProperties> {
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
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
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: WcfRelayProperties): ResourceDefinition<WcfRelayProperties> {
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
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AuthorizationRuleProperties): ResourceDefinition<AuthorizationRuleProperties> {
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