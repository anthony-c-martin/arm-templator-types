import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface ContactDetails {
  contactName: Expressionable<string>;
  emailList: Expressionable<string[]>;
  mobile?: Expressionable<string>;
  notificationPreference?: Expressionable<NotificationPreference[]>;
  phone: Expressionable<string>;
  phoneExtension?: Expressionable<string>;
}

export interface DataBoxDiskJobDetails {
  jobDetailsType: Expressionable<('DataBoxDisk')>;
  passkey?: Expressionable<string>;
  preferredDisks?: Expressionable<any>;
}

export interface DataBoxHeavyJobDetails {
  devicePassword?: Expressionable<string>;
  jobDetailsType: Expressionable<('DataBoxHeavy')>;
}

export interface DataBoxJobDetails {
  devicePassword?: Expressionable<string>;
  jobDetailsType: Expressionable<('DataBox')>;
}

export interface DestinationAccountDetails {
  accountId?: Expressionable<string>;
  sharePassword?: Expressionable<string>;
}

export interface DestinationManagedDiskDetails {
  dataDestinationType: Expressionable<('ManagedDisk')>;
  resourceGroupId: Expressionable<string>;
  stagingStorageAccountId: Expressionable<string>;
}

export interface DestinationStorageAccountDetails {
  dataDestinationType: Expressionable<('StorageAccount')>;
  storageAccountId: Expressionable<string>;
}

export interface JobDeliveryInfo {
  scheduledDateTime?: Expressionable<string>;
}

export interface JobDetails {
  contactDetails: Expressionable<ContactDetails>;
  destinationAccountDetails: Expressionable<DestinationAccountDetails[]>;
  expectedDataSizeInTerabytes?: Expressionable<number>;
  preferences?: Expressionable<Preferences>;
  shippingAddress: Expressionable<ShippingAddress>;
}

export interface JobProperties {
  deliveryInfo?: Expressionable<JobDeliveryInfo>;
  deliveryType?: Expressionable<('NonScheduled' | 'Scheduled')>;
  details?: Expressionable<JobDetails>;
}

export interface NotificationPreference {
  sendNotification: Expressionable<boolean>;
  stageName: Expressionable<('DevicePrepared' | 'Dispatched' | 'Delivered' | 'PickedUp' | 'AtAzureDC' | 'DataCopy')>;
}

export interface Preferences {
  preferredDataCenterRegion?: Expressionable<string[]>;
  transportPreferences?: Expressionable<TransportPreferences>;
}

export interface ShippingAddress {
  addressType?: Expressionable<('None' | 'Residential' | 'Commercial')>;
  city?: Expressionable<string>;
  companyName?: Expressionable<string>;
  country: Expressionable<string>;
  postalCode: Expressionable<string>;
  stateOrProvince?: Expressionable<string>;
  streetAddress1: Expressionable<string>;
  streetAddress2?: Expressionable<string>;
  streetAddress3?: Expressionable<string>;
  zipExtendedCode?: Expressionable<string>;
}

export interface Sku {
  displayName?: Expressionable<string>;
  family?: Expressionable<string>;
  name: Expressionable<('DataBox' | 'DataBoxDisk' | 'DataBoxHeavy')>;
}

export interface TransportPreferences {
  preferredShipmentType: Expressionable<('CustomerManaged' | 'MicrosoftManaged')>;
}

export namespace jobs {
  interface AdditionalProps {
    sku: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: JobProperties, location: Expressionable<string>, sku: Expressionable<Sku>): ResourceDefinition<JobProperties> & AdditionalProps {
    return {
      type: 'Microsoft.DataBox/jobs',
      apiVersion: '2019-09-01',
      name: name,
      location,
      sku,
      properties,
    };
  }
}