namespace Libplanet.Action
{
    public interface IActionContext
    {
        Address From { get; }

        Address To { get; }

        AddressStateMap PreviousStates { get; }

        IRandom Random { get; }
    }
}
