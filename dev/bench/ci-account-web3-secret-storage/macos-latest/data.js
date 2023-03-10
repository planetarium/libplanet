window.BENCHMARK_DATA = {
  "lastUpdate": 1678437773954,
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
      },
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
          "id": "e36554445f64de09c9ff351b002ffb70cccaad6e",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:22:24+09:00",
          "tree_id": "5ceb3e823b665aefce70bd95d2a0a04efed9bc66",
          "url": "https://github.com/planetarium/libplanet/commit/e36554445f64de09c9ff351b002ffb70cccaad6e"
        },
        "date": 1678437734947,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8307757.540540541,
            "unit": "ns",
            "range": "± 280429.54939942824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20380915.023255814,
            "unit": "ns",
            "range": "± 738963.1863042811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50940502.184210524,
            "unit": "ns",
            "range": "± 1735714.3516367013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100172493.77906977,
            "unit": "ns",
            "range": "± 3452706.9718757826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 204598492.26190478,
            "unit": "ns",
            "range": "± 4765542.125399228"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78664.98863636363,
            "unit": "ns",
            "range": "± 6827.1463990376205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217685.8842105263,
            "unit": "ns",
            "range": "± 17763.668288417182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238062.45454545456,
            "unit": "ns",
            "range": "± 28173.363685070395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219666.77173913043,
            "unit": "ns",
            "range": "± 22771.114996856686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13206679.581395349,
            "unit": "ns",
            "range": "± 835345.146939233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10791051.968085106,
            "unit": "ns",
            "range": "± 680061.1228418937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23850.346153846152,
            "unit": "ns",
            "range": "± 3660.1402065527395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64997.36666666667,
            "unit": "ns",
            "range": "± 8778.812921978753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64205.21232876712,
            "unit": "ns",
            "range": "± 3193.6172519898187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130697.82795698925,
            "unit": "ns",
            "range": "± 19834.667995502685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9244.69387755102,
            "unit": "ns",
            "range": "± 1197.262372593455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25221.602150537634,
            "unit": "ns",
            "range": "± 2619.629932127756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1666318.425531915,
            "unit": "ns",
            "range": "± 181502.95442266413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3053008.5454545454,
            "unit": "ns",
            "range": "± 206964.1771899885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2695020.2831325303,
            "unit": "ns",
            "range": "± 386741.6610320833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6886590.409090909,
            "unit": "ns",
            "range": "± 829148.7962111676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3508600.5,
            "unit": "ns",
            "range": "± 117959.26073998737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4993169.171052632,
            "unit": "ns",
            "range": "± 232165.24790504356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25906197.88235294,
            "unit": "ns",
            "range": "± 505683.0465722677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6614627.215909091,
            "unit": "ns",
            "range": "± 572889.3424408498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28452634.403846152,
            "unit": "ns",
            "range": "± 1158683.5382191676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7552132.4140625,
            "unit": "ns",
            "range": "± 223444.00034435716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181542.927195582,
            "unit": "ns",
            "range": "± 62443.23248356059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333525.341421274,
            "unit": "ns",
            "range": "± 19688.621261436147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3183730.6975386427,
            "unit": "ns",
            "range": "± 289274.7822415982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850867.9115923713,
            "unit": "ns",
            "range": "± 15203.394359965507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782266.062278054,
            "unit": "ns",
            "range": "± 18201.104569685842"
          }
        ]
      }
    ]
  }
}