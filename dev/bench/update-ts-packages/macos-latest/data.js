window.BENCHMARK_DATA = {
  "lastUpdate": 1698660928407,
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
          "id": "ecf3e8d45c618765f46ab7dab8dea6cb293fa510",
          "message": "Add isDigest",
          "timestamp": "2023-10-30T15:23:12+09:00",
          "tree_id": "a71f804da94f8f0cbfcb113455d1dfd5b71d4d27",
          "url": "https://github.com/planetarium/libplanet/commit/ecf3e8d45c618765f46ab7dab8dea6cb293fa510"
        },
        "date": 1698647989508,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7529509.357142857,
            "unit": "ns",
            "range": "± 66946.53942295143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18686290.296296295,
            "unit": "ns",
            "range": "± 484942.1144932038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46277997.9,
            "unit": "ns",
            "range": "± 617793.6131448292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92651107.66666667,
            "unit": "ns",
            "range": "± 1670410.856150694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190812353.16666666,
            "unit": "ns",
            "range": "± 4525569.254247462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34291.91111111111,
            "unit": "ns",
            "range": "± 2658.8455070222176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217137.57142857142,
            "unit": "ns",
            "range": "± 14600.845615650604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221883.91397849462,
            "unit": "ns",
            "range": "± 21216.819882520154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 191761.4193548387,
            "unit": "ns",
            "range": "± 16157.301688550559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3703805.5,
            "unit": "ns",
            "range": "± 58374.313843219315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3437579.6621621624,
            "unit": "ns",
            "range": "± 114143.3469817457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12427.977528089888,
            "unit": "ns",
            "range": "± 940.060152542573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59482.3085106383,
            "unit": "ns",
            "range": "± 6565.584022334601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51581.34482758621,
            "unit": "ns",
            "range": "± 3423.2547338365816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57644.94565217391,
            "unit": "ns",
            "range": "± 5955.418091567166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3293.203296703297,
            "unit": "ns",
            "range": "± 361.45334705895596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11847.728260869566,
            "unit": "ns",
            "range": "± 1040.7042427850422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1066407.4,
            "unit": "ns",
            "range": "± 96625.51117415457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2165586.379310345,
            "unit": "ns",
            "range": "± 61050.452172429716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1633172.144329897,
            "unit": "ns",
            "range": "± 121323.43027497733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7747148.451219512,
            "unit": "ns",
            "range": "± 652098.375199081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2887380.3157894737,
            "unit": "ns",
            "range": "± 98249.61721900685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3006728.4210526315,
            "unit": "ns",
            "range": "± 130341.82019240622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3623607.8518518517,
            "unit": "ns",
            "range": "± 178903.53728022755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3528416.311688312,
            "unit": "ns",
            "range": "± 180789.45518055116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11184459.739130436,
            "unit": "ns",
            "range": "± 1146116.8508848648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5501215.137772121,
            "unit": "ns",
            "range": "± 507757.65396511933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510140.300489288,
            "unit": "ns",
            "range": "± 128392.79286117898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 945405.9722377232,
            "unit": "ns",
            "range": "± 58292.93584711441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1949243.0302083334,
            "unit": "ns",
            "range": "± 28705.460428425402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610971.8804036458,
            "unit": "ns",
            "range": "± 6579.742357031534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558043.5568498884,
            "unit": "ns",
            "range": "± 7712.282079568876"
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
          "id": "c73166861a28830884f5991f777063c8a63b6560",
          "message": "Add",
          "timestamp": "2023-10-30T15:27:28+09:00",
          "tree_id": "d956490b9c8b4fa8affdb6dffd32759f8d715160",
          "url": "https://github.com/planetarium/libplanet/commit/c73166861a28830884f5991f777063c8a63b6560"
        },
        "date": 1698648138687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8109920.942857143,
            "unit": "ns",
            "range": "± 246243.64636221854"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18874611.8,
            "unit": "ns",
            "range": "± 325219.6803968929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47214770.03333333,
            "unit": "ns",
            "range": "± 672163.2430091312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93583698.23076923,
            "unit": "ns",
            "range": "± 376572.7437548097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193033251.96666667,
            "unit": "ns",
            "range": "± 3321809.752823126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41751.40217391304,
            "unit": "ns",
            "range": "± 10122.205465995017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216709.02702702704,
            "unit": "ns",
            "range": "± 10822.769015219432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215875.12105263158,
            "unit": "ns",
            "range": "± 13932.10815040013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200685.48913043478,
            "unit": "ns",
            "range": "± 19221.2645005442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3749569.4285714286,
            "unit": "ns",
            "range": "± 57066.983635918565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3448775.625,
            "unit": "ns",
            "range": "± 52960.42739867193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13389.181318681318,
            "unit": "ns",
            "range": "± 1387.2132887284884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61271.768421052635,
            "unit": "ns",
            "range": "± 6416.639805428475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56013.13636363636,
            "unit": "ns",
            "range": "± 5119.39250208329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67072.97916666667,
            "unit": "ns",
            "range": "± 10365.389067752218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3984.4210526315787,
            "unit": "ns",
            "range": "± 1026.974668511759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12899.957894736843,
            "unit": "ns",
            "range": "± 1674.5346379001649"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1191070.175257732,
            "unit": "ns",
            "range": "± 114801.45704332784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2346101.8311688313,
            "unit": "ns",
            "range": "± 119280.97570149261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2041823.1263157895,
            "unit": "ns",
            "range": "± 436328.8724345005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8399186.626436781,
            "unit": "ns",
            "range": "± 1038589.8944401738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2895007.465116279,
            "unit": "ns",
            "range": "± 90871.08599348672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3050028.282051282,
            "unit": "ns",
            "range": "± 101055.78031488319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3632742.419354839,
            "unit": "ns",
            "range": "± 104154.05343137129"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3514413.386792453,
            "unit": "ns",
            "range": "± 131263.25729655774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11112585.241935484,
            "unit": "ns",
            "range": "± 987737.337936767"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4407557.920052083,
            "unit": "ns",
            "range": "± 50894.0800190324"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1348384.9537760417,
            "unit": "ns",
            "range": "± 6602.0575810540095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 898644.3930288461,
            "unit": "ns",
            "range": "± 3207.381042978779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1960350.5135416666,
            "unit": "ns",
            "range": "± 15289.457929358608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633313.347795759,
            "unit": "ns",
            "range": "± 4346.299472308504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570131.4148763021,
            "unit": "ns",
            "range": "± 3348.238011242461"
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
          "id": "5b3289554573f72c8ebf9f440dee3837e67fceb8",
          "message": "Add",
          "timestamp": "2023-10-30T15:30:35+09:00",
          "tree_id": "f1df10c43957acef2c74f777f14639b39d88a0b6",
          "url": "https://github.com/planetarium/libplanet/commit/5b3289554573f72c8ebf9f440dee3837e67fceb8"
        },
        "date": 1698648233442,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7463495.230769231,
            "unit": "ns",
            "range": "± 60038.38333260072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19185914.846153848,
            "unit": "ns",
            "range": "± 1055223.1037356972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45707924.75,
            "unit": "ns",
            "range": "± 209996.3188266642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95481016.29310344,
            "unit": "ns",
            "range": "± 4160595.7932549277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186918258.875,
            "unit": "ns",
            "range": "± 3398799.5119682457"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45871.066666666666,
            "unit": "ns",
            "range": "± 7131.860229462176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219528.7894736842,
            "unit": "ns",
            "range": "± 16488.03202383586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215787.1914893617,
            "unit": "ns",
            "range": "± 21420.177078410543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 193908.8817204301,
            "unit": "ns",
            "range": "± 17139.136463489598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3726305.761904762,
            "unit": "ns",
            "range": "± 85927.02053132342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3425087.1875,
            "unit": "ns",
            "range": "± 65554.49825930457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12322.260869565218,
            "unit": "ns",
            "range": "± 1144.3780341501622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57383.87912087912,
            "unit": "ns",
            "range": "± 4632.1333358163865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50522.08108108108,
            "unit": "ns",
            "range": "± 2540.955966995987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57796.260869565216,
            "unit": "ns",
            "range": "± 8234.283615256032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5088.395833333333,
            "unit": "ns",
            "range": "± 1123.8389515562665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13136.884210526316,
            "unit": "ns",
            "range": "± 1704.8843965498374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1276245.1717171718,
            "unit": "ns",
            "range": "± 131704.75264099363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2692077.0224719103,
            "unit": "ns",
            "range": "± 148204.8242134373"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1903631.6573033708,
            "unit": "ns",
            "range": "± 105046.98304307577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9372570.370370371,
            "unit": "ns",
            "range": "± 1039223.4486934156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2880449.470588235,
            "unit": "ns",
            "range": "± 92408.04601569337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3234758.714285714,
            "unit": "ns",
            "range": "± 49979.684619666405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3517847.7837837837,
            "unit": "ns",
            "range": "± 116043.66609244201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3505365.111111111,
            "unit": "ns",
            "range": "± 91521.76344468916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10982581.476190476,
            "unit": "ns",
            "range": "± 940055.2222528049"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4329502.582589285,
            "unit": "ns",
            "range": "± 52403.17960467948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1350389.2865084135,
            "unit": "ns",
            "range": "± 18964.0048093837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 863867.9069010416,
            "unit": "ns",
            "range": "± 5028.480151511774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948400.3505208334,
            "unit": "ns",
            "range": "± 32842.35819015041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615095.9947265625,
            "unit": "ns",
            "range": "± 11110.639831578052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557550.6047526042,
            "unit": "ns",
            "range": "± 7479.3527726123675"
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
          "id": "0210fa0572d5a03a2570706b74437ffd4df0a30b",
          "message": "use lts/*",
          "timestamp": "2023-10-30T15:33:54+09:00",
          "tree_id": "91dd897a10ca0011b52c0f8eedfef594eebe0aa4",
          "url": "https://github.com/planetarium/libplanet/commit/0210fa0572d5a03a2570706b74437ffd4df0a30b"
        },
        "date": 1698648424810,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7686269.05882353,
            "unit": "ns",
            "range": "± 120536.93017985742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18904546.615384616,
            "unit": "ns",
            "range": "± 206167.32952609894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46881987.77586207,
            "unit": "ns",
            "range": "± 1959802.5372782"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92489876.4375,
            "unit": "ns",
            "range": "± 1565582.7434673633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188279653.0172414,
            "unit": "ns",
            "range": "± 5506820.000315347"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33865.311111111114,
            "unit": "ns",
            "range": "± 2294.391420836904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215498.0806451613,
            "unit": "ns",
            "range": "± 13639.14181152314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205911.656626506,
            "unit": "ns",
            "range": "± 10980.38904024666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185033.69642857142,
            "unit": "ns",
            "range": "± 6736.551154086443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3694617.8666666667,
            "unit": "ns",
            "range": "± 66992.94177306684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3373630.5714285714,
            "unit": "ns",
            "range": "± 51518.57893661618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12073.872340425532,
            "unit": "ns",
            "range": "± 1141.6702462925678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56294.815217391304,
            "unit": "ns",
            "range": "± 4122.307792597339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50359.60344827586,
            "unit": "ns",
            "range": "± 2091.7946038149407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56197.9010989011,
            "unit": "ns",
            "range": "± 7081.137506008394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3256.4329896907216,
            "unit": "ns",
            "range": "± 548.3688104129163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13932.333333333334,
            "unit": "ns",
            "range": "± 2674.6533311868634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1065025.0947368422,
            "unit": "ns",
            "range": "± 81190.88374450874"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2194850.8421052634,
            "unit": "ns",
            "range": "± 74826.02112451087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1631279.27,
            "unit": "ns",
            "range": "± 132946.05268043952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7524292.140625,
            "unit": "ns",
            "range": "± 347183.3627800752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2821833.8048780486,
            "unit": "ns",
            "range": "± 84787.37306233149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2985820.108108108,
            "unit": "ns",
            "range": "± 98444.03006383988"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3563444.9393939395,
            "unit": "ns",
            "range": "± 111873.26894469121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3489578.063829787,
            "unit": "ns",
            "range": "± 197974.73750677786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11086986.290322581,
            "unit": "ns",
            "range": "± 1123423.8808540357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4307427.225446428,
            "unit": "ns",
            "range": "± 31100.163665342174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1312951.720703125,
            "unit": "ns",
            "range": "± 21085.12629746002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 877368.3457682292,
            "unit": "ns",
            "range": "± 11754.993467931987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943459.3388671875,
            "unit": "ns",
            "range": "± 36359.44744747497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 609858.3140625,
            "unit": "ns",
            "range": "± 5655.734045181015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562258.0755440848,
            "unit": "ns",
            "range": "± 7181.232652600859"
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
          "id": "86e2ef9ead11f1c5a1c17c66aa6df7178af32dac",
          "message": "use 20 in CI",
          "timestamp": "2023-10-30T15:31:57+09:00",
          "tree_id": "86e11692b4e5bd82639ce4c5491c54aee2006c59",
          "url": "https://github.com/planetarium/libplanet/commit/86e2ef9ead11f1c5a1c17c66aa6df7178af32dac"
        },
        "date": 1698648611789,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7843211.285714285,
            "unit": "ns",
            "range": "± 124233.05493502528"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20095649.12,
            "unit": "ns",
            "range": "± 801568.7271542086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54203146.671717174,
            "unit": "ns",
            "range": "± 3436160.269057378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119901746.85714285,
            "unit": "ns",
            "range": "± 2117419.243129089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222263277.32051283,
            "unit": "ns",
            "range": "± 11355623.991179507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54363.20430107527,
            "unit": "ns",
            "range": "± 10341.594474404068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246638.3947368421,
            "unit": "ns",
            "range": "± 20919.584411921885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257750.04255319148,
            "unit": "ns",
            "range": "± 26089.28606033432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243148.37096774194,
            "unit": "ns",
            "range": "± 19542.813464637184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4509334.703703703,
            "unit": "ns",
            "range": "± 126398.8457593401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3786148.923076923,
            "unit": "ns",
            "range": "± 60537.221513519464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19800.032258064515,
            "unit": "ns",
            "range": "± 4851.404557829693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81472.84042553192,
            "unit": "ns",
            "range": "± 8526.959338176026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80469.01086956522,
            "unit": "ns",
            "range": "± 6362.982976758457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71601.71649484536,
            "unit": "ns",
            "range": "± 11775.433582982205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5127.868421052632,
            "unit": "ns",
            "range": "± 1337.8358520675351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15165.536082474227,
            "unit": "ns",
            "range": "± 3188.7593690632507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1276492.7580645161,
            "unit": "ns",
            "range": "± 151790.7496145314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549768.172413793,
            "unit": "ns",
            "range": "± 110520.25831944146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1860223.3406593406,
            "unit": "ns",
            "range": "± 104054.54293026857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8796682.121951219,
            "unit": "ns",
            "range": "± 647710.7437336067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453933.4375,
            "unit": "ns",
            "range": "± 64875.054285365855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3387582.9,
            "unit": "ns",
            "range": "± 145014.34479250663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3904641.0084745763,
            "unit": "ns",
            "range": "± 171135.71887231458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3820789.935483871,
            "unit": "ns",
            "range": "± 250665.36051766766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12136202.75,
            "unit": "ns",
            "range": "± 1297017.912507271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5142378.002297794,
            "unit": "ns",
            "range": "± 102204.2178750793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504491.5891831343,
            "unit": "ns",
            "range": "± 70247.29660823895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 923811.6371425412,
            "unit": "ns",
            "range": "± 36663.86093037807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2131269.8903515623,
            "unit": "ns",
            "range": "± 216110.90944402607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627528.9335239956,
            "unit": "ns",
            "range": "± 10299.524811179617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573725.2651692708,
            "unit": "ns",
            "range": "± 6003.852451337884"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f98901371f4e74a124d0244830aa002bb3ced93",
          "message": "Merge branch 'main' into update-ts-packages",
          "timestamp": "2023-10-30T15:27:54+09:00",
          "tree_id": "d413bfb4e826aabe3d588f7f59678a4c2064b70b",
          "url": "https://github.com/planetarium/libplanet/commit/1f98901371f4e74a124d0244830aa002bb3ced93"
        },
        "date": 1698648641188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9711827.735294119,
            "unit": "ns",
            "range": "± 309187.4449389844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24191444.9,
            "unit": "ns",
            "range": "± 777208.5400390165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70037543.2755102,
            "unit": "ns",
            "range": "± 9145872.230506701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119834222.45081967,
            "unit": "ns",
            "range": "± 5358827.391505849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237327955.21505377,
            "unit": "ns",
            "range": "± 13336369.856859284"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76454.32291666667,
            "unit": "ns",
            "range": "± 20411.52122956919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311603.5705882353,
            "unit": "ns",
            "range": "± 31935.95387452691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262432.4895833333,
            "unit": "ns",
            "range": "± 38028.42355922594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207920.2688172043,
            "unit": "ns",
            "range": "± 17862.12261483463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3787017.6904761903,
            "unit": "ns",
            "range": "± 89547.51380558762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3495182.4637681157,
            "unit": "ns",
            "range": "± 164408.79253525162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18800.505376344085,
            "unit": "ns",
            "range": "± 3810.464004107796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95637.5,
            "unit": "ns",
            "range": "± 8902.202469175692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93323.1091954023,
            "unit": "ns",
            "range": "± 12246.170219901329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70851.18421052632,
            "unit": "ns",
            "range": "± 18559.49532814366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4064.4375,
            "unit": "ns",
            "range": "± 1003.7178971729373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13874.45054945055,
            "unit": "ns",
            "range": "± 2226.8188234626255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1612811.5561797754,
            "unit": "ns",
            "range": "± 300982.30828663934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3802999.736263736,
            "unit": "ns",
            "range": "± 1145509.495194827"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2653608.7959183673,
            "unit": "ns",
            "range": "± 621485.239839014"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15212173.301075269,
            "unit": "ns",
            "range": "± 3570563.533064758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4813298.587628866,
            "unit": "ns",
            "range": "± 1153277.9833423796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3795952.9814814813,
            "unit": "ns",
            "range": "± 140322.4813526397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4639048.453488372,
            "unit": "ns",
            "range": "± 321167.5568574908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4385439.35,
            "unit": "ns",
            "range": "± 194489.73968587344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12802489.386363637,
            "unit": "ns",
            "range": "± 1430401.5179078688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4541654.574074074,
            "unit": "ns",
            "range": "± 189150.34022464056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393881.0099609375,
            "unit": "ns",
            "range": "± 44709.51047273853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 910369.0964725378,
            "unit": "ns",
            "range": "± 28401.460111564465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2113542.4466911764,
            "unit": "ns",
            "range": "± 63147.58311744281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 763985.8840222715,
            "unit": "ns",
            "range": "± 36244.958565359986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 669680.1123096197,
            "unit": "ns",
            "range": "± 49573.858769908584"
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
          "id": "83309adbbf6e2324d3332ba9c7bcd9293cb7e767",
          "message": "WebCrypto Shim",
          "timestamp": "2023-10-30T15:40:39+09:00",
          "tree_id": "f62b6e8e47d9412dbb4f308acca8320b7eee424d",
          "url": "https://github.com/planetarium/libplanet/commit/83309adbbf6e2324d3332ba9c7bcd9293cb7e767"
        },
        "date": 1698649095890,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8074232.266666667,
            "unit": "ns",
            "range": "± 30673.751867648913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19070574.60714286,
            "unit": "ns",
            "range": "± 538835.3399077557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54679278.3989899,
            "unit": "ns",
            "range": "± 5385951.368006135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112026744.07,
            "unit": "ns",
            "range": "± 10830920.951486316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267695911.2857143,
            "unit": "ns",
            "range": "± 3091123.258935749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54345.242105263154,
            "unit": "ns",
            "range": "± 10442.637161539704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266463.6530612245,
            "unit": "ns",
            "range": "± 34134.74886851429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260301.54736842104,
            "unit": "ns",
            "range": "± 22474.98080692548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262014.3469387755,
            "unit": "ns",
            "range": "± 42684.42766748868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4766054.928571428,
            "unit": "ns",
            "range": "± 63756.71074478753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4510704.346153846,
            "unit": "ns",
            "range": "± 60468.59838495536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15442.840206185567,
            "unit": "ns",
            "range": "± 4667.784841974917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90339.21428571429,
            "unit": "ns",
            "range": "± 20459.989855108288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98111.6914893617,
            "unit": "ns",
            "range": "± 15274.325735449498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78628.44791666667,
            "unit": "ns",
            "range": "± 17525.28290085936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6660.08947368421,
            "unit": "ns",
            "range": "± 1793.222450006459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15126.95744680851,
            "unit": "ns",
            "range": "± 3706.648069637614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1242351.707070707,
            "unit": "ns",
            "range": "± 181755.43303191074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2645049.144444444,
            "unit": "ns",
            "range": "± 278275.32110020594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1848442.2315789473,
            "unit": "ns",
            "range": "± 161511.41952153316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8909481.597402597,
            "unit": "ns",
            "range": "± 475356.57785844966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3224024.3636363638,
            "unit": "ns",
            "range": "± 210178.20063258734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3691631,
            "unit": "ns",
            "range": "± 137353.42469659692"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4556596.188679245,
            "unit": "ns",
            "range": "± 188674.48185290908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4943209.247126437,
            "unit": "ns",
            "range": "± 632914.2268429908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12113981.252941176,
            "unit": "ns",
            "range": "± 1188903.5769888584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5227024.673488451,
            "unit": "ns",
            "range": "± 499585.46411133517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1624244.6995621566,
            "unit": "ns",
            "range": "± 136555.74689638647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1043683.1010105299,
            "unit": "ns",
            "range": "± 39868.87123637872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2297298.705436862,
            "unit": "ns",
            "range": "± 190698.1958049497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635631.1077952666,
            "unit": "ns",
            "range": "± 20182.32164855789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565183.2678385417,
            "unit": "ns",
            "range": "± 9880.891024258097"
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
          "id": "3426d62ac83f110ff826053396831dd18f110eae",
          "message": "WebCrypto Shim",
          "timestamp": "2023-10-30T15:41:40+09:00",
          "tree_id": "572ab003fe64fc8ac9fc402b2ab477ced8258de6",
          "url": "https://github.com/planetarium/libplanet/commit/3426d62ac83f110ff826053396831dd18f110eae"
        },
        "date": 1698649211334,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8575000.375,
            "unit": "ns",
            "range": "± 212658.03398267133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21118285.0625,
            "unit": "ns",
            "range": "± 826843.5513326313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54596265,
            "unit": "ns",
            "range": "± 2012645.6773800107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105200822.46969697,
            "unit": "ns",
            "range": "± 3330842.1932912525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216057807.32352942,
            "unit": "ns",
            "range": "± 4367936.453594481"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70243.14893617021,
            "unit": "ns",
            "range": "± 9840.837785557971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333998.16842105263,
            "unit": "ns",
            "range": "± 38823.71312156787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330679.28125,
            "unit": "ns",
            "range": "± 42322.01893868464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342843.09278350516,
            "unit": "ns",
            "range": "± 49815.2779284132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4364485.44680851,
            "unit": "ns",
            "range": "± 369599.9494386694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834972.940677966,
            "unit": "ns",
            "range": "± 169960.92317092422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18215.75,
            "unit": "ns",
            "range": "± 1905.0483171456153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88231.14,
            "unit": "ns",
            "range": "± 11215.442670863882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86786.66315789474,
            "unit": "ns",
            "range": "± 8250.949906126894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101548.60309278351,
            "unit": "ns",
            "range": "± 15045.763612977391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5545.75,
            "unit": "ns",
            "range": "± 787.1944052004862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20802.489361702126,
            "unit": "ns",
            "range": "± 4499.299538661022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1583447.702020202,
            "unit": "ns",
            "range": "± 237338.01024298999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2796331.8225806453,
            "unit": "ns",
            "range": "± 125569.47956247549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2311101.5463917525,
            "unit": "ns",
            "range": "± 203431.8735687915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10202392.254237289,
            "unit": "ns",
            "range": "± 422059.39392760553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 5091361.635416667,
            "unit": "ns",
            "range": "± 1841639.78780005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3703562.510526316,
            "unit": "ns",
            "range": "± 418749.21303818066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4464439.746835443,
            "unit": "ns",
            "range": "± 231568.65269308136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292872.82,
            "unit": "ns",
            "range": "± 263598.9940484239"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15763218.614583334,
            "unit": "ns",
            "range": "± 1870779.5595027246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6242989.310952241,
            "unit": "ns",
            "range": "± 257857.28398278003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1756877.466796875,
            "unit": "ns",
            "range": "± 20890.588015860096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1117919.712076823,
            "unit": "ns",
            "range": "± 28288.252030340667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576445.0217633927,
            "unit": "ns",
            "range": "± 42723.7824658833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858974.3369750977,
            "unit": "ns",
            "range": "± 15903.626126083429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760711.6558254076,
            "unit": "ns",
            "range": "± 18748.759073776924"
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
          "id": "d850cb6a94435f8867f6618c025640573a31d540",
          "message": "Webcrypto Shim 2.0 Electric Boogaloo",
          "timestamp": "2023-10-30T15:45:30+09:00",
          "tree_id": "7ec4d5a5810b7c7a18cb31a859e349f5c9b816a0",
          "url": "https://github.com/planetarium/libplanet/commit/d850cb6a94435f8867f6618c025640573a31d540"
        },
        "date": 1698649375850,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10333375.07142857,
            "unit": "ns",
            "range": "± 157457.06805224685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 35054717,
            "unit": "ns",
            "range": "± 11133347.443121646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66825375.75,
            "unit": "ns",
            "range": "± 2366588.5136921383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124893065.42307693,
            "unit": "ns",
            "range": "± 720396.2939931583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261521360.16666666,
            "unit": "ns",
            "range": "± 6715892.593885503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64737.34090909091,
            "unit": "ns",
            "range": "± 4751.589030969193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309892.6756756757,
            "unit": "ns",
            "range": "± 15532.752507143327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295136.29761904763,
            "unit": "ns",
            "range": "± 15338.230216141876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283020.26470588235,
            "unit": "ns",
            "range": "± 8902.536599054478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4995508.541666667,
            "unit": "ns",
            "range": "± 127429.32733052949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521955.714285715,
            "unit": "ns",
            "range": "± 79967.94343545858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23399.736559139787,
            "unit": "ns",
            "range": "± 2302.6778286512304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98413.49425287357,
            "unit": "ns",
            "range": "± 6912.022628074442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98430.91891891892,
            "unit": "ns",
            "range": "± 4921.288673966797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95301.63793103448,
            "unit": "ns",
            "range": "± 6946.741421422181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7640.403225806452,
            "unit": "ns",
            "range": "± 924.5210753648771"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22278.206521739132,
            "unit": "ns",
            "range": "± 2382.7911075825723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475595.887755102,
            "unit": "ns",
            "range": "± 143983.22033097822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3034618.2209302327,
            "unit": "ns",
            "range": "± 160608.83636247864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2190609.8571428573,
            "unit": "ns",
            "range": "± 127360.33613357473"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10704107.355555555,
            "unit": "ns",
            "range": "± 1759594.6273739038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3869284.6666666665,
            "unit": "ns",
            "range": "± 60968.06319549214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3917817.1343283583,
            "unit": "ns",
            "range": "± 185921.22783994296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4684982.794117647,
            "unit": "ns",
            "range": "± 131774.46694988382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486241.6,
            "unit": "ns",
            "range": "± 170778.46414807398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14444246.402173912,
            "unit": "ns",
            "range": "± 1280649.510290097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5853350.55756579,
            "unit": "ns",
            "range": "± 122327.59885650538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1751980.49140625,
            "unit": "ns",
            "range": "± 26580.685924275367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1198837.0514948918,
            "unit": "ns",
            "range": "± 49412.49714845949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780826.2960526315,
            "unit": "ns",
            "range": "± 58631.46245832505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816647.7760881697,
            "unit": "ns",
            "range": "± 13422.101474123096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772433.4136513158,
            "unit": "ns",
            "range": "± 16645.202378360693"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fab5fde321e7cfd59ab0b12397aa41b269a35bbc",
          "message": "Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-10-30T15:46:27+09:00",
          "tree_id": "f20262a90ad26e81db7511026143f08ae1cc2fc3",
          "url": "https://github.com/planetarium/libplanet/commit/fab5fde321e7cfd59ab0b12397aa41b269a35bbc"
        },
        "date": 1698649600369,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 12067729.304347826,
            "unit": "ns",
            "range": "± 2021162.4612810237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24822393.603092782,
            "unit": "ns",
            "range": "± 3571278.0022076876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67949049.33333333,
            "unit": "ns",
            "range": "± 22322702.248866316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128550703.01086956,
            "unit": "ns",
            "range": "± 17508288.281542994"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 316214406.7282609,
            "unit": "ns",
            "range": "± 50376123.51760019"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60635.70430107527,
            "unit": "ns",
            "range": "± 15196.15125655688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242757.13043478262,
            "unit": "ns",
            "range": "± 27266.99413440464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283823.8369565217,
            "unit": "ns",
            "range": "± 74827.20816717675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250272.9659090909,
            "unit": "ns",
            "range": "± 26723.745283901066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3934856.1052631577,
            "unit": "ns",
            "range": "± 85576.10192356713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3643670.911764706,
            "unit": "ns",
            "range": "± 72229.70164435371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18798.64285714286,
            "unit": "ns",
            "range": "± 3942.350453465311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85921.33529411764,
            "unit": "ns",
            "range": "± 13377.38723675415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76198.3686868687,
            "unit": "ns",
            "range": "± 17433.889079071156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84318.48947368421,
            "unit": "ns",
            "range": "± 13243.559662007965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6816,
            "unit": "ns",
            "range": "± 881.6084508863089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18929.994382022473,
            "unit": "ns",
            "range": "± 4346.643431021845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1554409.62,
            "unit": "ns",
            "range": "± 392675.5367220565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2467567.215909091,
            "unit": "ns",
            "range": "± 183981.87831542024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163043.224489796,
            "unit": "ns",
            "range": "± 510870.89576513035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11048888.673469387,
            "unit": "ns",
            "range": "± 3627791.6290698536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4177445.149484536,
            "unit": "ns",
            "range": "± 1315334.336796519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4411002.636842106,
            "unit": "ns",
            "range": "± 974520.5746788719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6143016.77,
            "unit": "ns",
            "range": "± 1551204.9648823761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5199303.212765957,
            "unit": "ns",
            "range": "± 1259427.5176893224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12624449.623529412,
            "unit": "ns",
            "range": "± 2295094.8061792776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4638316.909895834,
            "unit": "ns",
            "range": "± 81598.90442308255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1443617.837109375,
            "unit": "ns",
            "range": "± 24946.623088706234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 941005.2820918643,
            "unit": "ns",
            "range": "± 41051.90685536151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2049002.268359375,
            "unit": "ns",
            "range": "± 14102.197900193743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 676981.6356201172,
            "unit": "ns",
            "range": "± 29036.300547191975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 616729.6244608561,
            "unit": "ns",
            "range": "± 37114.73484938458"
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
          "id": "796599859d4faaf424806b74bab01ccc8d6ef297",
          "message": "Webcrypto Shim 2.0 Electric Boogaloo",
          "timestamp": "2023-10-30T15:50:41+09:00",
          "tree_id": "01451c5b3f2173daf2f29c8777eb7db91ccb191b",
          "url": "https://github.com/planetarium/libplanet/commit/796599859d4faaf424806b74bab01ccc8d6ef297"
        },
        "date": 1698649656046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8354930.714285715,
            "unit": "ns",
            "range": "± 109818.03251913426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20209980.396551725,
            "unit": "ns",
            "range": "± 588984.4520787664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49945468.28571428,
            "unit": "ns",
            "range": "± 1170613.45468234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98277343.73333333,
            "unit": "ns",
            "range": "± 998291.0481601236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200959542.2857143,
            "unit": "ns",
            "range": "± 1577968.06511408"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57566.55319148936,
            "unit": "ns",
            "range": "± 7359.485970854538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297276.6030927835,
            "unit": "ns",
            "range": "± 25694.380842204802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296111.387755102,
            "unit": "ns",
            "range": "± 28158.055865349386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276339.41489361704,
            "unit": "ns",
            "range": "± 19276.468780159503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937595.3243243243,
            "unit": "ns",
            "range": "± 133507.06634961604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3576225.804347826,
            "unit": "ns",
            "range": "± 78092.96595517351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18255.440860215054,
            "unit": "ns",
            "range": "± 2070.7361821676805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85404.22222222222,
            "unit": "ns",
            "range": "± 7883.89838695966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76585.56315789474,
            "unit": "ns",
            "range": "± 10858.732391255659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85186.33684210526,
            "unit": "ns",
            "range": "± 9077.30515545943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4693.526315789473,
            "unit": "ns",
            "range": "± 553.6348332208073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16653.380434782608,
            "unit": "ns",
            "range": "± 1545.0173500387261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1481780.11,
            "unit": "ns",
            "range": "± 167840.46036084177"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2767065.9859154928,
            "unit": "ns",
            "range": "± 134666.03008028978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2314532.5204081633,
            "unit": "ns",
            "range": "± 218512.22670385492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10202384.890243903,
            "unit": "ns",
            "range": "± 688706.5221576022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3246901.382022472,
            "unit": "ns",
            "range": "± 192596.79261103223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534550.78125,
            "unit": "ns",
            "range": "± 227246.84213798985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4274806.723404256,
            "unit": "ns",
            "range": "± 155201.42757841616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4177685.505376344,
            "unit": "ns",
            "range": "± 239756.01036550282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15724115.969072165,
            "unit": "ns",
            "range": "± 1909637.6641481759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5645178.108258928,
            "unit": "ns",
            "range": "± 91194.70279642587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1755373.9251802885,
            "unit": "ns",
            "range": "± 18441.91520662007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1052428.6439302885,
            "unit": "ns",
            "range": "± 12850.233636051315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2501949.9669471155,
            "unit": "ns",
            "range": "± 20192.002755914655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776997.7708333334,
            "unit": "ns",
            "range": "± 3925.806607349241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716721.9872395833,
            "unit": "ns",
            "range": "± 4955.354421771414"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a321d204ba0d9be15eada617eb9781c21ed0074",
          "message": "Update .github/workflows/yarn.yaml\n\nCo-authored-by: Lee Dogeon <dev.moreal@gmail.com>",
          "timestamp": "2023-10-30T15:52:05+09:00",
          "tree_id": "a5d52bafc26e0c2f9f01f55e86cb626c7ae8c00c",
          "url": "https://github.com/planetarium/libplanet/commit/4a321d204ba0d9be15eada617eb9781c21ed0074"
        },
        "date": 1698649686730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7915545.928571428,
            "unit": "ns",
            "range": "± 134396.9788210482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20737198.988636363,
            "unit": "ns",
            "range": "± 1624660.4586684331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48784580.86363637,
            "unit": "ns",
            "range": "± 1526791.1022498058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100574055.3076923,
            "unit": "ns",
            "range": "± 2654436.545896485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205512663.92424244,
            "unit": "ns",
            "range": "± 9620023.848700821"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47056.59375,
            "unit": "ns",
            "range": "± 9900.667492200635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240255.02525252526,
            "unit": "ns",
            "range": "± 15685.037862947955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243603.59638554216,
            "unit": "ns",
            "range": "± 12408.177245331892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246045.25,
            "unit": "ns",
            "range": "± 11070.492685951313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4011669.476190476,
            "unit": "ns",
            "range": "± 93644.21896978961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750013.269230769,
            "unit": "ns",
            "range": "± 47992.9718728931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22374.597826086956,
            "unit": "ns",
            "range": "± 4156.191150613116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86319.63440860216,
            "unit": "ns",
            "range": "± 10291.870001402063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86424.5,
            "unit": "ns",
            "range": "± 4560.474618940445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92643.85714285714,
            "unit": "ns",
            "range": "± 15958.58536624574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6098.5684210526315,
            "unit": "ns",
            "range": "± 1961.8978634607197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15610.302083333334,
            "unit": "ns",
            "range": "± 2908.4671767636305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1186726.7,
            "unit": "ns",
            "range": "± 113651.3166207492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402495.794736842,
            "unit": "ns",
            "range": "± 167193.98640907815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1783912.5957446808,
            "unit": "ns",
            "range": "± 163122.0846765615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8830591.233333332,
            "unit": "ns",
            "range": "± 1699810.0766186526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3035286.5,
            "unit": "ns",
            "range": "± 54250.523314131664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047213.7365591396,
            "unit": "ns",
            "range": "± 172820.9233483179"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3712133.7333333334,
            "unit": "ns",
            "range": "± 137796.38052796992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3613137.6119402987,
            "unit": "ns",
            "range": "± 160889.16860457504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11422826.738636363,
            "unit": "ns",
            "range": "± 1176925.430178433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4569978.1962890625,
            "unit": "ns",
            "range": "± 158560.5453691887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1416271.8406394676,
            "unit": "ns",
            "range": "± 38313.34630185716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 900398.15390625,
            "unit": "ns",
            "range": "± 20069.218134059447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970025.352764423,
            "unit": "ns",
            "range": "± 15959.670793114788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621015.0375,
            "unit": "ns",
            "range": "± 8033.436400218459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569421.779436384,
            "unit": "ns",
            "range": "± 6267.810451623972"
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
          "id": "ee08091e5f051221ce0adb3fe85f20a337554c74",
          "message": "Add rootdir",
          "timestamp": "2023-10-30T15:58:06+09:00",
          "tree_id": "30dbb0f3ddd21e3f821f7c4aae06390cd1dc133b",
          "url": "https://github.com/planetarium/libplanet/commit/ee08091e5f051221ce0adb3fe85f20a337554c74"
        },
        "date": 1698650212979,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7612782.75,
            "unit": "ns",
            "range": "± 43438.33238705397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18733647.285714287,
            "unit": "ns",
            "range": "± 312790.66608723585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46969278.12,
            "unit": "ns",
            "range": "± 1873961.041416467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92766157.94117647,
            "unit": "ns",
            "range": "± 1848032.052833076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196104703.02439025,
            "unit": "ns",
            "range": "± 10357698.412873097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39386.255319148935,
            "unit": "ns",
            "range": "± 7742.802326651188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 226515.72340425532,
            "unit": "ns",
            "range": "± 19223.684653692373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 212436.98913043478,
            "unit": "ns",
            "range": "± 15120.082326142643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203814.65656565657,
            "unit": "ns",
            "range": "± 24221.22161691155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3697337.153846154,
            "unit": "ns",
            "range": "± 98316.29821466726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3392472.5,
            "unit": "ns",
            "range": "± 97009.35878009877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12613.869565217392,
            "unit": "ns",
            "range": "± 1055.1288054008487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59467.44680851064,
            "unit": "ns",
            "range": "± 5476.594023105459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55597.709677419356,
            "unit": "ns",
            "range": "± 8133.361628637198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60824.979166666664,
            "unit": "ns",
            "range": "± 10176.519346002418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2986.375,
            "unit": "ns",
            "range": "± 338.1944005030917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12222.791666666666,
            "unit": "ns",
            "range": "± 1401.1560859493786"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1331389.3863636365,
            "unit": "ns",
            "range": "± 113038.93482899728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2596374.074468085,
            "unit": "ns",
            "range": "± 302849.81081570336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714409.8865979381,
            "unit": "ns",
            "range": "± 156086.10903119287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8389229.797752809,
            "unit": "ns",
            "range": "± 1347918.7122975434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2903274.0322580645,
            "unit": "ns",
            "range": "± 131471.29421458495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2932790.698630137,
            "unit": "ns",
            "range": "± 141101.12341249813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3558741.3653846155,
            "unit": "ns",
            "range": "± 146548.563804287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3450540.3285714285,
            "unit": "ns",
            "range": "± 167077.58950969076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11140830.122222222,
            "unit": "ns",
            "range": "± 1145174.96382139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4357801.609863281,
            "unit": "ns",
            "range": "± 133292.92976221637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1323260.5672743055,
            "unit": "ns",
            "range": "± 26903.854288043935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1010860.2945605469,
            "unit": "ns",
            "range": "± 129181.65476882142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2658872.843984375,
            "unit": "ns",
            "range": "± 248627.42909073574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 748059.2506933594,
            "unit": "ns",
            "range": "± 69071.1644180449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739514.5353125,
            "unit": "ns",
            "range": "± 29858.82867355059"
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
          "id": "e37ca274b9aab6bfae2b9889906dfa39aa300e22",
          "message": "Add engines",
          "timestamp": "2023-10-30T16:31:32+09:00",
          "tree_id": "d03b730f44bdda9fa4509f90fc049e6acd64b223",
          "url": "https://github.com/planetarium/libplanet/commit/e37ca274b9aab6bfae2b9889906dfa39aa300e22"
        },
        "date": 1698652097438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7892370.857142857,
            "unit": "ns",
            "range": "± 277893.82880638825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18787460.8,
            "unit": "ns",
            "range": "± 413194.55477625475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47683302.333333336,
            "unit": "ns",
            "range": "± 694989.1224498888"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96192831.33333333,
            "unit": "ns",
            "range": "± 1494059.3907934022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236534722.56,
            "unit": "ns",
            "range": "± 24688989.31499737"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51444.54347826087,
            "unit": "ns",
            "range": "± 16954.246400182135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248666.5,
            "unit": "ns",
            "range": "± 25082.094357747876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240661.96842105262,
            "unit": "ns",
            "range": "± 27080.025399298494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225993.74226804124,
            "unit": "ns",
            "range": "± 24967.494363204176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4170364.994845361,
            "unit": "ns",
            "range": "± 292282.6663355727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3815905.505050505,
            "unit": "ns",
            "range": "± 288578.19287030917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16813.020833333332,
            "unit": "ns",
            "range": "± 3820.7975110720063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77302.36842105263,
            "unit": "ns",
            "range": "± 17615.213305822625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74987.94565217392,
            "unit": "ns",
            "range": "± 12735.944942109416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80482.62886597938,
            "unit": "ns",
            "range": "± 19199.21167344269"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6186.71875,
            "unit": "ns",
            "range": "± 1862.5101155677264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16794.145833333332,
            "unit": "ns",
            "range": "± 4706.85929922696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1335974.0860215053,
            "unit": "ns",
            "range": "± 157662.0196647036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2668072.0416666665,
            "unit": "ns",
            "range": "± 251309.80206157864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2557462.6326530613,
            "unit": "ns",
            "range": "± 747409.6288642132"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9868184.451219512,
            "unit": "ns",
            "range": "± 1729229.3915142787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4004909.5408163266,
            "unit": "ns",
            "range": "± 710510.8262476492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3700122.515789474,
            "unit": "ns",
            "range": "± 533185.8246323208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4088150.6808510637,
            "unit": "ns",
            "range": "± 316138.1201959879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3611398.369047619,
            "unit": "ns",
            "range": "± 192609.81962892928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11346893.747252747,
            "unit": "ns",
            "range": "± 933765.124142226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5354332.512462798,
            "unit": "ns",
            "range": "± 194494.239364372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1370199.3529296876,
            "unit": "ns",
            "range": "± 30345.070559789106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 896747.5226966594,
            "unit": "ns",
            "range": "± 24083.8227869213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984438.3404447115,
            "unit": "ns",
            "range": "± 53839.641010365056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 701142.9905133928,
            "unit": "ns",
            "range": "± 56225.18899233863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 604114.7783203125,
            "unit": "ns",
            "range": "± 12897.280180366564"
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
          "id": "a3e457900d929f8414148ac8a388d6e996a98864",
          "message": "isDigest Removal",
          "timestamp": "2023-10-30T16:27:59+09:00",
          "tree_id": "47452692d67a73d53c928df26e173f7957044e59",
          "url": "https://github.com/planetarium/libplanet/commit/a3e457900d929f8414148ac8a388d6e996a98864"
        },
        "date": 1698652160503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7786957,
            "unit": "ns",
            "range": "± 105406.07446126307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19651758.847826086,
            "unit": "ns",
            "range": "± 483385.5330494592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52779958.37,
            "unit": "ns",
            "range": "± 3642619.33652002"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114460925.046875,
            "unit": "ns",
            "range": "± 5244561.293777558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235539886.7857143,
            "unit": "ns",
            "range": "± 3404446.6668708087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51741.36263736264,
            "unit": "ns",
            "range": "± 14556.300937712685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252877.04301075268,
            "unit": "ns",
            "range": "± 24389.073336548092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235560.08695652173,
            "unit": "ns",
            "range": "± 22295.529859293347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204920.3085106383,
            "unit": "ns",
            "range": "± 22680.768223072693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3750982.6875,
            "unit": "ns",
            "range": "± 67131.80641168413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3387571.5,
            "unit": "ns",
            "range": "± 79834.67815053806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13615.946236559139,
            "unit": "ns",
            "range": "± 2426.948170231725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60437.181318681316,
            "unit": "ns",
            "range": "± 5445.914496980733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60185.278947368424,
            "unit": "ns",
            "range": "± 11653.06996641251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62313.521505376346,
            "unit": "ns",
            "range": "± 10289.669785949416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3491.1702127659573,
            "unit": "ns",
            "range": "± 833.6660665404521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13237.684782608696,
            "unit": "ns",
            "range": "± 2688.277977063326"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1627984.9468085107,
            "unit": "ns",
            "range": "± 333159.8825826519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3292774.355670103,
            "unit": "ns",
            "range": "± 692529.8988110397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2644391.4278350514,
            "unit": "ns",
            "range": "± 632773.9530692458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11088911.56185567,
            "unit": "ns",
            "range": "± 2427003.317176996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3516655.53125,
            "unit": "ns",
            "range": "± 106715.07498368347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3498881.35106383,
            "unit": "ns",
            "range": "± 241965.7080069631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3980869.1228070175,
            "unit": "ns",
            "range": "± 173040.30901261442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3802699.3105263156,
            "unit": "ns",
            "range": "± 371569.71107650094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11157641.901098901,
            "unit": "ns",
            "range": "± 1025628.6298905234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4314014.637276785,
            "unit": "ns",
            "range": "± 61970.99706819746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1340576.14140625,
            "unit": "ns",
            "range": "± 22340.872444367553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 888402.8190625,
            "unit": "ns",
            "range": "± 22704.497543888636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2329565.413289835,
            "unit": "ns",
            "range": "± 129913.80683283183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 710213.7669639981,
            "unit": "ns",
            "range": "± 57141.611629558414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 676588.9161565722,
            "unit": "ns",
            "range": "± 47292.65513277852"
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
          "id": "10957aee2a21b373299547accba2d11dca880581",
          "message": "isDigest Removal",
          "timestamp": "2023-10-30T16:25:45+09:00",
          "tree_id": "00952de1f3154ac3ba9b15b76824065195c75d57",
          "url": "https://github.com/planetarium/libplanet/commit/10957aee2a21b373299547accba2d11dca880581"
        },
        "date": 1698652156277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14108002.766666668,
            "unit": "ns",
            "range": "± 3315328.0596270575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27214688.653846152,
            "unit": "ns",
            "range": "± 352563.8915066426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65148665.81818182,
            "unit": "ns",
            "range": "± 6085439.7941868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101276257.10215054,
            "unit": "ns",
            "range": "± 8379847.330006166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215466400.88947368,
            "unit": "ns",
            "range": "± 23742881.167113036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62093.444444444445,
            "unit": "ns",
            "range": "± 14739.473363025925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 232075.914893617,
            "unit": "ns",
            "range": "± 30215.192881545914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 242680.92857142858,
            "unit": "ns",
            "range": "± 35992.4435549561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195014.17894736843,
            "unit": "ns",
            "range": "± 18380.48823638977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3715894.9166666665,
            "unit": "ns",
            "range": "± 27911.753837140932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3471180.2,
            "unit": "ns",
            "range": "± 101082.5589920062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13102.359550561798,
            "unit": "ns",
            "range": "± 1503.0753870828773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68620.43684210526,
            "unit": "ns",
            "range": "± 12466.605697341596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62526.926315789475,
            "unit": "ns",
            "range": "± 13963.916759293226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66615.09090909091,
            "unit": "ns",
            "range": "± 11379.627849883991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3810.435483870968,
            "unit": "ns",
            "range": "± 826.86442564735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13336.16304347826,
            "unit": "ns",
            "range": "± 1861.655875691941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1404976.9361702127,
            "unit": "ns",
            "range": "± 114933.21768419779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2823421.15625,
            "unit": "ns",
            "range": "± 410279.0315761707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061745.601010101,
            "unit": "ns",
            "range": "± 176499.10398867758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9493612.75,
            "unit": "ns",
            "range": "± 1754845.26132411"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3210214.329787234,
            "unit": "ns",
            "range": "± 314191.4605741335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3935695.776119403,
            "unit": "ns",
            "range": "± 186850.4264781196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5213289.268817204,
            "unit": "ns",
            "range": "± 355349.06529144413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4916220.475903614,
            "unit": "ns",
            "range": "± 246985.72512823762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15097371.45054945,
            "unit": "ns",
            "range": "± 2026695.2521704244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4794000.367757161,
            "unit": "ns",
            "range": "± 294470.01822590956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1590595.0749023438,
            "unit": "ns",
            "range": "± 174620.14740755223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157982.5436941965,
            "unit": "ns",
            "range": "± 55782.09797893104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2620731.72875,
            "unit": "ns",
            "range": "± 318907.48488995776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 884471.3269690688,
            "unit": "ns",
            "range": "± 73552.55872060929"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738152.0566110322,
            "unit": "ns",
            "range": "± 61687.0511985559"
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
          "id": "fd5b100f740deadfb326b306533860bc4a842576",
          "message": "Rome ignore.",
          "timestamp": "2023-10-30T16:41:08+09:00",
          "tree_id": "9c4c10852bb7667a230a556b14985c7e0c3d2dc7",
          "url": "https://github.com/planetarium/libplanet/commit/fd5b100f740deadfb326b306533860bc4a842576"
        },
        "date": 1698652557435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555049.75,
            "unit": "ns",
            "range": "± 53995.4259479028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19192506.07142857,
            "unit": "ns",
            "range": "± 326768.2411070961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48174110.56666667,
            "unit": "ns",
            "range": "± 847579.4750002981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91980362.5,
            "unit": "ns",
            "range": "± 841935.6940260597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195505989.01020408,
            "unit": "ns",
            "range": "± 7677504.7818884365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47052.40217391304,
            "unit": "ns",
            "range": "± 10812.150451502665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 225964.82631578948,
            "unit": "ns",
            "range": "± 20529.328570671714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214875.67021276595,
            "unit": "ns",
            "range": "± 19374.510532499702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209259.30208333334,
            "unit": "ns",
            "range": "± 22587.189753961633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3767468.6428571427,
            "unit": "ns",
            "range": "± 55339.20043465801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3501236.2285714285,
            "unit": "ns",
            "range": "± 109863.85419050835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13305.760869565218,
            "unit": "ns",
            "range": "± 2020.590376513947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63380.28125,
            "unit": "ns",
            "range": "± 9779.95725930078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71951.37373737374,
            "unit": "ns",
            "range": "± 15689.490611380894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71563.7947368421,
            "unit": "ns",
            "range": "± 11141.053209384365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4751.927835051546,
            "unit": "ns",
            "range": "± 1314.625487285754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14700.597826086956,
            "unit": "ns",
            "range": "± 2561.900205053773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1252885.4888888889,
            "unit": "ns",
            "range": "± 103838.04997016565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2727126.255319149,
            "unit": "ns",
            "range": "± 190403.8915122519"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1955581.6923076923,
            "unit": "ns",
            "range": "± 123259.1472847794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9105840.785714285,
            "unit": "ns",
            "range": "± 891717.8669392716"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2977586.40625,
            "unit": "ns",
            "range": "± 92154.87786535244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2994917.284090909,
            "unit": "ns",
            "range": "± 163255.5977927418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3596232.7580645164,
            "unit": "ns",
            "range": "± 153199.62671632878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3488134.918918919,
            "unit": "ns",
            "range": "± 174159.5177025469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11117497.344827587,
            "unit": "ns",
            "range": "± 885919.5852877344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4425459.421061198,
            "unit": "ns",
            "range": "± 170835.35471532738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1346229.5916573661,
            "unit": "ns",
            "range": "± 23094.911116275274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 884036.711328125,
            "unit": "ns",
            "range": "± 14009.519241975613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2002546.36328125,
            "unit": "ns",
            "range": "± 56752.70527894061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614041.46484375,
            "unit": "ns",
            "range": "± 9984.245097479225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571386.6782552083,
            "unit": "ns",
            "range": "± 9450.66010516295"
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
          "id": "4df9f60cade01855e230ecb1bc584523c7b09ec9",
          "message": "Rome ignore.",
          "timestamp": "2023-10-30T16:46:34+09:00",
          "tree_id": "34dd87b0d13527e8f24060a3aded4e380c166431",
          "url": "https://github.com/planetarium/libplanet/commit/4df9f60cade01855e230ecb1bc584523c7b09ec9"
        },
        "date": 1698653329265,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7857930.818181818,
            "unit": "ns",
            "range": "± 290915.3488191953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18690804.46153846,
            "unit": "ns",
            "range": "± 265613.33023294574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48209018.52325582,
            "unit": "ns",
            "range": "± 2534378.931193039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96048413.33018868,
            "unit": "ns",
            "range": "± 3883583.6070073005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195532314.74418604,
            "unit": "ns",
            "range": "± 6113287.05578125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40775.8064516129,
            "unit": "ns",
            "range": "± 7725.9038957011435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 228145.28125,
            "unit": "ns",
            "range": "± 25067.012994729957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221048.01612903227,
            "unit": "ns",
            "range": "± 18532.05795994377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204714.898989899,
            "unit": "ns",
            "range": "± 21697.061064734913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3658409.8571428573,
            "unit": "ns",
            "range": "± 53241.05969565673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3524491.1666666665,
            "unit": "ns",
            "range": "± 80266.40522929461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15237.257731958764,
            "unit": "ns",
            "range": "± 4021.9999592821528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64334.822916666664,
            "unit": "ns",
            "range": "± 11811.278214615395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71226.75,
            "unit": "ns",
            "range": "± 13998.89709415108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77744.36842105263,
            "unit": "ns",
            "range": "± 13663.479057639992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4769.126262626262,
            "unit": "ns",
            "range": "± 1443.4161546933603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18414.632653061224,
            "unit": "ns",
            "range": "± 5464.8731460886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1316723.2835051545,
            "unit": "ns",
            "range": "± 131746.6404858857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2669462.463917526,
            "unit": "ns",
            "range": "± 250589.91137156665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1765978.4387755103,
            "unit": "ns",
            "range": "± 194262.45692192193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8095279.233333333,
            "unit": "ns",
            "range": "± 1136384.1489162021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2921313.7736842106,
            "unit": "ns",
            "range": "± 195433.24832913536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3040892.7538461536,
            "unit": "ns",
            "range": "± 131416.18264768028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3555595.3636363638,
            "unit": "ns",
            "range": "± 87053.06496370911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3731751.1157894735,
            "unit": "ns",
            "range": "± 318612.22685667855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11675539.608695652,
            "unit": "ns",
            "range": "± 1533460.109753447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4642106.673589939,
            "unit": "ns",
            "range": "± 243942.66945322425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1771307.853149414,
            "unit": "ns",
            "range": "± 282400.1804197508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147284.5447460937,
            "unit": "ns",
            "range": "± 152449.16601900474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592823.904553346,
            "unit": "ns",
            "range": "± 291363.7129590199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794157.9116015625,
            "unit": "ns",
            "range": "± 110108.62524780458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726721.8678582702,
            "unit": "ns",
            "range": "± 61506.029674925194"
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
          "id": "75dd1edd4f2ff87b04e8e566e21c1f22fbc934c8",
          "message": "Rome ignore.",
          "timestamp": "2023-10-30T16:53:38+09:00",
          "tree_id": "5520ac2068dbdd46a71ad502a4333a400fcb633d",
          "url": "https://github.com/planetarium/libplanet/commit/75dd1edd4f2ff87b04e8e566e21c1f22fbc934c8"
        },
        "date": 1698653354719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696304.54,
            "unit": "ns",
            "range": "± 205053.00336426837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20135857.35714286,
            "unit": "ns",
            "range": "± 343485.3301647701"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51641687.666666664,
            "unit": "ns",
            "range": "± 921484.6255177154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100787207.78571428,
            "unit": "ns",
            "range": "± 3604039.5742897657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211761386.23863637,
            "unit": "ns",
            "range": "± 16147914.313065888"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54708.53409090909,
            "unit": "ns",
            "range": "± 9470.397769806961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248464.16292134832,
            "unit": "ns",
            "range": "± 17438.684747594813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235594.96808510637,
            "unit": "ns",
            "range": "± 23007.62305962546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244567.1914893617,
            "unit": "ns",
            "range": "± 20382.42040352294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3930442.5,
            "unit": "ns",
            "range": "± 64236.503858787335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3685072.705882353,
            "unit": "ns",
            "range": "± 73394.70219536003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19570.802083333332,
            "unit": "ns",
            "range": "± 4879.983703854999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73079.31318681319,
            "unit": "ns",
            "range": "± 11140.612464623984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76759.54545454546,
            "unit": "ns",
            "range": "± 11687.548570037876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69220.22340425532,
            "unit": "ns",
            "range": "± 11659.819604650611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4454.051546391753,
            "unit": "ns",
            "range": "± 1548.8061959883678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13182.41304347826,
            "unit": "ns",
            "range": "± 2792.3989239715065"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1207762.25,
            "unit": "ns",
            "range": "± 135885.18992151335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2449439.534090909,
            "unit": "ns",
            "range": "± 174779.75452972262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1886428.9782608696,
            "unit": "ns",
            "range": "± 356937.52438169875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9143364.489361702,
            "unit": "ns",
            "range": "± 1838349.299500867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438289.2,
            "unit": "ns",
            "range": "± 702136.2414148727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3065480.14893617,
            "unit": "ns",
            "range": "± 112075.02929171246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3940663.7717391304,
            "unit": "ns",
            "range": "± 425035.1176845287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3624532.3734177216,
            "unit": "ns",
            "range": "± 187426.16268611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12474878.75,
            "unit": "ns",
            "range": "± 2460007.654010239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4402700.759114583,
            "unit": "ns",
            "range": "± 77022.30416895961"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1382048.3662860577,
            "unit": "ns",
            "range": "± 18454.700474175777"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 895166.062360491,
            "unit": "ns",
            "range": "± 6480.08771484769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2096485.3271799395,
            "unit": "ns",
            "range": "± 94657.74798847377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643592.2530653211,
            "unit": "ns",
            "range": "± 17658.116868094643"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 555770.2927083333,
            "unit": "ns",
            "range": "± 8309.315843477036"
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
          "id": "e216152905d58e0dfb3b97b66ae2a7d554293016",
          "message": "Ignore webcrypto please.",
          "timestamp": "2023-10-30T17:06:24+09:00",
          "tree_id": "d980bfc63d1f292ce75e3fdc00737a7140665092",
          "url": "https://github.com/planetarium/libplanet/commit/e216152905d58e0dfb3b97b66ae2a7d554293016"
        },
        "date": 1698654408168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7586419.083333333,
            "unit": "ns",
            "range": "± 186519.730987255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21352696.86597938,
            "unit": "ns",
            "range": "± 1762193.536552542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46777400.5,
            "unit": "ns",
            "range": "± 689302.9030262553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96175309.66666667,
            "unit": "ns",
            "range": "± 2012906.6440086672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197196489.97435898,
            "unit": "ns",
            "range": "± 10130904.636206402"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44595,
            "unit": "ns",
            "range": "± 14533.936335711887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219449.09302325582,
            "unit": "ns",
            "range": "± 18253.768520904778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220748.90449438203,
            "unit": "ns",
            "range": "± 21319.877737006107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201171.93333333332,
            "unit": "ns",
            "range": "± 23493.068143699205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3742671.9523809524,
            "unit": "ns",
            "range": "± 129166.37200557676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3648606.0576923075,
            "unit": "ns",
            "range": "± 150383.79820461906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14878.35,
            "unit": "ns",
            "range": "± 2471.4898243567045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97421.4052631579,
            "unit": "ns",
            "range": "± 17769.778968125513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92875.64285714286,
            "unit": "ns",
            "range": "± 21232.7705623307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94920.6649484536,
            "unit": "ns",
            "range": "± 24832.225135513774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6604.95,
            "unit": "ns",
            "range": "± 1533.3675928111772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23155.071428571428,
            "unit": "ns",
            "range": "± 11308.210222355689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343417.7395833333,
            "unit": "ns",
            "range": "± 238778.40901713143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3220236.797979798,
            "unit": "ns",
            "range": "± 761514.2665022427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2471595.3775510206,
            "unit": "ns",
            "range": "± 664201.0941068894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12083462.295918368,
            "unit": "ns",
            "range": "± 3117829.094469344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2901682.907216495,
            "unit": "ns",
            "range": "± 170945.27176336793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2989827.870967742,
            "unit": "ns",
            "range": "± 169222.9027310497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3537318,
            "unit": "ns",
            "range": "± 65996.40761372294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3515886.012987013,
            "unit": "ns",
            "range": "± 179983.79069015407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11267931.52688172,
            "unit": "ns",
            "range": "± 1210702.445745602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4879147.78914388,
            "unit": "ns",
            "range": "± 385277.2938888407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1479763.2505131091,
            "unit": "ns",
            "range": "± 60012.26157339601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 987322.5900985055,
            "unit": "ns",
            "range": "± 24777.79817768599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2177871.3917025863,
            "unit": "ns",
            "range": "± 135522.03438708477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626507.9288611779,
            "unit": "ns",
            "range": "± 5594.353619773707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 600364.8939998851,
            "unit": "ns",
            "range": "± 28460.69765176508"
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
          "id": "e0d5c13ceed51c5fbf7b6992f75cd27570ec9e6b",
          "message": "add",
          "timestamp": "2023-10-30T17:16:24+09:00",
          "tree_id": "cea59a7d19993663785f216c16eebcf70d55c22d",
          "url": "https://github.com/planetarium/libplanet/commit/e0d5c13ceed51c5fbf7b6992f75cd27570ec9e6b"
        },
        "date": 1698654863818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9322903.946808511,
            "unit": "ns",
            "range": "± 1239360.0512648243"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23792109.13186813,
            "unit": "ns",
            "range": "± 3266929.558475716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56901631.34042553,
            "unit": "ns",
            "range": "± 5007725.306098136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119295239.51123595,
            "unit": "ns",
            "range": "± 8905042.414870596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229516107.97126436,
            "unit": "ns",
            "range": "± 18454243.895749196"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59215.01162790698,
            "unit": "ns",
            "range": "± 5038.632752792196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270655.8058823529,
            "unit": "ns",
            "range": "± 31414.47252273246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247392.06097560975,
            "unit": "ns",
            "range": "± 12778.777739710766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254311.546875,
            "unit": "ns",
            "range": "± 10507.272031946419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3949928.3421052634,
            "unit": "ns",
            "range": "± 67989.25172674409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782262.1428571427,
            "unit": "ns",
            "range": "± 65507.87975251778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24917.021276595744,
            "unit": "ns",
            "range": "± 4003.104455855315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99563.98876404495,
            "unit": "ns",
            "range": "± 16110.862444815966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91578.82222222222,
            "unit": "ns",
            "range": "± 8275.19661442348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95311.69473684211,
            "unit": "ns",
            "range": "± 20030.342644838925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7531.925531914893,
            "unit": "ns",
            "range": "± 1253.267679354776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21907.153846153848,
            "unit": "ns",
            "range": "± 3501.012539007908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1243125.1477272727,
            "unit": "ns",
            "range": "± 98046.28602742191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2716977.5681818184,
            "unit": "ns",
            "range": "± 341119.0922323472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1929096.5909090908,
            "unit": "ns",
            "range": "± 291667.23738509556"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10180365.25,
            "unit": "ns",
            "range": "± 2485319.3742155386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3131170.25,
            "unit": "ns",
            "range": "± 224801.4525463721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354638.8924731184,
            "unit": "ns",
            "range": "± 368626.83826974564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4041085.3,
            "unit": "ns",
            "range": "± 459551.2761262934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4508848.594736842,
            "unit": "ns",
            "range": "± 801006.6747780447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12820989.933333334,
            "unit": "ns",
            "range": "± 1756899.9410807895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5461604.8564453125,
            "unit": "ns",
            "range": "± 411788.8388975939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1432786.6009680706,
            "unit": "ns",
            "range": "± 33754.10816728323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 906117.2603515625,
            "unit": "ns",
            "range": "± 14625.721856828055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2105324.2401123047,
            "unit": "ns",
            "range": "± 55896.759373107365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 649008.9516276042,
            "unit": "ns",
            "range": "± 11151.370780297555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572806.2854352678,
            "unit": "ns",
            "range": "± 5871.531360334623"
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
          "id": "84f3847d103b21815f01b4c211738a66d590416c",
          "message": "Add Bencodex",
          "timestamp": "2023-10-30T18:35:45+09:00",
          "tree_id": "e710bec7a0d043af9dfde77dccbf5c53b61808cb",
          "url": "https://github.com/planetarium/libplanet/commit/84f3847d103b21815f01b4c211738a66d590416c"
        },
        "date": 1698659723153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8966061.15625,
            "unit": "ns",
            "range": "± 556246.4940208999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22369597.2,
            "unit": "ns",
            "range": "± 1367357.0114367653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55128911.027777776,
            "unit": "ns",
            "range": "± 2716165.199743705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111392600.67213115,
            "unit": "ns",
            "range": "± 4999567.496689688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233412269.92307693,
            "unit": "ns",
            "range": "± 6356195.009992812"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74136.38202247191,
            "unit": "ns",
            "range": "± 10767.338856790282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 356734.0052631579,
            "unit": "ns",
            "range": "± 46067.208455591586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329858.8958333333,
            "unit": "ns",
            "range": "± 39195.12676542144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298226.3859649123,
            "unit": "ns",
            "range": "± 12894.24763599532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4174414.227272727,
            "unit": "ns",
            "range": "± 87524.98337763574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614895.276595745,
            "unit": "ns",
            "range": "± 139068.7013533868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21755.872340425532,
            "unit": "ns",
            "range": "± 3116.2755478261884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107674.46875,
            "unit": "ns",
            "range": "± 17503.870568325663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 111420.92045454546,
            "unit": "ns",
            "range": "± 13187.7053542624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129767.0412371134,
            "unit": "ns",
            "range": "± 27853.018138344512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8278,
            "unit": "ns",
            "range": "± 1147.0147339942935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27296.15625,
            "unit": "ns",
            "range": "± 8092.734111961661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533657.18,
            "unit": "ns",
            "range": "± 231224.79427335458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2848986.76,
            "unit": "ns",
            "range": "± 143666.8652524135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2368182.7680412373,
            "unit": "ns",
            "range": "± 172269.43233169877"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10565346.397435898,
            "unit": "ns",
            "range": "± 696863.0262560284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3558040.873737374,
            "unit": "ns",
            "range": "± 384146.84420726367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3662495.24,
            "unit": "ns",
            "range": "± 340842.33989868173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4758757.644329897,
            "unit": "ns",
            "range": "± 426078.9170851791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4650682.04040404,
            "unit": "ns",
            "range": "± 453828.91693950945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19850678.860215053,
            "unit": "ns",
            "range": "± 4570329.793917318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6562487.709161932,
            "unit": "ns",
            "range": "± 375256.5797585776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1847540.5131138393,
            "unit": "ns",
            "range": "± 18112.66394074817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1107098.6983072916,
            "unit": "ns",
            "range": "± 11183.239987481802"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2800486.777083333,
            "unit": "ns",
            "range": "± 37592.280309964175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929723.5176454742,
            "unit": "ns",
            "range": "± 27179.27450420379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785808.6369140625,
            "unit": "ns",
            "range": "± 10421.086372934626"
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
          "id": "86cdf8f2f0c9b5e58140ba8a87468c5a07aa00e2",
          "message": "Remove Digest Completely",
          "timestamp": "2023-10-30T18:30:21+09:00",
          "tree_id": "570135ea1317008d349303c9e97cdd44e428545b",
          "url": "https://github.com/planetarium/libplanet/commit/86cdf8f2f0c9b5e58140ba8a87468c5a07aa00e2"
        },
        "date": 1698659867268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10274970.032786885,
            "unit": "ns",
            "range": "± 452091.9206660288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24796650.8,
            "unit": "ns",
            "range": "± 385184.02496528486"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70994073.25531915,
            "unit": "ns",
            "range": "± 6569883.276544146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133305611.46,
            "unit": "ns",
            "range": "± 3361687.1502213175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286154129.9787234,
            "unit": "ns",
            "range": "± 19637048.813531935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85363.5625,
            "unit": "ns",
            "range": "± 28400.788707659252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312792.9197530864,
            "unit": "ns",
            "range": "± 16472.451776271948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310515.3977272727,
            "unit": "ns",
            "range": "± 23385.70199489461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294680.6060606061,
            "unit": "ns",
            "range": "± 9229.961866590356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5063369.833333333,
            "unit": "ns",
            "range": "± 51594.47332336237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4652435.730769231,
            "unit": "ns",
            "range": "± 37084.924302547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23212.466666666667,
            "unit": "ns",
            "range": "± 2268.688233814243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110256.98913043478,
            "unit": "ns",
            "range": "± 23328.2312219537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103842.48888888888,
            "unit": "ns",
            "range": "± 18395.465833160524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100659.72941176471,
            "unit": "ns",
            "range": "± 11419.465304583093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7797.510752688172,
            "unit": "ns",
            "range": "± 1601.644083940703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21799.369565217392,
            "unit": "ns",
            "range": "± 2876.792214314108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2159137.5408163266,
            "unit": "ns",
            "range": "± 575724.5150207115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4770639.09,
            "unit": "ns",
            "range": "± 1163482.5358389285"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3255187.724489796,
            "unit": "ns",
            "range": "± 769728.8488598192"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16053030.808510639,
            "unit": "ns",
            "range": "± 3209855.5296711624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4991697.152631579,
            "unit": "ns",
            "range": "± 912452.1416489297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4170339.1875,
            "unit": "ns",
            "range": "± 129362.56664854479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4911924.307692308,
            "unit": "ns",
            "range": "± 72207.96778332317"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4844812.478947368,
            "unit": "ns",
            "range": "± 293258.584794549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15237075.555555556,
            "unit": "ns",
            "range": "± 1723234.4983107084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6506118.852361506,
            "unit": "ns",
            "range": "± 354936.8789439974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935014.590093085,
            "unit": "ns",
            "range": "± 116234.1338561037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1219492.197554977,
            "unit": "ns",
            "range": "± 34015.224311233535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843104.8284801138,
            "unit": "ns",
            "range": "± 62319.744481217276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837932.820421007,
            "unit": "ns",
            "range": "± 16463.380968066464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 665809.8844469573,
            "unit": "ns",
            "range": "± 47960.660438988656"
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
          "id": "4638937631a167ffec77383364757fb30d034fae",
          "message": "Test",
          "timestamp": "2023-10-30T18:49:11+09:00",
          "tree_id": "107eeb0ad22c5488a1a7c6ee6389236bf806bd6c",
          "url": "https://github.com/planetarium/libplanet/commit/4638937631a167ffec77383364757fb30d034fae"
        },
        "date": 1698660845584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7971409.75,
            "unit": "ns",
            "range": "± 567397.1257404044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19319507.18292683,
            "unit": "ns",
            "range": "± 1023326.4667026242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47008535.862068966,
            "unit": "ns",
            "range": "± 2017352.6312003033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118364582.5,
            "unit": "ns",
            "range": "± 12719901.218030293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240244048.8469388,
            "unit": "ns",
            "range": "± 21608051.033105697"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43029.47368421053,
            "unit": "ns",
            "range": "± 10160.603648764123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 420423.21276595746,
            "unit": "ns",
            "range": "± 98465.6040058072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 284340.5294117647,
            "unit": "ns",
            "range": "± 38387.518663092094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284628.2417582418,
            "unit": "ns",
            "range": "± 29290.06552640167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5674642.903225807,
            "unit": "ns",
            "range": "± 168001.6710649738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5146767.7,
            "unit": "ns",
            "range": "± 180432.36153568348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24570.08510638298,
            "unit": "ns",
            "range": "± 4713.625913892603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 123536.07608695653,
            "unit": "ns",
            "range": "± 16756.53919278745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103287.46511627907,
            "unit": "ns",
            "range": "± 11908.420616815822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94125.12222222223,
            "unit": "ns",
            "range": "± 13626.725980836483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7317.747368421053,
            "unit": "ns",
            "range": "± 1363.7027111634306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24188.771739130436,
            "unit": "ns",
            "range": "± 3593.4758009397806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587463.5217391304,
            "unit": "ns",
            "range": "± 157854.83619354788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3431229.2696629213,
            "unit": "ns",
            "range": "± 462963.7196361946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2267953.7647058824,
            "unit": "ns",
            "range": "± 117925.44705343925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10262032.2625,
            "unit": "ns",
            "range": "± 611828.5436775163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3671237.2474747472,
            "unit": "ns",
            "range": "± 486259.4993058022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690852.17,
            "unit": "ns",
            "range": "± 401653.8134215356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4639105.858695652,
            "unit": "ns",
            "range": "± 253297.61981491826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5055677.707317073,
            "unit": "ns",
            "range": "± 181629.2086483124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 19304909.691011235,
            "unit": "ns",
            "range": "± 3130704.1847068924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018257.53251008,
            "unit": "ns",
            "range": "± 491018.1002988013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836343.25734375,
            "unit": "ns",
            "range": "± 220581.9926831563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1233906.0583673008,
            "unit": "ns",
            "range": "± 59464.71351160593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611257.5368430396,
            "unit": "ns",
            "range": "± 142263.7555452618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655842.0544947574,
            "unit": "ns",
            "range": "± 33339.99995797127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580341.4576302083,
            "unit": "ns",
            "range": "± 28389.967046932983"
          }
        ]
      }
    ]
  }
}