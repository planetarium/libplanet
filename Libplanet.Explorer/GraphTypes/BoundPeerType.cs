using GraphQL.Types;
using Libplanet.Net;
using Libplanet.Store;

namespace Libplanet.Explorer.GraphTypes
{
    public class BoundPeerType : ObjectGraphType<BoundPeer>
    {
        public BoundPeerType()
        {
            // We need multiple row of description for clearer, not confusing explanation of field.
            Field<NonNullGraphType<PublicKeyType>>(
                "publicKey",
                description: "The public key of the peer.",
                resolve: ctx => ctx.Source.PublicKey
            );
            Field<NonNullGraphType<StringGraphType>>(
                name: "endPoint",
                description: "The endpoint of the peer.",
                resolve: ctx => ctx.Source.EndPoint.ToString()
            );
            Field<StringGraphType>(
                name: "publicIpAddress",
                description: "The address of the miner.",
                resolve: ctx => ctx.Source.PublicIPAddress?.ToString()
            );

            Name = "BoundPeer";
        }
    }
}
