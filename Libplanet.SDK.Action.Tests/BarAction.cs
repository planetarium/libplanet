using Libplanet.Crypto;
using Libplanet.SDK.Action;
using Libplanet.SDK.Action.ActionBase;
using Libplanet.SDK.Interfaces;

namespace Libplanet.SDK
{
    [Action("Bar")]
    public class BarAction : ActionBase, ICallable
    {
        public override Address StorageAddress =>
            new Address("0xB179B5b2C06C52B6650F25E9ff9A335044Cf590F");

        public void HelloWorld()
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
