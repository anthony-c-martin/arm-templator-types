import { Expressionable, ResourceDefinition } from 'arm-templator';

export interface BlockchainMemberNodesSku {
  capacity?: Expressionable<number>;
}

export interface BlockchainMemberProperties {
  consortium?: Expressionable<string>;
  consortiumManagementAccountPassword?: Expressionable<string>;
  consortiumMemberDisplayName?: Expressionable<string>;
  consortiumRole?: Expressionable<string>;
  firewallRules?: Expressionable<FirewallRule[]>;
  password?: Expressionable<string>;
  protocol?: Expressionable<('NotSpecified' | 'Parity' | 'Quorum' | 'Corda')>;
  validatorNodesSku?: Expressionable<BlockchainMemberNodesSku>;
}

export interface FirewallRule {
  endIpAddress?: Expressionable<string>;
  ruleName?: Expressionable<string>;
  startIpAddress?: Expressionable<string>;
}

export interface Sku {
  name?: Expressionable<string>;
  tier?: Expressionable<string>;
}

export interface TransactionNodeProperties {
  firewallRules?: Expressionable<FirewallRule[]>;
  password?: Expressionable<string>;
}

export namespace blockchainMembers {
  export interface AdditionalProps {
    sku?: Expressionable<Sku>;
    tags?: Expressionable<any>;
  }
  
  export type BlockchainMembersResource = ResourceDefinition<BlockchainMemberProperties, AdditionalProps>;
  
  export function create(name: Expressionable<string>, properties: BlockchainMemberProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>, tags?: Expressionable<any>): BlockchainMembersResource {
    return {
      type: 'Microsoft.Blockchain/blockchainMembers',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      properties,
      additional: {
        sku,
        tags,
      },
    };
  }
}
export namespace blockchainMembers {
  export namespace transactionNodes {
    export type TransactionNodesResource = ResourceDefinition<TransactionNodeProperties, undefined>;
    
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TransactionNodeProperties, location?: Expressionable<string>): TransactionNodesResource {
      return {
        type: 'Microsoft.Blockchain/blockchainMembers/transactionNodes',
        apiVersion: '2018-06-01-preview',
        name: name,
        location,
        properties,
      };
    }
  }
}