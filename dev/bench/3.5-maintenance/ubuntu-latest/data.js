window.BENCHMARK_DATA = {
  "lastUpdate": 1696421548564,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "f4de791ec79e187d4f37220ca3f714d0fa1503b4",
          "message": "Merge pull request #3441 from greymistcube/release/3.5.0\n\n🚀 Release 3.5.0",
          "timestamp": "2023-10-04T17:16:25+09:00",
          "tree_id": "3e3fb2039e8bdf70273fc070e13a90ca8e2a47eb",
          "url": "https://github.com/planetarium/libplanet/commit/f4de791ec79e187d4f37220ca3f714d0fa1503b4"
        },
        "date": 1696408220920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49710.37894736842,
            "unit": "ns",
            "range": "± 3250.0366288572463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7783339,
            "unit": "ns",
            "range": "± 70911.32772796499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19887769.2,
            "unit": "ns",
            "range": "± 73849.24887634267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51310123.53333333,
            "unit": "ns",
            "range": "± 256310.1135747383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103063710.84615384,
            "unit": "ns",
            "range": "± 160158.18118079708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204108027.73333332,
            "unit": "ns",
            "range": "± 429645.9957680221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270280.40625,
            "unit": "ns",
            "range": "± 5758.588373502967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265027.71428571426,
            "unit": "ns",
            "range": "± 9626.526583494058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240915.90476190476,
            "unit": "ns",
            "range": "± 8689.478930768488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4295415.142857143,
            "unit": "ns",
            "range": "± 40760.84199110926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3958227.933333333,
            "unit": "ns",
            "range": "± 34910.710882942236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22035.354166666668,
            "unit": "ns",
            "range": "± 1509.5088568918993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90513.01111111112,
            "unit": "ns",
            "range": "± 6087.385366097728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71233.2,
            "unit": "ns",
            "range": "± 2075.0250251918437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85988.47959183673,
            "unit": "ns",
            "range": "± 13543.317682155484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5351.010204081633,
            "unit": "ns",
            "range": "± 652.3850057834653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21161.031578947368,
            "unit": "ns",
            "range": "± 1663.8999973315167"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1333480.8764044943,
            "unit": "ns",
            "range": "± 77115.99180555876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562843.484848485,
            "unit": "ns",
            "range": "± 81069.71894152327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2035616.1414141415,
            "unit": "ns",
            "range": "± 125887.35525614937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8487238.454545455,
            "unit": "ns",
            "range": "± 360030.3483184294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5012144.126201923,
            "unit": "ns",
            "range": "± 8496.029395190204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1569874.9170673077,
            "unit": "ns",
            "range": "± 884.3016755276004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1072153.5084134615,
            "unit": "ns",
            "range": "± 609.5013688506732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578790.2354166666,
            "unit": "ns",
            "range": "± 10166.045430764108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795549.2318209135,
            "unit": "ns",
            "range": "± 1811.326267468306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740685.8427734375,
            "unit": "ns",
            "range": "± 991.0102295081566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3331325.6666666665,
            "unit": "ns",
            "range": "± 89170.86825396883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3556579.066666667,
            "unit": "ns",
            "range": "± 63782.56407678766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4222801.071428572,
            "unit": "ns",
            "range": "± 54592.271100564976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4111332.0689655175,
            "unit": "ns",
            "range": "± 174041.0647358293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9918777.735294119,
            "unit": "ns",
            "range": "± 255018.06878542752"
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
          "id": "2c220258279adbad575c0686da121881db5772c4",
          "message": "Merge pull request #3443 from greymistcube/prepare/3.5.1\n\n🔧 Prepare 3.5.1",
          "timestamp": "2023-10-04T20:57:49+09:00",
          "tree_id": "6660c95a6a1132eb392ccdb1480cc8a13c802149",
          "url": "https://github.com/planetarium/libplanet/commit/2c220258279adbad575c0686da121881db5772c4"
        },
        "date": 1696421520188,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51091.47368421053,
            "unit": "ns",
            "range": "± 2415.4555869714477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8547648.9375,
            "unit": "ns",
            "range": "± 258249.70460026668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22727439.07142857,
            "unit": "ns",
            "range": "± 184899.04120542866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57797464.333333336,
            "unit": "ns",
            "range": "± 404070.863850578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113539848.66666667,
            "unit": "ns",
            "range": "± 1165549.7177265247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224010322.26666668,
            "unit": "ns",
            "range": "± 4179542.807541556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280487.86842105264,
            "unit": "ns",
            "range": "± 9668.436141106353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265669.4318181818,
            "unit": "ns",
            "range": "± 8440.746746965337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251874.74285714285,
            "unit": "ns",
            "range": "± 7988.843810710832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4502952.142857143,
            "unit": "ns",
            "range": "± 72079.1168720521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4028301,
            "unit": "ns",
            "range": "± 99720.51832268751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20560.893617021276,
            "unit": "ns",
            "range": "± 1552.4315611329955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85866.9268292683,
            "unit": "ns",
            "range": "± 4447.643300991161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72414.75862068965,
            "unit": "ns",
            "range": "± 2065.3200314993114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81273.206185567,
            "unit": "ns",
            "range": "± 11313.796461564585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5913.326530612245,
            "unit": "ns",
            "range": "± 786.7052628710935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19108.73404255319,
            "unit": "ns",
            "range": "± 1367.944263905231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1402909.0208333333,
            "unit": "ns",
            "range": "± 81748.54505745095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2685883.933333333,
            "unit": "ns",
            "range": "± 101137.82517040793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2089146.7435897435,
            "unit": "ns",
            "range": "± 99392.05323553264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9609612.505376345,
            "unit": "ns",
            "range": "± 560971.4745246706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5002523.643973215,
            "unit": "ns",
            "range": "± 16865.296565804925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1586724.5004185268,
            "unit": "ns",
            "range": "± 3310.6038886193523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1068822.195703125,
            "unit": "ns",
            "range": "± 3743.864901493274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578043.8515625,
            "unit": "ns",
            "range": "± 5141.22521745298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823329.5958984375,
            "unit": "ns",
            "range": "± 1196.156183427784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757192.341796875,
            "unit": "ns",
            "range": "± 463.71160842687397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3431295.2280701753,
            "unit": "ns",
            "range": "± 148629.20497692254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3636849.9375,
            "unit": "ns",
            "range": "± 112054.20799138519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4331713.214285715,
            "unit": "ns",
            "range": "± 49357.821514354306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4395456.8965517245,
            "unit": "ns",
            "range": "± 192067.7261014421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10766804.162162162,
            "unit": "ns",
            "range": "± 315337.13570271933"
          }
        ]
      }
    ]
  }
}