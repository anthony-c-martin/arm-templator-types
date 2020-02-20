import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Authorization {
  authorizationType: Expressionable<('personalAccessToken')>;
  parameters?: Expressionable<any>;
}

export interface BootstrapConfiguration {
  repository?: Expressionable<CodeRepository>;
  template: Expressionable<PipelineTemplate>;
}

export interface CodeRepository {
  authorization?: Expressionable<Authorization>;
  defaultBranch: Expressionable<string>;
  id: Expressionable<string>;
  properties?: Expressionable<any>;
  repositoryType: Expressionable<('gitHub' | 'vstsGit')>;
}

export interface OrganizationReference {
  name: Expressionable<string>;
}

export interface PipelineProperties {
  bootstrapConfiguration: Expressionable<BootstrapConfiguration>;
  organization: Expressionable<OrganizationReference>;
  project: Expressionable<ProjectReference>;
}

export interface PipelineTemplate {
  id: Expressionable<string>;
  parameters?: Expressionable<any>;
}

export interface ProjectReference {
  name: Expressionable<string>;
}

export namespace pipelines {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type PipelinesResource = ResourceDefinition<PipelineProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: PipelineProperties, location?: Expressionable<string>, tags?: Expressionable<any>): PipelinesResource {
    return {
      type: 'Microsoft.DevOps/pipelines',
      apiVersion: '2019-07-01-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}