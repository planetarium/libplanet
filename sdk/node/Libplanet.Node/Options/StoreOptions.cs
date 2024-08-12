using Libplanet.Node.DependencyInjection;

namespace Libplanet.Node.Options;

[Options(Position)]
public sealed class StoreOptions : OptionsBase<StoreOptions>
{
    public const string Position = "Store";

    public const string DefaultRootPath = ".db";
    public const string DefaultStorePath = "store";
    public const string DefaultStateStorePath = "state";

    /// <summary>
    /// The type of the store.
    /// </summary>
    public StoreType Type { get; set; } = StoreType.Memory;

    /// <summary>
    /// The root directory path of the store.
    /// </summary>
    public string RootPath { get; set; } = string.Empty;

    /// <summary>
    /// The directory name of the store to be created under <see cref="RootPath"/>.
    /// </summary>
    public string StoreName { get; set; } = string.Empty;

    /// <summary>
    /// The directory name of the state store to be created under <see cref="RootPath"/>.
    /// </summary>
    public string StateStoreName { get; set; } = string.Empty;
}
