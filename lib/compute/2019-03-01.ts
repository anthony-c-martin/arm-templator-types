import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface AdditionalCapabilities {
  ultraSSDEnabled?: Expressionable<boolean>;
}

export interface AdditionalUnattendContent {
  passName?: Expressionable<('OobeSystem')>;
  componentName?: Expressionable<('Microsoft-Windows-Shell-Setup')>;
  settingName?: Expressionable<('AutoLogon' | 'FirstLogonCommands')>;
  content?: Expressionable<string>;
}

export interface ApiEntityReference {
  id?: Expressionable<string>;
}

export interface AutomaticOSUpgradePolicy {
  enableAutomaticOSUpgrade?: Expressionable<boolean>;
  disableAutomaticRollback?: Expressionable<boolean>;
}

export interface AutomaticRepairsPolicy {
  enabled?: Expressionable<boolean>;
  gracePeriod?: Expressionable<string>;
  maxInstanceRepairsPercent?: Expressionable<number>;
}

export interface AvailabilitySetProperties {
  platformUpdateDomainCount?: Expressionable<number>;
  platformFaultDomainCount?: Expressionable<number>;
  virtualMachines?: Expressionable<SubResource[]>;
  proximityPlacementGroup?: Expressionable<SubResource>;
}

export interface BillingProfile {
  maxPrice?: Expressionable<number>;
}

export interface BootDiagnostics {
  enabled?: Expressionable<boolean>;
  storageUri?: Expressionable<string>;
}

export interface DataDisk {
  lun: Expressionable<number>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
  toBeDetached?: Expressionable<boolean>;
}

export interface DedicatedHostGroupProperties {
  platformFaultDomainCount: Expressionable<number>;
}

export interface DedicatedHostProperties {
  platformFaultDomain?: Expressionable<number>;
  autoReplaceOnFailure?: Expressionable<boolean>;
  licenseType?: Expressionable<('None' | 'Windows_Server_Hybrid' | 'Windows_Server_Perpetual')>;
}

export interface DiagnosticsProfile {
  bootDiagnostics?: Expressionable<BootDiagnostics>;
}

export interface DiffDiskSettings {
  option?: Expressionable<('Local')>;
}

export interface DiskEncryptionSettings {
  diskEncryptionKey?: Expressionable<KeyVaultSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultKeyReference>;
  enabled?: Expressionable<boolean>;
}

