import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

export interface AdditionalLocation {
  location: Expressionable<string>;
  sku: Expressionable<ApiManagementServiceSkuProperties>;
  virtualNetworkConfiguration?: Expressionable<VirtualNetworkConfiguration>;
}

export interface ApiCreateOrUpdateProperties {
  description?: Expressionable<string>;
  authenticationSettings?: Expressionable<AuthenticationSettingsContract>;
  subscriptionKeyParameterNames?: Expressionable<SubscriptionKeyParameterNamesContract>;
  type?: Expressionable<('http' | 'soap')>;
  apiRevision?: Expressionable<string>;
  apiVersion?: Expressionable<string>;
  apiRevisionDescription?: Expressionable<string>;
  apiVersionDescription?: Expressionable<string>;
  apiVersionSetId?: Expressionable<string>;
  subscriptionRequired?: Expressionable<boolean>;
  displayName?: Expressionable<string>;
  serviceUrl?: Expressionable<string>;
  path: Expressionable<string>;
  protocols?: Expressionable<('http' | 'https')[]>;
  apiVersionSet?: Expressionable<ApiVersionSetContractDetails>;
  contentValue?: Expressionable<string>;
  contentFormat?: Expressionable<('wadl-xml' | 'wadl-link-json' | 'swagger-json' | 'swagger-link-json' | 'wsdl' | 'wsdl-link')>;
  wsdlSelector?: Expressionable<ApiCreateOrUpdatePropertiesWsdlSelector>;
  apiType?: Expressionable<('http' | 'soap')>;
}

export interface ApiCreateOrUpdatePropertiesWsdlSelector {
  wsdlServiceName?: Expressionable<string>;
  wsdlEndpointName?: Expressionable<string>;
}

export interface ApiManagementServiceIdentity {
  type: Expressionable<('SystemAssigned')>;
}

export interface ApiManagementServiceProperties {
  notificationSenderEmail?: Expressionable<string>;
  hostnameConfigurations?: Expressionable<HostnameConfiguration[]>;
  virtualNetworkConfiguration?: Expressionable<VirtualNetworkConfiguration>;
  additionalLocations?: Expressionable<AdditionalLocation[]>;
  certificates?: Expressionable<CertificateConfiguration[]>;
  virtualNetworkType?: Expressionable<('None' | 'External' | 'Internal')>;
  publisherEmail: Expressionable<string>;
  publisherName: Expressionable<string>;
}

export interface ApiManagementServiceSkuProperties {
  name: Expressionable<('Developer' | 'Standard' | 'Premium' | 'Basic' | 'Consumption')>;
  capacity?: Expressionable<number>;
}

export interface ApiReleaseContractProperties {
  apiId?: Expressionable<string>;
  notes?: Expressionable<string>;
}

export interface ApiVersionSetContractDetails {
  id?: Expressionable<string>;
  description?: Expressionable<string>;
  versioningScheme?: Expressionable<('Segment' | 'Query' | 'Header')>;
  versionQueryName?: Expressionable<string>;
  versionHeaderName?: Expressionable<string>;
}

export interface ApiVersionSetContractProperties {
  description?: Expressionable<string>;
  versionQueryName?: Expressionable<string>;
  versionHeaderName?: Expressionable<string>;
  displayName: Expressionable<string>;
  versioningScheme: Expressionable<('Segment' | 'Query' | 'Header')>;
}

export interface AuthenticationSettingsContract {
  oAuth2?: Expressionable<OAuth2AuthenticationSettingsContract>;
  openid?: Expressionable<OpenIdAuthenticationSettingsContract>;
  subscriptionKeyRequired?: Expressionable<boolean>;
}

