import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface A2AContainerCreationInput {
}

export interface A2AContainerMappingInput {
  agentAutoUpdateStatus?: Expressionable<('Disabled' | 'Enabled')>;
  automationAccountArmId?: Expressionable<string>;
  instanceType: Expressionable<string>;
}

export interface A2AEnableProtectionInput {
}

export interface A2APolicyCreationInput {
}

export interface A2AVmDiskInputDetails {
  diskUri?: Expressionable<string>;
  recoveryAzureStorageAccountId?: Expressionable<string>;
  primaryStagingAzureStorageAccountId?: Expressionable<string>;
}

export interface A2AVmManagedDiskInputDetails {
  diskId?: Expressionable<string>;
  primaryStagingAzureStorageAccountId?: Expressionable<string>;
  recoveryResourceGroupId?: Expressionable<string>;
  recoveryReplicaDiskAccountType?: Expressionable<string>;
  recoveryTargetDiskAccountType?: Expressionable<string>;
}

export interface AddRecoveryServicesProviderInputProperties {
  machineName: Expressionable<string>;
  authenticationIdentityInput: Expressionable<IdentityProviderInput>;
  resourceAccessIdentityInput: Expressionable<IdentityProviderInput>;
}

export interface AddVCenterRequestProperties {
  friendlyName?: Expressionable<string>;
  ipAddress?: Expressionable<string>;
  processServerId?: Expressionable<string>;
  port?: Expressionable<string>;
  runAsAccountId?: Expressionable<string>;
}

export interface AzureFabricCreationInput {
}

export interface AzureToAzureCreateNetworkMappingInput {
}

export interface ConfigureAlertRequestProperties {
  sendToOwners?: Expressionable<string>;
  customEmailAddresses?: Expressionable<string[]>;
  locale?: Expressionable<string>;
}

export interface CreateNetworkMappingInputProperties {
  recoveryFabricName?: Expressionable<string>;
  recoveryNetworkId?: Expressionable<string>;
  fabricSpecificDetails?: Expressionable<FabricSpecificCreateNetworkMappingInput>;
}

export interface CreatePolicyInputProperties {
  providerSpecificInput?: Expressionable<PolicyProviderSpecificInput>;
}

export interface CreateProtectionContainerInputProperties {
  providerSpecificInput?: Expressionable<ReplicationProviderSpecificContainerCreationInput[]>;
}

export interface CreateProtectionContainerMappingInputProperties {
  targetProtectionContainerId?: Expressionable<string>;
  policyId?: Expressionable<string>;
  providerSpecificInput?: Expressionable<ReplicationProviderSpecificContainerMappingInput>;
}

export interface CreateRecoveryPlanInputProperties {
  primaryFabricId: Expressionable<string>;
  recoveryFabricId: Expressionable<string>;
  failoverDeploymentModel?: Expressionable<('NotApplicable' | 'Classic' | 'ResourceManager')>;
  groups: Expressionable<RecoveryPlanGroup[]>;
}

export interface EnableMigrationInputProperties {
  policyId: Expressionable<string>;
  providerSpecificDetails: Expressionable<EnableMigrationProviderSpecificInput>;
}

export interface EnableMigrationProviderSpecificInput {
  instanceType: Expressionable<string>;
}

export interface EnableProtectionInputProperties {
  policyId?: Expressionable<string>;
  protectableItemId?: Expressionable<string>;
  providerSpecificDetails?: Expressionable<EnableProtectionProviderSpecificInput>;
}

export interface EnableProtectionProviderSpecificInput {
}

export interface FabricCreationInputProperties {
  customDetails?: Expressionable<FabricSpecificCreationInput>;
}

export interface FabricSpecificCreateNetworkMappingInput {
}

export interface FabricSpecificCreationInput {
}

export interface HyperVReplicaAzureEnableProtectionInput {
}

export interface HyperVReplicaAzurePolicyInput {
}

export interface HyperVReplicaBluePolicyInput {
}

export interface HyperVReplicaPolicyInput {
}

export interface IdentityProviderInput {
  tenantId: Expressionable<string>;
  applicationId: Expressionable<string>;
  objectId: Expressionable<string>;
  audience: Expressionable<string>;
  aadAuthority: Expressionable<string>;
}

export interface InMageAzureV2EnableProtectionInput {
}

export interface InMageAzureV2PolicyInput {
}

