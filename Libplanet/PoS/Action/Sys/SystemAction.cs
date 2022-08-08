using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IO;
using System.Linq;
using System.Numerics;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using Bencodex;
using Bencodex.Types;
using Libplanet.Assets;
using Libplanet.PoS;

namespace Libplanet.Action.Sys
{
    [Serializable]
    public abstract class SystemAction : IAction
    {
        protected SystemAction()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; private set; }

        public IValue PlainValue =>
#pragma warning disable LAA1002
            new Bencodex.Types.Dictionary(
                PlainValueInternal
                    .SetItem("id", Id.Serialize())
                    .Select(kv => new KeyValuePair<IKey, IValue>((Text)kv.Key, kv.Value))
            );
#pragma warning restore LAA1002

        protected abstract IImmutableDictionary<string, IValue> PlainValueInternal { get; }

        public void LoadPlainValue(IValue plainValue)
        {
#pragma warning disable LAA1002
            var dict = ((Bencodex.Types.Dictionary)plainValue)
                .Select(kv => new KeyValuePair<string, IValue>((Text)kv.Key, kv.Value))
                .ToImmutableDictionary();
#pragma warning restore LAA1002
            Id = dict["id"].ToGuid();
            LoadPlainValueInternal(dict);
        }

        public abstract IAccountStateDelta Execute(IActionContext context);

        protected abstract void LoadPlainValueInternal(
            IImmutableDictionary<string, IValue> plainValue);

        public struct AccountStateDelta : IAccountStateDelta
        {
            private IImmutableDictionary<Address, IValue> _states;

            private IImmutableDictionary<(Address, Currency), BigInteger> _balances;

#pragma warning restore LAA1002
            public AccountStateDelta(
                IImmutableDictionary<Address, IValue> states,
                IImmutableDictionary<(Address, Currency), BigInteger> balances
            )
            {
                _states = states;
                _balances = balances;
            }

            public AccountStateDelta(Dictionary states, List balances)
            {
                // This assumes `states` consists of only Binary keys:
                _states = states.ToImmutableDictionary(
                    kv => new Address((Binary)kv.Key),
                    kv => kv.Value
                );

                _balances = balances.Cast<Dictionary>().ToImmutableDictionary(
                    record => (record["address"].ToAddress(),
                    ((Dictionary)record["currency"]).ToCurrency()),
                    record => record["amount"].ToBigInteger()
                );
            }

            public AccountStateDelta(IValue serialized)
                : this(
                    (Dictionary)((Dictionary)serialized)["states"],
                    (List)((Dictionary)serialized)["balances"]
                )
            {
            }

            public AccountStateDelta(byte[] bytes)
                : this((Dictionary)new Codec().Decode(bytes))
            {
            }

            public IImmutableSet<Address> UpdatedAddresses => _states.Keys.ToImmutableHashSet();

            public IImmutableSet<Address> StateUpdatedAddresses
                => _states.Keys.ToImmutableHashSet();

#pragma warning disable LAA1002
            public IImmutableDictionary<Address, IImmutableSet<Currency>> UpdatedFungibleAssets =>
                _balances.GroupBy(kv => kv.Key.Item1).ToImmutableDictionary(
                    g => g.Key,
                    g => (IImmutableSet<Currency>)g.Select(kv => kv.Key.Item2).ToImmutableHashSet()
                );

            public IValue? GetState(Address address)
            {
                IValue? result = _states.TryGetValue(address, out var state)
                    ? state
                    : null;
                return result;
            }

            public IReadOnlyList<IValue> GetStates(IReadOnlyList<Address> addresses) =>
                addresses.Select(_states.GetValueOrDefault).ToArray();

            public IAccountStateDelta SetState(Address address, IValue state) =>
                new AccountStateDelta(_states.SetItem(address, state), _balances);

            public FungibleAssetValue GetBalance(Address address, Currency currency)
            {
                if (!_balances.TryGetValue((address, currency), out BigInteger rawValue))
                {
                    return FungibleAssetValue.FromRawValue(currency, default(BigInteger));
                }

                return FungibleAssetValue.FromRawValue(currency, rawValue);
            }

            public IAccountStateDelta MintAsset(Address recipient, FungibleAssetValue value)
            {
                if (value <= new FungibleAssetValue(value.Currency))
                {
                    throw new ArgumentOutOfRangeException(nameof(value));
                }

                var nextAmount = GetBalance(recipient, value.Currency) + value;

                return new AccountStateDelta(
                    _states,
                    _balances.SetItem(
                        (recipient, value.Currency),
                        nextAmount.RawValue
                    )
                );
            }

