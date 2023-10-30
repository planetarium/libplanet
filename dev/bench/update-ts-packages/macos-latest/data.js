window.BENCHMARK_DATA = {
  "lastUpdate": 1698647717512,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "a381be89165f734ede0b4e80f1913b9bb346623f",
          "message": "WebCrypto Export",
          "timestamp": "2023-10-30T14:25:11+09:00",
          "tree_id": "f5448df3776d0350106e7cc9f5afdd6618627f63",
          "url": "https://github.com/planetarium/libplanet/commit/a381be89165f734ede0b4e80f1913b9bb346623f"
        },
        "date": 1698644971873,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11918384.126582278,
            "unit": "ns",
            "range": "± 616968.9757712414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21593999.68831169,
            "unit": "ns",
            "range": "± 1101382.2641227425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54815391.584745765,
            "unit": "ns",
            "range": "± 2409889.70476295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109911586.64102565,
            "unit": "ns",
            "range": "± 3841571.7267430676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224555461.8181818,
            "unit": "ns",
            "range": "± 5243510.838542839"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73068.30952380953,
            "unit": "ns",
            "range": "± 5171.603016325056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341838.3333333333,
            "unit": "ns",
            "range": "± 37942.03324275338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335532.1979166667,
            "unit": "ns",
            "range": "± 42702.29879553997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300685.3076923077,
            "unit": "ns",
            "range": "± 10355.69054383512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4645523.453488372,
            "unit": "ns",
            "range": "± 472700.04053439776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4102398.397959184,
            "unit": "ns",
            "range": "± 354161.4911070803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25209.534090909092,
            "unit": "ns",
            "range": "± 3770.2002262414244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110462.05494505494,
            "unit": "ns",
            "range": "± 11086.040876668718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112700.33333333333,
            "unit": "ns",
            "range": "± 8248.859548611139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110540.1888888889,
            "unit": "ns",
            "range": "± 10464.02407571669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7579.03125,
            "unit": "ns",
            "range": "± 1301.7644378476225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24046.077777777777,
            "unit": "ns",
            "range": "± 3775.2141608357515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500865.6030927836,
            "unit": "ns",
            "range": "± 145581.28033296415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2863185.410714286,
            "unit": "ns",
            "range": "± 121298.78077057596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2480770.4897959186,
            "unit": "ns",
            "range": "± 356020.7981308055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10675970.985714287,
            "unit": "ns",
            "range": "± 515516.3935058117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3475393.3854166665,
            "unit": "ns",
            "range": "± 331349.9750460823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3592626.515789474,
            "unit": "ns",
            "range": "± 304448.6418342168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4631530.381443299,
            "unit": "ns",
            "range": "± 369946.56378721446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4576980.161616161,
            "unit": "ns",
            "range": "± 451983.05943756906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16140473.051020408,
            "unit": "ns",
            "range": "± 1900000.1195388855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6381779.009296875,
            "unit": "ns",
            "range": "± 444940.4478133262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2032416.5164331896,
            "unit": "ns",
            "range": "± 59469.014898207395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183914.230078125,
            "unit": "ns",
            "range": "± 18737.826740336266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2934700.3713378906,
            "unit": "ns",
            "range": "± 90285.42478288719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812708.3995442708,
            "unit": "ns",
            "range": "± 11051.392519162087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809441.494921875,
            "unit": "ns",
            "range": "± 10810.434750320068"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "153f10d1a5dcf12948f46957c81beb7853fb3d83",
          "message": "yarn upgrade (4.0.1)",
          "timestamp": "2023-10-30T14:47:58+09:00",
          "tree_id": "e2fc737c227c1dd8d8923e12dbb9a0f244f2acda",
          "url": "https://github.com/planetarium/libplanet/commit/153f10d1a5dcf12948f46957c81beb7853fb3d83"
        },
        "date": 1698646021588,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7611622.708333333,
            "unit": "ns",
            "range": "± 146944.7779717677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19108436.875,
            "unit": "ns",
            "range": "± 493302.1796818389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47806946.11111111,
            "unit": "ns",
            "range": "± 1004114.0786549919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92709008.28571428,
            "unit": "ns",
            "range": "± 1032359.9677967264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193573463.56,
            "unit": "ns",
            "range": "± 5066124.386359097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42097.845360824744,
            "unit": "ns",
            "range": "± 10448.01366522624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219686.06701030929,
            "unit": "ns",
            "range": "± 16144.635671864313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222864.6875,
            "unit": "ns",
            "range": "± 21348.784319050013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 197126.32291666666,
            "unit": "ns",
            "range": "± 18058.612684078882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3723843.625,
            "unit": "ns",
            "range": "± 94420.43567852685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3572251.96875,
            "unit": "ns",
            "range": "± 107854.0573309179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13721.053191489362,
            "unit": "ns",
            "range": "± 2258.3227700440393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61891.602040816324,
            "unit": "ns",
            "range": "± 7691.68978356471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51983.73376623377,
            "unit": "ns",
            "range": "± 2555.5998106125166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62773.385416666664,
            "unit": "ns",
            "range": "± 10814.772861687405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3253.448275862069,
            "unit": "ns",
            "range": "± 508.2736115066074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12214.640449438202,
            "unit": "ns",
            "range": "± 1155.1679850999142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1105947.22,
            "unit": "ns",
            "range": "± 131412.6827711185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2202566.0076923077,
            "unit": "ns",
            "range": "± 102500.62520649616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1610811.2448979593,
            "unit": "ns",
            "range": "± 121002.86119119197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7781714.209876543,
            "unit": "ns",
            "range": "± 566866.6646922077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2892954.4615384615,
            "unit": "ns",
            "range": "± 97984.27370726016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3198799.8229166665,
            "unit": "ns",
            "range": "± 256735.07104086457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3622980.8055555555,
            "unit": "ns",
            "range": "± 118538.00429442013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3531476.0804597703,
            "unit": "ns",
            "range": "± 190454.08136408537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11090113.08064516,
            "unit": "ns",
            "range": "± 1139242.270616196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4999401.491319444,
            "unit": "ns",
            "range": "± 245493.63494340747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567897.9580636162,
            "unit": "ns",
            "range": "± 50827.47123452103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023435.8562858737,
            "unit": "ns",
            "range": "± 85395.78362674282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2445456.625,
            "unit": "ns",
            "range": "± 254065.36671555086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 713972.5435325387,
            "unit": "ns",
            "range": "± 72542.71601637955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 664823.161828873,
            "unit": "ns",
            "range": "± 68182.84886806173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "committer": {
            "email": "akamig@posteo.net",
            "name": "Akamig",
            "username": "Akamig"
          },
          "distinct": true,
          "id": "cf8e10509c02d89de48f6ebe2c11e23be726c70d",
          "message": "Use NodeNext (implies EsNext)",
          "timestamp": "2023-10-30T15:12:24+09:00",
          "tree_id": "affbedf496d272d446e7be97a62d12dd1f674a6c",
          "url": "https://github.com/planetarium/libplanet/commit/cf8e10509c02d89de48f6ebe2c11e23be726c70d"
        },
        "date": 1698647633066,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7589153.384615385,
            "unit": "ns",
            "range": "± 100846.71021699093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19258491.756097563,
            "unit": "ns",
            "range": "± 682878.6719161677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47243898.692307696,
            "unit": "ns",
            "range": "± 1280629.082190562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91952715.28571428,
            "unit": "ns",
            "range": "± 826280.2724838057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193569637.2352941,
            "unit": "ns",
            "range": "± 6066159.506114852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39434.108695652176,
            "unit": "ns",
            "range": "± 6922.865041560454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222695.81914893616,
            "unit": "ns",
            "range": "± 15586.952363361284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247439.15789473685,
            "unit": "ns",
            "range": "± 22052.704128256497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247032.36021505378,
            "unit": "ns",
            "range": "± 24310.229616621404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291134.40625,
            "unit": "ns",
            "range": "± 253015.32995099758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4083099.7934782607,
            "unit": "ns",
            "range": "± 281439.2913282197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17698.86842105263,
            "unit": "ns",
            "range": "± 2808.476527474485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83502.5,
            "unit": "ns",
            "range": "± 13350.70767913476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79740.4,
            "unit": "ns",
            "range": "± 11642.51474571775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81460.25,
            "unit": "ns",
            "range": "± 11980.924207709484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6270.371134020618,
            "unit": "ns",
            "range": "± 2313.802391445319"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18344.617021276597,
            "unit": "ns",
            "range": "± 4844.506847870276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630376.829787234,
            "unit": "ns",
            "range": "± 459410.06807855645"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2743323.88172043,
            "unit": "ns",
            "range": "± 231344.45871206716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1988285.7209302327,
            "unit": "ns",
            "range": "± 148351.63763561312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10837287.505263157,
            "unit": "ns",
            "range": "± 2654288.6887805155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3089683.9680851065,
            "unit": "ns",
            "range": "± 236973.9309722935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2983493.342857143,
            "unit": "ns",
            "range": "± 134355.32185420647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3556132.4814814813,
            "unit": "ns",
            "range": "± 96387.70165022665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3510739.85483871,
            "unit": "ns",
            "range": "± 157498.16666069033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11252294.337078651,
            "unit": "ns",
            "range": "± 1065389.794691904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5126799.880651596,
            "unit": "ns",
            "range": "± 572838.040951059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1682439.6897615131,
            "unit": "ns",
            "range": "± 214736.2098246492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043592.0425390624,
            "unit": "ns",
            "range": "± 117369.72217141265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574214.8456439395,
            "unit": "ns",
            "range": "± 383034.75865276967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 752966.0990878019,
            "unit": "ns",
            "range": "± 48191.10723817983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 671491.5948998235,
            "unit": "ns",
            "range": "± 30361.799628349807"
          }
        ]
      }
    ]
  }
}