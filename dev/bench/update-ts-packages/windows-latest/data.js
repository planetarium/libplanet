window.BENCHMARK_DATA = {
  "lastUpdate": 1698649460270,
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
      }
    ]
  }
}