window.BENCHMARK_DATA = {
  "lastUpdate": 1690885409851,
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
          "id": "49b0c5195840094a706c93fb185b65ce8b048450",
          "message": "test: Add WorldTest",
          "timestamp": "2023-07-31T16:14:07+09:00",
          "tree_id": "a7c1fc9eeeed6b956489c883189164715dab2a5d",
          "url": "https://github.com/planetarium/libplanet/commit/49b0c5195840094a706c93fb185b65ce8b048450"
        },
        "date": 1690862777233,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282986.23333333334,
            "unit": "ns",
            "range": "± 8465.967829404135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262202.9655172414,
            "unit": "ns",
            "range": "± 7068.9470800252175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 237705.16666666666,
            "unit": "ns",
            "range": "± 3145.9453502975575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4278078.466666667,
            "unit": "ns",
            "range": "± 37391.34129689589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3964615,
            "unit": "ns",
            "range": "± 12091.968836104952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20264.76923076923,
            "unit": "ns",
            "range": "± 1872.306528067115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90846.6530612245,
            "unit": "ns",
            "range": "± 6281.27813032965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72070.29629629629,
            "unit": "ns",
            "range": "± 2011.0423974189416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91406.95918367348,
            "unit": "ns",
            "range": "± 10626.266848349775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4794.845360824742,
            "unit": "ns",
            "range": "± 714.4886187017228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21548.90425531915,
            "unit": "ns",
            "range": "± 1783.474288887138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334929.597826087,
            "unit": "ns",
            "range": "± 77536.23829462218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2565288.810810811,
            "unit": "ns",
            "range": "± 83060.94131748415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1736699.375,
            "unit": "ns",
            "range": "± 106916.26253792706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4703878.407407408,
            "unit": "ns",
            "range": "± 125744.24773271379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055713.803645833,
            "unit": "ns",
            "range": "± 22394.752270217843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895173.2615792411,
            "unit": "ns",
            "range": "± 2559.4063408904763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376871.8120814732,
            "unit": "ns",
            "range": "± 603.2087642989067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592842.024939904,
            "unit": "ns",
            "range": "± 985.7494884280196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815801.1903645833,
            "unit": "ns",
            "range": "± 581.6230706381998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750240.4936197917,
            "unit": "ns",
            "range": "± 2499.053077758355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230539.8484848486,
            "unit": "ns",
            "range": "± 99713.85276195368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3432397.4545454546,
            "unit": "ns",
            "range": "± 80457.43020453042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4287087.666666667,
            "unit": "ns",
            "range": "± 78707.30467703623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3840665.2666666666,
            "unit": "ns",
            "range": "± 114633.40449598551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6325792.5,
            "unit": "ns",
            "range": "± 101362.70562643721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7543844.928571428,
            "unit": "ns",
            "range": "± 32559.1666035478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19389128.785714287,
            "unit": "ns",
            "range": "± 133916.13799641037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49901331,
            "unit": "ns",
            "range": "± 342751.7663718161"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99802109.46666667,
            "unit": "ns",
            "range": "± 590212.3797312125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200261239.06666666,
            "unit": "ns",
            "range": "± 1359058.3417340042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47567.930555555555,
            "unit": "ns",
            "range": "± 2356.682917872329"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "744559b0b2215a7fb7f759339f5ee24d19a1f3d3",
          "message": "Merge pull request #3346 from limebell/feature/world-state\n\nchore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T17:51:56+09:00",
          "tree_id": "adbffacf7e50247cc7ef38db738dc495d40ca7a1",
          "url": "https://github.com/planetarium/libplanet/commit/744559b0b2215a7fb7f759339f5ee24d19a1f3d3"
        },
        "date": 1690880904474,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353944.5,
            "unit": "ns",
            "range": "± 10234.925877216758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332314.2972972973,
            "unit": "ns",
            "range": "± 11133.651092932592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300397.3214285714,
            "unit": "ns",
            "range": "± 12863.805327149708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5412825.6,
            "unit": "ns",
            "range": "± 70316.5932284631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4975113.285714285,
            "unit": "ns",
            "range": "± 39125.784200405535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24608.978021978022,
            "unit": "ns",
            "range": "± 2279.396318609245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109420.15384615384,
            "unit": "ns",
            "range": "± 5609.187491400721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91475.76315789473,
            "unit": "ns",
            "range": "± 4672.511692493795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113739.46153846153,
            "unit": "ns",
            "range": "± 10185.853800800503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7408.395833333333,
            "unit": "ns",
            "range": "± 811.4875162533848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24433.894736842107,
            "unit": "ns",
            "range": "± 2306.062497878351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1799545.8817204302,
            "unit": "ns",
            "range": "± 95580.13416032342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3333835.714285714,
            "unit": "ns",
            "range": "± 58781.68682824291"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2287303.4,
            "unit": "ns",
            "range": "± 106959.69446876064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5993080.620689655,
            "unit": "ns",
            "range": "± 174444.60057492132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7298262.805288462,
            "unit": "ns",
            "range": "± 21171.190644037913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2242822.20625,
            "unit": "ns",
            "range": "± 2261.3661958102357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1645155.0891927083,
            "unit": "ns",
            "range": "± 4282.559953767649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3199697.9302083333,
            "unit": "ns",
            "range": "± 3951.2395423285957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005856.2153645833,
            "unit": "ns",
            "range": "± 778.7612362516913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 930294.3250651042,
            "unit": "ns",
            "range": "± 694.1561056420003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4273906.627906977,
            "unit": "ns",
            "range": "± 156902.1432801537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4519836.684210527,
            "unit": "ns",
            "range": "± 193624.4864548348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5409293.388888889,
            "unit": "ns",
            "range": "± 110948.75310390134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5048924.333333333,
            "unit": "ns",
            "range": "± 87771.8596351332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7925509.75,
            "unit": "ns",
            "range": "± 179957.03739909848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9925328.806451613,
            "unit": "ns",
            "range": "± 297967.00755927316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26512218.866666667,
            "unit": "ns",
            "range": "± 247035.62575318298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67241842,
            "unit": "ns",
            "range": "± 483094.4412196084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132755447,
            "unit": "ns",
            "range": "± 818979.3262706127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267907361.92857143,
            "unit": "ns",
            "range": "± 854621.4197715729"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57674.16091954023,
            "unit": "ns",
            "range": "± 3173.1151991106562"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c22ca67944295309884342cc77c4ecca32dc5051",
          "message": "Merge pull request #3348 from limebell/refactor/world-nonnull\n\nRemove nullable from `IWorld.GetAccount()`",
          "timestamp": "2023-08-01T19:04:06+09:00",
          "tree_id": "c2eec30c5428e1d8a614317b3457f5b268835a5b",
          "url": "https://github.com/planetarium/libplanet/commit/c22ca67944295309884342cc77c4ecca32dc5051"
        },
        "date": 1690885379044,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357665.93548387097,
            "unit": "ns",
            "range": "± 41823.1680239674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351222.34375,
            "unit": "ns",
            "range": "± 48535.787635371235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309573.3298969072,
            "unit": "ns",
            "range": "± 41032.358866641676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4916693.969387755,
            "unit": "ns",
            "range": "± 400232.9020052646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4318945.775510204,
            "unit": "ns",
            "range": "± 323833.26403292344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29379.909090909092,
            "unit": "ns",
            "range": "± 10934.91069650918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107415.35789473684,
            "unit": "ns",
            "range": "± 19415.23892922926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115769.898989899,
            "unit": "ns",
            "range": "± 26486.02344344722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135933.22916666666,
            "unit": "ns",
            "range": "± 27313.47832056515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6079.55421686747,
            "unit": "ns",
            "range": "± 1564.5996390646615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28697.08080808081,
            "unit": "ns",
            "range": "± 10584.864714006108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1611727.6224489796,
            "unit": "ns",
            "range": "± 250715.62555129596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947820.5274725277,
            "unit": "ns",
            "range": "± 250272.79260813433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2059854.0625,
            "unit": "ns",
            "range": "± 249910.00083620893"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6052811.626262627,
            "unit": "ns",
            "range": "± 688852.8704249446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6675442.792773438,
            "unit": "ns",
            "range": "± 232635.88318267875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2157093.9248697916,
            "unit": "ns",
            "range": "± 63459.3769243035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1630725.76796875,
            "unit": "ns",
            "range": "± 43267.081752850936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3071031.6832386362,
            "unit": "ns",
            "range": "± 70130.8100107263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999519.7227783203,
            "unit": "ns",
            "range": "± 18689.94351951672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934798.2407602164,
            "unit": "ns",
            "range": "± 8684.886794903485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3664794.897959184,
            "unit": "ns",
            "range": "± 294013.727526857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3979766.694736842,
            "unit": "ns",
            "range": "± 318871.7292468127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5296264.306122449,
            "unit": "ns",
            "range": "± 399156.6830524979"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486915.224489796,
            "unit": "ns",
            "range": "± 341056.37382940145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8294215.252525252,
            "unit": "ns",
            "range": "± 584205.0375652709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8944546.344444444,
            "unit": "ns",
            "range": "± 494218.5071704408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24091984.45588235,
            "unit": "ns",
            "range": "± 1119335.977010243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62497127.10810811,
            "unit": "ns",
            "range": "± 2061424.7433309562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124648729.49056605,
            "unit": "ns",
            "range": "± 5137679.942447405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255423964.63636363,
            "unit": "ns",
            "range": "± 6105426.013775369"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69722.95918367348,
            "unit": "ns",
            "range": "± 18291.943974023983"
          }
        ]
      }
    ]
  }
}