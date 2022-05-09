using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Reflection;
using Libplanet.Crypto;
using Libplanet.Store;
using Serilog;
using Xunit;
using Xunit.Abstractions;
using BTypes = Bencodex.Types;

namespace Libplanet.Tests.Action
{
    public class DataModelTest
    {
        private readonly ILogger _logger;

        public DataModelTest(ITestOutputHelper output)
        {
            Log.Logger = _logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output)
                .CreateLogger()
                .ForContext<ActionEvaluationTest>();
        }

        [Fact]
        public void Encode()
        {
            RootModel root = new RootModel();

            BTypes.Dictionary rootEncoded = root.Encode();
            Assert.Equal(
                root.Bool,
                ((BTypes.Boolean)rootEncoded[nameof(root.Bool)]).Value);
            Assert.Equal(
                root.Int,
                (int)((BTypes.Integer)rootEncoded[nameof(root.Int)]).Value);
            Assert.Equal(
                root.Long,
                (long)((BTypes.Integer)rootEncoded[nameof(root.Long)]).Value);
            Assert.Equal(
                root.BigInt,
                ((BTypes.Integer)rootEncoded[nameof(root.BigInt)]).Value);
            Assert.Equal(
                root.Bytes,
                ((BTypes.Binary)rootEncoded[nameof(root.Bytes)]).ToByteArray());
            Assert.Equal(
                root.Addr,
                new Address(((BTypes.Binary)rootEncoded[nameof(root.Addr)]).ToByteArray()));
            Assert.Equal(
                root.Str,
                ((BTypes.Text)rootEncoded[nameof(root.Str)]).Value);
            Assert.Empty(
                (BTypes.List)rootEncoded[nameof(root.ListEmpty)]);
            Assert.Equal(
                root.ListBool,
                ((BTypes.List)rootEncoded[nameof(root.ListBool)])
                    .Select(x => ((BTypes.Boolean)x).Value));
            Assert.Equal(
                root.ListInt,
                ((BTypes.List)rootEncoded[nameof(root.ListInt)])
                    .Select(x => (int)((BTypes.Integer)x).Value));
            Assert.Equal(
                root.ListLong,
                ((BTypes.List)rootEncoded[nameof(root.ListLong)])
                    .Select(x => (long)((BTypes.Integer)x).Value));
            Assert.Equal(
                root.ListBigInt,
                ((BTypes.List)rootEncoded[nameof(root.ListBigInt)])
                    .Select(x => ((BTypes.Integer)x).Value));
            Assert.Equal(
                root.ListBytes,
                ((BTypes.List)rootEncoded[nameof(root.ListBytes)])
                    .Select(x => ((BTypes.Binary)x).ByteArray));
            Assert.Equal(
                root.ListAddr,
                ((BTypes.List)rootEncoded[nameof(root.ListAddr)])
                    .Select(x => new Address(((BTypes.Binary)x).ByteArray)));
            Assert.Equal(
                root.ListStr,
                ((BTypes.List)rootEncoded[nameof(root.ListStr)])
                    .Select(x => ((BTypes.Text)x).Value));
            Assert.Empty(
                (BTypes.Dictionary)rootEncoded[nameof(root.DictEmpty)]);

            var dictionaryBytesBool =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesBool)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, bool>(
                        ((BTypes.Binary)x.Key).ByteArray, ((BTypes.Boolean)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesBool)
            {
                Assert.Equal(kv.Value, dictionaryBytesBool[kv.Key]);
            }

            var dictionaryBytesInt =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesInt)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, int>(
                        ((BTypes.Binary)x.Key).ByteArray, (int)((BTypes.Integer)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesInt)
            {
                Assert.Equal(kv.Value, dictionaryBytesInt[kv.Key]);
            }

            var dictionaryBytesLong =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesLong)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, long>(
                        ((BTypes.Binary)x.Key).ByteArray, (long)((BTypes.Integer)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesLong)
            {
                Assert.Equal(kv.Value, dictionaryBytesLong[kv.Key]);
            }

            var dictionaryBytesBigInteger =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesBigInt)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, BigInteger>(
                        ((BTypes.Binary)x.Key).ByteArray, ((BTypes.Integer)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesBigInt)
            {
                Assert.Equal(kv.Value, dictionaryBytesBigInteger[kv.Key]);
            }

            var dictionaryBytesBytes =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesBytes)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, ImmutableArray<byte>>(
                        ((BTypes.Binary)x.Key).ByteArray, ((BTypes.Binary)x.Value).ByteArray))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesBytes)
            {
                Assert.Equal(kv.Value, dictionaryBytesBytes[kv.Key]);
            }

            var dictionaryBytesAddr =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesAddr)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, Address>(
                        ((BTypes.Binary)x.Key).ByteArray,
                        new Address(((BTypes.Binary)x.Value).ByteArray)))
                .ToImmutableDictionary();
            foreach (var kv in root.DictBytesAddr)
            {
                Assert.Equal(kv.Value, dictionaryBytesAddr[kv.Key]);
            }

            var dictionaryBytesString =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictBytesStr)])
                    .Select(x => new KeyValuePair<ImmutableArray<byte>, string>(
                        ((BTypes.Binary)x.Key).ByteArray, ((BTypes.Text)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictBytesStr)
            {
                Assert.Equal(kv.Value, dictionaryBytesString[kv.Key]);
            }

            var dictionaryAddrStr =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictAddrStr)])
                    .Select(x => new KeyValuePair<Address, string>(
                        new Address(((BTypes.Binary)x.Key).ByteArray),
                        ((BTypes.Text)x.Value).Value))
                .ToImmutableDictionary();
            foreach (var kv in root.DictAddrStr)
            {
                Assert.Equal(kv.Value, dictionaryAddrStr[kv.Key]);
            }

            var dictionaryStringString =
                ((BTypes.Dictionary)rootEncoded[nameof(root.DictStrStr)])
                    .Select(x => new KeyValuePair<string, string>(
                        ((BTypes.Text)x.Key).Value, ((BTypes.Text)x.Value).Value))
                    .ToImmutableDictionary();
            foreach (var kv in root.DictStrStr)
            {
                Assert.Equal(kv.Value, dictionaryStringString[kv.Key]);
            }

            // Although not entirely strict, for the most part, we only check
            // randomly generated guid string still matches to assume all has gone well.
            Assert.Equal(
                root.Mid.Str,
                ((BTypes.Text)(
                    (BTypes.Dictionary)rootEncoded[nameof(root.Mid)]
                )[nameof(root.Mid.Str)]).Value);
            Assert.Equal(
                root.Leaf.Str,
                ((BTypes.Text)(
                    (BTypes.Dictionary)rootEncoded[nameof(root.Leaf)]
                )[nameof(root.Leaf.Str)]).Value);
            Assert.Equal(
                root.Mid.Leaf.Str,
                ((BTypes.Text)(
                    (BTypes.Dictionary)(
                        (BTypes.Dictionary)rootEncoded[nameof(root.Mid)]
                    )[nameof(root.Mid.Leaf)]
                )[nameof(root.Mid.Leaf.Str)]).Value);
        }

        [Fact]
        public void Decode()
        {
            // This is written under a strong assumption that a sufficient amount of check
            // is done under Encode() test.
            RootModel root = new RootModel();
            MidModel mid = new MidModel();
            LeafModel leaf = new LeafModel();

            Assert.Equal(
                root.Encode(),
                ((RootModel)DataModel.Decode<RootModel>(root.Encode())).Encode());
            Assert.Equal(
                mid.Encode(),
                ((MidModel)DataModel.Decode<MidModel>(mid.Encode())).Encode());
            Assert.Equal(
                leaf.Encode(),
                ((LeafModel)DataModel.Decode<LeafModel>(leaf.Encode())).Encode());
        }

        [Fact]
        public void EncodeFromBadTypes()
        {
            Assert.Throws<NotSupportedException>(
                () => new HasNullableBoolType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableIntType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableLongType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableBigIntegerType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableBytesType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableAddressType().Encode());

            Assert.Throws<NotSupportedException>(
                () => new HasNullableListValueType().Encode());
            Assert.Throws<ArgumentException>(
                () => new HasInvalidListValueType().Encode());
            Assert.Throws<ArgumentException>(
                () => new HasInvalidDictionaryKeyType().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullableDictionaryValueType().Encode());
            Assert.Throws<ArgumentException>(
                () => new HasInvalidDictionaryValueType().Encode());
        }

        [Fact]
        public void EncodeFromBadValues()
        {
            Assert.Throws<NotSupportedException>(
                () => new HasNullReferencePropertyValue().Encode());
            Assert.Throws<NotSupportedException>(
                () => new HasNullReferenceListValue().Encode());
        }

        [Fact]
        public void DecodeFromBadIValues()
        {
            System.Random random = new System.Random();
            bool randBool = random.NextDouble() < 0.5;
            int randInt = random.Next();
            string randStr = Guid.NewGuid().ToString();
            ImmutableArray<byte> randBytes = Guid.NewGuid().ToByteArray().ToImmutableArray();

            BTypes.Dictionary encoded;
            Exception exception;

            // Try assigning null.
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableBoolType.Value), BTypes.Null.Value);
            exception = Assert.Throws<TargetInvocationException>(
                () => DataModel.Decode<HasNullableBoolType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullReferencePropertyValue.Value), BTypes.Null.Value);
            exception = Assert.Throws<TargetInvocationException>(
                () => DataModel.Decode<HasNullReferencePropertyValue>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());

            // Sanity check
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(IntWrapper.Value), (BTypes.IValue)new BTypes.Integer(randInt));
            IntWrapper decodedIntWrapper
                = (IntWrapper)DataModel.Decode<IntWrapper>(encoded);
            Assert.Equal(randInt, decodedIntWrapper.Value);
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(StrWrapper.Value), (BTypes.IValue)new BTypes.Text(randStr));
            StrWrapper decodedStrWrapper
                = (StrWrapper)DataModel.Decode<StrWrapper>(encoded);
            Assert.Equal(randStr, decodedStrWrapper.Value);
            encoded = BTypes.Dictionary.Empty
                .Add(
                    nameof(ListIntWrapper.Value),
                    (BTypes.IValue)BTypes.List.Empty
                        .Add((BTypes.IValue)new BTypes.Integer(randInt)));
            ListIntWrapper decodedListIntWrapper
                = (ListIntWrapper)DataModel.Decode<ListIntWrapper>(encoded);
            Assert.Equal(randInt, decodedListIntWrapper.Value[0]);
            encoded = BTypes.Dictionary.Empty
                .Add(
                    nameof(DictStrIntWrapper.Value),
                    (BTypes.IValue)BTypes.Dictionary.Empty
                        .Add(
                            (BTypes.IKey)new BTypes.Text(randStr),
                            (BTypes.IValue)new BTypes.Integer(randInt)));
            DictStrIntWrapper decodedDictStrIntWrapper
                = (DictStrIntWrapper)DataModel.Decode<DictStrIntWrapper>(encoded);
            Assert.Equal(randInt, decodedDictStrIntWrapper.Value[randStr]);

            // Try null.
            Assert.Throws<NullReferenceException>(
                () => (IntWrapper)DataModel.Decode<IntWrapper>(null));

            // Try missing data.
            encoded = BTypes.Dictionary.Empty;
            exception = Assert.Throws<TargetInvocationException>(
                () => (IntWrapper)DataModel.Decode<IntWrapper>(encoded));
            Assert.Equal(typeof(KeyNotFoundException), exception.InnerException.GetType());
            exception = Assert.Throws<TargetInvocationException>(
                () => (IntWrapper)DataModel.Decode<AddressWrapper>(encoded));
            Assert.Equal(typeof(KeyNotFoundException), exception.InnerException.GetType());
            exception = Assert.Throws<TargetInvocationException>(
                () => (IntWrapper)DataModel.Decode<StrWrapper>(encoded));
            Assert.Equal(typeof(KeyNotFoundException), exception.InnerException.GetType());

            // Try type mismatch.
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(IntWrapper.Value), (BTypes.IValue)new BTypes.Text("foo"));
            exception = Assert.Throws<TargetInvocationException>(
                () => (IntWrapper)DataModel.Decode<IntWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(AddressWrapper.Value), (BTypes.IValue)new BTypes.Text("bar"));
            exception = Assert.Throws<TargetInvocationException>(
                () => (AddressWrapper)DataModel.Decode<AddressWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(StrWrapper.Value), (BTypes.IValue)new BTypes.Integer(2));
            exception = Assert.Throws<TargetInvocationException>(
                () => (StrWrapper)DataModel.Decode<StrWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());

            // Try bad data; Address specifically requires length Address.Size bytes.
            Assert.NotEqual(Address.Size, randBytes.Length);
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(AddressWrapper.Value), (BTypes.IValue)new BTypes.Binary(randBytes));
            exception = Assert.Throws<TargetInvocationException>(
                () => (AddressWrapper)DataModel.Decode<AddressWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());

            // Try assigning null to inner collection.
            encoded = BTypes.Dictionary.Empty
                .Add(
                    nameof(ListIntWrapper.Value),
                    (BTypes.IValue)BTypes.List.Empty
                        .Add((BTypes.IValue)new BTypes.Integer(5))
                        .Add(BTypes.Null.Value));
            exception = Assert.Throws<TargetInvocationException>(
                () => (ListIntWrapper)DataModel.Decode<ListIntWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(
                    nameof(DictStrIntWrapper.Value),
                    (BTypes.IValue)BTypes.Dictionary.Empty
                        .Add(
                            (BTypes.IKey)new BTypes.Text("foo"),
                            (BTypes.IValue)new BTypes.Integer(5))
                        .Add(
                            (BTypes.IKey)new BTypes.Text("bar"),
                            (BTypes.IValue)BTypes.Null.Value));
            exception = Assert.Throws<TargetInvocationException>(
                () => (DictStrIntWrapper)DataModel.Decode<DictStrIntWrapper>(encoded));
            Assert.Equal(typeof(ArgumentException), exception.InnerException.GetType());
        }

        [Fact]
        public void DecodeToBadTypes()
        {
            System.Random random = new System.Random();
            bool randBool = random.NextDouble() < 0.5;
            int randInt = random.Next();
            string randStr = Guid.NewGuid().ToString();
            ImmutableArray<byte> randBytes = Guid.NewGuid().ToByteArray().ToImmutableArray();
            Address randAddress = new PrivateKey().ToAddress();

            BTypes.Dictionary encoded;
            Exception exception;

#pragma warning disable MEN002
            // Try decoding to invalid class.
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableBoolType.Value), (BTypes.IValue)new BTypes.Boolean(randBool));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableBoolType)DataModel.Decode<HasNullableBoolType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableIntType.Value), (BTypes.IValue)new BTypes.Integer(randInt));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableIntType)DataModel.Decode<HasNullableIntType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableLongType.Value), (BTypes.IValue)new BTypes.Integer(randInt));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableLongType)DataModel.Decode<HasNullableLongType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableBigIntegerType.Value), (BTypes.IValue)new BTypes.Integer(randInt));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableBigIntegerType)DataModel.Decode<HasNullableBigIntegerType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableBytesType.Value), (BTypes.IValue)new BTypes.Binary(randBytes));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableBytesType)DataModel.Decode<HasNullableBytesType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
            encoded = BTypes.Dictionary.Empty
                .Add(nameof(HasNullableBytesType.Value), (BTypes.IValue)new BTypes.Binary(randAddress.ByteArray));
            exception = Assert.Throws<TargetInvocationException>(
                () => (HasNullableBytesType)DataModel.Decode<HasNullableAddressType>(encoded));
            Assert.Equal(typeof(NotSupportedException), exception.InnerException.GetType());
