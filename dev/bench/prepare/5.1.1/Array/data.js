window.BENCHMARK_DATA = {
  "lastUpdate": 1720762416619,
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
          "id": "8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-11T18:19:26+09:00",
          "tree_id": "d49a20a088b47d1a0e4467a05659cd5619cc06ce",
          "url": "https://github.com/planetarium/libplanet/commit/8d2792f6d39c7b0bef1b8bbc957ab350ec35bdc0"
        },
        "date": 1720690360860,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10749330,
            "unit": "ns",
            "range": "± 98080.19360863687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26430899,
            "unit": "ns",
            "range": "± 146022.1864638806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67443874.66666667,
            "unit": "ns",
            "range": "± 234679.9980489136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135249071.14285713,
            "unit": "ns",
            "range": "± 154821.21263864686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275478545.0714286,
            "unit": "ns",
            "range": "± 194788.28189185078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13965.1,
            "unit": "ns",
            "range": "± 420.35687629474535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110196.07936507936,
            "unit": "ns",
            "range": "± 4865.236848332646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105461.04761904762,
            "unit": "ns",
            "range": "± 3718.4671242024824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91715.59090909091,
            "unit": "ns",
            "range": "± 3375.6573610854402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3060115.0327868853,
            "unit": "ns",
            "range": "± 136198.22118710744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736916.1340206186,
            "unit": "ns",
            "range": "± 157971.585113011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5168.446808510638,
            "unit": "ns",
            "range": "± 704.8664994780779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26932.510638297874,
            "unit": "ns",
            "range": "± 1898.1432282468502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22600.257142857143,
            "unit": "ns",
            "range": "± 1095.6489399373875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30725.126315789475,
            "unit": "ns",
            "range": "± 5419.280900012129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1356.2315789473685,
            "unit": "ns",
            "range": "± 263.22474228234717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4709.333333333333,
            "unit": "ns",
            "range": "± 528.9454096377164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 685202.6103896104,
            "unit": "ns",
            "range": "± 33527.3261590083"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1261018.3,
            "unit": "ns",
            "range": "± 29751.706460650115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1084955.6813186812,
            "unit": "ns",
            "range": "± 59830.600335703195"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11219122.9,
            "unit": "ns",
            "range": "± 2075158.8667407045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170720.710526316,
            "unit": "ns",
            "range": "± 74111.79879180632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291201.512195122,
            "unit": "ns",
            "range": "± 73691.706845181"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2638250.3333333335,
            "unit": "ns",
            "range": "± 77601.15404640148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2368509.727272727,
            "unit": "ns",
            "range": "± 111317.42924013367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3278709.05,
            "unit": "ns",
            "range": "± 354377.6709365185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029789.8076171875,
            "unit": "ns",
            "range": "± 27867.948608742896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 917203.62890625,
            "unit": "ns",
            "range": "± 5744.16462683721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618117.3126302083,
            "unit": "ns",
            "range": "± 5447.065475830859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1663059.628627232,
            "unit": "ns",
            "range": "± 14623.018823593728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 467051.1744466146,
            "unit": "ns",
            "range": "± 851.759216776041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 425189.3876604353,
            "unit": "ns",
            "range": "± 1176.4930617825125"
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
          "id": "2fe886ea91e649a996f7f28310e32a035f71e045",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-12T14:06:44+09:00",
          "tree_id": "d49aae5a54c32de95131bf665075de50510f0082",
          "url": "https://github.com/planetarium/libplanet/commit/2fe886ea91e649a996f7f28310e32a035f71e045"
        },
        "date": 1720761326812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10756190.642857144,
            "unit": "ns",
            "range": "± 88511.06228090028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26544018.07142857,
            "unit": "ns",
            "range": "± 124053.0869137913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67191419.35714285,
            "unit": "ns",
            "range": "± 100757.13830150593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136361809.14285713,
            "unit": "ns",
            "range": "± 436446.359864418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272456289.0714286,
            "unit": "ns",
            "range": "± 281505.01177488675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14124.317460317461,
            "unit": "ns",
            "range": "± 649.7741499787005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111236.70833333333,
            "unit": "ns",
            "range": "± 4360.438451301503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106976.83018867925,
            "unit": "ns",
            "range": "± 4419.787463284811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93380.52777777778,
            "unit": "ns",
            "range": "± 3111.998948642047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3074103.470588235,
            "unit": "ns",
            "range": "± 123126.50087846284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2780264.336734694,
            "unit": "ns",
            "range": "± 161636.68842776923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5019.382978723404,
            "unit": "ns",
            "range": "± 575.7624417974657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26542.523529411767,
            "unit": "ns",
            "range": "± 1502.5170467020507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23145.777777777777,
            "unit": "ns",
            "range": "± 491.4366460940647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30061.736842105263,
            "unit": "ns",
            "range": "± 5216.0015545669885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1153.588888888889,
            "unit": "ns",
            "range": "± 177.65393037104374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4879.290697674419,
            "unit": "ns",
            "range": "± 593.013304409409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689151.2333333333,
            "unit": "ns",
            "range": "± 42169.699758611765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1268954,
            "unit": "ns",
            "range": "± 45829.37554962202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1066605.4,
            "unit": "ns",
            "range": "± 48497.628198062426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9256677.13,
            "unit": "ns",
            "range": "± 1271559.9681387108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2159115,
            "unit": "ns",
            "range": "± 23202.335329170484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2285531.836734694,
            "unit": "ns",
            "range": "± 90918.140325136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2603472.523809524,
            "unit": "ns",
            "range": "± 59972.6469414341"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2331124.4743589745,
            "unit": "ns",
            "range": "± 81432.60157929998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3292100.92,
            "unit": "ns",
            "range": "± 492435.3970248317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3017593.308984375,
            "unit": "ns",
            "range": "± 48448.92436729127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 939134.0412760417,
            "unit": "ns",
            "range": "± 5592.837005948932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613771.3800223215,
            "unit": "ns",
            "range": "± 1955.4256097870816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1663420.230747768,
            "unit": "ns",
            "range": "± 7225.187715220092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 469053.05852864584,
            "unit": "ns",
            "range": "± 544.0210568350739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 424414.54368489585,
            "unit": "ns",
            "range": "± 1725.8241590115742"
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
          "id": "02b3865507374ddc0eff61e3c7b446eabe62f1b5",
          "message": "Prepare 5.1.1",
          "timestamp": "2024-07-12T14:16:49+09:00",
          "tree_id": "f4265a0ab88d83def888e04ed52141f2d5f9bd4a",
          "url": "https://github.com/planetarium/libplanet/commit/02b3865507374ddc0eff61e3c7b446eabe62f1b5"
        },
        "date": 1720762358093,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10992445.153846154,
            "unit": "ns",
            "range": "± 158006.621072687"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26606458.57142857,
            "unit": "ns",
            "range": "± 109657.63564680917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67582305.91666667,
            "unit": "ns",
            "range": "± 124847.3859408564"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135465916.92857143,
            "unit": "ns",
            "range": "± 194480.12813512862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279026158.1333333,
            "unit": "ns",
            "range": "± 560786.6915956887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14262.70588235294,
            "unit": "ns",
            "range": "± 278.62783527177487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109850.85714285714,
            "unit": "ns",
            "range": "± 3936.813586593149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105917.89285714286,
            "unit": "ns",
            "range": "± 4546.25350522452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 92692.56521739131,
            "unit": "ns",
            "range": "± 3541.78881767187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3008070.264367816,
            "unit": "ns",
            "range": "± 164316.36199144536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2785084.9292929294,
            "unit": "ns",
            "range": "± 173145.1932577109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4975.510638297872,
            "unit": "ns",
            "range": "± 506.82920591815866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27072.83695652174,
            "unit": "ns",
            "range": "± 2249.7816415517227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22758.582417582416,
            "unit": "ns",
            "range": "± 1321.3868309547954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29508.197916666668,
            "unit": "ns",
            "range": "± 4994.670514647624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1153.7333333333333,
            "unit": "ns",
            "range": "± 180.31618920631516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4631.511363636364,
            "unit": "ns",
            "range": "± 505.431873925387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 688303.1329113924,
            "unit": "ns",
            "range": "± 35656.46039538447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276350.107142857,
            "unit": "ns",
            "range": "± 36569.810561029386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1076688.425531915,
            "unit": "ns",
            "range": "± 60779.506516347596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10145546.31,
            "unit": "ns",
            "range": "± 1924450.5193905607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196031.625,
            "unit": "ns",
            "range": "± 40503.47207483164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2278230,
            "unit": "ns",
            "range": "± 76768.26616621393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2600929.2352941176,
            "unit": "ns",
            "range": "± 52105.699363804495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2356974.6627906975,
            "unit": "ns",
            "range": "± 86626.77792937499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2861950.804347826,
            "unit": "ns",
            "range": "± 107864.03770171237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3015689.6278645834,
            "unit": "ns",
            "range": "± 52603.325979969755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 937112.5942057292,
            "unit": "ns",
            "range": "± 6757.1042528260805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613952.6739583333,
            "unit": "ns",
            "range": "± 4743.7023566614225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1674237.634765625,
            "unit": "ns",
            "range": "± 14424.47875814547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 471622.2401367187,
            "unit": "ns",
            "range": "± 886.2961050468439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414140.25611979165,
            "unit": "ns",
            "range": "± 1458.7704129815588"
          }
        ]
      }
    ]
  }
}