window.BENCHMARK_DATA = {
  "lastUpdate": 1715243974613,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b",
          "message": "Merge pull request #3760 from OnedgeLee/feature/srh-istore\n\nAdd tests for NestStateRootHash",
          "timestamp": "2024-04-18T17:04:59+09:00",
          "tree_id": "37cfb32103ba30aa339d0c4c9190dae1cb4d175e",
          "url": "https://github.com/planetarium/libplanet/commit/3c14cb2120d7aa40100f05537b15c3d7bc9b3d0b"
        },
        "date": 1713837478452,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2693207.414141414,
            "unit": "ns",
            "range": "± 157941.96394452386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2884495.9375,
            "unit": "ns",
            "range": "± 74150.37753582679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3906621.875,
            "unit": "ns",
            "range": "± 118412.17858675387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3637871.9292929294,
            "unit": "ns",
            "range": "± 402997.08768242405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9553971.76923077,
            "unit": "ns",
            "range": "± 150088.82930626662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206045.5,
            "unit": "ns",
            "range": "± 7329.90941980623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190082.84666666668,
            "unit": "ns",
            "range": "± 9062.114359352458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168608.1923076923,
            "unit": "ns",
            "range": "± 2332.426003992959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3219365.8666666667,
            "unit": "ns",
            "range": "± 57309.202531863026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2901725.7,
            "unit": "ns",
            "range": "± 39407.8866222051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12025.602150537634,
            "unit": "ns",
            "range": "± 952.9251206928586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59629.44680851064,
            "unit": "ns",
            "range": "± 3399.460850253913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50525.27777777778,
            "unit": "ns",
            "range": "± 677.8678342078158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56314.326315789476,
            "unit": "ns",
            "range": "± 9254.849337764805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2675.574468085106,
            "unit": "ns",
            "range": "± 364.9540327325875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11341.847826086956,
            "unit": "ns",
            "range": "± 677.7200779533955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5804118.214285715,
            "unit": "ns",
            "range": "± 24150.142022766246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14530221.766666668,
            "unit": "ns",
            "range": "± 89865.88139433648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 38195032.733333334,
            "unit": "ns",
            "range": "± 138128.99058771462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75717180.57142857,
            "unit": "ns",
            "range": "± 247926.1622275453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154079253.56666666,
            "unit": "ns",
            "range": "± 626273.6927088744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792564.8585858585,
            "unit": "ns",
            "range": "± 248541.3820655245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2872779.975308642,
            "unit": "ns",
            "range": "± 149339.14514704235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465034.9444444445,
            "unit": "ns",
            "range": "± 372977.2679503656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8684048.642857144,
            "unit": "ns",
            "range": "± 130031.501732262"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 206709.8524590164,
            "unit": "ns",
            "range": "± 9305.225544169729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3662768.0174278845,
            "unit": "ns",
            "range": "± 5262.611136448002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218669.3783482143,
            "unit": "ns",
            "range": "± 2665.945596335599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 763647.8970703125,
            "unit": "ns",
            "range": "± 1146.6732743818359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1940136.6787760416,
            "unit": "ns",
            "range": "± 2429.747897437054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 622728.7025669643,
            "unit": "ns",
            "range": "± 367.38003540116927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581454.8828776042,
            "unit": "ns",
            "range": "± 896.441366817496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "044891137bcb9cbbd0e114530fbb5b272e93c5ed",
          "message": "Merge pull request #3765 from OnedgeLee/feature/srh-blockchain\n\nPostpone state root hash",
          "timestamp": "2024-05-02T17:21:21+09:00",
          "tree_id": "2627712250e2e4140e0591b901664678d0ad104c",
          "url": "https://github.com/planetarium/libplanet/commit/044891137bcb9cbbd0e114530fbb5b272e93c5ed"
        },
        "date": 1714638550150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2738578,
            "unit": "ns",
            "range": "± 95516.42743455424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2853106.125,
            "unit": "ns",
            "range": "± 87606.00790627429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3888352.8214285714,
            "unit": "ns",
            "range": "± 75796.2615891632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3160451.2407407407,
            "unit": "ns",
            "range": "± 86773.23480224524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4059293.913043478,
            "unit": "ns",
            "range": "± 72562.99313067924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196301.0819672131,
            "unit": "ns",
            "range": "± 8251.959214423125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192675.84745762713,
            "unit": "ns",
            "range": "± 8506.216632990492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164368.4516129032,
            "unit": "ns",
            "range": "± 4985.799954796352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3160713.2,
            "unit": "ns",
            "range": "± 42757.87413899005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2867546,
            "unit": "ns",
            "range": "± 43244.155641460464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12024.796703296703,
            "unit": "ns",
            "range": "± 809.3270523439072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59788.905263157896,
            "unit": "ns",
            "range": "± 4111.650683362253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51188.3,
            "unit": "ns",
            "range": "± 1391.161618316097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 57272.545454545456,
            "unit": "ns",
            "range": "± 9900.046690544123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2683.3548387096776,
            "unit": "ns",
            "range": "± 324.2043989308519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11472.423913043478,
            "unit": "ns",
            "range": "± 834.5622032360644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5705912.785714285,
            "unit": "ns",
            "range": "± 26850.103913789957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14738322.766666668,
            "unit": "ns",
            "range": "± 116057.14123745046"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37082917.083333336,
            "unit": "ns",
            "range": "± 73675.09698480007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76224403.42857143,
            "unit": "ns",
            "range": "± 291619.4991643719"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151903756.64285713,
            "unit": "ns",
            "range": "± 469779.50831081095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1870015.18,
            "unit": "ns",
            "range": "± 271898.87789979804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2925726.6172839506,
            "unit": "ns",
            "range": "± 149888.65650029757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2528080.025252525,
            "unit": "ns",
            "range": "± 337129.0209541095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9171721.75609756,
            "unit": "ns",
            "range": "± 322224.84203997836"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 197161.2,
            "unit": "ns",
            "range": "± 3622.909174367235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3826153.2751116073,
            "unit": "ns",
            "range": "± 4628.5640663711065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218707.46796875,
            "unit": "ns",
            "range": "± 1503.7978737279084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771981.1029296875,
            "unit": "ns",
            "range": "± 1047.968450192836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927039.9102957589,
            "unit": "ns",
            "range": "± 1066.7124863221206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618741.3675362723,
            "unit": "ns",
            "range": "± 895.8932332124635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574475.0907505581,
            "unit": "ns",
            "range": "± 549.8002999444213"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f58f4280f062e4e71fcee97e291728bfc08326",
          "message": "Merge pull request #3768 from OnedgeLee/feature/srh-libplanet-net\n\nSloth update for Libplanet.Net",
          "timestamp": "2024-05-02T19:00:16+09:00",
          "tree_id": "f4b0321cb2e3f815be709a435637ba74a4d41a7f",
          "url": "https://github.com/planetarium/libplanet/commit/f6f58f4280f062e4e71fcee97e291728bfc08326"
        },
        "date": 1714644489984,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2710950.4444444445,
            "unit": "ns",
            "range": "± 88901.66858082006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2864233.870967742,
            "unit": "ns",
            "range": "± 67449.46939882326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3864190.554054054,
            "unit": "ns",
            "range": "± 106967.26021829346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2891610.403508772,
            "unit": "ns",
            "range": "± 114288.5160136491"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4039653.55,
            "unit": "ns",
            "range": "± 56535.32300343416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197831.54,
            "unit": "ns",
            "range": "± 7939.472068913727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193362.4375,
            "unit": "ns",
            "range": "± 7472.719251871251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 161354.25,
            "unit": "ns",
            "range": "± 2144.1025723852604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3122053.433333333,
            "unit": "ns",
            "range": "± 45787.59673047255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2854667.3,
            "unit": "ns",
            "range": "± 45487.05369223204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11699.787234042553,
            "unit": "ns",
            "range": "± 798.8519164096729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62720.02040816326,
            "unit": "ns",
            "range": "± 5269.486310729031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51221.5,
            "unit": "ns",
            "range": "± 1684.029853886352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58095.0206185567,
            "unit": "ns",
            "range": "± 10600.346761210398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4269.383838383838,
            "unit": "ns",
            "range": "± 1540.5479988883812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11594.6797752809,
            "unit": "ns",
            "range": "± 709.080783989156"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5771430.133333334,
            "unit": "ns",
            "range": "± 20670.492937195926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14990729.966666667,
            "unit": "ns",
            "range": "± 168633.1015975497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37306544.93333333,
            "unit": "ns",
            "range": "± 145184.58352656095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76241919.16666667,
            "unit": "ns",
            "range": "± 433844.55887114134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 155976266.5,
            "unit": "ns",
            "range": "± 701482.5617010952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843819.5714285714,
            "unit": "ns",
            "range": "± 254990.96603739818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935773.3,
            "unit": "ns",
            "range": "± 146804.01251981812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2534233.54,
            "unit": "ns",
            "range": "± 365762.60824060196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9305711.324324325,
            "unit": "ns",
            "range": "± 221757.20460537888"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 196013.83333333334,
            "unit": "ns",
            "range": "± 3987.959529117911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731320.352120536,
            "unit": "ns",
            "range": "± 9673.452783283736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1234978.0694754464,
            "unit": "ns",
            "range": "± 2008.645806243651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770839.17265625,
            "unit": "ns",
            "range": "± 1288.969221276917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1972883.7901785714,
            "unit": "ns",
            "range": "± 2284.464719558353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617221.9732142857,
            "unit": "ns",
            "range": "± 734.5645843226931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558427.9936147836,
            "unit": "ns",
            "range": "± 982.6763442637517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "08e801667a7a4e4f7f51805394106ebd804958cf",
          "message": "feat: Consider creating context from pre-sloth block",
          "timestamp": "2024-05-09T17:29:34+09:00",
          "tree_id": "b8ef808ed0b6457a1db58b468a238cafc06796af",
          "url": "https://github.com/planetarium/libplanet/commit/08e801667a7a4e4f7f51805394106ebd804958cf"
        },
        "date": 1715243950756,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441475.5161290322,
            "unit": "ns",
            "range": "± 74243.69690906246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2477197.3333333335,
            "unit": "ns",
            "range": "± 55656.13420399708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3062575.9615384615,
            "unit": "ns",
            "range": "± 82071.15866538294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2460487.966666667,
            "unit": "ns",
            "range": "± 38058.764419300445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3197796,
            "unit": "ns",
            "range": "± 35725.01222263881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201679.52083333334,
            "unit": "ns",
            "range": "± 7814.312282367864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192760.54166666666,
            "unit": "ns",
            "range": "± 7543.563464497916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169919.61538461538,
            "unit": "ns",
            "range": "± 2106.034802595529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3153759.8666666667,
            "unit": "ns",
            "range": "± 13044.438365321315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2736685.1428571427,
            "unit": "ns",
            "range": "± 21479.28161886792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12150.481927710844,
            "unit": "ns",
            "range": "± 662.0026225253076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60095.04929577465,
            "unit": "ns",
            "range": "± 2809.208270714277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52935.846153846156,
            "unit": "ns",
            "range": "± 786.6093742718222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56724.17346938775,
            "unit": "ns",
            "range": "± 8003.022736963892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3476.8894736842103,
            "unit": "ns",
            "range": "± 402.2254923504086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14077.030612244898,
            "unit": "ns",
            "range": "± 2121.0389812254675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5691936.571428572,
            "unit": "ns",
            "range": "± 28119.35520847979"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14495570.357142856,
            "unit": "ns",
            "range": "± 64960.07534674622"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37246234,
            "unit": "ns",
            "range": "± 139408.36391233592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75160197.23333333,
            "unit": "ns",
            "range": "± 332407.28396554786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150187052.6,
            "unit": "ns",
            "range": "± 551350.5797286462"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038570.5101010101,
            "unit": "ns",
            "range": "± 100231.24093025223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1882267.1,
            "unit": "ns",
            "range": "± 65852.3990804922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665349.3181818181,
            "unit": "ns",
            "range": "± 89747.05247457774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8136302.157894737,
            "unit": "ns",
            "range": "± 175007.54300799695"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34489.04285714286,
            "unit": "ns",
            "range": "± 1683.141123499425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3784815.4676339286,
            "unit": "ns",
            "range": "± 5453.602529565798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1194448.409342448,
            "unit": "ns",
            "range": "± 1578.62840886519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749046.4932391827,
            "unit": "ns",
            "range": "± 2357.9138572157462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953535.0834263393,
            "unit": "ns",
            "range": "± 2988.4802988697325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625986.9656575521,
            "unit": "ns",
            "range": "± 654.6503166476012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564137.9372907366,
            "unit": "ns",
            "range": "± 910.5122784984202"
          }
        ]
      }
    ]
  }
}