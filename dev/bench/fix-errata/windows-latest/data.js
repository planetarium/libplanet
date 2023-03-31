window.BENCHMARK_DATA = {
  "lastUpdate": 1680255465506,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jc@planetariumhq.com",
            "name": "jckim.xyz",
            "username": "jckdotim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32e4e89cde330e21c89b2a64116d5754661f8125",
          "message": "fix: errata of planet cli",
          "timestamp": "2023-03-31T18:13:36+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/32e4e89cde330e21c89b2a64116d5754661f8125"
        },
        "date": 1680255399241,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792124.7422680412,
            "unit": "ns",
            "range": "± 211762.29747394437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3556337.234042553,
            "unit": "ns",
            "range": "± 263379.3482257809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2866073.404255319,
            "unit": "ns",
            "range": "± 218336.68347205594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7646312.5,
            "unit": "ns",
            "range": "± 560641.7537542415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82284.21052631579,
            "unit": "ns",
            "range": "± 14594.026144424413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9484444.615384616,
            "unit": "ns",
            "range": "± 442009.96808286506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24922668,
            "unit": "ns",
            "range": "± 646732.235112286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66891343.05555555,
            "unit": "ns",
            "range": "± 3248606.5130841103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131251633.33333333,
            "unit": "ns",
            "range": "± 2792083.2808243423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268997441.9354839,
            "unit": "ns",
            "range": "± 7994087.517566726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6123306.927083333,
            "unit": "ns",
            "range": "± 70915.23197624016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052132.0518092106,
            "unit": "ns",
            "range": "± 42350.109266735155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1507760.4817708333,
            "unit": "ns",
            "range": "± 38103.76905119465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3247263.90625,
            "unit": "ns",
            "range": "± 51753.25081182257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049740.7161458333,
            "unit": "ns",
            "range": "± 10254.61153183175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 990371.8843005953,
            "unit": "ns",
            "range": "± 23228.600361840006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4017651.0204081633,
            "unit": "ns",
            "range": "± 315421.84525309206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4359702.5,
            "unit": "ns",
            "range": "± 154896.66114740944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5317172.164948453,
            "unit": "ns",
            "range": "± 317570.7551548775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5545764.285714285,
            "unit": "ns",
            "range": "± 347693.94387628813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10070565.753424658,
            "unit": "ns",
            "range": "± 494975.2017411181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429104.3956043956,
            "unit": "ns",
            "range": "± 30112.894661729635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349469.4736842105,
            "unit": "ns",
            "range": "± 30770.40949977551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329618.94736842107,
            "unit": "ns",
            "range": "± 36314.12682952487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7047991.489361702,
            "unit": "ns",
            "range": "± 273588.1376383655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5010583.333333333,
            "unit": "ns",
            "range": "± 234312.60682675338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33824.489795918365,
            "unit": "ns",
            "range": "± 9246.811222158984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131477.31958762885,
            "unit": "ns",
            "range": "± 17037.926475187145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113114.58333333333,
            "unit": "ns",
            "range": "± 19450.65540320004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 250501.0752688172,
            "unit": "ns",
            "range": "± 29068.878078527097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8016.304347826087,
            "unit": "ns",
            "range": "± 1149.4171646719162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31237,
            "unit": "ns",
            "range": "± 9675.927173489199"
          }
        ]
      }
    ]
  }
}