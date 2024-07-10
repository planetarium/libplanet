using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.SDK.Action;
using Libplanet.SDK.Action.ActionBase;
using static System.Reflection.BindingFlags;

namespace Libplanet.SDK;

[Action("Foo")]
public class FooAction : ActionBase
{
    public override Address StorageAddress
        => new Address("0xf54E82560aAE66C7db7eCF6960716B06ae6F8EBc");

    public void Foo()
    {
        Console.WriteLine("Foo");
    }

    public void Execute()
    {
        var key = new Address("0xAFb51D00c4a2C853E1B9e2ab42E299352DF36190");
        SetState(key, (Text)"Hello, World!");
    }

    public void CallBar()
    {
        var barActionAddress = new Address("0xB179B5b2C06C52B6650F25E9ff9A335044Cf590F");
        var value = Call<BarAction>(barActionAddress, "HelloWorld");
    }
}
