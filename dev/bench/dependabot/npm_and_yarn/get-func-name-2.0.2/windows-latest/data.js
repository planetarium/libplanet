window.BENCHMARK_DATA = {
  "lastUpdate": 1698296566621,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e62dcbe4330bc0e15798b4f65b0789d714d781a7",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-09-27T23:04:56Z",
          "tree_id": "936560849fc042d8841fb317d7b814274a9370e6",
          "url": "https://github.com/planetarium/libplanet/commit/e62dcbe4330bc0e15798b4f65b0789d714d781a7"
        },
        "date": 1695856892856,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1290420,
            "unit": "ns",
            "range": "± 137366.99940397812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2443878.846153846,
            "unit": "ns",
            "range": "± 100719.86259031117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1972435.3535353534,
            "unit": "ns",
            "range": "± 162957.09671575154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9021752.222222222,
            "unit": "ns",
            "range": "± 703645.5715687157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47212.63736263736,
            "unit": "ns",
            "range": "± 2702.864667621635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7189766.666666667,
            "unit": "ns",
            "range": "± 38062.02957329121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20273916.666666668,
            "unit": "ns",
            "range": "± 276814.47285312304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50372945,
            "unit": "ns",
            "range": "± 1128821.9301438488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99804250,
            "unit": "ns",
            "range": "± 1948694.8644327738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199267428.57142857,
            "unit": "ns",
            "range": "± 1808451.0365029436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4549237.834821428,
            "unit": "ns",
            "range": "± 20768.35333246697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1400466.7317708333,
            "unit": "ns",
            "range": "± 7232.927487213192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056752.3716517857,
            "unit": "ns",
            "range": "± 3212.330933883857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637532.6041666665,
            "unit": "ns",
            "range": "± 7594.406930707206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836926.1588541666,
            "unit": "ns",
            "range": "± 7679.853205855579"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762887.0954241072,
            "unit": "ns",
            "range": "± 3927.1354133057775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3093769.4444444445,
            "unit": "ns",
            "range": "± 102682.48652853386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3341213.3333333335,
            "unit": "ns",
            "range": "± 53871.7904800259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3927777.777777778,
            "unit": "ns",
            "range": "± 65837.69307976519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3955044,
            "unit": "ns",
            "range": "± 100883.31163610097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10342797.752808988,
            "unit": "ns",
            "range": "± 710817.0994415716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247817.94871794872,
            "unit": "ns",
            "range": "± 7066.74464601897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237396.9696969697,
            "unit": "ns",
            "range": "± 6556.413122302699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202415.21739130435,
            "unit": "ns",
            "range": "± 7750.733797269473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4001563.6363636362,
            "unit": "ns",
            "range": "± 96255.32166094481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4037081.25,
            "unit": "ns",
            "range": "± 75873.58098618165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18284.042553191488,
            "unit": "ns",
            "range": "± 1145.4729212091913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80114.89361702128,
            "unit": "ns",
            "range": "± 6037.641023474807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68354.54545454546,
            "unit": "ns",
            "range": "± 1670.108999216539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76153.26086956522,
            "unit": "ns",
            "range": "± 10946.588119029726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4851.063829787234,
            "unit": "ns",
            "range": "± 497.4655509445586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17738.947368421053,
            "unit": "ns",
            "range": "± 1276.1556912321778"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5cd7ff28f987e4164cdb99019f7a5946faddaab4",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-25T00:31:47Z",
          "tree_id": "c1b9d3ae1de6946bc196c5c9f291513b3d96b8ed",
          "url": "https://github.com/planetarium/libplanet/commit/5cd7ff28f987e4164cdb99019f7a5946faddaab4"
        },
        "date": 1698195166475,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1574853.6842105263,
            "unit": "ns",
            "range": "± 144809.16995952744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935520.707070707,
            "unit": "ns",
            "range": "± 280922.16158192704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2289069.0721649486,
            "unit": "ns",
            "range": "± 266816.0880959739"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10734500,
            "unit": "ns",
            "range": "± 1163932.2772190745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62062.244897959186,
            "unit": "ns",
            "range": "± 12975.977132275812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7379654.761904762,
            "unit": "ns",
            "range": "± 395942.41896224953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20435671.42857143,
            "unit": "ns",
            "range": "± 1986828.9480123327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51326131,
            "unit": "ns",
            "range": "± 4263059.270284497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102601056.12244898,
            "unit": "ns",
            "range": "± 7985491.152497235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220688122.85714287,
            "unit": "ns",
            "range": "± 10616317.647768013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4870120.404411765,
            "unit": "ns",
            "range": "± 156664.57525270004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1459309.353298611,
            "unit": "ns",
            "range": "± 29780.551448071208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1087260.9216638512,
            "unit": "ns",
            "range": "± 36295.7621638079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2966665.5078125,
            "unit": "ns",
            "range": "± 51942.342315147645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 925146.4266690341,
            "unit": "ns",
            "range": "± 32682.595595963427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 836258.5712139423,
            "unit": "ns",
            "range": "± 20323.286008559753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3234247.9591836734,
            "unit": "ns",
            "range": "± 290784.94630188844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3351313.131313131,
            "unit": "ns",
            "range": "± 355109.5426411246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4266792.857142857,
            "unit": "ns",
            "range": "± 450049.5799147504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007508.0808080807,
            "unit": "ns",
            "range": "± 415037.6679921975"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11265419.318181818,
            "unit": "ns",
            "range": "± 823908.8844358964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279826.0416666667,
            "unit": "ns",
            "range": "± 35029.41995039889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264084.0425531915,
            "unit": "ns",
            "range": "± 32202.04796529966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224163.9175257732,
            "unit": "ns",
            "range": "± 28609.781928444107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3866684.8484848486,
            "unit": "ns",
            "range": "± 289355.16392581974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3737973.4693877553,
            "unit": "ns",
            "range": "± 324218.232966376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29948.979591836734,
            "unit": "ns",
            "range": "± 7809.276071600096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97222.34042553192,
            "unit": "ns",
            "range": "± 15581.455439184574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90330.43478260869,
            "unit": "ns",
            "range": "± 12583.730461844742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106595.74468085106,
            "unit": "ns",
            "range": "± 18707.613968842456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6287.012987012987,
            "unit": "ns",
            "range": "± 1735.6441735556111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27940.40404040404,
            "unit": "ns",
            "range": "± 9823.56516180082"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "379cf7f3b2d3bb0916597999791157d0d6919992",
          "message": "Bump get-func-name from 2.0.0 to 2.0.2\n\nBumps [get-func-name](https://github.com/chaijs/get-func-name) from 2.0.0 to 2.0.2.\n- [Release notes](https://github.com/chaijs/get-func-name/releases)\n- [Commits](https://github.com/chaijs/get-func-name/commits/v2.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: get-func-name\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-10-26T04:44:32Z",
          "tree_id": "5964be8a019c2e78b28f5a210a1ea747b82f1900",
          "url": "https://github.com/planetarium/libplanet/commit/379cf7f3b2d3bb0916597999791157d0d6919992"
        },
        "date": 1698296496812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1472418.3673469387,
            "unit": "ns",
            "range": "± 160650.43908028514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2702149.1228070175,
            "unit": "ns",
            "range": "± 116712.25012642817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2114055.5555555555,
            "unit": "ns",
            "range": "± 117027.20812144126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9386991.011235954,
            "unit": "ns",
            "range": "± 607415.164604088"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60607.142857142855,
            "unit": "ns",
            "range": "± 8551.375966932752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8027753.125,
            "unit": "ns",
            "range": "± 248885.93835831707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21680986.666666668,
            "unit": "ns",
            "range": "± 265735.0502895336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54165546.666666664,
            "unit": "ns",
            "range": "± 428180.2555444322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109040573.33333333,
            "unit": "ns",
            "range": "± 923734.4373068846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215140138.46153846,
            "unit": "ns",
            "range": "± 1311752.8746798192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4662198.046875,
            "unit": "ns",
            "range": "± 39824.031120380525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1439831.6824776786,
            "unit": "ns",
            "range": "± 9423.771828180594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1109654.5442708333,
            "unit": "ns",
            "range": "± 13691.916399863645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2685290.3125,
            "unit": "ns",
            "range": "± 41579.760540731615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861799.66796875,
            "unit": "ns",
            "range": "± 6322.378731466241"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777806.2779017857,
            "unit": "ns",
            "range": "± 6619.001691353899"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439050,
            "unit": "ns",
            "range": "± 73417.07006187722"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3739615.3846153845,
            "unit": "ns",
            "range": "± 57373.03150078217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4353785.714285715,
            "unit": "ns",
            "range": "± 102755.09858743889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4353238.461538462,
            "unit": "ns",
            "range": "± 62807.63672332554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10213046.42857143,
            "unit": "ns",
            "range": "± 207560.12155721665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 269731.1111111111,
            "unit": "ns",
            "range": "± 9635.67760088946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263792.3076923077,
            "unit": "ns",
            "range": "± 13554.150840056525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262621.875,
            "unit": "ns",
            "range": "± 15061.070089367558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4351585.714285715,
            "unit": "ns",
            "range": "± 101357.55169554109"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3961375,
            "unit": "ns",
            "range": "± 47440.60640805128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29189.690721649484,
            "unit": "ns",
            "range": "± 3885.831221032447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105122.34042553192,
            "unit": "ns",
            "range": "± 9814.35370004215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99061.61616161616,
            "unit": "ns",
            "range": "± 13205.701513490665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109738.88888888889,
            "unit": "ns",
            "range": "± 13179.428070407246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8129.166666666667,
            "unit": "ns",
            "range": "± 1493.7706909673193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25784.615384615383,
            "unit": "ns",
            "range": "± 2476.1943505182426"
          }
        ]
      }
    ]
  }
}