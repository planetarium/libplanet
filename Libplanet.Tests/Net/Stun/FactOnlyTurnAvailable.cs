using System;
using Xunit;

namespace Libplanet.Tests.Net.Stun
{
    public sealed class FactOnlyTurnAvailable : FactAttribute
    {
        public const string TurnUrlVarName = "TURN_SERVER_URL";

        public FactOnlyTurnAvailable()
        {
            string turnUrl =
                Environment.GetEnvironmentVariable(TurnUrlVarName);

            if (string.IsNullOrEmpty(turnUrl))
            {
                Skip = "Available only when TURN server is running";
            }
        }
    }
}
