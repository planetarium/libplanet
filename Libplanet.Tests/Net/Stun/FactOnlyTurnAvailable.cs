using System;
using Xunit;

namespace Libplanet.Tests.Net.Stun
{
    public sealed class FactOnlyTurnAvailable : FactAttribute
    {
        public const string TurnUrlVarName = "TURN_SERVER_URL";

        static FactOnlyTurnAvailable()
        {
            string turnUrlStr =
                Environment.GetEnvironmentVariable(TurnUrlVarName);

            try
            {
                TurnUri = new Uri(turnUrlStr);
                string[] userInfo = TurnUri.UserInfo.Split(':');

                Username = userInfo[0];
                Password = userInfo[1];
            }
            catch (ArgumentNullException)
            {
            }
        }

        public FactOnlyTurnAvailable()
        {
            if (TurnUri == null)
            {
                Skip = "Available only when TURN server is running";
            }
        }

        public static Uri TurnUri { get; }

        public static string Username { get; }

        public static string Password { get; }
    }
}
