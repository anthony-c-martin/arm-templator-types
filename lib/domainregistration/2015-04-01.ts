// Generated using 'npm run generate /Users/antm88/Desktop/azure-resource-manager-schemas/schemas/2015-04-01/Microsoft.DomainRegistration.json'
import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';
import { concatResourceName } from 'arm-templator';

export interface Address {
  address1: Expressionable<string>;
  address2?: Expressionable<string>;
  city: Expressionable<string>;
  country: Expressionable<string>;
  postalCode: Expressionable<string>;
  state: Expressionable<string>;
}

export interface Contact {
  addressMailing?: Expressionable<Address>;
  email: Expressionable<string>;
  fax?: Expressionable<string>;
  jobTitle?: Expressionable<string>;
  nameFirst: Expressionable<string>;
  nameLast: Expressionable<string>;
  nameMiddle?: Expressionable<string>;
  organization?: Expressionable<string>;
  phone: Expressionable<string>;
}

export interface Domain_properties {
  contactAdmin?: Expressionable<Contact>;
  contactBilling?: Expressionable<Contact>;
  contactRegistrant?: Expressionable<Contact>;
  contactTech?: Expressionable<Contact>;
  nameServers?: Expressionable<string[]>;
  privacy?: Expressionable<boolean>;
  autoRenew?: Expressionable<boolean>;
  managedHostNames?: Expressionable<HostName[]>;
  consent?: Expressionable<DomainPurchaseConsent>;
  domainNotRenewableReasons?: Expressionable<('RegistrationStatusNotSupportedForRenewal' | 'ExpirationNotInRenewalTimeRange' | 'SubscriptionNotActive')[]>;
}

export interface DomainOwnershipIdentifier_properties {
  ownershipId?: Expressionable<string>;
}

export interface DomainPurchaseConsent {
  agreementKeys?: Expressionable<string[]>;
  agreedBy?: Expressionable<string>;
  agreedAt?: Expressionable<string>;
}

export interface HostName {
  name?: Expressionable<string>;
  siteNames?: Expressionable<string[]>;
  azureResourceName?: Expressionable<string>;
  azureResourceType?: Expressionable<('Website' | 'TrafficManager')>;
  customHostNameDnsRecordType?: Expressionable<('CName' | 'A')>;
  hostNameType?: Expressionable<('Verified' | 'Managed')>;
}

export namespace domains {
  export function create(name: Expressionable<string>, properties: Domain_properties, location: Expressionable<string>): ResourceDefinition<Domain_properties> {
    return {
      type: 'Microsoft.DomainRegistration/domains',
      apiVersion: '2015-04-01',
      name: name,
      location,
      properties,
    };
  }
}
export namespace domains {
  export namespace domainOwnershipIdentifiers {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DomainOwnershipIdentifier_properties, location: Expressionable<string>): ResourceDefinition<DomainOwnershipIdentifier_properties> {
      return {
        type: 'Microsoft.DomainRegistration/domains/domainOwnershipIdentifiers',
        apiVersion: '2015-04-01',
        name: concatResourceName(...name),
        location,
        properties,
      };
    }
  }
}
