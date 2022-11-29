using System;
using System.Collections.Immutable;
using System.Diagnostics.Contracts;
using System.Numerics;
using System.Reflection;
using BTypes = Bencodex.Types;

namespace Libplanet.Store
{
    /// <summary>
    /// <para>
    /// A <c>class</c> representing an abstract data model that can be easily
    /// encoded and decoded to and from a <see cref="BTypes.Dictionary"/>.
    /// </para>
    /// <para>
    /// Inheriting this class and simply declaring properties allows an instance of the child class
    /// to encode its data into a <see cref="BTypes.Dictionary"/> where the encoded
    /// <see cref="BTypes.Dictionary"/> has the concrete class'es each property name as its key and
    /// the each corresponding property value as its value.
    /// </para>
    /// <para>
    /// However, there are certain restrictions that apply when using this <c>class</c>:
    /// <list type="bullet">
    ///     <item><description>
    ///         The complete list of allowed property types are as follows:
    ///         <list type="bullet">
    ///             <item><description>
    ///                 Primitive types: <c>bool</c>, <c>int</c>, <c>long</c>, <c>BigInteger</c>,
    ///                 <c><![CDATA[ImmutableArray<byte>]]></c>, <c>Guid</c>, <c>Address</c>,
    ///                 and <c>string</c>.
    ///             </description></item>
    ///             <item><description>
    ///                 Special types: Any type inherited from <see cref="DataModel"/>.
    ///             </description></item>
    ///             <item><description>
    ///                 Collective types:
    ///                 <list type="bullet">
    ///                     <item><description>
    ///                         <see cref="ImmutableList{T}"/> where <c>T</c> is a primitive type.
    ///                     </description></item>
    ///                     <item><description>
    ///                         <see cref="ImmutableDictionary{TKey,TValue}"/> where
    ///                         <list type="bullet">
    ///                             <item><description>
    ///                                 <c>TKey</c> is one of
    ///                                 <c><![CDATA[ImmutableArray<byte>]]></c>, <c>Address</c>,
    ///                                 <c>Guid</c>, and <c>string</c>.
    ///                             </description></item>
    ///                             <item><description>
    ///                                 <c>TValue</c> is a primitive type.
    ///                             </description></item>
    ///                         </list>
    ///                     </description></item>
    ///                 </list>
    ///             </description></item>
    ///         </list>
    ///     </description></item>
    ///     <item><description>
    ///         Value types are not allowed to be declared as <c>nullable</c>, not even as
    ///         a generic type parameter.  That is, types such as <c>bool?</c>, <c>Address?</c>,
    ///         and <c><![CDATA[ImmutableList<int?>]]></c>are not allowed.
    ///     </description></item>
    ///     <item><description>
    ///         Reference types are not allowed to be assigned <see langword="null"/>.  This will
    ///         result in an <see cref="Exception"/> when <see cref="Encode"/> is called.
    ///     </description></item>
    ///     <item><description>
    ///         Trying to assign <see langword="null"/> to any property or to a part of
    ///         a collection will result in an <see cref="Exception"/> when
    ///         <see cref="DataModel(BTypes.Dictionary)"/> is called.
    ///     </description></item>
    /// </list>
    /// </para>
    /// </summary>
    /// <example>
    /// The following example shows how this class can be used:
    /// <code><![CDATA[
    /// public class CharacterData : DataModel
    /// {
    ///     /// <summary>
    ///     /// Name of the character.
    ///     /// </summary>
    ///     public string Name { get; private set; }
    ///
    ///     /// <summary>
    ///     /// Current level of the character.
    ///     /// </summary>
    ///     public int Level { get; private set; }
    ///
    ///     /// <summary>
    ///     /// Inventory of the character.
    ///     /// </summary>
    ///     public InventoryData Inv { get; private set; }
    ///
    ///     public CharacterData(string name, int level, InventoryData inv)
    ///         : base()
    ///     {
    ///         Name = name;
    ///         Level = level;
    ///         Inv = inv;
    ///     }
    ///
    ///     public CharacterData(Bencodex.Types.Dictionary encoded)
    ///         : base(encoded)
    ///     {
    ///     }
    /// }
    ///
    /// public class InventoryData : DataModel
    /// {
    ///     /// <summary>
    ///     /// The amount of gold in the inventory.
    ///     /// </summary>
    ///     public int Gold { get; private set; }
    ///
    ///     public InventoryData(int gold)
    ///         : base()
    ///     {
    ///         Gold = gold;
    ///     }
    ///
    ///     public InventoryData(Bencodex.Types.Dictionary encoded)
    ///         : base(encoded)
    ///     {
    ///     }
    /// }
    /// ]]></code>
    /// Then the concrete model defined above can be used as shown below:
    /// <code><![CDATA[
    /// CharacterData characterData = new CharacterData("John", 5, new InventoryData(100));
    /// Bencodex.Types.Dictionary encoded = characterData.Encode()
    /// ]]></code>
    /// This would result in <c>encoded</c> in a following format:
    /// <code><![CDATA[
    /// Bencodex.Types.Dictionary {
    ///   "Name": "John",
    ///   "Level": 5,
    ///   "Inv": {
    ///       "Gold": 100,
    ///   },
    /// }
    /// ]]></code>
    /// To decode this back into an instance, simply use it as shown below:
    /// <code><![CDATA[
    /// CharacterData decoded = new CharacterData(encoded);
    /// ]]></code>
    /// Then <c>decoded.Name</c>, <c>decoded.Level</c>, and <c>decoded.Inv.Gold</c> will have
    /// values <c>"John"</c>, <c>5</c>, and <c>100</c> respectively.
    /// </example>
    /// <remarks>
    /// There are certain caveats for using this class:
    /// <list type="bullet">
    ///     <item><description>
    ///         Encoded data type is fixed to <see cref="BTypes.Dictionary"/>.  As each
    ///         property name is encoded into <see cref="BTypes.Text"/> as a key, it is
    ///         advisable to give short names for properties.  For example, <c>int HP</c> is better
    ///         than <c>int HealthPoint</c> to reduce storage size and/or network traffic.
    ///         As seen in the example above, actively use documented properties instead.
    ///     </description></item>
    ///     <item><description>
    ///         Property type of <see cref="ImmutableDictionary{TKey,TValue}"/> is inefficient
    ///         to encode and decode.  Additional caution is needed when declaring
    ///         <see cref="ImmutableDictionary{TKey,TValue}"/> property type.
    ///     </description></item>
    ///     <item><description>
    ///         As supported types are limited, in particular, nullable types and nested
    ///         collection types not being allowed, if a custom data model that isn't supported
    ///         by this class is needed, manual implementation of encoding and decoding
    ///         should be done separately.
    ///     </description></item>
    /// </list>
    /// </remarks>
    public abstract partial class DataModel
    {
        private PropertyInfo[]? _propertyInfos = null;

