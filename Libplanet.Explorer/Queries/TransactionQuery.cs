#nullable disable
using System;
using Bencodex;
using Bencodex.Types;
using GraphQL;
using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Explorer.GraphTypes;
using Libplanet.Explorer.Interfaces;
using Libplanet.Store;
using Libplanet.Tx;

namespace Libplanet.Explorer.Queries
{
    public class TransactionQuery<T> : ObjectGraphType
        where T : IAction, new()
    {
        private static readonly Codec _codec = new Codec();
        private readonly IBlockChainContext<T> _context;

        // FIXME should be refactored to reduce LoC of constructor.
        #pragma warning disable MEN003
        public TransactionQuery(IBlockChainContext<T> context)
        #pragma warning restore MEN003
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
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
                    int? limit = context.GetArgument<int?>("limit", null);

                    return ExplorerQuery<T>.ListTransactions(signer, involved, desc, offset, limit);
                }
            );

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
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

                    return ExplorerQuery<T>.ListStagedTransactions(
                        signer,
                        involved,
                        desc,
                        offset,
                        limit
                    );
                }
            );

            Field<TransactionType<T>>(
                "transaction",
                arguments: new QueryArguments(
                    new QueryArgument<IdGraphType> { Name = "id" }
                ),
                resolve: context =>
                {
                    var id = TxId.FromHex(context.GetArgument<string>("id"));
                    return ExplorerQuery<T>.GetTransaction(id);
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
                    BlockChain<T> chain = _context.BlockChain;
                    string plainValueString = context.GetArgument<string>("plainValue");
                    IValue plainValue = _codec.Decode(ByteUtil.ParseHex(plainValueString));
                    var action = new T();
                    action.LoadPlainValue(plainValue);

                    var publicKey = new PublicKey(
                        ByteUtil.ParseHex(context.GetArgument<string>("publicKey"))
                    );
                    Address signer = publicKey.ToAddress();
                    long nonce = context.GetArgument<long?>("nonce") ??
                        chain.GetNextTxNonce(signer);
                    Transaction<T> unsignedTransaction =
                        Transaction<T>.CreateUnsigned(
                            nonce,
                            publicKey,
                            chain.Genesis.Hash,
                            new[] { action }
                        );
                    return unsignedTransaction.Serialize(false);
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
                    byte[] signature = ByteUtil.ParseHex(
                        context.GetArgument<string>("signature")
                    );
                    Transaction<T> unsignedTransaction =
                        Transaction<T>.Deserialize(
                            ByteUtil.ParseHex(
                                context.GetArgument<string>("unsignedTransaction")
                            ),
                            false
                        );
                    var signedTransaction = unsignedTransaction.SystemAction is { } sysAction
                        ? new Transaction<T>(
                            metadata: unsignedTransaction,
                            systemAction: sysAction,
                            signature: signature
                        )
                        : new Transaction<T>(
                            metadata: unsignedTransaction,
                            customActions: unsignedTransaction.CustomActions,
                            signature: signature
                        );
                    return ByteUtil.Hex(signedTransaction.Serialize(true));
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
                    BlockChain<T> blockChain = _context.BlockChain;
                    IStore store = _context.Store;
                    TxId txId = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("txId"))
                    );
                    if (!(store.GetFirstTxIdBlockHashIndex(txId) is { } txExecutedBlockHash))
                    {
                        return blockChain.GetStagedTransactionIds().Contains(txId)
                            ? new TxResult(
                                TxStatus.STAGING,
                                null,
                                null,
                                null,
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
                                null,
                                null,
                                null,
                                null);
                    }

                    try
                    {
                        TxExecution execution = blockChain.GetTxExecution(
                            txExecutedBlockHash,
                            txId
                        );
                        Block<T> txExecutedBlock = blockChain[txExecutedBlockHash];

                        var updatedStates = ((TxSuccess)execution).UpdatedStates;
                        var updatedFungibleAssets = ((TxSuccess)execution).UpdatedFungibleAssets;
                        var fungibleAssetsDelta = ((TxSuccess)execution).FungibleAssetsDelta;
                        return execution switch
                        {
                            TxSuccess txSuccess => new TxResult(
                                TxStatus.SUCCESS,
                                txExecutedBlock.Index,
                                txExecutedBlock.Hash.ToString(),
                                null,
                                null,
                                txSuccess.UpdatedStates,
                                txSuccess.FungibleAssetsDelta,
                                txSuccess.UpdatedFungibleAssets,
                                txSuccess.ActionsLogsList
                            ),
                            TxFailure txFailure => new TxResult(
                                TxStatus.FAILURE,
                                txExecutedBlock.Index,
                                txExecutedBlock.Hash.ToString(),
                                txFailure.ExceptionName,
                                txFailure.ExceptionMetadata,
                                null,
                                null,
                                null,
                                txFailure.ActionsLogsList
                            ),
                            _ => throw new NotSupportedException(
                                #pragma warning disable format
                                $"{nameof(execution)} is not expected concrete class."
                                #pragma warning restore format
                            ),
                        };
                    }
                    catch (Exception)
                    {
                        return new TxResult(
                            TxStatus.INVALID,
                            null,
                            null,
                            null,
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
