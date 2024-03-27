window.BENCHMARK_DATA = {
  "lastUpdate": 1711531172200,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "d3d5e725560f9f0ac6abfdf3cfac3553a23e2448",
          "message": "increase context timeout",
          "timestamp": "2024-03-22T17:08:06+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/d3d5e725560f9f0ac6abfdf3cfac3553a23e2448"
        },
        "date": 1711095571123,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 948925.2631578947,
            "unit": "ns",
            "range": "± 82705.72669001603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1696705.5555555555,
            "unit": "ns",
            "range": "± 71299.53138766502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1545975.5102040817,
            "unit": "ns",
            "range": "± 182456.12948838228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6675790.909090909,
            "unit": "ns",
            "range": "± 156461.96832606808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35037.83783783784,
            "unit": "ns",
            "range": "± 1729.17770486062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5076164.285714285,
            "unit": "ns",
            "range": "± 47434.66125010368"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13521269.23076923,
            "unit": "ns",
            "range": "± 190213.46510615989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32555413.333333332,
            "unit": "ns",
            "range": "± 430082.65628608555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62987492.85714286,
            "unit": "ns",
            "range": "± 671842.4557362167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131134669.23076923,
            "unit": "ns",
            "range": "± 982940.3257443246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3360350.4427083335,
            "unit": "ns",
            "range": "± 10294.291139667808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1075105.5078125,
            "unit": "ns",
            "range": "± 6039.9121268528925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 748859.5377604166,
            "unit": "ns",
            "range": "± 2198.563481302374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989409.2075892857,
            "unit": "ns",
            "range": "± 4821.047821810056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609202.9622395834,
            "unit": "ns",
            "range": "± 1869.384371682742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574667.9231770834,
            "unit": "ns",
            "range": "± 1798.3598661306746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2090178.5714285714,
            "unit": "ns",
            "range": "± 36605.88810500361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2297715.3846153845,
            "unit": "ns",
            "range": "± 35860.69915087746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2746115.3846153845,
            "unit": "ns",
            "range": "± 80474.99624257782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2815584.9315068494,
            "unit": "ns",
            "range": "± 140212.1771847867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7841425,
            "unit": "ns",
            "range": "± 261095.42488798208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168821.81818181818,
            "unit": "ns",
            "range": "± 7200.506435612215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162661.79775280898,
            "unit": "ns",
            "range": "± 10695.395203055396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140292.59259259258,
            "unit": "ns",
            "range": "± 3927.509087873335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2791381.25,
            "unit": "ns",
            "range": "± 45458.10112986829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2514892.8571428573,
            "unit": "ns",
            "range": "± 38186.25335189282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10569.072164948453,
            "unit": "ns",
            "range": "± 1572.1111618313248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53980.41237113402,
            "unit": "ns",
            "range": "± 6475.76635064752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43613.793103448275,
            "unit": "ns",
            "range": "± 1912.7869146886787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53996.93877551021,
            "unit": "ns",
            "range": "± 11748.991657384266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2589.5833333333335,
            "unit": "ns",
            "range": "± 572.433249000618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10329.347826086956,
            "unit": "ns",
            "range": "± 918.2565950706949"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "09761e64a58d6c030f3f7fad0f3b491c8d06c680",
          "message": "increase context timeout",
          "timestamp": "2024-03-27T18:06:55+09:00",
          "tree_id": "2ea42396a7dec2dc41c8d015957793b4f3e579a3",
          "url": "https://github.com/planetarium/libplanet/commit/09761e64a58d6c030f3f7fad0f3b491c8d06c680"
        },
        "date": 1711531116034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 938829.2929292929,
            "unit": "ns",
            "range": "± 85583.90471001728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1678176.6666666667,
            "unit": "ns",
            "range": "± 66449.81378011852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1530809.0909090908,
            "unit": "ns",
            "range": "± 157076.74524290313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6873326.19047619,
            "unit": "ns",
            "range": "± 248328.5913811148"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34975.862068965514,
            "unit": "ns",
            "range": "± 2047.8556860741844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5110200,
            "unit": "ns",
            "range": "± 49232.368964393274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13026876.923076924,
            "unit": "ns",
            "range": "± 95185.6795413238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31675366.666666668,
            "unit": "ns",
            "range": "± 243753.16998715705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65623171.428571425,
            "unit": "ns",
            "range": "± 407809.3925590002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128535146.66666667,
            "unit": "ns",
            "range": "± 687447.1147105132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3313421.4285714286,
            "unit": "ns",
            "range": "± 4711.569949277351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042677.9157366072,
            "unit": "ns",
            "range": "± 2192.7198349567893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732256.328125,
            "unit": "ns",
            "range": "± 2085.256655919319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964545.4927884615,
            "unit": "ns",
            "range": "± 3357.7129095040814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 651128.22265625,
            "unit": "ns",
            "range": "± 1172.1842711202582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556893.37890625,
            "unit": "ns",
            "range": "± 1120.5618506625497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2071882,
            "unit": "ns",
            "range": "± 82476.08358345652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247302.5,
            "unit": "ns",
            "range": "± 67471.64451903157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2807976.470588235,
            "unit": "ns",
            "range": "± 55170.23120999862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2803042.1052631577,
            "unit": "ns",
            "range": "± 164571.4502908687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7938428.571428572,
            "unit": "ns",
            "range": "± 316719.46577373485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164196.42857142858,
            "unit": "ns",
            "range": "± 8815.887170857754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 159188.57142857142,
            "unit": "ns",
            "range": "± 7716.5086130959135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139897.4358974359,
            "unit": "ns",
            "range": "± 4896.641554731117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2830433.3333333335,
            "unit": "ns",
            "range": "± 49313.06211581365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2432800,
            "unit": "ns",
            "range": "± 51104.79429564314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9091.011235955057,
            "unit": "ns",
            "range": "± 928.9094839745007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53260.82474226804,
            "unit": "ns",
            "range": "± 5611.345588423045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44135.48387096774,
            "unit": "ns",
            "range": "± 1273.4594319141788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47707.291666666664,
            "unit": "ns",
            "range": "± 7652.605263866771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2113.5416666666665,
            "unit": "ns",
            "range": "± 282.32858485205037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9027.368421052632,
            "unit": "ns",
            "range": "± 1069.5437588914494"
          }
        ]
      }
    ]
  }
}