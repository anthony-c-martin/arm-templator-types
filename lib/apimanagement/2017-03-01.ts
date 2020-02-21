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
  apiVersionSetId?: Expressionable<string>;
  displayName?: Expressionable<string>;
  serviceUrl?: Expressionable<string>;
  path: Expressionable<string>;
  protocols?: Expressionable<('http' | 'https')[]>;
  apiVersionSet?: Expressionable<ApiVersionSetContract>;
  contentValue?: Expressionable<string>;
  contentFormat?: Expressionable<('wadl-xml' | 'wadl-link-json' | 'swagger-json' | 'swagger-link-json' | 'wsdl' | 'wsdl-link')>;
  wsdlSelector?: Expressionable<ApiCreateOrUpdateProperties_wsdlSelector>;
}

export interface ApiCreateOrUpdateProperties_wsdlSelector {
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
  name: Expressionable<('Developer' | 'Standard' | 'Premium' | 'Basic')>;
  capacity?: Expressionable<number>;
}

export interface ApiReleaseContractProperties {
  apiId?: Expressionable<string>;
  notes?: Expressionable<string>;
}

export interface ApiVersionSetContract {
  id?: Expressionable<string>;
  description?: Expressionable<string>;
  versioningScheme?: Expressionable<('Segment' | 'Query' | 'Header')>;
  versionQueryName?: Expressionable<string>;
  versionHeaderName?: Expressionable<string>;
}

export interface AuthenticationSettingsContract {
  oAuth2?: Expressionable<OAuth2AuthenticationSettingsContract>;
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

export interface CertificateConfiguration {
  encodedCertificate?: Expressionable<string>;
  certificatePassword?: Expressionable<string>;
  storeName: Expressionable<('CertificateAuthority' | 'Root')>;
}

export interface CertificateCreateOrUpdateProperties {
  data: Expressionable<string>;
  password: Expressionable<string>;
}

export interface DiagnosticContractProperties {
  enabled: Expressionable<boolean>;
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

export interface LoggerContractProperties {
  loggerType: Expressionable<('azureEventHub' | 'applicationInsights')>;
  description?: Expressionable<string>;
  isBuffered?: Expressionable<boolean>;
}

export interface OAuth2AuthenticationSettingsContract {
  authorizationServerId?: Expressionable<string>;
  scope?: Expressionable<string>;
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

export interface PolicyContractProperties {
  policyContent: Expressionable<string>;
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

export interface SchemaContractProperties {
  contentType: Expressionable<string>;
  document?: Expressionable<SchemaDocumentProperties>;
}

export interface SchemaDocumentProperties {
  value?: Expressionable<string>;
}

export interface SubscriptionCreateParameterProperties {
  userId: Expressionable<string>;
  productId: Expressionable<string>;
  displayName: Expressionable<string>;
  primaryKey?: Expressionable<string>;
  secondaryKey?: Expressionable<string>;
  state?: Expressionable<('suspended' | 'active' | 'expired' | 'submitted' | 'rejected' | 'cancelled')>;
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
  email: Expressionable<string>;
  firstName: Expressionable<string>;
  lastName: Expressionable<string>;
  password?: Expressionable<string>;
  confirmation?: Expressionable<('signup' | 'invite')>;
}

export interface VirtualNetworkConfiguration {
  subnetResourceId?: Expressionable<string>;
}

export interface X509CertificateName {
  name?: Expressionable<string>;
  issuerCertificateThumbprint?: Expressionable<string>;
}

export namespace service {
  export interface AdditionalProps {
    identity?: Expressionable<ApiManagementServiceIdentity>;
    sku: Expressionable<ApiManagementServiceSkuProperties>;
  }
  
