window.BENCHMARK_DATA = {
  "lastUpdate": 1704185134540,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "9a68e63c24b34dca76ff7b938611af74e8a60cc2",
          "message": "scale timeout",
          "timestamp": "2023-12-26T17:21:19+09:00",
          "tree_id": "f77f0ef7bbaf5d161e3f60fab58495d263b9df09",
          "url": "https://github.com/planetarium/libplanet/commit/9a68e63c24b34dca76ff7b938611af74e8a60cc2"
        },
        "date": 1704185110337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3705478.2373798075,
            "unit": "ns",
            "range": "± 10853.176597155985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202402.6048677885,
            "unit": "ns",
            "range": "± 2766.5581637397336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766121.2292668269,
            "unit": "ns",
            "range": "± 3901.5451457689855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1930221.4565429688,
            "unit": "ns",
            "range": "± 3536.8328147986185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 638608.8041178385,
            "unit": "ns",
            "range": "± 1480.1354738941714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562880.5509440104,
            "unit": "ns",
            "range": "± 786.3252164828259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2444028,
            "unit": "ns",
            "range": "± 38741.826125925305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528838.8235294116,
            "unit": "ns",
            "range": "± 61299.94413251722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3206673.4545454546,
            "unit": "ns",
            "range": "± 101409.73390905668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3195053.8630136987,
            "unit": "ns",
            "range": "± 157976.1857884243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14132478.402173912,
            "unit": "ns",
            "range": "± 954144.7155941625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40015.76530612245,
            "unit": "ns",
            "range": "± 5547.196978712726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205579.85789473684,
            "unit": "ns",
            "range": "± 13569.960851411715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192270.025,
            "unit": "ns",
            "range": "± 8763.27651858249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163366.24137931035,
            "unit": "ns",
            "range": "± 4769.4827411603665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3267716.533333333,
            "unit": "ns",
            "range": "± 39080.91691216108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2863144.066666667,
            "unit": "ns",
            "range": "± 38053.97076233901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16251.177083333334,
            "unit": "ns",
            "range": "± 2470.3120535664334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70145.52525252526,
            "unit": "ns",
            "range": "± 7500.010271208523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69880.86,
            "unit": "ns",
            "range": "± 17710.3965283763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67337.87878787878,
            "unit": "ns",
            "range": "± 15447.9661056556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2953.191489361702,
            "unit": "ns",
            "range": "± 360.0565749032939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13928.34,
            "unit": "ns",
            "range": "± 3025.2219309857533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5753188.714285715,
            "unit": "ns",
            "range": "± 59960.0555183052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14205015.692307692,
            "unit": "ns",
            "range": "± 64945.32272661444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36947041,
            "unit": "ns",
            "range": "± 118072.18783086332"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76102602.26666667,
            "unit": "ns",
            "range": "± 1055600.8247781699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154801955.7857143,
            "unit": "ns",
            "range": "± 909430.6833014081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1002126.5052631579,
            "unit": "ns",
            "range": "± 91806.73092262594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1909362.4918032787,
            "unit": "ns",
            "range": "± 86036.91307700878"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1675837.7659574468,
            "unit": "ns",
            "range": "± 149118.4407564791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12743986.657894736,
            "unit": "ns",
            "range": "± 1038582.1787350734"
          }
        ]
      }
    ]
  }
}