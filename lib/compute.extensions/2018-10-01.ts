import { Expressionable, ResourceDefinition } from 'arm-templator';

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

export namespace virtualMachines {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any, location: Expressionable<string>): ExtensionsResource {
      return {
        type: 'Microsoft.Compute/virtualMachines/extensions',
        apiVersion: '2018-10-01',
        name: name,
        location,
        properties,
      };
    }
  }
}
export namespace virtualMachineScaleSets {
  export namespace extensions {
    export type ExtensionsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ExtensionsResource {
      return {
        type: 'Microsoft.Compute/virtualMachineScaleSets/extensions',
        apiVersion: '2018-10-01',
        name: name,
        properties,
      };
    }
  }
}