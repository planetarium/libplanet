window.BENCHMARK_DATA = {
  "lastUpdate": 1680255187342,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jc@planetariumhq.com",
            "name": "jckim.xyz",
            "username": "jckdotim"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32e4e89cde330e21c89b2a64116d5754661f8125",
          "message": "fix: errata of planet cli",
          "timestamp": "2023-03-31T18:13:36+09:00",
          "tree_id": "a02e4b3f84fd0e863ac5acdf2b8c9cc5fe5709ed",
          "url": "https://github.com/planetarium/libplanet/commit/32e4e89cde330e21c89b2a64116d5754661f8125"
        },
        "date": 1680255151100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10388355.236263737,
            "unit": "ns",
            "range": "± 1885317.2299887056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22299844.568965517,
            "unit": "ns",
            "range": "± 977047.5578108267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56149579.96969697,
            "unit": "ns",
            "range": "± 1773619.0960267072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110003832.67142858,
            "unit": "ns",
            "range": "± 3532361.7780224895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228509921.97368422,
            "unit": "ns",
            "range": "± 11351887.228197424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77509.51807228915,
            "unit": "ns",
            "range": "± 4142.786429332274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429400.3988764045,
            "unit": "ns",
            "range": "± 33205.549776781205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 381931.7272727273,
            "unit": "ns",
            "range": "± 50939.93821682512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 350609.2988505747,
            "unit": "ns",
            "range": "± 33773.02297283445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6046596.541666667,
            "unit": "ns",
            "range": "± 347276.5798625497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4928695.010416667,
            "unit": "ns",
            "range": "± 512848.53381503536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27559.397590361445,
            "unit": "ns",
            "range": "± 2743.1945101435895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128202.5,
            "unit": "ns",
            "range": "± 11438.18958240669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132408.76404494382,
            "unit": "ns",
            "range": "± 14752.654783448355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 286059.43157894735,
            "unit": "ns",
            "range": "± 30975.403112673277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10408.655555555555,
            "unit": "ns",
            "range": "± 913.0153297642485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27043.303797468354,
            "unit": "ns",
            "range": "± 2754.525508743516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1534893.8461538462,
            "unit": "ns",
            "range": "± 94425.20019452472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042711.8260869565,
            "unit": "ns",
            "range": "± 116216.697407913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643032.067010309,
            "unit": "ns",
            "range": "± 305621.2106296067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6891460.05,
            "unit": "ns",
            "range": "± 238779.5574009903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3521617.3229166665,
            "unit": "ns",
            "range": "± 246635.93707297207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3781459.404494382,
            "unit": "ns",
            "range": "± 332101.32223816053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4879643.135416667,
            "unit": "ns",
            "range": "± 334206.96237980947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5094977.75257732,
            "unit": "ns",
            "range": "± 382286.9545664735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9890680.897959184,
            "unit": "ns",
            "range": "± 902236.4892997785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7966621.8628125,
            "unit": "ns",
            "range": "± 205402.49519991706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2286707.3654119316,
            "unit": "ns",
            "range": "± 56073.94488208771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364738.973828125,
            "unit": "ns",
            "range": "± 40455.86780652915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2937955.943828125,
            "unit": "ns",
            "range": "± 70679.42471246925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853088.8773632812,
            "unit": "ns",
            "range": "± 33876.662769721326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745728.4506835938,
            "unit": "ns",
            "range": "± 17065.735799697806"
          }
        ]
      }
    ]
  }
}