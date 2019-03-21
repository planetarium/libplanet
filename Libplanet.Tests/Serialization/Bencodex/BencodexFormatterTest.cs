using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using Libplanet.Serialization;
using Xunit;
using static Libplanet.Tests.TestUtils;

namespace Libplanet.Tests.Serialization.Bencodex
{
    public class BencodexFormatterTest
    {
        [Fact]
        public void Serialize()
        {
            var person = new Person
            {
                Name = "Swen Mun",
                Age = 30,
                Names = new List<string>
                {
                    "Swen Mun",
                    "문성원",
                    "ムンソンワン",
                },
                Secret = null,
                IsStudent = false,
            };
            var formatter = new BencodexFormatter<Person>();
            using (var stream = new MemoryStream())
            {
                formatter.Serialize(stream, person);
                byte[] result = stream.ToArray();
                AssertBytesEqual(
                    new byte[]
                    {
                        0x64, 0x33, 0x3a, 0x41, 0x67, 0x65, 0x69, 0x33, 0x30,
                        0x65, 0x39, 0x3a, 0x49, 0x73, 0x53, 0x74, 0x75, 0x64,
                        0x65, 0x6e, 0x74, 0x66, 0x34, 0x3a, 0x4e, 0x61, 0x6d,
                        0x65, 0x75, 0x38, 0x3a, 0x53, 0x77, 0x65, 0x6e, 0x20,
                        0x4d, 0x75, 0x6e, 0x35, 0x3a, 0x4e, 0x61, 0x6d, 0x65,
                        0x73, 0x6c, 0x75, 0x38, 0x3a, 0x53, 0x77, 0x65, 0x6e,
                        0x20, 0x4d, 0x75, 0x6e, 0x75, 0x39, 0x3a, 0xeb, 0xac,
                        0xb8, 0xec, 0x84, 0xb1, 0xec, 0x9b, 0x90, 0x75, 0x31,
                        0x38, 0x3a, 0xe3, 0x83, 0xa0, 0xe3, 0x83, 0xb3, 0xe3,
                        0x82, 0xbd, 0xe3, 0x83, 0xb3, 0xe3, 0x83, 0xaf, 0xe3,
                        0x83, 0xb3, 0x65, 0x36, 0x3a, 0x53, 0x65, 0x63, 0x72,
                        0x65, 0x74, 0x6e, 0x65,
                    },
                    result
                );
            }
        }

        [Fact]
        public void SerializeOnlyTakesISerializable()
        {
            var formatter = new BencodexFormatter<string>();

            using (var stream = new MemoryStream())
            {
                Assert.Throws<SerializationException>(() =>
                    formatter.Serialize(stream, "Test"));
            }
        }

        [Fact]
        public void Deserialize()
        {
            byte[] serialized = new byte[]
            {
                0x64, 0x33, 0x3a, 0x41, 0x67, 0x65, 0x69, 0x33, 0x30, 0x65,
                0x39, 0x3a, 0x49, 0x73, 0x53, 0x74, 0x75, 0x64, 0x65, 0x6e,
                0x74, 0x66, 0x34, 0x3a, 0x4e, 0x61, 0x6d, 0x65, 0x75, 0x38,
                0x3a, 0x53, 0x77, 0x65, 0x6e, 0x20, 0x4d, 0x75, 0x6e, 0x35,
                0x3a, 0x4e, 0x61, 0x6d, 0x65, 0x73, 0x6c, 0x75, 0x38, 0x3a,
                0x53, 0x77, 0x65, 0x6e, 0x20, 0x4d, 0x75, 0x6e, 0x75, 0x39,
                0x3a, 0xeb, 0xac, 0xb8, 0xec, 0x84, 0xb1, 0xec, 0x9b, 0x90,
                0x75, 0x31, 0x38, 0x3a, 0xe3, 0x83, 0xa0, 0xe3, 0x83, 0xb3,
                0xe3, 0x82, 0xbd, 0xe3, 0x83, 0xb3, 0xe3, 0x83, 0xaf, 0xe3,
                0x83, 0xb3, 0x65, 0x36, 0x3a, 0x53, 0x65, 0x63, 0x72, 0x65,
                0x74, 0x6e, 0x65,
            };
            var formatter = new BencodexFormatter<Person>();
            using (var stream = new MemoryStream(serialized))
            {
                var person = (Person)formatter.Deserialize(stream);
                Assert.Equal(30, person.Age);
                Assert.Equal("Swen Mun", person.Name);
                Assert.Equal(
                    new List<string> { "Swen Mun", "문성원", "ムンソンワン" },
                    person.Names);
                Assert.Null(person.Secret);
                Assert.False(person.IsStudent);
            }
        }
    }

#pragma warning disable SA1402 // File may only contain a single class
    [Serializable]
    internal class Person : ISerializable
    {
        public Person()
        {
        }

        protected Person(SerializationInfo info, StreamingContext context)
        {
            Name = info.GetString("Name");
            Age = (int)info.GetInt64("Age");
            Names =
                ((List<object>)info.GetValue("Names", typeof(List<object>)))
                .Select(s => (string)s)
                .ToList();
            Secret = info.GetString("Secret");
            IsStudent = info.GetBoolean("IsStudent");
        }

        public string Name { get; internal set; }

        public int Age { get; internal set; }

        public List<string> Names { get; internal set; }

        public string Secret { get; internal set; }

        public bool IsStudent { get; internal set; }

        public void GetObjectData(
            SerializationInfo info, StreamingContext context)
        {
            info.AddValue("Name", Name);
            info.AddValue("Age", Age);
            info.AddValue("Names", Names);
            info.AddValue("Secret", Secret);
            info.AddValue("IsStudent", IsStudent);
        }
    }
#pragma warning restore SA1402 // File may only contain a single class
}
