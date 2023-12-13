window.BENCHMARK_DATA = {
  "lastUpdate": 1702442117843,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5ef1e1094847ca1b7887b0897cefac447dd8a958",
          "message": "test3",
          "timestamp": "2023-12-13T13:24:30+09:00",
          "tree_id": "fe73a0403a8174c1132ef7c299be91fadf3e515f",
          "url": "https://github.com/planetarium/libplanet/commit/5ef1e1094847ca1b7887b0897cefac447dd8a958"
        },
        "date": 1702442093115,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3640254.251953125,
            "unit": "ns",
            "range": "± 9220.170158269804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216432.0919921875,
            "unit": "ns",
            "range": "± 3323.9574078092896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770178.7312825521,
            "unit": "ns",
            "range": "± 2160.0821287506164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1945520.5895432692,
            "unit": "ns",
            "range": "± 3089.836380295621"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618812.5462239584,
            "unit": "ns",
            "range": "± 2443.302418874795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 573313.111467634,
            "unit": "ns",
            "range": "± 2706.7180178460953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2362371.4571428574,
            "unit": "ns",
            "range": "± 73713.06175631804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2556308.727272727,
            "unit": "ns",
            "range": "± 62584.790190270454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3083241.695652174,
            "unit": "ns",
            "range": "± 77331.72187544606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2810717.592592593,
            "unit": "ns",
            "range": "± 104166.60033530802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6319980.714285715,
            "unit": "ns",
            "range": "± 146394.58999640078"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39099.234042553195,
            "unit": "ns",
            "range": "± 4512.356917400422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 192608,
            "unit": "ns",
            "range": "± 6536.362514948913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185847.82692307694,
            "unit": "ns",
            "range": "± 6558.806059813122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171054.3076923077,
            "unit": "ns",
            "range": "± 2296.972441592606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3041516,
            "unit": "ns",
            "range": "± 33704.724675163445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746672.9285714286,
            "unit": "ns",
            "range": "± 34746.35401507127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13485.724489795919,
            "unit": "ns",
            "range": "± 2072.88070275346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63828.47252747253,
            "unit": "ns",
            "range": "± 6275.946730424483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57355.608695652176,
            "unit": "ns",
            "range": "± 6636.060608120516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62587.38947368421,
            "unit": "ns",
            "range": "± 10269.488368302314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.34375,
            "unit": "ns",
            "range": "± 659.8509054583546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11146.122222222222,
            "unit": "ns",
            "range": "± 751.6154972327271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5534017.933333334,
            "unit": "ns",
            "range": "± 15906.03218219278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13893546.066666666,
            "unit": "ns",
            "range": "± 64900.59323795196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35748997.35714286,
            "unit": "ns",
            "range": "± 144987.37425076665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73159828.34615384,
            "unit": "ns",
            "range": "± 419042.0043969033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146558849.6,
            "unit": "ns",
            "range": "± 1138777.6250231648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1072956.076923077,
            "unit": "ns",
            "range": "± 12820.94487847612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1843260.6458333333,
            "unit": "ns",
            "range": "± 72150.80298707983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1386116.6836734693,
            "unit": "ns",
            "range": "± 120536.45042305512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5685736.75,
            "unit": "ns",
            "range": "± 347687.9123993089"
          }
        ]
      }
    ]
  }
}