using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class RecentStates : Message
    {
        public RecentStates(
            HashDigest<SHA256> blockHash,
            IImmutableDictionary<
                HashDigest<SHA256>,
                IImmutableDictionary<Address, object>
            > blockStates,
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>> stateReferences
        )
        {
            BlockHash = blockHash;

            if (blockStates is null && stateReferences is null)
            {
                BlockStates = null;
                StateReferences = null;
                return;
            }

            if (blockStates is null)
            {
                throw new ArgumentNullException(nameof(blockStates));
            }
            else if (stateReferences is null)
            {
                throw new ArgumentNullException(nameof(stateReferences));
            }

            BlockStates = blockStates;
            StateReferences = stateReferences;
        }

        public RecentStates(NetMQFrame[] frames)
        {
            IEnumerator<NetMQFrame> it = ((IEnumerable<NetMQFrame>)frames).GetEnumerator();

            it.MoveNext();
            BlockHash = new HashDigest<SHA256>(it.Current.Buffer);

            it.MoveNext();
            int accountsCount = it.Current.ConvertToInt32();

            if (accountsCount < 0)
            {
                BlockStates = null;
                StateReferences = null;
                return;
            }

            var stateRefs =
                new Dictionary<Address, IImmutableList<HashDigest<SHA256>>>(accountsCount);

            for (int j = 0; j < accountsCount; j++)
            {
                it.MoveNext();
                var address = new Address(it.Current.Buffer);

                it.MoveNext();
                int stateRefsLength = it.Current.ConvertToInt32();
                List<HashDigest<SHA256>> refs = new List<HashDigest<SHA256>>(stateRefsLength);

                for (int k = 0; k < stateRefsLength; k++)
                {
                    it.MoveNext();
                    refs.Add(new HashDigest<SHA256>(it.Current.Buffer));
                }

                stateRefs[address] = refs.ToImmutableList();
            }

            it.MoveNext();
            int blocksLength = it.Current.ConvertToInt32();  // This is not height!

            var blockStates =
                new Dictionary<HashDigest<SHA256>, IImmutableDictionary<Address, object>>(
                    blocksLength);
            var formatter = new BinaryFormatter();

            for (int j = 0; j < blocksLength; j++)
            {
                it.MoveNext();
                var blockHash = new HashDigest<SHA256>(it.Current.Buffer);

                it.MoveNext();
                int statesLength = it.Current.ConvertToInt32();

                var states = new Dictionary<Address, object>(statesLength);
                for (int k = 0; k < statesLength; k++)
                {
                    it.MoveNext();
                    var address = new Address(it.Current.Buffer);

                    it.MoveNext();
                    using (var stream = new MemoryStream(it.Current.Buffer))
                    {
                        states[address] = formatter.Deserialize(stream);
                    }
                }

                blockStates[blockHash] = states.ToImmutableDictionary();
            }

            BlockStates = blockStates.ToImmutableDictionary();
            StateReferences = stateRefs.ToImmutableDictionary();
        }

        public HashDigest<SHA256> BlockHash { get; }

        public bool Missing => BlockStates is null;

        public IImmutableDictionary<
            HashDigest<SHA256>,
            IImmutableDictionary<Address, object>
        > BlockStates { get; }

        /// <summary>
        /// State references of all available accounts.  Each value has a list of
        /// state references in ascending order; the closest to the genesis block
        /// goes first, and the closest to the tip goes last.
        /// </summary>
        public IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>> StateReferences
        {
            get;
        }

        protected override MessageType Type => MessageType.RecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            /*
            Note that the data frames this property returns omit the very first three frames
            of (message type, public key, signature).  See also Message.ToNetMQMessage() method.

            | 1. BlockHash (32 bytes; SHA-256 digest)
            |   The requested block hash which corresponds to
            |   the given GetRecentStates.BlockHash value.
            +
            | 2. StateReferences.Count (4 bytes; 32-bit integer in big endian)
            |   The number of the accounts of the following state references (3) in the payload.
            |   When Missing = true, this contains -1 and no data frames follow at all.
            +
            | 3. StateReferences [unordered]
            | | 3.1. Key (20 bytes; account address)
            | |   The account address of the following state references (3.3).
            | +
            | | 3.2. Value.Count (4 bytes; 32-bit integer in big endian)
            | |   The length of the following state references (3.3).
            | +
            | | 3.3. Value [descending order; the recent block goes first & the oldest goes last]
            | | | 3.3.1. (32 bytes; SHA-256 digest)
            | | |   A state reference of the account (3.1).
            +
            | 4. BlockStates.Count (4 bytes; 32-bit integer in big endian)
            |   The number of the following block states (7) in the payload.
            +
            | 5. BlockStates [unordered]
            | | 5.1. Key (32 bytes; SHA-256 digest)
            | |   A block hash having the following states delta (7.3).
            | +
            | | 5.2. Value.Count (4 bytes; 32-bit integer in big endian)
            | |   The number of accounts whose states changed in the following delta (7.3).
            | +
            | | 5.3. Value [unordered]
            | | | 5.3.1. Key (20 bytes; account address)
            | | |   An account address having the following updated state (7.3.2).
            | | +
            | | | 5.3.2. Value (varying bytes; .NET binary serialization format)
            | | |   An updated state of the account (7.3.1).
            */
            get
            {
                yield return new NetMQFrame(BlockHash.ToByteArray());
                if (Missing)
                {
                    yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(-1));
                    yield break;
                }

                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(StateReferences.Count)
                );

                foreach (var pair in StateReferences)
                {
                    yield return new NetMQFrame(pair.Key.ToByteArray());

                    IImmutableList<HashDigest<SHA256>> stateRefs = pair.Value;
                    yield return new NetMQFrame(
                        NetworkOrderBitsConverter.GetBytes(stateRefs.Count)
                    );

                    foreach (HashDigest<SHA256> blockHash in stateRefs)
                    {
                        yield return new NetMQFrame(blockHash.ToByteArray());
                    }
                }

                yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(BlockStates.Count));
                var formatter = new BinaryFormatter();
                foreach (var blockState in BlockStates)
                {
                    yield return new NetMQFrame(blockState.Key.ToByteArray());

                    IImmutableDictionary<Address, object> states = blockState.Value;
                    yield return new NetMQFrame(NetworkOrderBitsConverter.GetBytes(states.Count));

                    foreach (var addressState in states)
                    {
                        yield return new NetMQFrame(addressState.Key.ToByteArray());

                        using (var stream = new MemoryStream())
                        {
                            formatter.Serialize(stream, addressState.Value);
                            yield return new NetMQFrame(stream.GetBuffer());
                        }
                    }
                }
            }
        }
    }
}
