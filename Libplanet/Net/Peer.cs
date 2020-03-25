using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Serialization;

namespace Libplanet.Net
{
    /// <summary>
    /// A representation of peer node.
    /// </summary>
    /// <seealso cref="Swarm{T}"/>
    [Serializable]
    [Equals]
    public class Peer : ISerializable
    {
        private static readonly Codec _codec = new Codec();

        public Peer(
            PublicKey publicKey,
            AppProtocolVersion appProtocolVersion)
        : this(publicKey, appProtocolVersion, null)
        {
        }

        internal Peer(
            PublicKey publicKey,
            AppProtocolVersion appProtocolVersion,
            IPAddress publicIPAddress)
        {
            PublicKey = publicKey ??
                        throw new ArgumentNullException(nameof(publicKey));
            AppProtocolVersion = appProtocolVersion;
            PublicIPAddress = publicIPAddress;
        }

        protected Peer(SerializationInfo info, StreamingContext context)
        {
            PublicKey = new PublicKey(info.GetValue<byte[]>("public_key"));
            var appProtocolVersionExtraBytes =
                (byte[])info.GetValue("app_protocol_version_extra", typeof(byte[]));
            AppProtocolVersion = new AppProtocolVersion(
                version: info.GetInt32("app_protocol_version"),
                extra: appProtocolVersionExtraBytes is byte[] e ? _codec.Decode(e) : null,
                signature: ImmutableArray.Create(
                    (byte[])info.GetValue("app_protocol_version_sig", typeof(byte[]))),
                signer: new Address(
                    (byte[])info.GetValue("app_protocol_version_signer", typeof(byte[])))
            );
            string addressStr = info.GetString("public_ip_address");
            if (addressStr != null)
            {
                PublicIPAddress = IPAddress.Parse(addressStr);
            }
        }

        /// <summary>
        /// The corresponding <see cref="Libplanet.Crypto.PublicKey"/> of
        /// this peer.
        /// </summary>
        [Pure]
        public PublicKey PublicKey { get; }

        /// <summary>
        /// The corresponding application protocol version of this peer.
        /// </summary>
        // FIXME: This would be better to be nullable...
        [IgnoreDuringEquals]
        [Pure]
        public AppProtocolVersion AppProtocolVersion { get; }

        /// <summary>The peer's address which is derived from
        /// its <see cref="PublicKey"/>.
        /// </summary>
        /// <seealso cref="PublicKey"/>
        [IgnoreDuringEquals]
        [Pure]
        public Address Address => new Address(PublicKey);

        [Pure]
        public IPAddress PublicIPAddress { get; }

        public static bool operator ==(Peer left, Peer right) => Operator.Weave(left, right);

        public static bool operator !=(Peer left, Peer right) => Operator.Weave(left, right);

        /// <summary>
        /// Determines if the peer is compatible with the given criteria.
        /// </summary>
        /// <param name="localVersion">The version of the currently running application.</param>
        /// <param name="trustedSigners">A list of signers to trust.  <em>An empty list means
        /// to trust no one, so that this method always returns <c>false</c>.</em>  Conversely,
        /// <c>null</c> means to <em>trust anyone</em>.  Be aware of the difference of those two.
        /// </param>
        /// <param name="recognizer">A callback to determine an encountered peer's
        /// <see cref="AppProtocolVersion"/> is compatible with the currently running
        /// application, in the case of the peer's version signature is trustworthy but its
        /// version number is not the same.</param>
        /// <returns><c>true</c> if the peer is compatible with the given criteria.
        /// Otherwise <c>false</c>.</returns>
        public bool IsCompatibleWith(
            AppProtocolVersion localVersion,
            IEnumerable<PublicKey> trustedSigners = null,
            DifferentAppProtocolVersionEncountered recognizer = null
        )
        {
            if (AppProtocolVersion.Equals(localVersion))
            {
                return true;
            }

            if (trustedSigners is null || trustedSigners.Any(s => AppProtocolVersion.Verify(s)))
            {
                return recognizer is null
                    ? false
                    : recognizer(this, AppProtocolVersion, localVersion);
            }

            return false;
        }

        /// <inheritdoc/>
        public virtual void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            info.AddValue("public_key", PublicKey.Format(true));
            info.AddValue("app_protocol_version", AppProtocolVersion.Version);
            info.AddValue(
                "app_protocol_version_extra",
                AppProtocolVersion.Extra is IValue e ? _codec.Encode(e) : null);
            info.AddValue(
                "app_protocol_version_sig",
                AppProtocolVersion.Signature.ToBuilder().ToArray());
            info.AddValue("app_protocol_version_signer", AppProtocolVersion.Signer.ToByteArray());
            info.AddValue("public_ip_address", PublicIPAddress?.ToString());
        }

        /// <inheritdoc/>
        public override string ToString()
        {
            return $"{nameof(Peer)} {{ {nameof(Address)} = {Address} }}";
        }
    }
}
