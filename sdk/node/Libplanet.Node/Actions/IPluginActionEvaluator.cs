namespace Libplanet.Node.Actions;

public interface IPluginActionEvaluator
{
    byte[][] Evaluate(byte[] blockBytes, byte[]? baseStateRootHashBytes);
}
