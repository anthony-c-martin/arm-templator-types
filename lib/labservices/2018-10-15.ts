// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2018-10-15/Microsoft.LabServices.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface EnvironmentProperties {
  provisioningState?: Expressionable<string>;
  resourceSets?: Expressionable<ResourceSet>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface EnvironmentSettingProperties {
  configurationState?: Expressionable<('NotApplicable' | 'Completed')>;
  description?: Expressionable<string>;
  provisioningState?: Expressionable<string>;
  resourceSettings: Expressionable<ResourceSettings>;
  title?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface GalleryImageProperties {
  isEnabled?: Expressionable<boolean>;
  isOverride?: Expressionable<boolean>;
  isPlanAuthorized?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface LabAccountProperties {
  enabledRegionSelection?: Expressionable<boolean>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export interface LabProperties {
  maxUsersInLab?: Expressionable<number>;
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
  usageQuota?: Expressionable<string>;
  userAccessMode?: Expressionable<('Restricted' | 'Open')>;
}

export interface ReferenceVm {
  password?: Expressionable<string>;
  userName: Expressionable<string>;
}

export interface ResourceSet {
  resourceSettingId?: Expressionable<string>;
  vmResourceId?: Expressionable<string>;
}

export interface ResourceSettings {
  galleryImageResourceId?: Expressionable<string>;
  referenceVm: Expressionable<ReferenceVm>;
  size?: Expressionable<('Basic' | 'Standard' | 'Performance')>;
}

export interface UserProperties {
  provisioningState?: Expressionable<string>;
  uniqueIdentifier?: Expressionable<string>;
}

export namespace labaccounts {
  export function create(name: Expressionable<string>, properties: LabAccountProperties, location: Expressionable<string>): ResourceDefinition<LabAccountProperties> {
    return {
      type: 'Microsoft.LabServices/labaccounts',
      apiVersion: '2018-10-15',
      name: name,
      location,
      properties,
    };
  }
}
export namespace labaccounts {
  export namespace galleryimages {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GalleryImageProperties, location: Expressionable<string>): ResourceDefinition<GalleryImageProperties> {
      return {
        type: 'Microsoft.LabServices/labaccounts/galleryimages',
        apiVersion: '2018-10-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabProperties, location: Expressionable<string>): ResourceDefinition<LabProperties> {
      return {
        type: 'Microsoft.LabServices/labaccounts/labs',
        apiVersion: '2018-10-15',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace environmentsettings {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentSettingProperties, location: Expressionable<string>): ResourceDefinition<EnvironmentSettingProperties> {
        return {
          type: 'Microsoft.LabServices/labaccounts/labs/environmentsettings',
          apiVersion: '2018-10-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace environmentsettings {
      export namespace environments {
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentProperties, location: Expressionable<string>): ResourceDefinition<EnvironmentProperties> {
          return {
            type: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments',
            apiVersion: '2018-10-15',
            name: concatResourceName(...name),
            location,
            properties,
          };
        }
      }
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace users {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: UserProperties, location: Expressionable<string>): ResourceDefinition<UserProperties> {
        return {
          type: 'Microsoft.LabServices/labaccounts/labs/users',
          apiVersion: '2018-10-15',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
