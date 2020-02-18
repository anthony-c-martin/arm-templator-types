import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface CustomDomainPropertiesParameters {
  hostName: Expressionable<string>;
}

export interface DeepCreatedOrigin {
  name: Expressionable<string>;
  properties?: Expressionable<DeepCreatedOriginProperties>;
}

export interface DeepCreatedOriginProperties {
  hostName: Expressionable<string>;
  httpPort?: Expressionable<number>;
  httpsPort?: Expressionable<number>;
}

export interface EndpointPropertiesCreateParameters {
  originHostHeader?: Expressionable<string>;
  originPath?: Expressionable<string>;
  contentTypesToCompress?: Expressionable<string[]>;
  isCompressionEnabled?: Expressionable<boolean>;
  isHttpAllowed?: Expressionable<boolean>;
  isHttpsAllowed?: Expressionable<boolean>;
  queryStringCachingBehavior?: Expressionable<('IgnoreQueryString' | 'BypassCaching' | 'UseQueryString' | 'NotSet')>;
  origins: Expressionable<DeepCreatedOrigin[]>;
}

export interface OriginPropertiesParameters {
  hostName: Expressionable<string>;
  httpPort?: Expressionable<number>;
  httpsPort?: Expressionable<number>;
}

export interface Sku {
  name?: Expressionable<('Standard_Verizon' | 'Premium_Verizon' | 'Custom_Verizon' | 'Standard_Akamai')>;
}

export namespace profiles {
  export function create(name: Expressionable<string>, properties: any, location: Expressionable<string>): ResourceDefinition<any> {
    return {
      type: 'Microsoft.Cdn/profiles',
      apiVersion: '2016-04-02',
      name: name,
      location,
      properties,
    };
  }
}
export namespace profiles {
  export namespace endpoints {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EndpointPropertiesCreateParameters, location: Expressionable<string>): ResourceDefinition<EndpointPropertiesCreateParameters> {
      return {
        type: 'Microsoft.Cdn/profiles/endpoints',
        apiVersion: '2016-04-02',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace profiles {
  export namespace endpoints {
    export namespace customDomains {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: CustomDomainPropertiesParameters): ResourceDefinition<CustomDomainPropertiesParameters> {
        return {
          type: 'Microsoft.Cdn/profiles/endpoints/customDomains',
          apiVersion: '2016-04-02',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace profiles {
  export namespace endpoints {
    export namespace origins {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: OriginPropertiesParameters): ResourceDefinition<OriginPropertiesParameters> {
        return {
          type: 'Microsoft.Cdn/profiles/endpoints/origins',
          apiVersion: '2016-04-02',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}