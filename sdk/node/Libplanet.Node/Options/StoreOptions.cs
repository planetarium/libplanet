using System.ComponentModel;

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
    [Description("The type of the store.")]
    public StoreType Type { get; set; } = StoreType.InMemory;

    /// <summary>
    /// The root directory path of the store.
    /// </summary>
    [Description("The root directory path of the store.")]
    public string RootPath { get; set; } = string.Empty;

    /// <summary>
    /// The directory name of the store to be created under <see cref="RootPath"/>.
    /// </summary>
    [Description(
        "The directory name of the store to be created under RootPath. If not specified," +
        "the default value is 'store'.")]
    public string StoreName { get; set; } = string.Empty;

    /// <summary>
    /// The directory name of the state store to be created under <see cref="RootPath"/>.
    /// </summary>
    [Description(
        "The directory name of the state store to be created under RootPath. If not specified," +
        "the default value is 'state'.")]
    public string StateStoreName { get; set; } = string.Empty;
}
