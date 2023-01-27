using System;
using System.Collections.Immutable;
using System.Runtime.CompilerServices;
using System.Text;

namespace Libplanet.Store.Trie
{
    /// <summary>
    /// Wraps a byte array and provides equality comparison and hash code calculation.  Designed
    /// to be used as a key in dictionaries.
    /// </summary>
    public readonly struct KeyBytes
        : IEquatable<KeyBytes>, IEquatable<ImmutableArray<byte>>, IEquatable<byte[]>
    {
        private readonly ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Creates a new <see cref="KeyBytes"/> instance from the given byte array.
        /// </summary>
        /// <param name="bytes">A mutable byte array to wrap.</param>
        public KeyBytes(params byte[] bytes)
            : this(ImmutableArray.Create(bytes))
        {
        }

        /// <summary>
        /// Creates a new <see cref="KeyBytes"/> instance from the given byte array.
        /// </summary>
        /// <param name="bytes">An immutable byte array to wrap.</param>
        public KeyBytes(in ImmutableArray<byte> bytes)
        {
            _byteArray = bytes;
        }

        /// <summary>
        /// Creates a new <seealso cref="KeyBytes"/> instance from the given <paramref
        /// name="string"/>.
        /// </summary>
        /// <param name="string">A key string.  This is encoded to bytes.</param>
        /// <param name="encoding">The text encoding used for the key string.</param>
        public KeyBytes(string @string, Encoding encoding)
        {
            byte[] neverReusedBuffer = encoding.GetBytes(@string);
            ImmutableArray<byte> movedImmutable =
                Unsafe.As<byte[], ImmutableArray<byte>>(ref neverReusedBuffer);
            _byteArray = movedImmutable;
        }

        /// <summary>
        /// The length of the byte array.
        /// </summary>
        public int Length => _byteArray.IsDefault ? 0 : ByteArray.Length;

        /// <summary>
        /// The immutable array of bytes.
        /// </summary>
        public ImmutableArray<byte> ByteArray => _byteArray.IsDefault
            ? ImmutableArray<byte>.Empty
            : _byteArray;

        /// <summary>
        /// The hexadecimal string representation of the byte array.
        /// </summary>
        public string Hex => _byteArray.IsDefaultOrEmpty
            ? string.Empty
            : ByteUtil.Hex(_byteArray);

        /// <summary>
        /// Compares two <see cref="KeyBytes"/> values.
        /// </summary>
        /// <param name="left">An operand.</param>
        /// <param name="right">Another operand.</param>
        /// <returns><see langword="true"/> if two values equal; otherwise <see langword="false"/>.
        /// </returns>
        public static bool operator ==(KeyBytes left, KeyBytes right) => left.Equals(right);

        /// <summary>
        /// Compares two <see cref="KeyBytes"/> values.
        /// </summary>
        /// <param name="left">An operand.</param>
        /// <param name="right">Another operand.</param>
        /// <returns><see langword="false"/> if two values equal; otherwise <see langword="true"/>.
        /// </returns>
        public static bool operator !=(KeyBytes left, KeyBytes right) => !left.Equals(right);

        /// <summary>
        /// Parses the given hexadecimal string as bytes and returns a new <see cref="KeyBytes"/>
        /// instance.
        /// </summary>
        /// <param name="hex">A hexadecimal string which encodes bytes.</param>
        /// <returns>A new <see cref="KeyBytes"/> instance.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the length of the given
        /// <paramref name="hex"/> string is an odd number.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        public static KeyBytes FromHex(string hex) =>
            new KeyBytes(ByteUtil.ParseHexToImmutable(hex));

        /// <summary>
        /// Converts to a mutable byte array.
        /// </summary>
        /// <returns>A new copy of mutable byte array.</returns>
        public byte[] ToByteArray() => ByteArray.IsDefault
            ? Array.Empty<byte>()
            : ByteArray.ToBuilder().ToArray();

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(ImmutableArray<byte> other)
        {
            if (other.IsDefaultOrEmpty)
            {
                return _byteArray.IsDefaultOrEmpty;
            }
            else if (Length != other.Length)
            {
                return false;
            }

            for (int i = 0; i < Length; i++)
            {
                if (_byteArray[i] != other[i])
                {
                    return false;
                }
            }

            return true;
        }

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(KeyBytes other) => Equals(other._byteArray);

        /// <inheritdoc cref="IEquatable{T}.Equals(T)"/>
        public bool Equals(byte[]? other)
        {
            if (other is { } o && o.Length == Length)
            {
                for (int i = 0; i < Length; i++)
                {
                    if (_byteArray[i] != o[i])
                    {
                        return false;
                    }
                }

                return true;
            }

            return false;
        }

        /// <inheritdoc cref="object.Equals(object?)"/>
        public override bool Equals(object? obj) => obj is KeyBytes other && Equals(other);

        /// <inheritdoc cref="object.GetHashCode()"/>
        public override int GetHashCode()
        {
            int hash = 17;
            if (!_byteArray.IsDefaultOrEmpty)
            {
                foreach (byte b in _byteArray)
                {
                    hash = unchecked(hash * (31 + b));
                }
            }

            return hash;
        }

        /// <inheritdoc cref="object.ToString()"/>
        public override string ToString()
        {
            string hex = Length > 0 ? $" {ByteUtil.Hex(_byteArray)}" : string.Empty;
            return $"{nameof(KeyBytes)} ({Length} B){hex}";
        }
    }
}
