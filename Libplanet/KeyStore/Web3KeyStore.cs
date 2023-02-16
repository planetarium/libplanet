using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Serilog;

namespace Libplanet.KeyStore
{
    /// <summary>
    /// <a href="https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition">Web3 Secret
    /// Storage</a> (i.e., Ethereum-style key store) compliant <see cref="IKeyStore"/>
    /// implementation.  Key files are placed in a directory of the <see cref="Path"/>.
    /// <para>Use <see cref="DefaultKeyStore"/> property to get an instance.</para>
    /// <para>In order to get an instance with a customized directory,
    /// use the <see cref="Web3KeyStore(string)"/> constructor.</para>
    /// </summary>
    public class Web3KeyStore : IKeyStore
    {
        private static readonly string DefaultPath = System.IO.Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) is { } p && p.Any()
                ? p
                : System.IO.Path.Combine(
                    Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
                    ".config"),
            "planetarium",
            "keystore"
        );

        private static readonly string NameFormat =
            "UTC--{0:yyyy-MM-dd}T{0:HH-mm-ss}Z--{1:D}";

        private static readonly Regex NamePattern = new Regex(
            @"^UTC--\d{4}-\d\d-\d\dT\d\d-\d\d-\d\dZ--([\da-f]{8}-?(?:[\da-f]{4}-?){3}[\da-f]{12})$",
            RegexOptions.Compiled | RegexOptions.CultureInvariant | RegexOptions.IgnoreCase
        );

        private readonly ILogger _logger;

        /// <summary>
        /// Creates a <see cref="Web3KeyStore"/> instance with a custom directory
        /// <paramref name="path"/>.
        /// </summary>
        /// <param name="path">A path of the directory to store key files.  A new directory is
        /// created if not exists.</param>
        /// <exception cref="ArgumentNullException">Thrown when <see langword="null"/> is passed to
        /// <paramref name="path"/>.</exception>
        /// <seealso cref="DefaultKeyStore"/>
        public Web3KeyStore(string path)
        {
            _logger = Log.ForContext<Web3KeyStore>().ForContext("DirectoryPath", path);

            if (path is null)
            {
                throw new ArgumentNullException(nameof(path));
            }
            else if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
                _logger.Debug(
                    "Created a directory {DirectoryPath} as it did not exist",
                    path
                );
            }

            Path = path;
        }

        /// <summary>
        /// A default <see cref="Web3KeyStore"/> instance which refers to a user-local directory.
        /// The <see cref="Path"/> differs on the platform:
        /// <list type="table">
        /// <listheader>
        /// <term>OS</term>
        /// <description>Directory path</description>
        /// </listheader>
        /// <item>
        /// <term>Linux/macOS</term>
        /// <description><var>$HOME</var>/.config/planetarium/keystore</description>
        /// </item>
        /// <item>
        /// <term>Windows</term>
        /// <description><var>%AppData%</var>\planetarium\keystore</description>
        /// </item>
        /// </list>
        /// </summary>
        /// <seealso cref="Web3KeyStore(string)"/>
        public static Web3KeyStore DefaultKeyStore =>
            new Web3KeyStore(DefaultPath);

        /// <summary>
        /// The path of the directory key files are placed.
        /// </summary>
        public string Path { get; }

        /// <inheritdoc/>
        public IEnumerable<Tuple<Guid, ProtectedPrivateKey>> List() =>
            ListFiles().Select(pair => Tuple.Create(pair.Item1, Get(pair.Item2)));

        /// <inheritdoc/>
        public IEnumerable<Guid> ListIds() =>
            ListFiles().Select(pair => pair.Item1);

        /// <inheritdoc/>
        public ProtectedPrivateKey Get(Guid id)
        {
            IEnumerable<(Guid, string)> files = ListFiles();
            string keyPath;
            try
            {
                (_, keyPath) = files.First(pair => pair.Item1.Equals(id));
            }
            catch (InvalidOperationException)
            {
                throw new NoKeyException("There is no key with such ID", id);
            }

            return Get(keyPath);
        }

        /// <inheritdoc/>
        public Guid Add(ProtectedPrivateKey key)
        {
            if (key is null)
            {
                throw new ArgumentNullException(nameof(key));
            }

            Guid keyId = Guid.NewGuid();
            string filename = string.Format(
                CultureInfo.InvariantCulture,
                NameFormat,
                DateTimeOffset.UtcNow,
                keyId
            );
            var keyPath = System.IO.Path.Combine(Path, filename);
            using Stream f = new FileStream(keyPath, FileMode.CreateNew);
            key.WriteJson(f, keyId);
            return keyId;
        }

        /// <inheritdoc/>
        public void Remove(Guid id)
        {
            foreach ((Guid keyId, string keyPath) in ListFiles())
            {
                if (keyId.Equals(id))
                {
                    System.IO.File.Delete(keyPath);
                    return;
                }
            }

            throw new NoKeyException("No key have such ID", id);
        }

        private IEnumerable<(Guid, string)> ListFiles()
        {
            IEnumerable<string> keyPaths = Directory.EnumerateFiles(Path);
            foreach (string keyPath in keyPaths)
            {
                if (System.IO.Path.GetFileName(keyPath) is string f)
                {
                    Match m = NamePattern.Match(f);
                    if (m.Success)
                    {
                        if (!Guid.TryParse(m.Groups[1].Value, out Guid id))
                        {
                            _logger.Debug(
                                "Failed to parse the file name due to invalid UUID: {keyPath}"
                            );
                            continue;
                        }

                        yield return (id, keyPath);
                    }
                }
            }
        }

        private ProtectedPrivateKey Get(string keyPath)
        {
            using StreamReader reader = new StreamReader(keyPath);
            return ProtectedPrivateKey.FromJson(reader.ReadToEnd());
        }
    }
}
