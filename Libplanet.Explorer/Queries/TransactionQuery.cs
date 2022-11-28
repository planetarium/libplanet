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
                "transactions")
                .Argument<Address>(
                    "signer",
                    true,
                    "Filter by signer (if given).",
                    arg => arg.DefaultValue = null)
                .Argument<Address>(
                    "involvedAddress",
                    true,
                    "Filter by involved addresses (if given).",
                    arg => arg.DefaultValue = null)
                .Argument<bool>(
                    "desc",
                    true,
                    arg => arg.DefaultValue = false)
                .Argument<int>("offset", false, arg => arg.DefaultValue = 0)
                .Argument<int>("limit", true, arg => arg.DefaultValue = null)
                .Resolve(context =>
                {
                    var signer = context.GetArgument<Address?>("signer");
                    var involved = context.GetArgument<Address?>("involvedAddress");
                    bool desc = context.GetArgument<bool>("desc");
                    long offset = context.GetArgument<long>("offset");
                    int? limit = context.GetArgument<int?>("limit", null);

                    return ExplorerQuery<T>.ListTransactions(signer, involved, desc, offset, limit);
                });

            Field<NonNullGraphType<ListGraphType<NonNullGraphType<TransactionType<T>>>>>(
                "stagedTransactions")
                .Argument<Address>("signer", false, arg => arg.DefaultValue = null)
                .Argument<Address>("involvedAddress", false, arg => arg.DefaultValue = null)
                .Argument<bool>("desc", false, arg => arg.DefaultValue = false)
                .Argument<int>("offset", false, arg => arg.DefaultValue = 0)
                .Argument<int>("limit", true, arg => arg.DefaultValue = null)
                .Resolve(context =>
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
                });

            Field<TransactionType<T>>("transaction")
                .Argument<IdGraphType>("id")
                .Resolve(context =>
                {
                    var id = new TxId(
                        ByteUtil.ParseHex(context.GetArgument<string>("id"))
                    );
                    return ExplorerQuery<T>.GetTransaction(id);
                });

            Field<NonNullGraphType<ByteStringType>>("unsignedTransaction")
                .Argument<string>(
                    "publicKey",
                    false,
                    "The hexadecimal string of public key for transaction.")
                .Argument<string>(
                    "plainValue",
                    false,
                    "The hexadecimal string of plain value for action.")
                .Argument<long>("nonce", false, "The nonce for transaction.")
                .Resolve(context =>
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
                });

            Field<NonNullGraphType<LongGraphType>>("nextNonce")
                .Argument<Address>(
                    "address",
                    false,
                    "Address of the account to get the next tx nonce.")
                .Resolve(ctx =>
                    _context.BlockChain.GetNextTxNonce(ctx.GetArgument<Address>("address")));

            Field<NonNullGraphType<StringGraphType>>("bindSignature")
                .Description(
                    "Attach the given signature to the given transaction and return tx " +
                    "as hexadecimal")
                .Argument<string>(
                    "unsignedTransaction",
                    false,
                    "The hexadecimal string of unsigned transaction to attach the given signature.")
                .Argument<string>(
                    "signature",
                    false,
                    "The hexadecimal string of the given unsigned transaction.")
                .Resolve(context =>
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
                });

            Field<NonNullGraphType<TxResultType>>("transactionResult")
                .Argument<IdGraphType>("txId", description: "A transaction ID.")
                .Resolve(context =>
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
                                null)
                            : new TxResult(
                                TxStatus.INVALID,
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
                                txSuccess.UpdatedFungibleAssets
                            ),
                            TxFailure txFailure => new TxResult(
                                TxStatus.FAILURE,
                                txExecutedBlock.Index,
                                txExecutedBlock.Hash.ToString(),
                                txFailure.ExceptionName,
                                txFailure.ExceptionMetadata,
                                null,
                                null,
                                null
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
                            null
                        );
                    }
                });

            Name = "TransactionQuery";
        }
    }
}