export interface AuthorizationServerContractProperties {
  description?: Expressionable<string>;
  authorizationMethods?: Expressionable<('HEAD' | 'OPTIONS' | 'TRACE' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE')[]>;
  clientAuthenticationMethod?: Expressionable<('Basic' | 'Body')[]>;
  tokenBodyParameters?: Expressionable<TokenBodyParameterContract[]>;
  tokenEndpoint?: Expressionable<string>;
  supportState?: Expressionable<boolean>;
  defaultScope?: Expressionable<string>;
  bearerTokenSendingMethods?: Expressionable<('authorizationHeader' | 'query')[]>;
  clientSecret?: Expressionable<string>;
  resourceOwnerUsername?: Expressionable<string>;
  resourceOwnerPassword?: Expressionable<string>;
  displayName: Expressionable<string>;
  clientRegistrationEndpoint: Expressionable<string>;
  authorizationEndpoint: Expressionable<string>;
  grantTypes: Expressionable<('authorizationCode' | 'implicit' | 'resourceOwnerPassword' | 'clientCredentials')[]>;
  clientId: Expressionable<string>;
}

export interface BackendAuthorizationHeaderCredentials {
  scheme: Expressionable<string>;
  parameter: Expressionable<string>;
}

export interface BackendContractProperties {
  title?: Expressionable<string>;
  description?: Expressionable<string>;
  resourceId?: Expressionable<string>;
  properties?: Expressionable<BackendProperties>;
  credentials?: Expressionable<BackendCredentialsContract>;
  proxy?: Expressionable<BackendProxyContract>;
  tls?: Expressionable<BackendTlsProperties>;
  url: Expressionable<string>;
  protocol: Expressionable<('http' | 'soap')>;
}

export interface BackendCredentialsContract {
  certificate?: Expressionable<string[]>;
  authorization?: Expressionable<BackendAuthorizationHeaderCredentials>;
}

export interface BackendProperties {
  serviceFabricCluster?: Expressionable<BackendServiceFabricClusterProperties>;
}

export interface BackendProxyContract {
  url: Expressionable<string>;
  username?: Expressionable<string>;
  password?: Expressionable<string>;
}

export interface BackendServiceFabricClusterProperties {
  clientCertificatethumbprint: Expressionable<string>;
  maxPartitionResolutionRetries?: Expressionable<number>;
  managementEndpoints: Expressionable<string[]>;
  serverCertificateThumbprints?: Expressionable<string[]>;
  serverX509Names?: Expressionable<X509CertificateName[]>;
}

export interface BackendTlsProperties {
  validateCertificateChain?: Expressionable<boolean>;
  validateCertificateName?: Expressionable<boolean>;
}

export interface BodyDiagnosticSettings {
  bytes?: Expressionable<number>;
}

export interface CertificateConfiguration {
  encodedCertificate?: Expressionable<string>;
  certificatePassword?: Expressionable<string>;
  storeName: Expressionable<('CertificateAuthority' | 'Root')>;
  certificate?: Expressionable<CertificateInformation>;
}

export interface CertificateCreateOrUpdateProperties {
  data: Expressionable<string>;
  password: Expressionable<string>;
}

export interface CertificateInformation {
  expiry: Expressionable<string>;
  thumbprint: Expressionable<string>;
  subject: Expressionable<string>;
}

export interface DiagnosticContractProperties {
  alwaysLog?: Expressionable<('allErrors')>;
  loggerId: Expressionable<string>;
  sampling?: Expressionable<SamplingSettings>;
  frontend?: Expressionable<PipelineDiagnosticSettings>;
  backend?: Expressionable<PipelineDiagnosticSettings>;
  enableHttpCorrelationHeaders?: Expressionable<boolean>;
}

export interface EmailTemplateParametersContractProperties {
  name?: Expressionable<string>;
  title?: Expressionable<string>;
  description?: Expressionable<string>;
}

export interface EmailTemplateUpdateParameterProperties {
  subject?: Expressionable<string>;
  title?: Expressionable<string>;
  description?: Expressionable<string>;
  body?: Expressionable<string>;
  parameters?: Expressionable<EmailTemplateParametersContractProperties[]>;
}

export interface GroupCreateParametersProperties {
  displayName: Expressionable<string>;
  description?: Expressionable<string>;
  type?: Expressionable<('custom' | 'system' | 'external')>;
  externalId?: Expressionable<string>;
}

export interface HostnameConfiguration {
  type: Expressionable<('Proxy' | 'Portal' | 'Management' | 'Scm')>;
  hostName: Expressionable<string>;
  keyVaultId?: Expressionable<string>;
  encodedCertificate?: Expressionable<string>;
  certificatePassword?: Expressionable<string>;
  defaultSslBinding?: Expressionable<boolean>;
  negotiateClientCertificate?: Expressionable<boolean>;
  certificate?: Expressionable<CertificateInformation>;
}

export interface HttpMessageDiagnostic {
  headers?: Expressionable<string[]>;
  body?: Expressionable<BodyDiagnosticSettings>;
}

export interface IdentityProviderContractProperties {
  type?: Expressionable<('facebook' | 'google' | 'microsoft' | 'twitter' | 'aad' | 'aadB2C')>;
  allowedTenants?: Expressionable<string[]>;
  signupPolicyName?: Expressionable<string>;
  signinPolicyName?: Expressionable<string>;
  profileEditingPolicyName?: Expressionable<string>;
  passwordResetPolicyName?: Expressionable<string>;
  clientId: Expressionable<string>;
  clientSecret: Expressionable<string>;
}

export interface IssueAttachmentContractProperties {
  title: Expressionable<string>;
  contentFormat: Expressionable<string>;
  content: Expressionable<string>;
}

export interface IssueCommentContractProperties {
  text: Expressionable<string>;
  createdDate?: Expressionable<string>;
  userId: Expressionable<string>;
}

export interface IssueContractProperties {
  createdDate?: Expressionable<string>;
  state?: Expressionable<('proposed' | 'open' | 'removed' | 'resolved' | 'closed')>;
  apiId?: Expressionable<string>;
  title: Expressionable<string>;
  description: Expressionable<string>;
  userId: Expressionable<string>;
}

export interface LoggerContractProperties {
  loggerType: Expressionable<('azureEventHub' | 'applicationInsights')>;
  description?: Expressionable<string>;
  isBuffered?: Expressionable<boolean>;
  resourceId?: Expressionable<string>;
}

export interface OAuth2AuthenticationSettingsContract {
  authorizationServerId?: Expressionable<string>;
  scope?: Expressionable<string>;
}

export interface OpenIdAuthenticationSettingsContract {
  openidProviderId?: Expressionable<string>;
  bearerTokenSendingMethods?: Expressionable<('authorizationHeader' | 'query')[]>;
}

export interface OpenidConnectProviderContractProperties {
  displayName: Expressionable<string>;
  description?: Expressionable<string>;
  metadataEndpoint: Expressionable<string>;
  clientId: Expressionable<string>;
  clientSecret?: Expressionable<string>;
}

export interface OperationContractProperties {
  templateParameters?: Expressionable<ParameterContract[]>;
  description?: Expressionable<string>;
  request?: Expressionable<RequestContract>;
  responses?: Expressionable<ResponseContract[]>;
  policies?: Expressionable<string>;
  displayName: Expressionable<string>;
  method: Expressionable<string>;
  urlTemplate: Expressionable<string>;
}

export interface ParameterContract {
  name: Expressionable<string>;
  description?: Expressionable<string>;
  type: Expressionable<string>;
  defaultValue?: Expressionable<string>;
  required?: Expressionable<boolean>;
  values?: Expressionable<string[]>;
}

export interface PipelineDiagnosticSettings {
  request?: Expressionable<HttpMessageDiagnostic>;
  response?: Expressionable<HttpMessageDiagnostic>;
}

export interface PolicyContractProperties {
  policyContent: Expressionable<string>;
  contentFormat?: Expressionable<('xml' | 'xml-link' | 'rawxml' | 'rawxml-link')>;
}

export interface ProductContractProperties {
  description?: Expressionable<string>;
  terms?: Expressionable<string>;
  subscriptionRequired?: Expressionable<boolean>;
  approvalRequired?: Expressionable<boolean>;
  subscriptionsLimit?: Expressionable<number>;
  state?: Expressionable<('notPublished' | 'published')>;
  displayName: Expressionable<string>;
}

export interface PropertyContractProperties {
  tags?: Expressionable<string[]>;
  secret?: Expressionable<boolean>;
  displayName: Expressionable<string>;
  value: Expressionable<string>;
}

export interface RepresentationContract {
  contentType: Expressionable<string>;
  sample?: Expressionable<string>;
  schemaId?: Expressionable<string>;
  typeName?: Expressionable<string>;
  formParameters?: Expressionable<ParameterContract[]>;
}

export interface RequestContract {
  description?: Expressionable<string>;
  queryParameters?: Expressionable<ParameterContract[]>;
  headers?: Expressionable<ParameterContract[]>;
  representations?: Expressionable<RepresentationContract[]>;
}

export interface ResponseContract {
  statusCode: Expressionable<number>;
  description?: Expressionable<string>;
  representations?: Expressionable<RepresentationContract[]>;
  headers?: Expressionable<ParameterContract[]>;
}

export interface SamplingSettings {
  samplingType?: Expressionable<('fixed')>;
  percentage?: Expressionable<number>;
}

export interface SchemaContractProperties {
  contentType: Expressionable<string>;
  document?: Expressionable<SchemaDocumentProperties>;
}

export interface SchemaDocumentProperties {
  value?: Expressionable<string>;
}

export interface SubscriptionCreateParameterProperties {
  ownerId?: Expressionable<string>;
  scope: Expressionable<string>;
  displayName: Expressionable<string>;
  primaryKey?: Expressionable<string>;
  secondaryKey?: Expressionable<string>;
  state?: Expressionable<('suspended' | 'active' | 'expired' | 'submitted' | 'rejected' | 'cancelled')>;
  allowTracing?: Expressionable<boolean>;
}

export interface SubscriptionKeyParameterNamesContract {
  header?: Expressionable<string>;
  query?: Expressionable<string>;
}

export interface TagContractProperties {
  displayName: Expressionable<string>;
}

export interface TagDescriptionBaseProperties {
  description?: Expressionable<string>;
  externalDocsUrl?: Expressionable<string>;
  externalDocsDescription?: Expressionable<string>;
}

export interface TokenBodyParameterContract {
  name: Expressionable<string>;
  value: Expressionable<string>;
}

export interface UserCreateParameterProperties {
  state?: Expressionable<('active' | 'blocked' | 'pending' | 'deleted')>;
  note?: Expressionable<string>;
  identities?: Expressionable<UserIdentityContract[]>;
  email: Expressionable<string>;
  firstName: Expressionable<string>;
  lastName: Expressionable<string>;
  password?: Expressionable<string>;
  confirmation?: Expressionable<('signup' | 'invite')>;
}

export interface UserIdentityContract {
  provider?: Expressionable<string>;
  id?: Expressionable<string>;
}

export interface VirtualNetworkConfiguration {
  subnetResourceId?: Expressionable<string>;
}

export interface X509CertificateName {
  name?: Expressionable<string>;
  issuerCertificateThumbprint?: Expressionable<string>;
}

export namespace service {
  export interface AddedResourceProps {
    sku: Expressionable<ApiManagementServiceSkuProperties>;
    identity?: Expressionable<ApiManagementServiceIdentity>;
  }
  