export interface HardwareProfile {
  vmSize?: Expressionable<('Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_A8_v2' | 'Standard_A2m_v2' | 'Standard_A4m_v2' | 'Standard_A8m_v2' | 'Standard_B1s' | 'Standard_B1ms' | 'Standard_B2s' | 'Standard_B2ms' | 'Standard_B4ms' | 'Standard_B8ms' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D2_v3' | 'Standard_D4_v3' | 'Standard_D8_v3' | 'Standard_D16_v3' | 'Standard_D32_v3' | 'Standard_D64_v3' | 'Standard_D2s_v3' | 'Standard_D4s_v3' | 'Standard_D8s_v3' | 'Standard_D16s_v3' | 'Standard_D32s_v3' | 'Standard_D64s_v3' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_DS13-4_v2' | 'Standard_DS13-2_v2' | 'Standard_DS14-8_v2' | 'Standard_DS14-4_v2' | 'Standard_E2_v3' | 'Standard_E4_v3' | 'Standard_E8_v3' | 'Standard_E16_v3' | 'Standard_E32_v3' | 'Standard_E64_v3' | 'Standard_E2s_v3' | 'Standard_E4s_v3' | 'Standard_E8s_v3' | 'Standard_E16s_v3' | 'Standard_E32s_v3' | 'Standard_E64s_v3' | 'Standard_E32-16_v3' | 'Standard_E32-8s_v3' | 'Standard_E64-32s_v3' | 'Standard_E64-16s_v3' | 'Standard_F1' | 'Standard_F2' | 'Standard_F4' | 'Standard_F8' | 'Standard_F16' | 'Standard_F1s' | 'Standard_F2s' | 'Standard_F4s' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_F2s_v2' | 'Standard_F4s_v2' | 'Standard_F8s_v2' | 'Standard_F16s_v2' | 'Standard_F32s_v2' | 'Standard_F64s_v2' | 'Standard_F72s_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_GS4-8' | 'Standard_GS4-4' | 'Standard_GS5-16' | 'Standard_GS5-8' | 'Standard_H8' | 'Standard_H16' | 'Standard_H8m' | 'Standard_H16m' | 'Standard_H16r' | 'Standard_H16mr' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_M64s' | 'Standard_M64ms' | 'Standard_M128s' | 'Standard_M128ms' | 'Standard_M64-32ms' | 'Standard_M64-16ms' | 'Standard_M128-64ms' | 'Standard_M128-32ms' | 'Standard_NC6' | 'Standard_NC12' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NC6s_v2' | 'Standard_NC12s_v2' | 'Standard_NC24s_v2' | 'Standard_NC24rs_v2' | 'Standard_NC6s_v3' | 'Standard_NC12s_v3' | 'Standard_NC24s_v3' | 'Standard_NC24rs_v3' | 'Standard_ND6s' | 'Standard_ND12s' | 'Standard_ND24s' | 'Standard_ND24rs' | 'Standard_NV6' | 'Standard_NV12' | 'Standard_NV24')>;
}

export interface ImageDataDisk {
  lun: Expressionable<number>;
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS')>;
}

export interface ImageOSDisk {
  osType: Expressionable<('Windows' | 'Linux')>;
  osState: Expressionable<('Generalized' | 'Specialized')>;
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS')>;
}

export interface ImageProperties {
  sourceVirtualMachine?: Expressionable<SubResource>;
  storageProfile?: Expressionable<ImageStorageProfile>;
  hyperVGeneration?: Expressionable<('V1' | 'V2')>;
}

export interface ImageReference {
  id?: Expressionable<string>;
  publisher?: Expressionable<string>;
  offer?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface ImageStorageProfile {
  osDisk?: Expressionable<ImageOSDisk>;
  dataDisks?: Expressionable<ImageDataDisk[]>;
  zoneResilient?: Expressionable<boolean>;
}

export interface InstanceViewStatus {
  code?: Expressionable<string>;
  level?: Expressionable<('Info' | 'Warning' | 'Error')>;
  displayStatus?: Expressionable<string>;
  message?: Expressionable<string>;
  time?: Expressionable<string>;
}

export interface KeyVaultKeyReference {
  keyUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

export interface KeyVaultSecretReference {
  secretUrl: Expressionable<string>;
  sourceVault: Expressionable<SubResource>;
}

export interface LinuxConfiguration {
  disablePasswordAuthentication?: Expressionable<boolean>;
  ssh?: Expressionable<SshConfiguration>;
  provisionVMAgent?: Expressionable<boolean>;
}

export interface ManagedDiskParameters {
  id?: Expressionable<string>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS')>;
}

export interface NetworkInterfaceReference {
  id?: Expressionable<string>;
  properties?: Expressionable<NetworkInterfaceReferenceProperties>;
}

export interface NetworkInterfaceReferenceProperties {
  primary?: Expressionable<boolean>;
}

export interface NetworkProfile {
  networkInterfaces?: Expressionable<NetworkInterfaceReference[]>;
}

export interface OSDisk {
  osType?: Expressionable<('Windows' | 'Linux')>;
  encryptionSettings?: Expressionable<DiskEncryptionSettings>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  diffDiskSettings?: Expressionable<DiffDiskSettings>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
}

export interface OSProfile {
  computerName?: Expressionable<string>;
  adminUsername?: Expressionable<string>;
  adminPassword?: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
  linuxConfiguration?: Expressionable<LinuxConfiguration>;
  secrets?: Expressionable<VaultSecretGroup[]>;
  allowExtensionOperations?: Expressionable<boolean>;
  requireGuestProvisionSignal?: Expressionable<boolean>;
}

export interface Plan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  product?: Expressionable<string>;
  promotionCode?: Expressionable<string>;
}

export interface ProximityPlacementGroupProperties {
  proximityPlacementGroupType?: Expressionable<('Standard' | 'Ultra')>;
}

export interface RollingUpgradePolicy {
  maxBatchInstancePercent?: Expressionable<number>;
  maxUnhealthyInstancePercent?: Expressionable<number>;
  maxUnhealthyUpgradedInstancePercent?: Expressionable<number>;
  pauseTimeBetweenBatches?: Expressionable<string>;
}

export interface ScaleInPolicy {
  rules?: Expressionable<('Default' | 'OldestVM' | 'NewestVM')[]>;
}

export interface ScheduledEventsProfile {
  terminateNotificationProfile?: Expressionable<TerminateNotificationProfile>;
}

export interface Sku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SshConfiguration {
  publicKeys?: Expressionable<SshPublicKey[]>;
}

export interface SshPublicKey {
  path?: Expressionable<string>;
  keyData?: Expressionable<string>;
}

export interface StorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<OSDisk>;
  dataDisks?: Expressionable<DataDisk[]>;
}

export interface SubResource {
  id?: Expressionable<string>;
}

export interface TerminateNotificationProfile {
  notBeforeTimeout?: Expressionable<string>;
  enable?: Expressionable<boolean>;
}

export interface UpgradePolicy {
  mode?: Expressionable<('Automatic' | 'Manual' | 'Rolling')>;
  rollingUpgradePolicy?: Expressionable<RollingUpgradePolicy>;
  automaticOSUpgradePolicy?: Expressionable<AutomaticOSUpgradePolicy>;
}

export interface VaultCertificate {
  certificateUrl?: Expressionable<string>;
  certificateStore?: Expressionable<string>;
}

export interface VaultSecretGroup {
  sourceVault?: Expressionable<SubResource>;
  vaultCertificates?: Expressionable<VaultCertificate[]>;
}

export interface VirtualHardDisk {
  uri?: Expressionable<string>;
}

export interface VirtualMachineExtensionInstanceView {
  name?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  substatuses?: Expressionable<InstanceViewStatus[]>;
  statuses?: Expressionable<InstanceViewStatus[]>;
}

export interface VirtualMachineExtensionProperties {
  forceUpdateTag?: Expressionable<string>;
  publisher?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  autoUpgradeMinorVersion?: Expressionable<boolean>;
  settings?: Expressionable<any>;
  protectedSettings?: Expressionable<any>;
  instanceView?: Expressionable<VirtualMachineExtensionInstanceView>;
}

export interface VirtualMachineIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
}

