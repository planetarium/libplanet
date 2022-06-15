using System;
using System.IO;
using System.Text;
using Libplanet.Crypto;
using UnityEditor;
using UnityEngine;

namespace Libplanet.Unity.Editor
{
    /// <summary>
    /// Unity editor menu item for managing private key data.
    /// </summary>
    public static class PrivateKeyMenu
    {
        /// <summary>
        /// Open the private key file location.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Open private key file location")]
        public static void OpenPrivateKeyLocation()
        {
            const string title = "Open private key file location";
            string path = Paths.PrivateKeyPath;

            if (!File.Exists(path))
            {
                string dialogContent =
                    $"Private key file not found at {path}. " +
                    "Please create a private key first.";
                EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Close");
            }
            else
            {
                EditorUtility.RevealInFinder(path);
            }
        }

        /// <summary>
        /// Create a private key file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Create private key")]
        public static void CreatePrivateKey()
        {
            const string title = "Create private key";
            string path = Paths.PrivateKeyPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Private key found at {path}.\n" +
                    "Do you want to overwrite it?";
                if (!EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    return;
                }
            }

            Utils.CreatePrivateKey(path);
            EditorUtility.DisplayDialog(title, "New private key created.", "Close");
        }

        /// <summary>
        /// Remove the private key file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Delete private key")]
        public static void DeletePrivateKey()
        {
            const string title = "Delete private key";
            string path = Paths.PrivateKeyPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Are you sure you want to delete private key found at {path}?";
                if (EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    File.Delete(path);
                    EditorUtility.DisplayDialog(title, "Private key deleted.", "Close");
                }
            }
            else
            {
                EditorUtility.DisplayDialog(title, "Private key not found.", "Close");
            }
        }

        /// <summary>
        /// Open the temp private keys file location.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Open temp private keys file location")]
        public static void OpenTempPrivateKeysLocation()
        {
            const string title = "Open temp private keys file location";
            string path = Paths.TempPrivateKeysPath;

            if (!File.Exists(path))
            {
                string dialogContent =
                    $"Temp private keys file not found at {path}. " +
                    "Please create a temp private key first.";
                EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Close");
            }
            else
            {
                EditorUtility.RevealInFinder(path);
            }
        }

        /// <summary>
        /// Remove the temp private keys file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Delete temp private keys")]
        public static void DeleteTempPrivateKeys()
        {
            const string title = "Delete private key";
            string path = Paths.TempPrivateKeysPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Are you sure you want to delete all temp private keys found at {path}?";
                if (EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    File.Delete(path);
                    EditorUtility.DisplayDialog(title, "Temp private keys deleted.", "Close");
                }
            }
            else
            {
                EditorUtility.DisplayDialog(title, "Temp private keys not found.", "Close");
            }
        }
    }

    /// <summary>
    /// Unity menu item for creating a temp private key.
    /// </summary>
    public class CreateTempPrivateKeyWindow : EditorWindow
    {
        private string _privateKeyString = string.Empty;
        private string _memo = string.Empty;
        private string _saveText = string.Empty;
        private bool _valid = false;

        /// <summary>
        /// Initialize editor window.
        /// </summary>
        [MenuItem("Tools/Libplanet/Private key/Create temp private key")]
        public static void Init()
        {
            const string title = "Create temp private key";

            EditorWindow window = EditorWindow.GetWindowWithRect(
                typeof(CreateTempPrivateKeyWindow),
                new Rect(0, 0, 800, 200),
                true,
                title);
            window.Show();
        }

        /// <summary>
        /// Redraw on GUI event.
        /// </summary>
        public void OnGUI()
        {
            EditorGUILayout.LabelField("Private key information", EditorStyles.boldLabel);
            _privateKeyString = EditorGUILayout.TextField("Private key string", _privateKeyString);
            _memo = EditorGUILayout.TextField("Memo", _memo);

            if (GUILayout.Button("Generate random private key"))
            {
                _privateKeyString = ByteUtil.Hex(new PrivateKey().ByteArray);
            }

            EditorGUILayout.Space();
            EditorGUILayout.LabelField("Private key with memo", EditorStyles.boldLabel);
            (_saveText, _valid) = GetSaveText();
            EditorGUILayout.SelectableLabel(_saveText);

            if (GUILayout.Button("Save"))
            {
                if (_valid)
                {
                    string path = Paths.TempPrivateKeysPath;
                    using (StreamWriter stream = new StreamWriter(path, true, Encoding.UTF8))
                    {
                        stream.WriteLine(_saveText);
                    }

                    EditorUtility.DisplayDialog(
                        "Save",
                        $"Private key added to {path}.",
                        "Close");
                }
                else
                {
                    EditorUtility.DisplayDialog(
                        "Save",
                        "Entry is not valid.",
                        "Close");
                }
            }
        }

        private (string, bool) GetSaveText()
        {
            if (_memo.Length > 0)
            {
                try
                {
                    new PrivateKey(ByteUtil.ParseHex(_privateKeyString));
                    return ($"{_privateKeyString},{_memo}", true);
                }
                catch (Exception)
                {
                    return ("Invalid private key string", false);
                }
            }
            else
            {
                return ("Please write a memo to identify the private key", false);
            }
        }
    }
}
