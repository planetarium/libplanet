using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
using Bencodex.Types;
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

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
            {
                [(Text)"reward"] = (Integer)Reward,
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            Reward = (int)plainValue.GetValue<Integer>("reward").Value;
        }

        public IAccountStateDelta Execute(IActionContext ctx)
        {
            IAccountStateDelta states = ctx.PreviousStates;

            string rewardRecord = (Text?)states.GetState(RewardRecordAddress);

            rewardRecord = rewardRecord is null
                ? ctx.Miner.ToString()
                : $"{rewardRecord},{ctx.Miner}";

            states = states.SetState(RewardRecordAddress, (Text)rewardRecord);

            IValue tempQualifier1 = states?.GetState(ctx.Miner);
            int previousReward = tempQualifier1 is Integer i ? (int)i.Value : 0;
            int reward = previousReward + Reward;

            return states.SetState(ctx.Miner, (Integer)reward);
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
