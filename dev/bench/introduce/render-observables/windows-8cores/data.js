window.BENCHMARK_DATA = {
  "lastUpdate": 1725237929571,
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
          "id": "2206874677e919a6d5bf6624b8033e57c03eac61",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T11:26:46+09:00",
          "tree_id": "d9a0edba83950a4e5eb175403af88f74f29d2510",
          "url": "https://github.com/planetarium/libplanet/commit/2206874677e919a6d5bf6624b8033e57c03eac61"
        },
        "date": 1724985403012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1050380.6451612904,
            "unit": "ns",
            "range": "± 85982.19641053164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1858626.1904761905,
            "unit": "ns",
            "range": "± 67521.3355965603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619377.4193548388,
            "unit": "ns",
            "range": "± 106494.89284450938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6817357.142857143,
            "unit": "ns",
            "range": "± 130843.4811957729"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34236.73469387755,
            "unit": "ns",
            "range": "± 4999.451263808489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10067213.333333334,
            "unit": "ns",
            "range": "± 87185.08118337898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24356728.57142857,
            "unit": "ns",
            "range": "± 102112.16629518005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60648592.85714286,
            "unit": "ns",
            "range": "± 332906.28552950895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121622964.28571428,
            "unit": "ns",
            "range": "± 299443.02041044045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244669833.33333334,
            "unit": "ns",
            "range": "± 1097332.1262216354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3452157.03125,
            "unit": "ns",
            "range": "± 7805.876630161225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1079182.114955357,
            "unit": "ns",
            "range": "± 1212.262439889703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 741549.140625,
            "unit": "ns",
            "range": "± 1189.470652942157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944247.5651041667,
            "unit": "ns",
            "range": "± 2148.9797089579506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627438.0989583334,
            "unit": "ns",
            "range": "± 2118.769575549163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566462.6106770834,
            "unit": "ns",
            "range": "± 1140.4428623247222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2199108,
            "unit": "ns",
            "range": "± 51597.86752699508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258900,
            "unit": "ns",
            "range": "± 43271.06808634764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2761625,
            "unit": "ns",
            "range": "± 60009.384134571206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2379883.3333333335,
            "unit": "ns",
            "range": "± 61127.81809395405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2962628.5714285714,
            "unit": "ns",
            "range": "± 39280.635835591456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 182460.3448275862,
            "unit": "ns",
            "range": "± 7633.25916585065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 176058.82352941178,
            "unit": "ns",
            "range": "± 6363.652299445288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145950,
            "unit": "ns",
            "range": "± 1955.1706594802172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2859907.1428571427,
            "unit": "ns",
            "range": "± 46010.675421550295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2506600,
            "unit": "ns",
            "range": "± 24273.505657878857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11888.888888888889,
            "unit": "ns",
            "range": "± 1015.547059575397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57926.086956521736,
            "unit": "ns",
            "range": "± 4825.364976578522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46447.72727272727,
            "unit": "ns",
            "range": "± 1685.9872046141459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60802.409638554214,
            "unit": "ns",
            "range": "± 6805.198441643701"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3149.4845360824743,
            "unit": "ns",
            "range": "± 587.0341612966058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11458.602150537634,
            "unit": "ns",
            "range": "± 1417.6416357410747"
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
          "id": "5e7876dcf975af28985966d18881b7a8245fdd0a",
          "message": "feat: Add IRendererService and implementations of IObservable",
          "timestamp": "2024-08-30T15:51:12+09:00",
          "tree_id": "d1c0f577ab66966cd30ea7cf05387e2ad56449bf",
          "url": "https://github.com/planetarium/libplanet/commit/5e7876dcf975af28985966d18881b7a8245fdd0a"
        },
        "date": 1725001282050,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1090266.6666666667,
            "unit": "ns",
            "range": "± 118848.41571669077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888991.111111111,
            "unit": "ns",
            "range": "± 71734.49411869193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1648575.2688172043,
            "unit": "ns",
            "range": "± 99795.94360484446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7081878.947368421,
            "unit": "ns",
            "range": "± 242144.35627232303"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34061.05263157895,
            "unit": "ns",
            "range": "± 3537.858913056004"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10138342.857142856,
            "unit": "ns",
            "range": "± 83487.25111597039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24621611.904761903,
            "unit": "ns",
            "range": "± 571579.3256199794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60509142.85714286,
            "unit": "ns",
            "range": "± 452185.72888426436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123462266.66666667,
            "unit": "ns",
            "range": "± 1064729.3483501312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249779800,
            "unit": "ns",
            "range": "± 3449648.399474938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3345286.7708333335,
            "unit": "ns",
            "range": "± 11223.756338210405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1064016.875,
            "unit": "ns",
            "range": "± 3002.27568353733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745637.4674479166,
            "unit": "ns",
            "range": "± 3134.6190534640627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1989883.872767857,
            "unit": "ns",
            "range": "± 5824.185008649803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633368.75,
            "unit": "ns",
            "range": "± 502.8957594998115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576209.53125,
            "unit": "ns",
            "range": "± 1389.0035496554265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2278966.6666666665,
            "unit": "ns",
            "range": "± 40937.57733544131"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2354319.4444444445,
            "unit": "ns",
            "range": "± 78494.95641466197"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2765565.8536585364,
            "unit": "ns",
            "range": "± 94682.30196228885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2465642.5531914895,
            "unit": "ns",
            "range": "± 95929.33029439331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3064943.75,
            "unit": "ns",
            "range": "± 56415.753931563006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 193231.81818181818,
            "unit": "ns",
            "range": "± 9065.830338158758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182685.33333333334,
            "unit": "ns",
            "range": "± 9220.55127233539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148582.60869565216,
            "unit": "ns",
            "range": "± 6968.035348937383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2833817.6470588236,
            "unit": "ns",
            "range": "± 57726.350517918996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2611835.294117647,
            "unit": "ns",
            "range": "± 51404.984451613134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13863.157894736842,
            "unit": "ns",
            "range": "± 1440.0097983989144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61101.030927835054,
            "unit": "ns",
            "range": "± 7198.184013540046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50841.05263157895,
            "unit": "ns",
            "range": "± 4596.980848636675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69093.68421052632,
            "unit": "ns",
            "range": "± 17191.10860315876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3177.8947368421054,
            "unit": "ns",
            "range": "± 703.8161854094753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12600,
            "unit": "ns",
            "range": "± 1724.7710470770214"
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
          "id": "6dab728198eacacd5f35cafb2d6ea72a9191062d",
          "message": "WIP",
          "timestamp": "2024-08-21T11:50:47+09:00",
          "tree_id": "b96e6e51d0ccd8c202f953c8a4d387de995a4971",
          "url": "https://github.com/planetarium/libplanet/commit/6dab728198eacacd5f35cafb2d6ea72a9191062d"
        },
        "date": 1725237645309,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958003.2608695652,
            "unit": "ns",
            "range": "± 57395.71230891453"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1728129.4117647058,
            "unit": "ns",
            "range": "± 54382.40875008826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1560930,
            "unit": "ns",
            "range": "± 139542.24261759402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6688640.740740741,
            "unit": "ns",
            "range": "± 184067.96457842842"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29783.333333333332,
            "unit": "ns",
            "range": "± 255.24794837866014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9778026.666666666,
            "unit": "ns",
            "range": "± 47843.81534395712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23265771.42857143,
            "unit": "ns",
            "range": "± 254320.42607875427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59996133.333333336,
            "unit": "ns",
            "range": "± 425905.67645676574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116782966.66666667,
            "unit": "ns",
            "range": "± 707278.6182329591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236438933.33333334,
            "unit": "ns",
            "range": "± 827188.5928222403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3368659.6153846155,
            "unit": "ns",
            "range": "± 13179.904540278678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062021.7708333333,
            "unit": "ns",
            "range": "± 4000.8520600754305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 740309.8551432291,
            "unit": "ns",
            "range": "± 1983.2726677967953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964313.0108173077,
            "unit": "ns",
            "range": "± 5197.9406102946605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620142.08984375,
            "unit": "ns",
            "range": "± 1720.6871488817567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564175.5929129465,
            "unit": "ns",
            "range": "± 4622.4123816856745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2116308.8235294116,
            "unit": "ns",
            "range": "± 27357.569088878547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2212807.1428571427,
            "unit": "ns",
            "range": "± 22527.742359681226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2677120,
            "unit": "ns",
            "range": "± 41868.12971359344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2243365.217391304,
            "unit": "ns",
            "range": "± 54619.64855164429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2915523.3333333335,
            "unit": "ns",
            "range": "± 43262.47906949041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171454.54545454544,
            "unit": "ns",
            "range": "± 7274.4051094896895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 163430.76923076922,
            "unit": "ns",
            "range": "± 5606.488433110987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 142174.07407407407,
            "unit": "ns",
            "range": "± 3432.042741417621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2698135.714285714,
            "unit": "ns",
            "range": "± 36826.17395158079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2551013.3333333335,
            "unit": "ns",
            "range": "± 31112.167272322135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9745.744680851063,
            "unit": "ns",
            "range": "± 1213.0708294807002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49117.64705882353,
            "unit": "ns",
            "range": "± 2348.0662845325264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44581.25,
            "unit": "ns",
            "range": "± 1364.630991123785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49696.666666666664,
            "unit": "ns",
            "range": "± 10135.646850529656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2482.4742268041236,
            "unit": "ns",
            "range": "± 525.7950942141401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9498.823529411764,
            "unit": "ns",
            "range": "± 938.7801250821727"
          }
        ]
      }
    ]
  }
}