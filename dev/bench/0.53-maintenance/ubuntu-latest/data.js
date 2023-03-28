window.BENCHMARK_DATA = {
  "lastUpdate": 1679986719714,
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
          "id": "d8d5ed9b9406362876512cf8ef4b393304225b72",
          "message": "Version bump",
          "timestamp": "2023-03-27T17:58:08+09:00",
          "tree_id": "3dbd7bd8fcd4b144c04a448633d6660bc6df5655",
          "url": "https://github.com/planetarium/libplanet/commit/d8d5ed9b9406362876512cf8ef4b393304225b72"
        },
        "date": 1679908359647,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3706008.8666666667,
            "unit": "ns",
            "range": "± 66586.25179941604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5722571.071428572,
            "unit": "ns",
            "range": "± 90042.51312272466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26183105.533333335,
            "unit": "ns",
            "range": "± 263312.6842942942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7036172.8,
            "unit": "ns",
            "range": "± 94677.56439259666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30501799.6,
            "unit": "ns",
            "range": "± 274367.8283506078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8619736.714285715,
            "unit": "ns",
            "range": "± 85338.55115175861"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22265713.35714286,
            "unit": "ns",
            "range": "± 206470.8490165909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55692690.13333333,
            "unit": "ns",
            "range": "± 286653.995060712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111200479.06666666,
            "unit": "ns",
            "range": "± 662025.0451256646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222363383.92857143,
            "unit": "ns",
            "range": "± 706632.7688882584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1495064.108695652,
            "unit": "ns",
            "range": "± 84093.301171117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2729080.9285714286,
            "unit": "ns",
            "range": "± 76782.95325952218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312470.71875,
            "unit": "ns",
            "range": "± 105928.40272883164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5372373.761904762,
            "unit": "ns",
            "range": "± 127444.6627163746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53292.2,
            "unit": "ns",
            "range": "± 3610.358367902119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6039013.268973215,
            "unit": "ns",
            "range": "± 27469.106272978937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860953.4434895834,
            "unit": "ns",
            "range": "± 4838.616966542389"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363282.8569010417,
            "unit": "ns",
            "range": "± 3623.840320578837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676955.3606770835,
            "unit": "ns",
            "range": "± 3707.4924122148104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838186.5526041667,
            "unit": "ns",
            "range": "± 1419.0295833758855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768720.1591796875,
            "unit": "ns",
            "range": "± 474.55081749746756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216112.62,
            "unit": "ns",
            "range": "± 8723.942971793318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209304.1379310345,
            "unit": "ns",
            "range": "± 9107.89463500735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 181011.05263157896,
            "unit": "ns",
            "range": "± 9187.079590954152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12528082.933333334,
            "unit": "ns",
            "range": "± 169729.3773029233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10123568.733333332,
            "unit": "ns",
            "range": "± 174884.94199961735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22656.425531914894,
            "unit": "ns",
            "range": "± 2346.97270803142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60365.74193548387,
            "unit": "ns",
            "range": "± 5311.3844791026695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44858.87301587302,
            "unit": "ns",
            "range": "± 2067.527933985052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99385.08860759494,
            "unit": "ns",
            "range": "± 6343.393147224375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6779.381443298969,
            "unit": "ns",
            "range": "± 777.5412829782064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21702.225806451614,
            "unit": "ns",
            "range": "± 1699.2605369307753"
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
          "id": "6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5",
          "message": "Version bump",
          "timestamp": "2023-03-28T15:44:31+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/6f2c67465385ea7e41cfadbe26dd4a5fb585e2b5"
        },
        "date": 1679986698613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3133325.8571428573,
            "unit": "ns",
            "range": "± 31144.435134132324"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5034602.4,
            "unit": "ns",
            "range": "± 96184.74607830166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23655247.933333334,
            "unit": "ns",
            "range": "± 331904.79982959543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6140664.823529412,
            "unit": "ns",
            "range": "± 120120.70773405147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26819374.57142857,
            "unit": "ns",
            "range": "± 459831.70969166106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7614649.615384615,
            "unit": "ns",
            "range": "± 16200.308682956536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19269248.2,
            "unit": "ns",
            "range": "± 65183.01196433666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49419565.6,
            "unit": "ns",
            "range": "± 270173.33671335626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98848304.26666667,
            "unit": "ns",
            "range": "± 792879.6361248632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196412460.13333333,
            "unit": "ns",
            "range": "± 1942661.3992571733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340476.5656565656,
            "unit": "ns",
            "range": "± 104087.85794331532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476690.8285714285,
            "unit": "ns",
            "range": "± 81315.7044630537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2105135.0512820515,
            "unit": "ns",
            "range": "± 108653.51128850834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5122052.625,
            "unit": "ns",
            "range": "± 169188.97854321598"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44760.78571428572,
            "unit": "ns",
            "range": "± 1930.602776471504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5916142.991629465,
            "unit": "ns",
            "range": "± 17831.98806238806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1837621.3569010417,
            "unit": "ns",
            "range": "± 5693.157955505388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1340564.9868164062,
            "unit": "ns",
            "range": "± 3059.9323630953754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550294.5647321427,
            "unit": "ns",
            "range": "± 3909.2664020414877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834513.5520582933,
            "unit": "ns",
            "range": "± 922.986220710915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 737748.186328125,
            "unit": "ns",
            "range": "± 877.7647154451989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195573.3076923077,
            "unit": "ns",
            "range": "± 2347.1887576636364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196538.2,
            "unit": "ns",
            "range": "± 7445.001912814945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164685.90476190476,
            "unit": "ns",
            "range": "± 3861.095905371452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11288849.866666667,
            "unit": "ns",
            "range": "± 68320.62677642683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9018759.8,
            "unit": "ns",
            "range": "± 110068.91787434167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17004.52808988764,
            "unit": "ns",
            "range": "± 1133.6765320476684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49603.5632183908,
            "unit": "ns",
            "range": "± 2536.775341370392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37918.318181818184,
            "unit": "ns",
            "range": "± 887.8175695471095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77511.1975308642,
            "unit": "ns",
            "range": "± 5528.341354827307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5053.846153846154,
            "unit": "ns",
            "range": "± 87.70580193070293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14962.955056179775,
            "unit": "ns",
            "range": "± 1188.20943315899"
          }
        ]
      }
    ]
  }
}