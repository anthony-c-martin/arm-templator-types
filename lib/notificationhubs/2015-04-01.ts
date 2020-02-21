import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface SBAuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface SBNamespaceProperties {
}

export namespace namespaces {
  export type NamespacesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): NamespacesResource {
    return {
      type: 'Microsoft.NotificationHubs/namespaces',
      apiVersion: '2015-04-01',
      name: [name],
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export type AuthorizationRulesResource = ResourceDefinition<SBAuthorizationRuleProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): AuthorizationRulesResource {
      return {
        type: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules',
        apiVersion: '2015-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace notificationHubs {
    export type NotificationHubsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): NotificationHubsResource {
      return {
        type: 'Microsoft.NotificationHubs/namespaces/notificationHubs',
        apiVersion: '2015-04-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace NotificationHubs {
    export namespace authorizationRules {
      export type AuthorizationRulesResource = ResourceDefinition<SBAuthorizationRuleProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): AuthorizationRulesResource {
        return {
          type: 'Microsoft.NotificationHubs/namespaces/NotificationHubs/authorizationRules',
          apiVersion: '2015-04-01',
          name: name,
          properties,
        };
      }
    }
  }
}