window.BENCHMARK_DATA = {
  "lastUpdate": 1678784014561,
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
      }
    ]
  }
}