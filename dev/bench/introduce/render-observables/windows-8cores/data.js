window.BENCHMARK_DATA = {
  "lastUpdate": 1724207042208,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "e07908e64433b84ba9bc6fe1bfdbb90a501b6359",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:46:06+09:00",
          "tree_id": "27025bb6988dc06d706f41a31b8c6998a1d232bb",
          "url": "https://github.com/planetarium/libplanet/commit/e07908e64433b84ba9bc6fe1bfdbb90a501b6359"
        },
        "date": 1723892300911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1011956.1224489796,
            "unit": "ns",
            "range": "± 126641.06031617656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720063.6363636365,
            "unit": "ns",
            "range": "± 53826.01208678774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1511517.2413793104,
            "unit": "ns",
            "range": "± 81929.07483872518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7052926.0869565215,
            "unit": "ns",
            "range": "± 268371.61253653286"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30804,
            "unit": "ns",
            "range": "± 523.9910940719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9891353.333333334,
            "unit": "ns",
            "range": "± 67974.03776092612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24023593.333333332,
            "unit": "ns",
            "range": "± 124539.16461824178"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59826157.14285714,
            "unit": "ns",
            "range": "± 415780.2687335366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117882493.33333333,
            "unit": "ns",
            "range": "± 588448.5503261542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241885593.33333334,
            "unit": "ns",
            "range": "± 1710231.9485407597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3334053.6979166665,
            "unit": "ns",
            "range": "± 5963.548756193475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071798.1510416667,
            "unit": "ns",
            "range": "± 4108.451217674173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 730965.37109375,
            "unit": "ns",
            "range": "± 1213.2591605857863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921428.1700721155,
            "unit": "ns",
            "range": "± 1374.7156950991086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608400,
            "unit": "ns",
            "range": "± 975.3307920203737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574847.9817708334,
            "unit": "ns",
            "range": "± 1747.950428284224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2094672,
            "unit": "ns",
            "range": "± 21623.03016076455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2255592.3076923075,
            "unit": "ns",
            "range": "± 21207.288901792766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2664095.238095238,
            "unit": "ns",
            "range": "± 60361.81306248576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2301080,
            "unit": "ns",
            "range": "± 59528.256595782594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2928864.285714286,
            "unit": "ns",
            "range": "± 41207.57225303392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174189.6551724138,
            "unit": "ns",
            "range": "± 7094.986855202699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165685.91549295775,
            "unit": "ns",
            "range": "± 7393.361805887531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142562.5,
            "unit": "ns",
            "range": "± 2094.078954258093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2644143.3333333335,
            "unit": "ns",
            "range": "± 38799.364255960005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389707.1428571427,
            "unit": "ns",
            "range": "± 34318.585776082466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11091.208791208792,
            "unit": "ns",
            "range": "± 1072.2404738208838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52386.95652173913,
            "unit": "ns",
            "range": "± 4156.716196296111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45211.76470588235,
            "unit": "ns",
            "range": "± 785.7181054147031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52324.489795918365,
            "unit": "ns",
            "range": "± 10411.116790709426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2585.0515463917527,
            "unit": "ns",
            "range": "± 425.25512859767537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9617.582417582418,
            "unit": "ns",
            "range": "± 966.5049757408744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "15f8eb55e77733c586dcb97431c888c817c2b502",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:44:20+09:00",
          "tree_id": "3b3ad6e02b44e81be470edacd1c1177cd58d7984",
          "url": "https://github.com/planetarium/libplanet/commit/15f8eb55e77733c586dcb97431c888c817c2b502"
        },
        "date": 1723892394394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1104242.857142857,
            "unit": "ns",
            "range": "± 17537.85857841497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1727462.1621621621,
            "unit": "ns",
            "range": "± 52621.63344392025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1482663.3333333333,
            "unit": "ns",
            "range": "± 78675.94674044677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6793751.428571428,
            "unit": "ns",
            "range": "± 188475.5474410229"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30965.47619047619,
            "unit": "ns",
            "range": "± 1997.0154868823536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9823100,
            "unit": "ns",
            "range": "± 42001.28966273933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23728530.769230768,
            "unit": "ns",
            "range": "± 78789.49152240402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59785866.666666664,
            "unit": "ns",
            "range": "± 303281.3396046334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115961900,
            "unit": "ns",
            "range": "± 867318.7720254257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241193660,
            "unit": "ns",
            "range": "± 725667.8380242968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3355740.703125,
            "unit": "ns",
            "range": "± 4097.886807486252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069067.1177455357,
            "unit": "ns",
            "range": "± 3032.866570389148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746622.8450520834,
            "unit": "ns",
            "range": "± 1622.877355440254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956413.8671875,
            "unit": "ns",
            "range": "± 3038.33571696313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 613742.67578125,
            "unit": "ns",
            "range": "± 1350.6875310814219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552638.5881696428,
            "unit": "ns",
            "range": "± 1908.5737525099696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2105050,
            "unit": "ns",
            "range": "± 40639.36218274949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2238281.25,
            "unit": "ns",
            "range": "± 40734.624399888606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2702852.1739130435,
            "unit": "ns",
            "range": "± 67461.84692486438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2195613.3333333335,
            "unit": "ns",
            "range": "± 29005.36567766795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2879490,
            "unit": "ns",
            "range": "± 37193.06386949051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 172982.60869565216,
            "unit": "ns",
            "range": "± 9617.2305156034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161604.6875,
            "unit": "ns",
            "range": "± 7282.277458333947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143533.33333333334,
            "unit": "ns",
            "range": "± 2987.818405380322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2649713.3333333335,
            "unit": "ns",
            "range": "± 34335.96337591798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2515180,
            "unit": "ns",
            "range": "± 39679.019285115544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10041.052631578947,
            "unit": "ns",
            "range": "± 1294.2996740077695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48721.348314606745,
            "unit": "ns",
            "range": "± 2896.9996983600577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43321.42857142857,
            "unit": "ns",
            "range": "± 779.5331664989999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 47942.26804123711,
            "unit": "ns",
            "range": "± 8492.457867763538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2089.5833333333335,
            "unit": "ns",
            "range": "± 408.45773257247265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8721.348314606741,
            "unit": "ns",
            "range": "± 629.4788447077688"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "18e9915fa6d7afeb9ddca3386433ed65a2bd1d95",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-21T11:07:04+09:00",
          "tree_id": "bf1c81b1746539a7e92dd88e5344fd37d4b5e680",
          "url": "https://github.com/planetarium/libplanet/commit/18e9915fa6d7afeb9ddca3386433ed65a2bd1d95"
        },
        "date": 1724206739133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1139985.7142857143,
            "unit": "ns",
            "range": "± 130579.90957074965"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1976984.6153846155,
            "unit": "ns",
            "range": "± 116986.84344173723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1687621.0526315789,
            "unit": "ns",
            "range": "± 131666.12586769552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6941356.521739131,
            "unit": "ns",
            "range": "± 169634.301382514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33623.333333333336,
            "unit": "ns",
            "range": "± 2709.9089913820044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10324940,
            "unit": "ns",
            "range": "± 174334.67321710355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25222214.285714287,
            "unit": "ns",
            "range": "± 254472.77278308597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62640200,
            "unit": "ns",
            "range": "± 1012930.1611802125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126873840,
            "unit": "ns",
            "range": "± 2055930.9162934995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252442916.66666666,
            "unit": "ns",
            "range": "± 3134447.3827515584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3478414.21875,
            "unit": "ns",
            "range": "± 8571.679724437903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072070.228794643,
            "unit": "ns",
            "range": "± 3320.5430700789425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 743580.078125,
            "unit": "ns",
            "range": "± 5097.38798517794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950739.0904017857,
            "unit": "ns",
            "range": "± 4320.776936432178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644879.5222355769,
            "unit": "ns",
            "range": "± 1325.5657316154768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568280.7356770834,
            "unit": "ns",
            "range": "± 1057.144358743119"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2160324.4680851065,
            "unit": "ns",
            "range": "± 77638.67387955652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2286350,
            "unit": "ns",
            "range": "± 40412.25537649915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798538.2352941176,
            "unit": "ns",
            "range": "± 90000.03035253994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2321531.111111111,
            "unit": "ns",
            "range": "± 87445.12258923572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3175860.563380282,
            "unit": "ns",
            "range": "± 134552.3610016065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193152.63157894736,
            "unit": "ns",
            "range": "± 7413.985463374461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 184768.88888888888,
            "unit": "ns",
            "range": "± 12049.986194634683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 149986.66666666666,
            "unit": "ns",
            "range": "± 4895.016018174181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2778142.8571428573,
            "unit": "ns",
            "range": "± 34771.135559999595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2551050,
            "unit": "ns",
            "range": "± 55684.33851232818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13229.347826086956,
            "unit": "ns",
            "range": "± 1307.0845036437208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61541.666666666664,
            "unit": "ns",
            "range": "± 6109.76210522604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49040.12345679013,
            "unit": "ns",
            "range": "± 2578.3524263699683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68750,
            "unit": "ns",
            "range": "± 12206.72991915316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3107.1428571428573,
            "unit": "ns",
            "range": "± 827.398107845298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12332.258064516129,
            "unit": "ns",
            "range": "± 1404.972635531335"
          }
        ]
      }
    ]
  }
}