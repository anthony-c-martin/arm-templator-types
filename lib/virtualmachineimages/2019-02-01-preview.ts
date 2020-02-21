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
  type: Expressionable<('ManagedImage')>;
}

export interface ImageTemplateManagedImageSource {
  imageId: Expressionable<string>;
  type: Expressionable<('ManagedImage')>;
}

export interface ImageTemplatePlatformImageSource {
  offer?: Expressionable<string>;
  publisher?: Expressionable<string>;
  sku?: Expressionable<string>;
  type: Expressionable<('PlatformImage')>;
  version?: Expressionable<string>;
}

export interface ImageTemplatePowerShellCustomizer {
  inline?: Expressionable<string[]>;
  script?: Expressionable<string>;
  type: Expressionable<('PowerShell')>;
  validExitCodes?: Expressionable<number[]>;
}

export interface ImageTemplateProperties {
  customize?: Expressionable<ImageTemplateCustomizer[]>;
  distribute: Expressionable<ImageTemplateDistributor[]>;
  source: Expressionable<ImageTemplateSource>;
}

export interface ImageTemplateRestartCustomizer {
  restartCheckCommand?: Expressionable<string>;
  restartCommand?: Expressionable<string>;
  restartTimeout?: Expressionable<string>;
  type: Expressionable<('WindowsRestart')>;
}

export interface ImageTemplateSharedImageDistributor {
  galleryImageId: Expressionable<string>;
  replicationRegions: Expressionable<string[]>;
  type: Expressionable<('SharedImage')>;
}

export interface ImageTemplateShellCustomizer {
  inline?: Expressionable<string[]>;
  script?: Expressionable<string>;
  type: Expressionable<('Shell')>;
}

export interface ImageTemplateSource {
}

export interface ImageTemplateVhdDistributor {
  type: Expressionable<('VHD')>;
}

export namespace imageTemplates {
  export interface AdditionalProps {
    tags?: Expressionable<any>;
  }
  
  export type ImageTemplatesResource = ResourceDefinition<ImageTemplateProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ImageTemplateProperties, location: Expressionable<string>, tags?: Expressionable<any>): ImageTemplatesResource {
    return {
      type: 'Microsoft.VirtualMachineImages/imageTemplates',
      apiVersion: '2019-02-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        tags,
      },
    };
  }
}