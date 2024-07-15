window.BENCHMARK_DATA = {
  "lastUpdate": 1721033845088,
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
          "id": "2aa539ec15069490d113a2698b55e2015ca1f9e6",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T17:48:21+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/2aa539ec15069490d113a2698b55e2015ca1f9e6"
        },
        "date": 1721033819835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201182.16666666666,
            "unit": "ns",
            "range": "± 8436.787904262466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195049.28846153847,
            "unit": "ns",
            "range": "± 5596.14854719004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167848,
            "unit": "ns",
            "range": "± 4227.8310471962295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044738.382352941,
            "unit": "ns",
            "range": "± 61375.76553482078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811072.533333333,
            "unit": "ns",
            "range": "± 50405.85997660344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12724.42857142857,
            "unit": "ns",
            "range": "± 1276.6327158670306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61568.84848484849,
            "unit": "ns",
            "range": "± 5069.055749456167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51134.27777777778,
            "unit": "ns",
            "range": "± 789.9165857344055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63561.42857142857,
            "unit": "ns",
            "range": "± 11525.635889830479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2875.244680851064,
            "unit": "ns",
            "range": "± 283.8781991640953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15051.578947368422,
            "unit": "ns",
            "range": "± 2085.779437855753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047413.734375,
            "unit": "ns",
            "range": "± 48510.449531229606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1993771.5614035088,
            "unit": "ns",
            "range": "± 85520.60490523773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726308.2461538462,
            "unit": "ns",
            "range": "± 73644.8079214157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8341838.266666667,
            "unit": "ns",
            "range": "± 242514.65759650606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3815259.52734375,
            "unit": "ns",
            "range": "± 10242.3589417147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208489.2698317308,
            "unit": "ns",
            "range": "± 1820.3787809141763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777302.722280649,
            "unit": "ns",
            "range": "± 7657.489723872206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942252.515345982,
            "unit": "ns",
            "range": "± 2028.876511825105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614383.8677884615,
            "unit": "ns",
            "range": "± 925.6699452132838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572157.4862583706,
            "unit": "ns",
            "range": "± 913.6330064063216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465399.5,
            "unit": "ns",
            "range": "± 47353.534598098726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569829.3181818184,
            "unit": "ns",
            "range": "± 96183.88433107016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048751.590909091,
            "unit": "ns",
            "range": "± 72294.54839349861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642192.6428571427,
            "unit": "ns",
            "range": "± 34461.32864443216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260668.3571428573,
            "unit": "ns",
            "range": "± 36233.53930324169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32569.64285714286,
            "unit": "ns",
            "range": "± 391.6839104613383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570096.42857143,
            "unit": "ns",
            "range": "± 59212.983092606264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27442801.2,
            "unit": "ns",
            "range": "± 105399.94118336661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68886746.06666666,
            "unit": "ns",
            "range": "± 482249.7070393047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139366727.03333333,
            "unit": "ns",
            "range": "± 904607.0707537584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283650396.4,
            "unit": "ns",
            "range": "± 1109805.4324490395"
          }
        ]
      }
    ]
  }
}