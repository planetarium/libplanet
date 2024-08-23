window.BENCHMARK_DATA = {
  "lastUpdate": 1724373935576,
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
          "id": "646cd574dba89aa2e3f8323725fcf523bb6f3564",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-22T17:04:29+09:00",
          "tree_id": "1d5971aba9edc54e87582b874e3b0bcdba992340",
          "url": "https://github.com/planetarium/libplanet/commit/646cd574dba89aa2e3f8323725fcf523bb6f3564"
        },
        "date": 1724314535492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 980885.4166666666,
            "unit": "ns",
            "range": "± 107298.23266231435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1753656.862745098,
            "unit": "ns",
            "range": "± 70389.66189690631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1518752.7472527472,
            "unit": "ns",
            "range": "± 100197.42771222482"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6706908,
            "unit": "ns",
            "range": "± 162380.59695255055"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30110.714285714286,
            "unit": "ns",
            "range": "± 725.8911691279826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9974553.333333334,
            "unit": "ns",
            "range": "± 55573.77164848626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23337333.333333332,
            "unit": "ns",
            "range": "± 142307.9139786413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58770953.333333336,
            "unit": "ns",
            "range": "± 624693.3634839995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116541730.76923077,
            "unit": "ns",
            "range": "± 812527.3948044413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243654321.42857143,
            "unit": "ns",
            "range": "± 1714686.810684757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3281260.78125,
            "unit": "ns",
            "range": "± 4906.830699984517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069281.1328125,
            "unit": "ns",
            "range": "± 2629.369394185704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 725692.0182291666,
            "unit": "ns",
            "range": "± 1914.4856320217882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1944602.05078125,
            "unit": "ns",
            "range": "± 4140.575148770968"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632640.0948660715,
            "unit": "ns",
            "range": "± 2010.414512977894"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570162.2445913461,
            "unit": "ns",
            "range": "± 764.5617273641808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118776.923076923,
            "unit": "ns",
            "range": "± 33214.91015207261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2260523.076923077,
            "unit": "ns",
            "range": "± 24745.341441914334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2674662.8571428573,
            "unit": "ns",
            "range": "± 87027.51791214994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2217605.882352941,
            "unit": "ns",
            "range": "± 34453.56423122714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957713.3333333335,
            "unit": "ns",
            "range": "± 52152.165640099556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177126.08695652173,
            "unit": "ns",
            "range": "± 8561.312642860203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164365.625,
            "unit": "ns",
            "range": "± 7567.290067669797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147020.83333333334,
            "unit": "ns",
            "range": "± 3215.5842212664825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2633840,
            "unit": "ns",
            "range": "± 40129.73247570221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2400700,
            "unit": "ns",
            "range": "± 30563.578123189498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10020.430107526881,
            "unit": "ns",
            "range": "± 1203.6682285003103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49908.43373493976,
            "unit": "ns",
            "range": "± 2609.747432844473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43469.444444444445,
            "unit": "ns",
            "range": "± 1442.3828389052105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50704.166666666664,
            "unit": "ns",
            "range": "± 9164.6335863432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2444.68085106383,
            "unit": "ns",
            "range": "± 442.04243003580103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9446.067415730337,
            "unit": "ns",
            "range": "± 744.5340488848898"
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
          "id": "d5872637b3dc14a7ba25d6aa5d450ff5aa60b9e3",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-22T17:17:24+09:00",
          "tree_id": "67d841575582347cda4935d7bebefbcb7d671302",
          "url": "https://github.com/planetarium/libplanet/commit/d5872637b3dc14a7ba25d6aa5d450ff5aa60b9e3"
        },
        "date": 1724315303459,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 962846.9387755102,
            "unit": "ns",
            "range": "± 84691.13830890496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1716420.5128205128,
            "unit": "ns",
            "range": "± 58837.20707657868"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1499325.5319148935,
            "unit": "ns",
            "range": "± 99538.36234171735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6841500,
            "unit": "ns",
            "range": "± 222429.44098346384"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 37318.94736842105,
            "unit": "ns",
            "range": "± 3724.596072254784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9655514.285714285,
            "unit": "ns",
            "range": "± 46167.302067803146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23373993.333333332,
            "unit": "ns",
            "range": "± 159093.2541744292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58690540,
            "unit": "ns",
            "range": "± 343157.9182492265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115803656.66666667,
            "unit": "ns",
            "range": "± 582956.2964097819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228718476.92307693,
            "unit": "ns",
            "range": "± 844590.5962396279"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3291457.784598214,
            "unit": "ns",
            "range": "± 4183.447298732976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1073679.1796875,
            "unit": "ns",
            "range": "± 1919.796184836772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 720501.93359375,
            "unit": "ns",
            "range": "± 1136.263789852095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943445.0130208333,
            "unit": "ns",
            "range": "± 9142.967465197738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612597.3177083334,
            "unit": "ns",
            "range": "± 3712.5801611474367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576806.15234375,
            "unit": "ns",
            "range": "± 2010.329761146811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2073077.7777777778,
            "unit": "ns",
            "range": "± 39543.00451848855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2186345.8333333335,
            "unit": "ns",
            "range": "± 81763.9179598302"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2637023.6842105263,
            "unit": "ns",
            "range": "± 41508.83228777626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2330183.3333333335,
            "unit": "ns",
            "range": "± 49262.26631360905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2874240,
            "unit": "ns",
            "range": "± 49008.2179697592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169366.66666666666,
            "unit": "ns",
            "range": "± 5606.263343729519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161888.88888888888,
            "unit": "ns",
            "range": "± 6827.1562815774005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144036.36363636365,
            "unit": "ns",
            "range": "± 3443.6339408558974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2603221.4285714286,
            "unit": "ns",
            "range": "± 25614.424378926346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2464821.4285714286,
            "unit": "ns",
            "range": "± 32516.79278752462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9351.08695652174,
            "unit": "ns",
            "range": "± 781.7273863957851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48802.17391304348,
            "unit": "ns",
            "range": "± 2857.4167331707677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43535.71428571428,
            "unit": "ns",
            "range": "± 943.0194665465365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44374.1935483871,
            "unit": "ns",
            "range": "± 5572.9529918247445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2326.530612244898,
            "unit": "ns",
            "range": "± 310.8190113492353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8804.545454545454,
            "unit": "ns",
            "range": "± 748.1638966837015"
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
          "id": "5f6ffe12d3cbba06f862b47caf035570fb10dfcf",
          "message": "feat: Determining whether to run services based on option settings",
          "timestamp": "2024-08-23T09:26:40+09:00",
          "tree_id": "5b60d7e195a7d3f9dc5048ba53b4be097cbe97ff",
          "url": "https://github.com/planetarium/libplanet/commit/5f6ffe12d3cbba06f862b47caf035570fb10dfcf"
        },
        "date": 1724373681304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1049967.3684210526,
            "unit": "ns",
            "range": "± 112959.97544047078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1780636.8421052631,
            "unit": "ns",
            "range": "± 54641.492110194515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1624864.8351648352,
            "unit": "ns",
            "range": "± 112523.58900705256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6974855.555555556,
            "unit": "ns",
            "range": "± 261091.21495227015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 30742.105263157893,
            "unit": "ns",
            "range": "± 1066.0945597093255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10631486.666666666,
            "unit": "ns",
            "range": "± 108018.68136488949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26009460,
            "unit": "ns",
            "range": "± 292762.94115595595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65170226.666666664,
            "unit": "ns",
            "range": "± 264167.9916445666"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126957553.33333333,
            "unit": "ns",
            "range": "± 1981369.918900509"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251791292.85714287,
            "unit": "ns",
            "range": "± 1258797.6812231373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3357912.5558035714,
            "unit": "ns",
            "range": "± 4940.674076992216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1071097.607421875,
            "unit": "ns",
            "range": "± 2895.0832458652494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735384.8763020834,
            "unit": "ns",
            "range": "± 2645.980345044176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961992.0442708333,
            "unit": "ns",
            "range": "± 3270.597310661798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 635293.26171875,
            "unit": "ns",
            "range": "± 2411.4781709643853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580555.1339285715,
            "unit": "ns",
            "range": "± 870.0077561407012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2197035.714285714,
            "unit": "ns",
            "range": "± 23105.364250382576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2294557.5757575757,
            "unit": "ns",
            "range": "± 71019.88731291675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2794144.4444444445,
            "unit": "ns",
            "range": "± 78000.86948890788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296998.5074626864,
            "unit": "ns",
            "range": "± 104134.02420793398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2957942.8571428573,
            "unit": "ns",
            "range": "± 36179.801298210885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183940.38461538462,
            "unit": "ns",
            "range": "± 7004.403646093344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174457.62711864407,
            "unit": "ns",
            "range": "± 7426.448619625774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 151230,
            "unit": "ns",
            "range": "± 6006.773387652663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2822546.6666666665,
            "unit": "ns",
            "range": "± 32555.532043980893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2483125,
            "unit": "ns",
            "range": "± 47896.882292413706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12467.34693877551,
            "unit": "ns",
            "range": "± 1614.4179960659071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57942.857142857145,
            "unit": "ns",
            "range": "± 6356.071048631988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44268.29268292683,
            "unit": "ns",
            "range": "± 1441.6031049477947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66021.21212121213,
            "unit": "ns",
            "range": "± 11594.450403034334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2856.25,
            "unit": "ns",
            "range": "± 548.2628067479664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11619.565217391304,
            "unit": "ns",
            "range": "± 1565.6504550340424"
          }
        ]
      }
    ]
  }
}