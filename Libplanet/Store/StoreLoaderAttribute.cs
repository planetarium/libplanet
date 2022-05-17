using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;

namespace Libplanet.Store
{
    /// <summary>
    /// Registers a static method as a store loader.  The method must comply with
    /// <see cref="StoreLoader"/> delegate.
    /// </summary>
    /// <example>
    /// <para>With the below code, <c>SampleStore</c> and <c>SampleStateStore</c>-backed
    /// <see cref="TrieStateStore"/> can be instantiated from a URI like
    /// <c>sample:///home/foo/bar?cache=512</c>:</para>
    /// <code><![CDATA[
    /// [StoreLoader("sample")]
    /// private static (IStore Store, IStateStore StateStore) Loader(Uri storeUri)
    /// {
    ///     NameValueCollection query = HttpUtility.ParseQueryString(storeUri.Query);
    ///     int cache = query.GetInt32("cache", 128);
    ///     var store = new SampleStore(storeUri.LocalPath, cache);
    ///     var stateStore = new SampleStateStore(storeUri.LocalPath, cache);
    ///     return (store, stateStore);
    /// }
    /// ]]></code>
    /// </example>
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public class StoreLoaderAttribute : Attribute
    {
        /// <summary>
        /// Instniates a new <see cref="StoreLoaderAttribute"/> with the specified
        /// <paramref name="uriScheme"/>.
        /// </summary>
        /// <param name="uriScheme">The URI scheme to associate with the attributed store loader
        /// method.</param>
        public StoreLoaderAttribute(string uriScheme)
        {
            UriScheme = uriScheme.ToLowerInvariant();
        }

        /// <summary>
        /// The URI scheme to associate with the attributed store loader method.
        /// </summary>
        public string UriScheme { get; }

        /// <summary>
        /// Loads a pair of <see cref="IStore"/> and <see cref="IStateStore"/> from the specified
        /// <paramref name="storeUri"/>.
        /// </summary>
        /// <param name="storeUri">A URI referring to a store.</param>
        /// <returns>A pair of loaded <see cref="IStore"/> and <see cref="IStateStore"/>.</returns>
        public static (IStore Store, IStateStore StateStore)? LoadStore(Uri storeUri)
        {
            const BindingFlags flags =
                BindingFlags.Public |
                BindingFlags.NonPublic |
                BindingFlags.Static |
                (BindingFlags)0x2000000;  // BindingFlags.DoNotWrapExceptions
            return ((IStore, IStateStore)?)FindStoreLoader(storeUri.Scheme)?.Invoke(
                null,
                flags,
                null,
                new object[] { storeUri },
                CultureInfo.CurrentCulture
            );
        }

        /// <summary>
        /// Lists all registered store loaders.
        /// </summary>
        /// <returns>Pairs of registered URI scheme and declaring type.</returns>
        public static IEnumerable<(string UriScheme, Type DeclaringType)> ListStoreLoaders() =>
            ListStoreLoaderMethods().SelectMany(pair =>
                pair.Loader.DeclaringType is { } declType
                    ? new[] { (pair.UriScheme, declType) }
                    : Enumerable.Empty<(string, Type)>());

        private static IEnumerable<(string UriScheme, MethodInfo Loader)> ListStoreLoaderMethods()
        {
            var paramType = typeof(Uri);
            var retType = typeof((IStore, IStateStore));
            return AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a =>
                {
                    try
                    {
                        return a.GetTypes();
                    }
                    catch (Exception e)
                        when (e is TypeLoadException ||
                              e is ReflectionTypeLoadException ||
                              e is FileNotFoundException)
                    {
                        return Enumerable.Empty<Type>();
                    }
                })
                .SelectMany(t =>
                {
                    try
                    {
                        return t.GetMethods(BindingFlags.Static |
                            BindingFlags.NonPublic | BindingFlags.Public);
                    }
                    catch (Exception e)
                        when (e is TypeLoadException ||
                              e is ReflectionTypeLoadException ||
                              e is FileNotFoundException)
                    {
                        return Enumerable.Empty<MethodInfo>();
                    }
                })
                .Where(m =>
                {
                    try
                    {
                        ParameterInfo[] parameters = m.GetParameters();
                        return parameters.Length == 1 &&
                               paramType.IsAssignableFrom(parameters[0].ParameterType) &&
                               retType.IsAssignableFrom(m.ReturnType);
                    }
                    catch (Exception e)
                        when (e is TypeLoadException ||
                              e is ReflectionTypeLoadException ||
                              e is FileNotFoundException)
                    {
                        return false;
                    }
                })
                .SelectMany(m =>
                {
                    return m.GetCustomAttributes<StoreLoaderAttribute>()
                        .Select(attr => (attr.UriScheme, m));
                });
        }

        private static MethodInfo? FindStoreLoader(string uriScheme) =>
            ListStoreLoaderMethods()
                .Cast<(string, MethodInfo)?>()
                .FirstOrDefault(pair =>
                    pair?.Item1?.Equals(uriScheme, StringComparison.InvariantCulture) == true)
                ?.Item2;
    }
}
