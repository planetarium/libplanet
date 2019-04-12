using System;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public sealed class DumbAction : IAction
    {
        public DumbAction()
        {
        }

        public DumbAction(
            Address targetAddress,
            string item,
            bool recordRehearsal = false
        )
        {
            TargetAddress = targetAddress;
            Item = item;
            RecordRehearsal = recordRehearsal;
        }

        public static AsyncLocal<ImmutableList<(Address, string)>>
            RehearsalRecords { get; } =
                new AsyncLocal<ImmutableList<(Address, string)>>();

        public Address TargetAddress { get; private set; }

        public string Item { get; private set; }

        public bool RecordRehearsal { get; private set; }

        public IImmutableDictionary<string, object> PlainValue =>
            ImmutableDictionary<string, object>.Empty
                .Add("item", Item)
                .Add("target_address", TargetAddress.ToByteArray())
                .Add("record_rehearsal", RecordRehearsal);

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
            return states.SetState(TargetAddress, items);
        }

        public void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue
        )
        {
            Item = (string)plainValue["item"];
            TargetAddress = new Address((byte[])plainValue["target_address"]);
            RecordRehearsal = (bool)plainValue["record_rehearsal"];
        }
    }
}
