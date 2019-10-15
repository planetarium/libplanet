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
            var addr = new PrivateKey().PublicKey.ToAddress();
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
                        [(Text)"target_address"] = new Binary(addr.ToByteArray()),
                    }),
                }),
                pa.PlainValue
            );
        }

        [Fact]
        public void LoadPlainValue()
        {
            var addr = new PrivateKey().PublicKey.ToAddress();
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
                        [(Text)"target_address"] = new Binary(addr.ToByteArray()),
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
            var addr = new PrivateKey().PublicKey.ToAddress();
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
            var action = new ActionNotAttributeAnnotated();

            Assert.Throws<MissingActionTypeException>(
                () => new PolymorphicAction<ActionNotAttributeAnnotated>(action)
            );
        }

        private class ActionNotAttributeAnnotated : IAction
        {
            public ActionNotAttributeAnnotated()
            {
            }

            public IValue PlainValue =>
                default(Dictionary);

            public void LoadPlainValue(
                Dictionary plainValue)
            {
            }

            public void LoadPlainValue(IValue plainValue)
            {
                LoadPlainValue((Dictionary)plainValue);
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }

            public void Render(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }

            public void Unrender(
                IActionContext context,
                IAccountStateDelta nextStates)
            {
            }
        }
    }
}
