import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface Componentsschemasimagetemplateidentitypropertiesuserassignedidentitiesadditionalproperties {
}

export interface ImageTemplateCustomizer {
  name?: Expressionable<string>;
}

export interface ImageTemplateDistributor {
  artifactTags?: Expressionable<any>;
  runOutputName: Expressionable<string>;
}

export interface ImageTemplateFileCustomizer {
  destination?: Expressionable<string>;
  sha256Checksum?: Expressionable<string>;
  sourceUri?: Expressionable<string>;
  type: Expressionable<('File')>;
}

export interface ImageTemplateIdentity {
  type?: Expressionable<('UserAssigned' | 'None')>;
  userAssignedIdentities?: Expressionable<any>;
}

export interface ImageTemplateIsoSource {
  sha256Checksum: Expressionable<string>;
  sourceUri: Expressionable<string>;
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
  runElevated?: Expressionable<boolean>;
  scriptUri?: Expressionable<string>;
  sha256Checksum?: Expressionable<string>;
  type: Expressionable<('PowerShell')>;
  validExitCodes?: Expressionable<number[]>;
}

export interface ImageTemplateProperties {
  buildTimeoutInMinutes?: Expressionable<number>;
  customize?: Expressionable<ImageTemplateCustomizer[]>;
  distribute: Expressionable<ImageTemplateDistributor[]>;
  source: Expressionable<ImageTemplateSource>;
  vmProfile?: Expressionable<ImageTemplateVmProfile>;
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

export interface ImageTemplateSharedImageVersionSource {
  imageVersionId: Expressionable<string>;
  type: Expressionable<('SharedImageVersion')>;
}

export interface ImageTemplateShellCustomizer {
  inline?: Expressionable<string[]>;
  scriptUri?: Expressionable<string>;
  sha256Checksum?: Expressionable<string>;
  type: Expressionable<('Shell')>;
}

export interface ImageTemplateSource {
}

export interface ImageTemplateVhdDistributor {
  type: Expressionable<('VHD')>;
}

export interface ImageTemplateVmProfile {
  vmSize?: Expressionable<string>;
}

export namespace imageTemplates {
  export interface AdditionalProps {
    identity?: Expressionable<ImageTemplateIdentity>;
    tags?: Expressionable<any>;
  }
  
  export type ImageTemplatesResource = ResourceDefinition<ImageTemplateProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ImageTemplateProperties, location: Expressionable<string>, identity?: Expressionable<ImageTemplateIdentity>, tags?: Expressionable<any>): ImageTemplatesResource {
    return {
      type: 'Microsoft.VirtualMachineImages/imageTemplates',
      apiVersion: '2019-05-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        tags,
      },
    };
  }
}