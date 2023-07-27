#nullable disable
using Bencodex.Types;
using Libplanet.Action.State;

namespace Libplanet.Action
{
    /// <summary>
    /// An in-game action.  Every action should be replayable, because
    /// multiple nodes in a network should execute an action and get the same
    /// result.
    /// <para>A &#x201c;class&#x201d; which implements this interface is
    /// analogous to a function, and its instance is analogous to a
    /// <a href="https://en.wikipedia.org/wiki/Partial_application">partial
    /// function application</a>, in other words, a function with some bound
    /// arguments.  Those parameters that will be bound at runtime should be
    /// represented as fields or properties in an action class, and bound
    /// argument values to these parameters should be received through
    /// a constructor parameters of that class.</para>
    /// <para>From a perspective of security, an action class belongs to
    /// the network protocol, and property values in an action belong to
    /// a node's will (i.e., a user/player's choice).
    /// That means if you define an action class it also defines what every
    /// honest node can do in the network.  Even if a malicious node changes
    /// their own action code it won't affect other honest nodes in
    /// the network.</para>
    /// <para>For example, where honest nodes share the common action
    /// <c>Heal(Target) => PreviousState[Target] + 1</c>, suppose a malicious
    /// node <c>m</c> changes their own <c>Heal</c> action code to
    /// <c>Heal(Target) => PreviousState[Target] + 2</c> (2 instead of 1),
    /// and then send an action <c>Heal(m)</c>.
    /// Fortunately, this action does not work as <c>m</c>'s intention,
    /// because the changed code in itself is not used by other honest nodes,
    /// so they still increase only 1, not 2.  The effect of that double healing
    /// is a sort of &#x201c;illusion&#x201d; only visible to the malicious node
    /// alone.</para>
    /// <para>In conclusion, action code is a part of the protocol and it works with
    /// consensus in the network, so only things each node can affect the network
    /// in general is property values of each action they sign and send,
    /// not code of an action.</para>
    /// </summary>
    /// <example>
    /// The following example shows how to implement an action of three types
    /// of in-game logic:
    /// <code><![CDATA[
    /// using System;
    /// using System.Collections.Generic;
    /// using System.Collections.Immutable;
    /// using Bencodex.Types;
    /// using Libplanet;
    /// using Libplanet.Action;
    /// public class MyAction : IAction
    /// {
    ///     // Declare an enum type to distinguish types of in-game logic.
    ///     public enum ActType { CreateCharacter, Attack, Heal }
    ///     // Declare properties (or fields) to store "bound" argument values.
    ///     public ActType Type { get; private set; }
    ///     public Address TargetAddress { get; private set; }
    ///     // Action must has a public parameterless constructor.
    ///     // Usually this is used only by Libplanet's internals.
    ///     public MyAction() {}
    ///     // Take argument values to "bind" through constructor parameters.
    ///     public MyAction(ActType type, Address targetAddress)
    ///     {
    ///         Type = type;
    ///         TargetAddress = targetAddress;
    ///     }
    ///     // The main game logic belongs to here.  It takes the
    ///     // previous states through its parameter named context,
    ///     // and is offered "bound" argument values through
    ///     // its own properties (or fields).
    ///     IAccountStateDelta IAction.Execute(IActionContext context)
    ///     {
    ///         // Gets the state immediately before this action is executed.
    ///         // ImmutableDictionary<string, uint> is just for example,
    ///         // As far as it is serializable, you can store any types.
    ///         // (We recommend to use immutable types though.)
    ///         var state =
    ///             context.PreviousState.GetState(TargetAddress);
    ///         Dictionary dictionary;
    ///         // This variable purposes to store the state
    ///         // right after this action finishes.
    ///         IImmutableDictionary<IKey, IValue> nextState;
    ///         // Does different things depending on the action's type.
    ///         // This way is against the common principals of programming
    ///         // as it is just an example.
    ///         switch (Type)
    ///         {
    ///             case ActType.CreateCharacter:
    ///                 if (!TargetAddress.Equals(context.Signer))
    ///                     throw new Exception(
    ///                         "TargetAddress of CreateCharacter action " +
    ///                         "only can be the same address to the " +
    ///                         "Transaction.Signer.");
    ///                 else if (!(state is null))
    ///                     throw new Exception(
    ///                         "Character was already created.");
    ///                 nextState = ImmutableDictionary<IKey, IValue>.Empty
    ///                     .Add((Text)"hp", (Integer)20);
    ///                 break;
    ///             case ActType.Attack:
    ///                 dictionary = (Bencodex.Types.Dictionary)state;
    ///                 nextState =
    ///                     dictionary.SetItem(
    ///                         (Text)"hp",
    ///                         (Integer)Math.Max(
    ///                             dictionary.GetValue<Integer>("hp") - 5,
    ///                             0)
    ///                     );
    ///                 break;
    ///             case ActType.Heal:
    ///                 dictionary = (Bencodex.Types.Dictionary)state;
    ///                 nextState =
    ///                     dictionary.SetItem(
    ///                         (Text)"hp",
    ///                         (Integer)Math.Min(
    ///                             dictionary.GetValue<Integer>("hp") + 5,
    ///                             20)
    ///                     );
    ///                 break;
    ///             default:
    ///                 throw new Exception(
    ///                     "Properties are not properly initialized.");
    ///         }
    ///         // Builds a delta (dirty) from previous to next states, and
    ///         // returns it.
    ///         return context.PreviousState.SetState(TargetAddress,
    ///             (Dictionary)nextState);
    ///     }
    ///     // Serializes its "bound arguments" so that they are transmitted
    ///     // over network or stored to the persistent storage.
    ///     IValue IAction.PlainValue =>
    ///         new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
    ///         {
    ///             [(Text)"type"] = (Integer)(int)Type,
    ///             [(Text)"target_address"] = (Binary)TargetAddress.ToByteArray(),
    ///         });
    ///     // Deserializes "bound arguments".  That is, it is inverse
    ///     // of PlainValue property.
    ///     void IAction.LoadPlainValue(
    ///         IValue plainValue)
    ///     {
    ///         var dictionary = (Bencodex.Types.Dictionary)plainValue;
    ///         Type = (ActType)(int)dictionary.GetValue<Integer>("type");
    ///         TargetAddress =
    ///             new Address(dictionary.GetValue<Binary>("target_address"));
    ///     }
    /// }
    /// ]]></code>
    /// </example>
    public interface IAction
    {
        /// <summary>
        /// Serializes values bound to an action, which is held by properties
        /// (or fields) of an action, so that they can be transmitted over
        /// network or saved to persistent storage.
        /// <para>Serialized values are deserialized by
        /// <see cref="LoadPlainValue(IValue)"/> method later.</para>
        /// </summary>
        /// <returns>A Bencodex value which encodes this action's bound values (held
        /// by properties or fields).
        /// </returns>
        /// <seealso cref="LoadPlainValue(IValue)"/>
        IValue PlainValue { get; }

