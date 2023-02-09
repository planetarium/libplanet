using System;
using System.IO;
using System.Text;
using Bencodex;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Store;
using Libplanet.Store.Trie;

namespace Libplanet.Node
{
    /// <summary>
    /// A helper class for creating a new <see cref="BlockChain{T}"/>.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type.  It should match to
    /// <seealso cref="BlockChain{T}"/> and <see cref="Swarm{T}"/>.</typeparam>
    public static class NodeUtils<T>
        where T : IAction, new()
    {
        /// <summary>
        /// The default <see cref="IBlockPolicy{T}"/>.
        /// </summary>
        public static IBlockPolicy<T> DefaultBlockPolicy { get; } = new BlockPolicy<T>();

        /// <summary>
        /// The default <see cref="IStagePolicy{T}"/>.
        /// </summary>
        public static IStagePolicy<T> DefaultStagePolicy { get; } = new VolatileStagePolicy<T>();

        /// <summary>
        /// The default scheme used for storage.
        /// </summary>
        public static string DefaultStoreUriScheme { get; } = "default+file";

        /// <summary>
        /// Creates an empty genesis <see cref="Block{T}"/> using <see cref="DefaultBlockPolicy"/>
        /// signed with a random <see cref="PrivateKey"/>.
        /// </summary>
        /// <returns>An empty genesis <see cref="Block{T}"/> using <see cref="DefaultBlockPolicy"/>
        /// signed with a random <see cref="PrivateKey"/>.</returns>
        /// <remarks>
        /// A <see cref="PrivateKey"/> used to sign a newly created genesis <see cref="Block{T}"/>
        /// is ephemeral, i.e. lost after its creation.  This method is mostly for developmental
        /// purposes and testing.
        /// </remarks>
        public static Block<T> CreateGenesisBlock()
            => CreateGenesisBlock(new PrivateKey(), DefaultBlockPolicy);

        /// <summary>
        /// Creates an empty genesis <see cref="Block{T}"/> signed with
        /// <paramref name="privateKey"/>.
        /// </summary>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to sign the genesis
        /// <see cref="Block{T}"/> with.</param>
        /// <param name="blockPolicy">The <see cref="IBlockPolicy{T}"/> to use.</param>
        /// <returns>An empty genesis <see cref="Block{T}"/> signed with
        /// <paramref name="privateKey"/>.</returns>
        public static Block<T> CreateGenesisBlock(
            PrivateKey privateKey,
            IBlockPolicy<T> blockPolicy)
        {
            return new BlockContent<T>(
                new BlockMetadata(
                    index: 0,
                    timestamp: DateTimeOffset.UtcNow,
                    publicKey: privateKey.PublicKey,
                    difficulty: 0,
                    totalDifficulty: 0,
                    previousHash: null,
                    txHash: null))
                .Mine()
                .Evaluate(
                    privateKey: privateKey,
                    blockAction: blockPolicy.BlockAction,
                    nativeTokenPredicate: blockPolicy.NativeTokens.Contains,
                    stateStore: new TrieStateStore(new MemoryKeyValueStore()));
        }

        /// <summary>
        /// Loads a saved genesis <see cref="Block{T}"/> from <paramref name="path"/>
        /// using <see cref="DefaultBlockPolicy"/>.
        /// </summary>
        /// <param name="path">The location of which a genesis <see cref="Block{T}"/> is saved.
        /// </param>
        /// <returns>A genesis <see cref="Block{T}"/> loaded from <paramref name="path"/>
        /// using <see cref="DefaultBlockPolicy"/>.
        /// </returns>
        /// <seealso cref="SaveGenesisBlock"/>
        public static Block<T> LoadGenesisBlock(string path)
            => LoadGenesisBlock(path, DefaultBlockPolicy);

        /// <summary>
        /// Loads a saved genesis <see cref="Block{T}"/> from <paramref name="path"/>
        /// using <paramref name="blockPolicy"/>.
        /// </summary>
        /// <param name="path">The location of which a genesis <see cref="Block{T}"/> is saved.
        /// </param>
        /// <param name="blockPolicy">The <see cref="IBlockPolicy{T}"/> to use when loading
        /// a saved genesis <see cref="Block{T}"/>.</param>
        /// <returns>A genesis <see cref="Block{T}"/> loaded from <paramref name="path"/>
        /// using <paramref name="blockPolicy"/>.
        /// </returns>
        /// <remarks>
        /// When loading, <paramref name="blockPolicy"/> should be applicable, i.e. the saved
        /// genesis <see cref="Block{T}"/> should not violate <paramref name="blockPolicy"/>.
        /// Otherwise, this may fail and throw an <see cref="Exception"/>.
        /// </remarks>
        /// <seealso cref="SaveGenesisBlock"/>
        public static Block<T> LoadGenesisBlock(string path, IBlockPolicy<T> blockPolicy)
        {
            using (FileStream stream = File.OpenRead(path))
            {
                Codec codec = new Codec();
                IValue serializedBlock = codec.Decode(stream);
                return BlockMarshaler.UnmarshalBlock<T>(
                    (Bencodex.Types.Dictionary)serializedBlock);
            }
        }

        /// <summary>
        /// Saves a genesis <see cref="Block{T}"/> to <paramref name="path"/>.
        /// </summary>
        /// <param name="path">The location of which <paramref name="genesisBlock"/>
        /// is to be saved. </param>
        /// <param name="genesisBlock">The genesis <see cref="Block{T}"/> to save.</param>
        /// <exception cref="ArgumentException">Thrown when <paramref name="genesisBlock"/>
        /// is not a genesis <see cref="Block{T}"/>, i.e. does not have an index of 0, or
        /// a file already exists at <paramref name="path"/>.</exception>
        public static void SaveGenesisBlock(string path, Block<T> genesisBlock)
        {
            if (genesisBlock.Index != 0L)
            {
                throw new ArgumentException(
                    "A genesis block should have an index of 0.", nameof(genesisBlock));
            }
            else if (File.Exists(path))
            {
                throw new ArgumentException(
                    $"File already exists at {path}.", nameof(path));
            }
            else
            {
                Codec codec = new Codec();
                using (FileStream stream = File.Open(path, FileMode.Create))
                {
                    codec.Encode(genesisBlock.MarshalBlock(), stream);
                }
            }
        }

        /// <summary>
        /// Loads a pair of <see cref="IStore"/> and <see cref="IStateStore"/>
        /// from <paramref name="path"/>.  See <see cref="StoreLoaderAttribute"/>
        /// for more information.
        /// </summary>
        /// <param name="path">The location of which <see cref="IStore"/> and
        /// <see cref="IStateStore"/> are saved.</param>
        /// <returns>A pair of <see cref="IStore"/> and <see cref="IStateStore"/>
        /// loaded from <paramref name="path"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if stores can't be loaded from
        /// <paramref name="path"/>.</exception>
        public static (IStore Store, IStateStore StateStore) LoadStore(string path)
            => StoreLoaderAttribute.LoadStore(new Uri($"{DefaultStoreUriScheme}://{path}"))
                ?? throw new ArgumentException($"Invalid path was given: {path}", nameof(path));

        /// <summary>
        /// Loads a pair of <see cref="IStore"/> and <see cref="IStateStore"/>
        /// with <paramref name="uri"/>.  See <see cref="StoreLoaderAttribute"/>
        /// for more information.
        /// </summary>
        /// <param name="uri">The <see cref="Uri"/> to use when locating and loading
        /// <see cref="IStore"/> and <see cref="IStateStore"/>.</param>
        /// <returns>A pair of <see cref="IStore"/> and <see cref="IStateStore"/>
        /// loaded with <paramref name="uri"/>.</returns>
        /// <exception cref="ArgumentException">Thrown if stores can't be loaded with
        /// <paramref name="uri"/>.</exception>
        /// <seealso cref="StoreLoaderAttribute"/>.
        public static (IStore Store, IStateStore StateStore) LoadStore(Uri uri)
            => StoreLoaderAttribute.LoadStore(uri)
                ?? throw new ArgumentException($"Invalid URI was given: {uri}", nameof(uri));

        /// <summary>
        /// Loads a <see cref="PrivateKey"/> from <paramref name="path"/>.
        /// </summary>
        /// <param name="path">The location of which a <see cref="PrivateKey"/> is saved.</param>
        /// <returns>A <see cref="PrivateKey"/> loaded from <paramref name="path"/>.</returns>
        public static PrivateKey LoadPrivateKey(string path)
        {
            using (StreamReader stream = new StreamReader(path, Encoding.UTF8))
            {
                string? privateKeyString = stream.ReadLine();
                return new PrivateKey(ByteUtil.ParseHex(privateKeyString
                    ?? throw new ArgumentNullException(
                        nameof(privateKeyString), "Expected a string")));
            }
        }

        /// <summary>
        /// Saves a <see cref="PrivateKey"/> from <paramref name="path"/>.
        /// </summary>
        /// <param name="path">The location of which a <see cref="PrivateKey"/> is to be saved.
        /// </param>
        /// <param name="privateKey">The <see cref="PrivateKey"/> to save.</param>
        /// <exception cref="ArgumentException">Thrown when a file already exists
        /// at <paramref name="path"/>.</exception>
        public static void SavePrivateKey(string path, PrivateKey privateKey)
        {
            if (File.Exists(path))
            {
                throw new ArgumentException(
                    $"File already exists at {path}.", nameof(path));
            }
            else
            {
                using (StreamWriter stream = new StreamWriter(path, false, Encoding.UTF8))
                {
                    stream.WriteLine(ByteUtil.Hex(privateKey.ByteArray));
                }
            }
        }
    }
}
