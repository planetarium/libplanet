using System;
using Libplanet.Crypto;
using UnityEditor;
using UnityEngine;

namespace Libplanet.Unity.Editor
{
    /// <summary>
    /// Unity editor menu item for generating bound peer strings.
    /// </summary>
    public class GenerateBoundPeerStringWindow : EditorWindow
    {
        private string _privateKeyString = string.Empty;
        private string _host = string.Empty;
        private int _port = 0;
        private string _boundPeerString = string.Empty;

        /// <summary>
        /// Initialize editor window.
        /// </summary>
        [MenuItem("Tools/Libplanet/Utils/Generate bound peer string")]
        public static void Init()
        {
            const string title = "Generate bound peer string";

            var window = EditorWindow.GetWindowWithRect(
                typeof(GenerateBoundPeerStringWindow),
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
            EditorGUILayout.LabelField("Bound peer information", EditorStyles.boldLabel);
            _privateKeyString = EditorGUILayout.TextField("Private key string", _privateKeyString);
            _host = EditorGUILayout.TextField("Host", _host);
            _port = EditorGUILayout.IntField("Port", _port);

            // Zero port is excluded.
            if (_port < 1 || _port > 65535)
            {
                _boundPeerString = "Invalid port number";
            }
            else if (_host.Length < 1)
            {
                _boundPeerString = "Invalid host";
            }
            else
            {
                try
                {
                    PrivateKey privateKey = new PrivateKey(ByteUtil.ParseHex(_privateKeyString));
                    string publicKeyString = ByteUtil.Hex(privateKey.PublicKey.Format(true));
                    _boundPeerString = $"{publicKeyString},{_host},{_port}";
                }
                catch (Exception)
                {
                    _boundPeerString = "Invalid private key string";
                }
            }

            EditorGUILayout.Space();

            EditorGUILayout.LabelField("Generated bound peer string", EditorStyles.boldLabel);
            EditorGUILayout.SelectableLabel(_boundPeerString);
        }
    }
}
