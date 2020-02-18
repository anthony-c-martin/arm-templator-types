import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface SBAuthorizationRuleProperties {
  rights: Expressionable<('Manage' | 'Send' | 'Listen')[]>;
}

export interface SBNamespaceProperties {
}

export namespace namespaces {
  export function create(name: Expressionable<string>, properties: any): ResourceDefinition<any> {
    return {
      type: 'Microsoft.NotificationHubs/namespaces',
      apiVersion: '2015-04-01',
      name: name,
      properties,
    };
  }
}
export namespace namespaces {
  export namespace AuthorizationRules {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): ResourceDefinition<SBAuthorizationRuleProperties> {
      return {
        type: 'Microsoft.NotificationHubs/namespaces/AuthorizationRules',
        apiVersion: '2015-04-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace notificationHubs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.NotificationHubs/namespaces/notificationHubs',
        apiVersion: '2015-04-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace namespaces {
  export namespace NotificationHubs {
    export namespace authorizationRules {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SBAuthorizationRuleProperties): ResourceDefinition<SBAuthorizationRuleProperties> {
        return {
          type: 'Microsoft.NotificationHubs/namespaces/NotificationHubs/authorizationRules',
          apiVersion: '2015-04-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}