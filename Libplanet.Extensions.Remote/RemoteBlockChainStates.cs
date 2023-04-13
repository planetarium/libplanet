using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Numerics;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Client.Http;
using GraphQL.Client.Serializer.SystemTextJson;
using Libplanet.Assets;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;

namespace Libplanet.Extensions.Remote
{
    public class RemoteBlockChainStates : IBlockChainStates
    {
        private readonly Uri _explorerEndpoint;
        private readonly GraphQLHttpClient _graphQlHttpClient;

        public RemoteBlockChainStates(Uri explorerEndpoint)
        {
            _explorerEndpoint = explorerEndpoint;
            _graphQlHttpClient =
                new GraphQLHttpClient(_explorerEndpoint, new SystemTextJsonSerializer());
        }

        public IReadOnlyList<IValue?> GetStates(IReadOnlyList<Address> addresses, BlockHash offset)
        {
            var response = _graphQlHttpClient.SendQueryAsync<GetStatesResponseType>(
                new GraphQLRequest(
                    @"query GetStates($addresses: [Address]!, $offsetBlockHash: ID!)
                {
                    stateQuery
                    {
                        states(addresses: addresses, offsetBlockHash: $offsetBlockHash)
                    }
                }",
                    operationName: "GetStates",
                    variables: new
                    {
                        addresses = addresses.Select(x => x.ToString()).ToArray(),
                        offsetBlockHash = ByteUtil.Hex(offset.ByteArray),
                    })).Result;
            var codec = new Codec();
            Console.WriteLine(response.Errors[0].Message);
            return response.Data.StateQuery.States.Select(codec.Decode).ToList();
        }

        public FungibleAssetValue GetBalance(Address address, Currency currency, BlockHash offset)
        {
            var response = _graphQlHttpClient.SendQueryAsync<GetBalanceResponseType>(
                new GraphQLRequest(
            @"query GetBalance($owner: Address!, $currencyHash: ByteString!, $offsetBlockHash: ID!)
                {
                    stateQuery
                    {
                        balance(owner: $owner, currencyHash: $currencyHash, offsetBlockHash: $offsetBlockHash)
                        {
                            string
                        }
                    }
                }",
                operationName: "GetBalance",
                variables: new
                {
                    owner = address.ToString(),
                    currencyHash = ByteUtil.Hex(currency.Hash.ByteArray),
                    offsetBlockHash = ByteUtil.Hex(offset.ByteArray),
                })).Result;

            Console.WriteLine(response.Errors[0].Message);

            return FungibleAssetValue.Parse(currency, response.Data.StateQuery.Balance.String);
        }

        public FungibleAssetValue GetTotalSupply(Currency currency, BlockHash offset)
        {
            var response = _graphQlHttpClient.SendQueryAsync<GetTotalSupplyResponseType>(
                new GraphQLRequest(
                    @"query GetTotalSupply($currencyHash: ByteString!, $offsetBlockHash: ID!)
                {
                    stateQuery
                    {
                        totalSupply(currencyHash: $currencyHash, offsetBlockHash: $offsetBlockHash)
                        {
                            string
                        }
                    }
                }",
                    operationName: "GetTotalSupply",
                    variables: new
                    {
                        currencyHash = ByteUtil.Hex(currency.Hash.ByteArray),
                        offsetBlockHash = ByteUtil.Hex(offset.ByteArray),
                    })).Result;

            return FungibleAssetValue.Parse(currency, response.Data.StateQuery.TotalSupply.String);
        }

        public ValidatorSet GetValidatorSet(BlockHash offset)
        {
            var response = _graphQlHttpClient.SendQueryAsync<GetValidatorsResponseType>(
                new GraphQLRequest (
                    @"query GetValidators($offsetBlockHash: ID!)
                {
                    stateQuery
                    {
                        validators(offsetBlockHash: $offsetBlockHash)
                        {
                            publicKey
                            power
                        }
                    }
                }",
                    operationName: "GetValidators",
                    variables: new
                    {
                        offsetBlockHash = ByteUtil.Hex(offset.ByteArray),
                    })).Result;
            return new ValidatorSet(response.Data.StateQuery.Validators
                .Select(x =>
                    new Validator(new PublicKey(ByteUtil.ParseHex(x.PublicKey)), x.Power))
                .ToList());
        }

        private class GetStatesResponseType
        {
            public StateQueryWithStatesType StateQuery { get; set; }
        }

        private class StateQueryWithStatesType
        {
            public byte[][] States { get; set; }
        }

        private class GetBalanceResponseType
        {
            public StateQueryWithBalanceType StateQuery { get; set; }
        }

        private class StateQueryWithBalanceType
        {
            public FungibleAssetValueWithStringType Balance { get; set; }
        }

        private class FungibleAssetValueWithStringType
        {
            public string String { get; set; }
        }

        private class GetTotalSupplyResponseType
        {
            public StateQueryWithTotalSupplyType StateQuery { get; set; }
        }

        private class StateQueryWithTotalSupplyType
        {
            public FungibleAssetValueWithStringType TotalSupply { get; set; }
        }

        private class GetValidatorsResponseType
        {
            public StateQueryWithValidatorsType StateQuery { get; set; }
        }

        private class StateQueryWithValidatorsType
        {
            public ValidatorType[] Validators { get; set; }
        }

        private class ValidatorType
        {
            public string PublicKey { get; set; }
            public long Power { get; set; }
        }
    }
}
