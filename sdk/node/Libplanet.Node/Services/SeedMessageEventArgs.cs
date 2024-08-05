using System.Net;
using Dasync.Collections;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Options;
using Libplanet.Net.Transports;
using Libplanet.Node.Options;
using Serilog;

namespace Libplanet.Node.Services;

internal sealed class SeedMessageEventArgs(Message message) : EventArgs
{
    public Message Message { get; } = message;
}
