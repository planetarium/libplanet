using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.State;
using Libplanet.Tests.Common.Action;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class PolymorphicActionTest
    {
        private readonly ITestOutputHelper _output;

        public PolymorphicActionTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void PlainValue()
        {
            var addr = new PrivateKey().ToAddress();
            var pa = new PolymorphicAction<BaseAction>(
                new Attack
                {
                    Weapon = "frying pan",
                    Target = "mosquito",
                    TargetAddress = addr,
                }
            );
            Assert.Equal(
                Dictionary.Empty
                    .Add("type_id", "attack")
                    .Add("values", Dictionary.Empty
                        .Add("weapon", "frying pan")
                        .Add("target", "mosquito")
                        .Add("target_address", addr.ByteArray)),
                pa.PlainValue);
        }

        [Fact]
        public void LoadPlainValue()
        {
            var addr = new PrivateKey().ToAddress();
#pragma warning disable 612
            var pa = new PolymorphicAction<BaseAction>();
#pragma warning restore 612
            pa.LoadPlainValue(
                Dictionary.Empty
                    .Add("type_id", "attack")
                    .Add("values", Dictionary.Empty
                        .Add("weapon", "frying pan")
                        .Add("target", "mosquito")
                        .Add("target_address", addr.ByteArray)));

            Assert.IsType<Attack>(pa.InnerAction);
            Attack a = (Attack)pa.InnerAction;
            Assert.Equal("frying pan", a.Weapon);
            Assert.Equal("mosquito", a.Target);
            Assert.Equal(addr, a.TargetAddress);
        }

        [Fact]
        public void ImplicitlyCastFromInnerActionType()
        {
            var addr = new PrivateKey().ToAddress();
            var a = new Attack
            {
                Weapon = "frying pan",
                Target = "mosquito",
                TargetAddress = addr,
            };
            var actions = new PolymorphicAction<BaseAction>[] { a };
            Assert.Equal(a, actions[0].InnerAction);
        }

        [Fact]
        public void DetectLackOfActionType()
        {
            var action = new NullAction();

            Assert.Throws<MissingActionTypeException>(
                () => new PolymorphicAction<NullAction>(action)
            );
        }

        [Fact]
        public void PolymorphicActionToString()
        {
            Assert.Equal(
                "Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.Sleep>",
                new PolymorphicAction<BaseAction>(new Sleep()).ToString());
            Assert.Equal(
                "Libplanet.Action.PolymorphicAction<Libplanet.Tests.Common.Action.Attack>",
                new PolymorphicAction<BaseAction>(new Attack()).ToString());
            Assert.Equal(
                "Libplanet.Action.PolymorphicAction" +
                "<Libplanet.Tests.Common.Action.DetectRehearsal>",
                new PolymorphicAction<BaseAction>(new DetectRehearsal()).ToString());
        }

        [Fact]
        public void TextPlainValue()
        {
            var a = new TextPlainValueAction("just string");
            var pa = new PolymorphicAction<BaseAction>(a);

            var plainValue = pa.PlainValue;
#pragma warning disable 612
            var newPa = new PolymorphicAction<BaseAction>();
#pragma warning restore 612
            newPa.LoadPlainValue(plainValue);
            Assert.Equal("just string", (Text)newPa.InnerAction.PlainValue);
        }

        [Fact]
        public void IntegerActionTypeAction()
        {
            var a = new IntegerTypeIdAction("test string");
            var pv = new PolymorphicAction<BaseAction>(a).PlainValue;
#pragma warning disable 612
            var pa = new PolymorphicAction<BaseAction>();
#pragma warning restore 612
            pa.LoadPlainValue(pv);
            Assert.IsType<IntegerTypeIdAction>(pa.InnerAction);
            Assert.Equal(a.PlainValue, pa.InnerAction.PlainValue);
            Assert.Equal("test string", (Text)pa.InnerAction.PlainValue);
        }

        [Fact]
        public void DuplicateTypeId()
        {
#pragma warning disable CS0612
            TypeInitializationException e =
                Assert.Throws<TypeInitializationException>(
                    () => new PolymorphicAction<DupActionBase>());
#pragma warning restore CS0612
            var dup = new Text("dup");
            Bencodex.Types.Dictionary plainValue = Bencodex.Types.Dictionary.Empty
                .Add("type_id", dup)
                .Add("values", Null.Value);
            var inner = Assert.IsType<DuplicateActionTypeIdentifierException>(e.InnerException);
            Assert.Equal(dup.ToString(), inner.TypeIdentifier);
            Assert.Equal(
                ImmutableHashSet.Create(typeof(DupActionA), typeof(DupActionB)),
                inner.DuplicateActionTypes);
        }

        [ActionType(2739)]
        private class IntegerTypeIdAction : BaseAction
        {
            private string _value;

            public IntegerTypeIdAction()
            {
            }

            public IntegerTypeIdAction(string value)
            {
                _value = value;
            }

            public override IValue PlainValue => new Text(_value);

            public override IAccountStateDelta Execute(IActionContext context)
            {
                throw new NotSupportedException();
            }

            public override void LoadPlainValue(IValue plainValue)
            {
                _value = (Text)plainValue;
            }
        }

        [ActionType("TextPlainValueAction")]
        private class TextPlainValueAction : BaseAction
        {
            private string _value;

            public TextPlainValueAction()
            {
            }

            public TextPlainValueAction(string value)
            {
                _value = value;
            }

            public override IValue PlainValue => (Text)_value;

            public override IAccountStateDelta Execute(IActionContext context)
            {
                throw new NotSupportedException();
            }

            public override void LoadPlainValue(IValue plainValue)
            {
                _value = (Text)plainValue;
            }
        }

        private class DupActionBase : IAction
        {
            public IValue PlainValue => Null.Value;

            public IAccountStateDelta Execute(IActionContext context) =>
                context.PreviousStates;

            public void LoadPlainValue(IValue plainValue)
            {
            }
        }

        [ActionType("dup")]
        private class DupActionA : DupActionBase
        {
        }

        [ActionType("dup")]
        private class DupActionB : DupActionBase
        {
        }
    }
}
