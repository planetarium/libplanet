using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Zio;
using Zio.FileSystems;

namespace Libplanet.Store.Trie;

/// <summary>
/// The default built-in <see cref="IKeyValueStore"/> implementation. This stores data in
/// the file system or in memory.
/// <para><see cref="DefaultStore"/> and <see cref="DefaultKeyValueStore"/>-backed
/// <see cref="TrieStateStore"/> can be instantiated from a URI with <c>default+file:</c> scheme
/// using <see cref="StoreLoaderAttribute.LoadStore(Uri)"/>, e.g.:</para>
/// <list type="bullet">
/// <item><description><c>default+file:///var/data/planet/</c></description></item>
/// <item><description><c>default+file:///c:/Users/john/AppData/Local/planet/</c></description>
/// </item>
/// </list>
/// <para>The following query string parameters are supported:</para>
/// <list type="table">
/// <item>
/// <term><c>journal</c></term>
/// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
/// <see cref="DefaultStore(string, bool, int, int, int, int, bool, bool)"/>'s <c>journal</c>
/// parameter.</description>
/// </item>
/// <item>
/// <term><c>index-cache</c></term>
/// <description>Corresponds to
/// <see cref="DefaultStore(string,bool,int,int,int,int,bool,bool)"/>'s
/// <c>indexCacheSize</c> parameter.  50000 by default.</description>
/// </item>
/// <item>
/// <term><c>block-cache</c></term>
/// <description>Corresponds to
/// <see cref="DefaultStore(string,bool,int,int,int,int,bool,bool)"/>'s
/// <c>blockCacheSize</c> parameter.  512 by default.</description>
/// </item>
/// <item>
/// <term><c>tx-cache</c></term>
/// <description>Corresponds to
/// <see cref="DefaultStore(string,bool,int,int,int,int,bool,bool)"/>'s
/// <c>txCacheSize</c> parameter.  1024 by default.</description>
/// </item>
/// <item>
/// <term><c>flush</c></term>
/// <description><see langword="true"/> (default) or <see langword="false"/>.  Corresponds to
/// <see cref="DefaultStore(string, bool, int, int, int, int, bool, bool)"/>'s <c>flush</c>
/// parameter.</description>
/// </item>
/// <item>
/// <term><c>readonly</c></term>
/// <description><see langword="true"/> or <see langword="false"/> (default).  Corresponds to
/// <see cref="DefaultStore(string, bool, int, int, int, int, bool, bool)"/>'s <c>readOnly</c>
/// parameter.</description>
/// </item>
/// <item>
/// <term><c>states-dir</c></term>
/// <description>Corresponds to <see cref="DefaultKeyValueStore(string)"/>'s <c>path</c>
/// parameter.  It is relative to the URI path, and defaults to <c>states</c>.</description>
/// </item>
/// </list>
/// </summary>
public class DefaultKeyValueStore : IKeyValueStore
{
    private readonly IFileSystem _fs;

    /// <summary>
    /// Creates a new <see cref="DefaultKeyValueStore"/>.
    /// </summary>
    /// <param name="path">The path of the directory where the storage files will be saved.
    /// If the path is <see langword="null"/>, the database is created in memory.</param>
    public DefaultKeyValueStore(string path)
    {
        if (path == string.Empty)
        {
            _fs = new MemoryFileSystem();
        }
        else
        {
            path = Path.GetFullPath(path);
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }

            var pfs = new PhysicalFileSystem();
            _fs = new SubFileSystem(
                pfs,
                pfs.ConvertPathFromInternal(path),
                owned: true
            );
        }
    }

    public DefaultKeyValueStore()
        : this(string.Empty)
    {
    }

    public byte[] this[in KeyBytes key]
    {
        get
        {
            var path = DataPath(key);
            return _fs.FileExists(path)
                ? _fs.ReadAllBytes(path)
                : throw new KeyNotFoundException($"No such key: {key}.");
        }

        set
        {
            var path = DataPath(key);
            _fs.WriteAllBytes(path, value);
        }
    }

    /// <inheritdoc/>
    public bool Remove(in KeyBytes key)
    {
        var path = DataPath(key);
        if (_fs.FileExists(path))
        {
            _fs.DeleteFile(path);
            return true;
        }

        return false;
    }

    public void Dispose()
    {
        _fs.Dispose();
        GC.SuppressFinalize(this);
    }

    /// <inheritdoc/>
    public bool ContainsKey(in KeyBytes key) => _fs.FileExists(DataPath(key));

    /// <inheritdoc/>
    public IEnumerable<KeyBytes> ListKeys() =>
        _fs.EnumerateFiles(UPath.Root)
            .Select(path => KeyBytes.Parse(path.GetName()));

    private static UPath DataPath(in KeyBytes key) => UPath.Root / $"{key:h}";
}
