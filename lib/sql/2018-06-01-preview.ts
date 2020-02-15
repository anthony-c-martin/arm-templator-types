// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-06-01-preview/Microsoft.Sql.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AdministratorProperties {
  administratorType: Expressionable<('ActiveDirectory')>;
  login: Expressionable<string>;
  sid: Expressionable<string>;
  tenantId?: Expressionable<string>;
}

export interface InstancePoolProperties {
  licenseType: Expressionable<('LicenseIncluded' | 'BasePrice')>;
  subnetId: Expressionable<string>;
  vCores: Expressionable<number>;
}

export interface ManagedDatabaseProperties {
  catalogCollation?: Expressionable<('DATABASE_DEFAULT' | 'SQL_Latin1_General_CP1_CI_AS')>;
  collation?: Expressionable<string>;
  createMode?: Expressionable<('Default' | 'RestoreExternalBackup' | 'PointInTimeRestore' | 'Recovery')>;
  recoverableDatabaseId?: Expressionable<string>;
  restorableDroppedDatabaseId?: Expressionable<string>;
  restorePointInTime?: Expressionable<string>;
  sourceDatabaseId?: Expressionable<string>;
  storageContainerSasToken?: Expressionable<string>;
  storageContainerUri?: Expressionable<string>;
}

export interface ManagedInstanceProperties {
  administratorLogin?: Expressionable<string>;
  administratorLoginPassword?: Expressionable<string>;
  collation?: Expressionable<string>;
  dnsZonePartner?: Expressionable<string>;
  instancePoolId?: Expressionable<string>;
  licenseType?: Expressionable<('LicenseIncluded' | 'BasePrice')>;
  managedInstanceCreateMode?: Expressionable<('Default' | 'PointInTimeRestore')>;
  proxyOverride?: Expressionable<('Proxy' | 'Redirect' | 'Default')>;
  publicDataEndpointEnabled?: Expressionable<boolean>;
  restorePointInTime?: Expressionable<string>;
  sourceManagedInstanceId?: Expressionable<string>;
  storageSizeInGB?: Expressionable<number>;
  subnetId?: Expressionable<string>;
  timezoneId?: Expressionable<string>;
  vCores?: Expressionable<number>;
}

export interface ManagedInstanceVulnerabilityAssessmentProperties {
  recurringScans?: Expressionable<VulnerabilityAssessmentRecurringScansProperties>;
  storageAccountAccessKey?: Expressionable<string>;
  storageContainerPath: Expressionable<string>;
  storageContainerSasKey?: Expressionable<string>;
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

export interface ResourceIdentity {
  type?: Expressionable<('SystemAssigned')>;
}

export interface SecurityAlertPolicyProperties {
  disabledAlerts?: Expressionable<string[]>;
  emailAccountAdmins?: Expressionable<boolean>;
  emailAddresses?: Expressionable<string[]>;
  retentionDays?: Expressionable<number>;
  state: Expressionable<('New' | 'Enabled' | 'Disabled')>;
  storageAccountAccessKey?: Expressionable<string>;
  storageEndpoint?: Expressionable<string>;
}

export interface SensitivityLabelProperties {
  informationType?: Expressionable<string>;
  informationTypeId?: Expressionable<string>;
  labelId?: Expressionable<string>;
  labelName?: Expressionable<string>;
  rank?: Expressionable<('None' | 'Low' | 'Medium' | 'High' | 'Critical')>;
}

export interface ServerVulnerabilityAssessmentProperties {
  recurringScans?: Expressionable<VulnerabilityAssessmentRecurringScansProperties>;
  storageAccountAccessKey?: Expressionable<string>;
  storageContainerPath: Expressionable<string>;
  storageContainerSasKey?: Expressionable<string>;
}

export interface Sku {
  capacity?: Expressionable<number>;
  family?: Expressionable<string>;
  name: Expressionable<string>;
  size?: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface VulnerabilityAssessmentRecurringScansProperties {
  emails?: Expressionable<string[]>;
  emailSubscriptionAdmins?: Expressionable<boolean>;
  isEnabled?: Expressionable<boolean>;
}

export namespace instancePools {
  export function create(name: Expressionable<string>, properties: InstancePoolProperties, location: Expressionable<string>): ResourceDefinition<InstancePoolProperties> {
    return {
      type: 'Microsoft.Sql/instancePools',
      apiVersion: '2018-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace managedInstances {
  export function create(name: Expressionable<string>, properties: ManagedInstanceProperties, location: Expressionable<string>): ResourceDefinition<ManagedInstanceProperties> {
    return {
      type: 'Microsoft.Sql/managedInstances',
      apiVersion: '2018-06-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace managedInstances {
  export namespace databases {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedDatabaseProperties, location: Expressionable<string>): ResourceDefinition<ManagedDatabaseProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/databases',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace managedInstances {
  export namespace databases {
    export namespace schemas {
      export namespace tables {
        export namespace columns {
          export namespace sensitivityLabels {
            export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SensitivityLabelProperties, location: Expressionable<string>): ResourceDefinition<SensitivityLabelProperties> {
              return {
                type: 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels',
                apiVersion: '2018-06-01-preview',
                name: concatResourceName(...name),
                location,
                properties,
              };
            }
          }
        }
      }
    }
  }
}
export namespace managedInstances {
  export namespace vulnerabilityAssessments {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ManagedInstanceVulnerabilityAssessmentProperties, location: Expressionable<string>): ResourceDefinition<ManagedInstanceVulnerabilityAssessmentProperties> {
      return {
        type: 'Microsoft.Sql/managedInstances/vulnerabilityAssessments',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace administrators {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AdministratorProperties, location: Expressionable<string>): ResourceDefinition<AdministratorProperties> {
      return {
        type: 'Microsoft.Sql/servers/administrators',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace databases {
    export namespace securityAlertPolicies {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SecurityAlertPolicyProperties, location: Expressionable<string>): ResourceDefinition<SecurityAlertPolicyProperties> {
        return {
          type: 'Microsoft.Sql/servers/databases/securityAlertPolicies',
          apiVersion: '2018-06-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace servers {
  export namespace privateEndpointConnections {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PrivateEndpointConnectionProperties, location: Expressionable<string>): ResourceDefinition<PrivateEndpointConnectionProperties> {
      return {
        type: 'Microsoft.Sql/servers/privateEndpointConnections',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace servers {
  export namespace vulnerabilityAssessments {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServerVulnerabilityAssessmentProperties, location: Expressionable<string>): ResourceDefinition<ServerVulnerabilityAssessmentProperties> {
      return {
        type: 'Microsoft.Sql/servers/vulnerabilityAssessments',
        apiVersion: '2018-06-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
