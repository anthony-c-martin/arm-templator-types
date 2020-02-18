import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ApiKeyAuthentication {
  in: Expressionable<('Query' | 'Header')>;
  name: Expressionable<string>;
  type: Expressionable<('ApiKey')>;
  value: Expressionable<string>;
}

export interface ArtifactSourceProperties {
  artifactRoot?: Expressionable<string>;
  authentication: Expressionable<Authentication>;
  sourceType: Expressionable<string>;
}

export interface Authentication {
}

export interface HealthCheckStepAttributes {
  healthyStateDuration: Expressionable<string>;
  maxElasticDuration?: Expressionable<string>;
  waitDuration?: Expressionable<string>;
}

export interface HealthCheckStepProperties {
  attributes: Expressionable<HealthCheckStepAttributes>;
  stepType: Expressionable<('HealthCheck')>;
}

export interface Identity {
  identityIds: Expressionable<string[]>;
  type: Expressionable<string>;
}

export interface PrePostStep {
  stepId: Expressionable<string>;
}

export interface RestHealthCheck {
  name: Expressionable<string>;
  request: Expressionable<RestRequest>;
  response?: Expressionable<RestResponse>;
}

export interface RestHealthCheckStepAttributes {
  properties?: Expressionable<RestParameters>;
  type: Expressionable<('REST')>;
}

export interface RestParameters {
  healthChecks: Expressionable<RestHealthCheck[]>;
}

export interface RestRequest {
  authentication: Expressionable<RestRequestAuthentication>;
  method: Expressionable<('GET' | 'POST')>;
  uri: Expressionable<string>;
}

export interface RestRequestAuthentication {
}

export interface RestResponse {
  regex?: Expressionable<RestResponseRegex>;
  successStatusCodes?: Expressionable<string[]>;
}

export interface RestResponseRegex {
  matches?: Expressionable<string[]>;
  matchQuantifier?: Expressionable<('All' | 'Any')>;
}

export interface RolloutIdentityAuthentication {
  type: Expressionable<('RolloutIdentity')>;
}

export interface RolloutRequestProperties {
  artifactSourceId?: Expressionable<string>;
  buildVersion: Expressionable<string>;
  stepGroups: Expressionable<StepGroup[]>;
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

export interface StepGroup {
  dependsOnStepGroups?: Expressionable<string[]>;
  deploymentTargetId: Expressionable<string>;
  name: Expressionable<string>;
  postDeploymentSteps?: Expressionable<PrePostStep[]>;
  preDeploymentSteps?: Expressionable<PrePostStep[]>;
}

export interface StepProperties {
}

export interface WaitStepAttributes {
  duration: Expressionable<string>;
}

export interface WaitStepProperties {
  attributes: Expressionable<WaitStepAttributes>;
  stepType: Expressionable<('Wait')>;
}

export namespace artifactSources {
  export function create(name: Expressionable<string>, properties: ArtifactSourceProperties, location: Expressionable<string>): ResourceDefinition<ArtifactSourceProperties> {
    return {
      type: 'Microsoft.DeploymentManager/artifactSources',
      apiVersion: '2019-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace rollouts {
  export function create(name: Expressionable<string>, properties: RolloutRequestProperties, location: Expressionable<string>): ResourceDefinition<RolloutRequestProperties> {
    return {
      type: 'Microsoft.DeploymentManager/rollouts',
      apiVersion: '2019-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}
export namespace serviceTopologies {
  export function create(name: Expressionable<string>, properties: ServiceTopologyResourceProperties, location: Expressionable<string>): ResourceDefinition<ServiceTopologyResourceProperties> {
    return {
      type: 'Microsoft.DeploymentManager/serviceTopologies',
      apiVersion: '2019-11-01-preview',
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
        apiVersion: '2019-11-01-preview',
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
          apiVersion: '2019-11-01-preview',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}
export namespace steps {
  export function create(name: Expressionable<string>, properties: StepProperties, location: Expressionable<string>): ResourceDefinition<StepProperties> {
    return {
      type: 'Microsoft.DeploymentManager/steps',
      apiVersion: '2019-11-01-preview',
      name: name,
      location,
      properties,
    };
  }
}