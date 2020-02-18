import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface AacAudio {
  profile?: Expressionable<('AacLc' | 'HeAacV1' | 'HeAacV2')>;
  '@odata.type': Expressionable<string>;
}

export interface AkamaiAccessControl {
  akamaiSignatureHeaderAuthenticationKeyList?: Expressionable<AkamaiSignatureHeaderAuthenticationKey[]>;
}

export interface AkamaiSignatureHeaderAuthenticationKey {
  identifier?: Expressionable<string>;
  base64Key?: Expressionable<string>;
  expiration?: Expressionable<string>;
}

export interface AssetProperties {
  alternateId?: Expressionable<string>;
  description?: Expressionable<string>;
  container?: Expressionable<string>;
  storageAccountName?: Expressionable<string>;
}

export interface Audio {
  channels?: Expressionable<number>;
  samplingRate?: Expressionable<number>;
  bitrate?: Expressionable<number>;
  '@odata.type': Expressionable<string>;
}

export interface AudioAnalyzerPreset {
  audioLanguage?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface AudioOverlay {
  '@odata.type': Expressionable<string>;
}

export interface BuiltInStandardEncoderPreset {
  presetName: Expressionable<('H264SingleBitrateSD' | 'H264SingleBitrate720p' | 'H264SingleBitrate1080p' | 'AdaptiveStreaming' | 'AACGoodQualityAudio' | 'H264MultipleBitrate1080p' | 'H264MultipleBitrate720p' | 'H264MultipleBitrateSD')>;
  '@odata.type': Expressionable<string>;
}

export interface CbcsDrmConfiguration {
  fairPlay?: Expressionable<StreamingPolicyFairPlayConfiguration>;
  playReady?: Expressionable<StreamingPolicyPlayReadyConfiguration>;
  widevine?: Expressionable<StreamingPolicyWidevineConfiguration>;
}

export interface CencDrmConfiguration {
  playReady?: Expressionable<StreamingPolicyPlayReadyConfiguration>;
  widevine?: Expressionable<StreamingPolicyWidevineConfiguration>;
}

export interface Codec {
  label?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface CommonEncryptionCbcs {
  enabledProtocols?: Expressionable<EnabledProtocols>;
  clearTracks?: Expressionable<TrackSelection[]>;
  contentKeys?: Expressionable<StreamingPolicyContentKeys>;
  drm?: Expressionable<CbcsDrmConfiguration>;
}

export interface CommonEncryptionCenc {
  enabledProtocols?: Expressionable<EnabledProtocols>;
  clearTracks?: Expressionable<TrackSelection[]>;
  contentKeys?: Expressionable<StreamingPolicyContentKeys>;
  drm?: Expressionable<CencDrmConfiguration>;
}

export interface ContentKeyPolicyClearKeyConfiguration {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyConfiguration {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyFairPlayConfiguration {
  ask: Expressionable<string>;
  fairPlayPfxPassword: Expressionable<string>;
  fairPlayPfx: Expressionable<string>;
  rentalAndLeaseKeyType: Expressionable<('Unknown' | 'Undefined' | 'PersistentUnlimited' | 'PersistentLimited')>;
  rentalDuration: Expressionable<number>;
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyOpenRestriction {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyOption {
  name?: Expressionable<string>;
  configuration: Expressionable<ContentKeyPolicyConfiguration>;
  restriction: Expressionable<ContentKeyPolicyRestriction>;
}

export interface ContentKeyPolicyPlayReadyConfiguration {
  licenses: Expressionable<ContentKeyPolicyPlayReadyLicense[]>;
  responseCustomData?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier {
  keyId: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyPlayReadyContentKeyLocation {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction {
  bestEffort: Expressionable<boolean>;
  configurationData: Expressionable<number>;
}

export interface ContentKeyPolicyPlayReadyLicense {
  allowTestDevices: Expressionable<boolean>;
  beginDate?: Expressionable<string>;
  expirationDate?: Expressionable<string>;
  relativeBeginDate?: Expressionable<string>;
  relativeExpirationDate?: Expressionable<string>;
  gracePeriod?: Expressionable<string>;
  playRight?: Expressionable<ContentKeyPolicyPlayReadyPlayRight>;
  licenseType: Expressionable<('Unknown' | 'NonPersistent' | 'Persistent')>;
  contentKeyLocation: Expressionable<ContentKeyPolicyPlayReadyContentKeyLocation>;
  contentType: Expressionable<('Unknown' | 'Unspecified' | 'UltraVioletDownload' | 'UltraVioletStreaming')>;
}

export interface ContentKeyPolicyPlayReadyPlayRight {
  firstPlayExpiration?: Expressionable<string>;
  scmsRestriction?: Expressionable<number>;
  agcAndColorStripeRestriction?: Expressionable<number>;
  explicitAnalogTelevisionOutputRestriction?: Expressionable<ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction>;
  digitalVideoOnlyContentRestriction: Expressionable<boolean>;
  imageConstraintForAnalogComponentVideoRestriction: Expressionable<boolean>;
  imageConstraintForAnalogComputerMonitorRestriction: Expressionable<boolean>;
  allowPassingVideoContentToUnknownOutput: Expressionable<('Unknown' | 'NotAllowed' | 'Allowed' | 'AllowedWithVideoConstriction')>;
  uncompressedDigitalVideoOpl?: Expressionable<number>;
  compressedDigitalVideoOpl?: Expressionable<number>;
  analogVideoOpl?: Expressionable<number>;
  compressedDigitalAudioOpl?: Expressionable<number>;
  uncompressedDigitalAudioOpl?: Expressionable<number>;
}

export interface ContentKeyPolicyProperties {
  description?: Expressionable<string>;
  options: Expressionable<ContentKeyPolicyOption[]>;
}

export interface ContentKeyPolicyRestriction {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyRestrictionTokenKey {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyRsaTokenKey {
  exponent: Expressionable<string>;
  modulus: Expressionable<string>;
}

export interface ContentKeyPolicySymmetricTokenKey {
  keyValue: Expressionable<string>;
}

export interface ContentKeyPolicyTokenClaim {
  claimType?: Expressionable<string>;
  claimValue?: Expressionable<string>;
}

export interface ContentKeyPolicyTokenRestriction {
  issuer: Expressionable<string>;
  audience: Expressionable<string>;
  primaryVerificationKey: Expressionable<ContentKeyPolicyRestrictionTokenKey>;
  alternateVerificationKeys?: Expressionable<ContentKeyPolicyRestrictionTokenKey[]>;
  requiredClaims?: Expressionable<ContentKeyPolicyTokenClaim[]>;
  restrictionTokenType: Expressionable<('Unknown' | 'Swt' | 'Jwt')>;
  openIdConnectDiscoveryDocument?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyUnknownConfiguration {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyUnknownRestriction {
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyWidevineConfiguration {
  widevineTemplate: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface ContentKeyPolicyX509CertificateTokenKey {
  rawBody: Expressionable<string>;
}

export interface CopyAudio {
  '@odata.type': Expressionable<string>;
}

export interface CopyVideo {
  '@odata.type': Expressionable<string>;
}

export interface CrossSiteAccessPolicies {
  clientAccessPolicy?: Expressionable<string>;
  crossDomainPolicy?: Expressionable<string>;
}

export interface DefaultKey {
  label?: Expressionable<string>;
  policyName?: Expressionable<string>;
}

export interface Deinterlace {
  parity?: Expressionable<('Auto' | 'TopFieldFirst' | 'BottomFieldFirst')>;
  mode?: Expressionable<('Off' | 'AutoPixelAdaptive')>;
}

export interface EnabledProtocols {
  download: Expressionable<boolean>;
  dash: Expressionable<boolean>;
  hls: Expressionable<boolean>;
  smoothStreaming: Expressionable<boolean>;
}

export interface EnvelopeEncryption {
  enabledProtocols?: Expressionable<EnabledProtocols>;
  clearTracks?: Expressionable<TrackSelection[]>;
  contentKeys?: Expressionable<StreamingPolicyContentKeys>;
  customKeyAcquisitionUrlTemplate?: Expressionable<string>;
}

export interface Filters {
  deinterlace?: Expressionable<Deinterlace>;
  rotation?: Expressionable<('Auto' | 'None' | 'Rotate0' | 'Rotate90' | 'Rotate180' | 'Rotate270')>;
  crop?: Expressionable<Rectangle>;
  overlays?: Expressionable<Overlay[]>;
}

export interface FilterTrackPropertyCondition {
  property: Expressionable<('Unknown' | 'Type' | 'Name' | 'Language' | 'FourCC' | 'Bitrate')>;
  value: Expressionable<string>;
  operation: Expressionable<('Equal' | 'NotEqual')>;
}

export interface FilterTrackSelection {
  trackSelections: Expressionable<FilterTrackPropertyCondition[]>;
}

export interface FirstQuality {
  bitrate: Expressionable<number>;
}

export interface Format {
  filenamePattern?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface H264Layer {
  width?: Expressionable<string>;
  height?: Expressionable<string>;
  label?: Expressionable<string>;
  bitrate?: Expressionable<number>;
  maxBitrate?: Expressionable<number>;
  bFrames?: Expressionable<number>;
  frameRate?: Expressionable<string>;
  slices?: Expressionable<number>;
  adaptiveBFrame?: Expressionable<boolean>;
  profile?: Expressionable<('Auto' | 'Baseline' | 'Main' | 'High' | 'High422' | 'High444')>;
  level?: Expressionable<string>;
  bufferWindow?: Expressionable<string>;
  referenceFrames?: Expressionable<number>;
  entropyMode?: Expressionable<('Cabac' | 'Cavlc')>;
  '@odata.type': Expressionable<string>;
}

export interface H264Video {
  sceneChangeDetection?: Expressionable<boolean>;
  complexity?: Expressionable<('Speed' | 'Balanced' | 'Quality')>;
  layers?: Expressionable<H264Layer[]>;
  '@odata.type': Expressionable<string>;
}

export interface Hls {
  fragmentsPerTsSegment?: Expressionable<number>;
}

export interface Image {
  start?: Expressionable<string>;
  step?: Expressionable<string>;
  range?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface ImageFormat {
  '@odata.type': Expressionable<string>;
}

export interface IPAccessControl {
  allow?: Expressionable<IPRange[]>;
}

export interface IPRange {
  name?: Expressionable<string>;
  address?: Expressionable<string>;
  subnetPrefixLength?: Expressionable<number>;
}

export interface JobInput {
  '@odata.type': Expressionable<string>;
}

export interface JobInputAsset {
  assetName: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface JobInputClip {
  files?: Expressionable<string[]>;
  label?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface JobInputHttp {
  baseUri?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface JobInputs {
  inputs?: Expressionable<JobInput[]>;
  '@odata.type': Expressionable<string>;
}

export interface JobOutput {
  label?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface JobOutputAsset {
  assetName: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface JobProperties {
  description?: Expressionable<string>;
  input: Expressionable<JobInput>;
  outputs: Expressionable<JobOutput[]>;
  priority?: Expressionable<('Low' | 'Normal' | 'High')>;
}

export interface JpgFormat {
  '@odata.type': Expressionable<string>;
}

export interface JpgImage {
  layers?: Expressionable<JpgLayer[]>;
  '@odata.type': Expressionable<string>;
}

export interface JpgLayer {
  width?: Expressionable<string>;
  height?: Expressionable<string>;
  label?: Expressionable<string>;
  quality?: Expressionable<number>;
  '@odata.type': Expressionable<string>;
}

export interface LiveEventEncoding {
  encodingType?: Expressionable<('None' | 'Basic')>;
  presetName?: Expressionable<string>;
}

export interface LiveEventEndpoint {
  protocol?: Expressionable<string>;
  url?: Expressionable<string>;
}

export interface LiveEventInput {
  streamingProtocol: Expressionable<('FragmentedMP4' | 'RTMP')>;
  accessControl?: Expressionable<LiveEventInputAccessControl>;
  keyFrameIntervalDuration?: Expressionable<string>;
  accessToken?: Expressionable<string>;
  endpoints?: Expressionable<LiveEventEndpoint[]>;
}

export interface LiveEventInputAccessControl {
  ip?: Expressionable<IPAccessControl>;
}

export interface LiveEventPreview {
  endpoints?: Expressionable<LiveEventEndpoint[]>;
  accessControl?: Expressionable<LiveEventPreviewAccessControl>;
  previewLocator?: Expressionable<string>;
  streamingPolicyName?: Expressionable<string>;
  alternativeMediaId?: Expressionable<string>;
}

export interface LiveEventPreviewAccessControl {
  ip?: Expressionable<IPAccessControl>;
}

export interface LiveEventProperties {
  description?: Expressionable<string>;
  input: Expressionable<LiveEventInput>;
  preview?: Expressionable<LiveEventPreview>;
  encoding?: Expressionable<LiveEventEncoding>;
  crossSiteAccessPolicies?: Expressionable<CrossSiteAccessPolicies>;
  vanityUrl?: Expressionable<boolean>;
  streamOptions?: Expressionable<('Default' | 'LowLatency')[]>;
}

export interface LiveOutputProperties {
  description?: Expressionable<string>;
  assetName: Expressionable<string>;
  archiveWindowLength: Expressionable<string>;
  manifestName?: Expressionable<string>;
  hls?: Expressionable<Hls>;
  outputSnapTime?: Expressionable<number>;
}

export interface MediaFilterProperties {
  presentationTimeRange?: Expressionable<PresentationTimeRange>;
  firstQuality?: Expressionable<FirstQuality>;
  tracks?: Expressionable<FilterTrackSelection[]>;
}

export interface MediaServiceProperties {
  storageAccounts?: Expressionable<StorageAccount[]>;
}

export interface Mp4Format {
  '@odata.type': Expressionable<string>;
}

export interface MultiBitrateFormat {
  outputFiles?: Expressionable<OutputFile[]>;
  '@odata.type': Expressionable<string>;
}

export interface NoEncryption {
  enabledProtocols?: Expressionable<EnabledProtocols>;
}

export interface OutputFile {
  labels?: Expressionable<string[]>;
}

export interface Overlay {
  inputLabel?: Expressionable<string>;
  start?: Expressionable<string>;
  end?: Expressionable<string>;
  fadeInDuration?: Expressionable<string>;
  fadeOutDuration?: Expressionable<string>;
  audioGainLevel?: Expressionable<number>;
  '@odata.type': Expressionable<string>;
}

export interface PngFormat {
  '@odata.type': Expressionable<string>;
}

export interface PngImage {
  layers?: Expressionable<PngLayer[]>;
  '@odata.type': Expressionable<string>;
}

export interface PngLayer {
  width?: Expressionable<string>;
  height?: Expressionable<string>;
  label?: Expressionable<string>;
  '@odata.type': Expressionable<string>;
}

export interface PresentationTimeRange {
  startTimestamp: Expressionable<number>;
  endTimestamp: Expressionable<number>;
  presentationWindowDuration: Expressionable<number>;
  liveBackoffDuration: Expressionable<number>;
  timescale: Expressionable<number>;
  forceEndTimestamp: Expressionable<boolean>;
}

export interface Preset {
  '@odata.type': Expressionable<string>;
}

export interface Rectangle {
  left?: Expressionable<string>;
  top?: Expressionable<string>;
  width?: Expressionable<string>;
  height?: Expressionable<string>;
}

export interface StandardEncoderPreset {
  filters?: Expressionable<Filters>;
  codecs?: Expressionable<Codec[]>;
  formats?: Expressionable<Format[]>;
  '@odata.type': Expressionable<string>;
}

export interface StorageAccount {
  id?: Expressionable<string>;
  type: Expressionable<('Primary' | 'Secondary')>;
}

export interface StreamingEndpointAccessControl {
  akamai?: Expressionable<AkamaiAccessControl>;
  ip?: Expressionable<IPAccessControl>;
}

export interface StreamingEndpointProperties {
  description?: Expressionable<string>;
  scaleUnits: Expressionable<number>;
  availabilitySetName?: Expressionable<string>;
  accessControl?: Expressionable<StreamingEndpointAccessControl>;
  maxCacheAge?: Expressionable<number>;
  customHostNames?: Expressionable<string[]>;
  cdnEnabled?: Expressionable<boolean>;
  cdnProvider?: Expressionable<string>;
  cdnProfile?: Expressionable<string>;
  crossSiteAccessPolicies?: Expressionable<CrossSiteAccessPolicies>;
}

export interface StreamingLocatorContentKey {
  id: Expressionable<string>;
  labelReferenceInStreamingPolicy?: Expressionable<string>;
  value?: Expressionable<string>;
}

export interface StreamingLocatorProperties {
  assetName: Expressionable<string>;
  startTime?: Expressionable<string>;
  endTime?: Expressionable<string>;
  streamingLocatorId?: Expressionable<string>;
  streamingPolicyName: Expressionable<string>;
  defaultContentKeyPolicyName?: Expressionable<string>;
  contentKeys?: Expressionable<StreamingLocatorContentKey[]>;
  alternativeMediaId?: Expressionable<string>;
}

export interface StreamingPolicyContentKey {
  label?: Expressionable<string>;
  policyName?: Expressionable<string>;
  tracks?: Expressionable<TrackSelection[]>;
}

export interface StreamingPolicyContentKeys {
  defaultKey?: Expressionable<DefaultKey>;
  keyToTrackMappings?: Expressionable<StreamingPolicyContentKey[]>;
}

export interface StreamingPolicyFairPlayConfiguration {
  customLicenseAcquisitionUrlTemplate?: Expressionable<string>;
  allowPersistentLicense: Expressionable<boolean>;
}

export interface StreamingPolicyPlayReadyConfiguration {
  customLicenseAcquisitionUrlTemplate?: Expressionable<string>;
  playReadyCustomAttributes?: Expressionable<string>;
}

export interface StreamingPolicyProperties {
  defaultContentKeyPolicyName?: Expressionable<string>;
  envelopeEncryption?: Expressionable<EnvelopeEncryption>;
  commonEncryptionCenc?: Expressionable<CommonEncryptionCenc>;
  commonEncryptionCbcs?: Expressionable<CommonEncryptionCbcs>;
  noEncryption?: Expressionable<NoEncryption>;
}

export interface StreamingPolicyWidevineConfiguration {
  customLicenseAcquisitionUrlTemplate?: Expressionable<string>;
}

export interface TrackPropertyCondition {
  property: Expressionable<('Unknown' | 'FourCC')>;
  operation: Expressionable<('Unknown' | 'Equal')>;
  value?: Expressionable<string>;
}

export interface TrackSelection {
  trackSelections?: Expressionable<TrackPropertyCondition[]>;
}

export interface TransformOutput {
  onError?: Expressionable<('StopProcessingJob' | 'ContinueJob')>;
  relativePriority?: Expressionable<('Low' | 'Normal' | 'High')>;
  preset: Expressionable<Preset>;
}

export interface TransformProperties {
  description?: Expressionable<string>;
  outputs: Expressionable<TransformOutput[]>;
}

export interface TransportStreamFormat {
  '@odata.type': Expressionable<string>;
}

export interface Video {
  keyFrameInterval?: Expressionable<string>;
  stretchMode?: Expressionable<('None' | 'AutoSize' | 'AutoFit')>;
  '@odata.type': Expressionable<string>;
}

export interface VideoAnalyzerPreset {
  insightsToExtract?: Expressionable<('AudioInsightsOnly' | 'VideoInsightsOnly' | 'AllInsights')>;
  '@odata.type': Expressionable<string>;
}

export interface VideoOverlay {
  position?: Expressionable<Rectangle>;
  opacity?: Expressionable<number>;
  cropRectangle?: Expressionable<Rectangle>;
  '@odata.type': Expressionable<string>;
}

export namespace mediaServices {
  export function create(name: Expressionable<string>, properties: MediaServiceProperties, location?: Expressionable<string>): ResourceDefinition<MediaServiceProperties> {
    return {
      type: 'Microsoft.Media/mediaServices',
      apiVersion: '2018-07-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace mediaServices {
  export namespace accountFilters {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: MediaFilterProperties): ResourceDefinition<MediaFilterProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/accountFilters',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace assets {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AssetProperties): ResourceDefinition<AssetProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/assets',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace assets {
    export namespace assetFilters {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: MediaFilterProperties): ResourceDefinition<MediaFilterProperties> {
        return {
          type: 'Microsoft.Media/mediaServices/assets/assetFilters',
          apiVersion: '2018-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace mediaServices {
  export namespace contentKeyPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ContentKeyPolicyProperties): ResourceDefinition<ContentKeyPolicyProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/contentKeyPolicies',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace liveEvents {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LiveEventProperties, location?: Expressionable<string>): ResourceDefinition<LiveEventProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/liveEvents',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace liveEvents {
    export namespace liveOutputs {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: LiveOutputProperties): ResourceDefinition<LiveOutputProperties> {
        return {
          type: 'Microsoft.Media/mediaServices/liveEvents/liveOutputs',
          apiVersion: '2018-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}
export namespace mediaServices {
  export namespace streamingEndpoints {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StreamingEndpointProperties, location?: Expressionable<string>): ResourceDefinition<StreamingEndpointProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/streamingEndpoints',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace streamingLocators {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StreamingLocatorProperties): ResourceDefinition<StreamingLocatorProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/streamingLocators',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace streamingPolicies {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: StreamingPolicyProperties): ResourceDefinition<StreamingPolicyProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/streamingPolicies',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace transforms {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TransformProperties): ResourceDefinition<TransformProperties> {
      return {
        type: 'Microsoft.Media/mediaServices/transforms',
        apiVersion: '2018-07-01',
        name: concatResourceName(...name),
        properties,
      };
    }
  }
}
export namespace mediaServices {
  export namespace transforms {
    export namespace jobs {
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: JobProperties): ResourceDefinition<JobProperties> {
        return {
          type: 'Microsoft.Media/mediaServices/transforms/jobs',
          apiVersion: '2018-07-01',
          name: concatResourceName(...name),
          properties,
        };
      }
    }
  }
}