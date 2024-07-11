window.BENCHMARK_DATA = {
  "lastUpdate": 1720688430806,
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
          "id": "64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:10:54+09:00",
          "tree_id": "d2bb4fcb759803a572b4d3bbb8e669c9c9e9e90f",
          "url": "https://github.com/planetarium/libplanet/commit/64b3fd5f45a21b7d85502a2a1e1383e01e4f5f8e"
        },
        "date": 1720686052556,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 967953.7634408602,
            "unit": "ns",
            "range": "± 73432.87760163342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1749167.2413793104,
            "unit": "ns",
            "range": "± 76007.58535075953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1592514.7727272727,
            "unit": "ns",
            "range": "± 125358.19991131505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7066570,
            "unit": "ns",
            "range": "± 342191.7211366937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29450,
            "unit": "ns",
            "range": "± 458.257569495584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9748830.76923077,
            "unit": "ns",
            "range": "± 47026.4178346488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23647278.57142857,
            "unit": "ns",
            "range": "± 197936.06360318797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59131650,
            "unit": "ns",
            "range": "± 211891.09230923324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115122853.33333333,
            "unit": "ns",
            "range": "± 895824.1471777074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237026192.85714287,
            "unit": "ns",
            "range": "± 1184821.4798761138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3317732.784598214,
            "unit": "ns",
            "range": "± 7371.385916716392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1062530.8333333333,
            "unit": "ns",
            "range": "± 2003.9925096232444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 727575.4657451923,
            "unit": "ns",
            "range": "± 1547.5998503280875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1920691.8229166667,
            "unit": "ns",
            "range": "± 4337.214007235289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636589.3624441965,
            "unit": "ns",
            "range": "± 1843.3386971175742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 556606.5592447916,
            "unit": "ns",
            "range": "± 725.8980093413963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2196525,
            "unit": "ns",
            "range": "± 56611.68453673638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2247490.476190476,
            "unit": "ns",
            "range": "± 51930.64514101385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2707504.5454545454,
            "unit": "ns",
            "range": "± 85740.52823384156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2437578.125,
            "unit": "ns",
            "range": "± 73259.48021609393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2962593.3333333335,
            "unit": "ns",
            "range": "± 47819.50389099569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 171993.75,
            "unit": "ns",
            "range": "± 7524.77126161869"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164383.33333333334,
            "unit": "ns",
            "range": "± 8151.366702367515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147023.07692307694,
            "unit": "ns",
            "range": "± 3559.809847989939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2694873.3333333335,
            "unit": "ns",
            "range": "± 43818.26864067847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2378926.6666666665,
            "unit": "ns",
            "range": "± 34253.22647298388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9811.95652173913,
            "unit": "ns",
            "range": "± 1133.2965036219935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50942.69662921348,
            "unit": "ns",
            "range": "± 3503.20916642705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45364.28571428572,
            "unit": "ns",
            "range": "± 2216.606344234404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48610.11235955056,
            "unit": "ns",
            "range": "± 6256.742634656054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2562.8865979381444,
            "unit": "ns",
            "range": "± 574.5142128407388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9702.222222222223,
            "unit": "ns",
            "range": "± 815.0243365467963"
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
          "id": "6e1fe7348b6ded380e6493d0ba9016a96cb71a91",
          "message": "fix: Fix an issue with the evidence hash changing depending on the version.",
          "timestamp": "2024-07-11T17:48:22+09:00",
          "tree_id": "adb2d6ed113ff6e484048258a03174ce20c11253",
          "url": "https://github.com/planetarium/libplanet/commit/6e1fe7348b6ded380e6493d0ba9016a96cb71a91"
        },
        "date": 1720688256872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 958597.8723404255,
            "unit": "ns",
            "range": "± 58927.91838608302"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1820165.7534246575,
            "unit": "ns",
            "range": "± 90178.95975838833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1596456.5217391304,
            "unit": "ns",
            "range": "± 108948.19446819044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6860957.142857143,
            "unit": "ns",
            "range": "± 162073.31233558647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 29903.030303030304,
            "unit": "ns",
            "range": "± 955.4072588708076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9659360,
            "unit": "ns",
            "range": "± 119073.78144903028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23595292.85714286,
            "unit": "ns",
            "range": "± 229047.69561847128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58952707.14285714,
            "unit": "ns",
            "range": "± 291819.6906792478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117270792.3076923,
            "unit": "ns",
            "range": "± 488685.0561481946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235027233.33333334,
            "unit": "ns",
            "range": "± 2062538.0151186362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3412182.6923076925,
            "unit": "ns",
            "range": "± 7359.719153147032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073429.5052083333,
            "unit": "ns",
            "range": "± 3637.433083539379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736463.76953125,
            "unit": "ns",
            "range": "± 1434.3874330335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962849.0384615385,
            "unit": "ns",
            "range": "± 3517.4859390949623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618084.43359375,
            "unit": "ns",
            "range": "± 1753.3199091408983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555823.9973958334,
            "unit": "ns",
            "range": "± 1555.67546640086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2154113.0434782607,
            "unit": "ns",
            "range": "± 40534.69113945179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2275324.242424242,
            "unit": "ns",
            "range": "± 71895.82754888767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2772778.5714285714,
            "unit": "ns",
            "range": "± 48313.13213054745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2270668.1818181816,
            "unit": "ns",
            "range": "± 74361.17320442347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2922107.1428571427,
            "unit": "ns",
            "range": "± 47327.89816857437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173260.41666666666,
            "unit": "ns",
            "range": "± 5949.27993437766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 166415.87301587302,
            "unit": "ns",
            "range": "± 7225.117620411189"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143469.23076923078,
            "unit": "ns",
            "range": "± 3784.7873631969587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2682893.3333333335,
            "unit": "ns",
            "range": "± 40641.06766501565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2418527.777777778,
            "unit": "ns",
            "range": "± 50323.504104538246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9948.936170212766,
            "unit": "ns",
            "range": "± 1080.6951845471758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50928.260869565216,
            "unit": "ns",
            "range": "± 3508.9939726978737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44327.77777777778,
            "unit": "ns",
            "range": "± 735.4914767815469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51125,
            "unit": "ns",
            "range": "± 9219.864138740988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2292.222222222222,
            "unit": "ns",
            "range": "± 248.6944688296604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9868.478260869566,
            "unit": "ns",
            "range": "± 901.5163474929016"
          }
        ]
      }
    ]
  }
}