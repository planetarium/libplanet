using Libplanet.Net.Messages;

namespace Libplanet.Node.Services;

internal sealed class SeedMessageEventArgs(Message message) : EventArgs
{
    public Message Message { get; } = message;
}
