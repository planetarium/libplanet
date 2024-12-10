window.BENCHMARK_DATA = {
  "lastUpdate": 1733820644211,
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
          "id": "a73925dcf3caaf85703b7ea02ac3f2d1166e45e7",
          "message": "wip",
          "timestamp": "2024-12-10T17:41:03+09:00",
          "tree_id": "363a86ec81a63578daa0784fd34f35c32609b0f2",
          "url": "https://github.com/planetarium/libplanet/commit/a73925dcf3caaf85703b7ea02ac3f2d1166e45e7"
        },
        "date": 1733820617266,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10850289.066666666,
            "unit": "ns",
            "range": "± 99495.71037664077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29205632.866666667,
            "unit": "ns",
            "range": "± 242949.26687269702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71923727.4,
            "unit": "ns",
            "range": "± 277264.0599358566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144385322.06666666,
            "unit": "ns",
            "range": "± 886400.2214768503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 300203723.64285713,
            "unit": "ns",
            "range": "± 1227383.8703535164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113428,
            "unit": "ns",
            "range": "± 8856.96540680787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194838.79166666666,
            "unit": "ns",
            "range": "± 9484.6528576024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168817.95744680852,
            "unit": "ns",
            "range": "± 6367.62764149715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3107564.28,
            "unit": "ns",
            "range": "± 81583.24061069978"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787242.1666666665,
            "unit": "ns",
            "range": "± 27246.604553539688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15011.04347826087,
            "unit": "ns",
            "range": "± 1388.795579962736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67725.0425531915,
            "unit": "ns",
            "range": "± 5049.762372594886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50038.379310344826,
            "unit": "ns",
            "range": "± 1336.0370614457709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62124.06179775281,
            "unit": "ns",
            "range": "± 8158.932365198748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3070.804347826087,
            "unit": "ns",
            "range": "± 493.6621445360396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13349.8,
            "unit": "ns",
            "range": "± 1217.0528706213383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754484.4405048075,
            "unit": "ns",
            "range": "± 7431.310200625329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223563.253155048,
            "unit": "ns",
            "range": "± 2202.230977546401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781599.0157001202,
            "unit": "ns",
            "range": "± 1028.4812932154948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1941522.8362379808,
            "unit": "ns",
            "range": "± 2494.011027120019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624636.2087590144,
            "unit": "ns",
            "range": "± 475.7666669322842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583676.2410606971,
            "unit": "ns",
            "range": "± 592.0880567616624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2499624.8,
            "unit": "ns",
            "range": "± 55311.82186438894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2585106.227272727,
            "unit": "ns",
            "range": "± 62771.905010034105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3066249.3571428573,
            "unit": "ns",
            "range": "± 24917.08253883774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2656033.65625,
            "unit": "ns",
            "range": "± 81132.04926920039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3381211.1666666665,
            "unit": "ns",
            "range": "± 46063.643442937675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1016321.125,
            "unit": "ns",
            "range": "± 62714.34234335004"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1975754.5094339622,
            "unit": "ns",
            "range": "± 82194.22516553343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1603827.884057971,
            "unit": "ns",
            "range": "± 73369.21968704833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7773764.815789473,
            "unit": "ns",
            "range": "± 266405.8937829952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30484.5,
            "unit": "ns",
            "range": "± 908.5011054592557"
          }
        ]
      }
    ]
  }
}