        /// <summary>
        /// Deserializes serialized data (i.e., data <see cref="PlainValue"/>
        /// property made), and then fills this action's properties (or fields)
        /// with the deserialized values.
        /// </summary>
        /// <param name="plainValue">Data (made by <see cref="PlainValue"/>
        /// property) to be deserialized and assigned to this action's
        /// properties (or fields).</param>
        /// <seealso cref="PlainValue"/>
        void LoadPlainValue(IValue plainValue);

        /// <summary>
        /// Executes the main game logic of an action.  This should be
        /// <em>deterministic</em>.
        /// <para>Through the <paramref name="context"/> object,
        /// it receives information such as a transaction signer,
        /// its states immediately before the execution,
        /// and a deterministic random seed.</para>
        /// <para>Other &#x201c;bound&#x201d; information resides in the action
        /// object in itself, as its properties (or fields).</para>
        /// <para>A returned <see cref="IAccount"/> object functions as
        /// a delta which shifts from previous states to next states.</para>
        /// </summary>
        /// <param name="context">A context object containing addresses that
        /// signed the transaction, states immediately before the execution,
        /// and a PRNG object which produces deterministic random numbers.
        /// See <see cref="IActionContext"/> for details.</param>
        /// <returns>A map of changed states (so-called "dirty").</returns>
        /// <remarks>This method should be deterministic:
        /// for structurally (member-wise) equal actions and <see
        /// cref="IActionContext"/>s, the same result should be returned.
        /// Side effects should be avoided, because an action's
        /// <see cref="Execute(IActionContext)"/> method can be called more
        /// than once, the time it's called is difficult to predict.
        /// <para>For changing in-memory game states or drawing graphics,
        /// implement the <see cref="Blockchain.Renderers.IRenderer"/> interface separately and
        /// attach it to a <see cref="Blockchain.BlockChain"/> instance.</para>
        /// <para>For randomness, <em>never</em> use <see cref="System.Random"/>
        /// nor any other PRNGs provided by other than Libplanet.
        /// Use <see cref="IActionContext.Random"/> instead.
        /// <see cref="IActionContext.Random"/> guarantees the same action
        /// has the consistent result for every node in the network.</para>
        /// <para>Also do not perform I/O operations such as file system access
        /// or networking.  These bring an action indeterministic.  You maybe
        /// fine to log messages for debugging purpose, but equivalent messages
        /// could be logged multiple times.</para>
        /// <para>Although it might be surprising, <a
        /// href="https://wp.me/p1fTCO-kT">floating-point arithmetics are
        /// underspecified so that it can make different results on different
        /// machines, platforms, runtimes, compilers, and builds</a>.</para>
        /// <para>Lastly, you need to be aware and keep in mind that there
        /// is a global state named <see
        /// cref="System.Globalization.CultureInfo.CurrentCulture"/> on .NET;
        /// if you format numbers, dates and times, currencies, or other such
        /// things into strings and parse these strings back these can rely on
        /// <see cref="System.Globalization.CultureInfo.CurrentCulture"/>,
        /// so that the same action make different results on two differently
        /// configured systems like Thai language and French language.
        /// In order to make these types of conversions deterministic,
        /// you have to explicitly pass <see
        /// cref="System.Globalization.CultureInfo.InvariantCulture"/>.</para>
        /// <para>For more on determinism in general, please read also <a
        /// href="https://tendermint.com/docs/spec/abci/abci.html#determinism"
        /// >Tendermint ABCI's docs on determinism</a>.</para>
        /// <para>Lastly, you can conduct static analysis on your code
        /// using <a href="https://git.io/JTmby">Libplanet.Analyzers</a>.
        /// The analyzer can be enabled by adding its NuGet package into
        /// your project as a dependency.</para>
        /// </remarks>
        /// <seealso cref="IActionContext"/>
        IAccount Execute(IActionContext context);
    }
}
