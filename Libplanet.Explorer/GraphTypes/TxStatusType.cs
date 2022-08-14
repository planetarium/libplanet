using GraphQL.Types;

namespace Libplanet.Explorer.GraphTypes
{
    public enum TxStatus
    {
        /// <summary>
        /// The Transaction doesn't staged or invalid.
        /// </summary>
        INVALID,

        /// <summary>
        /// The Transaction do not executed yet.
        /// </summary>
        STAGING,

        /// <summary>
        /// The Transaction is success.
        /// </summary>
        SUCCESS,

        /// <summary>
        /// The Transaction is failure.
        /// </summary>
        FAILURE,
    }

    public class TxStatusType : EnumerationGraphType<TxStatus>
    {
    }
}
