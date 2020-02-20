import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ApplicationInsightsComponentProperties {
  Application_Type: Expressionable<('web' | 'other')>;
  Flow_Type?: Expressionable<('Bluefield')>;
  Request_Source?: Expressionable<('rest')>;
  HockeyAppId?: Expressionable<string>;
  SamplingPercentage?: Expressionable<number>;
}

export interface WebTestGeolocation {
  Id?: Expressionable<string>;
}

export interface WebTestProperties {
  SyntheticMonitorId: Expressionable<string>;
  Name: Expressionable<string>;
  Description?: Expressionable<string>;
  Enabled?: Expressionable<boolean>;
  Frequency?: Expressionable<number>;
  Timeout?: Expressionable<number>;
  Kind: Expressionable<('ping' | 'multistep')>;
  RetryEnabled?: Expressionable<boolean>;
  Locations: Expressionable<WebTestGeolocation[]>;
  Configuration?: Expressionable<WebTestPropertiesConfiguration>;
}

export interface WebTestPropertiesConfiguration {
  WebTest?: Expressionable<string>;
}

export namespace components {
  export interface AddedResourceProps {
    kind: Expressionable<string>;
  }
  
  export type ComponentsResource = ResourceDefinition<ApplicationInsightsComponentProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ApplicationInsightsComponentProperties, location: Expressionable<string>, kind: Expressionable<string>): ComponentsResource {
    return {
      type: 'Microsoft.Insights/components',
      apiVersion: '2015-05-01',
      name: [name],
      location,
      kind,
      properties,
    };
  }
}
export namespace webtests {
  export interface AddedResourceProps {
    kind?: Expressionable<('ping' | 'multistep')>;
  }
  
  export type WebtestsResource = ResourceDefinition<WebTestProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: WebTestProperties, location: Expressionable<string>, kind?: Expressionable<('ping' | 'multistep')>): WebtestsResource {
    return {
      type: 'Microsoft.Insights/webtests',
      apiVersion: '2015-05-01',
      name: [name],
      location,
      kind,
      properties,
    };
  }
}