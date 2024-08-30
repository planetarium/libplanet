window.BENCHMARK_DATA = {
  "lastUpdate": 1724994285289,
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
          "id": "e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765",
          "message": "refactor: Change C to c in BlockChain in BlockChainGrpcServiceV1",
          "timestamp": "2024-08-30T13:42:40+09:00",
          "tree_id": "6f53356f3fc4dd0ec5911b2d8387c704cd4c58c1",
          "url": "https://github.com/planetarium/libplanet/commit/e403d6478a2bd5d7c8ee471b4de4a3f4e1a83765"
        },
        "date": 1724993969969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000349,
            "unit": "ns",
            "range": "± 99134.66659147052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760863.6363636365,
            "unit": "ns",
            "range": "± 61944.45407879956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1532996.6666666667,
            "unit": "ns",
            "range": "± 103409.20291343034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6863767.741935484,
            "unit": "ns",
            "range": "± 206188.33201242136"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38330.61224489796,
            "unit": "ns",
            "range": "± 4262.819553901721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10117920,
            "unit": "ns",
            "range": "± 96035.08436280685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25872873.333333332,
            "unit": "ns",
            "range": "± 244134.84408260547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61458593.333333336,
            "unit": "ns",
            "range": "± 519850.954555612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128557633.33333333,
            "unit": "ns",
            "range": "± 1144588.9840379178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242108957.14285713,
            "unit": "ns",
            "range": "± 1548890.4339828289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3354468.5546875,
            "unit": "ns",
            "range": "± 6235.55081699815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079408.623798077,
            "unit": "ns",
            "range": "± 1357.4657208852686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 734201.4973958334,
            "unit": "ns",
            "range": "± 2648.496821923757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960393.8541666667,
            "unit": "ns",
            "range": "± 3365.4128760019485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616624.6809895834,
            "unit": "ns",
            "range": "± 1844.4409597308854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555667.7408854166,
            "unit": "ns",
            "range": "± 1842.625963810484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121623.6842105263,
            "unit": "ns",
            "range": "± 71540.10190553505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2249975,
            "unit": "ns",
            "range": "± 49754.152167379325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2667592.592592593,
            "unit": "ns",
            "range": "± 68904.45964090101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2287141.891891892,
            "unit": "ns",
            "range": "± 77566.43524667661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2922333.3333333335,
            "unit": "ns",
            "range": "± 60722.06692599245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179312.28070175438,
            "unit": "ns",
            "range": "± 7731.200012552074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 167135.9375,
            "unit": "ns",
            "range": "± 7077.627779147384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147646.15384615384,
            "unit": "ns",
            "range": "± 3984.191839681495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2780135.714285714,
            "unit": "ns",
            "range": "± 49234.23772980714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2410371.4285714286,
            "unit": "ns",
            "range": "± 23782.42494498272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10638.297872340425,
            "unit": "ns",
            "range": "± 1484.9138408066244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52045.16129032258,
            "unit": "ns",
            "range": "± 3598.2337493563437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44373.07692307692,
            "unit": "ns",
            "range": "± 598.8236331256003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52907.142857142855,
            "unit": "ns",
            "range": "± 11898.6896099104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2469.230769230769,
            "unit": "ns",
            "range": "± 396.2861782130876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9710.63829787234,
            "unit": "ns",
            "range": "± 1243.51808294191"
          }
        ]
      }
    ]
  }
}