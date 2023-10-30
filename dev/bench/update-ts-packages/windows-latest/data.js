window.BENCHMARK_DATA = {
  "lastUpdate": 1698652975898,
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
        "date": 1698644906973,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493289.7849462365,
            "unit": "ns",
            "range": "± 138259.31695925668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836780.6666666665,
            "unit": "ns",
            "range": "± 142473.00358155416"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161842.5531914895,
            "unit": "ns",
            "range": "± 126945.64452701349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9945541.42857143,
            "unit": "ns",
            "range": "± 479979.3623259226"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58358.06451612903,
            "unit": "ns",
            "range": "± 5316.735729926718"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855184.126984127,
            "unit": "ns",
            "range": "± 404187.5423876927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23866839.13043478,
            "unit": "ns",
            "range": "± 1151316.202952771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59618960,
            "unit": "ns",
            "range": "± 1921480.4251501742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119714100,
            "unit": "ns",
            "range": "± 3082328.435932245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241534583.33333334,
            "unit": "ns",
            "range": "± 6270768.528287607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5286152.399553572,
            "unit": "ns",
            "range": "± 67610.01968787088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1757996.665736607,
            "unit": "ns",
            "range": "± 25272.782338874178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320463.4244791667,
            "unit": "ns",
            "range": "± 9464.141065711285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3198810.15625,
            "unit": "ns",
            "range": "± 65351.38823742413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 999128.1380208334,
            "unit": "ns",
            "range": "± 9758.191218752772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 917253.0301339285,
            "unit": "ns",
            "range": "± 30077.15985915957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3678993.4782608696,
            "unit": "ns",
            "range": "± 141182.86707855784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3941512.5,
            "unit": "ns",
            "range": "± 182047.02035201679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584677.777777778,
            "unit": "ns",
            "range": "± 226612.9089110614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4442950,
            "unit": "ns",
            "range": "± 208297.40221431176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11561439.08045977,
            "unit": "ns",
            "range": "± 959516.8384862662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288900,
            "unit": "ns",
            "range": "± 14505.432346799165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277605.3333333333,
            "unit": "ns",
            "range": "± 13873.82226151626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264868.0412371134,
            "unit": "ns",
            "range": "± 16718.724198682597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4712975.714285715,
            "unit": "ns",
            "range": "± 153348.64993528568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4243692.307692308,
            "unit": "ns",
            "range": "± 196723.15041360495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23189.247311827956,
            "unit": "ns",
            "range": "± 1711.753637139118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97944.08602150538,
            "unit": "ns",
            "range": "± 8229.605389208227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84680.92783505155,
            "unit": "ns",
            "range": "± 9423.898706930586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99219.14893617021,
            "unit": "ns",
            "range": "± 12554.603547529648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5995.833333333333,
            "unit": "ns",
            "range": "± 897.1201488114671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21517.391304347828,
            "unit": "ns",
            "range": "± 1619.4971879881657"
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
        "date": 1698645976295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1565243.6842105263,
            "unit": "ns",
            "range": "± 116619.34149509798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2974325,
            "unit": "ns",
            "range": "± 97633.71307377092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2330633.695652174,
            "unit": "ns",
            "range": "± 142233.6000528506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10735163.218390804,
            "unit": "ns",
            "range": "± 965725.8582447427"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64072.63157894737,
            "unit": "ns",
            "range": "± 5786.51113247233"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9600313.333333334,
            "unit": "ns",
            "range": "± 130194.71059404321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25080902.63157895,
            "unit": "ns",
            "range": "± 328020.12703901273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62779007.692307696,
            "unit": "ns",
            "range": "± 414595.17295296316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129736673.17073171,
            "unit": "ns",
            "range": "± 4577053.765307132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 262181154,
            "unit": "ns",
            "range": "± 6210332.542389873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5661935.460069444,
            "unit": "ns",
            "range": "± 101759.99892327908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1818779.3334960938,
            "unit": "ns",
            "range": "± 30239.58708062555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339319.810267857,
            "unit": "ns",
            "range": "± 23415.18988604291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3309717.09375,
            "unit": "ns",
            "range": "± 86205.72643224048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1039123.7767269737,
            "unit": "ns",
            "range": "± 22407.9824763087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 964155.7794744318,
            "unit": "ns",
            "range": "± 23666.063108621256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4024073.3333333335,
            "unit": "ns",
            "range": "± 47123.85605533368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4341335.714285715,
            "unit": "ns",
            "range": "± 64433.33593893598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5104440,
            "unit": "ns",
            "range": "± 116637.69996288326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4882565.116279069,
            "unit": "ns",
            "range": "± 177993.68352051274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12946660,
            "unit": "ns",
            "range": "± 1220214.077073216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316846.05263157893,
            "unit": "ns",
            "range": "± 15886.266108724009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304165.2173913043,
            "unit": "ns",
            "range": "± 11607.377297627083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284379.3103448276,
            "unit": "ns",
            "range": "± 12420.650018596149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5048486.666666667,
            "unit": "ns",
            "range": "± 44542.19294535185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4625810,
            "unit": "ns",
            "range": "± 117065.9429552421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28524.48979591837,
            "unit": "ns",
            "range": "± 2981.8371568198872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118593.81443298969,
            "unit": "ns",
            "range": "± 11481.287442626206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98828.28282828283,
            "unit": "ns",
            "range": "± 8803.872529235565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113203.1914893617,
            "unit": "ns",
            "range": "± 12655.736955109174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6680.851063829788,
            "unit": "ns",
            "range": "± 980.8134210066728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25891.304347826088,
            "unit": "ns",
            "range": "± 2296.6125161227474"
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
        "date": 1698647591337,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1697189.4736842106,
            "unit": "ns",
            "range": "± 159244.26672179627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3378007.216494845,
            "unit": "ns",
            "range": "± 214671.62532158985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2535282.6315789474,
            "unit": "ns",
            "range": "± 202199.53355698104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11607668.681318682,
            "unit": "ns",
            "range": "± 1023320.8895999215"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64320.21276595745,
            "unit": "ns",
            "range": "± 10770.385320602225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9734505,
            "unit": "ns",
            "range": "± 432768.6074586452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26157292.307692308,
            "unit": "ns",
            "range": "± 893573.4913329488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66265180,
            "unit": "ns",
            "range": "± 1031101.6724150644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134874784.21052632,
            "unit": "ns",
            "range": "± 2867891.755911602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267149307.69230768,
            "unit": "ns",
            "range": "± 2892389.3451785785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5830529.947916667,
            "unit": "ns",
            "range": "± 94461.63162292576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1859044.8177083333,
            "unit": "ns",
            "range": "± 14528.343319004814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360625.9486607143,
            "unit": "ns",
            "range": "± 8507.614983632775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3311203.492647059,
            "unit": "ns",
            "range": "± 67175.37317182579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1073464.5182291667,
            "unit": "ns",
            "range": "± 18441.730213521627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 993749.7786458334,
            "unit": "ns",
            "range": "± 10635.533430820025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4074225,
            "unit": "ns",
            "range": "± 272649.6284129824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4234318.085106383,
            "unit": "ns",
            "range": "± 250343.46211605117"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5333541.935483871,
            "unit": "ns",
            "range": "± 300451.66410161654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4862028.865979382,
            "unit": "ns",
            "range": "± 471574.8113499516"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13339652.222222222,
            "unit": "ns",
            "range": "± 765125.2018024294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330668.1818181818,
            "unit": "ns",
            "range": "± 15337.146049739791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327343.3333333333,
            "unit": "ns",
            "range": "± 27803.653668238836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300972.54901960783,
            "unit": "ns",
            "range": "± 12115.825657896743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5245434.146341464,
            "unit": "ns",
            "range": "± 188249.20399533713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4405781.052631579,
            "unit": "ns",
            "range": "± 251425.6788349265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27611.458333333332,
            "unit": "ns",
            "range": "± 8109.836389960641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110796.90721649484,
            "unit": "ns",
            "range": "± 22261.28203484812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121586.45833333333,
            "unit": "ns",
            "range": "± 20132.34433386218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124815.78947368421,
            "unit": "ns",
            "range": "± 20320.581306548745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8498.901098901099,
            "unit": "ns",
            "range": "± 1671.4926466747224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25416.494845360823,
            "unit": "ns",
            "range": "± 8779.233076940376"
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
        "date": 1698647958624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1261530.6818181819,
            "unit": "ns",
            "range": "± 67784.2077324843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2402555.5555555555,
            "unit": "ns",
            "range": "± 122715.82925604992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1910629.1666666667,
            "unit": "ns",
            "range": "± 127828.80814973774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8891423.076923076,
            "unit": "ns",
            "range": "± 552450.7618234553"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53794.68085106383,
            "unit": "ns",
            "range": "± 3648.025449746063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7644461.904761905,
            "unit": "ns",
            "range": "± 180309.90953408653"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21330092.85714286,
            "unit": "ns",
            "range": "± 204515.16951179825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52411921.428571425,
            "unit": "ns",
            "range": "± 620933.686758617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103928962.5,
            "unit": "ns",
            "range": "± 1850205.7568011186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211436640,
            "unit": "ns",
            "range": "± 2589758.129853608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4512169.166666667,
            "unit": "ns",
            "range": "± 18419.555024826008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1469971.7057291667,
            "unit": "ns",
            "range": "± 5135.918878191089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1094764.6763392857,
            "unit": "ns",
            "range": "± 4243.887969471886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630232.2526041665,
            "unit": "ns",
            "range": "± 6192.564830526103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839641.7201450893,
            "unit": "ns",
            "range": "± 1880.178301646672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781124.4907924107,
            "unit": "ns",
            "range": "± 2603.3339862041526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3204931.25,
            "unit": "ns",
            "range": "± 58972.54410599337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3323516,
            "unit": "ns",
            "range": "± 79941.65414017068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4086575,
            "unit": "ns",
            "range": "± 105157.85752857463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4104580,
            "unit": "ns",
            "range": "± 128213.71588553414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10307711.627906976,
            "unit": "ns",
            "range": "± 558076.0240048693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249890,
            "unit": "ns",
            "range": "± 7265.096055087996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231823.80952380953,
            "unit": "ns",
            "range": "± 7046.147867289756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204023.07692307694,
            "unit": "ns",
            "range": "± 3339.199965599007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4082976.923076923,
            "unit": "ns",
            "range": "± 47778.50203187891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3687647.8260869565,
            "unit": "ns",
            "range": "± 89382.39032161057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20780.208333333332,
            "unit": "ns",
            "range": "± 1900.4497967124946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85095.6043956044,
            "unit": "ns",
            "range": "± 4787.667306920797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74411.70212765958,
            "unit": "ns",
            "range": "± 4867.6429212959665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89615.46391752578,
            "unit": "ns",
            "range": "± 11312.846129199997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4956.8421052631575,
            "unit": "ns",
            "range": "± 639.4233824611622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19665.263157894737,
            "unit": "ns",
            "range": "± 1840.603995515893"
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
        "date": 1698648213553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1248822,
            "unit": "ns",
            "range": "± 93006.42812584124"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2383075.5102040814,
            "unit": "ns",
            "range": "± 94191.77806168524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1886844.7916666667,
            "unit": "ns",
            "range": "± 118445.48901213823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8742460.227272727,
            "unit": "ns",
            "range": "± 556802.8926590728"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51754.83870967742,
            "unit": "ns",
            "range": "± 4249.872533357868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7283866.666666667,
            "unit": "ns",
            "range": "± 28981.660867981092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20161228,
            "unit": "ns",
            "range": "± 521170.64185670833"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50700936.84210526,
            "unit": "ns",
            "range": "± 1103032.2969032666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100647172,
            "unit": "ns",
            "range": "± 2589217.93445434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197342916.66666666,
            "unit": "ns",
            "range": "± 3999896.0548626613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4467797.03125,
            "unit": "ns",
            "range": "± 28551.964908924136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1464428.8504464286,
            "unit": "ns",
            "range": "± 8412.655460816088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1079778.5416666667,
            "unit": "ns",
            "range": "± 5444.357402497457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663232.2916666665,
            "unit": "ns",
            "range": "± 7153.808661135036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836727.87109375,
            "unit": "ns",
            "range": "± 4502.229459012694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765546.34765625,
            "unit": "ns",
            "range": "± 2652.782210662164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145239.024390244,
            "unit": "ns",
            "range": "± 112928.77595646025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3198435.294117647,
            "unit": "ns",
            "range": "± 57972.331128483944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4046761.111111111,
            "unit": "ns",
            "range": "± 134788.36591969494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3947546.4285714286,
            "unit": "ns",
            "range": "± 167804.8953281873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10051083.908045977,
            "unit": "ns",
            "range": "± 681938.055032001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252600,
            "unit": "ns",
            "range": "± 10062.471532050828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233571.73913043478,
            "unit": "ns",
            "range": "± 8782.170398495611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206310,
            "unit": "ns",
            "range": "± 7307.663697649798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967047.8260869565,
            "unit": "ns",
            "range": "± 99276.76130881981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3629314.285714286,
            "unit": "ns",
            "range": "± 55977.10874363469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18787.777777777777,
            "unit": "ns",
            "range": "± 1235.3253474722217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79963.04347826086,
            "unit": "ns",
            "range": "± 5469.389691956907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67027.27272727272,
            "unit": "ns",
            "range": "± 1646.6941827800729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86102.04081632652,
            "unit": "ns",
            "range": "± 9154.14366872157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4565.625,
            "unit": "ns",
            "range": "± 777.5573256917088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18259.79381443299,
            "unit": "ns",
            "range": "± 1548.4306432787598"
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
        "date": 1698648362823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1364752.5252525252,
            "unit": "ns",
            "range": "± 140540.8338827403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459315.5555555555,
            "unit": "ns",
            "range": "± 93078.9302287325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1937212.5,
            "unit": "ns",
            "range": "± 123993.60955519568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8956204.705882354,
            "unit": "ns",
            "range": "± 674849.687127205"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51960.43956043956,
            "unit": "ns",
            "range": "± 4312.897430855996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7734173.333333333,
            "unit": "ns",
            "range": "± 317586.4355141744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21638127.272727273,
            "unit": "ns",
            "range": "± 918693.3007860082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52422986.666666664,
            "unit": "ns",
            "range": "± 848679.980799314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107723307.6923077,
            "unit": "ns",
            "range": "± 963733.047807274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212557816.66666666,
            "unit": "ns",
            "range": "± 2406361.9361764323"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4615598.645833333,
            "unit": "ns",
            "range": "± 51410.601617020366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526708.2096354167,
            "unit": "ns",
            "range": "± 44935.55431005743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1112940.3837316176,
            "unit": "ns",
            "range": "± 16355.327743681104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719012.2135416665,
            "unit": "ns",
            "range": "± 45988.307212296575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875777.0182291666,
            "unit": "ns",
            "range": "± 13969.089094390201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780388.3919270834,
            "unit": "ns",
            "range": "± 12085.91752813884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3206850.819672131,
            "unit": "ns",
            "range": "± 144642.02434856293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3380107.5757575757,
            "unit": "ns",
            "range": "± 144073.65563980545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4215596.774193549,
            "unit": "ns",
            "range": "± 128147.7883379732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4343222.222222222,
            "unit": "ns",
            "range": "± 91654.52753847271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10201035.135135135,
            "unit": "ns",
            "range": "± 343308.0129953083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266280,
            "unit": "ns",
            "range": "± 10648.54114756705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255413.04347826086,
            "unit": "ns",
            "range": "± 12245.934656081707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222144.89795918367,
            "unit": "ns",
            "range": "± 16061.005620317554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4113433.3333333335,
            "unit": "ns",
            "range": "± 114824.70921432305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678966.6666666665,
            "unit": "ns",
            "range": "± 67541.40342390427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21090.526315789473,
            "unit": "ns",
            "range": "± 2661.189690929345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90303.15789473684,
            "unit": "ns",
            "range": "± 7384.910616603938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73484.375,
            "unit": "ns",
            "range": "± 5409.958227779193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91225,
            "unit": "ns",
            "range": "± 13590.960352260001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5754.081632653061,
            "unit": "ns",
            "range": "± 1224.9273799090768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19533.333333333332,
            "unit": "ns",
            "range": "± 2208.579761159535"
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
        "date": 1698648362387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334461,
            "unit": "ns",
            "range": "± 136642.36139749206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2511765.3061224488,
            "unit": "ns",
            "range": "± 157263.95311346586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1966509.2783505155,
            "unit": "ns",
            "range": "± 134164.12374593838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8455140.54054054,
            "unit": "ns",
            "range": "± 286738.52825978684"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50827.47252747253,
            "unit": "ns",
            "range": "± 3590.3904440747865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7270230.769230769,
            "unit": "ns",
            "range": "± 25455.85671364531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19952753.333333332,
            "unit": "ns",
            "range": "± 316637.482815616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49796473.333333336,
            "unit": "ns",
            "range": "± 913389.1233568892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98706900,
            "unit": "ns",
            "range": "± 1646301.294977974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210053620,
            "unit": "ns",
            "range": "± 6145439.259763965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4777677.399553572,
            "unit": "ns",
            "range": "± 21106.035208353565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1496426.9140625,
            "unit": "ns",
            "range": "± 5798.882273476766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1105295.4817708333,
            "unit": "ns",
            "range": "± 4213.640936978427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2735535.7421875,
            "unit": "ns",
            "range": "± 8031.901285755023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 856555.5013020834,
            "unit": "ns",
            "range": "± 2961.653916753971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 775606.03515625,
            "unit": "ns",
            "range": "± 2442.6109079280204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3165591.8032786883,
            "unit": "ns",
            "range": "± 123353.76672411477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3216406.8181818184,
            "unit": "ns",
            "range": "± 119589.2182231408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4078397.1428571427,
            "unit": "ns",
            "range": "± 131893.39386238347"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3947687.5,
            "unit": "ns",
            "range": "± 168844.20044149362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10028945.945945946,
            "unit": "ns",
            "range": "± 276815.95228859456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258933.33333333334,
            "unit": "ns",
            "range": "± 10033.35571732382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248747.45762711865,
            "unit": "ns",
            "range": "± 10940.203552481338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217513.7931034483,
            "unit": "ns",
            "range": "± 9333.629975408621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4170904.761904762,
            "unit": "ns",
            "range": "± 97847.31716399013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3868973.3333333335,
            "unit": "ns",
            "range": "± 63923.13985970815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21660.869565217392,
            "unit": "ns",
            "range": "± 2484.6321735308957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88991.66666666667,
            "unit": "ns",
            "range": "± 7446.873828967522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74365.59139784946,
            "unit": "ns",
            "range": "± 4622.240531050036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93960.63829787234,
            "unit": "ns",
            "range": "± 13617.108294269834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6897.938144329897,
            "unit": "ns",
            "range": "± 1149.4545247496112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23937.113402061856,
            "unit": "ns",
            "range": "± 2894.3306504422317"
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
        "date": 1698648376812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1304286,
            "unit": "ns",
            "range": "± 109563.11683087959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2380646,
            "unit": "ns",
            "range": "± 69705.60531438557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103464.285714286,
            "unit": "ns",
            "range": "± 58621.83396985647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7745178.571428572,
            "unit": "ns",
            "range": "± 414726.1099596599"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43412.19512195122,
            "unit": "ns",
            "range": "± 2316.0945333434297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7261816.666666667,
            "unit": "ns",
            "range": "± 65667.6988074553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17960736.666666668,
            "unit": "ns",
            "range": "± 69730.81780949477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46295326.666666664,
            "unit": "ns",
            "range": "± 128300.72634616058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93688380,
            "unit": "ns",
            "range": "± 431626.5088509476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187972660,
            "unit": "ns",
            "range": "± 536193.1192610151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4430842.1875,
            "unit": "ns",
            "range": "± 2624.5070010198083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1444082.2591145833,
            "unit": "ns",
            "range": "± 1806.7279655327807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1074122.935267857,
            "unit": "ns",
            "range": "± 670.1842907718031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2488818.9583333335,
            "unit": "ns",
            "range": "± 3374.4316918110867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798875.68359375,
            "unit": "ns",
            "range": "± 646.5711346509854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 715743.6174665178,
            "unit": "ns",
            "range": "± 997.546896630709"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3018838.4615384615,
            "unit": "ns",
            "range": "± 80617.70563305843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3167534.6153846155,
            "unit": "ns",
            "range": "± 84170.62167909984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4033944,
            "unit": "ns",
            "range": "± 107207.37334717235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3829186.3636363638,
            "unit": "ns",
            "range": "± 93591.15900174569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9137830.232558139,
            "unit": "ns",
            "range": "± 249206.91778872057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245906.3492063492,
            "unit": "ns",
            "range": "± 10949.530451206323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233490.625,
            "unit": "ns",
            "range": "± 7226.937038027445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218767,
            "unit": "ns",
            "range": "± 13400.06825702501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3805486.6666666665,
            "unit": "ns",
            "range": "± 24807.454716754186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3538200,
            "unit": "ns",
            "range": "± 39611.21774735752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18975.25773195876,
            "unit": "ns",
            "range": "± 1861.228924653181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82009.78260869565,
            "unit": "ns",
            "range": "± 4843.099992219784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63991.666666666664,
            "unit": "ns",
            "range": "± 2146.542069735149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77529.78723404255,
            "unit": "ns",
            "range": "± 7645.841230779442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4392.708333333333,
            "unit": "ns",
            "range": "± 535.7227860645578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18051.08695652174,
            "unit": "ns",
            "range": "± 1356.181984385965"
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
        "date": 1698648695781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328191,
            "unit": "ns",
            "range": "± 94443.73675967779"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471419.35483871,
            "unit": "ns",
            "range": "± 111542.50066819663"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1932494.9494949495,
            "unit": "ns",
            "range": "± 117425.76671462627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8802386.315789474,
            "unit": "ns",
            "range": "± 518388.0399055647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50444.21052631579,
            "unit": "ns",
            "range": "± 3444.135187423647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7444861.538461538,
            "unit": "ns",
            "range": "± 75825.43041378597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20386307.14285714,
            "unit": "ns",
            "range": "± 200255.48475840598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50471210.526315786,
            "unit": "ns",
            "range": "± 1120716.3294046142"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103824600,
            "unit": "ns",
            "range": "± 2439321.192463182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209546492.85714287,
            "unit": "ns",
            "range": "± 2871438.1903001647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4617599.429086538,
            "unit": "ns",
            "range": "± 19647.21145879156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1481355.3013392857,
            "unit": "ns",
            "range": "± 6204.232201610302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1097319.4140625,
            "unit": "ns",
            "range": "± 3950.1470036943183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2701392.7584134615,
            "unit": "ns",
            "range": "± 6594.38246284739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832153.9322916666,
            "unit": "ns",
            "range": "± 2840.437759990145"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768365.8342633928,
            "unit": "ns",
            "range": "± 2047.9731801125301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3159148.6486486485,
            "unit": "ns",
            "range": "± 104460.78376761943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3347298.214285714,
            "unit": "ns",
            "range": "± 143512.16418645676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4052564.925373134,
            "unit": "ns",
            "range": "± 189904.1985379545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4065988.888888889,
            "unit": "ns",
            "range": "± 112341.49974120234"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10116684.615384616,
            "unit": "ns",
            "range": "± 338054.2984558153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250973.07692307694,
            "unit": "ns",
            "range": "± 6637.563269291386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240226.66666666666,
            "unit": "ns",
            "range": "± 7037.286572170454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217766.66666666666,
            "unit": "ns",
            "range": "± 11582.06271381861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4148266.6666666665,
            "unit": "ns",
            "range": "± 72068.56523643367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3794580,
            "unit": "ns",
            "range": "± 66792.50599537988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20602.247191011236,
            "unit": "ns",
            "range": "± 1767.57265043502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87021.42857142857,
            "unit": "ns",
            "range": "± 6969.717265634711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70344.68085106384,
            "unit": "ns",
            "range": "± 2720.1189640415346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87437.11340206186,
            "unit": "ns",
            "range": "± 9512.998996851064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5185.106382978724,
            "unit": "ns",
            "range": "± 657.2928263177013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20487.36842105263,
            "unit": "ns",
            "range": "± 2105.930941123045"
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
        "date": 1698649041962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1277664.6464646466,
            "unit": "ns",
            "range": "± 112220.07561050207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2427078.846153846,
            "unit": "ns",
            "range": "± 99850.87770788341"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1887222.2222222222,
            "unit": "ns",
            "range": "± 104209.87118998474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8855592.045454545,
            "unit": "ns",
            "range": "± 552786.3554426648"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51721.27659574468,
            "unit": "ns",
            "range": "± 3411.0784830161583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7361700,
            "unit": "ns",
            "range": "± 16572.56769483836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20342000,
            "unit": "ns",
            "range": "± 325606.5960397845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51094684.21052632,
            "unit": "ns",
            "range": "± 1134497.1545251803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101278653.33333333,
            "unit": "ns",
            "range": "± 1591504.6671385572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200878733.33333334,
            "unit": "ns",
            "range": "± 2752805.2452171836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4574774.895833333,
            "unit": "ns",
            "range": "± 15221.79474239163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1464058.6588541667,
            "unit": "ns",
            "range": "± 5322.12910450453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092211.3802083333,
            "unit": "ns",
            "range": "± 5377.36024633629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629719.1927083335,
            "unit": "ns",
            "range": "± 9563.835992876244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825727.0572916666,
            "unit": "ns",
            "range": "± 2430.3225618124934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779402.03125,
            "unit": "ns",
            "range": "± 2548.3568205854904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3117531.0344827585,
            "unit": "ns",
            "range": "± 90323.36789656007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3285993.75,
            "unit": "ns",
            "range": "± 127869.92211377536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3969883.3333333335,
            "unit": "ns",
            "range": "± 83066.30413322205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3859055.3571428573,
            "unit": "ns",
            "range": "± 164324.11533268672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9888575,
            "unit": "ns",
            "range": "± 324122.6680970632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247840.32258064515,
            "unit": "ns",
            "range": "± 7537.256567156233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234816.66666666666,
            "unit": "ns",
            "range": "± 9047.965172284055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211500,
            "unit": "ns",
            "range": "± 9099.545270942446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3988378.5714285714,
            "unit": "ns",
            "range": "± 55568.36646553821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3700763.1578947366,
            "unit": "ns",
            "range": "± 81858.12394710956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18780,
            "unit": "ns",
            "range": "± 1662.3524687433405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81905.15463917526,
            "unit": "ns",
            "range": "± 6254.504562280504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69728.94736842105,
            "unit": "ns",
            "range": "± 2167.0640114190173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80913.40206185567,
            "unit": "ns",
            "range": "± 10494.836318260472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4558.064516129032,
            "unit": "ns",
            "range": "± 569.7677979831022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17736.666666666668,
            "unit": "ns",
            "range": "± 1192.8108621273484"
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
        "date": 1698649170062,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1592316.6666666667,
            "unit": "ns",
            "range": "± 138603.1834271506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023688.5714285714,
            "unit": "ns",
            "range": "± 97343.36066494837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2303309.302325581,
            "unit": "ns",
            "range": "± 125327.25221492256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10518569.767441861,
            "unit": "ns",
            "range": "± 593482.2891593545"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64350.50505050505,
            "unit": "ns",
            "range": "± 6746.69040159501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9623961.904761905,
            "unit": "ns",
            "range": "± 220206.11362128545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25217892.307692308,
            "unit": "ns",
            "range": "± 226439.63309433585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63285365.384615384,
            "unit": "ns",
            "range": "± 284535.7002971503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126175657.6923077,
            "unit": "ns",
            "range": "± 908555.9425644801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259365390.47619048,
            "unit": "ns",
            "range": "± 6152221.919185357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5599199.557291667,
            "unit": "ns",
            "range": "± 76623.41148120156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1812913.3333333333,
            "unit": "ns",
            "range": "± 18040.02159422866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334011.8619791667,
            "unit": "ns",
            "range": "± 22401.376644896598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3153172.4158653845,
            "unit": "ns",
            "range": "± 29056.92926408988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1016579.4921875,
            "unit": "ns",
            "range": "± 8847.54627037001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 968051.640625,
            "unit": "ns",
            "range": "± 15254.437623072812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3954142.8571428573,
            "unit": "ns",
            "range": "± 42203.622051735256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4221725,
            "unit": "ns",
            "range": "± 92649.06552202921"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5042781.818181818,
            "unit": "ns",
            "range": "± 120041.1581653545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4919391.666666667,
            "unit": "ns",
            "range": "± 54694.763889879774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12418492.537313433,
            "unit": "ns",
            "range": "± 590187.149648424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307236.95652173914,
            "unit": "ns",
            "range": "± 11369.361531876451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297632.4675324675,
            "unit": "ns",
            "range": "± 13991.665202789776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281394.5945945946,
            "unit": "ns",
            "range": "± 14138.726976581964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4993380,
            "unit": "ns",
            "range": "± 89598.90943213858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4670785.714285715,
            "unit": "ns",
            "range": "± 59197.750179999464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26392.63157894737,
            "unit": "ns",
            "range": "± 2915.2658396814236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107891.75257731958,
            "unit": "ns",
            "range": "± 7611.212536217713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97788.29787234042,
            "unit": "ns",
            "range": "± 9242.548365976494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105341.05263157895,
            "unit": "ns",
            "range": "± 12830.677124607408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6836.8421052631575,
            "unit": "ns",
            "range": "± 1066.815965661962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24429.787234042553,
            "unit": "ns",
            "range": "± 2381.732891645725"
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
        "date": 1698649385503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329329.381443299,
            "unit": "ns",
            "range": "± 117540.17304215638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549475,
            "unit": "ns",
            "range": "± 121181.12061099829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1998139.6907216494,
            "unit": "ns",
            "range": "± 139875.13291960923"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8508372.340425532,
            "unit": "ns",
            "range": "± 331049.3774428112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51303.15789473684,
            "unit": "ns",
            "range": "± 4297.660240018262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7555500,
            "unit": "ns",
            "range": "± 115110.61346953778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20974135.714285713,
            "unit": "ns",
            "range": "± 221557.3744311734"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53135533.333333336,
            "unit": "ns",
            "range": "± 943242.4091297805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104988800,
            "unit": "ns",
            "range": "± 1229305.7559201703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211358026.66666666,
            "unit": "ns",
            "range": "± 3582015.480238279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4594388.098958333,
            "unit": "ns",
            "range": "± 16479.002727927455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1492768.7779017857,
            "unit": "ns",
            "range": "± 6682.628228548568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1099035.3776041667,
            "unit": "ns",
            "range": "± 3707.3952746240275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671456.1979166665,
            "unit": "ns",
            "range": "± 11810.774250786002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848690.478515625,
            "unit": "ns",
            "range": "± 2805.9198545086583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774969.5703125,
            "unit": "ns",
            "range": "± 2182.6799006375627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3232562.5,
            "unit": "ns",
            "range": "± 159102.00327834688"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3332190,
            "unit": "ns",
            "range": "± 110534.77188139394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4184490.476190476,
            "unit": "ns",
            "range": "± 95749.53736056329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4137071.4285714286,
            "unit": "ns",
            "range": "± 157923.0284558483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10336746.42857143,
            "unit": "ns",
            "range": "± 439141.9517709448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258661.11111111112,
            "unit": "ns",
            "range": "± 10840.288526875654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256514.2857142857,
            "unit": "ns",
            "range": "± 7313.74729334419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220023.2323232323,
            "unit": "ns",
            "range": "± 12398.920528086375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4112913.3333333335,
            "unit": "ns",
            "range": "± 67945.60709721802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3971184.6153846155,
            "unit": "ns",
            "range": "± 39266.05502113852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22677.083333333332,
            "unit": "ns",
            "range": "± 2856.9206523869516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88281.91489361702,
            "unit": "ns",
            "range": "± 6756.05602907109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70662.68656716419,
            "unit": "ns",
            "range": "± 3362.1708274563684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91108.16326530612,
            "unit": "ns",
            "range": "± 12557.9372647025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5278.125,
            "unit": "ns",
            "range": "± 862.7011588456829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20669.072164948455,
            "unit": "ns",
            "range": "± 2120.306622123627"
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
        "date": 1698649509028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285984.5360824743,
            "unit": "ns",
            "range": "± 107187.56179804458"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2368471.4285714286,
            "unit": "ns",
            "range": "± 94783.35242068564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1892532.6666666667,
            "unit": "ns",
            "range": "± 95388.7896032966"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7390167.857142857,
            "unit": "ns",
            "range": "± 198232.21148267546"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44494.04761904762,
            "unit": "ns",
            "range": "± 2394.287941057436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7260406.666666667,
            "unit": "ns",
            "range": "± 122169.21208288273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18262686.666666668,
            "unit": "ns",
            "range": "± 86309.36769772417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46606363.333333336,
            "unit": "ns",
            "range": "± 236018.5248984454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92959150,
            "unit": "ns",
            "range": "± 582602.896491255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186124386.66666666,
            "unit": "ns",
            "range": "± 1008735.775871863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4444613.776041667,
            "unit": "ns",
            "range": "± 28800.453640932512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1472465.8203125,
            "unit": "ns",
            "range": "± 4063.2028495711843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1070002.1902901786,
            "unit": "ns",
            "range": "± 3908.853503013755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2490228.1901041665,
            "unit": "ns",
            "range": "± 9003.377586628978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810753.2076322115,
            "unit": "ns",
            "range": "± 1607.5146570551735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732682.2415865385,
            "unit": "ns",
            "range": "± 888.6660190452752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3122950,
            "unit": "ns",
            "range": "± 93595.86173188072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3266366.6666666665,
            "unit": "ns",
            "range": "± 60340.19824138402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3949894.4444444445,
            "unit": "ns",
            "range": "± 84050.282375018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3728697.1428571427,
            "unit": "ns",
            "range": "± 108488.2685056838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9097820.930232558,
            "unit": "ns",
            "range": "± 307998.7025004671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247406.66666666666,
            "unit": "ns",
            "range": "± 7314.130553054576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232598.57142857142,
            "unit": "ns",
            "range": "± 7101.672190347824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212832.14285714287,
            "unit": "ns",
            "range": "± 7867.634671530913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3827253.3333333335,
            "unit": "ns",
            "range": "± 34492.79151745574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3548428.5714285714,
            "unit": "ns",
            "range": "± 60274.58232725695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18889.690721649484,
            "unit": "ns",
            "range": "± 1842.8626133501782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80346.31578947368,
            "unit": "ns",
            "range": "± 5134.215855649976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 66514.70588235294,
            "unit": "ns",
            "range": "± 2122.6244979643216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75990.4255319149,
            "unit": "ns",
            "range": "± 6507.2510283535075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4117.391304347826,
            "unit": "ns",
            "range": "± 391.2809888446498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18953.191489361703,
            "unit": "ns",
            "range": "± 1479.4980351645697"
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
        "date": 1698649569292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1298851.5789473683,
            "unit": "ns",
            "range": "± 207712.30505921476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2570084.375,
            "unit": "ns",
            "range": "± 302158.1584214762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2030686.4583333333,
            "unit": "ns",
            "range": "± 310058.36585350445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9111778.021978023,
            "unit": "ns",
            "range": "± 1195607.5963293677"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61926.5306122449,
            "unit": "ns",
            "range": "± 17369.985672770403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7178561.224489796,
            "unit": "ns",
            "range": "± 618228.7311731555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18124295.833333332,
            "unit": "ns",
            "range": "± 1310347.6526171588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48551576.530612245,
            "unit": "ns",
            "range": "± 4525719.710009362"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96212321.21212122,
            "unit": "ns",
            "range": "± 7569855.731179557"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204571017.17171717,
            "unit": "ns",
            "range": "± 17473956.9872614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4936134.027777778,
            "unit": "ns",
            "range": "± 136492.68925506689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1487863.5243941327,
            "unit": "ns",
            "range": "± 57498.41694799863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138612.553013393,
            "unit": "ns",
            "range": "± 37299.819724590314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669819.603587963,
            "unit": "ns",
            "range": "± 74158.06921321232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890668.5401710304,
            "unit": "ns",
            "range": "± 30213.27977158843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790910.1953125,
            "unit": "ns",
            "range": "± 16864.10538336803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2990343.5483870967,
            "unit": "ns",
            "range": "± 317716.45370978856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3238130,
            "unit": "ns",
            "range": "± 310407.15901986946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3971800,
            "unit": "ns",
            "range": "± 429198.5379150931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3796063.2653061226,
            "unit": "ns",
            "range": "± 448406.3014878026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10902756.666666666,
            "unit": "ns",
            "range": "± 874781.7011862656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268885.71428571426,
            "unit": "ns",
            "range": "± 54046.14866544155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255553.1914893617,
            "unit": "ns",
            "range": "± 38043.01103526907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214467.39130434784,
            "unit": "ns",
            "range": "± 30044.041330912027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3875731.6326530613,
            "unit": "ns",
            "range": "± 439032.19467156596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3591142.2680412373,
            "unit": "ns",
            "range": "± 351987.8385786963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27985,
            "unit": "ns",
            "range": "± 9888.656648050346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93000,
            "unit": "ns",
            "range": "± 17183.75798425765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98502,
            "unit": "ns",
            "range": "± 22246.025544470915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115926.37362637362,
            "unit": "ns",
            "range": "± 19664.869043069535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6080.219780219781,
            "unit": "ns",
            "range": "± 1156.16413485089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26774.22680412371,
            "unit": "ns",
            "range": "± 9905.43073216358"
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
        "date": 1698649975115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1285578.3505154639,
            "unit": "ns",
            "range": "± 219741.23666011693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2455606.1224489794,
            "unit": "ns",
            "range": "± 315791.22028246766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1981731.25,
            "unit": "ns",
            "range": "± 334058.90728952835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9943023.076923076,
            "unit": "ns",
            "range": "± 1487207.2615085503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61248.42105263158,
            "unit": "ns",
            "range": "± 12747.97324865754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8312844.2105263155,
            "unit": "ns",
            "range": "± 660508.4061693542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23013881.44329897,
            "unit": "ns",
            "range": "± 1604318.5203881415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60179904.166666664,
            "unit": "ns",
            "range": "± 3454675.860396096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121933169.81132075,
            "unit": "ns",
            "range": "± 5036236.335780952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248593992.5925926,
            "unit": "ns",
            "range": "± 6809772.681110918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5151523.063858695,
            "unit": "ns",
            "range": "± 128544.99370276155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1722281.1112253289,
            "unit": "ns",
            "range": "± 38243.50523210214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223327.0068359375,
            "unit": "ns",
            "range": "± 42760.00135569722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2965037.5538793104,
            "unit": "ns",
            "range": "± 127914.73445514808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 929895.41015625,
            "unit": "ns",
            "range": "± 9819.446682268026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 925171.4304070724,
            "unit": "ns",
            "range": "± 31590.69946695172"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3567284.6938775512,
            "unit": "ns",
            "range": "± 284807.5962412334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625056.7010309277,
            "unit": "ns",
            "range": "± 311508.36127997714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4712697.97979798,
            "unit": "ns",
            "range": "± 384766.4690564432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531286.734693877,
            "unit": "ns",
            "range": "± 391875.80576224043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13013337.777777778,
            "unit": "ns",
            "range": "± 1073337.8669060045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296557.8947368421,
            "unit": "ns",
            "range": "± 34346.63593099091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282754.94505494507,
            "unit": "ns",
            "range": "± 29832.827793617125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270636.95652173914,
            "unit": "ns",
            "range": "± 24039.042041724606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4666688,
            "unit": "ns",
            "range": "± 353616.11448038113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4217401.020408163,
            "unit": "ns",
            "range": "± 303573.9052987419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30802.0202020202,
            "unit": "ns",
            "range": "± 11150.82114481572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108273.19587628866,
            "unit": "ns",
            "range": "± 19723.428937560093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 122161.45833333333,
            "unit": "ns",
            "range": "± 19976.13507632843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128563.54166666667,
            "unit": "ns",
            "range": "± 17298.969362617303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7060.240963855422,
            "unit": "ns",
            "range": "± 1007.7673656055484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31622.222222222223,
            "unit": "ns",
            "range": "± 9658.332086069897"
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
        "date": 1698650383111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664536.4583333333,
            "unit": "ns",
            "range": "± 201151.22466222776"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3111137.234042553,
            "unit": "ns",
            "range": "± 222939.96587347245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2424597.8494623657,
            "unit": "ns",
            "range": "± 197941.20996907278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11415288.505747126,
            "unit": "ns",
            "range": "± 970726.7052976207"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63960.82474226804,
            "unit": "ns",
            "range": "± 13592.511393387958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8346008.602150538,
            "unit": "ns",
            "range": "± 651732.0612857768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24429925,
            "unit": "ns",
            "range": "± 469858.839085386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61908463.0952381,
            "unit": "ns",
            "range": "± 3222076.5058554215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128835536.84210527,
            "unit": "ns",
            "range": "± 2720936.146951904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260711286.66666666,
            "unit": "ns",
            "range": "± 9876069.960644541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5668224.396306818,
            "unit": "ns",
            "range": "± 137117.84784754628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1765527.9181985294,
            "unit": "ns",
            "range": "± 56471.93611047138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303022.759885204,
            "unit": "ns",
            "range": "± 49271.91190805687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3154338.0750868055,
            "unit": "ns",
            "range": "± 104879.35692704169"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1025545.7734375,
            "unit": "ns",
            "range": "± 41317.68693673289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933079.9065290178,
            "unit": "ns",
            "range": "± 30248.003526419165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673137.234042553,
            "unit": "ns",
            "range": "± 332658.24821292976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3837636.170212766,
            "unit": "ns",
            "range": "± 359418.9324454525"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6349640,
            "unit": "ns",
            "range": "± 113125.97150332645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4821194.736842105,
            "unit": "ns",
            "range": "± 488369.515526316"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13211920.224719102,
            "unit": "ns",
            "range": "± 1172369.467649692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317995.5056179775,
            "unit": "ns",
            "range": "± 30302.553560686327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302089.4736842105,
            "unit": "ns",
            "range": "± 42351.91842645261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258971.13402061857,
            "unit": "ns",
            "range": "± 34342.10838133852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4726077.894736842,
            "unit": "ns",
            "range": "± 375878.5802082242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4424028.421052632,
            "unit": "ns",
            "range": "± 403272.06081591424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25726.80412371134,
            "unit": "ns",
            "range": "± 8572.564224799728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108228.125,
            "unit": "ns",
            "range": "± 19260.309354923884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119147.87234042553,
            "unit": "ns",
            "range": "± 18432.543268316673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129867.01030927835,
            "unit": "ns",
            "range": "± 23315.350458663692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8316.091954022988,
            "unit": "ns",
            "range": "± 1833.5296728478597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26001.041666666668,
            "unit": "ns",
            "range": "± 7734.781251513964"
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
        "date": 1698651816459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590236.3636363635,
            "unit": "ns",
            "range": "± 128098.745755737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3027329.3103448274,
            "unit": "ns",
            "range": "± 127424.52462814611"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320359.574468085,
            "unit": "ns",
            "range": "± 156098.14741941675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10307388.505747126,
            "unit": "ns",
            "range": "± 899506.5849553153"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60958.06451612903,
            "unit": "ns",
            "range": "± 5655.784314591897"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9602212.121212121,
            "unit": "ns",
            "range": "± 282492.21643876284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25863453.03030303,
            "unit": "ns",
            "range": "± 807680.0625421123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65037073.333333336,
            "unit": "ns",
            "range": "± 1159261.9058612047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130983586.66666667,
            "unit": "ns",
            "range": "± 2184478.6373302853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254781592.5925926,
            "unit": "ns",
            "range": "± 6959542.267548146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5628711.474609375,
            "unit": "ns",
            "range": "± 107908.62332290482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853561.328125,
            "unit": "ns",
            "range": "± 34793.329579950725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349302.6953125,
            "unit": "ns",
            "range": "± 23185.029264796103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3309664.1741071427,
            "unit": "ns",
            "range": "± 29884.00383750051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1063757.734375,
            "unit": "ns",
            "range": "± 18490.470962591975"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 963239.5629882812,
            "unit": "ns",
            "range": "± 18689.51228100816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3872474.4680851065,
            "unit": "ns",
            "range": "± 150083.40937203105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4085230.303030303,
            "unit": "ns",
            "range": "± 183381.26652892577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4909840.625,
            "unit": "ns",
            "range": "± 226542.43704818343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4777694.117647059,
            "unit": "ns",
            "range": "± 192574.69346906903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11946537.837837838,
            "unit": "ns",
            "range": "± 401207.8973074456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303525.9259259259,
            "unit": "ns",
            "range": "± 8031.457028105298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291382.85714285716,
            "unit": "ns",
            "range": "± 9177.096994349438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265317.1052631579,
            "unit": "ns",
            "range": "± 13434.079927883857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5729326.666666667,
            "unit": "ns",
            "range": "± 94327.80582829728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4705292.307692308,
            "unit": "ns",
            "range": "± 43322.44340482312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24678.260869565216,
            "unit": "ns",
            "range": "± 2153.0365006096567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104263.44086021505,
            "unit": "ns",
            "range": "± 8761.213745404235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90518.08510638298,
            "unit": "ns",
            "range": "± 8858.820557506422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102896.39175257731,
            "unit": "ns",
            "range": "± 12120.876118771195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6962.105263157895,
            "unit": "ns",
            "range": "± 1207.7919846411855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24560.63829787234,
            "unit": "ns",
            "range": "± 1673.2055440070706"
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
        "date": 1698651935103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1278990.9090909092,
            "unit": "ns",
            "range": "± 103870.01894136445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2354647.727272727,
            "unit": "ns",
            "range": "± 77553.33195318026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1874231,
            "unit": "ns",
            "range": "± 135968.41410913615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7246925,
            "unit": "ns",
            "range": "± 182855.85220381978"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43176.19047619047,
            "unit": "ns",
            "range": "± 1971.5487841529389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6910564.285714285,
            "unit": "ns",
            "range": "± 17061.545026207874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17973446.666666668,
            "unit": "ns",
            "range": "± 144777.4591111015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46103646.666666664,
            "unit": "ns",
            "range": "± 431446.83974252205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92079446.66666667,
            "unit": "ns",
            "range": "± 744967.6300414158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184163930.76923078,
            "unit": "ns",
            "range": "± 1123873.7728533808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4454227.447916667,
            "unit": "ns",
            "range": "± 12992.504998867647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1458403.208705357,
            "unit": "ns",
            "range": "± 1373.138064389603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1080096.1067708333,
            "unit": "ns",
            "range": "± 1005.4427000466521"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2506328.8225446427,
            "unit": "ns",
            "range": "± 2912.0797245053695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824060.4771205357,
            "unit": "ns",
            "range": "± 3051.7934724908314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732455.5745442709,
            "unit": "ns",
            "range": "± 436.1426870646149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2914135,
            "unit": "ns",
            "range": "± 35760.27309150403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3130829.5454545454,
            "unit": "ns",
            "range": "± 116398.46674356883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3955033.3333333335,
            "unit": "ns",
            "range": "± 58035.35457763983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3714065.4545454546,
            "unit": "ns",
            "range": "± 157814.73340853848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9076648.387096774,
            "unit": "ns",
            "range": "± 193872.0022264995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247415,
            "unit": "ns",
            "range": "± 8409.443714642699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231587.1794871795,
            "unit": "ns",
            "range": "± 8050.014040104772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221480.70175438595,
            "unit": "ns",
            "range": "± 9479.987164632874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3791646.6666666665,
            "unit": "ns",
            "range": "± 35875.33706495048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3499215.3846153845,
            "unit": "ns",
            "range": "± 33181.19060938607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18192.47311827957,
            "unit": "ns",
            "range": "± 1986.8719439239478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78988.29787234042,
            "unit": "ns",
            "range": "± 5271.8333793031825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72678.16091954023,
            "unit": "ns",
            "range": "± 3990.2329968502618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77633.68421052632,
            "unit": "ns",
            "range": "± 10012.551809054641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4164.285714285715,
            "unit": "ns",
            "range": "± 595.7322445667138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18512.63157894737,
            "unit": "ns",
            "range": "± 1659.2899087018586"
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
        "date": 1698651935927,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1355977,
            "unit": "ns",
            "range": "± 133541.10845531704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2577884.8484848486,
            "unit": "ns",
            "range": "± 195650.3677500815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2110111.4583333335,
            "unit": "ns",
            "range": "± 157006.19690739774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9379056.52173913,
            "unit": "ns",
            "range": "± 706336.5032978725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49692.708333333336,
            "unit": "ns",
            "range": "± 8349.576034514586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7403692.307692308,
            "unit": "ns",
            "range": "± 345169.4508261904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19477587.096774194,
            "unit": "ns",
            "range": "± 879294.289027299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49144384.615384616,
            "unit": "ns",
            "range": "± 2283796.324258605"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95911484.61538461,
            "unit": "ns",
            "range": "± 1212232.9258068586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198021860,
            "unit": "ns",
            "range": "± 7033918.987737297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4829176.729910715,
            "unit": "ns",
            "range": "± 83589.0443174648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1515969.9869791667,
            "unit": "ns",
            "range": "± 20597.851162029652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130330.1822916667,
            "unit": "ns",
            "range": "± 20253.647455633843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2847737.5751201925,
            "unit": "ns",
            "range": "± 77164.979489845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 869379.1145833334,
            "unit": "ns",
            "range": "± 10899.950646109148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 828441.6917067308,
            "unit": "ns",
            "range": "± 10209.041027927959"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3126180,
            "unit": "ns",
            "range": "± 197722.51919228796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3305766.6666666665,
            "unit": "ns",
            "range": "± 283712.2903109229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4102811.3402061854,
            "unit": "ns",
            "range": "± 306203.2137310561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4096646.3917525774,
            "unit": "ns",
            "range": "± 342557.8749951896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11076881.395348838,
            "unit": "ns",
            "range": "± 606929.2930058809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255434.73684210525,
            "unit": "ns",
            "range": "± 25717.966103778843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246472.22222222222,
            "unit": "ns",
            "range": "± 22063.091493310658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 220306.1224489796,
            "unit": "ns",
            "range": "± 25175.699363033422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3903801.724137931,
            "unit": "ns",
            "range": "± 169984.68815602633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3703318.2795698927,
            "unit": "ns",
            "range": "± 222670.32559673453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19117.708333333332,
            "unit": "ns",
            "range": "± 5222.441348675052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80718.18181818182,
            "unit": "ns",
            "range": "± 10540.489122720855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73611.95652173914,
            "unit": "ns",
            "range": "± 12113.128309757078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87857.29166666667,
            "unit": "ns",
            "range": "± 16579.78950276934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8475,
            "unit": "ns",
            "range": "± 5657.771539031846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18772,
            "unit": "ns",
            "range": "± 6468.042340397264"
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
        "date": 1698652664729,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1360823,
            "unit": "ns",
            "range": "± 113361.12836970408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2521791.0256410255,
            "unit": "ns",
            "range": "± 129832.44965473762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1989692.9292929294,
            "unit": "ns",
            "range": "± 132484.26341092653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9023897.849462366,
            "unit": "ns",
            "range": "± 543662.3698460555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55517.52577319588,
            "unit": "ns",
            "range": "± 5351.324024429187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7437906.666666667,
            "unit": "ns",
            "range": "± 61151.35165737393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21175064.285714287,
            "unit": "ns",
            "range": "± 307231.47026091145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53867926.666666664,
            "unit": "ns",
            "range": "± 786657.4708098515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107324794.11764705,
            "unit": "ns",
            "range": "± 2118476.6252753967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213510593.33333334,
            "unit": "ns",
            "range": "± 2051555.451173108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4611909.739583333,
            "unit": "ns",
            "range": "± 12341.937023797984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1490617.2395833333,
            "unit": "ns",
            "range": "± 4399.347914311321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1092967.5911458333,
            "unit": "ns",
            "range": "± 2804.889491615981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692931.4322916665,
            "unit": "ns",
            "range": "± 6607.009905225922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850516.7201450893,
            "unit": "ns",
            "range": "± 2457.574627234772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766109.9544270834,
            "unit": "ns",
            "range": "± 2755.7674459977966"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3284927.5862068967,
            "unit": "ns",
            "range": "± 96272.9152556557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3460102.5,
            "unit": "ns",
            "range": "± 121838.67746706329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4147836.8421052634,
            "unit": "ns",
            "range": "± 132008.10053165068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149240,
            "unit": "ns",
            "range": "± 108968.57345124787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10203712.5,
            "unit": "ns",
            "range": "± 337829.5080457157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255878.431372549,
            "unit": "ns",
            "range": "± 9870.345763457128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248702.77777777778,
            "unit": "ns",
            "range": "± 12251.173812370293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229567.01030927835,
            "unit": "ns",
            "range": "± 15113.209741050241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4176666.6666666665,
            "unit": "ns",
            "range": "± 76052.15002752731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3853475,
            "unit": "ns",
            "range": "± 69036.40102631848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22659.183673469386,
            "unit": "ns",
            "range": "± 2936.3992514394918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90636.26373626373,
            "unit": "ns",
            "range": "± 6149.3724428417445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73662.5,
            "unit": "ns",
            "range": "± 4051.9985844932908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95803.0612244898,
            "unit": "ns",
            "range": "± 12474.133683380667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6232.631578947368,
            "unit": "ns",
            "range": "± 1025.571154337515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21965.263157894737,
            "unit": "ns",
            "range": "± 1974.290522772439"
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
        "date": 1698652904811,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1329618,
            "unit": "ns",
            "range": "± 107943.34408064785"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457180.263157895,
            "unit": "ns",
            "range": "± 112939.80227801218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1941172,
            "unit": "ns",
            "range": "± 145906.25749349332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7843466.666666667,
            "unit": "ns",
            "range": "± 260840.0626547124"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46687.096774193546,
            "unit": "ns",
            "range": "± 3043.961442310347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7053053.333333333,
            "unit": "ns",
            "range": "± 79240.54577826995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18623450,
            "unit": "ns",
            "range": "± 214407.43923660857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46886141.176470585,
            "unit": "ns",
            "range": "± 922260.2873232313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93585573.33333333,
            "unit": "ns",
            "range": "± 1087236.640338817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193792113.33333334,
            "unit": "ns",
            "range": "± 1216721.5257560357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4554195.572916667,
            "unit": "ns",
            "range": "± 11695.83250789305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1470903.3138020833,
            "unit": "ns",
            "range": "± 2220.971958343165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1084224.4140625,
            "unit": "ns",
            "range": "± 1427.7698758594436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556527.6227678573,
            "unit": "ns",
            "range": "± 3266.2072712968106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816643.3518629808,
            "unit": "ns",
            "range": "± 1441.9300506479722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728341.4888822115,
            "unit": "ns",
            "range": "± 640.2580622676626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2997537.9310344825,
            "unit": "ns",
            "range": "± 87572.55528088492"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3098747.8260869565,
            "unit": "ns",
            "range": "± 76723.5821846263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3983050,
            "unit": "ns",
            "range": "± 39039.55259306473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3736947.727272727,
            "unit": "ns",
            "range": "± 139170.43338869902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9357103.225806452,
            "unit": "ns",
            "range": "± 211869.00431457005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253876.19047619047,
            "unit": "ns",
            "range": "± 7923.838978547953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239721.21212121213,
            "unit": "ns",
            "range": "± 7413.1537475522855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200163.01369863015,
            "unit": "ns",
            "range": "± 9433.046327337666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3800650,
            "unit": "ns",
            "range": "± 29857.604365748073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3491273.6842105263,
            "unit": "ns",
            "range": "± 76993.01441693166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18055.434782608696,
            "unit": "ns",
            "range": "± 2001.887248608051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84211.45833333333,
            "unit": "ns",
            "range": "± 6965.688386152689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63456.12244897959,
            "unit": "ns",
            "range": "± 2454.452430725411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83718.08510638298,
            "unit": "ns",
            "range": "± 11613.553101811392"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4214.444444444444,
            "unit": "ns",
            "range": "± 625.7689402182108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19575.78947368421,
            "unit": "ns",
            "range": "± 2740.1163117677465"
          }
        ]
      }
    ]
  }
}