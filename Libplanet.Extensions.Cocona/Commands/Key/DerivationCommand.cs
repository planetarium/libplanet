namespace Libplanet.Extensions.Cocona.Commands.Key
{
    using System;
    using global::Cocona;
    using Libplanet.Crypto;

    public class DerivationCommand
    {
        public void PrivateKey(
            [Argument(
                "PRIVATE-KEY",
                Description = "A private key that the address/public key are derived from."
            )]
            string privateKeyHex,
            [Option('p', Description = "Derives the public key.")]
            bool publicKey = false,
            [Option('a', Description = "Derives the address.")]
            bool address = false)
        {
            if (!(publicKey ^ address))
            {
                throw new CommandExitedException($"Only one flag should be used between {nameof(publicKey)} and {nameof(address)}", -1);
            }

            var privateKey = new PrivateKey(ByteUtil.ParseHex(privateKeyHex));
            if (address)
            {
                Console.Out.WriteLine(privateKey.ToAddress().ToHex());
            }

            if (publicKey)
            {
                Console.Out.WriteLine(ByteUtil.Hex(privateKey.PublicKey.Format(true)));
            }
        }
    }
}
