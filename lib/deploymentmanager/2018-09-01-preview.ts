import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ArtifactSourceProperties {
  artifactRoot?: Expressionable<string>;
  authentication: Expressionable<Authentication>;
  sourceType: Expressionable<string>;
}

export interface Authentication {
}

export interface Identity {
  identityIds: Expressionable<string[]>;
  type: Expressionable<string>;
}

export interface PrePostStep {
  stepId: Expressionable<string>;
}

export interface RolloutRequestPropertiesModel {
  artifactSourceId?: Expressionable<string>;
  buildVersion: Expressionable<string>;
  stepGroups: Expressionable<Step[]>;
  targetServiceTopologyId: Expressionable<string>;
}

export interface SasAuthentication {
  properties?: Expressionable<SasProperties>;
  type: Expressionable<('Sas')>;
}

export interface SasProperties {
  sasUri: Expressionable<string>;
}

export interface ServiceResourceProperties {
  targetLocation: Expressionable<string>;
  targetSubscriptionId: Expressionable<string>;
}

export interface ServiceTopologyResourceProperties {
  artifactSourceId?: Expressionable<string>;
}

export interface ServiceUnitArtifacts {
  parametersArtifactSourceRelativePath?: Expressionable<string>;
  parametersUri?: Expressionable<string>;
  templateArtifactSourceRelativePath?: Expressionable<string>;
  templateUri?: Expressionable<string>;
}

export interface ServiceUnitResourceProperties {
  artifacts?: Expressionable<ServiceUnitArtifacts>;
  deploymentMode: Expressionable<('Incremental' | 'Complete')>;
  targetResourceGroup: Expressionable<string>;
}

export interface Step {
  dependsOnStepGroups?: Expressionable<string[]>;
  deploymentTargetId: Expressionable<string>;
  name: Expressionable<string>;
  postDeploymentSteps?: Expressionable<PrePostStep[]>;
  preDeploymentSteps?: Expressionable<PrePostStep[]>;
}

export interface StepPropertiesModel {
}

export interface WaitStepAttributes {
  duration: Expressionable<string>;
}

export interface WaitStepPropertiesModel {
  attributes?: Expressionable<WaitStepAttributes>;
  stepType: Expressionable<('Wait')>;
}

export namespace artifactSources {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ArtifactSourcesResource = ResourceDefinition<ArtifactSourceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ArtifactSourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ArtifactSourcesResource {
    return {
      type: 'Microsoft.DeploymentManager/artifactSources',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace rollouts {
  export interface AddedResourceProps {
    identity: Expressionable<Identity>;
    tags?: Expressionable<any>;
  }
  
  export type RolloutsResource = ResourceDefinition<RolloutRequestPropertiesModel> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: RolloutRequestPropertiesModel, location: Expressionable<string>, identity: Expressionable<Identity>, tags?: Expressionable<any>): RolloutsResource {
    return {
      type: 'Microsoft.DeploymentManager/rollouts',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      identity,
      tags,
      properties,
    };
  }
}
export namespace serviceTopologies {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ServiceTopologiesResource = ResourceDefinition<ServiceTopologyResourceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ServiceTopologyResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ServiceTopologiesResource {
    return {
      type: 'Microsoft.DeploymentManager/serviceTopologies',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}
export namespace serviceTopologies {
  export namespace services {
    export interface AddedResourceProps {
      tags?: Expressionable<any>;
    }
    
    export type ServicesResource = ResourceDefinition<ServiceResourceProperties> & AddedResourceProps;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServiceResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ServicesResource {
      return {
        type: 'Microsoft.DeploymentManager/serviceTopologies/services',
        apiVersion: '2018-09-01-preview',
        name: name,
        location,
        tags,
        properties,
      };
    }
  }
}
export namespace serviceTopologies {
  export namespace services {
    export namespace serviceUnits {
      export interface AddedResourceProps {
        tags?: Expressionable<any>;
      }
      
      export type ServiceUnitsResource = ResourceDefinition<ServiceUnitResourceProperties> & AddedResourceProps;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServiceUnitResourceProperties, location: Expressionable<string>, tags?: Expressionable<any>): ServiceUnitsResource {
        return {
          type: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits',
          apiVersion: '2018-09-01-preview',
          name: name,
          location,
          tags,
          properties,
        };
      }
    }
  }
}
export namespace steps {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type StepsResource = ResourceDefinition<StepPropertiesModel> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: StepPropertiesModel, location: Expressionable<string>, tags?: Expressionable<any>): StepsResource {
    return {
      type: 'Microsoft.DeploymentManager/steps',
      apiVersion: '2018-09-01-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}