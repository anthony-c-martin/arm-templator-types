import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface Resource {
  name?: Expressionable<string>;
  type?: Expressionable<string>;
}

export interface Kind {
  kind?: Expressionable<string>;
}

export interface SecurityContactList {
  value?: Expressionable<SecurityContact[]>;
  nextLink?: Expressionable<string>;
}

export interface SecurityContact {
  properties?: Expressionable<SecurityContactProperties>;
}

export interface SecurityContactProperties {
  email: Expressionable<string>;
  phone?: Expressionable<string>;
  alertNotifications: Expressionable<('On' | 'Off')>;
  alertsToAdmins: Expressionable<('On' | 'Off')>;
}

export interface PricingList {
  value: Expressionable<Pricing[]>;
  nextLink?: Expressionable<string>;
}

export interface Pricing {
  properties?: Expressionable<PricingProperties>;
}

export interface PricingProperties {
  pricingTier: Expressionable<('Free' | 'Standard')>;
}

export interface WorkspaceSettingList {
  value: Expressionable<WorkspaceSetting[]>;
  nextLink?: Expressionable<string>;
}

export interface WorkspaceSetting {
  properties?: Expressionable<WorkspaceSettingProperties>;
}

export interface WorkspaceSettingProperties {
  workspaceId: Expressionable<string>;
  scope: Expressionable<string>;
}

export interface AutoProvisioningSettingList {
  value?: Expressionable<AutoProvisioningSetting[]>;
  nextLink?: Expressionable<string>;
}

export interface AutoProvisioningSetting {
  properties?: Expressionable<AutoProvisioningSettingProperties>;
}

export interface AutoProvisioningSettingProperties {
  autoProvision: Expressionable<('On' | 'Off')>;
}

export interface AdvancedThreatProtectionProperties {
  isEnabled?: Expressionable<boolean>;
}

export interface AdvancedThreatProtectionSetting {
  properties?: Expressionable<AdvancedThreatProtectionProperties>;
}

export interface SettingsList {
  value?: Expressionable<Setting[]>;
  nextLink?: Expressionable<string>;
}

export interface Setting {
}

export interface SettingResource {
  kind: Expressionable<('DataExportSetting' | 'AlertSuppressionSetting')>;
}

export interface DataExportSettingProperties {
  enabled: Expressionable<boolean>;
}

export interface InformationProtectionPolicyList {
  value?: Expressionable<InformationProtectionPolicy[]>;
  nextLink?: Expressionable<string>;
}

export interface InformationProtectionPolicy {
  properties?: Expressionable<InformationProtectionPolicyProperties>;
}

export interface InformationProtectionPolicyProperties {
  lastModifiedUtc?: Expressionable<string>;
}

export interface SensitivityLabel {
  displayName?: Expressionable<string>;
  order?: Expressionable<number>;
  enabled?: Expressionable<boolean>;
}

export interface InformationType {
  displayName?: Expressionable<string>;
  order?: Expressionable<number>;
  recommendedLabelId?: Expressionable<string>;
  enabled?: Expressionable<boolean>;
  custom?: Expressionable<boolean>;
  keywords?: Expressionable<InformationProtectionKeyword[]>;
}

export interface InformationProtectionKeyword {
  pattern?: Expressionable<string>;
  custom?: Expressionable<boolean>;
  canBeNumeric?: Expressionable<boolean>;
  excluded?: Expressionable<boolean>;
}

export namespace pricings {
  export type PricingsResource = ResourceDefinition<PricingProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: PricingProperties): PricingsResource {
    return {
      type: 'Microsoft.Security/pricings',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace securityContacts {
  export type SecurityContactsResource = ResourceDefinition<SecurityContactProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: SecurityContactProperties): SecurityContactsResource {
    return {
      type: 'Microsoft.Security/securityContacts',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace workspaceSettings {
  export type WorkspaceSettingsResource = ResourceDefinition<WorkspaceSettingProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: WorkspaceSettingProperties): WorkspaceSettingsResource {
    return {
      type: 'Microsoft.Security/workspaceSettings',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace autoProvisioningSettings {
  export type AutoProvisioningSettingsResource = ResourceDefinition<AutoProvisioningSettingProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: AutoProvisioningSettingProperties): AutoProvisioningSettingsResource {
    return {
      type: 'Microsoft.Security/autoProvisioningSettings',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace advancedThreatProtectionSettings {
  export type AdvancedThreatProtectionSettingsResource = ResourceDefinition<AdvancedThreatProtectionProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: AdvancedThreatProtectionProperties): AdvancedThreatProtectionSettingsResource {
    return {
      type: 'Microsoft.Security/advancedThreatProtectionSettings',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace settings {
  export type SettingsResource = ResourceDefinition<SettingResource, undefined>;
  
  export function create(name: Expressionable<string>, properties: SettingResource): SettingsResource {
    return {
      type: 'Microsoft.Security/settings',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}
export namespace informationProtectionPolicies {
  export type InformationProtectionPoliciesResource = ResourceDefinition<InformationProtectionPolicyProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: InformationProtectionPolicyProperties): InformationProtectionPoliciesResource {
    return {
      type: 'Microsoft.Security/informationProtectionPolicies',
      apiVersion: '2018-06-01',
      name: [name],
      properties,
    };
  }
}