  export type ServiceResource = ResourceDefinition<ApiManagementServiceProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: ApiManagementServiceProperties, location: Expressionable<string>, sku: Expressionable<ApiManagementServiceSkuProperties>, identity?: Expressionable<ApiManagementServiceIdentity>): ServiceResource {
    return {
      type: 'Microsoft.ApiManagement/service',
      apiVersion: '2017-03-01',
      name: [name],
      location,
      properties,
      additional: {
        identity,
        sku,
      },
    };
  }
}
export namespace service {
  export namespace apis {
    export type ApisResource = ResourceDefinition<ApiCreateOrUpdateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ApiCreateOrUpdateProperties): ApisResource {
      return {
        type: 'Microsoft.ApiManagement/service/apis',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace apis {
    export namespace operations {
      export type OperationsResource = ResourceDefinition<OperationContractProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: OperationContractProperties): OperationsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/operations',
          apiVersion: '2017-03-01',
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
        export type PoliciesResource = ResourceDefinition<PolicyContractProperties, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/operations/policies',
            apiVersion: '2017-03-01',
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
        export type TagsResource = ResourceDefinition<any, undefined>;
        
        export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
          return {
            type: 'Microsoft.ApiManagement/service/apis/operations/tags',
            apiVersion: '2017-03-01',
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
      export type PoliciesResource = ResourceDefinition<PolicyContractProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/policies',
          apiVersion: '2017-03-01',
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
      export type ReleasesResource = ResourceDefinition<ApiReleaseContractProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: ApiReleaseContractProperties): ReleasesResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/releases',
          apiVersion: '2017-03-01',
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
      export type SchemasResource = ResourceDefinition<SchemaContractProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: SchemaContractProperties): SchemasResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/schemas',
          apiVersion: '2017-03-01',
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
      export type TagDescriptionsResource = ResourceDefinition<TagDescriptionBaseProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: TagDescriptionBaseProperties): TagDescriptionsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/tagDescriptions',
          apiVersion: '2017-03-01',
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
      export type TagsResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
        return {
          type: 'Microsoft.ApiManagement/service/apis/tags',
          apiVersion: '2017-03-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace authorizationServers {
    export type AuthorizationServersResource = ResourceDefinition<AuthorizationServerContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: AuthorizationServerContractProperties): AuthorizationServersResource {
      return {
        type: 'Microsoft.ApiManagement/service/authorizationServers',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace backends {
    export type BackendsResource = ResourceDefinition<BackendContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: BackendContractProperties): BackendsResource {
      return {
        type: 'Microsoft.ApiManagement/service/backends',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace certificates {
    export type CertificatesResource = ResourceDefinition<CertificateCreateOrUpdateProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: CertificateCreateOrUpdateProperties): CertificatesResource {
      return {
        type: 'Microsoft.ApiManagement/service/certificates',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace diagnostics {
    export type DiagnosticsResource = ResourceDefinition<DiagnosticContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: DiagnosticContractProperties): DiagnosticsResource {
      return {
        type: 'Microsoft.ApiManagement/service/diagnostics',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace diagnostics {
    export namespace loggers {
      export type LoggersResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): LoggersResource {
        return {
          type: 'Microsoft.ApiManagement/service/diagnostics/loggers',
          apiVersion: '2017-03-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace groups {
    export type GroupsResource = ResourceDefinition<GroupCreateParametersProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: GroupCreateParametersProperties): GroupsResource {
      return {
        type: 'Microsoft.ApiManagement/service/groups',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace groups {
    export namespace users {
      export type UsersResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): UsersResource {
        return {
          type: 'Microsoft.ApiManagement/service/groups/users',
          apiVersion: '2017-03-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace identityProviders {
    export type IdentityProvidersResource = ResourceDefinition<IdentityProviderContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: IdentityProviderContractProperties): IdentityProvidersResource {
      return {
        type: 'Microsoft.ApiManagement/service/identityProviders',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace loggers {
    export type LoggersResource = ResourceDefinition<LoggerContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: LoggerContractProperties): LoggersResource {
      return {
        type: 'Microsoft.ApiManagement/service/loggers',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace notifications {
    export type NotificationsResource = ResourceDefinition<any, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: any): NotificationsResource {
      return {
        type: 'Microsoft.ApiManagement/service/notifications',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace notifications {
    export namespace recipientEmails {
      export type RecipientEmailsResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): RecipientEmailsResource {
        return {
          type: 'Microsoft.ApiManagement/service/notifications/recipientEmails',
          apiVersion: '2017-03-01',
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
      export type RecipientUsersResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): RecipientUsersResource {
        return {
          type: 'Microsoft.ApiManagement/service/notifications/recipientUsers',
          apiVersion: '2017-03-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace openidConnectProviders {
    export type OpenidConnectProvidersResource = ResourceDefinition<OpenidConnectProviderContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: OpenidConnectProviderContractProperties): OpenidConnectProvidersResource {
      return {
        type: 'Microsoft.ApiManagement/service/openidConnectProviders',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace policies {
    export type PoliciesResource = ResourceDefinition<PolicyContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
      return {
        type: 'Microsoft.ApiManagement/service/policies',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace products {
    export type ProductsResource = ResourceDefinition<ProductContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: ProductContractProperties): ProductsResource {
      return {
        type: 'Microsoft.ApiManagement/service/products',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace products {
    export namespace apis {
      export type ApisResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): ApisResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/apis',
          apiVersion: '2017-03-01',
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
      export type GroupsResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): GroupsResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/groups',
          apiVersion: '2017-03-01',
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
      export type PoliciesResource = ResourceDefinition<PolicyContractProperties, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: PolicyContractProperties): PoliciesResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/policies',
          apiVersion: '2017-03-01',
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
      export type TagsResource = ResourceDefinition<any, undefined>;
      
      export function create(name: [Expressionable<string>, Expressionable<string>, Expressionable<string>], properties: any): TagsResource {
        return {
          type: 'Microsoft.ApiManagement/service/products/tags',
          apiVersion: '2017-03-01',
          name: name,
          properties,
        };
      }
    }
  }
}
export namespace service {
  export namespace properties {
    export type PropertiesResource = ResourceDefinition<PropertyContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: PropertyContractProperties): PropertiesResource {
      return {
        type: 'Microsoft.ApiManagement/service/properties',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace subscriptions {
    export type SubscriptionsResource = ResourceDefinition<SubscriptionCreateParameterProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: SubscriptionCreateParameterProperties): SubscriptionsResource {
      return {
        type: 'Microsoft.ApiManagement/service/subscriptions',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace tags {
    export type TagsResource = ResourceDefinition<TagContractProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TagContractProperties): TagsResource {
      return {
        type: 'Microsoft.ApiManagement/service/tags',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace templates {
    export type TemplatesResource = ResourceDefinition<EmailTemplateUpdateParameterProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: EmailTemplateUpdateParameterProperties): TemplatesResource {
      return {
        type: 'Microsoft.ApiManagement/service/templates',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}
export namespace service {
  export namespace users {
    export type UsersResource = ResourceDefinition<UserCreateParameterProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: UserCreateParameterProperties): UsersResource {
      return {
        type: 'Microsoft.ApiManagement/service/users',
        apiVersion: '2017-03-01',
        name: name,
        properties,
      };
    }
  }
}