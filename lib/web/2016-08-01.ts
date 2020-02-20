import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApiDefinitionInfo {
  url?: Expressionable<string>;
}

export interface AutoHealActions {
  actionType?: Expressionable<('Recycle' | 'LogEvent' | 'CustomAction')>;
  customAction?: Expressionable<AutoHealCustomAction>;
  minProcessExecutionTime?: Expressionable<string>;
}

export interface AutoHealCustomAction {
  exe?: Expressionable<string>;
  parameters?: Expressionable<string>;
}

export interface AutoHealRules {
  triggers?: Expressionable<AutoHealTriggers>;
  actions?: Expressionable<AutoHealActions>;
}

export interface AutoHealTriggers {
  requests?: Expressionable<RequestsBasedTrigger>;
  privateBytesInKB?: Expressionable<number>;
  statusCodes?: Expressionable<StatusCodesBasedTrigger[]>;
  slowRequests?: Expressionable<SlowRequestsBasedTrigger>;
}

export interface CloningInfo {
  correlationId?: Expressionable<string>;
  overwrite?: Expressionable<boolean>;
  cloneCustomHostNames?: Expressionable<boolean>;
  cloneSourceControl?: Expressionable<boolean>;
  sourceWebAppId: Expressionable<string>;
  hostingEnvironment?: Expressionable<string>;
  configureLoadBalancing?: Expressionable<boolean>;
  trafficManagerProfileId?: Expressionable<string>;
  trafficManagerProfileName?: Expressionable<string>;
}

export interface ConnectionString_properties {
  value?: Expressionable<string>;
  type?: Expressionable<('MySql' | 'SQLServer' | 'SQLAzure' | 'Custom' | 'NotificationHub' | 'ServiceBus' | 'EventHub' | 'ApiHub' | 'DocDb' | 'RedisCache')>;
}

export interface ConnStringInfo {
  name?: Expressionable<string>;
  connectionString?: Expressionable<string>;
  type?: Expressionable<('MySql' | 'SQLServer' | 'SQLAzure' | 'Custom' | 'NotificationHub' | 'ServiceBus' | 'EventHub' | 'ApiHub' | 'DocDb' | 'RedisCache')>;
}

export interface CorsSettings {
  allowedOrigins?: Expressionable<string[]>;
}

export interface Deployment_properties {
  id?: Expressionable<string>;
  status?: Expressionable<number>;
  message?: Expressionable<string>;
  author?: Expressionable<string>;
  deployer?: Expressionable<string>;
  author_email?: Expressionable<string>;
  start_time?: Expressionable<string>;
  end_time?: Expressionable<string>;
  active?: Expressionable<boolean>;
  details?: Expressionable<string>;
}

export interface Experiments {
  rampUpRules?: Expressionable<RampUpRule[]>;
}

export interface HandlerMapping {
  extension?: Expressionable<string>;
  scriptProcessor?: Expressionable<string>;
  arguments?: Expressionable<string>;
}

export interface HostingEnvironmentProfile {
  id?: Expressionable<string>;
}

export interface HostNameBinding_properties {
  name?: Expressionable<string>;
  siteName?: Expressionable<string>;
  domainId?: Expressionable<string>;
  azureResourceName?: Expressionable<string>;
  azureResourceType?: Expressionable<('Website' | 'TrafficManager')>;
  customHostNameDnsRecordType?: Expressionable<('CName' | 'A')>;
  hostNameType?: Expressionable<('Verified' | 'Managed')>;
  sslState?: Expressionable<('Disabled' | 'SniEnabled' | 'IpBasedEnabled')>;
  thumbprint?: Expressionable<string>;
  virtualIP?: Expressionable<string>;
}

export interface HostNameSslState {
  name?: Expressionable<string>;
  sslState?: Expressionable<('Disabled' | 'SniEnabled' | 'IpBasedEnabled')>;
  virtualIP?: Expressionable<string>;
  thumbprint?: Expressionable<string>;
  toUpdate?: Expressionable<boolean>;
  hostType?: Expressionable<('Standard' | 'Repository')>;
}

export interface HybridConnection_properties {
  serviceBusNamespace?: Expressionable<string>;
  relayName?: Expressionable<string>;
  relayArmUri?: Expressionable<string>;
  hostname?: Expressionable<string>;
  port?: Expressionable<number>;
  sendKeyName?: Expressionable<string>;
  sendKeyValue?: Expressionable<string>;
}

export interface Identifier_properties {
  id?: Expressionable<string>;
}

