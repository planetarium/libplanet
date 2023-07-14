using System;

namespace Libplanet.Common.Types.Tx
{
    /// <summary>
    /// <see cref="ITxInvoice"/> combined with <see cref="ITxSigningMetadata"/>, or
    /// <see cref="ITransaction"/> minus its <see cref="ITransaction.Signature"/>.
    /// Ready to be signed by the specified <see cref="ITxSigningMetadata.Signer"/>.
    /// </summary>
    /// <seealso cref="UnsignedTx"/>
    /// <seealso cref="ITxInvoice"/>
    /// <seealso cref="ITxSigningMetadata"/>
    /// <seealso cref="ITransaction"/>
    public interface IUnsignedTx : ITxInvoice, ITxSigningMetadata, IEquatable<IUnsignedTx>
    {
    }
}