  export type ServiceResource = ResourceDefinition<ApiManagementServiceProperties> & AddedResourceProps;
  
  export function create(name: Expressionable<string>, properties: ApiManagementServiceProperties, location: Expressionable<string>, sku: Expressionable<ApiManagementServiceSkuProperties>, identity?: Expressionable<ApiManagementServiceIdentity>): ServiceResource {
    return {
      type: 'Microsoft.ApiManagement/service',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      identity,
      sku,
      properties,
    };
  }
}
export namespace service {
  export namespace apis {
    export type ApisResource = ResourceDefinition<ApiCreateOrUpdateProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApiCreateOrUpdateProperties): ApisResource {
      return {
        type: 'Microsoft.ApiManagement/service/apis',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace diagnostics {
      export type DiagnosticsResource = ResourceDefinition<DiagnosticContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: DiagnosticContractProperties): DiagnosticsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/diagnostics',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace issues {
      export type IssuesResource = ResourceDefinition<IssueContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: IssueContractProperties): IssuesResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/issues',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace issues {
      export namespace attachments {
        export type AttachmentsResource = ResourceDefinition<IssueAttachmentContractProperties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: IssueAttachmentContractProperties): AttachmentsResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/issues/attachments',
            apiVersion: '2018-06-01-preview',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace issues {
      export namespace comments {
        export type CommentsResource = ResourceDefinition<IssueCommentContractProperties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: IssueCommentContractProperties): CommentsResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/issues/comments',
            apiVersion: '2018-06-01-preview',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace operations {
      export type OperationsResource = ResourceDefinition<OperationContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: OperationContractProperties): OperationsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/operations',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace operations {
      export namespace policies {
        export type PoliciesResource = ResourceDefinition<PolicyContractProperties>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/operations/policies',
            apiVersion: '2018-06-01-preview',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace operations {
      export namespace tags {
        export type TagsResource = ResourceDefinition<any>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/operations/tags',
            apiVersion: '2018-06-01-preview',
            name: name,
            properties,
          };
        }
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace policies {
      export type PoliciesResource = ResourceDefinition<PolicyContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/policies',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace releases {
      export type ReleasesResource = ResourceDefinition<ApiReleaseContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ApiReleaseContractProperties): ReleasesResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/releases',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace schemas {
      export type SchemasResource = ResourceDefinition<SchemaContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SchemaContractProperties): SchemasResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/schemas',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace tagDescriptions {
      export type TagDescriptionsResource = ResourceDefinition<TagDescriptionBaseProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: TagDescriptionBaseProperties): TagDescriptionsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/tagDescriptions',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace tags {
      export type TagsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/tags',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace apiversionsets {
    export type ApiversionsetsResource = ResourceDefinition<ApiVersionSetContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApiVersionSetContractProperties): ApiversionsetsResource {
      return {
        type: 'Microsoft.ApiManagement/service/api-version-sets',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace authorizationServers {
    export type AuthorizationServersResource = ResourceDefinition<AuthorizationServerContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationServerContractProperties): AuthorizationServersResource {
      return {
        type: 'Microsoft.ApiManagement/service/authorizationServers',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace backends {
    export type BackendsResource = ResourceDefinition<BackendContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BackendContractProperties): BackendsResource {
      return {
        type: 'Microsoft.ApiManagement/service/backends',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<CertificateCreateOrUpdateProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CertificateCreateOrUpdateProperties): CertificatesResource {
      return {
        type: 'Microsoft.ApiManagement/service/certificates',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace diagnostics {
    export type DiagnosticsResource = ResourceDefinition<DiagnosticContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DiagnosticContractProperties): DiagnosticsResource {
      return {
        type: 'Microsoft.ApiManagement/service/diagnostics',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace groups {
    export type GroupsResource = ResourceDefinition<GroupCreateParametersProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GroupCreateParametersProperties): GroupsResource {
      return {
        type: 'Microsoft.ApiManagement/service/groups',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace groups {
    export namespace users {
      export type UsersResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): UsersResource {
        return {
          type: 'Microsoft.ApiManagement/service/groups/users',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace identityProviders {
    export type IdentityProvidersResource = ResourceDefinition<IdentityProviderContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IdentityProviderContractProperties): IdentityProvidersResource {
      return {
        type: 'Microsoft.ApiManagement/service/identityProviders',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace loggers {
    export type LoggersResource = ResourceDefinition<LoggerContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LoggerContractProperties): LoggersResource {
      return {
        type: 'Microsoft.ApiManagement/service/loggers',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace notifications {
    export type NotificationsResource = ResourceDefinition<any>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): NotificationsResource {
      return {
        type: 'Microsoft.ApiManagement/service/notifications',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace notifications {
    export namespace recipientEmails {
      export type RecipientEmailsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): RecipientEmailsResource {
        return {
          type: 'Microsoft.ApiManagement/service/notifications/recipientEmails',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace notifications {
    export namespace recipientUsers {
      export type RecipientUsersResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): RecipientUsersResource {
        return {
          type: 'Microsoft.ApiManagement/service/notifications/recipientUsers',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace openidConnectProviders {
    export type OpenidConnectProvidersResource = ResourceDefinition<OpenidConnectProviderContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: OpenidConnectProviderContractProperties): OpenidConnectProvidersResource {
      return {
        type: 'Microsoft.ApiManagement/service/openidConnectProviders',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace policies {
    export type PoliciesResource = ResourceDefinition<PolicyContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
      return {
        type: 'Microsoft.ApiManagement/service/policies',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace products {
    export type ProductsResource = ResourceDefinition<ProductContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ProductContractProperties): ProductsResource {
      return {
        type: 'Microsoft.ApiManagement/service/products',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace products {
    export namespace apis {
      export type ApisResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ApisResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/apis',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace products {
    export namespace groups {
      export type GroupsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): GroupsResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/groups',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace products {
    export namespace policies {
      export type PoliciesResource = ResourceDefinition<PolicyContractProperties>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/policies',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace products {
    export namespace tags {
      export type TagsResource = ResourceDefinition<any>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/tags',
          apiVersion: '2018-06-01-preview',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace properties {
    export type PropertiesResource = ResourceDefinition<PropertyContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PropertyContractProperties): PropertiesResource {
      return {
        type: 'Microsoft.ApiManagement/service/properties',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace subscriptions {
    export type SubscriptionsResource = ResourceDefinition<SubscriptionCreateParameterProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SubscriptionCreateParameterProperties): SubscriptionsResource {
      return {
        type: 'Microsoft.ApiManagement/service/subscriptions',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace tags {
    export type TagsResource = ResourceDefinition<TagContractProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TagContractProperties): TagsResource {
      return {
        type: 'Microsoft.ApiManagement/service/tags',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace templates {
    export type TemplatesResource = ResourceDefinition<EmailTemplateUpdateParameterProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EmailTemplateUpdateParameterProperties): TemplatesResource {
      return {
        type: 'Microsoft.ApiManagement/service/templates',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace users {
    export type UsersResource = ResourceDefinition<UserCreateParameterProperties>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: UserCreateParameterProperties): UsersResource {
      return {
        type: 'Microsoft.ApiManagement/service/users',
        apiVersion: '2018-06-01-preview',
        name: name,
        properties,
      };
    }
  }
}