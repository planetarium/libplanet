window.BENCHMARK_DATA = {
  "lastUpdate": 1698984384809,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0d95a809c7915f9fa05077be7fae2cea78d63196",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:43:51+09:00",
          "tree_id": "089f1c7afd2aa770e71acd3f82f294b0ce086dfc",
          "url": "https://github.com/planetarium/libplanet/commit/0d95a809c7915f9fa05077be7fae2cea78d63196"
        },
        "date": 1698984074323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1555989.5833333333,
            "unit": "ns",
            "range": "± 119832.05131320178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051491.208791209,
            "unit": "ns",
            "range": "± 192730.73251349732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557151.515151515,
            "unit": "ns",
            "range": "± 118965.6915539088"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6427938.372093023,
            "unit": "ns",
            "range": "± 349638.8187388287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52440.298507462685,
            "unit": "ns",
            "range": "± 2507.6283435834735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8811927.777777778,
            "unit": "ns",
            "range": "± 188118.7916483673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23549909.523809522,
            "unit": "ns",
            "range": "± 548163.8595390632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60938266.666666664,
            "unit": "ns",
            "range": "± 1409984.0766240351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122077444.8275862,
            "unit": "ns",
            "range": "± 3441895.110419986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249426750,
            "unit": "ns",
            "range": "± 13217128.341303263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5904345.546875,
            "unit": "ns",
            "range": "± 78698.2249898923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939992.9268973214,
            "unit": "ns",
            "range": "± 26592.283596664616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468190.5552455357,
            "unit": "ns",
            "range": "± 23387.721386912446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3289731.4583333335,
            "unit": "ns",
            "range": "± 45896.516618445334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1081874.6791294643,
            "unit": "ns",
            "range": "± 15540.8174098249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965122.8376116072,
            "unit": "ns",
            "range": "± 15192.715430218246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3855462.5,
            "unit": "ns",
            "range": "± 201443.41629438882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983041.6666666665,
            "unit": "ns",
            "range": "± 145170.16256548997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4946294.117647059,
            "unit": "ns",
            "range": "± 179803.97371778492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4998543.243243244,
            "unit": "ns",
            "range": "± 168348.5398090992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8431933.333333334,
            "unit": "ns",
            "range": "± 493922.92422245786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300672.0930232558,
            "unit": "ns",
            "range": "± 10227.584679292224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293230.1886792453,
            "unit": "ns",
            "range": "± 11582.788705423438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255603.0303030303,
            "unit": "ns",
            "range": "± 7048.602913365387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4802776.923076923,
            "unit": "ns",
            "range": "± 76864.38440359481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4614542.857142857,
            "unit": "ns",
            "range": "± 109451.34339709391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19469.565217391304,
            "unit": "ns",
            "range": "± 1470.9449105136077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96135.10638297872,
            "unit": "ns",
            "range": "± 6619.532963527537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82468.42105263157,
            "unit": "ns",
            "range": "± 3561.759090610828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93601.42857142857,
            "unit": "ns",
            "range": "± 4035.0814102788113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5496.907216494846,
            "unit": "ns",
            "range": "± 850.4231309872827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19213.978494623654,
            "unit": "ns",
            "range": "± 1770.2610589751434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "ba4928bdc74dc0465935b91a4fdc438691e49dfc",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:50:31+09:00",
          "tree_id": "3c9a4548973c2ea8bb24d493a426ef5607ff29c1",
          "url": "https://github.com/planetarium/libplanet/commit/ba4928bdc74dc0465935b91a4fdc438691e49dfc"
        },
        "date": 1698984315100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1410118,
            "unit": "ns",
            "range": "± 135409.16995938978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2537338.3333333335,
            "unit": "ns",
            "range": "± 107171.63818414573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2181268.75,
            "unit": "ns",
            "range": "± 133686.74485527727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5151977.777777778,
            "unit": "ns",
            "range": "± 185926.8195345207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45435.057471264365,
            "unit": "ns",
            "range": "± 2502.9066235930754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7013164.285714285,
            "unit": "ns",
            "range": "± 51995.4969521083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18005723.333333332,
            "unit": "ns",
            "range": "± 90040.0503479794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45979853.333333336,
            "unit": "ns",
            "range": "± 295155.9584516698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91699386.66666667,
            "unit": "ns",
            "range": "± 617708.2839781559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185476800,
            "unit": "ns",
            "range": "± 1513999.3713798106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5005958.482142857,
            "unit": "ns",
            "range": "± 15998.25475962686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1543279.4020432692,
            "unit": "ns",
            "range": "± 1383.19288777635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158613.5044642857,
            "unit": "ns",
            "range": "± 1102.1697662289123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2609753.543526786,
            "unit": "ns",
            "range": "± 4122.846121527708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825439.35546875,
            "unit": "ns",
            "range": "± 1446.1327365904765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734912.060546875,
            "unit": "ns",
            "range": "± 1047.827277148579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3049855.172413793,
            "unit": "ns",
            "range": "± 89350.46800663625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3252714.814814815,
            "unit": "ns",
            "range": "± 84907.21951592766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4042903.3333333335,
            "unit": "ns",
            "range": "± 73173.16903528688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4010223.943661972,
            "unit": "ns",
            "range": "± 194457.77320891083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6547115.151515151,
            "unit": "ns",
            "range": "± 204340.66396769288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259682.08955223882,
            "unit": "ns",
            "range": "± 12310.649804048506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256821.31147540984,
            "unit": "ns",
            "range": "± 10478.376381133647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220172.91666666666,
            "unit": "ns",
            "range": "± 12621.481097229409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3954200,
            "unit": "ns",
            "range": "± 34996.20387576752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3539800,
            "unit": "ns",
            "range": "± 48456.88805526001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18288.541666666668,
            "unit": "ns",
            "range": "± 1509.19077596095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83208.1081081081,
            "unit": "ns",
            "range": "± 3950.056589043464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70620.25316455697,
            "unit": "ns",
            "range": "± 3666.3885586897545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88712.63157894737,
            "unit": "ns",
            "range": "± 11187.58090050638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4881.632653061224,
            "unit": "ns",
            "range": "± 757.1442465321958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18389.79591836735,
            "unit": "ns",
            "range": "± 1949.1732212866839"
          }
        ]
      }
    ]
  }
}