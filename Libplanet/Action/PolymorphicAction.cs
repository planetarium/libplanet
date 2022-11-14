#nullable disable
using System;
using System.Collections.Generic;
using System.Reflection;
using Bencodex.Types;

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
    /// using System.Collections.Generic;
    /// using Bencodex.Types;
    /// using Libplanet;
    /// using Libplanet.Action;
    /// // Instead of having multiple in-game actions in a class,
    /// // in this example, we declare one abstract base class
    /// // and its three concrete subclasses.
    /// public abstract class ActionBase : IAction
    /// {
    ///     public ActionBase() { }
    ///     public ActionBase(Address targetAddress)
    ///     {
    ///         TargetAddress = targetAddress;
    ///     }
    ///     public Address TargetAddress { get; private set; }
    ///     // Leaves Execute() abstract so that concrete subclasses
    ///     // implement their own logic.
    ///     public abstract IAccountStateDelta Execute(IActionContext context);
    ///     IValue IAction.PlainValue =>
    ///         new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
    ///         {
    ///             [(Text)"target_address"] = (Binary)TargetAddress.ToByteArray(),
    ///         });
    ///     void IAction.LoadPlainValue(
    ///         IValue plainValue)
    ///     {
    ///         var dictionary = (Bencodex.Types.Dictionary)plainValue;
    ///         TargetAddress =
    ///             new Address(dictionary.GetValue<Binary>("target_address"));
    ///     }
    /// }
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
    ///         var state =
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
    ///             new Bencodex.Types.Dictionary(new Dictionary<IKey, IValue>
    ///             {
    ///                 [(Text)"hp"] = (Integer)20,
    ///             })
    ///         );
    ///     }
    /// }
    /// [ActionType("attack")]
    /// public sealed class Attack : ActionBase
    /// {
    ///     public override IAccountStateDelta Execute(IActionContext context)
    ///     {
    ///         var state =
    ///             (Bencodex.Types.Dictionary)context.PreviousStates.GetState(TargetAddress);
    ///         return context.PreviousStates.SetState(
    ///             TargetAddress,
    ///             (Bencodex.Types.Dictionary)state
    ///                 .SetItem(
    ///                     (Text)"hp",
    ///                     (Integer)Math.Max(state.GetValue<Integer>("hp") - 5, 0))
    ///         );
    ///     }
    /// }
    /// [ActionType("heal")]
    /// public sealed class Heal : ActionBase
    /// {
    ///     public override IAccountStateDelta Execute(IActionContext context)
    ///     {
    ///         var state =
    ///             (Bencodex.Types.Dictionary)context.PreviousStates.GetState(TargetAddress);
    ///         return context.PreviousStates.SetState(
    ///             TargetAddress,
    ///             (Bencodex.Types.Dictionary)state
    ///                 .SetItem(
    ///                     (Text)"hp",
    ///                     (Integer)Math.Min(state.GetValue<Integer>("hp") + 5, 20))
    ///         );
    ///     }
    /// }
    /// ]]></code>
    /// Note that when it's rendered through <see cref="Blockchain.Renderers.IRenderer{T}"/>,
    /// an instance of <see cref="PolymorphicAction{T}"/> is passed instead of its
    /// <see cref="InnerAction"/>:
    /// <code>
    /// public class Renderer : IActionRenderer&lt;PolymorphicAction&lt;ActionBase&gt;&gt;
    /// {
    ///     public void RenderAction(IAction action,
    ///                              IActionContext context,
    ///                              IAccountStateDelta nextStates)
    ///     {
    ///         if (action is PolymorphicAction&lt;ActionBase&gt; polymorphicAction)
    ///         {
    ///             switch (polymorphicAction.InnerAction)
    ///             {
    ///                 // render things here
    ///             }
    ///         }
    ///     }
    ///     // ... other method implementations
    /// }
    /// </code>
    /// </example>
    /// <remarks>Every concrete action subclass of <typeparamref name="T"/>
    /// has to be marked with the <see cref="ActionTypeAttribute"/>.
    /// Even if a superclass is marked with
    /// the <see cref="ActionTypeAttribute"/> its subclass also should be
    /// marked with the <see cref="ActionTypeAttribute"/> if it is concrete.
    /// <para>Also, every concrete action subclass of <typeparamref name="T"/>
    /// has to be declared in the same assembly as <typeparamref name="T"/>,
    /// or at least in the entry assembly of the application.</para>
    /// </remarks>
    public sealed class PolymorphicAction<T> : IAction
        where T : IAction
    {
        private static readonly StaticActionTypeLoader _actionTypeLoader =
            new StaticActionTypeLoader(
                Assembly.GetEntryAssembly() is Assembly entryAssembly
                    ? new[] { typeof(T).Assembly, entryAssembly }
                    : new[] { typeof(T).Assembly },
                typeof(T)
            );

        private static IDictionary<string, Type> _types;

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
                    throw new MissingActionTypeException(message, type);
                }

                _innerAction = value;
            }
        }

        public IValue PlainValue =>
            Dictionary.Empty
            .Add("type_id", ActionTypeAttribute.ValueOf(InnerAction.GetType()))
            .Add("values", InnerAction.PlainValue);

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

        public string GetInnerActionTypeName()
        {
            return $"{_innerAction}";
        }

        public void LoadPlainValue(Dictionary plainValue)
        {
            var typeStr = (Text)plainValue["type_id"];
            var innerAction = (T)Activator.CreateInstance(GetType(typeStr));
            innerAction.LoadPlainValue(plainValue["values"]);
            InnerAction = innerAction;
        }

        /// <inheritdoc/>
        public void LoadPlainValue(IValue plainValue)
        {
            LoadPlainValue((Dictionary)plainValue);
        }

        /// <inheritdoc/>
        public IAccountStateDelta Execute(IActionContext context) =>
            InnerAction.Execute(context);

        public override string ToString()
        {
            const string polymorphicActionFullName = nameof(Libplanet) + "." + nameof(Action) +
                                                     "." + nameof(PolymorphicAction<T>);
            return $"{polymorphicActionFullName}<{_innerAction}>";
        }

        private static Type GetType(string typeId)
        {
            _types ??= _actionTypeLoader.Load();
            return _types[typeId];
        }
    }
}
