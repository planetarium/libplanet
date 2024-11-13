window.BENCHMARK_DATA = {
  "lastUpdate": 1731493682109,
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
          "id": "d257534143323bead2c439d84f8e44859b76b7e7",
          "message": "Prepare 5.4.1",
          "timestamp": "2024-11-13T16:19:14+09:00",
          "tree_id": "fab508f993e275a5d9142bada18e2d94b1a43499",
          "url": "https://github.com/planetarium/libplanet/commit/d257534143323bead2c439d84f8e44859b76b7e7"
        },
        "date": 1731493669339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10519784.5,
            "unit": "ns",
            "range": "± 90908.42183958336"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26359282.230769232,
            "unit": "ns",
            "range": "± 103686.71086029125"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66539339.266666666,
            "unit": "ns",
            "range": "± 115787.61599612744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136972180.8,
            "unit": "ns",
            "range": "± 299260.2000546395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273837056.71428573,
            "unit": "ns",
            "range": "± 281064.15278679394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13032.119047619048,
            "unit": "ns",
            "range": "± 467.9167740455745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53805.73863636364,
            "unit": "ns",
            "range": "± 3522.956094467761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106178.55319148937,
            "unit": "ns",
            "range": "± 4099.668591104867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 94038.63636363637,
            "unit": "ns",
            "range": "± 3240.1245065864086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2821599.93,
            "unit": "ns",
            "range": "± 191639.2931279778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2702178.08,
            "unit": "ns",
            "range": "± 165720.9885828051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5176.797872340426,
            "unit": "ns",
            "range": "± 732.8859228484356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27119.808988764045,
            "unit": "ns",
            "range": "± 1977.8704507419804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 24281.103092783505,
            "unit": "ns",
            "range": "± 2797.8818680556374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30262.621052631577,
            "unit": "ns",
            "range": "± 5313.034009564226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1444.5157894736842,
            "unit": "ns",
            "range": "± 278.7758904361456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 5200.139784946236,
            "unit": "ns",
            "range": "± 742.9258929541307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 681304.3452380953,
            "unit": "ns",
            "range": "± 35305.06389818999"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1292012.1274509805,
            "unit": "ns",
            "range": "± 51786.35533611562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1061832.6153846155,
            "unit": "ns",
            "range": "± 61191.067061344685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8796300.67,
            "unit": "ns",
            "range": "± 1179481.8101418947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2110704.6470588236,
            "unit": "ns",
            "range": "± 84771.74429698224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2239080.024390244,
            "unit": "ns",
            "range": "± 69209.02143741371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2554371.2580645164,
            "unit": "ns",
            "range": "± 75658.63976747479"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2241712.7666666666,
            "unit": "ns",
            "range": "± 65448.78912959265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2787867.277777778,
            "unit": "ns",
            "range": "± 88949.69653641677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 2996781.077320772,
            "unit": "ns",
            "range": "± 59486.30460769497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920469.2052083333,
            "unit": "ns",
            "range": "± 5963.391823047645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 618355.5469401042,
            "unit": "ns",
            "range": "± 4786.327551916966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1630311.5168805805,
            "unit": "ns",
            "range": "± 8299.965087176673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 470409.08530970983,
            "unit": "ns",
            "range": "± 622.4604688430293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 423606.4860026042,
            "unit": "ns",
            "range": "± 1317.359376194853"
          }
        ]
      }
    ]
  }
}