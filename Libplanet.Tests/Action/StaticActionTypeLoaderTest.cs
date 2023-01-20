using System;
using System.Collections.Generic;
using Libplanet.Action;
using Libplanet.Tests.Common.Action;
using Xunit;

namespace Libplanet.Tests.Action
{
    public class StaticActionTypeLoaderTest
    {
        [Fact]
        public void Load()
        {
            var actionTypeLoader = new StaticActionTypeLoader(
                new[] { typeof(Attack).Assembly },
                typeof(BaseAction)
            );

            Assert.Equal(
                new Dictionary<string, Type>
                {
                    ["attack"] = typeof(Attack),
                    ["sleep"] = typeof(Sleep),
                    ["detect_rehearsal"] = typeof(DetectRehearsal),
                    ["TextPlainValueAction"] =
                        Type.GetType("Libplanet.Tests.Action."
                                     + "PolymorphicActionTest+TextPlainValueAction"),
                }, actionTypeLoader.Load());
        }

        [Fact]
        public void DuplicateIds()
        {
            var actionTypeLoader = new StaticActionTypeLoader(
                new[] { typeof(Attack).Assembly }
            );

            Assert.Throws<DuplicateActionTypeIdentifierException>(() => actionTypeLoader.Load());
        }
    }
}
