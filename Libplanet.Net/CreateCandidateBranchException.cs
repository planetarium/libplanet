using System;

namespace Libplanet.Net
{
    [Serializable]
    public class CreateCandidateBranchException : SwarmException
    {
        public CreateCandidateBranchException(string message)
            : base(message)
        {
        }
    }
}
