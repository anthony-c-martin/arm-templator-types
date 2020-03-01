import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type WorkspacesResource = ResourceDefinition<WorkspaceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: WorkspaceProperties, location?: Expressionable<string>, tags?: Expressionable<any>): WorkspacesResource {
    return {
      type: 'Microsoft.OperationalInsights/workspaces',
      apiVersion: '2015-11-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace workspaces {
  export namespace dataSources {
    export interface AdditionalProps {
      kind: Expressionable<('AzureActivityLog' | 'ChangeTrackingPath' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingCustomRegistry' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceObject' | 'LinuxPerformanceCollection' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter')>;
      tags?: Expressionable<any>;
    }
    
    export type DataSourcesResource = ResourceDefinition<any, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, kind: Expressionable<('AzureActivityLog' | 'ChangeTrackingPath' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingCustomRegistry' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceObject' | 'LinuxPerformanceCollection' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter')>, tags?: Expressionable<any>): DataSourcesResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/dataSources',
        apiVersion: '2015-11-01-preview',
        name: name,
        properties,
        additional: {
          kind,
          tags,
        },
      };
    }
  }
}
export namespace workspaces {
  export namespace linkedServices {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type LinkedServicesResource = ResourceDefinition<LinkedServiceProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LinkedServiceProperties, tags?: Expressionable<any>): LinkedServicesResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/linkedServices',
        apiVersion: '2015-11-01-preview',
        name: name,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace workspaces {
  export namespace privateEndpointConnections {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type PrivateEndpointConnectionsResource = ResourceDefinition<PrivateEndpointConnectionProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties, tags?: Expressionable<any>): PrivateEndpointConnectionsResource {
      return {
        type: 'Microsoft.OperationalInsights/workspaces/privateEndpointConnections',
        apiVersion: '2015-11-01-preview',
        name: name,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}