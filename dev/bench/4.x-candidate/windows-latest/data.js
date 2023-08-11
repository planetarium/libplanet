window.BENCHMARK_DATA = {
  "lastUpdate": 1691717644251,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3",
          "message": "Merge pull request #3372 from greymistcube/release/3.2.0\n\n🚀 Release 3.2.0",
          "timestamp": "2023-08-11T10:15:50+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/planetarium/libplanet/commit/97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3"
        },
        "date": 1691717580639,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1319169.696969697,
            "unit": "ns",
            "range": "± 84196.97199284768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460244,
            "unit": "ns",
            "range": "± 97849.37645927738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1889557.142857143,
            "unit": "ns",
            "range": "± 26276.509377292583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4297402.083333333,
            "unit": "ns",
            "range": "± 158493.72158795886"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47297.89473684211,
            "unit": "ns",
            "range": "± 3635.697098639697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7117640,
            "unit": "ns",
            "range": "± 66816.97602940652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18209833.333333332,
            "unit": "ns",
            "range": "± 70234.7147179737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46744440,
            "unit": "ns",
            "range": "± 270025.42949031404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93378586.66666667,
            "unit": "ns",
            "range": "± 461521.72502133274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185718140,
            "unit": "ns",
            "range": "± 448213.273214565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4325258.203125,
            "unit": "ns",
            "range": "± 14721.119172759258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1403664.0559895833,
            "unit": "ns",
            "range": "± 1498.5072380516742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 996120.0753348215,
            "unit": "ns",
            "range": "± 1231.3976270624116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549137.4348958335,
            "unit": "ns",
            "range": "± 2334.2169156546906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791578.2677283654,
            "unit": "ns",
            "range": "± 855.9688047129176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 725999.4001116072,
            "unit": "ns",
            "range": "± 1296.687396296252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3044600,
            "unit": "ns",
            "range": "± 90020.2569795636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3174915.1515151514,
            "unit": "ns",
            "range": "± 81720.42324754306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3872886.6666666665,
            "unit": "ns",
            "range": "± 48793.73300898775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3485472.5490196077,
            "unit": "ns",
            "range": "± 142068.6708298932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5632324.390243903,
            "unit": "ns",
            "range": "± 200212.40818251978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249128.94736842104,
            "unit": "ns",
            "range": "± 8327.418336994799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236832.60869565216,
            "unit": "ns",
            "range": "± 8765.210382157307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214597.9797979798,
            "unit": "ns",
            "range": "± 13495.09343789612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3798846.6666666665,
            "unit": "ns",
            "range": "± 40890.81047072045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445707.1428571427,
            "unit": "ns",
            "range": "± 25728.80649226628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19460.21505376344,
            "unit": "ns",
            "range": "± 1659.3699554051698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88852.08333333333,
            "unit": "ns",
            "range": "± 5385.868041588423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71038.88888888889,
            "unit": "ns",
            "range": "± 6311.148038919782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78323.40425531915,
            "unit": "ns",
            "range": "± 12018.177769054002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4351.546391752578,
            "unit": "ns",
            "range": "± 653.2153489441439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18553.260869565216,
            "unit": "ns",
            "range": "± 1659.633951893055"
          }
        ]
      }
    ]
  }
}