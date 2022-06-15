using System.IO;
using UnityEditor;

namespace Libplanet.Unity.Editor
{
    /// <summary>
    /// Unity editor menu item for managing genesis block data.
    /// </summary>
    public static class GenesisBlockMenu
    {
        /// <summary>
        /// Open the genesis block file location.
        /// </summary>
        [MenuItem("Tools/Libplanet/Genesis Block/Open genesis block file location")]
        public static void OpenGenesisBlockLocation()
        {
            const string title = "Open genesis block file location";
            string path = Paths.GenesisBlockPath;

            if (!File.Exists(path))
            {
                string dialogContent =
                    $"Genesis block file not found at {path}. " +
                    "Please create a genesis block first.";
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
        /// Create a genesis block file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Genesis Block/Create genesis block")]
        public static void CreateGenesisBlock()
        {
            const string title = "Create genesis block";
            string path = Paths.GenesisBlockPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Genesis block found at {path}.\n" +
                    "New genesis block will not be compatible with existing chain.\n" +
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

            // TODO: Allow creating a genesis block with transactions.
            Utils.CreateGenesisBlock(path);
            EditorUtility.DisplayDialog(title, "New genesis block created.", "Close");
        }

        /// <summary>
        /// Remove the genesis block file.
        /// </summary>
        [MenuItem("Tools/Libplanet/Genesis Block/Delete genesis block")]
        public static void DeleteGenesisBlock()
        {
            const string title = "Delete genesis block";
            string path = Paths.GenesisBlockPath;

            if (File.Exists(path))
            {
                string dialogContent =
                    $"Genesis block found at {path}.\n" +
                    "A genesis block is required to run a blockchain node.\n" +
                    "Do you want to delete it?";
                if (EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    File.Delete(path);
                    EditorUtility.DisplayDialog(title, "Genesis block deleted.", "Close");
                }
            }
            else
            {
                EditorUtility.DisplayDialog(title, "Genesis block not found.", "Close");
            }
        }
    }
}
