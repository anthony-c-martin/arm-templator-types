import { Expressionable, ResourceDefinition } from 'arm-templator/dist/common';

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
  interface AdditionalProps {
    sku?: Expressionable<Sku>;
  }
  
  export function create(name: Expressionable<string>, properties: BlockchainMemberProperties, location?: Expressionable<string>, sku?: Expressionable<Sku>): ResourceDefinition<BlockchainMemberProperties> & AdditionalProps {
    return {
      type: 'Microsoft.Blockchain/blockchainMembers',
      apiVersion: '2018-06-01-preview',
      name: [name],
      location,
      sku,
      properties,
    };
  }
}
export namespace blockchainMembers {
  export namespace transactionNodes {
    export function create(name: [Expressionable<string>, Expressionable<string>], properties: TransactionNodeProperties, location?: Expressionable<string>): ResourceDefinition<TransactionNodeProperties> {
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