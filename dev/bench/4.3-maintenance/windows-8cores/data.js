window.BENCHMARK_DATA = {
  "lastUpdate": 1712565968467,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8874c899afca340a0876b8418eea63d339bc9f90",
          "message": "Merge pull request #3732 from greymistcube/release/4.3.0\n\n🚀 Release 4.3.0",
          "timestamp": "2024-04-08T17:29:00+09:00",
          "tree_id": "2ae2825d3031445259bfbbfc1e75f3248632af1e",
          "url": "https://github.com/planetarium/libplanet/commit/8874c899afca340a0876b8418eea63d339bc9f90"
        },
        "date": 1712565789023,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1870912.121212121,
            "unit": "ns",
            "range": "± 245049.3441657553"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3160171.875,
            "unit": "ns",
            "range": "± 341728.03212130547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403590.909090909,
            "unit": "ns",
            "range": "± 300156.62921109906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8092060.606060606,
            "unit": "ns",
            "range": "± 180226.58818032706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 202776,
            "unit": "ns",
            "range": "± 20403.025721344828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5103592.857142857,
            "unit": "ns",
            "range": "± 23579.667391329214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13472780,
            "unit": "ns",
            "range": "± 173713.98989636468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33598766.666666664,
            "unit": "ns",
            "range": "± 362238.7051707886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66392963.333333336,
            "unit": "ns",
            "range": "± 997666.6104084117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133663926.66666667,
            "unit": "ns",
            "range": "± 2156792.565185186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3424095.2604166665,
            "unit": "ns",
            "range": "± 9056.853343822744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1078397.65625,
            "unit": "ns",
            "range": "± 4309.301903884334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738803.8643973215,
            "unit": "ns",
            "range": "± 1398.1109611479774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1918947.75390625,
            "unit": "ns",
            "range": "± 3501.336517652085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631570.703125,
            "unit": "ns",
            "range": "± 1440.2495749416164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580224.7526041666,
            "unit": "ns",
            "range": "± 1498.7324421935652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544110.638297872,
            "unit": "ns",
            "range": "± 93459.69657754259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2877089.6551724137,
            "unit": "ns",
            "range": "± 71719.91327791142"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4251892.307692308,
            "unit": "ns",
            "range": "± 48025.34854182843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3372367.9245283017,
            "unit": "ns",
            "range": "± 135808.88547681898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8682847.05882353,
            "unit": "ns",
            "range": "± 269000.2571084657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184115.7142857143,
            "unit": "ns",
            "range": "± 8343.888429268622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179158.24175824175,
            "unit": "ns",
            "range": "± 10885.516023434951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146484.50704225354,
            "unit": "ns",
            "range": "± 6852.604257555225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2858085.714285714,
            "unit": "ns",
            "range": "± 35021.11137240282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485950,
            "unit": "ns",
            "range": "± 45404.610632254815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11678.494623655914,
            "unit": "ns",
            "range": "± 1436.5454836520896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54564.83516483517,
            "unit": "ns",
            "range": "± 4233.973012730179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45586.153846153844,
            "unit": "ns",
            "range": "± 2136.2113749490095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66285.41666666667,
            "unit": "ns",
            "range": "± 14216.93563226372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2672.7272727272725,
            "unit": "ns",
            "range": "± 664.3729868659472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11247.368421052632,
            "unit": "ns",
            "range": "± 1689.0033637686895"
          }
        ]
      }
    ]
  }
}