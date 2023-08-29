namespace Libplanet.Store.Trie
{
    public interface IRecordableTrie : ITrie
    {
         /// <summary>
         /// Cleans up and stores the <see cref="IRecordableTrie"/> in storage.
         /// </summary>
         /// <returns>Returns new committed <see cref="IRecordableTrie"/>.</returns>
        IRecordableTrie Commit();
    }
}
