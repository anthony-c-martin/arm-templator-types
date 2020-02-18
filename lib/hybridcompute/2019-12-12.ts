import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface LocationData {
  city?: Expressionable<string>;
  countryOrRegion?: Expressionable<string>;
  district?: Expressionable<string>;
  name: Expressionable<string>;
}

export interface MachineExtensionInstanceView {
  name?: Expressionable<string>;
  status?: Expressionable<MachineExtensionInstanceViewStatus>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
}

export interface MachineExtensionInstanceViewStatus {
  code?: Expressionable<string>;
  displayStatus?: Expressionable<string>;
  level?: Expressionable<('Info' | 'Warning' | 'Error')>;
  message?: Expressionable<string>;
  time?: Expressionable<string>;
}

export interface MachineExtensionProperties {
  autoUpgradeMinorVersion?: Expressionable<boolean>;
  forceUpdateTag?: Expressionable<string>;
  instanceView?: Expressionable<MachineExtensionPropertiesInstanceView>;
  protectedSettings?: Expressionable<any>;
  publisher?: Expressionable<string>;
  settings?: Expressionable<any>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
}

export interface MachineExtensionPropertiesInstanceView {
  name?: Expressionable<string>;
  status?: Expressionable<MachineExtensionInstanceViewStatus>;
  type?: Expressionable<string>;
  typeHandlerVersion?: Expressionable<string>;
}

export interface MachineIdentity {
  type?: Expressionable<('SystemAssigned')>;
}

export interface MachinePropertiesModel {
  clientPublicKey?: Expressionable<string>;
  extensions?: Expressionable<MachineExtensionInstanceView[]>;
  locationData?: Expressionable<LocationData>;
  osProfile?: Expressionable<MachinePropertiesOsProfile>;
  vmId?: Expressionable<string>;
}

export interface MachinePropertiesOsProfile {
}

export namespace machines {
  export function create(name: Expressionable<string>, properties: MachinePropertiesModel, location: Expressionable<string>): ResourceDefinition<MachinePropertiesModel> {
    return {
      type: 'Microsoft.HybridCompute/machines',
      apiVersion: '2019-12-12',
      name: name,
      location,
      properties,
    };
  }
}
export namespace machines {
  export namespace extensions {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: MachineExtensionProperties, location: Expressionable<string>): ResourceDefinition<MachineExtensionProperties> {
      return {
        type: 'Microsoft.HybridCompute/machines/extensions',
        apiVersion: '2019-12-12',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}