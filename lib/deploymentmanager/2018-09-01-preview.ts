import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ArtifactSourceProperties, location: Expressionable<string>): ResourceDefinition<ArtifactSourceProperties> {
    return {
      type: 'Microsoft.DeploymentManager/artifactSources',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace rollouts {
  interface AdditionalProps {
    identity: Expressionable<Identity>;
  }
  
  export function create(name: Expressionable<string>, properties: RolloutRequestPropertiesModel, location: Expressionable<string>, identity: Expressionable<Identity>): ResourceDefinition<RolloutRequestPropertiesModel> & AdditionalProps {
    return {
      type: 'Microsoft.DeploymentManager/rollouts',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      identity,
      properties,
    };
  }
}
export namespace serviceTopologies {
  export function create(name: Expressionable<string>, properties: ServiceTopologyResourceProperties, location: Expressionable<string>): ResourceDefinition<ServiceTopologyResourceProperties> {
    return {
      type: 'Microsoft.DeploymentManager/serviceTopologies',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace serviceTopologies {
  export namespace services {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ServiceResourceProperties, location: Expressionable<string>): ResourceDefinition<ServiceResourceProperties> {
      return {
        type: 'Microsoft.DeploymentManager/serviceTopologies/services',
        apiVersion: '2018-09-01-preview',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace serviceTopologies {
  export namespace services {
    export namespace serviceUnits {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ServiceUnitResourceProperties, location: Expressionable<string>): ResourceDefinition<ServiceUnitResourceProperties> {
        return {
          type: 'Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits',
          apiVersion: '2018-09-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace steps {
  export function create(name: Expressionable<string>, properties: StepPropertiesModel, location: Expressionable<string>): ResourceDefinition<StepPropertiesModel> {
    return {
      type: 'Microsoft.DeploymentManager/steps',
      apiVersion: '2018-09-01-preview',
      name: name,
      location,
      properties,
    };
  }
}