window.BENCHMARK_DATA = {
  "lastUpdate": 1680517472122,
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
          "id": "de35a14d0b35e50e9ebeed8728a2f3c221361d97",
          "message": "Merge pull request #3011 from riemannulus/0.53-maintenance\n\n🚀  Release 0.53.1",
          "timestamp": "2023-03-28T17:48:17+09:00",
          "tree_id": "5327816bb24d6a46b7e74947750e7b5105c5f55e",
          "url": "https://github.com/planetarium/libplanet/commit/de35a14d0b35e50e9ebeed8728a2f3c221361d97"
        },
        "date": 1679994051228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191209.6333333333,
            "unit": "ns",
            "range": "± 121614.6891732686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5143142.948717949,
            "unit": "ns",
            "range": "± 178328.7884743631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23577967.733333334,
            "unit": "ns",
            "range": "± 306247.4360560816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6241281.813953488,
            "unit": "ns",
            "range": "± 230471.75957249245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27483416.466666665,
            "unit": "ns",
            "range": "± 297209.9456064846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7701576.066666666,
            "unit": "ns",
            "range": "± 71060.2351534715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19040866.6,
            "unit": "ns",
            "range": "± 121739.3498972292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50828180.06666667,
            "unit": "ns",
            "range": "± 403353.419537377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100123122.06666666,
            "unit": "ns",
            "range": "± 922999.9263920778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201380156.53333333,
            "unit": "ns",
            "range": "± 1418867.3649705786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1385046.8282828282,
            "unit": "ns",
            "range": "± 117117.46535510795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2496232.3214285714,
            "unit": "ns",
            "range": "± 70011.99758509836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2132401.8591549294,
            "unit": "ns",
            "range": "± 101507.8839861777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5047042.75,
            "unit": "ns",
            "range": "± 111835.08023630387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45949.432835820895,
            "unit": "ns",
            "range": "± 2174.7591104769376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5982985.767708333,
            "unit": "ns",
            "range": "± 21459.106551871468"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839407.7004743305,
            "unit": "ns",
            "range": "± 1429.293867208891"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348212.376201923,
            "unit": "ns",
            "range": "± 1558.0590245612198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555641.3783052885,
            "unit": "ns",
            "range": "± 1209.1489900907343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821082.2638811384,
            "unit": "ns",
            "range": "± 593.6780235595062"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742048.5881696428,
            "unit": "ns",
            "range": "± 355.05490693116536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198313.6739130435,
            "unit": "ns",
            "range": "± 7234.759042457148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190843.98387096773,
            "unit": "ns",
            "range": "± 8672.128223093128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168692.76923076922,
            "unit": "ns",
            "range": "± 2157.547340301256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11280678.8,
            "unit": "ns",
            "range": "± 107041.21247324723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9187191.857142856,
            "unit": "ns",
            "range": "± 78692.34559478318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17673.489361702126,
            "unit": "ns",
            "range": "± 1321.8972333674558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53236.545454545456,
            "unit": "ns",
            "range": "± 5611.22562600846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38108.333333333336,
            "unit": "ns",
            "range": "± 473.7823307909414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87916.57142857143,
            "unit": "ns",
            "range": "± 13532.196395965033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4691.408602150537,
            "unit": "ns",
            "range": "± 564.8733647341395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16914.77894736842,
            "unit": "ns",
            "range": "± 1427.6995868145264"
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
          "id": "08d9132bfee8e672a126af36e410fb3afed7a352",
          "message": "Merge pull request #3012 from riemannulus/0.53-maintenance\n\n🔧  Prepare 0.53.2",
          "timestamp": "2023-03-28T17:51:21+09:00",
          "tree_id": "7d8c64db4eade92724f0287d72f0c6a353e034b8",
          "url": "https://github.com/planetarium/libplanet/commit/08d9132bfee8e672a126af36e410fb3afed7a352"
        },
        "date": 1679994343200,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3586615.2,
            "unit": "ns",
            "range": "± 50274.02907949307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5646741.642857143,
            "unit": "ns",
            "range": "± 50762.571936731765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25910720,
            "unit": "ns",
            "range": "± 176682.4598016776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6884389.333333333,
            "unit": "ns",
            "range": "± 103023.6389168363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29356600.5,
            "unit": "ns",
            "range": "± 389950.6265217826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8500764.4,
            "unit": "ns",
            "range": "± 102284.22957048936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22125261.733333334,
            "unit": "ns",
            "range": "± 216518.1733357228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55409930.2,
            "unit": "ns",
            "range": "± 345838.21038419515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111123839.33333333,
            "unit": "ns",
            "range": "± 589837.6445041788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222260093,
            "unit": "ns",
            "range": "± 689565.7738876189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472691.1237113401,
            "unit": "ns",
            "range": "± 109804.56592806696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2723503.814814815,
            "unit": "ns",
            "range": "± 76303.56466470823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2307631.971830986,
            "unit": "ns",
            "range": "± 106835.88636983253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5438186.045454546,
            "unit": "ns",
            "range": "± 130705.91320447934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52606.36956521739,
            "unit": "ns",
            "range": "± 3408.9248980905677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6095489.4453125,
            "unit": "ns",
            "range": "± 31810.53983075929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894785.9388020833,
            "unit": "ns",
            "range": "± 483.204619411276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369090.6397879464,
            "unit": "ns",
            "range": "± 1816.6130153628364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623020.638113839,
            "unit": "ns",
            "range": "± 2470.8628088364967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838600.6436941965,
            "unit": "ns",
            "range": "± 1273.2730182150315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786442.1114032452,
            "unit": "ns",
            "range": "± 247.05050627219694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 212743.16279069768,
            "unit": "ns",
            "range": "± 7815.325097373117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213050.5483870968,
            "unit": "ns",
            "range": "± 9705.451810291092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190431.88571428572,
            "unit": "ns",
            "range": "± 9247.988277196035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12624282.714285715,
            "unit": "ns",
            "range": "± 80557.6492213243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10196701.466666667,
            "unit": "ns",
            "range": "± 95028.4201946725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24786.64893617021,
            "unit": "ns",
            "range": "± 3029.5176687942408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65423.298969072166,
            "unit": "ns",
            "range": "± 5810.97911135491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54194.97422680412,
            "unit": "ns",
            "range": "± 4370.537905712102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122244.46315789473,
            "unit": "ns",
            "range": "± 12759.107362903422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8073.602040816327,
            "unit": "ns",
            "range": "± 963.5887682111057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23815.846153846152,
            "unit": "ns",
            "range": "± 1680.8992032908848"
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
          "id": "7356e3db66d1566eb296795721b13f27730a16c4",
          "message": "Merge pull request #3022 from riemannulus/0.53-maintenance\n\n🔀 Port 0.50.7 to 0.53.2",
          "timestamp": "2023-03-29T15:49:11+09:00",
          "tree_id": "82e943ab6bfdba67365883851e29c3374d58d32a",
          "url": "https://github.com/planetarium/libplanet/commit/7356e3db66d1566eb296795721b13f27730a16c4"
        },
        "date": 1680073420385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3480605.314285714,
            "unit": "ns",
            "range": "± 111951.62802871903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5445918.074074074,
            "unit": "ns",
            "range": "± 133791.17877870088"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25441222.14285714,
            "unit": "ns",
            "range": "± 345677.422015394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6951296.764705882,
            "unit": "ns",
            "range": "± 97757.0600631544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29112577.82352941,
            "unit": "ns",
            "range": "± 572640.169014674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7955097.333333333,
            "unit": "ns",
            "range": "± 137396.57268945803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21713163,
            "unit": "ns",
            "range": "± 165729.87192890554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53643679.8,
            "unit": "ns",
            "range": "± 954173.0752516398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109128761.1875,
            "unit": "ns",
            "range": "± 2108274.019661935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215735173.6818182,
            "unit": "ns",
            "range": "± 5236508.726658726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1444545.5113636365,
            "unit": "ns",
            "range": "± 78171.02859108594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2713372.6666666665,
            "unit": "ns",
            "range": "± 103080.74783502144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2337946.7375,
            "unit": "ns",
            "range": "± 117682.10691334147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5725077.15,
            "unit": "ns",
            "range": "± 362081.2090992507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50653.67391304348,
            "unit": "ns",
            "range": "± 3037.770289547787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6008745.493303572,
            "unit": "ns",
            "range": "± 26254.95441978464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847611.5510416667,
            "unit": "ns",
            "range": "± 6421.506943140519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359411.7735677084,
            "unit": "ns",
            "range": "± 3296.9429734739647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616398.4059709823,
            "unit": "ns",
            "range": "± 2785.007597993529"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820163.1610630581,
            "unit": "ns",
            "range": "± 1621.6998862055173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773509.7584635416,
            "unit": "ns",
            "range": "± 582.0059631899236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210324.8651685393,
            "unit": "ns",
            "range": "± 11642.175249917676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212276,
            "unit": "ns",
            "range": "± 5802.897651505336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 183854.96666666667,
            "unit": "ns",
            "range": "± 8146.222888848688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12578861.133333333,
            "unit": "ns",
            "range": "± 148646.27713845985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10141759.714285715,
            "unit": "ns",
            "range": "± 77780.2222719974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22209.463917525773,
            "unit": "ns",
            "range": "± 2001.3415555876497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58565.032258064515,
            "unit": "ns",
            "range": "± 4530.597346285091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43932.44578313253,
            "unit": "ns",
            "range": "± 2358.4933866669016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98957.50602409638,
            "unit": "ns",
            "range": "± 9799.395575404431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6817.957894736842,
            "unit": "ns",
            "range": "± 681.8277207341148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22487,
            "unit": "ns",
            "range": "± 2098.6483998952704"
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
          "id": "c4a323ee3312cd72ca15a180c2127af50a436b28",
          "message": "Merge pull request #3027 from limebell/chore/add-missing\n\nAdd missing commit",
          "timestamp": "2023-03-30T15:24:01+09:00",
          "tree_id": "e9e4138353a2808dc8e02aab5bdc269078c1ba27",
          "url": "https://github.com/planetarium/libplanet/commit/c4a323ee3312cd72ca15a180c2127af50a436b28"
        },
        "date": 1680158277894,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3414583.294117647,
            "unit": "ns",
            "range": "± 104215.64651256587"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5527538.481481481,
            "unit": "ns",
            "range": "± 150826.48216241744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25208590.933333334,
            "unit": "ns",
            "range": "± 327457.23929926363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6813915.375,
            "unit": "ns",
            "range": "± 125145.32930150983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28616967.789473683,
            "unit": "ns",
            "range": "± 602574.274577885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7808109.6,
            "unit": "ns",
            "range": "± 84417.76913642902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21832169.266666666,
            "unit": "ns",
            "range": "± 250620.79878045313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54338043.53333333,
            "unit": "ns",
            "range": "± 662489.2045398462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106893987.66666667,
            "unit": "ns",
            "range": "± 694889.2102528356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214445727.35714287,
            "unit": "ns",
            "range": "± 2245647.638695405"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1449352.7127659575,
            "unit": "ns",
            "range": "± 108399.20090256413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2755258.224489796,
            "unit": "ns",
            "range": "± 108473.55341573381"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311431.659340659,
            "unit": "ns",
            "range": "± 128097.02281319766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5366979.333333333,
            "unit": "ns",
            "range": "± 72791.31509681501"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52382.663157894734,
            "unit": "ns",
            "range": "± 3131.016249985102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5943939.645647322,
            "unit": "ns",
            "range": "± 29322.54856514259"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822419.3373697917,
            "unit": "ns",
            "range": "± 6924.635038270356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358997.0396205357,
            "unit": "ns",
            "range": "± 2670.44779230794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2626222.250260417,
            "unit": "ns",
            "range": "± 5797.873475917365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831822.9041015625,
            "unit": "ns",
            "range": "± 1468.406037306049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753054.5700334822,
            "unit": "ns",
            "range": "± 720.0280153462037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209610.34375,
            "unit": "ns",
            "range": "± 9673.958808203468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212254.4814814815,
            "unit": "ns",
            "range": "± 5838.980583908398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192685.35227272726,
            "unit": "ns",
            "range": "± 10611.93940808721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12177376.8,
            "unit": "ns",
            "range": "± 137845.8119852965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10017940.866666667,
            "unit": "ns",
            "range": "± 158742.16442073908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24297.117021276597,
            "unit": "ns",
            "range": "± 2581.9510996109952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58502.78125,
            "unit": "ns",
            "range": "± 6121.669641876823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42696.854545454546,
            "unit": "ns",
            "range": "± 1807.6836151620262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97539.69230769231,
            "unit": "ns",
            "range": "± 5053.94695264996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5729.927835051546,
            "unit": "ns",
            "range": "± 645.5127362451025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20575.302083333332,
            "unit": "ns",
            "range": "± 1764.3441311286879"
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
          "id": "95624b9579b4463f914e45deb791153673adde9c",
          "message": "Merge pull request #3029 from riemannulus/change-blockchain-create-param\n\nGet new parameter for `BlockChain<T>.Create()`",
          "timestamp": "2023-03-31T01:38:22+09:00",
          "tree_id": "dc6eb13acadf577f4752fb875653e855588677b8",
          "url": "https://github.com/planetarium/libplanet/commit/95624b9579b4463f914e45deb791153673adde9c"
        },
        "date": 1680195292936,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3960702.9583333335,
            "unit": "ns",
            "range": "± 101853.09481135251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6321780,
            "unit": "ns",
            "range": "± 202510.19034831083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29633088.07142857,
            "unit": "ns",
            "range": "± 493152.6196343534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7604844.358974359,
            "unit": "ns",
            "range": "± 263805.7750203325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33766283.862068966,
            "unit": "ns",
            "range": "± 977491.5162724915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9874357.384615384,
            "unit": "ns",
            "range": "± 116569.19960945834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24848893.4,
            "unit": "ns",
            "range": "± 451234.6838869358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63902306.14035088,
            "unit": "ns",
            "range": "± 2732530.0046133357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115270108.12903225,
            "unit": "ns",
            "range": "± 3452091.64971732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242443333.2,
            "unit": "ns",
            "range": "± 7091301.6666204585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1586170.1414141415,
            "unit": "ns",
            "range": "± 123795.11408981538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3052324.861111111,
            "unit": "ns",
            "range": "± 150707.46528060376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2492458.204301075,
            "unit": "ns",
            "range": "± 145939.25528120904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6398158.315789473,
            "unit": "ns",
            "range": "± 366651.2178425583"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54654.84210526316,
            "unit": "ns",
            "range": "± 4517.056842387222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6658125.997532895,
            "unit": "ns",
            "range": "± 140387.25158694838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2052908.355189732,
            "unit": "ns",
            "range": "± 25861.6750901949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1527896.7136579242,
            "unit": "ns",
            "range": "± 43015.134928034546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995952.2861979166,
            "unit": "ns",
            "range": "± 48840.63638404499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934509.2902994792,
            "unit": "ns",
            "range": "± 17340.431948109246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 869049.3457682292,
            "unit": "ns",
            "range": "± 13526.513354743995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217130.33673469388,
            "unit": "ns",
            "range": "± 15261.936612831956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220734.85416666666,
            "unit": "ns",
            "range": "± 14572.949212752239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196300.193877551,
            "unit": "ns",
            "range": "± 14411.71570350751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14387941.7,
            "unit": "ns",
            "range": "± 321987.4024677134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10853084.964285715,
            "unit": "ns",
            "range": "± 580528.7385372695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22348.010869565216,
            "unit": "ns",
            "range": "± 2059.641100148037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60422,
            "unit": "ns",
            "range": "± 5933.298210600406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49486.41414141414,
            "unit": "ns",
            "range": "± 7190.471289668924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107230.1649484536,
            "unit": "ns",
            "range": "± 15650.862303640288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5899.021505376344,
            "unit": "ns",
            "range": "± 691.681316077536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22998.694736842106,
            "unit": "ns",
            "range": "± 1885.5084650514077"
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
          "id": "62e7fbfe2b13a00510b3110e03f04a8202361a10",
          "message": "Merge pull request #3030 from riemannulus/0.53-maintenance\n\n🚀  Release 0.53.2",
          "timestamp": "2023-03-31T01:40:27+09:00",
          "tree_id": "f8807c957a20862ddfa60f7d2222d184f8957be6",
          "url": "https://github.com/planetarium/libplanet/commit/62e7fbfe2b13a00510b3110e03f04a8202361a10"
        },
        "date": 1680195433585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4245600.6,
            "unit": "ns",
            "range": "± 68952.11112462662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6557015.905660378,
            "unit": "ns",
            "range": "± 273433.32631728204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30261338.8,
            "unit": "ns",
            "range": "± 334500.30395015015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8130710,
            "unit": "ns",
            "range": "± 100967.7932750505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34452324.93333333,
            "unit": "ns",
            "range": "± 556316.7946618014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10385272.36,
            "unit": "ns",
            "range": "± 277242.45757472527"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26429633.533333335,
            "unit": "ns",
            "range": "± 272097.8883088287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70627681.73333333,
            "unit": "ns",
            "range": "± 393878.8944928679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140618496,
            "unit": "ns",
            "range": "± 894110.3425996783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275452269.72307694,
            "unit": "ns",
            "range": "± 12832115.350869555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1832566.8958333333,
            "unit": "ns",
            "range": "± 199005.56161006255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220587.1379310344,
            "unit": "ns",
            "range": "± 92718.14402829537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2702716.891891892,
            "unit": "ns",
            "range": "± 132314.14050727885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6649142.109375,
            "unit": "ns",
            "range": "± 307247.8353479541"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59709.15053763441,
            "unit": "ns",
            "range": "± 3749.0994308379563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7082095.7421875,
            "unit": "ns",
            "range": "± 69367.36204242513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2194232.154427083,
            "unit": "ns",
            "range": "± 13483.145667363178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1625305.8837890625,
            "unit": "ns",
            "range": "± 3968.8135118929563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3107275.8627604167,
            "unit": "ns",
            "range": "± 13541.482403912803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 998344.7960286458,
            "unit": "ns",
            "range": "± 6252.3068456569445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891942.6141927083,
            "unit": "ns",
            "range": "± 5076.925157077775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240805.58163265305,
            "unit": "ns",
            "range": "± 9385.375340649087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239489.42307692306,
            "unit": "ns",
            "range": "± 9791.114299672992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213686.80392156861,
            "unit": "ns",
            "range": "± 8624.737030239492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14401870.764705881,
            "unit": "ns",
            "range": "± 288953.16676421143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11826368.578947369,
            "unit": "ns",
            "range": "± 256791.04176316757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25846.815217391304,
            "unit": "ns",
            "range": "± 2651.519273923097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66092.38043478261,
            "unit": "ns",
            "range": "± 5301.92169358316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51426.13636363636,
            "unit": "ns",
            "range": "± 3209.1484392793595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115364.32258064517,
            "unit": "ns",
            "range": "± 12663.302138343875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7518.073684210526,
            "unit": "ns",
            "range": "± 727.9674011012231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27622.916666666668,
            "unit": "ns",
            "range": "± 2358.545518196227"
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
          "id": "dafff218f9bcf080846193a34ce4cbc6e6853d91",
          "message": "Merge pull request #3031 from riemannulus/0.53-maintenance\n\n🔧  Prepare 0.53.3",
          "timestamp": "2023-03-31T01:47:46+09:00",
          "tree_id": "97db3519c67c25597ed97e92c6395da6bc61824a",
          "url": "https://github.com/planetarium/libplanet/commit/dafff218f9bcf080846193a34ce4cbc6e6853d91"
        },
        "date": 1680195937728,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3826617.840425532,
            "unit": "ns",
            "range": "± 274595.93740897166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5924320.852631579,
            "unit": "ns",
            "range": "± 347765.4700161483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30455481.614583332,
            "unit": "ns",
            "range": "± 1937746.6878943774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7489709.831578948,
            "unit": "ns",
            "range": "± 470198.25368675886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34561161.8607595,
            "unit": "ns",
            "range": "± 1783723.0235565903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9283081.825396825,
            "unit": "ns",
            "range": "± 423958.88562558556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23873626.15625,
            "unit": "ns",
            "range": "± 737230.6365857212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60242062.234375,
            "unit": "ns",
            "range": "± 2650571.7138561895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121164760,
            "unit": "ns",
            "range": "± 4162219.2375328112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242108228.24137932,
            "unit": "ns",
            "range": "± 7046743.457722157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638426.1595744682,
            "unit": "ns",
            "range": "± 161608.0214644757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3239935.505154639,
            "unit": "ns",
            "range": "± 251824.38390048084"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2640604.9591836734,
            "unit": "ns",
            "range": "± 209990.09401127545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6987123.091836735,
            "unit": "ns",
            "range": "± 566777.8479825528"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62254.40625,
            "unit": "ns",
            "range": "± 11802.859720894696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7274004.652832031,
            "unit": "ns",
            "range": "± 138628.3432340364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2254697.80859375,
            "unit": "ns",
            "range": "± 20797.162724929076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1632103.4989013672,
            "unit": "ns",
            "range": "± 27579.489191462784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3103833.4040527344,
            "unit": "ns",
            "range": "± 57811.035775371725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1021235.8608398438,
            "unit": "ns",
            "range": "± 19309.731476424746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963323.7265625,
            "unit": "ns",
            "range": "± 8659.955686059553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222214.67741935485,
            "unit": "ns",
            "range": "± 21607.73860728831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238253.64210526316,
            "unit": "ns",
            "range": "± 32006.904619763434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204147.79381443298,
            "unit": "ns",
            "range": "± 25013.792538208687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13922453.629629629,
            "unit": "ns",
            "range": "± 688472.9335257931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11100550.573770491,
            "unit": "ns",
            "range": "± 498100.54788173235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23463.770833333332,
            "unit": "ns",
            "range": "± 6996.780324931667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60508.21875,
            "unit": "ns",
            "range": "± 10306.289891643457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47509.95652173913,
            "unit": "ns",
            "range": "± 7623.984634846439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106068,
            "unit": "ns",
            "range": "± 20933.859477631293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9087.939393939394,
            "unit": "ns",
            "range": "± 5363.603728415541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21989.88775510204,
            "unit": "ns",
            "range": "± 7163.1426235279705"
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
          "id": "20bcd406a8df2ca72829e040ab95b7f7dedca155",
          "message": "Merge pull request #3046 from limebell/chore/fix-logging-53\n\nAdjust consensus loggings",
          "timestamp": "2023-04-03T18:08:38+09:00",
          "tree_id": "b4440e1d84be80722d407fd307bf349bb9acb539",
          "url": "https://github.com/planetarium/libplanet/commit/20bcd406a8df2ca72829e040ab95b7f7dedca155"
        },
        "date": 1680513689314,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310017.7674418604,
            "unit": "ns",
            "range": "± 121112.79568017756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5112562.857142857,
            "unit": "ns",
            "range": "± 54431.61067001296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23821027.133333333,
            "unit": "ns",
            "range": "± 215702.35174586123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6474924.875,
            "unit": "ns",
            "range": "± 228111.71124761945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27921897.266666666,
            "unit": "ns",
            "range": "± 410615.8876627482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8036619.533333333,
            "unit": "ns",
            "range": "± 46927.76653366422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19972914.07142857,
            "unit": "ns",
            "range": "± 49921.32797861403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50522830.428571425,
            "unit": "ns",
            "range": "± 224689.7229291007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101347425.6,
            "unit": "ns",
            "range": "± 291158.7561085631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204469268.33333334,
            "unit": "ns",
            "range": "± 658040.7114511193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1395839.2340425532,
            "unit": "ns",
            "range": "± 82393.01574879508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2517403.15625,
            "unit": "ns",
            "range": "± 75737.66009491064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2167225.3484848486,
            "unit": "ns",
            "range": "± 100277.58956071621"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5109251.884615385,
            "unit": "ns",
            "range": "± 134565.48544982163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46797.230769230766,
            "unit": "ns",
            "range": "± 2185.442001698618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5860498.936383928,
            "unit": "ns",
            "range": "± 6762.16678022361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871077.14140625,
            "unit": "ns",
            "range": "± 15723.42970597423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359858.2469308036,
            "unit": "ns",
            "range": "± 583.3218793098815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605141.2996651786,
            "unit": "ns",
            "range": "± 1330.2355061713738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806070.1976143973,
            "unit": "ns",
            "range": "± 606.9085793803314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734472.5536411831,
            "unit": "ns",
            "range": "± 359.05014219401573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198792.87179487178,
            "unit": "ns",
            "range": "± 10041.478494075778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203209.2741935484,
            "unit": "ns",
            "range": "± 9126.206475228546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 177089.3111111111,
            "unit": "ns",
            "range": "± 6560.659978657296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11537304.214285715,
            "unit": "ns",
            "range": "± 70446.58659108449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9243464.42857143,
            "unit": "ns",
            "range": "± 33653.211792577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20255.63157894737,
            "unit": "ns",
            "range": "± 1186.4590716832147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58359.767441860466,
            "unit": "ns",
            "range": "± 3032.0198186315597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41203.6,
            "unit": "ns",
            "range": "± 2092.9691117411894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96955.16326530612,
            "unit": "ns",
            "range": "± 13894.968935014875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4935.01030927835,
            "unit": "ns",
            "range": "± 570.4923767903867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19582.677419354837,
            "unit": "ns",
            "range": "± 1437.5708085493625"
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
          "id": "664f1072f0ee0d4578d59d072e63166c54f193a9",
          "message": "Merge pull request #3047 from limebell/release/0.53.3\n\n🚀 Release 0.53.3",
          "timestamp": "2023-04-03T18:51:07+09:00",
          "tree_id": "1e35e6c59fe736419a8076afcc627d67be75dd32",
          "url": "https://github.com/planetarium/libplanet/commit/664f1072f0ee0d4578d59d072e63166c54f193a9"
        },
        "date": 1680516344624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3723205.7333333334,
            "unit": "ns",
            "range": "± 61698.54395418636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5835641.285714285,
            "unit": "ns",
            "range": "± 78735.6755152019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26521419.2,
            "unit": "ns",
            "range": "± 412873.4090183783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7033205.625,
            "unit": "ns",
            "range": "± 182689.91828108334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29718706.866666667,
            "unit": "ns",
            "range": "± 502216.92692541686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8676666.333333334,
            "unit": "ns",
            "range": "± 134175.85460488926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22394115.866666667,
            "unit": "ns",
            "range": "± 241950.70541858807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56580069.571428575,
            "unit": "ns",
            "range": "± 332974.8281240847"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111867679.06666666,
            "unit": "ns",
            "range": "± 618794.0931415908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223127816,
            "unit": "ns",
            "range": "± 519541.00882935943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1503635.8333333333,
            "unit": "ns",
            "range": "± 79677.89641785416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2790825.28,
            "unit": "ns",
            "range": "± 73895.85207885486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433114.8518518517,
            "unit": "ns",
            "range": "± 123147.47075469223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5789100.0227272725,
            "unit": "ns",
            "range": "± 214527.4757085516"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53867.891304347824,
            "unit": "ns",
            "range": "± 3685.2813853428247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6240902.101041666,
            "unit": "ns",
            "range": "± 22115.681003797148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859842.6147135417,
            "unit": "ns",
            "range": "± 4131.687797581705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374380.0727864583,
            "unit": "ns",
            "range": "± 3041.830661306789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649204.4341145833,
            "unit": "ns",
            "range": "± 2818.2526104604067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830767.5592215402,
            "unit": "ns",
            "range": "± 487.8474180221105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763700.2283854167,
            "unit": "ns",
            "range": "± 396.8948336235019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218068.44642857142,
            "unit": "ns",
            "range": "± 9354.632273846797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223700.7931034483,
            "unit": "ns",
            "range": "± 9691.16666479655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201672.93,
            "unit": "ns",
            "range": "± 12756.341162878065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12610226.285714285,
            "unit": "ns",
            "range": "± 168209.04554174823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10161581.066666666,
            "unit": "ns",
            "range": "± 130690.07916739874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26270.474226804123,
            "unit": "ns",
            "range": "± 2939.9987141890024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64422.3052631579,
            "unit": "ns",
            "range": "± 7398.51998148693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48604.489583333336,
            "unit": "ns",
            "range": "± 3726.876372329406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125000.17525773196,
            "unit": "ns",
            "range": "± 17716.294863422056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8004.20618556701,
            "unit": "ns",
            "range": "± 1274.7944763940081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24674.145833333332,
            "unit": "ns",
            "range": "± 2525.3815719158024"
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
          "id": "b01fee5cd2b9e1d7d01dcb63b6e7abe82f162ddf",
          "message": "Merge pull request #3048 from limebell/release/prepare-0.53.4\n\n🔧 Prepare 0.53.4",
          "timestamp": "2023-04-03T19:07:46+09:00",
          "tree_id": "4792564cb097fb586ec466bed1d1f27d97fdb7bc",
          "url": "https://github.com/planetarium/libplanet/commit/b01fee5cd2b9e1d7d01dcb63b6e7abe82f162ddf"
        },
        "date": 1680517449470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4277037.1875,
            "unit": "ns",
            "range": "± 79068.01724778378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6792534.095238095,
            "unit": "ns",
            "range": "± 141808.29532114996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 30634021.133333333,
            "unit": "ns",
            "range": "± 376821.2899871137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8245166.846153846,
            "unit": "ns",
            "range": "± 124405.05786264356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34379808.06666667,
            "unit": "ns",
            "range": "± 621907.0147228565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10649223.416666666,
            "unit": "ns",
            "range": "± 268063.1747963636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25970522.416666668,
            "unit": "ns",
            "range": "± 134315.07335938836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66051760.733333334,
            "unit": "ns",
            "range": "± 337445.72033555404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139698109.25,
            "unit": "ns",
            "range": "± 495461.45711064606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261964821.86666667,
            "unit": "ns",
            "range": "± 423190.1939285298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1710927.9444444445,
            "unit": "ns",
            "range": "± 101587.90243881516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232458.714285714,
            "unit": "ns",
            "range": "± 105253.50562991502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2764153.7014925373,
            "unit": "ns",
            "range": "± 126878.1362259955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6312061.214285715,
            "unit": "ns",
            "range": "± 179163.70258372073"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64971.3052631579,
            "unit": "ns",
            "range": "± 4240.008099334106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7195038.388020833,
            "unit": "ns",
            "range": "± 44150.06080519054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2227931.290885417,
            "unit": "ns",
            "range": "± 2569.855530436579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1630992.7401041666,
            "unit": "ns",
            "range": "± 3931.202083772627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3200560.3481770833,
            "unit": "ns",
            "range": "± 2898.9733347088163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 995536.5658854167,
            "unit": "ns",
            "range": "± 505.16360965159845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 919469.83671875,
            "unit": "ns",
            "range": "± 451.4992228398864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252426.26315789475,
            "unit": "ns",
            "range": "± 12817.193401956525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251747.7142857143,
            "unit": "ns",
            "range": "± 9086.090748342107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225661.6,
            "unit": "ns",
            "range": "± 11416.590096540753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14839440.4,
            "unit": "ns",
            "range": "± 130974.89517940888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12143484.285714285,
            "unit": "ns",
            "range": "± 82462.66869450553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28009.747368421053,
            "unit": "ns",
            "range": "± 2486.166407057948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72212.72826086957,
            "unit": "ns",
            "range": "± 5071.230496587807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56232.211764705884,
            "unit": "ns",
            "range": "± 3036.506926019551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124437.28723404255,
            "unit": "ns",
            "range": "± 13231.767587788663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9366.4,
            "unit": "ns",
            "range": "± 884.5804198313102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26505.510638297874,
            "unit": "ns",
            "range": "± 1802.3722822912114"
          }
        ]
      }
    ]
  }
}