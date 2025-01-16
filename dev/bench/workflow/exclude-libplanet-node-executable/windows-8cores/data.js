window.BENCHMARK_DATA = {
  "lastUpdate": 1737023876156,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "0a75090898339643930fccdf3712662db4faf4c2",
          "message": "exclude Node.Executable and Explorer.Executable from executables in constants.sh",
          "timestamp": "2025-01-16T19:24:53+09:00",
          "tree_id": "532673aea99105864e59099b79a28e9d016aaf1d",
          "url": "https://github.com/planetarium/libplanet/commit/0a75090898339643930fccdf3712662db4faf4c2"
        },
        "date": 1737023697965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 3045923.076923077,
            "unit": "ns",
            "range": "± 79707.60218544932"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1596195.1807228916,
            "unit": "ns",
            "range": "± 154493.91645108155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3267768,
            "unit": "ns",
            "range": "± 1424671.9777612607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5755863.3802816905,
            "unit": "ns",
            "range": "± 257300.14337869338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 22335.29411764706,
            "unit": "ns",
            "range": "± 1442.3613148115787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9316764.285714285,
            "unit": "ns",
            "range": "± 97415.3171271798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18980698.181818184,
            "unit": "ns",
            "range": "± 219850.81852028752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46844516.666666664,
            "unit": "ns",
            "range": "± 426249.184127896"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93748520,
            "unit": "ns",
            "range": "± 366482.2919128758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189715686.66666666,
            "unit": "ns",
            "range": "± 3139370.1212792597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4084426.201923077,
            "unit": "ns",
            "range": "± 5275.011952611844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 912239.7181919643,
            "unit": "ns",
            "range": "± 7373.3278980078685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 719571.171875,
            "unit": "ns",
            "range": "± 4591.158642006996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643951.8359375,
            "unit": "ns",
            "range": "± 5350.469018523005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 433649.4694010417,
            "unit": "ns",
            "range": "± 2198.241594530162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 397700.9049479167,
            "unit": "ns",
            "range": "± 622.8582682834789"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2483077.777777778,
            "unit": "ns",
            "range": "± 51925.04275741598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2880973.3333333335,
            "unit": "ns",
            "range": "± 48588.95328109447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2229918.8235294116,
            "unit": "ns",
            "range": "± 116466.1758522493"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2996072.222222222,
            "unit": "ns",
            "range": "± 61506.334494965115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2498916.1764705884,
            "unit": "ns",
            "range": "± 116326.70104583555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91965.85365853658,
            "unit": "ns",
            "range": "± 17269.506555477423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 140897.36842105264,
            "unit": "ns",
            "range": "± 18571.756145173495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 117958.44155844155,
            "unit": "ns",
            "range": "± 6031.394851532461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2232960,
            "unit": "ns",
            "range": "± 32547.609084890664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2179094.117647059,
            "unit": "ns",
            "range": "± 43940.62002561291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11696.470588235294,
            "unit": "ns",
            "range": "± 4015.785728099247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51120.73170731707,
            "unit": "ns",
            "range": "± 8322.58177245674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37640.350877192985,
            "unit": "ns",
            "range": "± 1660.6646312678124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58311.57894736842,
            "unit": "ns",
            "range": "± 20380.606463518907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2942.2680412371133,
            "unit": "ns",
            "range": "± 794.8840391773077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11373.863636363636,
            "unit": "ns",
            "range": "± 3818.8129081127076"
          }
        ]
      }
    ]
  }
}