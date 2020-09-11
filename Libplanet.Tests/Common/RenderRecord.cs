using System;
using Libplanet.Action;
using Libplanet.Blocks;

namespace Libplanet.Tests.Common
{
    public abstract class RenderRecord<T>
        where T : IAction, new()
    {
        public long Index;

        public abstract class ActionBase : RenderRecord<T>
        {
            public IAction Action;

            public IActionContext Context;

            public bool Render;

            public bool Unrender
            {
                get => !Render;
                set => Render = !value;
            }
        }

        public class ActionSuccess : ActionBase
        {
            public IAccountStateDelta NextStates;
        }

        public class ActionError : ActionBase
        {
            public Exception Exception;
        }

        public abstract class BlockBase : RenderRecord<T>
        {
            public Libplanet.Blocks.Block<T> OldTip;
            public Libplanet.Blocks.Block<T> NewTip;
            public bool Begin;

            public bool End
            {
                get => !Begin;
                set => Begin = !value;
            }
        }

        public class Block : BlockBase
        {
        }

        public class Reorg : BlockBase
        {
            public Libplanet.Blocks.Block<T> Branchpoint;
        }
    }
}
