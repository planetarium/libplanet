window.BENCHMARK_DATA = {
  "lastUpdate": 1722325274056,
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
          "id": "448e191e2227d757fc30442fccab357deaf9baed",
          "message": "use cache",
          "timestamp": "2024-07-30T16:30:19+09:00",
          "tree_id": "e9d22d18ab790b84ed12aa60ea24693b08147288",
          "url": "https://github.com/planetarium/libplanet/commit/448e191e2227d757fc30442fccab357deaf9baed"
        },
        "date": 1722325202613,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 994214,
            "unit": "ns",
            "range": "± 108759.59776061377"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1734418.9189189188,
            "unit": "ns",
            "range": "± 58358.24152897647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1591865.934065934,
            "unit": "ns",
            "range": "± 110289.4899997076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6925068,
            "unit": "ns",
            "range": "± 170637.11915445986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34264,
            "unit": "ns",
            "range": "± 4862.441503374346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9775585.714285715,
            "unit": "ns",
            "range": "± 116604.53782661395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24109442.85714286,
            "unit": "ns",
            "range": "± 202291.89007770133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59100884.615384616,
            "unit": "ns",
            "range": "± 292046.5112676228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120021864.28571428,
            "unit": "ns",
            "range": "± 659267.2232890823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249025250,
            "unit": "ns",
            "range": "± 2282903.5448305737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3349908.761160714,
            "unit": "ns",
            "range": "± 8681.633792307011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067643.9322916667,
            "unit": "ns",
            "range": "± 3361.169951281045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746420.8528645834,
            "unit": "ns",
            "range": "± 1404.8977873094889"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929318.90625,
            "unit": "ns",
            "range": "± 2540.376552136751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617791.484375,
            "unit": "ns",
            "range": "± 769.033794942449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566523.7044270834,
            "unit": "ns",
            "range": "± 605.0337426760447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198534.375,
            "unit": "ns",
            "range": "± 68430.75666439244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2250384.210526316,
            "unit": "ns",
            "range": "± 70736.84588371255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2723971.4285714286,
            "unit": "ns",
            "range": "± 61825.683521147934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2258440,
            "unit": "ns",
            "range": "± 50985.79162245518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3020992.8571428573,
            "unit": "ns",
            "range": "± 49487.39488745849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172090.47619047618,
            "unit": "ns",
            "range": "± 7670.822689733298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174068.42105263157,
            "unit": "ns",
            "range": "± 7134.177244953059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144255.55555555556,
            "unit": "ns",
            "range": "± 2962.952069696751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2852673.3333333335,
            "unit": "ns",
            "range": "± 39729.0010421798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2394773.3333333335,
            "unit": "ns",
            "range": "± 34743.99160115246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11496.774193548386,
            "unit": "ns",
            "range": "± 1108.9999032523606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59623,
            "unit": "ns",
            "range": "± 7313.027741467603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46724.32432432433,
            "unit": "ns",
            "range": "± 1569.0417113295273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61410.52631578947,
            "unit": "ns",
            "range": "± 11721.406800363995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2941.935483870968,
            "unit": "ns",
            "range": "± 504.39860459181034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12160.21505376344,
            "unit": "ns",
            "range": "± 1609.5597416513726"
          }
        ]
      }
    ]
  }
}