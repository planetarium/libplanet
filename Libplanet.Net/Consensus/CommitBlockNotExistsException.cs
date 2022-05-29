using System;
using Libplanet.Consensus;

namespace Libplanet.Net.Consensus
{
    public class CommitBlockNotExistsException : Exception
    {
        public CommitBlockNotExistsException(VoteSet voteset)
            : base(voteset.ToString())
        {
        }
    }
}
