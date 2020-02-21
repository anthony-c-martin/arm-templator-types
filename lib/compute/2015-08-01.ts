import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface extensionsChild {
  type: Expressionable<('extensions')>;
  apiVersion: Expressionable<('2015-05-01-preview' | '2015-06-15' | '2016-03-30')>;
  properties: Expressionable<any>;
}

export interface id {
  id: Expressionable<string>;
}

export interface networkInterfaces {
  id: Expressionable<string>;
  properties?: Expressionable<any>;
}

export interface hardwareProfile {
  vmSize: Expressionable<string>;
}

export interface imageReference {
  publisher: Expressionable<string>;
  offer: Expressionable<string>;
  sku: Expressionable<string>;
  version: Expressionable<string>;
}

export interface vhd {
  uri: Expressionable<string>;
}

export interface osDisk {
  name: Expressionable<string>;
  vhd: Expressionable<vhd>;
  image?: Expressionable<vhd>;
  caching?: Expressionable<string>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
}

export interface vhdUri {
  uri: Expressionable<string>;
}

export interface dataDisk {
  name: Expressionable<string>;
  diskSizeGB?: Expressionable<string>;
  lun: Expressionable<number>;
  vhd: Expressionable<vhdUri>;
  caching?: Expressionable<string>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
}

export interface storageProfile {
  imageReference?: Expressionable<imageReference>;
  osDisk: Expressionable<osDisk>;
  dataDisks?: Expressionable<dataDisk[]>;
}

export interface winRMListener {
  protocol: Expressionable<('Http' | 'Https')>;
  certificateUrl: Expressionable<string>;
}

export interface winRM {
  listeners: Expressionable<winRMListener[]>;
}

export interface additionalUnattendContent {
  pass: Expressionable<string>;
  component: Expressionable<string>;
  settingName: Expressionable<string>;
  content: Expressionable<string>;
}

export interface windowsConfiguration {
  provisionVMAgent?: Expressionable<boolean>;
  winRM?: Expressionable<winRM>;
  additionalUnattendContent?: Expressionable<additionalUnattendContent[]>;
  enableAutomaticUpdates?: Expressionable<boolean>;
  timeZone?: Expressionable<string>;
}

export interface publicKey {
  path?: Expressionable<string>;
  keyData?: Expressionable<string>;
}

export interface ssh {
  publicKeys?: Expressionable<publicKey[]>;
}

export interface linuxConfiguration {
  disablePasswordAuthentication?: Expressionable<boolean>;
  ssh?: Expressionable<ssh>;
}

export interface vaultCertificateUrl {
  certificateUrl: Expressionable<string>;
}

export interface secret {
  sourceVault: Expressionable<id>;
  vaultCertificates: Expressionable<vaultCertificateUrl[]>;
}

export interface osProfile {
  computerName: Expressionable<string>;
  adminUsername: Expressionable<string>;
  adminPassword: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<windowsConfiguration>;
  linuxConfiguration?: Expressionable<linuxConfiguration>;
  secrets?: Expressionable<secret[]>;
}

export interface networkProfile {
  networkInterfaces: Expressionable<networkInterfaces[]>;
}

export interface sku {
  name: Expressionable<string>;
  tier?: Expressionable<string>;
  capacity: Expressionable<number>;
}

export interface upgradePolicy {
  mode: Expressionable<string>;
}

export interface virtualMachineScaleSetOsProfile {
  computerNamePrefix: Expressionable<string>;
  adminUsername: Expressionable<string>;
  adminPassword: Expressionable<string>;
  customData?: Expressionable<string>;
  windowsConfiguration?: Expressionable<windowsConfiguration>;
  linuxConfiguration?: Expressionable<linuxConfiguration>;
  secrets?: Expressionable<secret[]>;
}

export interface virtualMachineScaleSetOSDisk {
  osType?: Expressionable<string>;
  name: Expressionable<string>;
  vhdContainers?: Expressionable<string[]>;
  caching?: Expressionable<string>;
  createOption: Expressionable<('FromImage' | 'Empty' | 'Attach')>;
}

export interface virtualMachineScaleSetStorageProfile {
  imageReference?: Expressionable<imageReference>;
  osDisk: Expressionable<virtualMachineScaleSetOSDisk>;
}

export interface virtualMachineScaleSetExtension {
  name?: Expressionable<string>;
  properties?: Expressionable<any>;
}

export interface virtualMachineScaleSetExtensionProfile {
  extensions?: Expressionable<virtualMachineScaleSetExtension[]>;
}

export interface ipConfiguration {
  name: Expressionable<string>;
  properties?: Expressionable<any>;
}

export interface networkInterfaceConfiguration {
  name: Expressionable<string>;
  properties: Expressionable<any>;
}

export interface virtualMachineScaleSetNetworkProfile {
  networkInterfaceConfigurations: Expressionable<networkInterfaceConfiguration[]>;
}

export interface virtualMachineProfile {
  osProfile: Expressionable<virtualMachineScaleSetOsProfile>;
  storageProfile: Expressionable<virtualMachineScaleSetStorageProfile>;
  extensionProfile?: Expressionable<virtualMachineScaleSetExtensionProfile>;
  networkProfile: Expressionable<virtualMachineScaleSetNetworkProfile>;
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
  export type AvailabilitySetsResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): AvailabilitySetsResource {
    return {
      type: 'Microsoft.Compute/availabilitySets',
      apiVersion: '2015-05-01-preview',
      name: [name],
      properties,
    };
  }
}
export namespace virtualMachines {
  export type VirtualMachinesResource = ResourceDefinition<any, undefined>;
  
  export function create(name: Expressionable<string>, properties: any): VirtualMachinesResource {
    return {
      type: 'Microsoft.Compute/virtualMachines',
      apiVersion: '2015-05-01-preview',
      name: [name],
      properties,
    };
  }
}
export namespace virtualMachineScaleSets {
  export interface AdditionalProps {
    sku: Expressionable<sku>;
  }
  
  export type VirtualMachineScaleSetsResource = ResourceDefinition<any, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: any, sku: Expressionable<sku>): VirtualMachineScaleSetsResource {
    return {
      type: 'Microsoft.Compute/virtualMachineScaleSets',
      apiVersion: '2015-05-01-preview',
      name: [name],
      properties,
      additional: {
        sku,
      },
    };
  }
}
export namespace virtualMachines {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ExtensionsResource {
      return {
        type: 'Microsoft.Compute/virtualMachines/extensions',
        apiVersion: '2015-05-01-preview',
        name: name,
        properties,
      };
    }
  }
}