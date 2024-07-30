window.BENCHMARK_DATA = {
  "lastUpdate": 1722369397111,
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
          "id": "bbe7ba922c35c2106c700ef0771d4d0e3ee04a4a",
          "message": "set targetframework to resolve docker build fail",
          "timestamp": "2024-07-31T04:46:25+09:00",
          "tree_id": "ec2801b53b49659a5aca8fa237768c943d6539f5",
          "url": "https://github.com/planetarium/libplanet/commit/bbe7ba922c35c2106c700ef0771d4d0e3ee04a4a"
        },
        "date": 1722369330779,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 974349,
            "unit": "ns",
            "range": "± 85050.70798225509"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1733900,
            "unit": "ns",
            "range": "± 70622.0815326198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1498604.5977011495,
            "unit": "ns",
            "range": "± 94771.25816387677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6736907.142857143,
            "unit": "ns",
            "range": "± 155575.133518542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34162,
            "unit": "ns",
            "range": "± 5314.736136631827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9823726.666666666,
            "unit": "ns",
            "range": "± 183731.52566668988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23497307.14285714,
            "unit": "ns",
            "range": "± 140313.44287967298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58878628.571428575,
            "unit": "ns",
            "range": "± 205060.45048143328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117267880,
            "unit": "ns",
            "range": "± 642447.216508874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235989520,
            "unit": "ns",
            "range": "± 1049122.5437070187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3239957.8385416665,
            "unit": "ns",
            "range": "± 3776.121591031206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062943.0138221155,
            "unit": "ns",
            "range": "± 1305.070389238623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730567.9547991072,
            "unit": "ns",
            "range": "± 1208.7810345153896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1959969.0885416667,
            "unit": "ns",
            "range": "± 3565.015613845531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605635.7947716346,
            "unit": "ns",
            "range": "± 1161.2277131499025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578279.8307291666,
            "unit": "ns",
            "range": "± 1298.9316741891516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2186478.5714285714,
            "unit": "ns",
            "range": "± 22569.011381211956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2280490,
            "unit": "ns",
            "range": "± 28928.2066996408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2668900,
            "unit": "ns",
            "range": "± 49615.061077401544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2260545.4545454546,
            "unit": "ns",
            "range": "± 54735.85685795031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2906171.4285714286,
            "unit": "ns",
            "range": "± 46215.33925459795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171683.87096774194,
            "unit": "ns",
            "range": "± 7749.208178447254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165667.85714285713,
            "unit": "ns",
            "range": "± 7042.961854810212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146135.48387096773,
            "unit": "ns",
            "range": "± 4420.674789146771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2717853.3333333335,
            "unit": "ns",
            "range": "± 44015.4983527177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2479246.6666666665,
            "unit": "ns",
            "range": "± 32617.10477356204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9781.632653061224,
            "unit": "ns",
            "range": "± 1234.5830247935346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50938.94736842105,
            "unit": "ns",
            "range": "± 3915.9601071806437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44400,
            "unit": "ns",
            "range": "± 1368.7762370441615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49540.425531914894,
            "unit": "ns",
            "range": "± 8987.889930810978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2141.4893617021276,
            "unit": "ns",
            "range": "± 342.47975357098085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9762.105263157895,
            "unit": "ns",
            "range": "± 1104.553336832665"
          }
        ]
      }
    ]
  }
}