import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Disallowed {
  diskTypes?: Expressionable<string[]>;
}

export interface GalleryArtifactSource {
  managedImage?: Expressionable<ManagedArtifact>;
}

export interface GalleryIdentifier {
}

export interface GalleryImageIdentifier {
  publisher?: Expressionable<string>;
  offer?: Expressionable<string>;
  sku?: Expressionable<string>;
}

export interface GalleryImageProperties {
  description?: Expressionable<string>;
  eula?: Expressionable<string>;
  privacyStatementUri?: Expressionable<string>;
  releaseNoteUri?: Expressionable<string>;
  osType?: Expressionable<('Windows' | 'Linux')>;
  osState?: Expressionable<('Generalized' | 'Specialized')>;
  endOfLifeDate?: Expressionable<string>;
  identifier?: Expressionable<GalleryImageIdentifier>;
  recommended?: Expressionable<RecommendedMachineConfiguration>;
  disallowed?: Expressionable<Disallowed>;
  purchasePlan?: Expressionable<ImagePurchasePlan>;
}

export interface GalleryImageVersionProperties {
  publishingProfile?: Expressionable<GalleryImageVersionPublishingProfile>;
}

export interface GalleryImageVersionPublishingProfile {
  regions?: Expressionable<string[]>;
  source?: Expressionable<GalleryArtifactSource>;
  scaleTier?: Expressionable<('S30' | 'S100')>;
  excludeFromLatest?: Expressionable<boolean>;
  endOfLifeDate?: Expressionable<string>;
}

export interface GalleryProperties {
  description?: Expressionable<string>;
  identifier?: Expressionable<GalleryIdentifier>;
}

export interface ImagePurchasePlan {
  name?: Expressionable<string>;
  publisher?: Expressionable<string>;
  product?: Expressionable<string>;
}

export interface ManagedArtifact {
  id?: Expressionable<string>;
}

export interface RecommendedMachineConfiguration {
  vCPUs?: Expressionable<ResourceRange>;
  memory?: Expressionable<ResourceRange>;
}

export interface ResourceRange {
  min?: Expressionable<number>;
  max?: Expressionable<number>;
}

export namespace galleries {
  export function create(name: Expressionable<string>, properties: GalleryProperties, location: Expressionable<string>): ResourceDefinition<GalleryProperties> {
    return {
      type: 'Microsoft.Compute/galleries',
      apiVersion: '2018-06-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace galleries {
  export namespace images {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GalleryImageProperties, location: Expressionable<string>): ResourceDefinition<GalleryImageProperties> {
      return {
        type: 'Microsoft.Compute/galleries/images',
        apiVersion: '2018-06-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace galleries {
  export namespace images {
    export namespace versions {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: GalleryImageVersionProperties, location: Expressionable<string>): ResourceDefinition<GalleryImageVersionProperties> {
        return {
          type: 'Microsoft.Compute/galleries/images/versions',
          apiVersion: '2018-06-01',
          name: concatResourceName(...name),
          location,
          properties,
        };
      }
    }
  }
}