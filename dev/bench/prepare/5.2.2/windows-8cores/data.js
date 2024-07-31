window.BENCHMARK_DATA = {
  "lastUpdate": 1722392648394,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "40b3cc469316c1ab34243c1e7e35eabaa22c6e10",
          "message": "Prepare 5.2.2",
          "timestamp": "2024-07-31T11:08:41+09:00",
          "tree_id": "9dc41c3f7dd933b72c67220cb777d849f7964635",
          "url": "https://github.com/planetarium/libplanet/commit/40b3cc469316c1ab34243c1e7e35eabaa22c6e10"
        },
        "date": 1722392366985,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 987697.9797979798,
            "unit": "ns",
            "range": "± 104405.68928492743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1754419.6078431373,
            "unit": "ns",
            "range": "± 68984.07648032361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1476607.142857143,
            "unit": "ns",
            "range": "± 65209.762586946774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6780112,
            "unit": "ns",
            "range": "± 160017.22386459945"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29875.471698113208,
            "unit": "ns",
            "range": "± 955.531600004247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9412833.333333334,
            "unit": "ns",
            "range": "± 76301.56960252866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23376507.14285714,
            "unit": "ns",
            "range": "± 146447.7510623116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59188766.666666664,
            "unit": "ns",
            "range": "± 383928.57904761896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115341428.57142857,
            "unit": "ns",
            "range": "± 394157.6440355411"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231482893.33333334,
            "unit": "ns",
            "range": "± 1481421.3765679167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3350839.8958333335,
            "unit": "ns",
            "range": "± 6796.194288808465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069513.6458333333,
            "unit": "ns",
            "range": "± 2851.710555134951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 721248.5546875,
            "unit": "ns",
            "range": "± 1455.7872877690486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934363.1380208333,
            "unit": "ns",
            "range": "± 2067.6455872157303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630433.5091145834,
            "unit": "ns",
            "range": "± 2455.335095395933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571046.044921875,
            "unit": "ns",
            "range": "± 1266.8470848638408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2114500,
            "unit": "ns",
            "range": "± 27263.528751795868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2187829.6296296297,
            "unit": "ns",
            "range": "± 52652.99184146661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2644121.052631579,
            "unit": "ns",
            "range": "± 58529.295408817554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2212664.285714286,
            "unit": "ns",
            "range": "± 24103.099294580265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2861006.6666666665,
            "unit": "ns",
            "range": "± 30159.326126108193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167202.63157894736,
            "unit": "ns",
            "range": "± 4665.021470481877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159633.89830508476,
            "unit": "ns",
            "range": "± 6773.645943566152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144536.84210526315,
            "unit": "ns",
            "range": "± 3116.659630351378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2712540,
            "unit": "ns",
            "range": "± 25058.89633871144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2477307.1428571427,
            "unit": "ns",
            "range": "± 28441.477411742122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 8851.190476190477,
            "unit": "ns",
            "range": "± 588.9533390438116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48608.69565217391,
            "unit": "ns",
            "range": "± 3061.4817993013476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44083.333333333336,
            "unit": "ns",
            "range": "± 1137.7577745826165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44875.26315789474,
            "unit": "ns",
            "range": "± 6512.899939466333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2160.6382978723404,
            "unit": "ns",
            "range": "± 344.0642866619716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9466.315789473685,
            "unit": "ns",
            "range": "± 1340.1818331945242"
          }
        ]
      }
    ]
  }
}