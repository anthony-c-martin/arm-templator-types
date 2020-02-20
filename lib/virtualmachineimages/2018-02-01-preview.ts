import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface ImageTemplateCustomizer {
  name?: Expressionable<string>;
}

export interface ImageTemplateDistributor {
  artifactTags?: Expressionable<any>;
  runOutputName: Expressionable<string>;
}

export interface ImageTemplateIsoSource {
  sha256Checksum: Expressionable<string>;
  sourceURI: Expressionable<string>;
  type: Expressionable<('ISO')>;
}

export interface ImageTemplateManagedImageDistributor {
  imageId: Expressionable<string>;
  location: Expressionable<string>;
  type: Expressionable<('managedImage')>;
}

export interface ImageTemplatePlatformImageSource {
  offer?: Expressionable<string>;
  publisher?: Expressionable<string>;
  sku?: Expressionable<string>;
  type: Expressionable<('PlatformImage')>;
  version?: Expressionable<string>;
}

export interface ImageTemplateProperties {
  customize?: Expressionable<ImageTemplateCustomizer[]>;
  distribute: Expressionable<ImageTemplateDistributor[]>;
  source: Expressionable<ImageTemplateSource>;
}

export interface ImageTemplateSharedImageDistributor {
  galleryImageId: Expressionable<string>;
  replicationRegions: Expressionable<string[]>;
  type: Expressionable<('sharedImage')>;
}

export interface ImageTemplateShellCustomizer {
  script?: Expressionable<string>;
  type: Expressionable<('shell')>;
}

export interface ImageTemplateSource {
}

export namespace imageTemplates {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type ImageTemplatesResource = ResourceDefinition<ImageTemplateProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ImageTemplateProperties, location: Expressionable<string>, tags?: Expressionable<any>): ImageTemplatesResource {
    return {
      type: 'Microsoft.VirtualMachineImages/imageTemplates',
      apiVersion: '2018-02-01-preview',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}