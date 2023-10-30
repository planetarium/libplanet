window.BENCHMARK_DATA = {
  "lastUpdate": 1698649761462,
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
      }
    ]
  }
}