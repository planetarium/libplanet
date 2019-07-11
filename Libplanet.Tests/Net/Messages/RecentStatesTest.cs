using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Cryptography;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class RecentStatesTest
    {
        [Fact]
        public void Constructor()
        {
            var emptyBlockStates = ImmutableDictionary<
                HashDigest<SHA256>,
                IImmutableDictionary<Address, object>
            >.Empty;
            Assert.Throws<ArgumentNullException>(() =>
                new RecentStates(
                    default,
                    null,
                    ImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>.Empty,
                    ImmutableDictionary<Address, long>.Empty
                )
            );
            Assert.Throws<ArgumentNullException>(() =>
                new RecentStates(
                    default,
                    emptyBlockStates,
                    null,
                    ImmutableDictionary<Address, long>.Empty
                )
            );
            Assert.Throws<ArgumentNullException>(() =>
                new RecentStates(
                    default,
                    emptyBlockStates,
                    ImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>.Empty,
                    null
                )
            );
            Address a = new PrivateKey().PublicKey.ToAddress();
            var blockStates = emptyBlockStates.Add(
                default,
                ImmutableDictionary<Address, object>.Empty
            );
        }

        [Fact]
        public void DataFrames()
        {
            ISet<Address> accounts = Enumerable.Repeat(0, 5).Select(_ =>
                new PrivateKey().PublicKey.ToAddress()
            ).ToHashSet();
            int accountsCount = accounts.Count;
            ISet<Address> signers = Enumerable.Repeat(0, 10).Select(_ =>
                new PrivateKey().PublicKey.ToAddress()
            ).ToHashSet();
            int signersCount = signers.Count;
            var privKey = new PrivateKey();

            RandomNumberGenerator rng = RandomNumberGenerator.Create();
            var randomBytesBuffer = new byte[HashDigest<SHA256>.Size];
            (HashDigest<SHA256>, IImmutableDictionary<Address, object>)[] blockStates =
                accounts.SelectMany(address =>
                {
                    rng.GetNonZeroBytes(randomBytesBuffer);
                    var blockHash1 = new HashDigest<SHA256>(randomBytesBuffer);
                    rng.GetNonZeroBytes(randomBytesBuffer);
                    var blockHash2 = new HashDigest<SHA256>(randomBytesBuffer);
                    IImmutableDictionary<Address, object> emptyState =
                        ImmutableDictionary<Address, object>.Empty;
                    return new[]
                    {
                        (blockHash1, emptyState.Add(address, $"A:{blockHash1}:{address}")),
                        (blockHash2, emptyState.Add(address, $"B:{blockHash2}:{address}")),
                    };
                }).ToArray();
            IImmutableDictionary<HashDigest<SHA256>, IImmutableDictionary<Address, object>>
                compressedBlockStates = blockStates.Where(
                    (_, i) => i % 2 == 1
                ).ToImmutableDictionary(p => p.Item1, p => p.Item2);
            HashDigest<SHA256> blockHash = blockStates.Last().Item1;

            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>> stateRefs =
                accounts.Select(a =>
                {
                    var states = blockStates
                        .Where(pair => pair.Item2.ContainsKey(a))
                        .Select(pair => pair.Item1)
                        .ToImmutableList();
                    return new KeyValuePair<Address, IImmutableList<HashDigest<SHA256>>>(a, states);
                }).ToImmutableDictionary();
            IImmutableDictionary<Address, long> txNonces = signers.Select(a =>
                new KeyValuePair<Address, long>(a, 1)
            ).ToImmutableDictionary();

            RecentStates reply = new RecentStates(
                blockHash,
                compressedBlockStates,
                stateRefs,
                txNonces
            );
            NetMQMessage msg = reply.ToNetMQMessage(privKey);
            const int headerSize = 3;  // type, pubkey, sig
            int stateRefsOffset = headerSize + 1;
            int txNoncesOffset = stateRefsOffset + 1 + (accountsCount * 4);
            int blockStatesOffset = txNoncesOffset + 1 + (signersCount * 2);
            Assert.Equal(
               blockStatesOffset + 1 + (compressedBlockStates.Count * 4),
               msg.FrameCount
            );
            Assert.Equal(blockHash, new HashDigest<SHA256>(msg[headerSize].Buffer));
            Assert.Equal(accountsCount, BitConverter.ToInt32(msg[headerSize + 1].Buffer, 0));
            for (int i = 0; i < accountsCount; i++)
            {
                int offset = stateRefsOffset + 1 + (i * 4);
                Assert.Equal(Address.Size, msg[offset].BufferSize);
                Address address = new Address(msg[offset].Buffer);
                Assert.Contains(address, accounts);

                Assert.Equal(4, msg[offset + 1].BufferSize);
                Assert.Equal(2, BitConverter.ToInt32(msg[offset + 1].Buffer, 0));

                Assert.Equal(HashDigest<SHA256>.Size, msg[offset + 2].BufferSize);
                Assert.Equal(stateRefs[address][0], new HashDigest<SHA256>(msg[offset + 2].Buffer));
                Assert.Equal(HashDigest<SHA256>.Size, msg[offset + 3].BufferSize);
                Assert.Equal(stateRefs[address][1], new HashDigest<SHA256>(msg[offset + 3].Buffer));

                accounts.Remove(address);
            }

            Assert.Empty(accounts);
            Assert.Equal(signersCount, BitConverter.ToInt32(msg[txNoncesOffset].Buffer, 0));

            for (int i = 0; i < signersCount; i++)
            {
                int offset = txNoncesOffset + 1 + (i * 2);
                Assert.Equal(Address.Size, msg[offset].BufferSize);
                Address address = new Address(msg[offset].Buffer);
                Assert.Contains(address, signers);

                Assert.Equal(8, msg[offset + 1].BufferSize);
                Assert.Equal(txNonces[address], BitConverter.ToInt64(msg[offset + 1].Buffer, 0));

                signers.Remove(address);
            }

            Assert.Empty(signers);
            Assert.Equal(
                compressedBlockStates.Count,
                BitConverter.ToInt32(msg[blockStatesOffset].Buffer, 0)
            );

            var formatter = new BinaryFormatter();
            for (int i = 0; i < compressedBlockStates.Count; i++)
            {
                int offset = blockStatesOffset + 1 + (i * 4);

                var hash = new HashDigest<SHA256>(msg[offset].Buffer);
                Assert.Contains(hash, compressedBlockStates);
                Assert.Equal(1, BitConverter.ToInt32(msg[offset + 1].Buffer, 0));

                var addr = new Address(msg[offset + 2].Buffer);
                Assert.Equal(compressedBlockStates[hash].Keys.First(), addr);

                using (var stream = new MemoryStream())
                {
                    stream.Write(msg[offset + 3].Buffer, 0, msg[offset + 3].BufferSize);
                    stream.Seek(0, SeekOrigin.Begin);
                    string state = (string)formatter.Deserialize(stream);
                    Assert.Equal($"B:{hash}:{addr}", state);
                }
            }

            msg = reply.ToNetMQMessage(privKey);
            var parsed = new RecentStates(msg.Skip(headerSize).ToArray());
            Assert.Equal(blockHash, parsed.BlockHash);
            Assert.False(parsed.Missing);
            Assert.Equal(compressedBlockStates, parsed.BlockStates);
            Assert.Equal(stateRefs, parsed.StateReferences);
            Assert.Equal(txNonces, parsed.TxNonces);

            RecentStates missing = new RecentStates(blockHash, null, null, null);
            msg = missing.ToNetMQMessage(privKey);
            Assert.Equal(blockHash, new HashDigest<SHA256>(msg[headerSize].Buffer));
            Assert.Equal(-1, BitConverter.ToInt32(msg[headerSize + 1].Buffer, 0));

            parsed = new RecentStates(missing.ToNetMQMessage(privKey).Skip(headerSize).ToArray());
            Assert.Equal(blockHash, parsed.BlockHash);
            Assert.True(parsed.Missing);
        }
    }
}
