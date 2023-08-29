using System;
using Bencodex.Types;
using Libplanet.Store.Trie;

namespace Libplanet.Tests.Store.Trie
{
    public static class TrieKVFixture
    {
        public static readonly KeyBytes K = new KeyBytes(Array.Empty<byte>());
        public static readonly KeyBytes K00 = new KeyBytes(new byte[] { 0x00 });
        public static readonly KeyBytes K01 = new KeyBytes(new byte[] { 0x01 });
        public static readonly KeyBytes K10 = new KeyBytes(new byte[] { 0x10 });
        public static readonly KeyBytes K11 = new KeyBytes(new byte[] { 0x11 });
        public static readonly KeyBytes K0000 = new KeyBytes(new byte[] { 0x00, 0x00 });
        public static readonly KeyBytes K0001 = new KeyBytes(new byte[] { 0x00, 0x01 });
        public static readonly KeyBytes K0010 = new KeyBytes(new byte[] { 0x00, 0x10 });
        public static readonly KeyBytes K0011 = new KeyBytes(new byte[] { 0x00, 0x11 });
        public static readonly KeyBytes K0100 = new KeyBytes(new byte[] { 0x01, 0x00 });
        public static readonly KeyBytes K0101 = new KeyBytes(new byte[] { 0x01, 0x01 });
        public static readonly KeyBytes K0110 = new KeyBytes(new byte[] { 0x01, 0x10 });
        public static readonly KeyBytes K0111 = new KeyBytes(new byte[] { 0x01, 0x11 });
        public static readonly KeyBytes K1000 = new KeyBytes(new byte[] { 0x10, 0x00 });
        public static readonly KeyBytes K1001 = new KeyBytes(new byte[] { 0x10, 0x01 });
        public static readonly KeyBytes K1010 = new KeyBytes(new byte[] { 0x10, 0x10 });
        public static readonly KeyBytes K1011 = new KeyBytes(new byte[] { 0x10, 0x11 });
        public static readonly KeyBytes K1100 = new KeyBytes(new byte[] { 0x11, 0x00 });
        public static readonly KeyBytes K1101 = new KeyBytes(new byte[] { 0x11, 0x01 });
        public static readonly KeyBytes K1110 = new KeyBytes(new byte[] { 0x11, 0x10 });
        public static readonly KeyBytes K1111 = new KeyBytes(new byte[] { 0x11, 0x11 });
        public static readonly IValue V = new Text(string.Empty);
        public static readonly IValue V00 = new Text("00");
        public static readonly IValue V01 = new Text("01");
        public static readonly IValue V10 = new Text("10");
        public static readonly IValue V11 = new Text("11");
        public static readonly IValue V0000 = new Text("0000");
        public static readonly IValue V0001 = new Text("0001");
        public static readonly IValue V0010 = new Text("0010");
        public static readonly IValue V0011 = new Text("0011");
        public static readonly IValue V0100 = new Text("0100");
        public static readonly IValue V0101 = new Text("0101");
        public static readonly IValue V0110 = new Text("0110");
        public static readonly IValue V0111 = new Text("0111");
        public static readonly IValue V1000 = new Text("1000");
        public static readonly IValue V1001 = new Text("1001");
        public static readonly IValue V1010 = new Text("1010");
        public static readonly IValue V1011 = new Text("1011");
        public static readonly IValue V1100 = new Text("1100");
        public static readonly IValue V1101 = new Text("1101");
        public static readonly IValue V1110 = new Text("1110");
        public static readonly IValue V1111 = new Text("1111");
    }
}
