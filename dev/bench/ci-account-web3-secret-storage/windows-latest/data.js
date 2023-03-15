window.BENCHMARK_DATA = {
  "lastUpdate": 1678867465891,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "e36554445f64de09c9ff351b002ffb70cccaad6e",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:22:24+09:00",
          "tree_id": "5ceb3e823b665aefce70bd95d2a0a04efed9bc66",
          "url": "https://github.com/planetarium/libplanet/commit/e36554445f64de09c9ff351b002ffb70cccaad6e"
        },
        "date": 1678437480522,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1461304,
            "unit": "ns",
            "range": "± 138349.5221779558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2466200,
            "unit": "ns",
            "range": "± 87961.8781063706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2196226.0416666665,
            "unit": "ns",
            "range": "± 139735.46981786445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4984671.428571428,
            "unit": "ns",
            "range": "± 153707.5729532975"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49448.958333333336,
            "unit": "ns",
            "range": "± 3986.793852119551"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7423933.333333333,
            "unit": "ns",
            "range": "± 57432.24165007301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18411871.42857143,
            "unit": "ns",
            "range": "± 32245.773213087792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 47242600,
            "unit": "ns",
            "range": "± 323474.7108684519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 94753920,
            "unit": "ns",
            "range": "± 373195.7092847819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 188098000,
            "unit": "ns",
            "range": "± 465168.4441453133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4919077.760416667,
            "unit": "ns",
            "range": "± 18659.997389316257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509849.6920072115,
            "unit": "ns",
            "range": "± 720.453156024068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1161897.1223958333,
            "unit": "ns",
            "range": "± 1742.6323601153397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581377.1484375,
            "unit": "ns",
            "range": "± 19407.204126070472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814939.6223958334,
            "unit": "ns",
            "range": "± 1185.4395657516948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731759.326171875,
            "unit": "ns",
            "range": "± 792.4834431584405"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3201796.153846154,
            "unit": "ns",
            "range": "± 131055.64296719349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4995576,
            "unit": "ns",
            "range": "± 129661.10403663853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23188260,
            "unit": "ns",
            "range": "± 229806.3246674096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6037436,
            "unit": "ns",
            "range": "± 158768.4605539358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25583783.333333332,
            "unit": "ns",
            "range": "± 286998.4088225345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 194774.1935483871,
            "unit": "ns",
            "range": "± 8865.514982016055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 201311.62790697673,
            "unit": "ns",
            "range": "± 7438.964639374845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180831.0344827586,
            "unit": "ns",
            "range": "± 5237.44099511774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10641826.666666666,
            "unit": "ns",
            "range": "± 30843.625566642426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8599085.714285715,
            "unit": "ns",
            "range": "± 25215.253538067213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23024.39024390244,
            "unit": "ns",
            "range": "± 1193.4555053961726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57246.739130434784,
            "unit": "ns",
            "range": "± 4625.145108194832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45487.878787878784,
            "unit": "ns",
            "range": "± 4045.185415575186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95872.66666666667,
            "unit": "ns",
            "range": "± 4379.885637570712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6642.783505154639,
            "unit": "ns",
            "range": "± 847.8216477489545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22639.78494623656,
            "unit": "ns",
            "range": "± 1460.1324973340336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "b7327229caeb35e673f6bae37d72feb509f85596",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-10T17:25:11+09:00",
          "tree_id": "235d29b043db63e25412e8d98e381f967ab88c53",
          "url": "https://github.com/planetarium/libplanet/commit/b7327229caeb35e673f6bae37d72feb509f85596"
        },
        "date": 1678437711542,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321817.3469387756,
            "unit": "ns",
            "range": "± 93457.39977267795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2493215,
            "unit": "ns",
            "range": "± 57221.49278760653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2107342.6829268294,
            "unit": "ns",
            "range": "± 110889.10602348791"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5042103.846153846,
            "unit": "ns",
            "range": "± 134209.78572598714"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49704.30107526882,
            "unit": "ns",
            "range": "± 2990.6344382339685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7224826.666666667,
            "unit": "ns",
            "range": "± 64041.030002721884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19620100,
            "unit": "ns",
            "range": "± 367627.9459816224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50840700,
            "unit": "ns",
            "range": "± 932249.5128911113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 101103480,
            "unit": "ns",
            "range": "± 1413344.5819857845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200068226.66666666,
            "unit": "ns",
            "range": "± 3199924.2563506016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4891108.4375,
            "unit": "ns",
            "range": "± 24674.239915875823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517170.2864583333,
            "unit": "ns",
            "range": "± 2238.9701791422463"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168333.3233173077,
            "unit": "ns",
            "range": "± 1092.9073743905183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627948.5546875,
            "unit": "ns",
            "range": "± 5882.552257660305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824424.7265625,
            "unit": "ns",
            "range": "± 1149.165679070772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769938.8802083334,
            "unit": "ns",
            "range": "± 1359.9450900642676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171600,
            "unit": "ns",
            "range": "± 137182.53776143183"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5236778.571428572,
            "unit": "ns",
            "range": "± 69091.40187597016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23024638.888888888,
            "unit": "ns",
            "range": "± 465163.4388785097"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5969611.764705882,
            "unit": "ns",
            "range": "± 107658.289754859"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26144538.46153846,
            "unit": "ns",
            "range": "± 698154.3508863484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180636,
            "unit": "ns",
            "range": "± 7077.868928669743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181940.625,
            "unit": "ns",
            "range": "± 8074.370951959123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180837,
            "unit": "ns",
            "range": "± 18473.670343480637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11644030.76923077,
            "unit": "ns",
            "range": "± 53993.43146185137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9547242.857142856,
            "unit": "ns",
            "range": "± 75189.16364523767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28573.40425531915,
            "unit": "ns",
            "range": "± 1641.0837968759529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63540.47619047619,
            "unit": "ns",
            "range": "± 3401.952630214221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54845.91836734694,
            "unit": "ns",
            "range": "± 3826.418431625841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114483.11688311688,
            "unit": "ns",
            "range": "± 4931.168394626023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9095.833333333334,
            "unit": "ns",
            "range": "± 1040.2344540045988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26713.684210526317,
            "unit": "ns",
            "range": "± 2461.3009242353232"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "2fa94d7c50d16c71954b72e7d87cff82bba8381b",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:31:04+09:00",
          "tree_id": "2b58b8fce086a83b7f632125a54f34f5dd788744",
          "url": "https://github.com/planetarium/libplanet/commit/2fa94d7c50d16c71954b72e7d87cff82bba8381b"
        },
        "date": 1678783957029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1617961,
            "unit": "ns",
            "range": "± 128827.33091587783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965943.4782608696,
            "unit": "ns",
            "range": "± 142377.636295647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2462226.595744681,
            "unit": "ns",
            "range": "± 159687.27851481852"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6045872.631578947,
            "unit": "ns",
            "range": "± 382519.5368232998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54151.11111111111,
            "unit": "ns",
            "range": "± 3403.1790968216305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8282190.322580645,
            "unit": "ns",
            "range": "± 224354.85635459836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 23120025,
            "unit": "ns",
            "range": "± 430788.4144217437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 58584697.72727273,
            "unit": "ns",
            "range": "± 2163784.4508013264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113898057.89473684,
            "unit": "ns",
            "range": "± 2416463.4018691652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 235183595,
            "unit": "ns",
            "range": "± 8292675.828611407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5856692.3125,
            "unit": "ns",
            "range": "± 155418.43130792456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1820881.317608173,
            "unit": "ns",
            "range": "± 9743.60273243673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1384813.6881510417,
            "unit": "ns",
            "range": "± 12041.605397700838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3137666.40625,
            "unit": "ns",
            "range": "± 38031.99415513376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1087182.0572916667,
            "unit": "ns",
            "range": "± 18759.943921772923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 876310.9830729166,
            "unit": "ns",
            "range": "± 7377.099007795451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3953431.25,
            "unit": "ns",
            "range": "± 73043.05322890055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5984010.975609756,
            "unit": "ns",
            "range": "± 213714.74197870487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27792587.037037037,
            "unit": "ns",
            "range": "± 1169954.7238532468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7510627.777777778,
            "unit": "ns",
            "range": "± 155269.16877230274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31225137.931034483,
            "unit": "ns",
            "range": "± 889049.1226239548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205624.65753424657,
            "unit": "ns",
            "range": "± 10255.713594841738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214339.2857142857,
            "unit": "ns",
            "range": "± 8673.484747339886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203820.21276595743,
            "unit": "ns",
            "range": "± 12858.230950642095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13262366.666666666,
            "unit": "ns",
            "range": "± 343170.769590665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10247088.095238095,
            "unit": "ns",
            "range": "± 371700.6599221036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26031.632653061224,
            "unit": "ns",
            "range": "± 2542.366660180839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62506.382978723406,
            "unit": "ns",
            "range": "± 6381.134973550936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50112.903225806454,
            "unit": "ns",
            "range": "± 4698.964405021961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117158.51063829787,
            "unit": "ns",
            "range": "± 16386.42507657507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8319.58762886598,
            "unit": "ns",
            "range": "± 1256.2045327806673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24686.17021276596,
            "unit": "ns",
            "range": "± 2368.9569894845945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "189a105c6c01fd9c5454c297df284a3a5d28bae8",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:42:08+09:00",
          "tree_id": "e0dbe127ac62eea224b8e1217647ee9a55c2a5fc",
          "url": "https://github.com/planetarium/libplanet/commit/189a105c6c01fd9c5454c297df284a3a5d28bae8"
        },
        "date": 1678784252292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1209414,
            "unit": "ns",
            "range": "± 116794.17017068354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2100458.1395348837,
            "unit": "ns",
            "range": "± 71667.11151320899"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1857001.0204081633,
            "unit": "ns",
            "range": "± 125105.46189869639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4572311.940298508,
            "unit": "ns",
            "range": "± 204952.00437588638"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32778.82352941176,
            "unit": "ns",
            "range": "± 2006.3051872040007"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7198084.615384615,
            "unit": "ns",
            "range": "± 46559.9585866412"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 17824846.666666668,
            "unit": "ns",
            "range": "± 173016.90613787953"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 44165936.666666664,
            "unit": "ns",
            "range": "± 229633.27865678936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 86463378.57142857,
            "unit": "ns",
            "range": "± 790038.9115816934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 175705273.33333334,
            "unit": "ns",
            "range": "± 1064778.3763143702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4935382.421875,
            "unit": "ns",
            "range": "± 27120.13038626416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518365.6640625,
            "unit": "ns",
            "range": "± 3985.2418252692105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1035254.1796875,
            "unit": "ns",
            "range": "± 4663.494881329606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2539805.1822916665,
            "unit": "ns",
            "range": "± 9403.439064249895"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835098.7234933035,
            "unit": "ns",
            "range": "± 3998.442174178824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752509.6614583334,
            "unit": "ns",
            "range": "± 5129.947118126298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2835950,
            "unit": "ns",
            "range": "± 46867.846120768125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4395737.5,
            "unit": "ns",
            "range": "± 82274.06132352205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21136280,
            "unit": "ns",
            "range": "± 342623.3984170625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5492953.333333333,
            "unit": "ns",
            "range": "± 102605.95824154983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24563740,
            "unit": "ns",
            "range": "± 449201.8871605188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 140087.25490196078,
            "unit": "ns",
            "range": "± 5725.415645499066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 142448.88888888888,
            "unit": "ns",
            "range": "± 5402.466701854483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 111013.51351351352,
            "unit": "ns",
            "range": "± 3776.84187311761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10886578.57142857,
            "unit": "ns",
            "range": "± 152458.12756078521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9032000,
            "unit": "ns",
            "range": "± 134892.7323126388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15019,
            "unit": "ns",
            "range": "± 3807.6927715381976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 35160.606060606064,
            "unit": "ns",
            "range": "± 4536.334449882128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23482.352941176472,
            "unit": "ns",
            "range": "± 962.2278071959762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74471.71717171717,
            "unit": "ns",
            "range": "± 15681.452975709743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3136.734693877551,
            "unit": "ns",
            "range": "± 628.7588420565856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11057.142857142857,
            "unit": "ns",
            "range": "± 2042.7896834284356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "c0f85e698e07c28eb40a1a899a5ef4c17bb5a3f3",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-14T17:40:46+09:00",
          "tree_id": "4a7543b9ada21be69b498aefc3df3ea5c5378ba7",
          "url": "https://github.com/planetarium/libplanet/commit/c0f85e698e07c28eb40a1a899a5ef4c17bb5a3f3"
        },
        "date": 1678784484421,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1814712.3711340206,
            "unit": "ns",
            "range": "± 241049.58439505243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3258392.8571428573,
            "unit": "ns",
            "range": "± 257571.81372736444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643204.0816326533,
            "unit": "ns",
            "range": "± 252144.40998825093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6669438.947368421,
            "unit": "ns",
            "range": "± 517317.2182694377"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64050,
            "unit": "ns",
            "range": "± 12980.936995252896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 9580651.041666666,
            "unit": "ns",
            "range": "± 674285.4948984758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 25567765.384615384,
            "unit": "ns",
            "range": "± 979974.7635575384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 66687170.37037037,
            "unit": "ns",
            "range": "± 1823826.482935685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 138457976.47058824,
            "unit": "ns",
            "range": "± 5577040.467473344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 261564006.25,
            "unit": "ns",
            "range": "± 4939076.561729429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5819675.303819444,
            "unit": "ns",
            "range": "± 120884.70857503919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1917630.7765151516,
            "unit": "ns",
            "range": "± 59686.80495489647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1482015.8528645833,
            "unit": "ns",
            "range": "± 38414.2999675501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3086590.1506696427,
            "unit": "ns",
            "range": "± 72476.17609950999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1069882.240513393,
            "unit": "ns",
            "range": "± 17722.184980753333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 992940.5110677084,
            "unit": "ns",
            "range": "± 20189.903930586042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4168742.8571428573,
            "unit": "ns",
            "range": "± 275459.55587097513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6340483,
            "unit": "ns",
            "range": "± 436683.082517019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31715981.25,
            "unit": "ns",
            "range": "± 1231225.6745031965"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8014065.263157895,
            "unit": "ns",
            "range": "± 462954.3554929328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36054220.833333336,
            "unit": "ns",
            "range": "± 1396586.464625001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 255571.875,
            "unit": "ns",
            "range": "± 39330.809412964634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254953.1914893617,
            "unit": "ns",
            "range": "± 41369.96911460755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239327.47252747254,
            "unit": "ns",
            "range": "± 32187.699741547458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15322451.35135135,
            "unit": "ns",
            "range": "± 516204.4946969615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12595093.103448275,
            "unit": "ns",
            "range": "± 545212.4777703783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32411.11111111111,
            "unit": "ns",
            "range": "± 11814.293391679046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72047.82608695653,
            "unit": "ns",
            "range": "± 14181.891241234825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54683.67346938775,
            "unit": "ns",
            "range": "± 12787.676847262388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138598.93617021278,
            "unit": "ns",
            "range": "± 30733.731581449934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6346.067415730337,
            "unit": "ns",
            "range": "± 817.8486440010657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31633,
            "unit": "ns",
            "range": "± 11073.027151733635"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "5cdf57ed702ea674aba15002e8d7f5453cdfe526",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T13:34:54+09:00",
          "tree_id": "764fab0d8809b2241a7636a878afc60b3db1b049",
          "url": "https://github.com/planetarium/libplanet/commit/5cdf57ed702ea674aba15002e8d7f5453cdfe526"
        },
        "date": 1678856030360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1318514.1304347827,
            "unit": "ns",
            "range": "± 91559.08268605835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2603232.8767123288,
            "unit": "ns",
            "range": "± 129337.18642756414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180069.387755102,
            "unit": "ns",
            "range": "± 148713.81871894692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5145656.666666667,
            "unit": "ns",
            "range": "± 194374.67965480764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47845.94594594595,
            "unit": "ns",
            "range": "± 2413.2164172510907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6984685.714285715,
            "unit": "ns",
            "range": "± 93597.93601556408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19736296.666666668,
            "unit": "ns",
            "range": "± 165643.48060417792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49961500,
            "unit": "ns",
            "range": "± 680946.616325916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98772306.66666667,
            "unit": "ns",
            "range": "± 1497253.9690411657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 198734907.14285713,
            "unit": "ns",
            "range": "± 3298389.1456435067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4758549.497767857,
            "unit": "ns",
            "range": "± 43553.50493242717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532752.1614583333,
            "unit": "ns",
            "range": "± 21669.745847900034"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1168285.6724330357,
            "unit": "ns",
            "range": "± 12007.701264565303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635168.6104910714,
            "unit": "ns",
            "range": "± 10595.912972440272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818473.291015625,
            "unit": "ns",
            "range": "± 4771.182276140441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774452.2786458334,
            "unit": "ns",
            "range": "± 3681.1228888481255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3128935.8974358975,
            "unit": "ns",
            "range": "± 108674.42561488901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4832636.842105263,
            "unit": "ns",
            "range": "± 102541.30447193958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22466841.666666668,
            "unit": "ns",
            "range": "± 267357.2021857763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6034783.333333333,
            "unit": "ns",
            "range": "± 180622.1166496188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26508571.42857143,
            "unit": "ns",
            "range": "± 399452.9093813022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 183234.04255319148,
            "unit": "ns",
            "range": "± 7146.275302127818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188075,
            "unit": "ns",
            "range": "± 6674.088817094176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160702.22222222222,
            "unit": "ns",
            "range": "± 8935.775561969012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10763066.666666666,
            "unit": "ns",
            "range": "± 250354.27164986287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8719638.461538462,
            "unit": "ns",
            "range": "± 125659.21864618303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20902.04081632653,
            "unit": "ns",
            "range": "± 2456.003777484449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52396.59090909091,
            "unit": "ns",
            "range": "± 3479.6765890028255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40854.83870967742,
            "unit": "ns",
            "range": "± 2360.707158653961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99073.4693877551,
            "unit": "ns",
            "range": "± 17495.239712033883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6094.845360824742,
            "unit": "ns",
            "range": "± 743.7757186058368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18992.55319148936,
            "unit": "ns",
            "range": "± 2097.5787045713987"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "32e0bc358f70d93464ec5dde93d4de50e33d1578",
          "message": "@planetarium/account-web3-secret-storage\n\nCo-authored-by: Hong Minhee <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-03-15T16:46:51+09:00",
          "tree_id": "d2a71502bd7224d5f7fdfe26a76a6310141bd793",
          "url": "https://github.com/planetarium/libplanet/commit/32e0bc358f70d93464ec5dde93d4de50e33d1578"
        },
        "date": 1678867418959,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288200,
            "unit": "ns",
            "range": "± 109322.07443876995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2319145.1612903224,
            "unit": "ns",
            "range": "± 70364.20415102023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001120.5128205128,
            "unit": "ns",
            "range": "± 102217.68515367171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4698574.285714285,
            "unit": "ns",
            "range": "± 148876.8823022353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42656.06060606061,
            "unit": "ns",
            "range": "± 1913.4446415484292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 6925342.857142857,
            "unit": "ns",
            "range": "± 17762.469695127693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 18044193.333333332,
            "unit": "ns",
            "range": "± 137761.82586865878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 45278350,
            "unit": "ns",
            "range": "± 322354.73949815455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 89612793.33333333,
            "unit": "ns",
            "range": "± 822676.5042631683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 179035520,
            "unit": "ns",
            "range": "± 1561581.692296079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4872259.254807692,
            "unit": "ns",
            "range": "± 6995.342651483282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507635.6380208333,
            "unit": "ns",
            "range": "± 3304.439584379083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1141953.1119791667,
            "unit": "ns",
            "range": "± 2073.910473399991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2587473.0989583335,
            "unit": "ns",
            "range": "± 3651.6791193242516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820550.5092075893,
            "unit": "ns",
            "range": "± 3717.934715136515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762699.1666666666,
            "unit": "ns",
            "range": "± 2955.252819930515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2874875,
            "unit": "ns",
            "range": "± 52517.88901571222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4546212.5,
            "unit": "ns",
            "range": "± 113501.78436636063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 21070228.57142857,
            "unit": "ns",
            "range": "± 362914.258635396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5484480,
            "unit": "ns",
            "range": "± 122360.37198202263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 24386820,
            "unit": "ns",
            "range": "± 555470.5360512406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175528.57142857142,
            "unit": "ns",
            "range": "± 6399.3248772833385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179327.08333333334,
            "unit": "ns",
            "range": "± 6149.545549143686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144568.88888888888,
            "unit": "ns",
            "range": "± 5034.960603900321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10087093.333333334,
            "unit": "ns",
            "range": "± 71233.1430351537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8306106.666666667,
            "unit": "ns",
            "range": "± 67536.06937530986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16563.917525773195,
            "unit": "ns",
            "range": "± 1880.9453278765125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 45391.9540229885,
            "unit": "ns",
            "range": "± 2773.848740481506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 33735,
            "unit": "ns",
            "range": "± 740.039117031554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76070.73170731707,
            "unit": "ns",
            "range": "± 7288.456758953186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4401.0526315789475,
            "unit": "ns",
            "range": "± 543.5295871376876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16273.655913978495,
            "unit": "ns",
            "range": "± 1598.5997846935466"
          }
        ]
      }
    ]
  }
}