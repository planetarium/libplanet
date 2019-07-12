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
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>> stateReferences,
            IImmutableDictionary<Address, long> txNonces
        )
        {
            BlockHash = blockHash;

            if (blockStates is null && stateReferences is null && txNonces is null)
            {
                BlockStates = null;
                StateReferences = null;
                TxNonces = null;
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
            else if (txNonces is null)
            {
                throw new ArgumentNullException(nameof(txNonces));
            }

            BlockStates = blockStates;
            StateReferences = stateReferences;
            TxNonces = txNonces;
        }

        public RecentStates(NetMQFrame[] frames)
        {
            IEnumerator<NetMQFrame> it = ((IEnumerable<NetMQFrame>)frames).GetEnumerator();

            it.MoveNext();
            BlockHash = new HashDigest<SHA256>(it.Current.Buffer);

            it.MoveNext();
            int accountsCount = BitConverter.ToInt32(it.Current.Buffer, 0);

            if (accountsCount < 0)
            {
                BlockStates = null;
                StateReferences = null;
                TxNonces = null;
                return;
            }

            var stateRefs =
                new Dictionary<Address, IImmutableList<HashDigest<SHA256>>>(accountsCount);

            for (int j = 0; j < accountsCount; j++)
            {
                it.MoveNext();
                var address = new Address(it.Current.Buffer);

                it.MoveNext();
                int stateRefsLength = BitConverter.ToInt32(it.Current.Buffer, 0);
                List<HashDigest<SHA256>> refs = new List<HashDigest<SHA256>>(stateRefsLength);

                for (int k = 0; k < stateRefsLength; k++)
                {
                    it.MoveNext();
                    refs.Add(new HashDigest<SHA256>(it.Current.Buffer));
                }

                stateRefs[address] = refs.ToImmutableList();
            }

            it.MoveNext();
            int signersCount = BitConverter.ToInt32(it.Current.Buffer, 0);

            var txNonces = new Dictionary<Address, long>(accountsCount);

            for (int j = 0; j < signersCount; j++)
            {
                it.MoveNext();
                var address = new Address(it.Current.Buffer);

                it.MoveNext();
                txNonces[address] = BitConverter.ToInt64(it.Current.Buffer, 0);
            }

            it.MoveNext();
            int blocksLength = BitConverter.ToInt32(it.Current.Buffer, 0);  // This is not height!

            var blockStates =
                new Dictionary<HashDigest<SHA256>, IImmutableDictionary<Address, object>>(
                    blocksLength);
            var formatter = new BinaryFormatter();

            for (int j = 0; j < blocksLength; j++)
            {
                it.MoveNext();
                var blockHash = new HashDigest<SHA256>(it.Current.Buffer);

                it.MoveNext();
                int statesLength = BitConverter.ToInt32(it.Current.Buffer, 0);

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
            TxNonces = txNonces.ToImmutableDictionary();
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

        public IImmutableDictionary<Address, long> TxNonces { get; }

        protected override MessageType Type => MessageType.RecentStates;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(BlockHash.ToByteArray());
                if (Missing)
                {
                    yield return new NetMQFrame(BitConverter.GetBytes(-1));
                    yield break;
                }

                yield return new NetMQFrame(BitConverter.GetBytes(StateReferences.Count));

                foreach (var pair in StateReferences)
                {
                    yield return new NetMQFrame(pair.Key.ToByteArray());

                    IImmutableList<HashDigest<SHA256>> stateRefs = pair.Value;
                    yield return new NetMQFrame(BitConverter.GetBytes(stateRefs.Count));

                    foreach (HashDigest<SHA256> blockHash in stateRefs)
                    {
                        yield return new NetMQFrame(blockHash.ToByteArray());
                    }
                }

                yield return new NetMQFrame(BitConverter.GetBytes(TxNonces.Count));

                foreach (var pair in TxNonces)
                {
                    yield return new NetMQFrame(pair.Key.ToByteArray());
                    yield return new NetMQFrame(BitConverter.GetBytes(pair.Value));
                }

                yield return new NetMQFrame(BitConverter.GetBytes(BlockStates.Count));
                var formatter = new BinaryFormatter();
                foreach (var blockState in BlockStates)
                {
                    yield return new NetMQFrame(blockState.Key.ToByteArray());

                    IImmutableDictionary<Address, object> states = blockState.Value;
                    yield return new NetMQFrame(BitConverter.GetBytes(states.Count));

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
