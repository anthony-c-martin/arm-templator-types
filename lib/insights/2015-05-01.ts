import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

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
  export function create(name: Expressionable<string>, properties: ApplicationInsightsComponentProperties, location: Expressionable<string>): ResourceDefinition<ApplicationInsightsComponentProperties> {
    return {
      type: 'Microsoft.Insights/components',
      apiVersion: '2015-05-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace webtests {
  export function create(name: Expressionable<string>, properties: WebTestProperties, location: Expressionable<string>): ResourceDefinition<WebTestProperties> {
    return {
      type: 'Microsoft.Insights/webtests',
      apiVersion: '2015-05-01',
      name: name,
      location,
      properties,
    };
  }
}