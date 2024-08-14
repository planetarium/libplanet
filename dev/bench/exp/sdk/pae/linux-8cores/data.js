window.BENCHMARK_DATA = {
  "lastUpdate": 1723626080567,
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
          "id": "55ea7ecf677b8a31b7b0626cce857079688b2994",
          "message": "feat: Add a feature that allows you to optionally set whether to start or not for all services.",
          "timestamp": "2024-08-14T15:17:07+09:00",
          "tree_id": "4806c0c503abd755893653acad477caaecd9ba9e",
          "url": "https://github.com/planetarium/libplanet/commit/55ea7ecf677b8a31b7b0626cce857079688b2994"
        },
        "date": 1723617622070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203181.74285714285,
            "unit": "ns",
            "range": "± 6468.480430440491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198878.44444444444,
            "unit": "ns",
            "range": "± 8286.480477524974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164723.83333333334,
            "unit": "ns",
            "range": "± 2165.1591305504685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3115280.1666666665,
            "unit": "ns",
            "range": "± 17969.40085918546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2983799.6428571427,
            "unit": "ns",
            "range": "± 24344.993194327824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15549.01,
            "unit": "ns",
            "range": "± 3430.123505433187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69578.20491803279,
            "unit": "ns",
            "range": "± 3134.5080865757463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61929.555555555555,
            "unit": "ns",
            "range": "± 1294.3880894630445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62462.163265306124,
            "unit": "ns",
            "range": "± 12411.488526239998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3065.953608247423,
            "unit": "ns",
            "range": "± 318.9092419423118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12494.685393258427,
            "unit": "ns",
            "range": "± 703.4945337305501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2434180.5714285714,
            "unit": "ns",
            "range": "± 36032.52050677872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551343.566666667,
            "unit": "ns",
            "range": "± 43778.58811674079"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3042563.2666666666,
            "unit": "ns",
            "range": "± 43424.87280097608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2576212.782608696,
            "unit": "ns",
            "range": "± 64245.77379801054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3264760.5714285714,
            "unit": "ns",
            "range": "± 22991.837630121914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10419969.4,
            "unit": "ns",
            "range": "± 80228.7944611267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26665277.1,
            "unit": "ns",
            "range": "± 221440.01366213316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68429538.4,
            "unit": "ns",
            "range": "± 353123.43904055504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139109638.16666666,
            "unit": "ns",
            "range": "± 949254.2323986812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285612388.73333335,
            "unit": "ns",
            "range": "± 1349244.6510005656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1027178.6395348837,
            "unit": "ns",
            "range": "± 55718.64768088133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2033413.78125,
            "unit": "ns",
            "range": "± 94214.83738344764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1745978.2386363635,
            "unit": "ns",
            "range": "± 95223.06059723988"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8398408.153846154,
            "unit": "ns",
            "range": "± 182126.28452405048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3820651.3203125,
            "unit": "ns",
            "range": "± 7920.969880242132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1223610.47265625,
            "unit": "ns",
            "range": "± 3382.0782119590367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767736.0892578125,
            "unit": "ns",
            "range": "± 1094.9549969240304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943969.8367745536,
            "unit": "ns",
            "range": "± 3049.7174932427874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617777.1731770834,
            "unit": "ns",
            "range": "± 928.6648887644578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572830.7861328125,
            "unit": "ns",
            "range": "± 441.1381870780207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32354.428571428572,
            "unit": "ns",
            "range": "± 345.49222729444887"
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
          "id": "61b99e1d12bb7ab31a50f3495b011f695f69e581",
          "message": "WIP",
          "timestamp": "2024-08-14T17:51:23+09:00",
          "tree_id": "ace2c4ed9191b0025ea04f67f54d95e6ade2d225",
          "url": "https://github.com/planetarium/libplanet/commit/61b99e1d12bb7ab31a50f3495b011f695f69e581"
        },
        "date": 1723626054660,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203778.31176470587,
            "unit": "ns",
            "range": "± 10935.211579913714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200647.00515463916,
            "unit": "ns",
            "range": "± 13470.864888191503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172878.98245614034,
            "unit": "ns",
            "range": "± 7151.390203238279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3216268.2666666666,
            "unit": "ns",
            "range": "± 34492.53472951309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2920443.5,
            "unit": "ns",
            "range": "± 55231.278955558024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15074.372340425532,
            "unit": "ns",
            "range": "± 1833.6619743605877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69064,
            "unit": "ns",
            "range": "± 10149.348268142208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50984.66071428572,
            "unit": "ns",
            "range": "± 2042.0672794257534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67739.1530612245,
            "unit": "ns",
            "range": "± 12666.506738470247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3474.3125,
            "unit": "ns",
            "range": "± 558.9932550671128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13216.807692307691,
            "unit": "ns",
            "range": "± 1739.212265444763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2461279.8571428573,
            "unit": "ns",
            "range": "± 67882.1103546513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2626012.1333333333,
            "unit": "ns",
            "range": "± 48202.24356050936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3064838.6428571427,
            "unit": "ns",
            "range": "± 29401.082972223325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2632623.5,
            "unit": "ns",
            "range": "± 89472.91876973544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3406397.814814815,
            "unit": "ns",
            "range": "± 94915.19096866545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10938336,
            "unit": "ns",
            "range": "± 117134.50719822673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27556839.133333333,
            "unit": "ns",
            "range": "± 175887.9133351963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70893848.66666667,
            "unit": "ns",
            "range": "± 524724.6141425951"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139159299.14285713,
            "unit": "ns",
            "range": "± 576208.9153232342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287465964.78571427,
            "unit": "ns",
            "range": "± 1043760.8105292522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1057417.9,
            "unit": "ns",
            "range": "± 50552.89952446284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2068864.0606060605,
            "unit": "ns",
            "range": "± 58815.0423578757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1782809.894736842,
            "unit": "ns",
            "range": "± 115862.24371654194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8609558.578947369,
            "unit": "ns",
            "range": "± 293353.667754367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3665262.209542411,
            "unit": "ns",
            "range": "± 7886.786922125158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203876.8537760417,
            "unit": "ns",
            "range": "± 1768.7509952333805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765383.4904296875,
            "unit": "ns",
            "range": "± 1755.256224408852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1938962.7110677084,
            "unit": "ns",
            "range": "± 2202.3948170803674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632839.3641276042,
            "unit": "ns",
            "range": "± 455.5780106025964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558278.6583333333,
            "unit": "ns",
            "range": "± 1246.5624854183764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32882.21428571428,
            "unit": "ns",
            "range": "± 364.9706370847742"
          }
        ]
      }
    ]
  }
}