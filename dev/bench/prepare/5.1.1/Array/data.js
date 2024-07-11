window.BENCHMARK_DATA = {
  "lastUpdate": 1720689334821,
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
          "id": "cf3de69ec4b049161de30270cdf1e4b69413655d",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T13:46:38+09:00",
          "tree_id": "7bf03099fdc240cac41d733e2dfddd3315502ca9",
          "url": "https://github.com/planetarium/libplanet/commit/cf3de69ec4b049161de30270cdf1e4b69413655d"
        },
        "date": 1720678350182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10904583.533333333,
            "unit": "ns",
            "range": "± 203682.1599256571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26487506.285714287,
            "unit": "ns",
            "range": "± 289636.008602423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68128553.2,
            "unit": "ns",
            "range": "± 125430.67556861839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135484053.2857143,
            "unit": "ns",
            "range": "± 454228.38736365765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273369924.26666665,
            "unit": "ns",
            "range": "± 438899.26117463235"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14231.25,
            "unit": "ns",
            "range": "± 362.830688745663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109392.76923076923,
            "unit": "ns",
            "range": "± 3403.260344384473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104714.18333333333,
            "unit": "ns",
            "range": "± 4061.3115168631984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91189.33333333333,
            "unit": "ns",
            "range": "± 1888.8200175833401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3004167.9523809524,
            "unit": "ns",
            "range": "± 159641.14346025875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2881781.9142857143,
            "unit": "ns",
            "range": "± 138505.16697647402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5157.329545454545,
            "unit": "ns",
            "range": "± 511.82665262315453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26365.68888888889,
            "unit": "ns",
            "range": "± 1600.0109051204524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22498.78787878788,
            "unit": "ns",
            "range": "± 1785.137994281419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30418.744680851065,
            "unit": "ns",
            "range": "± 4666.3321138209585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 991.1276595744681,
            "unit": "ns",
            "range": "± 173.1109398804462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4578.541176470589,
            "unit": "ns",
            "range": "± 338.68184793054246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 683659.5769230769,
            "unit": "ns",
            "range": "± 34909.665456706985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1285265.02,
            "unit": "ns",
            "range": "± 48970.20195673351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1078679.4838709678,
            "unit": "ns",
            "range": "± 65934.85590826567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10907447.72,
            "unit": "ns",
            "range": "± 2082460.282494139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2205951.777777778,
            "unit": "ns",
            "range": "± 46947.11372141255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275353.4210526315,
            "unit": "ns",
            "range": "± 77142.1420827502"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2586266.9166666665,
            "unit": "ns",
            "range": "± 29489.29526719926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2312291.2674418604,
            "unit": "ns",
            "range": "± 85258.09485931449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3181943.3626373624,
            "unit": "ns",
            "range": "± 275628.08882822585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3048589.168526786,
            "unit": "ns",
            "range": "± 43322.83661163817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 925239.5418419471,
            "unit": "ns",
            "range": "± 4071.281420897295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618008.8053385416,
            "unit": "ns",
            "range": "± 5216.889322153228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1639350.5099051339,
            "unit": "ns",
            "range": "± 8777.489604599792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 473779.10423177085,
            "unit": "ns",
            "range": "± 723.5762486210066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 421313.9485677083,
            "unit": "ns",
            "range": "± 727.9216962043705"
          }
        ]
      },
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
          "id": "48f1ba1f05a55879e3053e45c3e42173b0313d1a",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T17:53:17+09:00",
          "tree_id": "778cbdea0edb67bbd929081380c5f93ec173bb0d",
          "url": "https://github.com/planetarium/libplanet/commit/48f1ba1f05a55879e3053e45c3e42173b0313d1a"
        },
        "date": 1720689273911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10943580,
            "unit": "ns",
            "range": "± 84293.66197353802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26820981.714285713,
            "unit": "ns",
            "range": "± 162298.85062365117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67395988,
            "unit": "ns",
            "range": "± 78612.1844079187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135254851.42857143,
            "unit": "ns",
            "range": "± 336225.66878202144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274586413.46666664,
            "unit": "ns",
            "range": "± 188291.53662903653"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14302.09090909091,
            "unit": "ns",
            "range": "± 445.6066345189137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109641.44117647059,
            "unit": "ns",
            "range": "± 4654.46467538412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105429.04444444444,
            "unit": "ns",
            "range": "± 3997.044811514192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92444.9375,
            "unit": "ns",
            "range": "± 1624.741147331886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2996564.7010309277,
            "unit": "ns",
            "range": "± 177830.16156300448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2731113.3636363638,
            "unit": "ns",
            "range": "± 138780.17791152847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4960.533333333334,
            "unit": "ns",
            "range": "± 540.6685250063889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26660.409090909092,
            "unit": "ns",
            "range": "± 1763.128258524705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24388.67,
            "unit": "ns",
            "range": "± 2652.2273850711244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29817.702127659573,
            "unit": "ns",
            "range": "± 5095.620056458327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1249,
            "unit": "ns",
            "range": "± 225.98910431438327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4744.056818181818,
            "unit": "ns",
            "range": "± 379.61286565271996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681734.2222222222,
            "unit": "ns",
            "range": "± 31640.505626745584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1258977.1944444445,
            "unit": "ns",
            "range": "± 41898.400226411264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1083526.3116883116,
            "unit": "ns",
            "range": "± 55456.195121455465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9515358.35,
            "unit": "ns",
            "range": "± 1430712.988734153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2225413.153846154,
            "unit": "ns",
            "range": "± 35267.566965145554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2287948.55,
            "unit": "ns",
            "range": "± 80464.22709054929"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2581146.380952381,
            "unit": "ns",
            "range": "± 61345.539502457876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2321999.472972973,
            "unit": "ns",
            "range": "± 77372.40732884276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3135566.8,
            "unit": "ns",
            "range": "± 270380.0662214939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3049613.30234375,
            "unit": "ns",
            "range": "± 45318.582043133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920313.9939453125,
            "unit": "ns",
            "range": "± 4028.6294615670704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611949.0832682292,
            "unit": "ns",
            "range": "± 4161.129779128897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1651908.457421875,
            "unit": "ns",
            "range": "± 16312.669980027671"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467342.8492513021,
            "unit": "ns",
            "range": "± 451.13919861033463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 416534.4075846354,
            "unit": "ns",
            "range": "± 1138.9929656423778"
          }
        ]
      }
    ]
  }
}