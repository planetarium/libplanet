window.BENCHMARK_DATA = {
  "lastUpdate": 1678437526801,
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
      }
    ]
  }
}