window.BENCHMARK_DATA = {
  "lastUpdate": 1680163140173,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "12163fe108b4505f0d99df93d9f203433580d4da",
          "message": "WIP",
          "timestamp": "2023-03-24T18:58:26+09:00",
          "tree_id": "826e80a5e0b2b83e09fc95e946af26b77acc2356",
          "url": "https://github.com/planetarium/libplanet/commit/12163fe108b4505f0d99df93d9f203433580d4da"
        },
        "date": 1679653082470,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8702710.078947369,
            "unit": "ns",
            "range": "± 293195.0496346022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21788926.33870968,
            "unit": "ns",
            "range": "± 624266.8576730145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51774477.741935484,
            "unit": "ns",
            "range": "± 1201282.286283452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111829414.21052632,
            "unit": "ns",
            "range": "± 1975066.4222609373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235844566.1818182,
            "unit": "ns",
            "range": "± 11071561.192764502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75608.93181818182,
            "unit": "ns",
            "range": "± 5767.607882385295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 347079.875,
            "unit": "ns",
            "range": "± 28496.605706045142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339991.75531914894,
            "unit": "ns",
            "range": "± 44008.20793938628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311797.5729166667,
            "unit": "ns",
            "range": "± 36282.44654019345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4813631.552083333,
            "unit": "ns",
            "range": "± 368335.7770353987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4445463.132653061,
            "unit": "ns",
            "range": "± 313872.3566985024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20158.427835051545,
            "unit": "ns",
            "range": "± 3447.5631316658014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92863.6052631579,
            "unit": "ns",
            "range": "± 16598.979915128646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104888.82631578947,
            "unit": "ns",
            "range": "± 17662.016331148232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271202.04347826086,
            "unit": "ns",
            "range": "± 35518.12703686499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8916.58510638298,
            "unit": "ns",
            "range": "± 1560.3603227347976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20135.531914893618,
            "unit": "ns",
            "range": "± 3563.4361194590133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1663321.9393939395,
            "unit": "ns",
            "range": "± 214334.01134910042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956879.6481481483,
            "unit": "ns",
            "range": "± 121632.53426770035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471385.085106383,
            "unit": "ns",
            "range": "± 139294.171786671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6577324.653846154,
            "unit": "ns",
            "range": "± 178640.65007963718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3754290.6555555556,
            "unit": "ns",
            "range": "± 389331.62321220984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3782744.2083333335,
            "unit": "ns",
            "range": "± 378824.69422450924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4570733.387096774,
            "unit": "ns",
            "range": "± 206696.75306715255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5154281.934065934,
            "unit": "ns",
            "range": "± 873896.8202363073"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10253571.516129032,
            "unit": "ns",
            "range": "± 1053701.6331969944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6924208.615274235,
            "unit": "ns",
            "range": "± 418575.58542385045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2135697.1108072917,
            "unit": "ns",
            "range": "± 63468.956729351274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1422132.3902803308,
            "unit": "ns",
            "range": "± 28181.76352018908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706971.396484375,
            "unit": "ns",
            "range": "± 149945.59591036712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 892138.5196484375,
            "unit": "ns",
            "range": "± 23057.253483917626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800329.3404756434,
            "unit": "ns",
            "range": "± 16344.494848615535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "93bbbf10f6e654bff312e1d71d40c8ee1c36d884",
          "message": "WIP",
          "timestamp": "2023-03-27T13:14:26+09:00",
          "tree_id": "ba5ebada552297745c2adbf08bfb456eb2452192",
          "url": "https://github.com/planetarium/libplanet/commit/93bbbf10f6e654bff312e1d71d40c8ee1c36d884"
        },
        "date": 1679891362517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7933119.7441860465,
            "unit": "ns",
            "range": "± 292531.9275760131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18872564.88,
            "unit": "ns",
            "range": "± 468263.8398021746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47759718.43478261,
            "unit": "ns",
            "range": "± 1202696.8872884966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97295823.02,
            "unit": "ns",
            "range": "± 4888374.573357691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195487501.75,
            "unit": "ns",
            "range": "± 2373321.9998186324"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69798.37894736842,
            "unit": "ns",
            "range": "± 9424.410219346926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325509.0894736842,
            "unit": "ns",
            "range": "± 26822.906479150424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297756.48,
            "unit": "ns",
            "range": "± 11976.751946728687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279677.8333333333,
            "unit": "ns",
            "range": "± 16904.34320314825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4255186,
            "unit": "ns",
            "range": "± 107322.78220194079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3799279.6666666665,
            "unit": "ns",
            "range": "± 98443.26663030923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18369.045977011494,
            "unit": "ns",
            "range": "± 1662.6846035507726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100849.86,
            "unit": "ns",
            "range": "± 15332.630849863366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95044.89690721649,
            "unit": "ns",
            "range": "± 14836.288444276122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 230374.9301075269,
            "unit": "ns",
            "range": "± 20279.542023491606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6089.460674157303,
            "unit": "ns",
            "range": "± 1025.6107720876705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17785.440860215054,
            "unit": "ns",
            "range": "± 1996.9556692210354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1685532.1224489796,
            "unit": "ns",
            "range": "± 208195.57223552975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3010978.1779661016,
            "unit": "ns",
            "range": "± 130175.96678825388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2730992.210526316,
            "unit": "ns",
            "range": "± 235133.01188683923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6715779.346153846,
            "unit": "ns",
            "range": "± 182009.5456515822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3105531.414893617,
            "unit": "ns",
            "range": "± 116029.29077979477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3278447.8484848486,
            "unit": "ns",
            "range": "± 153099.11186028304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277458.083333333,
            "unit": "ns",
            "range": "± 176098.23058527338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470791.316666666,
            "unit": "ns",
            "range": "± 198235.4788012882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8867355.666666666,
            "unit": "ns",
            "range": "± 319589.0785406951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6250317.177884615,
            "unit": "ns",
            "range": "± 41471.7172896617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954152.9095552885,
            "unit": "ns",
            "range": "± 15873.772329623702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223643.3329326923,
            "unit": "ns",
            "range": "± 3849.525733627924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2402634.9754464286,
            "unit": "ns",
            "range": "± 15003.869753075216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835415.1423688616,
            "unit": "ns",
            "range": "± 3856.6530837768005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699873.3738839285,
            "unit": "ns",
            "range": "± 4735.683253318222"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "9f69d9779586c45eab916afe354cddb92110b490",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T15:49:56+09:00",
          "tree_id": "59d858b6e6543dafab428524506d74ffd69733e1",
          "url": "https://github.com/planetarium/libplanet/commit/9f69d9779586c45eab916afe354cddb92110b490"
        },
        "date": 1679900937403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9077501.594736842,
            "unit": "ns",
            "range": "± 755947.2090395623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23748271.9,
            "unit": "ns",
            "range": "± 3061080.918838506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55536042.9,
            "unit": "ns",
            "range": "± 1940432.906820442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121753685.90845071,
            "unit": "ns",
            "range": "± 5924329.866428835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209062959.9722222,
            "unit": "ns",
            "range": "± 6770431.533446385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69260.68085106384,
            "unit": "ns",
            "range": "± 9373.161974618015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372993.6458333333,
            "unit": "ns",
            "range": "± 55685.619071237146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 352227.2967032967,
            "unit": "ns",
            "range": "± 44758.404830699306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310845.4505494505,
            "unit": "ns",
            "range": "± 25371.89414873769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433189.571428572,
            "unit": "ns",
            "range": "± 125626.87219004527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4409357.073684211,
            "unit": "ns",
            "range": "± 429533.01219499175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23948.36170212766,
            "unit": "ns",
            "range": "± 4403.830609799588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110582.5,
            "unit": "ns",
            "range": "± 24203.480557598337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102799.14285714286,
            "unit": "ns",
            "range": "± 16623.673506959265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248943.64516129033,
            "unit": "ns",
            "range": "± 24745.915096209475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7597.903225806452,
            "unit": "ns",
            "range": "± 1760.838461744588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22686.626315789475,
            "unit": "ns",
            "range": "± 4516.206095221173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641567.702020202,
            "unit": "ns",
            "range": "± 186430.47228784507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3048872.7837837837,
            "unit": "ns",
            "range": "± 152868.96992267508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2500603.9081632653,
            "unit": "ns",
            "range": "± 202557.88229850345"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6845161.875,
            "unit": "ns",
            "range": "± 285062.70540787483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3670325.1914893617,
            "unit": "ns",
            "range": "± 379080.5324252448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3703489.4270833335,
            "unit": "ns",
            "range": "± 308790.4616973593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4875918.826530612,
            "unit": "ns",
            "range": "± 414474.0105889962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4925078.1,
            "unit": "ns",
            "range": "± 465133.0255845247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9542257.58064516,
            "unit": "ns",
            "range": "± 641713.29529438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7627087.104403409,
            "unit": "ns",
            "range": "± 239580.982229464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2162452.2669921876,
            "unit": "ns",
            "range": "± 48192.35013899359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384146.4388950893,
            "unit": "ns",
            "range": "± 32509.24259211905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2760722.425841656,
            "unit": "ns",
            "range": "± 180579.04248674156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 923202.1900137442,
            "unit": "ns",
            "range": "± 38663.93116279172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 778814.1070963541,
            "unit": "ns",
            "range": "± 21293.3324176341"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "208861e57356cf7ef97bee1a0e0fbd0b798b4879",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-27T18:08:33+09:00",
          "tree_id": "5a4efceefc64fc75df57dbae61720ea87d3d8fd5",
          "url": "https://github.com/planetarium/libplanet/commit/208861e57356cf7ef97bee1a0e0fbd0b798b4879"
        },
        "date": 1679909169005,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7970347.838028169,
            "unit": "ns",
            "range": "± 386324.6128102984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18916104.586206898,
            "unit": "ns",
            "range": "± 488786.0298799697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47982525.53703704,
            "unit": "ns",
            "range": "± 1927940.1457429794"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110102719.26315789,
            "unit": "ns",
            "range": "± 8557303.768739678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226991279.99382716,
            "unit": "ns",
            "range": "± 12824956.361779371"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68793.77173913043,
            "unit": "ns",
            "range": "± 8614.805261558566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342670.33684210526,
            "unit": "ns",
            "range": "± 32154.743255743426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325455.47826086957,
            "unit": "ns",
            "range": "± 29725.478290767784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291225.0833333333,
            "unit": "ns",
            "range": "± 26430.511060899877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283880.35,
            "unit": "ns",
            "range": "± 93847.32287535458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915998.9285714286,
            "unit": "ns",
            "range": "± 63793.052652203536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16432.58620689655,
            "unit": "ns",
            "range": "± 1444.4677828257338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89965.67368421053,
            "unit": "ns",
            "range": "± 12243.79979473945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102777.23469387754,
            "unit": "ns",
            "range": "± 10735.25331552426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248404.21276595743,
            "unit": "ns",
            "range": "± 21482.219738544336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7028.621052631579,
            "unit": "ns",
            "range": "± 1241.6712757404352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17387.594736842104,
            "unit": "ns",
            "range": "± 2307.3202660398892"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660171.857142857,
            "unit": "ns",
            "range": "± 187586.5681504376"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3321010.8131313133,
            "unit": "ns",
            "range": "± 301409.221695953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2591995.8484848486,
            "unit": "ns",
            "range": "± 209748.72946959527"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6720621.171428571,
            "unit": "ns",
            "range": "± 220382.3371336713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3517453.4270833335,
            "unit": "ns",
            "range": "± 346655.23312342743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3702659.0215053763,
            "unit": "ns",
            "range": "± 397105.7505708726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4799607.742268041,
            "unit": "ns",
            "range": "± 313439.5607850591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4650403.635416667,
            "unit": "ns",
            "range": "± 339361.0326343231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9183732.491525425,
            "unit": "ns",
            "range": "± 401183.807880755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6541619.007254465,
            "unit": "ns",
            "range": "± 45352.721053085144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1941921.6480189732,
            "unit": "ns",
            "range": "± 31103.510422653042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1246703.8385799632,
            "unit": "ns",
            "range": "± 21124.588216459524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555023.39453125,
            "unit": "ns",
            "range": "± 30386.359253883016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 755115.990234375,
            "unit": "ns",
            "range": "± 4039.3247286959563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 696323.6796875,
            "unit": "ns",
            "range": "± 4400.514681238543"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "fc2efd2d2be395c0acfd766af4437b99d4474fb4",
          "message": "Introduce TxInvoice & UnsignedTx\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-29T17:19:27+09:00",
          "tree_id": "eacb9ba09861dfee507f30a8055141ba3f5ec132",
          "url": "https://github.com/planetarium/libplanet/commit/fc2efd2d2be395c0acfd766af4437b99d4474fb4"
        },
        "date": 1680079040698,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8637544.67142857,
            "unit": "ns",
            "range": "± 280499.0730315485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22638818.6875,
            "unit": "ns",
            "range": "± 437158.8134686247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51963293.71428572,
            "unit": "ns",
            "range": "± 595943.0241365269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103442533.66666667,
            "unit": "ns",
            "range": "± 1131176.0927007194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220982124.3970588,
            "unit": "ns",
            "range": "± 9799059.90805465"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75571.3021978022,
            "unit": "ns",
            "range": "± 7255.09556904629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 446130.63684210525,
            "unit": "ns",
            "range": "± 54318.42711891209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332012.3314606742,
            "unit": "ns",
            "range": "± 25742.19922098023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327010.5119047619,
            "unit": "ns",
            "range": "± 19356.177069214787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5935825.855421687,
            "unit": "ns",
            "range": "± 315171.247440999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4196807.276923077,
            "unit": "ns",
            "range": "± 195808.15339242993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21391.304347826088,
            "unit": "ns",
            "range": "± 4539.916224330239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110696.72727272728,
            "unit": "ns",
            "range": "± 14620.019963763963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123513.24444444444,
            "unit": "ns",
            "range": "± 10936.537780273553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 257714.38202247192,
            "unit": "ns",
            "range": "± 19557.348229284336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8781.177419354839,
            "unit": "ns",
            "range": "± 1002.6713359092985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21445.21111111111,
            "unit": "ns",
            "range": "± 3602.985008542954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642246.4343434344,
            "unit": "ns",
            "range": "± 206966.02362313156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3080132.0862068967,
            "unit": "ns",
            "range": "± 134287.40564452816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650065.8125,
            "unit": "ns",
            "range": "± 244930.3639650435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7475801.663157894,
            "unit": "ns",
            "range": "± 563141.4927056399"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310878.1063829786,
            "unit": "ns",
            "range": "± 128951.306378101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3801999.804347826,
            "unit": "ns",
            "range": "± 585388.1037827911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4552986.659090909,
            "unit": "ns",
            "range": "± 168599.5166114816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4594297.407216495,
            "unit": "ns",
            "range": "± 350535.21812874125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9737527.613402061,
            "unit": "ns",
            "range": "± 869984.5799833164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7563688.9276889535,
            "unit": "ns",
            "range": "± 273668.6632462636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2081976.7628348214,
            "unit": "ns",
            "range": "± 32264.006151253707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370025.006610577,
            "unit": "ns",
            "range": "± 22368.34080376061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2725758.804387019,
            "unit": "ns",
            "range": "± 34146.76454167276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846371.9623161765,
            "unit": "ns",
            "range": "± 16982.035471499414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775717.8468338816,
            "unit": "ns",
            "range": "± 15616.561396005065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "f0b1c84db8ae7131e693f29534eda43ea0da7686",
          "message": "Extension methods to refine transactions\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-29T17:55:11+09:00",
          "tree_id": "577fbd86f3997028bf41a163a6c9b68c4bf9852f",
          "url": "https://github.com/planetarium/libplanet/commit/f0b1c84db8ae7131e693f29534eda43ea0da7686"
        },
        "date": 1680081382392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8576256.136363637,
            "unit": "ns",
            "range": "± 271744.4224042163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22217043.5,
            "unit": "ns",
            "range": "± 340112.4446619993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55982419.38888889,
            "unit": "ns",
            "range": "± 1057379.9166518732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122748829.87931034,
            "unit": "ns",
            "range": "± 3542361.891120199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226983195.62068966,
            "unit": "ns",
            "range": "± 6587164.621595673"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69529.63541666667,
            "unit": "ns",
            "range": "± 9988.34465724905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 454035.6170212766,
            "unit": "ns",
            "range": "± 31786.77160954106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369957.4791666667,
            "unit": "ns",
            "range": "± 27057.07846833554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329055.2268041237,
            "unit": "ns",
            "range": "± 21492.071605742367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6402800.5,
            "unit": "ns",
            "range": "± 58717.08886377426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4535585.071428572,
            "unit": "ns",
            "range": "± 146166.60266431785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19685.058823529413,
            "unit": "ns",
            "range": "± 2068.5792245895154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102149.88421052632,
            "unit": "ns",
            "range": "± 10885.522624366691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88066.10309278351,
            "unit": "ns",
            "range": "± 9760.85274886854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 233553.86458333334,
            "unit": "ns",
            "range": "± 29460.767916929017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6466.380434782609,
            "unit": "ns",
            "range": "± 948.2152099856659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18161.329411764706,
            "unit": "ns",
            "range": "± 1861.4850918927439"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1877205.3684210526,
            "unit": "ns",
            "range": "± 176300.08984411685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3553523.126984127,
            "unit": "ns",
            "range": "± 162871.7637544941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2998510.967391304,
            "unit": "ns",
            "range": "± 218937.80921533384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8082382.592592592,
            "unit": "ns",
            "range": "± 222247.8932942048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3802821.7666666666,
            "unit": "ns",
            "range": "± 113020.25587132396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4168841.3,
            "unit": "ns",
            "range": "± 72483.4118118464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5195291.117647059,
            "unit": "ns",
            "range": "± 211995.5072050016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5213847.413978495,
            "unit": "ns",
            "range": "± 339595.95705964084"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10324047.476190476,
            "unit": "ns",
            "range": "± 373762.0941135005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7033645.127704327,
            "unit": "ns",
            "range": "± 71375.99800959209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2131795.9185697115,
            "unit": "ns",
            "range": "± 18061.73498742496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1451304.5209635417,
            "unit": "ns",
            "range": "± 15925.393755697583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2796587.0750558036,
            "unit": "ns",
            "range": "± 40581.10622465804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 904800.8111979166,
            "unit": "ns",
            "range": "± 13602.683828199986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860088.5668247768,
            "unit": "ns",
            "range": "± 9133.22871063161"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "committer": {
            "email": "hong.minhee@gmail.com",
            "name": "Hong Minhee",
            "username": "dahlia"
          },
          "distinct": true,
          "id": "d9c1b7b32375a59bc45d5df42bcd5cfaf8d82300",
          "message": "New JSON format for TxActionList\n\nCo-authored-by: Seo Myunggyun (Jonathan) <tkiapril@users.noreply.github.com>",
          "timestamp": "2023-03-30T16:39:23+09:00",
          "tree_id": "270ef202fb41f2681b6a6f12f85c335d986863db",
          "url": "https://github.com/planetarium/libplanet/commit/d9c1b7b32375a59bc45d5df42bcd5cfaf8d82300"
        },
        "date": 1680163093496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8535648.363636363,
            "unit": "ns",
            "range": "± 245900.3102071826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20659571.48837209,
            "unit": "ns",
            "range": "± 1330145.9204059353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49100075.11764706,
            "unit": "ns",
            "range": "± 995309.8546988949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95937883.07142857,
            "unit": "ns",
            "range": "± 1071508.2565300518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194347655.66666666,
            "unit": "ns",
            "range": "± 1925553.9515595993"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68400.63440860216,
            "unit": "ns",
            "range": "± 12761.675378788863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384367.6235955056,
            "unit": "ns",
            "range": "± 27754.128682143946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331505.8404255319,
            "unit": "ns",
            "range": "± 29648.438790536642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315974.1443298969,
            "unit": "ns",
            "range": "± 41222.84597187121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5856813.702702703,
            "unit": "ns",
            "range": "± 291829.27952358185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4435033.476190476,
            "unit": "ns",
            "range": "± 237080.88186879636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20474.23404255319,
            "unit": "ns",
            "range": "± 3763.995186927813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116552.01086956522,
            "unit": "ns",
            "range": "± 20612.486655974757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109059.09375,
            "unit": "ns",
            "range": "± 22328.717417653756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 262003.22164948453,
            "unit": "ns",
            "range": "± 36007.881942922766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6744.061855670103,
            "unit": "ns",
            "range": "± 1639.4337615878296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18664.78947368421,
            "unit": "ns",
            "range": "± 3543.110683694385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729340.5315789473,
            "unit": "ns",
            "range": "± 242678.09153443758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3063228.9811320757,
            "unit": "ns",
            "range": "± 111842.63193098434"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589979.2093023257,
            "unit": "ns",
            "range": "± 344128.67084692797"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7047258.243243244,
            "unit": "ns",
            "range": "± 338791.42163242685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3248561.103448276,
            "unit": "ns",
            "range": "± 89417.30913105648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3487680.802325581,
            "unit": "ns",
            "range": "± 187477.1434629594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4442210.613636363,
            "unit": "ns",
            "range": "± 164122.01887127192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4644669.391304348,
            "unit": "ns",
            "range": "± 116230.03712416759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8687220.94117647,
            "unit": "ns",
            "range": "± 277242.87431629887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7101818.694256756,
            "unit": "ns",
            "range": "± 239445.6740341175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2166955.8743990385,
            "unit": "ns",
            "range": "± 58853.39087963717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1418836.4596819195,
            "unit": "ns",
            "range": "± 23723.39411146751"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2821272.053059896,
            "unit": "ns",
            "range": "± 105661.4506831804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924082.3944091797,
            "unit": "ns",
            "range": "± 15290.655718375483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933313.7199622844,
            "unit": "ns",
            "range": "± 36881.03258388547"
          }
        ]
      }
    ]
  }
}