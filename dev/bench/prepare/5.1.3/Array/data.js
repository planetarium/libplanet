window.BENCHMARK_DATA = {
  "lastUpdate": 1721209922473,
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
          "id": "adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8",
          "message": "Prepare 5.1.3",
          "timestamp": "2024-07-17T18:23:14+09:00",
          "tree_id": "46788e99e92a5fb3224654f1c5f3217525742742",
          "url": "https://github.com/planetarium/libplanet/commit/adefec1ee02fbc004c7e937b6c3f1b0eb35b6ba8"
        },
        "date": 1721209908956,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10781518.846153846,
            "unit": "ns",
            "range": "± 166309.89862144215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26526482.14285714,
            "unit": "ns",
            "range": "± 205361.1923862094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67399800.28571428,
            "unit": "ns",
            "range": "± 125049.87630752567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134479194.06666666,
            "unit": "ns",
            "range": "± 1327390.334903763"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272223187.78571427,
            "unit": "ns",
            "range": "± 540299.8733329169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14285.913793103447,
            "unit": "ns",
            "range": "± 417.7647592708963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110375.54166666667,
            "unit": "ns",
            "range": "± 4327.549421812182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105556.30327868853,
            "unit": "ns",
            "range": "± 4736.3694071150885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91628.72222222222,
            "unit": "ns",
            "range": "± 2752.5510309125566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2997872.54,
            "unit": "ns",
            "range": "± 194914.90506939302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2747865.79,
            "unit": "ns",
            "range": "± 175557.3169903619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4945.478723404255,
            "unit": "ns",
            "range": "± 709.999829300652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27352.456521739132,
            "unit": "ns",
            "range": "± 2455.731642339563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22958,
            "unit": "ns",
            "range": "± 1848.5269642339547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29167.1875,
            "unit": "ns",
            "range": "± 5216.233376504342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1179.1875,
            "unit": "ns",
            "range": "± 232.920149520456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4808.177777777778,
            "unit": "ns",
            "range": "± 508.31412427634393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 670769.4142857143,
            "unit": "ns",
            "range": "± 27404.8583725602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1277166.1153846155,
            "unit": "ns",
            "range": "± 52614.02739471964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066653.1392405063,
            "unit": "ns",
            "range": "± 55315.378161938956"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9701062,
            "unit": "ns",
            "range": "± 1497672.3401364593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2193113.466666667,
            "unit": "ns",
            "range": "± 38704.39659940211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2284144.8444444444,
            "unit": "ns",
            "range": "± 70036.85413797107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2577602.3076923075,
            "unit": "ns",
            "range": "± 33911.057501903946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2300525.7391304346,
            "unit": "ns",
            "range": "± 53111.8151991347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2879518.2678571427,
            "unit": "ns",
            "range": "± 121878.10677088081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3010404.8051757812,
            "unit": "ns",
            "range": "± 59035.097198368494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925667.9194661458,
            "unit": "ns",
            "range": "± 4428.2555925795405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618360.2016927083,
            "unit": "ns",
            "range": "± 5876.100245100419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1672963.3997395833,
            "unit": "ns",
            "range": "± 9223.933506863119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467011.1995442708,
            "unit": "ns",
            "range": "± 1074.318177598733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418304.29045758926,
            "unit": "ns",
            "range": "± 629.8117493688939"
          }
        ]
      }
    ]
  }
}