export interface VirtualMachineIdentityUserAssignedIdentitiesValue {
}

export interface VirtualMachineProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  virtualMachineScaleSet?: Expressionable<SubResource>;
  proximityPlacementGroup?: Expressionable<SubResource>;
  priority?: Expressionable<('Regular' | 'Low' | 'Spot')>;
  evictionPolicy?: Expressionable<('Deallocate' | 'Delete')>;
  billingProfile?: Expressionable<BillingProfile>;
  host?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
}

export interface VirtualMachineScaleSetDataDisk {
  name?: Expressionable<string>;
  lun: Expressionable<number>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<VirtualMachineScaleSetManagedDiskParameters>;
}

export interface VirtualMachineScaleSetExtension {
  name?: Expressionable<string>;
  properties?: Expressionable<any>;
}

export interface VirtualMachineScaleSetExtensionProfile {
  extensions?: Expressionable<VirtualMachineScaleSetExtension[]>;
}

export interface VirtualMachineScaleSetExtensionProperties {
  forceUpdateTag?: Expressionable<string>;
  publisher?: Expressionable<string>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
  autoUpgradeMinorVersion?: Expressionable<boolean>;
  settings?: Expressionable<any>;
  protectedSettings?: Expressionable<any>;
  provisionAfterExtensions?: Expressionable<string[]>;
}

export interface VirtualMachineScaleSetIdentity {
  type?: Expressionable<('SystemAssigned' | 'UserAssigned' | 'SystemAssigned, UserAssigned' | 'None')>;
}

export interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue {
}

export interface VirtualMachineScaleSetIPConfiguration {
  id?: Expressionable<string>;
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetIPConfigurationProperties>;
}

export interface VirtualMachineScaleSetIPConfigurationProperties {
  subnet?: Expressionable<ApiEntityReference>;
  primary?: Expressionable<boolean>;
  publicIPAddressConfiguration?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfiguration>;
  privateIPAddressVersion?: Expressionable<('IPv4' | 'IPv6')>;
  applicationGatewayBackendAddressPools?: Expressionable<SubResource[]>;
  applicationSecurityGroups?: Expressionable<SubResource[]>;
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatPools?: Expressionable<SubResource[]>;
}

export interface VirtualMachineScaleSetIpTag {
  ipTagType?: Expressionable<string>;
  tag?: Expressionable<string>;
}

export interface VirtualMachineScaleSetManagedDiskParameters {
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS' | 'StandardSSD_LRS' | 'UltraSSD_LRS')>;
}

export interface VirtualMachineScaleSetNetworkConfiguration {
  id?: Expressionable<string>;
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetNetworkConfigurationProperties>;
}

export interface VirtualMachineScaleSetNetworkConfigurationDnsSettings {
  dnsServers?: Expressionable<string[]>;
}

