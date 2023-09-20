#nullable disable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Types;
using Libplanet.Blockchain;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;
using Libplanet.Types.Blocks;
using Libplanet.Types.Tx;

namespace Libplanet.Explorer.Queries
{
    public class TransactionQuery : ObjectGraphType
    {
        private static readonly Codec _codec = new Codec();
        private readonly IBlockChainContext _context;

        // FIXME should be refactored to reduce LoC of constructor.
        #pragma warning disable MEN003
        public TransactionQuery(IBlockChainContext context)
        #pragma warning restore MEN003
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType>>>>(
                "transactions",
                arguments: new QueryArguments(
                    new QueryArgument<AddressType>
                    {
                        Name = "signer",
                        DefaultValue = null,
                    },
                    new QueryArgument<AddressType>
                    {
                        Name = "involvedAddress",
                        DefaultValue = null,
                    },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" }
                ),
                resolve: context =>
                {
                    var signer = context.GetArgument<Address?>("signer");
                    var involved = context.GetArgument<Address?>("involvedAddress");
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit");

                    return ExplorerQuery.ListTransactions(signer, involved, desc, offset, limit);
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType>>>>(
                "stagedTransactions",
                arguments: new QueryArguments(
                    new QueryArgument<AddressType>
                    {
                        Name = "signer",
                        DefaultValue = null,
                    },
                    new QueryArgument<AddressType>
                    {
                        Name = "involvedAddress",
                        DefaultValue = null,
                    },
                    new QueryArgument<BooleanGraphType>
                    {
                        Name = "desc",
                        DefaultValue = false,
                    },
                    new QueryArgument<IntGraphType>
                    {
                        Name = "offset",
                        DefaultValue = 0,
                    },
                    new QueryArgument<IntGraphType> { Name = "limit" }
                ),
                resolve: context =>
                {
                    var signer = context.GetArgument<Address?>("signer");
                    var involved = context.GetArgument<Address?>("involvedAddress");
                    bool desc = context.GetArgument<bool>("desc");
                    int offset = context.GetArgument<int>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);

                    return ExplorerQuery.ListStagedTransactions(
                        signer,
                        involved,
                        desc,
                        offset,
                        limit
                    );
                }
            );

            Field<TransactionType>(
                "transaction",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = TxId.FromHex(context.GetArgument<string>("id"));
                    return ExplorerQuery.GetTransaction(id);
                }
            );

            Field<NonNullGraphType<ByteStringType>>(
                name: "unsignedTransaction",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "publicKey",
                        Description = "The hexadecimal string of public key for Transaction.",
                    },
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "plainValue",
                        Description = "The hexadecimal string of plain value for Action.",
                    },
                    new QueryArgument<LongGraphType>
                    {
                        Name = "nonce",
                        Description = "The nonce for Transaction.",
                    }
                ),
                resolve: context =>
                {
                    BlockChain chain = _context.BlockChain;
                    string plainValueString = context.GetArgument<string>("plainValue");
                    IValue plainValue = _codec.Decode(ByteUtil.ParseHex(plainValueString));
                    var publicKey = new PublicKey(
                        ByteUtil.ParseHex(context.GetArgument<string>("publicKey"))
                    );
                    Address signer = publicKey.ToAddress();
                    long nonce = context.GetArgument<long?>("nonce") ??
                        chain.GetNextTxNonce(signer);
                    var sigMeta = new TxSigningMetadata(publicKey, nonce);
                    var invoice = new TxInvoice(
                        chain.Genesis.Hash,
                        actions: new TxActionList(new List<IValue>
                        {
                            plainValue,
                        }));
                    var unsignedTx = new UnsignedTx(invoice, sigMeta);
                    return unsignedTx.SerializeUnsignedTx();
                }
            );

            Field<NonNullGraphType<LongGraphType>>(
                name: "nextNonce",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<AddressType>>
                    {
                        Name = "address",
                        Description = "Address of the account to get the next tx nonce.",
                    }
                ),
                resolve: context =>
                    _context.BlockChain.GetNextTxNonce(context.GetArgument<Address>("address"))
            );

            Field<NonNullGraphType<StringGraphType>>(
                name: "bindSignature",
                #pragma warning disable MEN002
                description: "Attach the given signature to the given transaction and return tx as hexadecimal",
                #pragma warning restore MEN002
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "unsignedTransaction",
                        #pragma warning disable MEN002
                        Description = "The hexadecimal string of unsigned transaction to attach the given signature.",
                        #pragma warning restore MEN002
                    },
                    new QueryArgument<NonNullGraphType<StringGraphType>>
                    {
                        Name = "signature",
                        #pragma warning disable MEN002
                        Description = "The hexadecimal string of the given unsigned transaction.",
                        #pragma warning restore MEN002
                    }
                ),
                resolve: context =>
                {
                    ImmutableArray<byte> signature = ByteUtil.ParseHexToImmutable(
                        context.GetArgument<string>("signature")
                    );
                    IUnsignedTx unsignedTx = TxMarshaler.DeserializeUnsignedTx(
                        ByteUtil.ParseHex(context.GetArgument<string>("unsignedTransaction"))
                    );
                    var signedTransaction = unsignedTx.Verify(signature);
                    return ByteUtil.Hex(signedTransaction.Serialize());
                }
            );

            Field<NonNullGraphType<TxResultType>>(
                name: "transactionResult",
                arguments: new QueryArguments(
                    new QueryArgument<NonNullGraphType<IdGraphType>>
                    {
                        Name = "txId",
                        Description = "transaction id.",
                    }
                ),
                resolve: context =>
                {
                    var blockChain = _context.BlockChain;
                    var store = _context.Store;
                    var index = _context.Index;
                    var txId = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("txId"))
                    );
                    BlockHash? txExecutedBlockHash = null;
                    if (
                        index is not null
                        && index.TryGetContainedBlockHashById(txId, out var hash))
                    {
                        txExecutedBlockHash = hash;
                    }
                    else if (
                        index is null
                        && store.GetFirstTxIdBlockHashIndex(txId)
                            is { } txExecutedBlockHashFromStore)
                    {
                        txExecutedBlockHash = txExecutedBlockHashFromStore;
                    }

                    if (txExecutedBlockHash is not { } txExecutedBlockHashValue)
                    {
                        return blockChain.GetStagedTransactionIds().Contains(txId)
                            ? new TxResult(
                                TxStatus.STAGING,
                                null,
                                null,
                                null,
                                null,
                                null)
                            : new TxResult(
                                TxStatus.INVALID,
                                null,
                                null,
                                null,
                                null,
                                null);
                    }

                    try
                    {
                        var execution = blockChain.GetTxExecution(
                            txExecutedBlockHashValue,
                            txId
                        );
                        var txExecutedBlock = blockChain[txExecutedBlockHashValue];

                        return new TxResult(
                            execution.Fail ? TxStatus.FAILURE : TxStatus.SUCCESS,
                            txExecutedBlock.Index,
                            txExecutedBlock.Hash.ToString(),
                            null,
                            null,
                            null);
                    }
                    catch (Exception)
                    {
                        return new TxResult(
                            TxStatus.INVALID,
                            null,
                            null,
                            null,
                            null,
                            null
                        );
                    }
                }
            );

            Name = "TransactionQuery";
        }
    }
}
