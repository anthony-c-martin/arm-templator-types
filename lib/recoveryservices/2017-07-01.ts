import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AzureRecoveryServiceVaultProtectionIntent {
  protectionIntentItemType: Expressionable<string>;
}

export interface AzureResourceProtectionIntent {
  friendlyName?: Expressionable<string>;
  protectionIntentItemType: Expressionable<string>;
}

export interface AzureWorkloadAutoProtectionIntent {
  protectionIntentItemType: Expressionable<string>;
}

export interface AzureWorkloadSQLAutoProtectionIntent {
  workloadItemType?: Expressionable<('Invalid' | 'SQLInstance' | 'SQLDataBase' | 'SAPHanaSystem' | 'SAPHanaDatabase' | 'SAPAseSystem' | 'SAPAseDatabase')>;
  protectionIntentItemType: Expressionable<string>;
}

export interface ProtectionIntent {
  backupManagementType?: Expressionable<('Invalid' | 'AzureIaasVM' | 'MAB' | 'DPM' | 'AzureBackupServer' | 'AzureSql' | 'AzureStorage' | 'AzureWorkload' | 'DefaultBackup')>;
  sourceResourceId?: Expressionable<string>;
  itemId?: Expressionable<string>;
  policyId?: Expressionable<string>;
  protectionState?: Expressionable<('Invalid' | 'NotProtected' | 'Protecting' | 'Protected' | 'ProtectionFailed')>;
  protectionIntentItemType: Expressionable<string>;
}

export namespace vaults {
  export namespace backupFabrics {
    export namespace backupProtectionIntent {
      export type BackupProtectionIntentResource = ResourceDefinition<ProtectionIntent, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ProtectionIntent, location?: Expressionable<string>): BackupProtectionIntentResource {
        return {
          type: 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent',
          apiVersion: '2017-07-01',
          name: name,
          location,
          properties,
        };
      }
    }
  }
}