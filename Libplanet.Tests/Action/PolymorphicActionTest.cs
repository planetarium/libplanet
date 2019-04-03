using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Crypto;
using Libplanet.Tests.Common.Action;
using Libplanet.Tx;
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
                new Dictionary<string, object>
                {
                    { "type_id", "attack" },
                    {
                        "values",
                        new Dictionary<string, object>
                        {
                            { "weapon", "frying pan" },
                            { "target", "mosquito" },
                            { "target_address", addr.ToByteArray() },
                        }.ToImmutableDictionary()
                    },
                }.ToImmutableDictionary(),
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
                new Dictionary<string, object>
                {
                    { "type_id", "attack" },
                    {
                        "values",
                        new Dictionary<string, object>
                        {
                            { "weapon", "frying pan" },
                            { "target", "mosquito" },
                            { "target_address", addr.ToByteArray() },
                        }.ToImmutableDictionary()
                    },
                }.ToImmutableDictionary()
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

            public IImmutableDictionary<string, object> PlainValue =>
                new Dictionary<string, object>().ToImmutableDictionary();

            public void LoadPlainValue(
                IImmutableDictionary<string, object> plainValue)
            {
            }

            public IAccountStateDelta Execute(IActionContext context)
            {
                return context.PreviousStates;
            }
        }
    }
}
