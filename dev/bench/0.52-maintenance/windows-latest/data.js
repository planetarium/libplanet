window.BENCHMARK_DATA = {
  "lastUpdate": 1678704390297,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "colibrishin@gmail.com",
            "name": "Colibri Shin",
            "username": "colibrishin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea547870cfd181eee84fb1f822cb8493dbb2587",
          "message": "Merge pull request #2919 from colibrishin/release/0.52\n\n🚀 Release 0.52.0",
          "timestamp": "2023-03-13T19:19:01+09:00",
          "tree_id": "e0cd58434e1e45efbb58c9cb5a1763293e84f4a6",
          "url": "https://github.com/planetarium/libplanet/commit/aea547870cfd181eee84fb1f822cb8493dbb2587"
        },
        "date": 1678704337432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278923.2323232323,
            "unit": "ns",
            "range": "± 77050.93309938752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2306332,
            "unit": "ns",
            "range": "± 92685.28809132239"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984220.7792207792,
            "unit": "ns",
            "range": "± 100864.6661538727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696264.864864865,
            "unit": "ns",
            "range": "± 156737.4436158483"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43248.57142857143,
            "unit": "ns",
            "range": "± 2102.2240022636934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6919666.666666667,
            "unit": "ns",
            "range": "± 4426.435736948333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17757840,
            "unit": "ns",
            "range": "± 173495.00116306357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45397713.333333336,
            "unit": "ns",
            "range": "± 394182.8924074035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89531478.57142857,
            "unit": "ns",
            "range": "± 984383.4971724661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179677126.66666666,
            "unit": "ns",
            "range": "± 1696370.6150260353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4801308.802083333,
            "unit": "ns",
            "range": "± 9800.778823319082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521382.0703125,
            "unit": "ns",
            "range": "± 2385.8214649439287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1160447.4348958333,
            "unit": "ns",
            "range": "± 1899.627998858195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2518207.265625,
            "unit": "ns",
            "range": "± 5309.084892741203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853547.20703125,
            "unit": "ns",
            "range": "± 1844.8780991605022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 721658.7890625,
            "unit": "ns",
            "range": "± 664.5018426680355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2955193.3333333335,
            "unit": "ns",
            "range": "± 37507.87472873752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4632155,
            "unit": "ns",
            "range": "± 106086.74938340245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21084260,
            "unit": "ns",
            "range": "± 338214.8087490299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5497786.666666667,
            "unit": "ns",
            "range": "± 102078.84114508652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24784081.25,
            "unit": "ns",
            "range": "± 682150.5573280016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174185.7142857143,
            "unit": "ns",
            "range": "± 3003.807108130804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171574.07407407407,
            "unit": "ns",
            "range": "± 7118.755063547759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145084.0909090909,
            "unit": "ns",
            "range": "± 5447.292614570347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10105390,
            "unit": "ns",
            "range": "± 57471.00884048284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8144466.666666667,
            "unit": "ns",
            "range": "± 64823.845553784864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16600,
            "unit": "ns",
            "range": "± 1944.9881036665122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46224.7191011236,
            "unit": "ns",
            "range": "± 2824.7397667297846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33879.31034482759,
            "unit": "ns",
            "range": "± 974.8184117878525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82181.81818181818,
            "unit": "ns",
            "range": "± 14825.4356967766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4178.125,
            "unit": "ns",
            "range": "± 594.9264660443339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15676.288659793814,
            "unit": "ns",
            "range": "± 1464.4234641913613"
          }
        ]
      }
    ]
  }
}