export interface InMageDiskExclusionInput {
  volumeOptions?: Expressionable<InMageVolumeExclusionOptions[]>;
  diskSignatureOptions?: Expressionable<InMageDiskSignatureExclusionOptions[]>;
}

export interface InMageDiskSignatureExclusionOptions {
  diskSignature?: Expressionable<string>;
}

export interface InMageEnableProtectionInput {
}

export interface InMagePolicyInput {
}

export interface InMageVolumeExclusionOptions {
  volumeLabel?: Expressionable<string>;
  onlyExcludeIfSingleVolume?: Expressionable<string>;
}

export interface PolicyProviderSpecificInput {
}

export interface RecoveryPlanAction {
  actionName: Expressionable<string>;
  failoverTypes: Expressionable<('ReverseReplicate' | 'Commit' | 'PlannedFailover' | 'UnplannedFailover' | 'DisableProtection' | 'TestFailover' | 'TestFailoverCleanup' | 'Failback' | 'FinalizeFailback' | 'ChangePit' | 'RepairReplication' | 'SwitchProtection' | 'CompleteMigration')[]>;
  failoverDirections: Expressionable<('PrimaryToRecovery' | 'RecoveryToPrimary')[]>;
  customDetails: Expressionable<RecoveryPlanActionDetails>;
}

export interface RecoveryPlanActionDetails {
}

export interface RecoveryPlanAutomationRunbookActionDetails {
}

export interface RecoveryPlanGroup {
  groupType: Expressionable<('Shutdown' | 'Boot' | 'Failover')>;
  replicationProtectedItems?: Expressionable<RecoveryPlanProtectedItem[]>;
  startGroupActions?: Expressionable<RecoveryPlanAction[]>;
  endGroupActions?: Expressionable<RecoveryPlanAction[]>;
}

export interface RecoveryPlanManualActionDetails {
}

export interface RecoveryPlanProtectedItem {
  id?: Expressionable<string>;
  virtualMachineId?: Expressionable<string>;
}

export interface RecoveryPlanScriptActionDetails {
}

export interface ReplicationProviderSpecificContainerCreationInput {
  instanceType: Expressionable<string>;
}

export interface ReplicationProviderSpecificContainerMappingInput {
  instanceType: Expressionable<string>;
}

export interface SanEnableProtectionInput {
}

export interface StorageMappingInputProperties {
  targetStorageClassificationId?: Expressionable<string>;
}

export interface VmmToAzureCreateNetworkMappingInput {
}

export interface VmmToVmmCreateNetworkMappingInput {
}

export interface VMwareCbtContainerCreationInput {
  instanceType: Expressionable<string>;
}

export interface VMwareCbtContainerMappingInput {
  keyVaultId: Expressionable<string>;
  keyVaultUri: Expressionable<string>;
  storageAccountId: Expressionable<string>;
  storageAccountSasSecretName: Expressionable<string>;
  serviceBusConnectionStringSecretName: Expressionable<string>;
  targetLocation: Expressionable<string>;
  instanceType: Expressionable<string>;
}

export interface VMwareCbtDiskInput {
  diskId: Expressionable<string>;
  isOSDisk: Expressionable<string>;
  logStorageAccountId: Expressionable<string>;
  logStorageAccountSasSecretName: Expressionable<string>;
  diskType?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS')>;
}

export interface VMwareCbtEnableMigrationInput {
  vmwareMachineId: Expressionable<string>;
  disksToInclude: Expressionable<VMwareCbtDiskInput[]>;
  licenseType?: Expressionable<('NotSpecified' | 'NoLicenseType' | 'WindowsServer')>;
  dataMoverRunAsAccountId: Expressionable<string>;
  snapshotRunAsAccountId: Expressionable<string>;
  targetVmName?: Expressionable<string>;
  targetVmSize?: Expressionable<string>;
  targetResourceGroupId: Expressionable<string>;
  targetNetworkId: Expressionable<string>;
  targetSubnetName?: Expressionable<string>;
  targetAvailabilitySetId?: Expressionable<string>;
  targetBootDiagnosticsStorageAccountId?: Expressionable<string>;
  instanceType: Expressionable<string>;
}

export interface VMwareCbtPolicyCreationInput {
  recoveryPointHistoryInMinutes?: Expressionable<number>;
  crashConsistentFrequencyInMinutes?: Expressionable<number>;
  appConsistentFrequencyInMinutes?: Expressionable<number>;
  instanceType: Expressionable<string>;
}

