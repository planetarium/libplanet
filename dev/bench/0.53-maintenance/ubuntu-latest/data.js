window.BENCHMARK_DATA = {
  "lastUpdate": 1679994037889,
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
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59d402c02d16124c08caec2273d957bc8390aa46",
          "message": "Merge pull request #2997 from tkiapril/release/0.53\n\n🚀 Release 0.53.0",
          "timestamp": "2023-03-27T17:55:04+09:00",
          "tree_id": "470c6e76c5b87e56493e384b6d88818eb6a20a81",
          "url": "https://github.com/planetarium/libplanet/commit/59d402c02d16124c08caec2273d957bc8390aa46"
        },
        "date": 1679987328571,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3405071.3921568627,
            "unit": "ns",
            "range": "± 137902.7914429695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5211536.538461538,
            "unit": "ns",
            "range": "± 50434.806003419544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24071374.466666665,
            "unit": "ns",
            "range": "± 205179.68151593604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6346555.8,
            "unit": "ns",
            "range": "± 73135.69825546404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27463962.266666666,
            "unit": "ns",
            "range": "± 413981.65126738005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7794854.6,
            "unit": "ns",
            "range": "± 38289.4737750655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19901806.666666668,
            "unit": "ns",
            "range": "± 56908.08211074953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50954238.4,
            "unit": "ns",
            "range": "± 193005.01467015973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101342127.21428572,
            "unit": "ns",
            "range": "± 290261.65528872487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205254538.7857143,
            "unit": "ns",
            "range": "± 370462.75740841054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357747.1609195403,
            "unit": "ns",
            "range": "± 69757.73939172321"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2538619.066666667,
            "unit": "ns",
            "range": "± 74810.44424453292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2202511.453333333,
            "unit": "ns",
            "range": "± 110451.12922651961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5037462.25,
            "unit": "ns",
            "range": "± 135946.96888605334"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47666.030927835054,
            "unit": "ns",
            "range": "± 2958.293210245311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6353379.237980769,
            "unit": "ns",
            "range": "± 11179.315339982608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993255.529575893,
            "unit": "ns",
            "range": "± 907.5580017835043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365528.7657752405,
            "unit": "ns",
            "range": "± 760.9702244464886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2573678.6497395835,
            "unit": "ns",
            "range": "± 7088.095689670858"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820202.055094401,
            "unit": "ns",
            "range": "± 967.5257003646353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730061.4181780134,
            "unit": "ns",
            "range": "± 592.9287304442942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206623.86842105264,
            "unit": "ns",
            "range": "± 6759.902762658458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202935.5,
            "unit": "ns",
            "range": "± 7994.296786233482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172666.20754716982,
            "unit": "ns",
            "range": "± 7094.929780534208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11358592.733333332,
            "unit": "ns",
            "range": "± 47944.664266611515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9413197.214285715,
            "unit": "ns",
            "range": "± 42225.47605630183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20264.548387096773,
            "unit": "ns",
            "range": "± 1503.021301565393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60055.654320987655,
            "unit": "ns",
            "range": "± 3130.2282630843947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40857.17857142857,
            "unit": "ns",
            "range": "± 1732.8983404809294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96175.59183673469,
            "unit": "ns",
            "range": "± 11684.215197442181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.96875,
            "unit": "ns",
            "range": "± 533.3133660256219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21727.378947368423,
            "unit": "ns",
            "range": "± 1924.501561216966"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b23ea67a4f8e12dbe144eb3496fb24dd72acef6",
          "message": "Merge pull request #3006 from tkiapril/ci-fix-release\n\nFix build artifact and push",
          "timestamp": "2023-03-28T16:00:25+09:00",
          "tree_id": "8d0931c2bea3b02ea4857e88e0f6295c46f2d265",
          "url": "https://github.com/planetarium/libplanet/commit/8b23ea67a4f8e12dbe144eb3496fb24dd72acef6"
        },
        "date": 1679987977613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3657691.08,
            "unit": "ns",
            "range": "± 393402.490448503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6108315.795918368,
            "unit": "ns",
            "range": "± 772947.021466529"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31193383.7979798,
            "unit": "ns",
            "range": "± 2487334.4736726265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7479216.195876288,
            "unit": "ns",
            "range": "± 705026.2253211999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 37591477.44444445,
            "unit": "ns",
            "range": "± 2704221.9345230977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9013431.163265307,
            "unit": "ns",
            "range": "± 1051214.587214931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24676957.17171717,
            "unit": "ns",
            "range": "± 2599774.94326062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62933273.58585858,
            "unit": "ns",
            "range": "± 4472204.2620553905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129426474.90816326,
            "unit": "ns",
            "range": "± 7734291.571088053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273523462.0169492,
            "unit": "ns",
            "range": "± 12061715.811318533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1758378.0625,
            "unit": "ns",
            "range": "± 134936.74895858372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3315204.765957447,
            "unit": "ns",
            "range": "± 306134.0299602228"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2842950.618556701,
            "unit": "ns",
            "range": "± 269991.5222311173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6731502.505263158,
            "unit": "ns",
            "range": "± 567333.3214749186"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71321.23404255319,
            "unit": "ns",
            "range": "± 15839.225239976215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7429245.599888393,
            "unit": "ns",
            "range": "± 89183.21430258811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2338408.4518229165,
            "unit": "ns",
            "range": "± 39268.78543412203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1708399.4418247768,
            "unit": "ns",
            "range": "± 13232.607074039957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3276729.0466452204,
            "unit": "ns",
            "range": "± 67001.62223316488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049727.626953125,
            "unit": "ns",
            "range": "± 10930.918751797446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1011214.0399305555,
            "unit": "ns",
            "range": "± 21223.224198757398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252765.9381443299,
            "unit": "ns",
            "range": "± 30148.42879813365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260032.65263157894,
            "unit": "ns",
            "range": "± 31189.45036344495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229076.5,
            "unit": "ns",
            "range": "± 32622.273632182503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14965909.22826087,
            "unit": "ns",
            "range": "± 993499.093535295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12137741.3814433,
            "unit": "ns",
            "range": "± 1027932.3105290203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33521.64948453608,
            "unit": "ns",
            "range": "± 10621.276080782029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82025.80645161291,
            "unit": "ns",
            "range": "± 18264.88614578951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57271.61052631579,
            "unit": "ns",
            "range": "± 12276.64485516658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132394.70833333334,
            "unit": "ns",
            "range": "± 24471.88012905582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5427.058823529412,
            "unit": "ns",
            "range": "± 614.582365996485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32933.32323232323,
            "unit": "ns",
            "range": "± 9628.045697631436"
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
          "id": "b2df14c688950b5b85c75d84612e38eb4ace2b65",
          "message": "Version bump",
          "timestamp": "2023-03-28T16:32:59+09:00",
          "tree_id": "8ced6279d3c078684d800c452b0866aad06d8d6e",
          "url": "https://github.com/planetarium/libplanet/commit/b2df14c688950b5b85c75d84612e38eb4ace2b65"
        },
        "date": 1679989685818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3478745.9032258065,
            "unit": "ns",
            "range": "± 104702.74441782152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5502506.65,
            "unit": "ns",
            "range": "± 124359.2100600747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24797882.086956523,
            "unit": "ns",
            "range": "± 611479.1819315098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6460622.857142857,
            "unit": "ns",
            "range": "± 247542.67673364593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28904259.403225806,
            "unit": "ns",
            "range": "± 1315285.556021855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7614757.928571428,
            "unit": "ns",
            "range": "± 80047.72791900158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21645946.14285714,
            "unit": "ns",
            "range": "± 276574.4510876584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53437088.4375,
            "unit": "ns",
            "range": "± 1043334.044461055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105153676.8,
            "unit": "ns",
            "range": "± 1488813.8052322632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212513451.86666667,
            "unit": "ns",
            "range": "± 3512814.6677445923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1387541.2626262626,
            "unit": "ns",
            "range": "± 80609.93310261382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2692496.4571428574,
            "unit": "ns",
            "range": "± 87468.60267794343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289181.8974358975,
            "unit": "ns",
            "range": "± 117245.24235717175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5542650.339622642,
            "unit": "ns",
            "range": "± 230614.2112938622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50507.829268292684,
            "unit": "ns",
            "range": "± 2559.906478832256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6151706.200520833,
            "unit": "ns",
            "range": "± 52827.25625941073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1844371.1358072916,
            "unit": "ns",
            "range": "± 7048.030322558673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359300.350390625,
            "unit": "ns",
            "range": "± 3488.9383932611377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587528.7151227677,
            "unit": "ns",
            "range": "± 2478.912731625202"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828989.7904947917,
            "unit": "ns",
            "range": "± 1817.8043522494484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764458.8513532366,
            "unit": "ns",
            "range": "± 743.505061908653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202495.93103448275,
            "unit": "ns",
            "range": "± 8766.995236045503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203091.29545454544,
            "unit": "ns",
            "range": "± 7606.431010968943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174342.3396226415,
            "unit": "ns",
            "range": "± 7292.211788411916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12125932.57142857,
            "unit": "ns",
            "range": "± 154592.25305334642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10027388.5,
            "unit": "ns",
            "range": "± 61065.6266912271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21687.663157894738,
            "unit": "ns",
            "range": "± 1819.8403285729655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58058.73684210526,
            "unit": "ns",
            "range": "± 5142.22003594715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43039.14457831325,
            "unit": "ns",
            "range": "± 2282.697559812492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104330.67346938775,
            "unit": "ns",
            "range": "± 14057.966277205298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6261.333333333333,
            "unit": "ns",
            "range": "± 759.0394291948631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21803.46875,
            "unit": "ns",
            "range": "± 2800.7365157386917"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d737a5965c073aeb8531100d7251e233f78c614",
          "message": "Merge branch 'main' into 0.53-maintenance",
          "timestamp": "2023-03-28T16:30:17+09:00",
          "tree_id": "3420c2bc5a00078db976a2da8519e1623951c323",
          "url": "https://github.com/planetarium/libplanet/commit/2d737a5965c073aeb8531100d7251e233f78c614"
        },
        "date": 1679989933907,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3929513.1739130435,
            "unit": "ns",
            "range": "± 220654.29198459335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6266705.142857143,
            "unit": "ns",
            "range": "± 386975.711723111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30426224.727272727,
            "unit": "ns",
            "range": "± 717649.3532351152"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7906845.918032787,
            "unit": "ns",
            "range": "± 351692.1474739565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36271495.885245904,
            "unit": "ns",
            "range": "± 1616866.4640624172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9611091.297297297,
            "unit": "ns",
            "range": "± 476247.5444109053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25319089.086021505,
            "unit": "ns",
            "range": "± 1429416.5333094727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64939314.4,
            "unit": "ns",
            "range": "± 2091752.3775082096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128491874.29032259,
            "unit": "ns",
            "range": "± 5834683.363273364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258813210.75862068,
            "unit": "ns",
            "range": "± 10979268.902708901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1693501.806122449,
            "unit": "ns",
            "range": "± 170929.8757587455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3230514.1086956523,
            "unit": "ns",
            "range": "± 252909.56583464643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2702393.3775510206,
            "unit": "ns",
            "range": "± 226612.97030784134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6961889.591836735,
            "unit": "ns",
            "range": "± 512527.52603080194"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58818.37234042553,
            "unit": "ns",
            "range": "± 6950.781404179612"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7235564.178645833,
            "unit": "ns",
            "range": "± 100625.47099821306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2381562.0530427634,
            "unit": "ns",
            "range": "± 49930.23640314139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1657472.6720145089,
            "unit": "ns",
            "range": "± 18656.859502133022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163684.802604167,
            "unit": "ns",
            "range": "± 35290.78613444912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1048315.7513427734,
            "unit": "ns",
            "range": "± 20031.546997591602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963293.7077287947,
            "unit": "ns",
            "range": "± 10979.683930744717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229792.46315789473,
            "unit": "ns",
            "range": "± 16199.713415386379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230728.95454545456,
            "unit": "ns",
            "range": "± 13268.999312552955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206195.95876288658,
            "unit": "ns",
            "range": "± 20552.304809881585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14252828.55,
            "unit": "ns",
            "range": "± 636425.0383433915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11866363.851851853,
            "unit": "ns",
            "range": "± 483922.1251472537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27000.666666666668,
            "unit": "ns",
            "range": "± 7548.744065020599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69649.84536082474,
            "unit": "ns",
            "range": "± 10229.573760406034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50267.30612244898,
            "unit": "ns",
            "range": "± 6833.63857346477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124838.16304347826,
            "unit": "ns",
            "range": "± 17954.54324901686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10699.242424242424,
            "unit": "ns",
            "range": "± 5622.730624467501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26370.302083333332,
            "unit": "ns",
            "range": "± 6891.42364043857"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a7039b150f1d8641c3fac69a85a074e4dbd9fb6",
          "message": "Merge pull request #3010 from riemannulus/0.53-maintenance\n\n 🔀 Port 0.50.6 to 0.53.1",
          "timestamp": "2023-03-28T17:46:17+09:00",
          "tree_id": "f64408b31c3787ccb81125308b218a2546057403",
          "url": "https://github.com/planetarium/libplanet/commit/0a7039b150f1d8641c3fac69a85a074e4dbd9fb6"
        },
        "date": 1679994017989,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322534.9791666665,
            "unit": "ns",
            "range": "± 129256.54778401792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5569628.785714285,
            "unit": "ns",
            "range": "± 93501.03273323413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24656997.2,
            "unit": "ns",
            "range": "± 556168.1404494602"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6435049.739130435,
            "unit": "ns",
            "range": "± 155849.44815494723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28355533.15,
            "unit": "ns",
            "range": "± 635284.1241174795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7541484,
            "unit": "ns",
            "range": "± 68925.98117490296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20872236.933333334,
            "unit": "ns",
            "range": "± 283945.509253968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52228592.13333333,
            "unit": "ns",
            "range": "± 512101.68936534284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105375154.2,
            "unit": "ns",
            "range": "± 1367602.8342855037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209304605.86666667,
            "unit": "ns",
            "range": "± 2990895.9241088345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1429182.1770833333,
            "unit": "ns",
            "range": "± 97898.12394729476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2695873.918918919,
            "unit": "ns",
            "range": "± 90843.9443304892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2257062,
            "unit": "ns",
            "range": "± 145285.83038476077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5368963.357142857,
            "unit": "ns",
            "range": "± 195737.85864920626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48240.18918918919,
            "unit": "ns",
            "range": "± 2297.36703775929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5873367.017857143,
            "unit": "ns",
            "range": "± 24082.05796649908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881947.1795372595,
            "unit": "ns",
            "range": "± 2489.3597708979178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362908.3248697917,
            "unit": "ns",
            "range": "± 3503.858200068091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2652211.0881696427,
            "unit": "ns",
            "range": "± 3526.2755710746237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818679.2393229167,
            "unit": "ns",
            "range": "± 1221.4724455839278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766651.2612304688,
            "unit": "ns",
            "range": "± 400.74988049899343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204043.16666666666,
            "unit": "ns",
            "range": "± 4349.708526407934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203656,
            "unit": "ns",
            "range": "± 5665.1437486005325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169203.55555555556,
            "unit": "ns",
            "range": "± 5558.868355773988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11881333.266666668,
            "unit": "ns",
            "range": "± 187178.66071692295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9611040.333333334,
            "unit": "ns",
            "range": "± 147039.95937288937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18500.432098765432,
            "unit": "ns",
            "range": "± 993.3568082299482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54594.86315789474,
            "unit": "ns",
            "range": "± 4638.90673935079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41774.142857142855,
            "unit": "ns",
            "range": "± 1747.896454480189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90198.39772727272,
            "unit": "ns",
            "range": "± 8965.684823661613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5083.5,
            "unit": "ns",
            "range": "± 534.475443776419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19404.763440860213,
            "unit": "ns",
            "range": "± 1810.073661711814"
          }
        ]
      }
    ]
  }
}