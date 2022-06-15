using System.IO;
using UnityEditor;

namespace Libplanet.Unity.Editor
{
    /// <summary>
    /// Unity editor menu item for managing swarm config data.
    /// </summary>
    public static class SwarmConfigMenu
    {
        /// <summary>
        /// Opens the swarm config file location.
        /// </summary>
        [MenuItem("Tools/Libplanet/Swarm config/Open swarm config file location")]
        public static void OpenSwarmConfigLocation()
        {
            const string title = "Open swarm config file location";
            string path = Paths.SwarmConfigPath;

            if (!File.Exists(path))
            {
                string dialogContent =
                    $"Swarm config file not found at {path}.\n" +
                    "Please create a swarm config first.";
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
        /// Creates a swarm config file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Swarm config/Create swarm config")]
        public static void CreateSwarmConfig()
        {
            const string title = "Create swarm config";
            string path = Paths.SwarmConfigPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Swarm config found at {path}.\n" +
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

            Utils.CreateSwarmConfig(path);
            EditorUtility.DisplayDialog(title, "New swarm config created.", "Close");
        }

        /// <summary>
        /// Removes the swarm config file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Swarm config/Delete swarm config")]
        public static void DeleteSwarmConfig()
        {
            const string title = "Delete swarm config";
            string path = Paths.SwarmConfigPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Swarm config found at {path}.\n" +
                    "A swarm config is required to run a blockchain node.\n" +
                    "Do you want to delete it?";
                if (EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    File.Delete(path);
                    EditorUtility.DisplayDialog(title, "Swarm config deleted.", "Close");
                }
            }
            else
            {
                EditorUtility.DisplayDialog(title, "Swarm config not found.", "Close");
            }
        }
    }
}
