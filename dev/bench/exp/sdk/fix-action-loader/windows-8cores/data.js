window.BENCHMARK_DATA = {
  "lastUpdate": 1726041336984,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ad7718bb1884c8694965c8ce9ec0010febddc5e3",
          "message": "fix: If the locations are the same, the assembly will not load.",
          "timestamp": "2024-09-11T16:40:49+09:00",
          "tree_id": "3339c5fc395d7e1b25719bc7dadf515ff462fafb",
          "url": "https://github.com/planetarium/libplanet/commit/ad7718bb1884c8694965c8ce9ec0010febddc5e3"
        },
        "date": 1726041144870,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961713.6363636364,
            "unit": "ns",
            "range": "± 59915.94722152406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1769637.5,
            "unit": "ns",
            "range": "± 75102.69227107399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1555701.111111111,
            "unit": "ns",
            "range": "± 92748.32503341702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811146.153846154,
            "unit": "ns",
            "range": "± 164276.29465207504"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35119.19191919192,
            "unit": "ns",
            "range": "± 5170.2973657756165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9644864.285714285,
            "unit": "ns",
            "range": "± 65534.707271360094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23214500,
            "unit": "ns",
            "range": "± 284993.29816681653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59002028.571428575,
            "unit": "ns",
            "range": "± 477383.1511134772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116128333.33333333,
            "unit": "ns",
            "range": "± 616206.3901308515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232595966.66666666,
            "unit": "ns",
            "range": "± 1124933.7057715678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3342332.0833333335,
            "unit": "ns",
            "range": "± 7340.461055678205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064455.4129464286,
            "unit": "ns",
            "range": "± 2149.8029129627776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742393.4870793269,
            "unit": "ns",
            "range": "± 2213.9079703417765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928246.010044643,
            "unit": "ns",
            "range": "± 3330.165352027617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620645.8333333334,
            "unit": "ns",
            "range": "± 2037.1811725688528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569103.4109933035,
            "unit": "ns",
            "range": "± 2232.851718436156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2084300,
            "unit": "ns",
            "range": "± 65824.3116181248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2302325,
            "unit": "ns",
            "range": "± 44829.89330049017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2664462.5,
            "unit": "ns",
            "range": "± 50158.25455495835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242095,
            "unit": "ns",
            "range": "± 50111.2496561926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2943434,
            "unit": "ns",
            "range": "± 76332.22168040615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174926.59574468085,
            "unit": "ns",
            "range": "± 9688.705047153328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166008.4745762712,
            "unit": "ns",
            "range": "± 6488.671511009844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142004.7619047619,
            "unit": "ns",
            "range": "± 3228.2311240795925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2731640,
            "unit": "ns",
            "range": "± 34794.433052265296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2511835.714285714,
            "unit": "ns",
            "range": "± 43031.555633276614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10771.875,
            "unit": "ns",
            "range": "± 1744.5676964131892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53600,
            "unit": "ns",
            "range": "± 5672.778566687287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44823.333333333336,
            "unit": "ns",
            "range": "± 1714.6958383870353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53378.94736842105,
            "unit": "ns",
            "range": "± 9974.071649189107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2654.5454545454545,
            "unit": "ns",
            "range": "± 633.949835019274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10127.956989247312,
            "unit": "ns",
            "range": "± 1055.149442475356"
          }
        ]
      }
    ]
  }
}