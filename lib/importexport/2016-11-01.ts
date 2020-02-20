import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface DriveStatus {
  driveId?: Expressionable<string>;
  bitLockerKey?: Expressionable<string>;
  manifestFile?: Expressionable<string>;
  manifestHash?: Expressionable<string>;
  driveHeaderHash?: Expressionable<string>;
  state?: Expressionable<('Specified' | 'Received' | 'NeverReceived' | 'Transferring' | 'Completed' | 'CompletedMoreInfo' | 'ShippedBack')>;
  copyStatus?: Expressionable<string>;
  percentComplete?: Expressionable<number>;
  verboseLogUri?: Expressionable<string>;
  errorLogUri?: Expressionable<string>;
  manifestUri?: Expressionable<string>;
  bytesSucceeded?: Expressionable<number>;
}

export interface Export {
  blobList?: Expressionable<Export_blobList>;
  blobListblobPath?: Expressionable<string>;
}

export interface Export_blobList {
  blobPath?: Expressionable<string[]>;
  blobPathPrefix?: Expressionable<string[]>;
}

export interface JobDetails {
  storageAccountId?: Expressionable<string>;
  jobType?: Expressionable<string>;
  returnAddress?: Expressionable<ReturnAddress>;
  returnShipping?: Expressionable<ReturnShipping>;
  shippingInformation?: Expressionable<ShippingInformation>;
  deliveryPackage?: Expressionable<PackageInfomation>;
  returnPackage?: Expressionable<PackageInfomation>;
  diagnosticsPath?: Expressionable<string>;
  logLevel?: Expressionable<string>;
  backupDriveManifest?: Expressionable<boolean>;
  state?: Expressionable<string>;
  cancelRequested?: Expressionable<boolean>;
  percentComplete?: Expressionable<number>;
  incompleteBlobListUri?: Expressionable<string>;
  driveList?: Expressionable<DriveStatus[]>;
  export?: Expressionable<Export>;
  provisioningState?: Expressionable<string>;
}

export interface PackageInfomation {
  carrierName: Expressionable<string>;
  trackingNumber: Expressionable<string>;
  driveCount: Expressionable<number>;
  shipDate: Expressionable<string>;
}

export interface ReturnAddress {
  recipientName: Expressionable<string>;
  streetAddress1: Expressionable<string>;
  streetAddress2?: Expressionable<string>;
  city: Expressionable<string>;
  stateOrProvince?: Expressionable<string>;
  postalCode: Expressionable<string>;
  countryOrRegion: Expressionable<string>;
  phone: Expressionable<string>;
  email: Expressionable<string>;
}

export interface ReturnShipping {
  carrierName: Expressionable<string>;
  carrierAccountNumber: Expressionable<string>;
}

export interface ShippingInformation {
  recipientName: Expressionable<string>;
  streetAddress1: Expressionable<string>;
  streetAddress2?: Expressionable<string>;
  city: Expressionable<string>;
  stateOrProvince: Expressionable<string>;
  postalCode: Expressionable<string>;
  countryOrRegion: Expressionable<string>;
  phone?: Expressionable<string>;
}

export namespace jobs {
  export interface AddedResourceProps {
    tags?: Expressionable<any>;
  }
  
  export type JobsResource = ResourceDefinition<JobDetails> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: JobDetails, location?: Expressionable<string>, tags?: Expressionable<any>): JobsResource {
    return {
      type: 'Microsoft.ImportExport/jobs',
      apiVersion: '2016-11-01',
      name: [name],
      location,
      tags,
      properties,
    };
  }
}