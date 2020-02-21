import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AdditionalRegion {
  location?: Expressionable<string>;
  skuType?: Expressionable<('Developer' | 'Standard' | 'Premium')>;
  skuUnitCount?: Expressionable<number>;
  staticIPs?: Expressionable<string[]>;
  vpnconfiguration?: Expressionable<VirtualNetworkConfiguration>;
}

export interface ApiServiceProperties {
  publisherEmail?: Expressionable<string>;
  publisherName?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  targetProvisioningState?: Expressionable<string>;
  createdAtUtc?: Expressionable<string>;
  runtimeUrl?: Expressionable<string>;
  portalUrl?: Expressionable<string>;
  managementApiUrl?: Expressionable<string>;
  scmUrl?: Expressionable<string>;
  addresserEmail?: Expressionable<string>;
  hostnameConfigurations?: Expressionable<HostnameConfiguration[]>;
  staticIPs?: Expressionable<string[]>;
  vpnconfiguration?: Expressionable<VirtualNetworkConfiguration>;
  additionalLocations?: Expressionable<AdditionalRegion[]>;
  vpnType?: Expressionable<('None' | 'External' | 'Internal')>;
}

export interface ApiServiceSkuProperties {
  name?: Expressionable<('Developer' | 'Standard' | 'Premium')>;
  capacity?: Expressionable<number>;
}

export interface CertificateInformation {
  expiry: Expressionable<string>;
  thumbprint: Expressionable<string>;
  subject: Expressionable<string>;
}

export interface HostnameConfiguration {
  type: Expressionable<('Proxy' | 'Portal' | 'Management' | 'Scm')>;
  hostname: Expressionable<string>;
  certificate: Expressionable<CertificateInformation>;
}

export interface VirtualNetworkConfiguration {
  subnetResourceId?: Expressionable<string>;
  location?: Expressionable<string>;
}

export namespace service {
  export interface AdditionalProps {
    sku: Expressionable<ApiServiceSkuProperties>;
  }
  
  export type ServiceResource = ResourceDefinition<ApiServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ApiServiceProperties, location: Expressionable<string>, sku: Expressionable<ApiServiceSkuProperties>): ServiceResource {
    return {
      type: 'Microsoft.ApiManagement/service',
      apiVersion: '2016-07-07',
      name: [name],
      location,
      properties,
      additional: {
        sku,
      },
    };
  }
}