// using System.Collections.Immutable;
// using System.Security.Cryptography;
// using Libplanet.Action;
// using Libplanet.Common;
// using Libplanet.Store;

// namespace Libplanet.Node.Actions;

// public class PluginActionEvaluator : IPluginActionEvaluator
// {
//     private readonly IActionEvaluator _actionEvaluator;

//     public PluginActionEvaluator(IPluginKeyValueStore keyValueStore)
//     {
//         var stateStore = new TrieStateStore(new WrappedKeyValueStore(keyValueStore));
//         _actionEvaluator = new ActionEvaluator(
//             policyActionsRegistry: new(),
//             stateStore,
//             new NCActionLoader());
//     }

//     public byte[][] Evaluate(byte[] blockBytes, byte[]? baseStateRootHashBytes)
//     {
//         var evals = _actionEvaluator.Evaluate(
//             PreEvaluationBlockMarshaller.Deserialize(blockBytes),
//             baseStateRootHashBytes is { } bytes ? new HashDigest<SHA256>(bytes) : null);
//         return evals.Select(eval => ActionEvaluationMarshaller.Serialize(eval)).ToArray();
//     }
// }

