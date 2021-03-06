import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface extensionsChild {
  type: Expressionable<('extensions')>;
  apiVersion: Expressionable<('2017-03-30')>;
  properties: Expressionable<any>;
}

export interface AdditionalUnattendContent {
  passName?: Expressionable<('oobeSystem')>;
  componentName?: Expressionable<('Microsoft-Windows-Shell-Setup')>;
  settingName?: Expressionable<('AutoLogon' | 'FirstLogonCommands')>;
  content?: Expressionable<string>;
}

export interface ApiEntityReference {
  id?: Expressionable<string>;
}

export interface AvailabilitySetProperties {
  platformUpdateDomainCount?: Expressionable<number>;
  platformFaultDomainCount?: Expressionable<number>;
  virtualMachines?: Expressionable<SubResource[]>;
}

export interface BootDiagnostics {
  enabled?: Expressionable<boolean>;
  storageUri?: Expressionable<string>;
}

export interface CreationData {
  createOption: Expressionable<('Empty' | 'Attach' | 'FromImage' | 'Import' | 'Copy')>;
  storageAccountId?: Expressionable<string>;
  imageReference?: Expressionable<ImageDiskReference>;
  sourceUri?: Expressionable<string>;
  sourceResourceId?: Expressionable<string>;
}

export interface DataDisk {
  lun: Expressionable<number>;
  name?: Expressionable<string>;
  vhd?: Expressionable<VirtualHardDisk>;
  image?: Expressionable<VirtualHardDisk>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<ManagedDiskParameters>;
}

export interface DiagnosticsProfile {
  bootDiagnostics?: Expressionable<BootDiagnostics>;
}

export interface DiskEncryptionSettings {
  diskEncryptionKey?: Expressionable<KeyVaultSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultKeyReference>;
  enabled?: Expressionable<boolean>;
}

export interface DiskProperties {
  osType?: Expressionable<('Windows' | 'Linux')>;
  creationData: Expressionable<CreationData>;
  diskSizeGB?: Expressionable<number>;
  encryptionSettings?: Expressionable<EncryptionSettings>;
}

