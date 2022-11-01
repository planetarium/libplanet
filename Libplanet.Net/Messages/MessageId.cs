using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// <see cref="MessageId"/>, abbreviation of message identifier,
    /// is a SHA-256 digest derived from a <see cref="Message"/>'s
    /// content.
    /// <para>As it is a SHA-256 digest, it consists of 32 <see cref="byte"/>s,
    /// and 64 characters in hexadecimal.
    /// (See also <see cref="Size"/> constant.)</para>
    /// </summary>
    /// <seealso cref="Message.Id"/>
    [Serializable]
    public struct MessageId : ISerializable, IComparable<MessageId>, IComparable
    {
        /// <summary>
        /// The <see cref="byte"/>s size that each <see cref="MessageId"/> takes.
        /// <para>As a message ID is a SHA-256 digest, it is 32 <see cref="byte"/>s.
        /// </para>
        /// </summary>
        public const int Size = 32;

        private ImmutableArray<byte> _byteArray;

        /// <summary>
        /// Converts a <see cref="byte"/> array into a <see cref="MessageId"/>.
        /// </summary>
        /// <param name="messageId">A <see cref="byte"/> array that encodes
        /// a <see cref="MessageId"/>.  It must not be <see langword="null"/>,
        /// and its <see cref="Array.Length"/> must be the same to
        /// <see cref="Size"/>.</param>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="messageId"/>'s <see cref="Array.Length"/> is not
        /// the same to the required <see cref="Size"/>.</exception>
        public MessageId(byte[] messageId)
        {
            if (messageId.Length != Size)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(messageId),
                    $"{nameof(MessageId)} must be {Size} bytes."
                );
            }

            _byteArray = messageId.ToImmutableArray();
        }

        public MessageId(
            SerializationInfo info,
            StreamingContext context)
            : this(info.GetValue<byte[]>("message_id"))
        {
        }

        /// <summary>
        /// A bare immutable <see cref="byte"/> array of
        /// this <see cref="MessageId"/>.
        /// </summary>
        /// <remarks>It is immutable.  For a mutable array, use
        /// <see cref="ToByteArray()"/> method instead.</remarks>
        /// <seealso cref="ToByteArray()"/>
        public ImmutableArray<byte> ByteArray
        {
            get
            {
                if (_byteArray.IsDefault)
                {
                    _byteArray = new byte[Size].ToImmutableArray();
                }

                return _byteArray;
            }
        }

        public static bool operator ==(MessageId left, MessageId right) => left.Equals(right);

        public static bool operator !=(MessageId left, MessageId right) => !left.Equals(right);

        /// <summary>
        /// Creates a <see cref="MessageId"/> value from a <paramref name="hex"/> string.
        /// </summary>
        /// <param name="hex">A hexadecimal string which encodes a <see cref="MessageId"/>.
        /// This has to contain 64 hexadecimal digits and must not be <see langword="null"/>
        /// This is usually made by <see cref="ToHex()"/> method.</param>
        /// <returns>A corresponding <see cref="MessageId"/> value.</returns>
        /// <exception cref="ArgumentNullException">Thrown when the given <paramref name="hex"/>
        /// string is <see langword="null"/>.</exception>
        /// <exception cref="ArgumentOutOfRangeException">Thrown when the given
        /// <paramref name="hex"/> is shorter or longer than 64 characters.</exception>
        /// <exception cref="FormatException">Thrown when the given <paramref name="hex"/> string is
        /// not a valid hexadecimal string.</exception>
        /// <seealso cref="ToHex()"/>
        public static MessageId FromHex(string hex)
        {
            if (hex is null)
            {
                throw new ArgumentNullException(nameof(hex));
            }

            byte[] bytes = ByteUtil.ParseHex(hex);
            try
            {
                return new MessageId(bytes);
            }
            catch (ArgumentOutOfRangeException)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(hex),
                    $"Expected {Size * 2} characters, but {hex.Length} characters given."
                );
            }
        }

        public bool Equals(MessageId other) => ByteArray.SequenceEqual(other.ByteArray);

        public override bool Equals(object? obj) => obj is MessageId other && Equals(other);

        public override int GetHashCode() => ByteUtil.CalculateHashCode(ToByteArray());

        /// <summary>
        /// Gets a bare mutable <see cref="byte"/> array of
        /// this <see cref="MessageId"/>.
        /// </summary>
        /// <returns>A new mutable <see cref="byte"/> array of
        /// this <see cref="MessageId"/>.
        /// Since a returned array is created every time the method is called,
        /// any mutations on that array does not affect to
        /// the <see cref="MessageId"/> object.
        /// </returns>
        /// <seealso cref="ByteArray"/>
        [Pure]
        public byte[] ToByteArray() => ByteArray.ToArray();

        /// <summary>
        /// Gets a hexadecimal form of a <see cref="MessageId"/>.
        /// </summary>
        /// <returns>64 hexadecimal characters.</returns>
        [Pure]
        public string ToHex() => ByteUtil.Hex(ToByteArray());

        /// <summary>
        /// Gets a <see cref="MessageId"/>'s representative string.
        /// </summary>
        /// <returns>A string which represents this <see cref="MessageId"/>.
        /// </returns>
        [Pure]
        public override string ToString() => ToHex();

        /// <inheritdoc cref="IComparable{T}.CompareTo(T)"/>
        public int CompareTo(MessageId other)
        {
            for (int i = 0; i < Size; ++i)
            {
                int cmp = ByteArray[i].CompareTo(other.ByteArray[i]);
                if (cmp != 0)
                {
                    return cmp;
                }
            }

            return 0;
        }

        /// <inheritdoc cref="IComparable.CompareTo(object)"/>
        public int CompareTo(object? obj)
        {
            if (obj is MessageId other)
            {
                return ((IComparable<MessageId>)this).CompareTo(other);
            }

            if (obj is null)
            {
                throw new ArgumentNullException(nameof(obj));
            }

            throw new ArgumentException(nameof(obj));
        }

        /// <inheritdoc />
        public void GetObjectData(
            SerializationInfo info,
            StreamingContext context)
        {
            info.AddValue("message_id", _byteArray.ToArray());
        }
    }
}
