window.BENCHMARK_DATA = {
  "lastUpdate": 1678704850941,
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
        "date": 1678704802380,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 11289537.077319589,
            "unit": "ns",
            "range": "± 1388090.944402035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 30815028.99484536,
            "unit": "ns",
            "range": "± 4318976.438494031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 74994926.92929293,
            "unit": "ns",
            "range": "± 6651439.94228017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 153312019.87878788,
            "unit": "ns",
            "range": "± 12830295.583943188"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 282368525.53608245,
            "unit": "ns",
            "range": "± 25338798.311995715"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 92621.92391304347,
            "unit": "ns",
            "range": "± 16685.384005522006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227159.94444444444,
            "unit": "ns",
            "range": "± 12294.573612980648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228788.37209302327,
            "unit": "ns",
            "range": "± 13135.151954423682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221116.58695652173,
            "unit": "ns",
            "range": "± 8489.480062147733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15644238.689473685,
            "unit": "ns",
            "range": "± 2329778.412263763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11186321.680851065,
            "unit": "ns",
            "range": "± 1073851.7935295384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27327.054347826088,
            "unit": "ns",
            "range": "± 3892.6111391366007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69629.1649484536,
            "unit": "ns",
            "range": "± 10741.37379159863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64941.56976744186,
            "unit": "ns",
            "range": "± 3869.28867924203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134786.8440860215,
            "unit": "ns",
            "range": "± 15684.574407258862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8961.675257731958,
            "unit": "ns",
            "range": "± 1195.5951186395741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24636.793478260868,
            "unit": "ns",
            "range": "± 3636.0891970890602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1713205.793478261,
            "unit": "ns",
            "range": "± 239827.37452196682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054437.8913043477,
            "unit": "ns",
            "range": "± 345959.0513001251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2696536.829787234,
            "unit": "ns",
            "range": "± 375970.0041392111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6791663.133333334,
            "unit": "ns",
            "range": "± 639850.91205069"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4264677.989690722,
            "unit": "ns",
            "range": "± 770976.6611415475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6761544.908163265,
            "unit": "ns",
            "range": "± 1353287.3039575513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 36293167.85714286,
            "unit": "ns",
            "range": "± 3881342.2146013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8580764.387755102,
            "unit": "ns",
            "range": "± 1532774.6104056924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 39939316.48,
            "unit": "ns",
            "range": "± 6994702.744084402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7406262.1421875,
            "unit": "ns",
            "range": "± 138456.96176927173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2105605.218784265,
            "unit": "ns",
            "range": "± 91254.42039916826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352354.6126302083,
            "unit": "ns",
            "range": "± 32072.19461045729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2818857.5212053573,
            "unit": "ns",
            "range": "± 179369.542115361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920121.8536879596,
            "unit": "ns",
            "range": "± 18202.445386894906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757715.8181966146,
            "unit": "ns",
            "range": "± 11184.754731059622"
          }
        ]
      }
    ]
  }
}