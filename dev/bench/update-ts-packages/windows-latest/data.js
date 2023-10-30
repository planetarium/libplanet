window.BENCHMARK_DATA = {
  "lastUpdate": 1698648286265,
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
      }
    ]
  }
}