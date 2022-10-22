using System;
using System.Collections.Generic;
using Libplanet.Blocks;

namespace Libplanet.Action
{
    public interface IActionTypeLoader
    {
        public IDictionary<string, Type> Load(IPreEvaluationBlockHeader blockHeader);
    }
}
