using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public struct RenderRecord
    {
        public bool Render { get; set; }

        public bool Unrender
        {
            get => !Render;
            set => Render = !value;
        }

        public IAction Action { get; set; }

        public IActionContext Context { get; set; }

        public IAccountStateDelta NextStates { get; set; }
    }
}
