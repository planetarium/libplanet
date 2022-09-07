using System;
using System.Collections.Immutable;
using Bencodex.Types;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class PolymorphicActionTest
    {
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
        public void DuplicateTypeId()
        {
#pragma warning disable CS0612
            var pa = new PolymorphicAction<DupActionBase>();
#pragma warning restore CS0612
            Bencodex.Types.Dictionary plainValue = Bencodex.Types.Dictionary.Empty
                .Add("type_id", "dup")
                .Add("values", Null.Value);
            DuplicateActionTypeIdentifierException e =
                Assert.Throws<DuplicateActionTypeIdentifierException>(
                    () => pa.LoadPlainValue(plainValue)
                );
            Assert.Equal("dup", e.TypeIdentifier);
            Assert.Equal(
                ImmutableHashSet.Create(typeof(DupActionA), typeof(DupActionB)),
                e.DuplicateActionTypes
            );
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
