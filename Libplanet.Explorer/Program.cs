using System;
using System.Diagnostics;

using Nancy.Hosting.Self;

namespace Libplanet.Explorer
{
    class Program
    {
        private const string uri = "http://localhost:8888/";

        static void Main()
        {
            using (var nancyHost = new NancyHost(new Uri(uri)))
            {
                nancyHost.Start();

                Console.WriteLine($"Nancy now listening - navigating to {uri}. Press enter to stop");
                try
                {
                    Process.Start(uri);
                }
                catch (Exception)
                {
                }
                Console.ReadKey();
            }

            Console.WriteLine("Stopped. Good bye!");
        }
    }
}
