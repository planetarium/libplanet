using Bencodex.Types;
using Libplanet.Action.State;
using Libplanet.Crypto;

namespace Libplanet.Action.Tests.Common
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

        public int Reward { get; private set; }

        public IValue PlainValue =>
            new Bencodex.Types.Dictionary(new Dictionary<string, Integer>
            {
                ["reward"] = Reward,
            });

        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            Reward = plainValue.GetValue<Integer>("reward");
        }

        public IAccount Execute(IActionContext ctx)
        {
            IAccount states = ctx.PreviousState;

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
    }
}
