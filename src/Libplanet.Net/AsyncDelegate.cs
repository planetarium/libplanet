using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Channels;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net
{
    public class AsyncDelegate
    {
        private IEnumerable<Func<Message, Channel<MessageContent>, Task>> _functions;

        public AsyncDelegate()
        {
            _functions = new List<Func<Message, Channel<MessageContent>, Task>>();
        }

        public void Register(Func<Message, Channel<MessageContent>, Task> func)
        {
#pragma warning disable PC002
            // Usage of a .NET Standard API that isn’t available on the .NET Framework 4.6.1
#if NETFRAMEWORK && !NET48 && !NET472 && !NET471
            _functions = _functions.Concat(new[] { func });
#else
            _functions = _functions.Append(func);
#endif
#pragma warning restore PC002
        }

        public void Unregister(Func<Message, Channel<MessageContent>, Task> func)
        {
            _functions = _functions.Where(f => !f.Equals(func));
        }

        public async Task InvokeAsync(Message message, Channel<MessageContent> channel)
        {
            IEnumerable<Task> tasks = _functions.Select(f => f(message, channel));
            await Task.WhenAll(tasks).ConfigureAwait(false);
        }
    }
}
