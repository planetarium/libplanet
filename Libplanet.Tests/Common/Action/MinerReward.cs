using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public sealed class MinerReward : IAction
    {
        public MinerReward()
        {
        }

        public MinerReward(int reward)
        {
            Reward = reward;
        }

        public static Address RewardRecordAddress =>
            new Address("0000000000000000000000000000000000000000");

        public static AsyncLocal<ImmutableList<RenderRecord>>
            RenderRecords { get; } = new AsyncLocal<ImmutableList<RenderRecord>>();

        public int Reward { get; private set; }

        public IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>
            {
                ["reward"] = Reward,
            }.ToImmutableDictionary();

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            Reward = (int)plainValue["reward"];
        }

        public IAccountStateDelta Execute(IActionContext ctx)
        {
            IAccountStateDelta states = ctx.PreviousStates;

            string rewardRecord = (string)states.GetState(RewardRecordAddress);

            rewardRecord = rewardRecord is null
                ? ctx.Miner.ToString()
                : $"{rewardRecord},{ctx.Miner}";

            states = states.SetState(RewardRecordAddress, rewardRecord);

            int previousReward = (int?)states?.GetState(ctx.Miner) ?? 0;
            int reward = previousReward + Reward;

            return states.SetState(ctx.Miner, reward);
        }

        public void Render(IActionContext context, IAccountStateDelta nextStates)
        {
            if (RenderRecords.Value is null)
            {
                RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }

            RenderRecords.Value = RenderRecords.Value.Add(new RenderRecord()
            {
                Render = true,
                Action = this,
                Context = context,
                NextStates = nextStates,
            });
        }

        public void Unrender(IActionContext context, IAccountStateDelta nextStates)
        {
            if (RenderRecords.Value is null)
            {
                RenderRecords.Value = ImmutableList<RenderRecord>.Empty;
            }

            RenderRecords.Value = RenderRecords.Value.Add(new RenderRecord()
            {
                Unrender = true,
                Action = this,
                Context = context,
                NextStates = nextStates,
            });
        }
    }
}
