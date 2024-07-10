using System;
using Bencodex.Types;
using Libplanet.Crypto;
using Libplanet.Types.Evidence;

namespace Libplanet.Tests.Blockchain.Evidence
{
    public sealed class TestEvidence : EvidenceBase, IEquatable<TestEvidence>
    {
        public TestEvidence(
            long height,
            Address validatorAddress,
            DateTimeOffset timestamp)
            : base(height, validatorAddress, timestamp)
        {
        }

        public TestEvidence(IValue bencoded)
            : base(bencoded)
        {
        }

        public Address ValidatorAddress => TargetAddress;

        /// <inheritdoc/>
        public bool Equals(TestEvidence other) => base.Equals(other);

        /// <inheritdoc/>
        public override bool Equals(object obj)
            => obj is TestEvidence other && Equals(other);

        /// <inheritdoc/>
        public override int GetHashCode() => base.GetHashCode();

        protected override Dictionary OnBencoded(Dictionary dictionary)
            => dictionary;

        protected override void OnVerify(IEvidenceContext evidenceContext)
        {
        }
    }
}
