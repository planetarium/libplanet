using System.IO;
using UnityEditor;

namespace Libplanet.Unity.Editor
{
    /// <summary>
    /// Unity editor menu item for managing blockchain data.
    /// </summary>
    public static class BlockChainMenu
    {
        /// <summary>
        /// Open the blockchain directory location.
        /// </summary>
        [MenuItem("Tools/Libplanet/Blockchain/Open blockchain directory location")]
        public static void OpenBlockchainLocation()
        {
            const string title = "Open blockchain directory location";
            string path = Paths.StorePath;

            DirectoryInfo directory = new DirectoryInfo(path);
            if (!directory.Exists)
            {
                string dialogContent =
                    $"Blockchain directory not found at {path}.\n" +
                    "Please create a blockchain first by running a node.";
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
        /// Remove the blockchain directory.
        /// </summary>
        [MenuItem("Tools/Libplanet/Blockchain/Delete blockchain")]
        public static void DeleteBlockChain()
        {
            const string title = "Delete blockchain";
            DirectoryInfo directory = new DirectoryInfo(Paths.StorePath);

            if (directory.Exists)
            {
                string dialogContent =
                    $"Blockchain found at {directory}.\n" +
                    "Local blockchain data will be removed.\n" +
                    "Do you want to delete it?";
                if (EditorUtility.DisplayDialog(
                    title,
                    dialogContent,
                    "Ok",
                    "Cancel"))
                {
                    directory.Delete(recursive: true);
                    EditorUtility.DisplayDialog(title, "Blockchain deleted.", "Close");
                }
            }
            else
            {
                EditorUtility.DisplayDialog(title, "Blockchain not found.", "Close");
            }
        }
    }
}