export interface VMwareV2FabricCreationInput {
  vmwareSiteId: Expressionable<string>;
  migrationSolutionId: Expressionable<string>;
  instanceType: Expressionable<string>;
}

export namespace vaults {
  export namespace replicationAlertSettings {
    export type ReplicationAlertSettingsResource = ResourceDefinition<ConfigureAlertRequestProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ConfigureAlertRequestProperties): ReplicationAlertSettingsResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/replicationAlertSettings',
        apiVersion: '2018-01-10',
        name: name,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export type ReplicationFabricsResource = ResourceDefinition<FabricCreationInputProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: FabricCreationInputProperties): ReplicationFabricsResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/replicationFabrics',
        apiVersion: '2018-01-10',
        name: name,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationNetworks {
      export namespace replicationNetworkMappings {
        export type ReplicationNetworkMappingsResource = ResourceDefinition<CreateNetworkMappingInputProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CreateNetworkMappingInputProperties): ReplicationNetworkMappingsResource {
          return {
            type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationNetworks/replicationNetworkMappings',
            apiVersion: '2018-01-10',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationProtectionContainers {
      export type ReplicationProtectionContainersResource = ResourceDefinition<CreateProtectionContainerInputProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CreateProtectionContainerInputProperties): ReplicationProtectionContainersResource {
        return {
          type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers',
          apiVersion: '2018-01-10',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationProtectionContainers {
      export namespace replicationMigrationItems {
        export type ReplicationMigrationItemsResource = ResourceDefinition<EnableMigrationInputProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnableMigrationInputProperties): ReplicationMigrationItemsResource {
          return {
            type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationMigrationItems',
            apiVersion: '2018-01-10',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationProtectionContainers {
      export namespace replicationProtectedItems {
        export type ReplicationProtectedItemsResource = ResourceDefinition<EnableProtectionInputProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnableProtectionInputProperties): ReplicationProtectedItemsResource {
          return {
            type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectedItems',
            apiVersion: '2018-01-10',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationProtectionContainers {
      export namespace replicationProtectionContainerMappings {
        export type ReplicationProtectionContainerMappingsResource = ResourceDefinition<CreateProtectionContainerMappingInputProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CreateProtectionContainerMappingInputProperties): ReplicationProtectionContainerMappingsResource {
          return {
            type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionContainerMappings',
            apiVersion: '2018-01-10',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationRecoveryServicesProviders {
      export type ReplicationRecoveryServicesProvidersResource = ResourceDefinition<AddRecoveryServicesProviderInputProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AddRecoveryServicesProviderInputProperties): ReplicationRecoveryServicesProvidersResource {
        return {
          type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders',
          apiVersion: '2018-01-10',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationStorageClassifications {
      export namespace replicationStorageClassificationMappings {
        export type ReplicationStorageClassificationMappingsResource = ResourceDefinition<StorageMappingInputProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: StorageMappingInputProperties): ReplicationStorageClassificationMappingsResource {
          return {
            type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationStorageClassifications/replicationStorageClassificationMappings',
            apiVersion: '2018-01-10',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace vaults {
  export namespace replicationFabrics {
    export namespace replicationvCenters {
      export type ReplicationvCentersResource = ResourceDefinition<AddVCenterRequestProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: AddVCenterRequestProperties): ReplicationvCentersResource {
        return {
          type: 'Microsoft.RecoveryServices/vaults/replicationFabrics/replicationvCenters',
          apiVersion: '2018-01-10',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace vaults {
  export namespace replicationPolicies {
    export type ReplicationPoliciesResource = ResourceDefinition<CreatePolicyInputProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CreatePolicyInputProperties): ReplicationPoliciesResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/replicationPolicies',
        apiVersion: '2018-01-10',
        name: name,
        properties,
      };
    }
  }
}
export namespace vaults {
  export namespace replicationRecoveryPlans {
    export type ReplicationRecoveryPlansResource = ResourceDefinition<CreateRecoveryPlanInputProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CreateRecoveryPlanInputProperties): ReplicationRecoveryPlansResource {
      return {
        type: 'Microsoft.RecoveryServices/vaults/replicationRecoveryPlans',
        apiVersion: '2018-01-10',
        name: name,
        properties,
      };
    }
  }
}