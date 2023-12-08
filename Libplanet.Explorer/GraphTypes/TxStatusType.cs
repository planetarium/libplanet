using GraphQL.Types;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Types.Tx;

namespace Libplanet.Explorer.GraphTypes
{
    public enum TxStatus
    {
        /// <summary>
        /// The Transaction doesn't staged or invalid.
        /// </summary>
        INVALID,

        /// <summary>
        /// The Transaction is currently staged.
        /// </summary>
        STAGING,

        /// <summary>
        /// The <see cref="Transaction"/> was successfully executed.
        /// Specifically, this means that there is a record of the execution of
        /// said <see cref="Transaction"/> that can be found that indicates its execution
        /// was success.  In particular, for this to be the case, the <see cref="Transaction"/>
        /// must have included one or more <see cref="IAction"/>s and the execution of
        /// every <see cref="IAction"/> was successful.
        /// </summary>
        SUCCESS,

        /// <summary>
        /// The <see cref="Transaction"/> failed to execute without an error.
        /// Specifically, this means that there is a record of the execution of
        /// said <see cref="Transaction"/> that can be found that indicates its execution
        /// was a failure.  In particular, for this to be the case, the <see cref="Transaction"/>
        /// must have included one or more <see cref="IAction"/>s and an execution of
        /// of at least one <see cref="IAction"/> was a failure.
        /// </summary>
        FAILURE,

        /// <summary>
        /// The <see cref="Transaction"/> is found in the <see cref="BlockChain"/> but its
        /// execution result cannot be determined.  This can happen due to one of
        /// the two following reasons:
        /// <list type="bullet">
        ///     <item><description>
        ///         The <see cref="Transaction"/> is an empty <see cref="Transaction"/>
        ///         that does not contain any <see cref="IAction"/>s.
        ///     </description></item>
        ///     <item><description>
        ///         The execution record of <see cref="Transaction"/> is simply missing for
        ///         some other reason.
        ///     </description></item>
        /// </list>
        /// </summary>
        INCLUDED,
    }

    public class TxStatusType : EnumerationGraphType<TxStatus>
    {
    }
}
