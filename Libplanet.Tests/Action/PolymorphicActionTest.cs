using System;
using System.Collections.Generic;
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
                new Dictionary(new Dictionary<IKey, IValue>
                {
                    [(Text)"type_id"] = (Text)"attack",
                    [(Text)"values"] = new Dictionary(new Dictionary<IKey, IValue>
                    {
                        [(Text)"weapon"] = (Text)"frying pan",
                        [(Text)"target"] = (Text)"mosquito",
                        [(Text)"target_address"] = new Binary(addr.ByteArray),
                    }),
                }),
                pa.PlainValue
            );
        }

        [Fact]
        public void LoadPlainValue()
        {
            var addr = new PrivateKey().ToAddress();
#pragma warning disable 612
            var pa = new PolymorphicAction<BaseAction>();
#pragma warning restore 612
            pa.LoadPlainValue(
                new Dictionary(new Dictionary<IKey, IValue>
                {
                    [(Text)"type_id"] = (Text)"attack",
                    [(Text)"values"] = new Dictionary(new Dictionary<IKey, IValue>
                    {
                        [(Text)"weapon"] = (Text)"frying pan",
                        [(Text)"target"] = (Text)"mosquito",
                        [(Text)"target_address"] = new Binary(addr.ByteArray),
                    }),
                })
            );

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
    }
}
