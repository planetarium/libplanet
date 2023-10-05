window.BENCHMARK_DATA = {
  "lastUpdate": 1696517084431,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "2d615446e6d6534540c757d28a329c858cfdfc67",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>",
          "timestamp": "2023-10-05T23:23:43+09:00",
          "tree_id": "559c6d26dcc589082e62d5606f201d093138ef2e",
          "url": "https://github.com/planetarium/libplanet/commit/2d615446e6d6534540c757d28a329c858cfdfc67"
        },
        "date": 1696516999133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8721078.739583334,
            "unit": "ns",
            "range": "± 512233.7621910988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22395892.53012048,
            "unit": "ns",
            "range": "± 1191572.5923195286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56204889.20930233,
            "unit": "ns",
            "range": "± 3042366.700564649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110711119.26923077,
            "unit": "ns",
            "range": "± 1322452.8344563087"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226464407.50980392,
            "unit": "ns",
            "range": "± 9236957.710002368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77518.6282051282,
            "unit": "ns",
            "range": "± 4006.5380207757175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394833.4583333333,
            "unit": "ns",
            "range": "± 76056.12490909407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352000.9,
            "unit": "ns",
            "range": "± 50403.460968089305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355055.13265306124,
            "unit": "ns",
            "range": "± 55281.308226606845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4445924.914141414,
            "unit": "ns",
            "range": "± 401666.2928270541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010736.989473684,
            "unit": "ns",
            "range": "± 302926.8104663024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24940.208333333332,
            "unit": "ns",
            "range": "± 3223.0403590616656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118361.44444444444,
            "unit": "ns",
            "range": "± 9834.056671326258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108985.3125,
            "unit": "ns",
            "range": "± 6554.045928099038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110161.70652173914,
            "unit": "ns",
            "range": "± 9437.245892409668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8228.202127659575,
            "unit": "ns",
            "range": "± 962.4200548258061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21815.827956989247,
            "unit": "ns",
            "range": "± 2845.2881019543443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577876.8673469387,
            "unit": "ns",
            "range": "± 193218.97274905155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894273.14516129,
            "unit": "ns",
            "range": "± 119567.19369405652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464853.569892473,
            "unit": "ns",
            "range": "± 143797.9770742997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9313918.566666666,
            "unit": "ns",
            "range": "± 351602.9563921498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3416847.3279569894,
            "unit": "ns",
            "range": "± 236173.42926215968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579401.2604166665,
            "unit": "ns",
            "range": "± 262997.5734800106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4606576.416666667,
            "unit": "ns",
            "range": "± 355674.8164234962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4697740.626262627,
            "unit": "ns",
            "range": "± 407105.40408706135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15983027.386597939,
            "unit": "ns",
            "range": "± 2016040.6852752247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5465329.379464285,
            "unit": "ns",
            "range": "± 22598.27597803266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1685197.1986607143,
            "unit": "ns",
            "range": "± 3352.9337370041226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1025395.8984375,
            "unit": "ns",
            "range": "± 17809.46889029025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627986.378808594,
            "unit": "ns",
            "range": "± 92226.52309800182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 764091.5382161458,
            "unit": "ns",
            "range": "± 7802.210478224212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728981.4852213542,
            "unit": "ns",
            "range": "± 8916.251325291907"
          }
        ]
      }
    ]
  }
}