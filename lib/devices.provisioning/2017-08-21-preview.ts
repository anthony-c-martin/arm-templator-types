import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: IotDpsPropertiesDescription, location: Expressionable<string>): ResourceDefinition<IotDpsPropertiesDescription> {
    return {
      type: 'Microsoft.Devices/provisioningServices',
      apiVersion: '2017-08-21-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace provisioningServices {
  export namespace certificates {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): ResourceDefinition<any> {
      return {
        type: 'Microsoft.Devices/provisioningServices/certificates',
        apiVersion: '2017-08-21-preview',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}