export interface DiskSku {
  name?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface EncryptionSettings {
  enabled?: Expressionable<boolean>;
  diskEncryptionKey?: Expressionable<KeyVaultAndSecretReference>;
  keyEncryptionKey?: Expressionable<KeyVaultAndKeyReference>;
}

export interface HardwareProfile {
  vmSize?: Expressionable<('Basic_A0' | 'Basic_A1' | 'Basic_A2' | 'Basic_A3' | 'Basic_A4' | 'Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_A1_v2' | 'Standard_A2_v2' | 'Standard_A4_v2' | 'Standard_A8_v2' | 'Standard_A2m_v2' | 'Standard_A4m_v2' | 'Standard_A8m_v2' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_D15_v2' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_DS1_v2' | 'Standard_DS2_v2' | 'Standard_DS3_v2' | 'Standard_DS4_v2' | 'Standard_DS5_v2' | 'Standard_DS11_v2' | 'Standard_DS12_v2' | 'Standard_DS13_v2' | 'Standard_DS14_v2' | 'Standard_DS15_v2' | 'Standard_F1' | 'Standard_F2' | 'Standard_F4' | 'Standard_F8' | 'Standard_F16' | 'Standard_F1s' | 'Standard_F2s' | 'Standard_F4s' | 'Standard_F8s' | 'Standard_F16s' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5' | 'Standard_H8' | 'Standard_H16' | 'Standard_H8m' | 'Standard_H16m' | 'Standard_H16r' | 'Standard_H16mr' | 'Standard_L4s' | 'Standard_L8s' | 'Standard_L16s' | 'Standard_L32s' | 'Standard_NC6' | 'Standard_NC12' | 'Standard_NC24' | 'Standard_NC24r' | 'Standard_NV6' | 'Standard_NV12' | 'Standard_NV24')>;
}

export interface ImageDataDisk {
  lun: Expressionable<number>;
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface ImageDiskReference {
  id: Expressionable<string>;
  lun?: Expressionable<number>;
}

export interface ImageOSDisk {
  osType: Expressionable<('Windows' | 'Linux')>;
  osState: Expressionable<('Generalized' | 'Specialized')>;
  snapshot?: Expressionable<SubResource>;
  managedDisk?: Expressionable<SubResource>;
  blobUri?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  diskSizeGB?: Expressionable<number>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
}

export interface ImageProperties {
  sourceVirtualMachine?: Expressionable<SubResource>;
  storageProfile?: Expressionable<ImageStorageProfile>;
}

export interface ImageReference {
  id?: Expressionable<string>;
  publisher?: Expressionable<string>;
  offer?: Expressionable<string>;
  sku?: Expressionable<string>;
  version?: Expressionable<string>;
}

export interface ImageStorageProfile {
  osDisk: Expressionable<ImageOSDisk>;
  dataDisks?: Expressionable<ImageDataDisk[]>;
}

export interface InstanceViewStatus {
  code?: Expressionable<string>;
  level?: Expressionable<('Info' | 'Warning' | 'Error')>;
  displayStatus?: Expressionable<string>;
  message?: Expressionable<string>;
  time?: Expressionable<string>;
}

export interface KeyVaultAndKeyReference {
  sourceVault: Expressionable<SourceVault>;
  keyUrl: Expressionable<string>;
}

export interface KeyVaultAndSecretReference {
  sourceVault: Expressionable<SourceVault>;
  secretUrl: Expressionable<string>;
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
}

export interface ManagedDiskParameters {
  id?: Expressionable<string>;
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
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
}

export interface Plan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  product?: Expressionable<string>;
  promotionCode?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
  capacity?: Expressionable<number>;
}

export interface SourceVault {
  id?: Expressionable<string>;
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

export interface UpgradePolicy {
  mode?: Expressionable<('Automatic' | 'Manual')>;
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
  type?: Expressionable<('SystemAssigned')>;
}

export interface VirtualMachineProperties {
  hardwareProfile?: Expressionable<HardwareProfile>;
  storageProfile?: Expressionable<StorageProfile>;
  osProfile?: Expressionable<OSProfile>;
  networkProfile?: Expressionable<NetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  availabilitySet?: Expressionable<SubResource>;
  licenseType?: Expressionable<string>;
}

export interface VirtualMachineScaleSetDataDisk {
  name?: Expressionable<string>;
  lun: Expressionable<number>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
  diskSizeGB?: Expressionable<number>;
  managedDisk?: Expressionable<VirtualMachineScaleSetManagedDiskParameters>;
}

export interface VirtualMachineScaleSetExtension {
  name?: Expressionable<string>;
  properties?: Expressionable<VirtualMachineScaleSetExtensionProperties>;
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
}

export interface VirtualMachineScaleSetIdentity {
  type?: Expressionable<('SystemAssigned')>;
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
  loadBalancerBackendAddressPools?: Expressionable<SubResource[]>;
  loadBalancerInboundNatPools?: Expressionable<SubResource[]>;
}

export interface VirtualMachineScaleSetManagedDiskParameters {
  storageAccountType?: Expressionable<('Standard_LRS' | 'Premium_LRS')>;
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
}

export interface VirtualMachineScaleSetNetworkProfile {
  networkInterfaceConfigurations?: Expressionable<VirtualMachineScaleSetNetworkConfiguration[]>;
}

export interface VirtualMachineScaleSetOSDisk {
  name?: Expressionable<string>;
  caching?: Expressionable<('None' | 'ReadOnly' | 'ReadWrite')>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
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
  virtualMachineProfile?: Expressionable<VirtualMachineScaleSetVMProfile>;
  overprovision?: Expressionable<boolean>;
  singlePlacementGroup?: Expressionable<boolean>;
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
}

export interface VirtualMachineScaleSetStorageProfile {
  imageReference?: Expressionable<ImageReference>;
  osDisk?: Expressionable<VirtualMachineScaleSetOSDisk>;
  dataDisks?: Expressionable<VirtualMachineScaleSetDataDisk[]>;
}

export interface VirtualMachineScaleSetVMProfile {
  osProfile?: Expressionable<VirtualMachineScaleSetOSProfile>;
  storageProfile?: Expressionable<VirtualMachineScaleSetStorageProfile>;
  networkProfile?: Expressionable<VirtualMachineScaleSetNetworkProfile>;
  diagnosticsProfile?: Expressionable<DiagnosticsProfile>;
  extensionProfile?: Expressionable<VirtualMachineScaleSetExtensionProfile>;
  licenseType?: Expressionable<string>;
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

export interface genericExtension {
  publisher: Expressionable<string>;
  type: Expressionable<string>;
  typeHandlerVersion: Expressionable<string>;
}

export interface iaaSDiagnostics {
  publisher: Expressionable<('Microsoft.Azure.Diagnostics')>;
  type: Expressionable<('IaaSDiagnostics')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface iaaSAntimalware {
  publisher: Expressionable<('Microsoft.Azure.Security')>;
  type: Expressionable<('IaaSAntimalware')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface customScriptExtension {
  publisher: Expressionable<('Microsoft.Compute')>;
  type: Expressionable<('CustomScriptExtension')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface customScriptForLinux {
  publisher: Expressionable<('Microsoft.OSTCExtensions')>;
  type: Expressionable<('CustomScriptForLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface linuxDiagnostic {
  publisher: Expressionable<('Microsoft.OSTCExtensions')>;
  type: Expressionable<('LinuxDiagnostic')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface vmAccessForLinux {
  publisher: Expressionable<('Microsoft.OSTCExtensions')>;
  type: Expressionable<('VMAccessForLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface bgInfo {
  publisher: Expressionable<('Microsoft.Compute')>;
  type: Expressionable<('bginfo')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
}

export interface vmAccessAgent {
  publisher: Expressionable<('Microsoft.Compute')>;
  type: Expressionable<('VMAccessAgent')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface dscExtension {
  publisher: Expressionable<('Microsoft.Powershell')>;
  type: Expressionable<('DSC')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface acronisBackupLinux {
  publisher: Expressionable<('Acronis.Backup')>;
  type: Expressionable<('AcronisBackupLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface acronisBackup {
  publisher: Expressionable<('Acronis.Backup')>;
  type: Expressionable<('AcronisBackup')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface linuxChefClient {
  publisher: Expressionable<('Chef.Bootstrap.WindowsAzure')>;
  type: Expressionable<('LinuxChefClient')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface chefClient {
  publisher: Expressionable<('Chef.Bootstrap.WindowsAzure')>;
  type: Expressionable<('ChefClient')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface datadogLinuxAgent {
  publisher: Expressionable<('Datadog.Agent')>;
  type: Expressionable<('DatadogLinuxAgent')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface datadogWindowsAgent {
  publisher: Expressionable<('Datadog.Agent')>;
  type: Expressionable<('DatadogWindowsAgent')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface dockerExtension {
  publisher: Expressionable<('Microsoft.Azure.Extensions')>;
  type: Expressionable<('DockerExtension')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface dynatraceLinux {
  publisher: Expressionable<('dynatrace.ruxit')>;
  type: Expressionable<('ruxitAgentLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface dynatraceWindows {
  publisher: Expressionable<('dynatrace.ruxit')>;
  type: Expressionable<('ruxitAgentWindows')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface eset {
  publisher: Expressionable<('ESET')>;
  type: Expressionable<('FileSecurity')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface hpeSecurityApplicationDefender {
  publisher: Expressionable<('HPE.Security.ApplicationDefender')>;
  type: Expressionable<('DotnetAgent')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  protectedSettings: Expressionable<any>;
}

export interface puppetAgent {
  publisher: Expressionable<('Puppet')>;
  type: Expressionable<('PuppetAgent')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  protectedSettings: Expressionable<any>;
}

export interface site24x7LinuxServerExtn {
  publisher: Expressionable<('Site24x7')>;
  type: Expressionable<('Site24x7LinuxServerExtn')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface site24x7WindowsServerExtn {
  publisher: Expressionable<('Site24x7')>;
  type: Expressionable<('Site24x7WindowsServerExtn')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface site24x7ApmInsightExtn {
  publisher: Expressionable<('Site24x7')>;
  type: Expressionable<('Site24x7ApmInsightExtn')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface trendMicroDSALinux {
  publisher: Expressionable<('TrendMicro.DeepSecurity')>;
  type: Expressionable<('TrendMicroDSALinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface trendMicroDSA {
  publisher: Expressionable<('TrendMicro.DeepSecurity')>;
  type: Expressionable<('TrendMicroDSA')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface bmcCtmAgentLinux {
  publisher: Expressionable<('ctm.bmc.com')>;
  type: Expressionable<('BmcCtmAgentLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface bmcCtmAgentWindows {
  publisher: Expressionable<('bmc.ctm')>;
  type: Expressionable<('AgentWinExt')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface OSPatchingForLinux {
  publisher: Expressionable<('Microsoft.OSTCExtensions')>;
  type: Expressionable<('OSPatchingForLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface VMSnapshot {
  publisher: Expressionable<('Microsoft.Azure.RecoveryServices')>;
  type: Expressionable<('VMSnapshot')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface VMSnapshotLinux {
  publisher: Expressionable<('Microsoft.Azure.RecoveryServices')>;
  type: Expressionable<('VMSnapshotLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
}

export interface customScript {
  publisher: Expressionable<('Microsoft.Azure.Extensions')>;
  type: Expressionable<('CustomScript')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
  settings: Expressionable<any>;
  protectedSettings: Expressionable<any>;
}

export interface networkWatcherAgentWindows {
  publisher: Expressionable<('Microsoft.Azure.NetworkWatcher')>;
  type: Expressionable<('NetworkWatcherAgentWindows')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
}

export interface networkWatcherAgentLinux {
  publisher: Expressionable<('Microsoft.Azure.NetworkWatcher')>;
  type: Expressionable<('NetworkWatcherAgentLinux')>;
  typeHandlerVersion: Expressionable<string>;
  autoUpgradeMinorVersion: Expressionable<boolean>;
}

export namespace availabilitySets {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export type AvailabilitySetsResource = ResourceDefinition<AvailabilitySetProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: AvailabilitySetProperties, location: Expressionable<string>, sku?: Expressionable<Sku>): AvailabilitySetsResource {
    return {
      type: 'Microsoft.Compute/availabilitySets',
      apiVersion: '2017-03-30',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace disks {
  export interface AdditionalProps {
    sku?: Expressionable<DiskSku>;
    zones?: Expressionable<string[]>;
  }
  
  export type DisksResource = ResourceDefinition<DiskProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DiskProperties, location: Expressionable<string>, sku?: Expressionable<DiskSku>, zones?: Expressionable<string[]>): DisksResource {
    return {
      type: 'Microsoft.Compute/disks',
      apiVersion: '2017-03-30',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        zones,
      },
    };
  }
}
export namespace images {
  export type ImagesResource = ResourceDefinition<ImageProperties, undefined>;
  
  export function create(name: Expressionable<string>, properties: ImageProperties, location: Expressionable<string>): ImagesResource {
    return {
      type: 'Microsoft.Compute/images',
      apiVersion: '2017-03-30',
      name: [name],
      location,
      properties,
    };
  }
}
export namespace snapshots {
  export interface AdditionalProps {
    sku?: Expressionable<DiskSku>;
  }
  
  export type SnapshotsResource = ResourceDefinition<DiskProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: DiskProperties, location: Expressionable<string>, sku?: Expressionable<DiskSku>): SnapshotsResource {
    return {
      type: 'Microsoft.Compute/snapshots',
      apiVersion: '2017-03-30',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
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
      apiVersion: '2017-03-30',
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
export namespace virtualMachines {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ExtensionsResource {
      return {
        type: 'Microsoft.Compute/virtualMachines/extensions',
        apiVersion: '2017-03-30',
        name: name,
        location,
        properties,
      };
    }
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
      apiVersion: '2017-03-30',
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