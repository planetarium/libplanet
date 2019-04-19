using System;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public sealed class DumbAction : IAction, IEquatable<DumbAction>
    {
        public static readonly Address RandomRecordsAddress =
            new Address("7811C3fAa0f9Cc41F7971c3d9b031B1095b20AB2");

        public DumbAction()
        {
        }

        public DumbAction(
            Address targetAddress,
            string item,
            bool recordRehearsal = false,
            bool recordRandom = false
        )
        {
            TargetAddress = targetAddress;
            Item = item;
            RecordRehearsal = recordRehearsal;
            RecordRandom = recordRandom;
        }

        public static AsyncLocal<
            ImmutableList<(DumbAction, IActionContext, IAccountStateDelta)>
        > RenderRecords { get; } = new AsyncLocal<
            ImmutableList<(DumbAction, IActionContext, IAccountStateDelta)>
        >();

        public static AsyncLocal<ImmutableList<(Address, string)>>
            RehearsalRecords { get; } =
                new AsyncLocal<ImmutableList<(Address, string)>>();

        public Address TargetAddress { get; private set; }

        public string Item { get; private set; }

        public bool RecordRehearsal { get; private set; }

        public bool RecordRandom { get; private set; }

        public IImmutableDictionary<string, object> PlainValue
        {
            get
            {
                var plainValue = ImmutableDictionary<string, object>.Empty
                    .Add("item", Item)
                    .Add("target_address", TargetAddress.ToByteArray())
                    .Add("record_rehearsal", RecordRehearsal);
                if (RecordRandom)
                {
                    // In order to avoid changing tx signatures in many test
                    // fixtures, adds field only if RecordRandom = true.
                    plainValue = plainValue.Add("record_random", true);
                }

                return plainValue;
            }
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (RehearsalRecords.Value is null)
            {
                RehearsalRecords.Value = ImmutableList<(Address, string)>.Empty;
            }

            if (context.Rehearsal)
            {
                RehearsalRecords.Value =
                    RehearsalRecords.Value.Add((TargetAddress, Item));
            }

            IAccountStateDelta states = context.PreviousStates;
            if (Item is null)
            {
                return states;
            }

            string items = (string)states.GetState(TargetAddress);
            string item = RecordRehearsal
                ? $"{Item}:{context.Rehearsal}"
                : Item;
            items = items is null ? item : $"{items},{item}";

            if (RecordRandom)
            {
                states = states.SetState(
                    RandomRecordsAddress,
                    context.Random.Next()
                );
            }

            return states.SetState(TargetAddress, items);
        }

        public void Render(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
            if (RenderRecords.Value is null)
            {
                RenderRecords.Value = ImmutableList<
                    (DumbAction, IActionContext, IAccountStateDelta)
                >.Empty;
            }

            RenderRecords.Value =
                RenderRecords.Value.Add((this, context, nextStates));
        }

        public void Unrender(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue
        )
        {
            Item = (string)plainValue["item"];
            TargetAddress = new Address((byte[])plainValue["target_address"]);
            RecordRehearsal = (bool)plainValue["record_rehearsal"];
            RecordRandom =
                plainValue.ContainsKey("record_random") &&
                plainValue["record_random"] is bool r &&
                r;
        }

        public bool Equals(DumbAction other)
        {
            return !ReferenceEquals(null, other) && (
                ReferenceEquals(this, other) || (
                    TargetAddress.Equals(other.TargetAddress) &&
                    string.Equals(Item, other.Item) &&
                    RecordRehearsal == other.RecordRehearsal
                )
            );
        }

        public override bool Equals(object obj)
        {
            return !ReferenceEquals(null, obj) && (
                ReferenceEquals(this, obj) ||
                (obj is DumbAction other && Equals(other))
            );
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int hashCode = TargetAddress.GetHashCode();
                hashCode = (hashCode * 397) ^
                    (Item != null ? Item.GetHashCode() : 0);
                hashCode = (hashCode * 397) ^ RecordRehearsal.GetHashCode();
                return hashCode;
            }
        }
    }
}
