window.BENCHMARK_DATA = {
  "lastUpdate": 1697627943370,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "582769981f960a65c5fc10d5a8a917e7fd8b9d4a",
          "message": "test: Update tests\n\nCo-authored-by: Chanhyuck Ko <limeelbee@gmail.com>\nCo-authored-by: Lee, Suho <iam@suho.io>\n(cherry picked from commit 9ab368f1b8a524c29bf8e6d03020c4a2efde28ea)",
          "timestamp": "2023-10-18T19:04:17+09:00",
          "tree_id": "60b507f13188cb08f123b870814e041ea22f4f73",
          "url": "https://github.com/planetarium/libplanet/commit/582769981f960a65c5fc10d5a8a917e7fd8b9d4a"
        },
        "date": 1697627889058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7512785.8125,
            "unit": "ns",
            "range": "± 114175.93376435552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18366648.576923076,
            "unit": "ns",
            "range": "± 252802.27856154751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46250972,
            "unit": "ns",
            "range": "± 547839.4885261698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93665126.45833333,
            "unit": "ns",
            "range": "± 2404113.4438969656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190125649.2222222,
            "unit": "ns",
            "range": "± 3921061.5535827386"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38515.717391304344,
            "unit": "ns",
            "range": "± 7690.774627422396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218227.4516129032,
            "unit": "ns",
            "range": "± 14892.377351690131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215083.67708333334,
            "unit": "ns",
            "range": "± 21012.99311779051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195484.94791666666,
            "unit": "ns",
            "range": "± 18177.308684105545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3596679.3333333335,
            "unit": "ns",
            "range": "± 66049.43875685273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3418024.625,
            "unit": "ns",
            "range": "± 64242.44043192942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12851.934782608696,
            "unit": "ns",
            "range": "± 1544.3811186543287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57933.27173913043,
            "unit": "ns",
            "range": "± 4166.241052527323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52844.65517241379,
            "unit": "ns",
            "range": "± 4629.178574548636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55776.50537634409,
            "unit": "ns",
            "range": "± 8478.465938230314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3098.489247311828,
            "unit": "ns",
            "range": "± 366.4345690043228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11825.033333333333,
            "unit": "ns",
            "range": "± 1237.894782789889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1208598.969387755,
            "unit": "ns",
            "range": "± 113080.16936427297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2372100.1296296297,
            "unit": "ns",
            "range": "± 98379.57672028338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1858322.3789473684,
            "unit": "ns",
            "range": "± 138143.06678902183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9662310.90425532,
            "unit": "ns",
            "range": "± 2318967.4403789886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954552.0888888887,
            "unit": "ns",
            "range": "± 112151.60451671541"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2981238.8625,
            "unit": "ns",
            "range": "± 144363.0517939384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3536238.727272727,
            "unit": "ns",
            "range": "± 129037.04145499763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3584929.4285714286,
            "unit": "ns",
            "range": "± 183120.44230379522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11339555.564516129,
            "unit": "ns",
            "range": "± 1202981.2458279368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4149712.283653846,
            "unit": "ns",
            "range": "± 28355.290145444364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1308921.9521484375,
            "unit": "ns",
            "range": "± 25184.59870567984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 838362.3776692708,
            "unit": "ns",
            "range": "± 11858.706130427936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903228.900669643,
            "unit": "ns",
            "range": "± 21800.8252547513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612198.6787760417,
            "unit": "ns",
            "range": "± 8252.776999461219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565380.0684291294,
            "unit": "ns",
            "range": "± 8174.341878615633"
          }
        ]
      }
    ]
  }
}