export interface VirtualMachineScaleSetNetworkConfigurationProperties {
  primary?: Expressionable<boolean>;
  enableAcceleratedNetworking?: Expressionable<boolean>;
  networkSecurityGroup?: Expressionable<SubResource>;
  dnsSettings?: Expressionable<VirtualMachineScaleSetNetworkConfigurationDnsSettings>;
  ipConfigurations: Expressionable<VirtualMachineScaleSetIPConfiguration[]>;
  enableIPForwarding?: Expressionable<boolean>;
}

export interface VirtualMachineScaleSetNetworkProfile {
  healthProbe?: Expressionable<ApiEntityReference>;
  networkInterfaceConfigurations?: Expressionable<VirtualMachineScaleSetNetworkConfiguration[]>;
}

export interface VirtualMachineScaleSetOSDisk {
  name?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  writeAcceleratorEnabled?: Expressionable<boolean>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diffDiskSettings?: Expressionable<DiffDiskSettings>;
  diskSizeGB?: Expressionable<number>;
  osType?: Expressionable<('Windows' | 'Linux')>;
  image?: Expressionable<VirtualHardDisk>;
  vhdContainers?: Expressionable<string[]>;
  managedDisk?: Expressionable<VirtualMachineScaleSetManagedDiskParameters>;
}

export interface VirtualMachineScaleSetOSProfile {
  computerNamePrefix?: Expressionable<string>;
  adminUsername?: Expressionable<string>;
  adminPassword?: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<WindowsConfiguration>;
  linuxConfiguration?: Expressionable<LinuxConfiguration>;
  secrets?: Expressionable<VaultSecretGroup[]>;
}

export interface VirtualMachineScaleSetProperties {
  upgradePolicy?: Expressionable<UpgradePolicy>;
  automaticRepairsPolicy?: Expressionable<AutomaticRepairsPolicy>;
  virtualMachineProfile?: Expressionable<VirtualMachineScaleSetVMProfile>;
  overprovision?: Expressionable<boolean>;
  doNotRunExtensionsOnOverprovisionedVMs?: Expressionable<boolean>;
  singlePlacementGroup?: Expressionable<boolean>;
  zoneBalance?: Expressionable<boolean>;
  platformFaultDomainCount?: Expressionable<number>;
  proximityPlacementGroup?: Expressionable<SubResource>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  scaleInPolicy?: Expressionable<ScaleInPolicy>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfiguration {
  name: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfigurationProperties>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings {
  domainNameLabel: Expressionable<string>;
}

export interface VirtualMachineScaleSetPublicIPAddressConfigurationProperties {
  idleTimeoutInMinutes?: Expressionable<number>;
  dnsSettings?: Expressionable<VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings>;
  ipTags?: Expressionable<VirtualMachineScaleSetIpTag[]>;
  publicIPPrefix?: Expressionable<SubResource>;
}

export interface VirtualMachineScaleSetStorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<VirtualMachineScaleSetOSDisk>;
  dataDisks?: Expressionable<VirtualMachineScaleSetDataDisk[]>;
}

export interface VirtualMachineScaleSetVMNetworkProfileConfiguration {
  networkInterfaceConfigurations?: Expressionable<VirtualMachineScaleSetNetworkConfiguration[]>;
}

export interface VirtualMachineScaleSetVMProfile {
  osProfile?: Expressionable<VirtualMachineScaleSetOSProfile>;
  storageProfile?: Expressionable<VirtualMachineScaleSetStorageProfile>;
  networkProfile?: Expressionable<VirtualMachineScaleSetNetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  extensionProfile?: Expressionable<VirtualMachineScaleSetExtensionProfile>;
  licenseType?: Expressionable<string>;
  priority?: Expressionable<('Regular' | 'Low' | 'Spot')>;
  evictionPolicy?: Expressionable<('Deallocate' | 'Delete')>;
  billingProfile?: Expressionable<BillingProfile>;
  scheduledEventsProfile?: Expressionable<ScheduledEventsProfile>;
}

export interface VirtualMachineScaleSetVMProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  additionalCapabilities?: Expressionable<AdditionalCapabilities>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  networkProfileConfiguration?: Expressionable<VirtualMachineScaleSetVMNetworkProfileConfiguration>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
  protectionPolicy?: Expressionable<VirtualMachineScaleSetVMProtectionPolicy>;
}

export interface VirtualMachineScaleSetVMProtectionPolicy {
  protectFromScaleIn?: Expressionable<boolean>;
  protectFromScaleSetActions?: Expressionable<boolean>;
}