            public IAccountStateDelta TransferAsset(
                Address sender,
                Address recipient,
                FungibleAssetValue value,
                bool allowNegativeBalance = false)
            {
                if (value.Sign <= 0)
                {
                    throw new ArgumentOutOfRangeException(nameof(value));
                }

                FungibleAssetValue senderBalance = GetBalance(sender, value.Currency);
                if (senderBalance < value)
                {
                    throw new InsufficientBalanceException(
                        sender,
                        senderBalance,
                        $"There is no sufficient balance for {sender}: {senderBalance} < {value}"
                    );
                }

                Currency currency = value.Currency;
                FungibleAssetValue senderRemains = senderBalance - value;
                FungibleAssetValue recipientRemains = GetBalance(recipient, currency) + value;
                var balances = _balances
                    .SetItem((sender, currency), senderRemains.RawValue)
                    .SetItem((recipient, currency), recipientRemains.RawValue);
                return new AccountStateDelta(_states, balances);
            }

            public IAccountStateDelta BurnAsset(Address owner, FungibleAssetValue value)
            {
                if (value <= new FungibleAssetValue(value.Currency))
                {
                    throw new ArgumentOutOfRangeException(nameof(value));
                }

                FungibleAssetValue balance = GetBalance(owner, value.Currency);
                if (balance < value)
                {
                    throw new InsufficientBalanceException(
                        owner,
                        value,
                        $"There is no sufficient balance for {owner}: {balance} < {value}"
                    );
                }

                FungibleAssetValue nextValue = balance - value;
                return new AccountStateDelta(
                    _states,
                    _balances.SetItem(
                        (owner, value.Currency),
                        nextValue.RawValue
                    )
                );
            }
        }

        [Serializable]
        public struct ActionEvaluation<T> : ISerializable
            where T : SystemAction
        {
            // 생성자
            public ActionEvaluation(SerializationInfo info, StreamingContext ctx)
            {
                Action = FromBytes((byte[])(info.GetValue(
                    "action", typeof(byte[])) ?? throw new Exception()));
                Signer = new Address((byte[])(info.GetValue(
                    "signer", typeof(byte[])) ?? throw new Exception()));
                BlockIndex = info.GetInt64("blockIndex");
                OutputStates = new AccountStateDelta(
                    (byte[])(info.GetValue(
                        "outputStates", typeof(byte[])) ?? throw new Exception()));
                Exception = (Exception)(info.GetValue(
                    "exc", typeof(Exception)) ?? throw new Exception());
                PreviousStates = new AccountStateDelta(
                    (byte[])(info.GetValue(
                        "previousStates", typeof(byte[])) ?? throw new Exception()));
                RandomSeed = info.GetInt32("randomSeed");
                Extra = new Dictionary<string, IValue>();
            }

            public T Action { get; set; }

            public Address Signer { get; set; }

            public long BlockIndex { get; set; }

            public IAccountStateDelta OutputStates { get; set; }

            public Exception Exception { get; set; }

            public IAccountStateDelta PreviousStates { get; set; }

            public int RandomSeed { get; set; }

            public Dictionary<string, IValue> Extra { get; set; }

            public void GetObjectData(SerializationInfo info, StreamingContext context)
            {
                info.AddValue("action", ToBytes(Action));
                info.AddValue("signer", Signer.ToByteArray());
                info.AddValue("blockIndex", BlockIndex);
                info.AddValue("outputStates", ToBytes(OutputStates, OutputStates.UpdatedAddresses));
                info.AddValue("exc", Exception);
                info.AddValue("previousStates", ToBytes(
                    PreviousStates, OutputStates.UpdatedAddresses));
                info.AddValue("randomSeed", RandomSeed);
            }

            private static byte[] ToBytes(T action)
            {
                var formatter = new BinaryFormatter();
                using (var stream = new MemoryStream())
                {
                    formatter.Serialize(stream, action);
                    return stream.ToArray();
                }
            }

            private static byte[] ToBytes(
                IAccountStateDelta delta, IImmutableSet<Address> updatedAddresses)
            {
                var state = new Dictionary(
                    updatedAddresses.Select(addr => new KeyValuePair<IKey, IValue>(
                        (Binary)addr.ToByteArray(),
                        delta.GetState(addr) ?? default(Null)
                    ))
                );
                var balance = new List(
#pragma warning disable LAA1002
                    delta.UpdatedFungibleAssets.SelectMany(ua =>
#pragma warning restore LAA1002
                        ua.Value.Select(c =>
                        {
                            FungibleAssetValue b = delta.GetBalance(ua.Key, c);
                            return new Dictionary(new[]
                            {
                                new KeyValuePair<IKey, IValue>(
                                    (Text)"address", (Binary)ua.Key.ToByteArray()),
                                new KeyValuePair<IKey, IValue>(
                                    (Text)"currency", c.Serialize()),
                                new KeyValuePair<IKey, IValue>(
                                    (Text)"amount", (Integer)b.RawValue),
                            });
                        }
                        )
                    ).Cast<IValue>()
                );

                var bdict = new Dictionary(new[]
                {
                    new KeyValuePair<IKey, IValue>((Text)"states", state),
                    new KeyValuePair<IKey, IValue>((Text)"balances", balance),
                });

                return new Codec().Encode(bdict);
            }

            private static T FromBytes(byte[] bytes)
            {
                var formatter = new BinaryFormatter();
                using (var stream = new MemoryStream(bytes))
                {
                    return (T)formatter.Deserialize(stream);
                }
            }
        }
    }
}
