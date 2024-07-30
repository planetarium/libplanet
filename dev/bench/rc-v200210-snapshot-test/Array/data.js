window.BENCHMARK_DATA = {
  "lastUpdate": 1722369288590,
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
        "date": 1722369275834,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10735885,
            "unit": "ns",
            "range": "± 86536.65318548815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26523416.35714286,
            "unit": "ns",
            "range": "± 147241.97496042782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67298717.3076923,
            "unit": "ns",
            "range": "± 73691.34340430204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136333178.2142857,
            "unit": "ns",
            "range": "± 159120.3578017299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272851924.85714287,
            "unit": "ns",
            "range": "± 468388.39016434556"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14002,
            "unit": "ns",
            "range": "± 355.09447609970186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110657.39361702128,
            "unit": "ns",
            "range": "± 4156.448605501548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105047.06923076924,
            "unit": "ns",
            "range": "± 4700.622196080904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91769.15957446808,
            "unit": "ns",
            "range": "± 3515.7812371758964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3051018.1298701297,
            "unit": "ns",
            "range": "± 156114.69056664637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2758205.47,
            "unit": "ns",
            "range": "± 174831.8383225479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4825.456989247312,
            "unit": "ns",
            "range": "± 405.70022435661866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27373.287234042553,
            "unit": "ns",
            "range": "± 2685.515403256068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22302.78431372549,
            "unit": "ns",
            "range": "± 899.9708287211422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30124.5,
            "unit": "ns",
            "range": "± 5655.097888545543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1233.6458333333333,
            "unit": "ns",
            "range": "± 195.43021256309405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4949.595505617977,
            "unit": "ns",
            "range": "± 513.0596438635465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 675231.5256410256,
            "unit": "ns",
            "range": "± 33092.89746048996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1262238.1153846155,
            "unit": "ns",
            "range": "± 39640.32366404547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1075414.620879121,
            "unit": "ns",
            "range": "± 60013.90122904584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9454556.66,
            "unit": "ns",
            "range": "± 1220646.9115338586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2209597.224489796,
            "unit": "ns",
            "range": "± 88141.03947137443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282419.4545454546,
            "unit": "ns",
            "range": "± 70906.66602878874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2585784.0789473685,
            "unit": "ns",
            "range": "± 54900.87814852812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2318252.846153846,
            "unit": "ns",
            "range": "± 36131.526637287636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3007988.569620253,
            "unit": "ns",
            "range": "± 155683.89147578232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3022606.5310444077,
            "unit": "ns",
            "range": "± 66535.97846404059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 923338.9537527902,
            "unit": "ns",
            "range": "± 3606.3915956881297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612815.6760416667,
            "unit": "ns",
            "range": "± 5037.7472922886245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1640332.898828125,
            "unit": "ns",
            "range": "± 12990.32526829027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470430.5247721354,
            "unit": "ns",
            "range": "± 858.0664268531426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416924.78564453125,
            "unit": "ns",
            "range": "± 438.25733219323337"
          }
        ]
      }
    ]
  }
}