using System;
using System.Security.Cryptography;
using Bencodex.Types;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action.State;
using Libplanet.Common;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Store.Trie;

namespace Libplanet.Explorer.Queries;

public class RawStateQuery : ObjectGraphType<IBlockChainStates>
{
    public RawStateQuery()
    {
        Name = "RawStateQuery";

        // FIXME: IBlockChainStates does not support direct retrieval of an ITrie.
        Field<NonNullGraphType<TrieType>>(
            "trie",
            description: "Retrieves trie from given state root hash.",
            arguments: new QueryArguments(
                new QueryArgument<HashDigestSHA256Type> { Name = "stateRootHash" }
            ),
            resolve: context => context.Source.GetWorldState(
                context.GetArgument<HashDigest<SHA256>>("stateRootHash")).Trie
        );
    }
}
