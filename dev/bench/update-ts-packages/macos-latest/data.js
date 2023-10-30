window.BENCHMARK_DATA = {
  "lastUpdate": 1698645034463,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "a381be89165f734ede0b4e80f1913b9bb346623f",
          "message": "WebCrypto Export",
          "timestamp": "2023-10-30T14:25:11+09:00",
          "tree_id": "f5448df3776d0350106e7cc9f5afdd6618627f63",
          "url": "https://github.com/planetarium/libplanet/commit/a381be89165f734ede0b4e80f1913b9bb346623f"
        },
        "date": 1698644971873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11918384.126582278,
            "unit": "ns",
            "range": "± 616968.9757712414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21593999.68831169,
            "unit": "ns",
            "range": "± 1101382.2641227425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54815391.584745765,
            "unit": "ns",
            "range": "± 2409889.70476295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109911586.64102565,
            "unit": "ns",
            "range": "± 3841571.7267430676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224555461.8181818,
            "unit": "ns",
            "range": "± 5243510.838542839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73068.30952380953,
            "unit": "ns",
            "range": "± 5171.603016325056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341838.3333333333,
            "unit": "ns",
            "range": "± 37942.03324275338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335532.1979166667,
            "unit": "ns",
            "range": "± 42702.29879553997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300685.3076923077,
            "unit": "ns",
            "range": "± 10355.69054383512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4645523.453488372,
            "unit": "ns",
            "range": "± 472700.04053439776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4102398.397959184,
            "unit": "ns",
            "range": "± 354161.4911070803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25209.534090909092,
            "unit": "ns",
            "range": "± 3770.2002262414244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110462.05494505494,
            "unit": "ns",
            "range": "± 11086.040876668718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112700.33333333333,
            "unit": "ns",
            "range": "± 8248.859548611139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110540.1888888889,
            "unit": "ns",
            "range": "± 10464.02407571669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.03125,
            "unit": "ns",
            "range": "± 1301.7644378476225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24046.077777777777,
            "unit": "ns",
            "range": "± 3775.2141608357515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500865.6030927836,
            "unit": "ns",
            "range": "± 145581.28033296415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2863185.410714286,
            "unit": "ns",
            "range": "± 121298.78077057596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2480770.4897959186,
            "unit": "ns",
            "range": "± 356020.7981308055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10675970.985714287,
            "unit": "ns",
            "range": "± 515516.3935058117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3475393.3854166665,
            "unit": "ns",
            "range": "± 331349.9750460823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3592626.515789474,
            "unit": "ns",
            "range": "± 304448.6418342168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631530.381443299,
            "unit": "ns",
            "range": "± 369946.56378721446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4576980.161616161,
            "unit": "ns",
            "range": "± 451983.05943756906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16140473.051020408,
            "unit": "ns",
            "range": "± 1900000.1195388855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6381779.009296875,
            "unit": "ns",
            "range": "± 444940.4478133262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032416.5164331896,
            "unit": "ns",
            "range": "± 59469.014898207395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183914.230078125,
            "unit": "ns",
            "range": "± 18737.826740336266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934700.3713378906,
            "unit": "ns",
            "range": "± 90285.42478288719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812708.3995442708,
            "unit": "ns",
            "range": "± 11051.392519162087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809441.494921875,
            "unit": "ns",
            "range": "± 10810.434750320068"
          }
        ]
      }
    ]
  }
}