#pragma warning restore MEN002
        }

        private class RootModel : DataModel
        {
            public RootModel()
                : base()
            {
                System.Random random = new System.Random();
                Bool = random.NextDouble() < 0.5;
                Int = random.Next();
                Long = (long)random.Next();
                BigInt = (BigInteger)random.Next();
                Bytes = Guid.NewGuid().ToByteArray().ToImmutableArray();
                Addr = new PrivateKey().ToAddress();
                Str = Guid.NewGuid().ToString();

                ListEmpty = ImmutableList<int>.Empty;
                ListBool = Enumerable
                    .Range(0, 2)
                    .Select(_ => random.NextDouble() < 0.5)
                    .ToImmutableList();
                ListInt = Enumerable
                    .Range(0, 2)
                    .Select(_ => random.Next())
                    .ToImmutableList();
                ListLong = Enumerable
                    .Range(0, 2)
                    .Select(_ => (long)random.Next())
                    .ToImmutableList();
                ListBigInt = Enumerable
                    .Range(0, 2)
                    .Select(_ => (BigInteger)random.Next())
                    .ToImmutableList();
                ListBytes = Enumerable
                    .Range(0, 2)
                    .Select(_ => Guid.NewGuid().ToByteArray().ToImmutableArray())
                    .ToImmutableList();
                ListAddr = Enumerable
                    .Range(0, 2)
                    .Select(_ => new PrivateKey().ToAddress())
                    .ToImmutableList();
                ListStr = Enumerable
                    .Range(0, 2)
                    .Select(_ => Guid.NewGuid().ToString())
                    .ToImmutableList();

                DictEmpty = ImmutableDictionary<string, string>.Empty;
                DictBytesBool = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, bool>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        random.NextDouble() < 0.5))
                    .ToImmutableDictionary();
                DictBytesInt = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, int>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        random.Next()))
                    .ToImmutableDictionary();
                DictBytesLong = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, long>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        (long)random.Next()))
                    .ToImmutableDictionary();
                DictBytesBigInt = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, BigInteger>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        (BigInteger)random.Next()))
                    .ToImmutableDictionary();
                DictBytesBytes = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, ImmutableArray<byte>>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        Guid.NewGuid().ToByteArray().ToImmutableArray()))
                    .ToImmutableDictionary();
                DictBytesAddr = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, Address>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        new PrivateKey().ToAddress()))
                    .ToImmutableDictionary();
                DictBytesStr = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<ImmutableArray<byte>, string>(
                        Guid.NewGuid().ToByteArray().ToImmutableArray(),
                        Guid.NewGuid().ToString()))
                    .ToImmutableDictionary();
                DictAddrStr = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<Address, string>(
                        new PrivateKey().ToAddress(),
                        Guid.NewGuid().ToString()))
                    .ToImmutableDictionary();
                DictStrStr = Enumerable
                    .Range(0, 2)
                    .Select(_ => new KeyValuePair<string, string>(
                        Guid.NewGuid().ToString(),
                        Guid.NewGuid().ToString()))
                    .ToImmutableDictionary();

                Mid = new MidModel();
                Leaf = new LeafModel();
            }

            public RootModel(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public bool Bool { get; private set; }

            public int Int { get; private set; }

            public long Long { get; private set; }

            public BigInteger BigInt { get; private set; }

            public ImmutableArray<byte> Bytes { get; private set; }

            public Address Addr { get; private set; }

            public string Str { get; private set; }

            public ImmutableList<int> ListEmpty { get; private set; }

            public ImmutableList<bool> ListBool { get; private set; }

            public ImmutableList<int> ListInt { get; private set; }

            public ImmutableList<long> ListLong { get; private set; }

            public ImmutableList<BigInteger> ListBigInt { get; private set; }

            public ImmutableList<ImmutableArray<byte>> ListBytes { get; private set; }

            public ImmutableList<Address> ListAddr { get; private set; }

            public ImmutableList<string> ListStr { get; private set; }

            public ImmutableDictionary<string, string>
                DictEmpty { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, bool>
                DictBytesBool { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, int>
                DictBytesInt { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, long>
                DictBytesLong { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, BigInteger>
                DictBytesBigInt { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, ImmutableArray<byte>>
                DictBytesBytes { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, Address>
                DictBytesAddr { get; private set; }

            public ImmutableDictionary<ImmutableArray<byte>, string>
                DictBytesStr { get; private set; }

            public ImmutableDictionary<Address, string>
                DictAddrStr { get; private set; }

            public ImmutableDictionary<string, string>
                DictStrStr { get; private set; }

            public MidModel Mid { get; private set; }

            public LeafModel Leaf { get; private set; }
        }

        private class MidModel : DataModel
        {
            public MidModel()
                : base()
            {
                System.Random random = new System.Random();
                Bool = random.NextDouble() < 0.5;
                Int = random.Next();
                Str = Guid.NewGuid().ToString();
                ListInt = new List<int>()
                {
                    random.Next(),
                    random.Next(),
                }.ToImmutableList();
                Leaf = new LeafModel();
            }

            public MidModel(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public bool Bool { get; private set; }

            public int Int { get; private set; }

            public string Str { get; private set; }

            public ImmutableList<int> ListInt { get; private set; }

            public LeafModel Leaf { get; private set; }
        }

        private class LeafModel : DataModel
        {
            public LeafModel()
                : base()
            {
                System.Random random = new System.Random();
                Bool = random.NextDouble() < 0.5;
                Int = random.Next();
                Str = Guid.NewGuid().ToString();
                DictStrStr = new Dictionary<string, string>()
                {
                    { Guid.NewGuid().ToString(), Guid.NewGuid().ToString() },
                    { Guid.NewGuid().ToString(), Guid.NewGuid().ToString() },
                }.ToImmutableDictionary();
            }

            public LeafModel(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public bool Bool { get; private set; }

            public int Int { get; private set; }

            public string Str { get; private set; }

            public ImmutableDictionary<string, string> DictStrStr
            {
                get;
                private set;
            }
        }

        private class HasNullableBoolType : DataModel
        {
            public HasNullableBoolType()
                : base()
            {
                Value = true;
            }

            public HasNullableBoolType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public bool? Value { get; private set; }
        }

        private class HasNullableIntType : DataModel
        {
            public HasNullableIntType()
                : base()
            {
                Value = 1;
            }

            public HasNullableIntType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public int? Value { get; private set; }
        }

        private class HasNullableLongType : DataModel
        {
            public HasNullableLongType()
                : base()
            {
                Value = 1;
            }

            public HasNullableLongType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public long? Value { get; private set; }
        }

        private class HasNullableBigIntegerType : DataModel
        {
            public HasNullableBigIntegerType()
                : base()
            {
                Value = 1;
            }

            public HasNullableBigIntegerType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public BigInteger? Value { get; private set; }
        }

        private class HasNullableBytesType : DataModel
        {
            public HasNullableBytesType()
                : base()
            {
                Value = new List<byte>() { 0, 1 }.ToImmutableArray();
            }

            public HasNullableBytesType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableArray<byte>? Value { get; private set; }
        }

        private class HasNullableAddressType : DataModel
        {
            public HasNullableAddressType()
                : base()
            {
                Value = new Address("0000000000000000000000000000000000000001");
            }

            public HasNullableAddressType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public Address? Value { get; private set; }
        }

        private class HasNullableListValueType : DataModel
        {
            public HasNullableListValueType()
                : base()
            {
                Value = new List<int?>() { 0, 1 }.ToImmutableList();
            }

            public HasNullableListValueType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableList<int?> Value { get; private set; }
        }

        private class HasInvalidListValueType : DataModel
        {
            public HasInvalidListValueType()
                : base()
            {
                Value = new List<MidModel>()
                {
                    new MidModel(),
                    new MidModel(),
                }.ToImmutableList();
            }

            public HasInvalidListValueType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableList<MidModel> Value { get; private set; }
        }

        private class HasInvalidDictionaryKeyType : DataModel
        {
            public HasInvalidDictionaryKeyType()
                : base()
            {
                Value = new Dictionary<int, int>()
                {
                    { 0, 1 },
                    { 2, 3 },
                }.ToImmutableDictionary();
            }

            public HasInvalidDictionaryKeyType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableDictionary<int, int> Value { get; private set; }
        }

        private class HasNullableDictionaryValueType : DataModel
        {
            public HasNullableDictionaryValueType()
                : base()
            {
                Value = new Dictionary<string, int?>()
                {
                    { "foo", 0 },
                    { "bar", 1 },
                }.ToImmutableDictionary();
            }

            public HasNullableDictionaryValueType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableDictionary<string, int?> Value { get; private set; }
        }

        private class HasInvalidDictionaryValueType : DataModel
        {
            public HasInvalidDictionaryValueType()
                : base()
            {
                Value = new Dictionary<string, MidModel>()
                {
                    { "foo", new MidModel() },
                    { "bar", new MidModel() },
                }.ToImmutableDictionary();
            }

            public HasInvalidDictionaryValueType(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableDictionary<string, MidModel> Value { get; private set; }
        }

        private class HasNullReferencePropertyValue : DataModel
        {
            public HasNullReferencePropertyValue()
                : base()
            {
                Value = null;
            }

            public HasNullReferencePropertyValue(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public string Value { get; private set; }
        }

        private class HasNullReferenceListValue : DataModel
        {
            public HasNullReferenceListValue()
                : base()
            {
                Value = new List<string>() { "foo", null, "bar" }.ToImmutableList();
            }

            public HasNullReferenceListValue(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableList<string> Value { get; private set; }
        }

        private class IntWrapper : DataModel
        {
            public IntWrapper(int value)
                : base()
            {
                Value = value;
            }

            public IntWrapper(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public int Value { get; private set; }
        }

        private class AddressWrapper : DataModel
        {
            public AddressWrapper(Address value)
                : base()
            {
                Value = value;
            }

            public AddressWrapper(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public Address Value { get; private set; }
        }

        private class StrWrapper : DataModel
        {
            public StrWrapper(string value)
                : base()
            {
                Value = value;
            }

            public StrWrapper(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public string Value { get; private set; }
        }

        private class ListIntWrapper : DataModel
        {
            public ListIntWrapper(List<int> value)
                : base()
            {
                Value = value.ToImmutableList();
            }

            public ListIntWrapper(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableList<int> Value { get; private set; }
        }

        private class DictStrIntWrapper : DataModel
        {
            public DictStrIntWrapper(Dictionary<string, int> value)
                : base()
            {
                Value = value.ToImmutableDictionary();
            }

            public DictStrIntWrapper(BTypes.Dictionary encoded)
                : base(encoded)
            {
            }

            public ImmutableDictionary<string, int> Value { get; private set; }
        }
    }
}
