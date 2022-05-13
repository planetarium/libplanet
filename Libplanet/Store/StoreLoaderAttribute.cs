using System;
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
    ///     int cache = Convert.ToInt32(query.Get("cache") ?? "128");
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
        public static (IStore Store, IStateStore StateStore)? LoadStore(Uri storeUri) =>
            ((IStore, IStateStore)?)FindStoreLoader(storeUri.Scheme)?.Invoke(
                null,
                new object[] { storeUri }
            );

        private static MethodInfo? FindStoreLoader(string uriScheme)
        {
            uriScheme = uriScheme.ToLowerInvariant();
            var paramType = typeof(Uri);
            var retType = typeof((IStore, IStateStore));
            return AppDomain.CurrentDomain.GetAssemblies()
                .SelectMany(a => a.GetTypes())
                .SelectMany(t =>
                    t.GetMethods(BindingFlags.Static |
                        BindingFlags.NonPublic | BindingFlags.Public))
                .FirstOrDefault(m =>
                {
                    var attrMatched = m.GetCustomAttributes<StoreLoaderAttribute>()
                        .Any(attr => attr.UriScheme.Equals(
                            uriScheme,
                            StringComparison.InvariantCulture));
                    if (!(attrMatched && retType.IsAssignableFrom(m.ReturnType)))
                    {
                        return false;
                    }

                    ParameterInfo[] parameters = m.GetParameters();
                    return parameters.Length == 1 &&
                           paramType.IsAssignableFrom(parameters[0].ParameterType);
                });
        }
    }
}
