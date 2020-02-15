// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-11-01-preview/Microsoft.OperationalInsights.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface LinkedServiceProperties {
  resourceId: Expressionable<string>;
}

export interface PrivateEndpointConnectionProperties {
  privateEndpoint?: Expressionable<PrivateEndpointProperty>;
  privateLinkServiceConnectionState?: Expressionable<PrivateLinkServiceConnectionStateProperty>;
}

export interface PrivateEndpointProperty {
  id?: Expressionable<string>;
}

export interface PrivateLinkServiceConnectionStateProperty {
  description: Expressionable<string>;
  status: Expressionable<string>;
}

export interface Sku {
  name: Expressionable<('Free' | 'Standard' | 'Premium' | 'PerNode' | 'PerGB2018' | 'Standalone')>;
}

export interface WorkspaceProperties {
  provisioningState?: Expressionable<('Creating' | 'Succeeded' | 'Failed' | 'Canceled' | 'Deleting' | 'ProvisioningAccount')>;
  retentionInDays?: Expressionable<number>;
  sku?: Expressionable<Sku>;
}

export namespace workspaces {
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location: Expressionable<string>): ResourceDefinition<WorkspaceProperties> {
    return {
      type: 'Microsoft.OperationalInsights/workspaces',
      apiVersion: '2015-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace workspaces {
  export namespace dataSources {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ResourceDefinition<any> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/dataSources',
        apiVersion: '2015-11-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace linkedServices {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LinkedServiceProperties, location: Expressionable<string>): ResourceDefinition<LinkedServiceProperties> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/linkedServices',
        apiVersion: '2015-11-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace workspaces {
  export namespace privateEndpointConnections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties, location: Expressionable<string>): ResourceDefinition<PrivateEndpointConnectionProperties> {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/privateEndpointConnections',
        apiVersion: '2015-11-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
