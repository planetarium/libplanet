window.BENCHMARK_DATA = {
  "lastUpdate": 1678437661887,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b7327229caeb35e673f6bae37d72feb509f85596",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:25:11+09:00",
          "tree_id": "235d29b043db63e25412e8d98e381f967ab88c53",
          "url": "https://github.com/planetarium/libplanet/commit/b7327229caeb35e673f6bae37d72feb509f85596"
        },
        "date": 1678437624395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8236528.418918919,
            "unit": "ns",
            "range": "± 277804.4207033049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20242204.72,
            "unit": "ns",
            "range": "± 536598.8869802657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49425524.416666664,
            "unit": "ns",
            "range": "± 404565.7285652578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 102723328.2,
            "unit": "ns",
            "range": "± 1610150.1465509445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204065127.3478261,
            "unit": "ns",
            "range": "± 5073799.207683436"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73488.28865979382,
            "unit": "ns",
            "range": "± 12166.172750498583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204031.17777777778,
            "unit": "ns",
            "range": "± 11728.770650808887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 207523.06043956045,
            "unit": "ns",
            "range": "± 12308.664916507478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187667.17525773196,
            "unit": "ns",
            "range": "± 18863.1208849715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12046525.894736841,
            "unit": "ns",
            "range": "± 261661.4824322735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9795751.73076923,
            "unit": "ns",
            "range": "± 111188.32435793626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21096.709677419356,
            "unit": "ns",
            "range": "± 2884.195941681845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57714.989583333336,
            "unit": "ns",
            "range": "± 6243.79932496366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58742.947916666664,
            "unit": "ns",
            "range": "± 5173.791992990485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126386.24468085106,
            "unit": "ns",
            "range": "± 17051.72172663844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8692.614583333334,
            "unit": "ns",
            "range": "± 1001.5491828561514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20738.31914893617,
            "unit": "ns",
            "range": "± 2895.5871578052315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1647608.3673469387,
            "unit": "ns",
            "range": "± 181962.4697218382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2861610.245614035,
            "unit": "ns",
            "range": "± 123270.96016271875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2493477.6,
            "unit": "ns",
            "range": "± 173420.61239787657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6262987.739130435,
            "unit": "ns",
            "range": "± 226889.63103325857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3330684.109589041,
            "unit": "ns",
            "range": "± 164682.67364764828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4989138.444444444,
            "unit": "ns",
            "range": "± 165921.50788170798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24405856.5,
            "unit": "ns",
            "range": "± 723372.3120734347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6473907.078947368,
            "unit": "ns",
            "range": "± 221998.0183993166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29035260.092592593,
            "unit": "ns",
            "range": "± 808653.2192722217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6620334.364783654,
            "unit": "ns",
            "range": "± 94790.25452002019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1965470.7957589286,
            "unit": "ns",
            "range": "± 19262.593475184225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1285819.8934895834,
            "unit": "ns",
            "range": "± 11896.30712944677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2794102.311104911,
            "unit": "ns",
            "range": "± 45521.40221309604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795929.1431640625,
            "unit": "ns",
            "range": "± 7713.424692794478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731166.1519252232,
            "unit": "ns",
            "range": "± 3835.3923447798434"
          }
        ]
      }
    ]
  }
}