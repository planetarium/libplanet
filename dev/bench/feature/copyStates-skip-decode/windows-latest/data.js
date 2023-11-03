window.BENCHMARK_DATA = {
  "lastUpdate": 1698984160482,
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
      }
    ]
  }
}