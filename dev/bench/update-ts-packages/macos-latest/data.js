window.BENCHMARK_DATA = {
  "lastUpdate": 1698648299753,
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
      }
    ]
  }
}