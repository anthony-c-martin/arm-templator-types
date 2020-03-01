import { Expressionable, ResourceDefinition } from 'arm-templator';

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
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type LabaccountsResource = ResourceDefinition<LabAccountProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: LabAccountProperties, location?: Expressionable<string>, tags?: Expressionable<any>): LabaccountsResource {
    return {
      type: 'Microsoft.LabServices/labaccounts',
      apiVersion: '2018-10-15',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}
export namespace labaccounts {
  export namespace galleryimages {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type GalleryimagesResource = ResourceDefinition<GalleryImageProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GalleryImageProperties, location?: Expressionable<string>, tags?: Expressionable<any>): GalleryimagesResource {
      return {
        type: 'Microsoft.LabServices/labaccounts/galleryimages',
        apiVersion: '2018-10-15',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export interface AdditionalProps {
      tags?: Expressionable<any>;
    }
    
    export type LabsResource = ResourceDefinition<LabProperties, AdditionalProps>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LabProperties, location?: Expressionable<string>, tags?: Expressionable<any>): LabsResource {
      return {
        type: 'Microsoft.LabServices/labaccounts/labs',
        apiVersion: '2018-10-15',
        name: name,
        location,
        properties,
        additional: {
          tags,
        },
      };
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace environmentsettings {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type EnvironmentsettingsResource = ResourceDefinition<EnvironmentSettingProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentSettingProperties, location?: Expressionable<string>, tags?: Expressionable<any>): EnvironmentsettingsResource {
        return {
          type: 'Microsoft.LabServices/labaccounts/labs/environmentsettings',
          apiVersion: '2018-10-15',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace environmentsettings {
      export namespace environments {
        export interface AdditionalProps {
          tags?: Expressionable<any>;
        }
        
        export type EnvironmentsResource = ResourceDefinition<EnvironmentProperties, AdditionalProps>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: EnvironmentProperties, location?: Expressionable<string>, tags?: Expressionable<any>): EnvironmentsResource {
          return {
            type: 'Microsoft.LabServices/labaccounts/labs/environmentsettings/environments',
            apiVersion: '2018-10-15',
            name: name,
            location,
            properties,
            additional: {
              tags,
            },
          };
        }
      }
    }
  }
}
export namespace labaccounts {
  export namespace labs {
    export namespace users {
      export interface AdditionalProps {
        tags?: Expressionable<any>;
      }
      
      export type UsersResource = ResourceDefinition<UserProperties, AdditionalProps>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: UserProperties, location?: Expressionable<string>, tags?: Expressionable<any>): UsersResource {
        return {
          type: 'Microsoft.LabServices/labaccounts/labs/users',
          apiVersion: '2018-10-15',
          name: name,
          location,
          properties,
          additional: {
            tags,
          },
        };
      }
    }
  }
}