export interface IpSecurityRestriction {
  ipAddress: Expressionable<string>;
  subnetMask?: Expressionable<string>;
}

export interface NameValuePair {
  name?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface PremierAddOn_properties {
  sku?: Expressionable<string>;
  product?: Expressionable<string>;
  vendor?: Expressionable<string>;
  name?: Expressionable<string>;
  location?: Expressionable<string>;
  marketplacePublisher?: Expressionable<string>;
  marketplaceOffer?: Expressionable<string>;
}

export interface PublicCertificate_properties {
  blob?: Expressionable<string>;
  publicCertificateLocation?: Expressionable<('CurrentUserMy' | 'LocalMachineMy' | 'Unknown')>;
}

export interface PushSettings {
  isPushEnabled: Expressionable<boolean>;
  tagWhitelistJson?: Expressionable<string>;
  tagsRequiringAuth?: Expressionable<string>;
  dynamicTagsJson?: Expressionable<string>;
}

export interface RampUpRule {
  actionHostName?: Expressionable<string>;
  reroutePercentage?: Expressionable<number>;
  changeStep?: Expressionable<number>;
  changeIntervalInMinutes?: Expressionable<number>;
  minReroutePercentage?: Expressionable<number>;
  maxReroutePercentage?: Expressionable<number>;
  changeDecisionCallbackUrl?: Expressionable<string>;
  name?: Expressionable<string>;
}

export interface RelayServiceConnectionEntity_properties {
  entityName?: Expressionable<string>;
  entityConnectionString?: Expressionable<string>;
  resourceType?: Expressionable<string>;
  resourceConnectionString?: Expressionable<string>;
  hostname?: Expressionable<string>;
  port?: Expressionable<number>;
  biztalkUri?: Expressionable<string>;
}

export interface RequestsBasedTrigger {
  count?: Expressionable<number>;
  timeInterval?: Expressionable<string>;
}

export interface Site_properties {
  enabled?: Expressionable<boolean>;
  hostNameSslStates?: Expressionable<HostNameSslState[]>;
  serverFarmId?: Expressionable<string>;
  reserved?: Expressionable<boolean>;
  siteConfig?: Expressionable<SiteConfig>;
  scmSiteAlsoStopped?: Expressionable<(false)>;
  hostingEnvironmentProfile?: Expressionable<HostingEnvironmentProfile>;
  microService?: Expressionable<('false')>;
  gatewaySiteName?: Expressionable<string>;
  clientAffinityEnabled?: Expressionable<boolean>;
  clientCertEnabled?: Expressionable<boolean>;
  hostNamesDisabled?: Expressionable<boolean>;
  containerSize?: Expressionable<number>;
  dailyMemoryTimeQuota?: Expressionable<number>;
  cloningInfo?: Expressionable<CloningInfo>;
  httpsOnly?: Expressionable<boolean>;
}

export interface SiteConfig {
  numberOfWorkers?: Expressionable<number>;
  defaultDocuments?: Expressionable<string[]>;
  netFrameworkVersion?: Expressionable<('v4.6')>;
  phpVersion?: Expressionable<string>;
  pythonVersion?: Expressionable<string>;
  nodeVersion?: Expressionable<string>;
  linuxFxVersion?: Expressionable<string>;
  requestTracingEnabled?: Expressionable<boolean>;
  requestTracingExpirationTime?: Expressionable<string>;
  remoteDebuggingEnabled?: Expressionable<boolean>;
  remoteDebuggingVersion?: Expressionable<string>;
  httpLoggingEnabled?: Expressionable<boolean>;
  logsDirectorySizeLimit?: Expressionable<number>;
  detailedErrorLoggingEnabled?: Expressionable<boolean>;
  publishingUsername?: Expressionable<string>;
  appSettings?: Expressionable<NameValuePair[]>;
  connectionStrings?: Expressionable<ConnStringInfo[]>;
  handlerMappings?: Expressionable<HandlerMapping[]>;
  documentRoot?: Expressionable<string>;
  scmType?: Expressionable<('None' | 'Dropbox' | 'Tfs' | 'LocalGit' | 'GitHub' | 'CodePlexGit' | 'CodePlexHg' | 'BitbucketGit' | 'BitbucketHg' | 'ExternalGit' | 'ExternalHg' | 'OneDrive' | 'VSO')>;
  use32BitWorkerProcess?: Expressionable<boolean>;
  webSocketsEnabled?: Expressionable<boolean>;
  alwaysOn?: Expressionable<boolean>;
  javaVersion?: Expressionable<string>;
  javaContainer?: Expressionable<string>;
  javaContainerVersion?: Expressionable<string>;
  appCommandLine?: Expressionable<string>;
  managedPipelineMode?: Expressionable<('Integrated' | 'Classic')>;
  virtualApplications?: Expressionable<VirtualApplication[]>;
  loadBalancing?: Expressionable<('WeightedRoundRobin' | 'LeastRequests' | 'LeastResponseTime' | 'WeightedTotalTraffic' | 'RequestHash')>;
  experiments?: Expressionable<Experiments>;
  limits?: Expressionable<SiteLimits>;
  autoHealEnabled?: Expressionable<boolean>;
  autoHealRules?: Expressionable<AutoHealRules>;
  tracingOptions?: Expressionable<string>;
  vnetName?: Expressionable<string>;
  cors?: Expressionable<CorsSettings>;
  push?: Expressionable<PushSettings>;
  apiDefinition?: Expressionable<ApiDefinitionInfo>;
  autoSwapSlotName?: Expressionable<string>;
  localMySqlEnabled?: Expressionable<(false)>;
  ipSecurityRestrictions?: Expressionable<IpSecurityRestriction[]>;
}

export interface SourceControl {
  repoUrl?: Expressionable<string>;
  branch?: Expressionable<string>;
  isManualIntegration?: Expressionable<boolean>;
  deploymentRollbackEnabled?: Expressionable<boolean>;
  isMercurial?: Expressionable<boolean>;
}

export interface SiteLimits {
  maxPercentageCpu?: Expressionable<number>;
  maxMemoryInMb?: Expressionable<number>;
  maxDiskSizeInMb?: Expressionable<number>;
}

export interface SlowRequestsBasedTrigger {
  timeTaken?: Expressionable<string>;
  count?: Expressionable<number>;
  timeInterval?: Expressionable<string>;
}

export interface StatusCodesBasedTrigger {
  status?: Expressionable<number>;
  subStatus?: Expressionable<number>;
  win32Status?: Expressionable<number>;
  count?: Expressionable<number>;
  timeInterval?: Expressionable<string>;
}

export interface VirtualApplication {
  virtualPath?: Expressionable<string>;
  physicalPath?: Expressionable<string>;
  preloadEnabled?: Expressionable<boolean>;
  virtualDirectories?: Expressionable<VirtualDirectory[]>;
}

export interface VirtualDirectory {
  virtualPath?: Expressionable<string>;
  physicalPath?: Expressionable<string>;
}

export interface VnetGateway_properties {
  vnetName?: Expressionable<string>;
  vpnPackageUri?: Expressionable<string>;
}

export namespace sites {
  export type SitesResource = ResourceDefinition<Site_properties>;
  
