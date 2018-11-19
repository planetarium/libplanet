using System.Security.Cryptography;

public static class Hashcash
{
    public delegate byte[] Stamp(byte[] nonce);
    public static byte[] Answer(Stamp stamp, int difficulty)
    {
        int counter = 1;
        while (true)
        {
            var nonce = System.BitConverter.GetBytes(counter);
            var digest = HashAlgorithm(stamp(nonce));
            if (HasLeadingZeroBits(digest, difficulty))
            {
                return nonce;
            }
            counter++;
        }
    }

    public static byte[] HashAlgorithm(byte[] bytes)
    {
        using (SHA256 hashAlgo = SHA256.Create())
        {
            return hashAlgo.ComputeHash(bytes);
        }
    }

    public static bool HasLeadingZeroBits(byte[] digest, int bits)
    {
        var leadingBytes = bits / 8;
        var trailingBits = bits % 8;

        if (digest.Length < (bits / 8) + 1) return false;

        for (int i = 0; i < leadingBytes; i++)
        {
            if (digest[i] != 0) return false;
        }

        if (trailingBits != 0)
        {
            var mask = 0xff << (8 - trailingBits) & 0xff;
            return (digest[leadingBytes] & mask) == 0;
        }
        return true;
    }
}
