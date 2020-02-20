import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface IotDpsPropertiesDescription {
  allocationPolicy?: Expressionable<('Hashed' | 'GeoLatency' | 'Static')>;
  authorizationPolicies?: Expressionable<SharedAccessSignatureAuthorizationRuleAccessRightsDescription[]>;
  iotHubs?: Expressionable<IotHubDefinitionDescription[]>;
  provisioningState?: Expressionable<string>;
  state?: Expressionable<('Activating' | 'Active' | 'Deleting' | 'Deleted' | 'ActivationFailed' | 'DeletionFailed' | 'Transitioning' | 'Suspending' | 'Suspended' | 'Resuming' | 'FailingOver' | 'FailoverFailed')>;
}

export interface IotDpsSkuInfo {
  capacity?: Expressionable<number>;
  name?: Expressionable<('S1')>;
}

export interface IotHubDefinitionDescription {
  allocationWeight?: Expressionable<number>;
  applyAllocationPolicy?: Expressionable<boolean>;
  connectionString: Expressionable<string>;
  location: Expressionable<string>;
}

export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  keyName: Expressionable<string>;
  primaryKey?: Expressionable<string>;
  rights: Expressionable<('ServiceConfig' | 'EnrollmentRead' | 'EnrollmentWrite' | 'DeviceConnect' | 'RegistrationStatusRead' | 'RegistrationStatusWrite')>;
  secondaryKey?: Expressionable<string>;
}

export namespace provisioningServices {
  export interface AddedResourceProps {
    sku: Expressionable<IotDpsSkuInfo>;
    tags?: Expressionable<any>;
  }
  
  export type ProvisioningServicesResource = ResourceDefinition<IotDpsPropertiesDescription> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: IotDpsPropertiesDescription, location: Expressionable<string>, sku: Expressionable<IotDpsSkuInfo>, tags?: Expressionable<any>): ProvisioningServicesResource {
    return {
      type: 'Microsoft.Devices/provisioningServices',
      apiVersion: '2017-08-21-preview',
      name: [name],
      location,
      sku,
      tags,
      properties,
    };
  }
}
export namespace provisioningServices {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): CertificatesResource {
      return {
        type: 'Microsoft.Devices/provisioningServices/certificates',
        apiVersion: '2017-08-21-preview',
        name: name,
        properties,
      };
    }
  }
}