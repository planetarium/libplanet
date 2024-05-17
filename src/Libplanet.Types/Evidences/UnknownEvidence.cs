using Bencodex.Types;

namespace Libplanet.Types.Evidences
{
    internal sealed class UnknownEvidence : Evidence
    {
        private readonly Dictionary _bencoded;

        public UnknownEvidence(IValue bencoded)
            : base(bencoded)
        {
            _bencoded = (Dictionary)bencoded;
        }

        protected override Dictionary OnBencoded(Dictionary dictionary) => _bencoded;

        protected override void OnVerify(IEvidenceContext evidenceContext)
        {
        }
    }
}