        protected DataModel()
        {
        }

        /// <summary>
        /// Decodes a <see cref="BTypes.Dictionary"/> data into an instance.
        /// </summary>
        /// <param name="encoded">The <see cref="BTypes.Dictionary"/> instance to decode.</param>
        /// <returns>A decoded instance from <paramref name="encoded"/>.</returns>
        /// <exception cref="NotSupportedException">Thrown when <see langword="null"/> value is
        /// encountered while decoding.</exception>
        /// <exception cref="ArgumentException">Thrown when invalid encoded type is encountered.
        /// </exception>
        /// <exception cref="NullReferenceException">Thrown when <paramref name="encoded"/> is
        /// <see langword="null"/> or <see langword="null"/> reference is returned by inner
        /// instantiation.</exception>
        protected DataModel(BTypes.Dictionary encoded)
        {
            if (encoded is BTypes.Dictionary e)
            {
                foreach (PropertyInfo property in PropertyInfos)
                {
                    Type type = property.PropertyType;
                    BTypes.IValue value = e[property.Name];

                    if (type == typeof(bool?)
                        || type == typeof(int?)
                        || type == typeof(long?)
                        || type == typeof(BigInteger?)
                        || type == typeof(ImmutableArray<byte>?)
                        || type == typeof(Guid?)
                        || type == typeof(Address?))
                    {
                        throw new NotSupportedException(
                            $"Nullable value type is not supported: {type}");
                    }
                    else
                    {
                        property.SetValue(this, DecodeFromIValue(value, type));
                    }
                }
            }
            else
            {
                throw new NullReferenceException($"Argument {nameof(encoded)} cannot be null.");
            }
        }

        /// <summary>
        /// Cached property info for performance.
        /// </summary>
        private PropertyInfo[] PropertyInfos => _propertyInfos
            ?? (_propertyInfos = this.GetType().GetProperties());

        /// <summary>
        /// Encodes an instance into a <see cref="BTypes.Dictionary"/>.
        /// </summary>
        /// <returns>An encoded <see cref="BTypes.Dictionary"/> instance.</returns>
        /// <exception cref="NotSupportedException">Thrown when <c>nullable</c> value type property
        /// or <see langword="null"/> value inside a reference type is encountered.</exception>
        /// <exception cref="ArgumentException">Thrown when an unknown invalid property type is
        /// encountered.</exception>
        [Pure]
        public BTypes.Dictionary Encode()
        {
            BTypes.Dictionary result = BTypes.Dictionary.Empty;
            foreach (PropertyInfo property in PropertyInfos)
            {
                Type type = property.PropertyType;
                if (type == typeof(bool?)
                    || type == typeof(int?)
                    || type == typeof(long?)
                    || type == typeof(BigInteger?)
                    || type == typeof(ImmutableArray<byte>?)
                    || type == typeof(Guid?)
                    || type == typeof(Address?))
                {
                    throw new NotSupportedException(
                        $"Nullable value type is not supported: {type}");
                }

                // NOTE: Additional IValue casting is needed for this to work.
                object? value = property.GetValue(this, null);
                result = result.Add(property.Name, EncodeToIValue(value));
            }

            return result;
        }
    }
}
