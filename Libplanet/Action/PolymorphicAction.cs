using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Reflection;

namespace Libplanet.Action
{
    /// <summary>
    /// A decorator to enable subtype polymorphism for action classes.
    /// <para>By convention, concrete action subclasses are named with verb
    /// phrases, e.g., <c>Heal</c>, <c>Sell</c>.</para>
    /// <para>One downside of this compared to the vanilla <see cref="IAction"/>
    /// is the fact that it uses reflection under the hood.  This may cause
    /// compatibility issues on certain platforms, and is slightly slower.
    /// </para>
    /// </summary>
    /// <typeparam name="T">An action base class which implements
    /// <see cref="IAction"/> and has subclasses.  Usually an abstract
    /// class.</typeparam>
    /// <example>
    /// The following example shows how polymorphic actions look like
    /// (compare this with an <see cref="IAction"/> example without
    /// subtype polymorphism):
    /// <code><![CDATA[
    /// using System;
    /// using System.Collections.Immutable;
    /// using Libplanet;
    /// using Libplanet.Action;
    ///
    /// // Instead of having multiple in-game actions in a class,
    /// // in this example, we declare one abstract base class
    /// // and its three concrete subclasses.
    /// public abstract class ActionBase : IAction
    /// {
    ///     public ActionBase() { }
    ///
    ///     public ActionBase(Address targetAddress)
    ///     {
    ///         TargetAddress = targetAddress;
    ///     }
    ///
    ///     public Address TargetAddress { get; private set; }
    ///
    ///     // Leaves Execute() abstract so that concrete subclasses
    ///     // implement their own logic.
    ///     public abstract IAccountStateDelta Execute(IActionContext context);
    ///
    ///     IImmutableDictionary<string, object> IAction.PlainValue =>
    ///         ImmutableDictionary<string, object>.Empty
    ///             .Add("target_address", TargetAddress);
    ///
    ///     void IAction.LoadPlainValue(
    ///         IImmutableDictionary<string, object> plainValue)
    ///     {
    ///         TargetAddress = (Address)plainValue["target_address"];
    ///     }
    /// }
    ///
    /// // PolymorphicAction<T> requires concrete action classes marked with
    /// // ActionTypeAttribute.
    /// // There is only one required parameter to ActionTypeAttribute,
    /// // which takes a unique identifier of the action type.
    /// // This is used for serialization and deserialization under the hood.
    /// [ActionType("create_character")]
    /// public sealed class CreateCharacter : ActionBase
    /// {
    ///     public override IAccountStateDelta Execute(IActionContext context)
    ///     {
    ///         var state = (ImmutableDictionary<string, uint>)
    ///             context.PreviousStates.GetState(TargetAddress);
    ///         if (!TargetAddress.Equals(context.Signer))
    ///             throw new Exception(
    ///                 "TargetAddress of CreateCharacter action only can be " +
    ///                 "the same address to the Transaction<T>.Signer."
    ///             );
    ///         else if (!(state is null))
    ///             throw new Exception("Character was already created.");
    ///         return context.PreviousStates.SetState(
    ///             TargetAddress,
    ///             ImmutableDictionary<string, uint>.Empty.Add("hp", 20)
    ///         );
    ///     }
    /// }
    ///
    /// [ActionType("attack")]
    /// public sealed class Attack : ActionBase
    /// {
    ///     public override IAccountStateDelta Execute(IActionContext context)
    ///     {
    ///         var state = (ImmutableDictionary<string, uint>)
    ///             context.PreviousStates.GetState(TargetAddress);
    ///         return context.PreviousStates.SetState(
    ///             TargetAddress,
    ///             state.SetItem("hp", Math.Max(state["hp"] - 5, 0))
    ///         );
    ///     }
    /// }
    ///
    /// [ActionType("heal")]
    /// public sealed class Heal : ActionBase
    /// {
    ///     public override IAccountStateDelta Execute(IActionContext context)
    ///     {
    ///         var state = (ImmutableDictionary<string, uint>)
    ///             context.PreviousStates.GetState(TargetAddress);
    ///         return context.PreviousStates.SetState(
    ///             TargetAddress,
    ///             state.SetItem("hp", Math.Min(state["hp"] + 5, 20))
    ///         );
    ///     }
    /// }
    /// ]]></code>
    /// </example>
    /// <remarks>Every concrete action subclass of <typeparamref name="T"/>
    /// has to be marked with the <see cref="ActionTypeAttribute"/>.
    /// Even if a superclass is marked with
    /// the <see cref="ActionTypeAttribute"/> its subclass also should be
    /// marked with the <see cref="ActionTypeAttribute"/> if it is concrete.
    /// </remarks>
    public sealed class PolymorphicAction<T> : IAction
        where T : IAction
    {
        private static readonly IDictionary<string, Type> Types = typeof(T)
            .Assembly
            .GetTypes()
            .Where(t => t.IsDefined(typeof(ActionTypeAttribute)))
            .ToDictionary(ActionTypeAttribute.ValueOf, t => t);

        private T _innerAction;

        /// <summary>
        /// Do not use this constructor.
        /// Use <see cref="PolymorphicAction{T}(T)"/> instead.
        /// </summary>
        [Obsolete]
        public PolymorphicAction()
        {
        }

        /// <summary>
        /// Creates a new <see cref="PolymorphicAction{T}"/> instance wrapping
        /// an <paramref name="innerAction"/>.
        /// </summary>
        /// <param name="innerAction">An instance of <typeparamref name="T"/>
        /// (or one of its subtypes) to wrap.</param>
        /// <exception cref="MissingActionTypeException">Thrown
        /// when the class of the given <paramref name="innerAction"/>
        /// is not annotated with <see cref="ActionTypeAttribute"/>.</exception>
        public PolymorphicAction(T innerAction)
        {
            InnerAction = innerAction;
        }

        /// <summary>
        /// The wrapped action object of <typeparamref name="T"/>
        /// (or one of its subtypes).
        /// </summary>
        public T InnerAction
        {
            get => _innerAction;
            private set
            {
                var type = value.GetType();
                if (ActionTypeAttribute.ValueOf(type) is null)
                {
                    var message =
                        $"Action class to wrap should be annotated with " +
                        $"{typeof(ActionTypeAttribute)}.";
                    throw new MissingActionTypeException(type, message);
                }

                _innerAction = value;
            }
        }

        /// <inheritdoc/>
        public IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>
            {
                {
                    "type_id",
                    ActionTypeAttribute.ValueOf(InnerAction.GetType())
                },
                {
                    "values",
                    InnerAction.PlainValue
                },
            }.ToImmutableDictionary();

        /// <summary>
        /// For convenience, an inner action <typeparamref name="T"/> can be
        /// implicitly casted to <see cref="PolymorphicAction{T}"/>.
        /// </summary>
        /// <param name="innerAction">An instance of <typeparamref name="T"/>
        /// (or one of its subtypes) to wrap.</param>
        /// <returns>A <see cref="PolymorphicAction{T}"/> wrapping the given
        /// <paramref name="innerAction"/>.</returns>
        /// <exception cref="MissingActionTypeException">Thrown
        /// when the class of the given <paramref name="innerAction"/>
        /// is not annotated with <see cref="ActionTypeAttribute"/>.</exception>
        public static implicit operator PolymorphicAction<T>(T innerAction)
        {
            return new PolymorphicAction<T>(innerAction);
        }

        /// <inheritdoc/>
        public void LoadPlainValue(
            IImmutableDictionary<string, object> plainValue
        )
        {
            var typeStr = (string)plainValue["type_id"];
            var innerAction = (T)Activator.CreateInstance(Types[typeStr]);
            var values = (IDictionary<string, object>)plainValue["values"];
            innerAction.LoadPlainValue(values.ToImmutableDictionary());
            InnerAction = innerAction;
        }

        /// <inheritdoc/>
        public IAccountStateDelta Execute(IActionContext context) =>
            InnerAction.Execute(context);
    }
}
