window.BENCHMARK_DATA = {
  "lastUpdate": 1698040083554,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "8ba410942864b26987a6a6745a77f65b18f05d6b",
          "message": "add conditional exports to support cjs",
          "timestamp": "2023-10-23T10:34:47+09:00",
          "tree_id": "7a258ff201260e1e5d6b8bef08db48450bc33a94",
          "url": "https://github.com/planetarium/libplanet/commit/8ba410942864b26987a6a6745a77f65b18f05d6b"
        },
        "date": 1698025948883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9024103.53125,
            "unit": "ns",
            "range": "± 948590.7793150562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19479117.423076924,
            "unit": "ns",
            "range": "± 222869.23671608482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58281688.823529415,
            "unit": "ns",
            "range": "± 2352843.579809799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94475553.11764705,
            "unit": "ns",
            "range": "± 3817451.3603296406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207212058.96875,
            "unit": "ns",
            "range": "± 16917596.80613492"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50033.86842105263,
            "unit": "ns",
            "range": "± 12058.884951674245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 228199.04166666666,
            "unit": "ns",
            "range": "± 18680.82233280496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 210987.6947368421,
            "unit": "ns",
            "range": "± 14518.204410306396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198673.54545454544,
            "unit": "ns",
            "range": "± 17461.87552125635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3804915.388888889,
            "unit": "ns",
            "range": "± 78951.61510540258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3402715.238095238,
            "unit": "ns",
            "range": "± 66155.50609050221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14397.309278350516,
            "unit": "ns",
            "range": "± 3002.9168020471666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62529.515789473684,
            "unit": "ns",
            "range": "± 7245.494583742777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56142.043956043955,
            "unit": "ns",
            "range": "± 7636.50130755365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60200.663265306124,
            "unit": "ns",
            "range": "± 11479.010980327168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3856.65625,
            "unit": "ns",
            "range": "± 1083.70559051243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12994.564516129032,
            "unit": "ns",
            "range": "± 1931.6761746262007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402784.8072289156,
            "unit": "ns",
            "range": "± 154740.65580610625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2672364.0736842104,
            "unit": "ns",
            "range": "± 163286.24839052415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581762.38,
            "unit": "ns",
            "range": "± 186740.28511495245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4741330.226804123,
            "unit": "ns",
            "range": "± 327205.4826433137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3458489.782608696,
            "unit": "ns",
            "range": "± 203286.4249498114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3749719.785714286,
            "unit": "ns",
            "range": "± 134197.6140383543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4535792.833333333,
            "unit": "ns",
            "range": "± 116260.72580644621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007528.074626866,
            "unit": "ns",
            "range": "± 189415.43807976396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6250395.22631579,
            "unit": "ns",
            "range": "± 569612.6984299487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4300017.859188988,
            "unit": "ns",
            "range": "± 98875.78620684815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1322135.976356908,
            "unit": "ns",
            "range": "± 26434.106586324127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 860207.8095703125,
            "unit": "ns",
            "range": "± 13852.185272783378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1984015.2603236607,
            "unit": "ns",
            "range": "± 20596.794801321554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 698885.1907894737,
            "unit": "ns",
            "range": "± 30090.779194913684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 662311.9852410082,
            "unit": "ns",
            "range": "± 27460.754902494322"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bcb549979a34e9f1afab9435f427aba162c2463a",
          "message": "Merge pull request #3418 from greymistcube/prepare/3.4.0\n\n🔧 Prepare 3.4.0",
          "timestamp": "2023-09-08T10:21:29+09:00",
          "tree_id": "d08370af5794578e62bc1c40dd2c906d7efde68b",
          "url": "https://github.com/planetarium/libplanet/commit/bcb549979a34e9f1afab9435f427aba162c2463a"
        },
        "date": 1698025967446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461686.708333334,
            "unit": "ns",
            "range": "± 180412.04753430389"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22049416.62857143,
            "unit": "ns",
            "range": "± 1070865.48169402"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54482163.78571428,
            "unit": "ns",
            "range": "± 1968758.3072028814"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106844239.42307693,
            "unit": "ns",
            "range": "± 1607899.2776070407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230244291.85714287,
            "unit": "ns",
            "range": "± 3280631.296093285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72940.89887640449,
            "unit": "ns",
            "range": "± 4527.497944492641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354357.06382978725,
            "unit": "ns",
            "range": "± 43774.828183879144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340214.967032967,
            "unit": "ns",
            "range": "± 31952.428287290728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320961.3333333333,
            "unit": "ns",
            "range": "± 23231.022756171387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145775.7708333335,
            "unit": "ns",
            "range": "± 145703.32918942702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4235033.915730337,
            "unit": "ns",
            "range": "± 596098.5521557658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27020.752808988764,
            "unit": "ns",
            "range": "± 4239.944026433977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 131832.70833333334,
            "unit": "ns",
            "range": "± 30032.477086933617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132732.79166666666,
            "unit": "ns",
            "range": "± 23649.579076666647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127373.4587628866,
            "unit": "ns",
            "range": "± 25147.09496762562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8245.038461538461,
            "unit": "ns",
            "range": "± 975.6511934508416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18426.860215053763,
            "unit": "ns",
            "range": "± 2716.432161267702"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504995.9848484849,
            "unit": "ns",
            "range": "± 133597.95229484158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2877442.6226415094,
            "unit": "ns",
            "range": "± 118434.10918916807"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1957354.7272727273,
            "unit": "ns",
            "range": "± 174100.84906706755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5368118.120689655,
            "unit": "ns",
            "range": "± 216877.54814203156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3574444.09,
            "unit": "ns",
            "range": "± 314545.09135813406"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3720411.1836734693,
            "unit": "ns",
            "range": "± 331120.3993665551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4706295.087912088,
            "unit": "ns",
            "range": "± 455713.84799463913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4084441.8804347827,
            "unit": "ns",
            "range": "± 354016.3210430159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7653077.14893617,
            "unit": "ns",
            "range": "± 955547.4510625456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6000391.069947917,
            "unit": "ns",
            "range": "± 302284.6727682357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1735720.3509765626,
            "unit": "ns",
            "range": "± 50629.51618769055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047647.3996930803,
            "unit": "ns",
            "range": "± 10753.099218808155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2508084.9654153963,
            "unit": "ns",
            "range": "± 88951.07488311827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812425.8022135417,
            "unit": "ns",
            "range": "± 14321.265665759125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757168.5998883928,
            "unit": "ns",
            "range": "± 4553.795855625184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "qjfrntop12@gmail.com",
            "name": "XxshiftxX",
            "username": "XxshiftxX"
          },
          "distinct": true,
          "id": "7fbea9473ea0daa98391f42d2deb04fed9519242",
          "message": "remove unused dependancy",
          "timestamp": "2023-10-23T10:39:04+09:00",
          "tree_id": "5aec75930706f355e45521f0cc263516994e7350",
          "url": "https://github.com/planetarium/libplanet/commit/7fbea9473ea0daa98391f42d2deb04fed9519242"
        },
        "date": 1698025981737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8205024.916666667,
            "unit": "ns",
            "range": "± 213324.34649712988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20643804,
            "unit": "ns",
            "range": "± 681509.2804877068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50223693.222222224,
            "unit": "ns",
            "range": "± 1040326.363073616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101725136.07142857,
            "unit": "ns",
            "range": "± 1473781.6802833197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211910801.10714287,
            "unit": "ns",
            "range": "± 5812636.329215477"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39649.71052631579,
            "unit": "ns",
            "range": "± 8739.126530060008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261794.6966292135,
            "unit": "ns",
            "range": "± 20463.237091963732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247256.0760869565,
            "unit": "ns",
            "range": "± 20403.42606451111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244362.23170731709,
            "unit": "ns",
            "range": "± 12010.55241484947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019116.5,
            "unit": "ns",
            "range": "± 85544.00003247191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3683238.0581395347,
            "unit": "ns",
            "range": "± 135897.8909576182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17095.580459770114,
            "unit": "ns",
            "range": "± 4556.514942769693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97274.01578947369,
            "unit": "ns",
            "range": "± 16328.830732241511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83629.28651685393,
            "unit": "ns",
            "range": "± 12085.866965434452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81364.70103092784,
            "unit": "ns",
            "range": "± 14225.427815157958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6981.086021505376,
            "unit": "ns",
            "range": "± 1304.8566859164032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17700.593023255813,
            "unit": "ns",
            "range": "± 5058.0228539662485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1255917.224489796,
            "unit": "ns",
            "range": "± 157097.59952432362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2471453.2150537632,
            "unit": "ns",
            "range": "± 161647.4056620747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1528194.5463917525,
            "unit": "ns",
            "range": "± 142319.0302661463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4362248.459183673,
            "unit": "ns",
            "range": "± 337844.57884084474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3141229.222222222,
            "unit": "ns",
            "range": "± 103621.41121081413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3287569.9714285713,
            "unit": "ns",
            "range": "± 105938.83142740928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3809202.06,
            "unit": "ns",
            "range": "± 153798.70817487914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3434202.5,
            "unit": "ns",
            "range": "± 157060.99513893403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5595773.768421053,
            "unit": "ns",
            "range": "± 331960.497133974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4491879.579190341,
            "unit": "ns",
            "range": "± 247275.05701682047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1345790.9424579327,
            "unit": "ns",
            "range": "± 17965.340700320998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 859488.5438368055,
            "unit": "ns",
            "range": "± 14526.57331288214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2102648.67641129,
            "unit": "ns",
            "range": "± 63341.39817730498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654611.4129464285,
            "unit": "ns",
            "range": "± 5338.960120424944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583035.6520182291,
            "unit": "ns",
            "range": "± 2142.0519820608547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "qjfrntop12@gmail.com",
            "name": "SHIFT",
            "username": "XxshiftxX"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62b18225439af051a67d52760d028260f1e05e70",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T10:39:29+09:00",
          "tree_id": "09568e04755ba98b97acc51e92aa136ef1a5be0d",
          "url": "https://github.com/planetarium/libplanet/commit/62b18225439af051a67d52760d028260f1e05e70"
        },
        "date": 1698026140385,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8428103.672413792,
            "unit": "ns",
            "range": "± 357148.2347581895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22595245.86734694,
            "unit": "ns",
            "range": "± 1471371.8508681632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53142769.24390244,
            "unit": "ns",
            "range": "± 1898064.016335708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105828938.3888889,
            "unit": "ns",
            "range": "± 2226609.9379925774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216857832.8125,
            "unit": "ns",
            "range": "± 3952934.7535052937"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70824.21505376344,
            "unit": "ns",
            "range": "± 8049.3857487084115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369896.7816091954,
            "unit": "ns",
            "range": "± 92789.61246111715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302409.1685393258,
            "unit": "ns",
            "range": "± 21189.53814934708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287921.90769230766,
            "unit": "ns",
            "range": "± 13339.553217924735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4163577.285714286,
            "unit": "ns",
            "range": "± 85448.20232406464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3682197.566666667,
            "unit": "ns",
            "range": "± 50873.412697549975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19391.78125,
            "unit": "ns",
            "range": "± 2763.4373359168962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90457.78571428571,
            "unit": "ns",
            "range": "± 10853.527362629175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87083.76666666666,
            "unit": "ns",
            "range": "± 10286.405721887551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102282.3085106383,
            "unit": "ns",
            "range": "± 12127.669670648065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6042.163157894737,
            "unit": "ns",
            "range": "± 850.775923827414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18950.67777777778,
            "unit": "ns",
            "range": "± 2483.572186411863"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1493309.7315789473,
            "unit": "ns",
            "range": "± 169831.13956481"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2836794.7708333335,
            "unit": "ns",
            "range": "± 198070.601519202"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2302461.0268817204,
            "unit": "ns",
            "range": "± 206330.9690231034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10383517.153846154,
            "unit": "ns",
            "range": "± 582010.9894783379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392566.727272727,
            "unit": "ns",
            "range": "± 215901.04020066923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562322.1326530613,
            "unit": "ns",
            "range": "± 226221.16232273047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4428227.041666667,
            "unit": "ns",
            "range": "± 217099.6974606489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4389944.1122448975,
            "unit": "ns",
            "range": "± 297983.04403589753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16196138.025773196,
            "unit": "ns",
            "range": "± 2127058.688431653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5943818.465332031,
            "unit": "ns",
            "range": "± 115012.61807649296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822422.0423177083,
            "unit": "ns",
            "range": "± 32745.74179334719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047643.7067522322,
            "unit": "ns",
            "range": "± 15052.798669885793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2800333.791796875,
            "unit": "ns",
            "range": "± 83612.82958498436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818395.0265625,
            "unit": "ns",
            "range": "± 13374.313945703543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740705.8985126202,
            "unit": "ns",
            "range": "± 6120.312775466877"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dev.moreal@gmail.com",
            "name": "Lee Dogeon",
            "username": "moreal"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3209f508124e156d7667770fc08e27bf6d5c770f",
          "message": "Merge branch 'main' into add-cjs-support",
          "timestamp": "2023-10-23T14:35:29+09:00",
          "tree_id": "6f4b6dc9eae1d4afbeef25aec0647e33718abf4f",
          "url": "https://github.com/planetarium/libplanet/commit/3209f508124e156d7667770fc08e27bf6d5c770f"
        },
        "date": 1698040026360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7596725.5,
            "unit": "ns",
            "range": "± 43323.787798181016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18696504.85714286,
            "unit": "ns",
            "range": "± 265756.6554821439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46410341.78571428,
            "unit": "ns",
            "range": "± 1308700.1503554576"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90865397.83333333,
            "unit": "ns",
            "range": "± 813160.5190499076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187729161.45833334,
            "unit": "ns",
            "range": "± 4875387.582812125"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33429.16091954023,
            "unit": "ns",
            "range": "± 2141.3118771442764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222562.67525773196,
            "unit": "ns",
            "range": "± 19875.358559664146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 213694,
            "unit": "ns",
            "range": "± 19479.22578227695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 195664.66315789474,
            "unit": "ns",
            "range": "± 15178.163974976942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3633010.1818181816,
            "unit": "ns",
            "range": "± 86449.62585098267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3368809.875,
            "unit": "ns",
            "range": "± 64793.15684327062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12160.505376344086,
            "unit": "ns",
            "range": "± 898.6860169358362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58143.95054945055,
            "unit": "ns",
            "range": "± 5192.105662047028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50788.09756097561,
            "unit": "ns",
            "range": "± 3159.5093290321033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53539.51648351648,
            "unit": "ns",
            "range": "± 6955.555481232468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3129.1046511627906,
            "unit": "ns",
            "range": "± 276.2099490932797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11856.369565217392,
            "unit": "ns",
            "range": "± 1061.8148336887969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1092239.724489796,
            "unit": "ns",
            "range": "± 110722.25393836305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2221250.911764706,
            "unit": "ns",
            "range": "± 105274.40233493217"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1650783.8210526316,
            "unit": "ns",
            "range": "± 121258.26932546936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7936233.860465116,
            "unit": "ns",
            "range": "± 1075068.231525096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2844402.066037736,
            "unit": "ns",
            "range": "± 118560.61408889118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2966462.8421052634,
            "unit": "ns",
            "range": "± 150358.534679173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3531244.5263157897,
            "unit": "ns",
            "range": "± 77381.73563672534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3504494.7407407407,
            "unit": "ns",
            "range": "± 142696.78781749614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11228161.822580645,
            "unit": "ns",
            "range": "± 1208145.8900922015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4163288.461237981,
            "unit": "ns",
            "range": "± 106730.84472718045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1271512.9557291667,
            "unit": "ns",
            "range": "± 19497.340103795428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 846100.3239933894,
            "unit": "ns",
            "range": "± 7821.512175717271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1947373.4363839286,
            "unit": "ns",
            "range": "± 21379.45992512247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612925.4536458333,
            "unit": "ns",
            "range": "± 6198.36686467463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558596.1356119792,
            "unit": "ns",
            "range": "± 7011.610659797691"
          }
        ]
      }
    ]
  }
}