export interface WindowsConfiguration {
  provisionVMAgent?: Expressionable<boolean>;
  enableAutomaticUpdates?: Expressionable<boolean>;
  timeZone?: Expressionable<string>;
  additionalUnattendContent?: Expressionable<AdditionalUnattendContent[]>;
  winRM?: Expressionable<WinRMConfiguration>;
}

export interface WinRMConfiguration {
  listeners?: Expressionable<WinRMListener[]>;
}

export interface WinRMListener {
  protocol?: Expressionable<('Http' | 'Https')>;
  certificateUrl?: Expressionable<string>;
}

export namespace availabilitySets {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export type AvailabilitySetsResource = ResourceDefinition<AvailabilitySetProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AvailabilitySetProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): AvailabilitySetsResource {
    return {
      type: 'Microsoft.Compute/availabilitySets',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace hostGroups {
  export interface AdditionalProps {
    zones?: Expressionable<string[]>;
  }
  
  export type HostGroupsResource = ResourceDefinition<DedicatedHostGroupProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DedicatedHostGroupProperties, location: Expressionable<string>, zones?: Expressionable<string[]>): HostGroupsResource {
    return {
      type: 'Microsoft.Compute/hostGroups',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
      additional: {
        zones,
      },
    };
  }
}
export namespace hostGroups {
  export namespace hosts {
    export interface AdditionalProps {
      sku: Expressionable<Sku>;
    }
    
    export type HostsResource = ResourceDefinition<DedicatedHostProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DedicatedHostProperties, location: Expressionable<string>, sku: Expressionable<Sku>): HostsResource {
      return {
        type: 'Microsoft.Compute/hostGroups/hosts',
        apiVersion: '2019-03-01',
        name: name,
        location,
        properties,
        additional: {
          sku,
        },
      };
    }
  }
}
export namespace images {
  export type ImagesResource = ResourceDefinition<ImageProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ImageProperties, location: Expressionable<string>): ImagesResource {
    return {
      type: 'Microsoft.Compute/images',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace proximityPlacementGroups {
  export type ProximityPlacementGroupsResource = ResourceDefinition<ProximityPlacementGroupProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ProximityPlacementGroupProperties, location: Expressionable<string>): ProximityPlacementGroupsResource {
    return {
      type: 'Microsoft.Compute/proximityPlacementGroups',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace virtualMachines {
  export interface AdditionalProps {
    identity?: Expressionable<VirtualMachineIdentity>;
    zones?: Expressionable<string[]>;
    plan?: Expressionable<Plan>;
  }
  
  export type VirtualMachinesResource = ResourceDefinition<VirtualMachineProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: VirtualMachineProperties, location: Expressionable<string>, identity?: Expressionable<VirtualMachineIdentity>, zones?: Expressionable<string[]>, plan?: Expressionable<Plan>): VirtualMachinesResource {
    return {
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        zones,
        plan,
      },
    };
  }
}
export namespace virtualMachineScaleSets {
  export interface AdditionalProps {
    identity?: Expressionable<VirtualMachineScaleSetIdentity>;
    sku?: Expressionable<Sku>;
    zones?: Expressionable<string[]>;
    plan?: Expressionable<Plan>;
  }
  
  export type VirtualMachineScaleSetsResource = ResourceDefinition<VirtualMachineScaleSetProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: VirtualMachineScaleSetProperties, location: Expressionable<string>, identity?: Expressionable<VirtualMachineScaleSetIdentity>, sku?: Expressionable<Sku>, zones?: Expressionable<string[]>, plan?: Expressionable<Plan>): VirtualMachineScaleSetsResource {
    return {
      type: 'Microsoft.Compute/virtualMachineScaleSets',
      apiVersion: '2019-03-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        sku,
        zones,
        plan,
      },
    };
  }
}
export namespace virtualMachineScaleSets {
  export namespace virtualmachines {
    export interface AdditionalProps {
      plan?: Expressionable<Plan>;
    }
    
    export type VirtualmachinesResource = ResourceDefinition<VirtualMachineScaleSetVMProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: VirtualMachineScaleSetVMProperties, location: Expressionable<string>, plan?: Expressionable<Plan>): VirtualmachinesResource {
      return {
        type: 'Microsoft.Compute/virtualMachineScaleSets/virtualmachines',
        apiVersion: '2019-03-01',
        name: name,
        location,
        properties,
        additional: {
          plan,
        },
      };
    }
  }
}