  export function create(name: Expressionable<string>, properties: Site_properties): SitesResource {
    return {
      type: 'Microsoft.Web/sites',
      apiVersion: '2016-08-01',
      name: [name],
      properties,
    };
  }
}
export namespace sites {
  export namespace config {
    export type ConfigResource = ResourceDefinition<SiteConfig>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SiteConfig): ConfigResource {
      return {
        type: 'Microsoft.Web/sites/config',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace deployments {
    export type DeploymentsResource = ResourceDefinition<Deployment_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Deployment_properties): DeploymentsResource {
      return {
        type: 'Microsoft.Web/sites/deployments',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace domainOwnershipIdentifiers {
    export type DomainOwnershipIdentifiersResource = ResourceDefinition<Identifier_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Identifier_properties): DomainOwnershipIdentifiersResource {
      return {
        type: 'Microsoft.Web/sites/domainOwnershipIdentifiers',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace hostNameBindings {
    export type HostNameBindingsResource = ResourceDefinition<HostNameBinding_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: HostNameBinding_properties): HostNameBindingsResource {
      return {
        type: 'Microsoft.Web/sites/hostNameBindings',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace hybridconnection {
    export type HybridconnectionResource = ResourceDefinition<RelayServiceConnectionEntity_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: RelayServiceConnectionEntity_properties): HybridconnectionResource {
      return {
        type: 'Microsoft.Web/sites/hybridconnection',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace hybridConnectionNamespaces {
    export namespace relays {
      export type RelaysResource = ResourceDefinition<HybridConnection_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: HybridConnection_properties): RelaysResource {
        return {
          type: 'Microsoft.Web/sites/hybridConnectionNamespaces/relays',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace instances {
    export namespace deployments {
      export type DeploymentsResource = ResourceDefinition<Deployment_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Deployment_properties): DeploymentsResource {
        return {
          type: 'Microsoft.Web/sites/instances/deployments',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace premieraddons {
    export type PremieraddonsResource = ResourceDefinition<PremierAddOn_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PremierAddOn_properties): PremieraddonsResource {
      return {
        type: 'Microsoft.Web/sites/premieraddons',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace publiccertificates {
    export type PubliccertificatesResource = ResourceDefinition<PublicCertificate_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PublicCertificate_properties): PubliccertificatesResource {
      return {
        type: 'Microsoft.Web/sites/publiccertificates',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace sourcecontrols {
    export type SourcecontrolsResource = ResourceDefinition<SourceControl>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SourceControl): SourcecontrolsResource {
      return {
        type: 'Microsoft.Web/sites/sourcecontrols',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace slots {
    export type SlotsResource = ResourceDefinition<Site_properties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: Site_properties): SlotsResource {
      return {
        type: 'Microsoft.Web/sites/slots',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace config {
      export type ConfigResource = ResourceDefinition<SiteConfig>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SiteConfig): ConfigResource {
        return {
          type: 'Microsoft.Web/sites/slots/config',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace deployments {
      export type DeploymentsResource = ResourceDefinition<Deployment_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Deployment_properties): DeploymentsResource {
        return {
          type: 'Microsoft.Web/sites/slots/deployments',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace domainOwnershipIdentifiers {
      export type DomainOwnershipIdentifiersResource = ResourceDefinition<Identifier_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Identifier_properties): DomainOwnershipIdentifiersResource {
        return {
          type: 'Microsoft.Web/sites/slots/domainOwnershipIdentifiers',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace hostNameBindings {
      export type HostNameBindingsResource = ResourceDefinition<HostNameBinding_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: HostNameBinding_properties): HostNameBindingsResource {
        return {
          type: 'Microsoft.Web/sites/slots/hostNameBindings',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace hybridconnection {
      export type HybridconnectionResource = ResourceDefinition<RelayServiceConnectionEntity_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: RelayServiceConnectionEntity_properties): HybridconnectionResource {
        return {
          type: 'Microsoft.Web/sites/slots/hybridconnection',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace hybridConnectionNamespaces {
      export namespace relays {
        export type RelaysResource = ResourceDefinition<HybridConnection_properties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: HybridConnection_properties): RelaysResource {
          return {
            type: 'Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays',
            apiVersion: '2016-08-01',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace instances {
      export namespace deployments {
        export type DeploymentsResource = ResourceDefinition<Deployment_properties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: Deployment_properties): DeploymentsResource {
          return {
            type: 'Microsoft.Web/sites/slots/instances/deployments',
            apiVersion: '2016-08-01',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace premieraddons {
      export type PremieraddonsResource = ResourceDefinition<PremierAddOn_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PremierAddOn_properties): PremieraddonsResource {
        return {
          type: 'Microsoft.Web/sites/slots/premieraddons',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace publiccertificates {
      export type PubliccertificatesResource = ResourceDefinition<PublicCertificate_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PublicCertificate_properties): PubliccertificatesResource {
        return {
          type: 'Microsoft.Web/sites/slots/publiccertificates',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace virtualNetworkConnections {
      export type VirtualNetworkConnectionsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): VirtualNetworkConnectionsResource {
        return {
          type: 'Microsoft.Web/sites/slots/virtualNetworkConnections',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace virtualNetworkConnections {
      export namespace gateways {
        export type GatewaysResource = ResourceDefinition<VnetGateway_properties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VnetGateway_properties): GatewaysResource {
          return {
            type: 'Microsoft.Web/sites/slots/virtualNetworkConnections/gateways',
            apiVersion: '2016-08-01',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace sites {
  export namespace slots {
    export namespace sourcecontrols {
      export type SourcecontrolsResource = ResourceDefinition<SourceControl>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SourceControl): SourcecontrolsResource {
        return {
          type: 'Microsoft.Web/sites/slots/sourcecontrols',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace sites {
  export namespace virtualNetworkConnections {
    export type VirtualNetworkConnectionsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): VirtualNetworkConnectionsResource {
      return {
        type: 'Microsoft.Web/sites/virtualNetworkConnections',
        apiVersion: '2016-08-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace sites {
  export namespace virtualNetworkConnections {
    export namespace gateways {
      export type GatewaysResource = ResourceDefinition<VnetGateway_properties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: VnetGateway_properties): GatewaysResource {
        return {
          type: 'Microsoft.Web/sites/virtualNetworkConnections/gateways',
          apiVersion: '2016-08-01',
          name: name,
          properties,
        };
      }
    }
  }
}