window.BENCHMARK_DATA = {
  "lastUpdate": 1698646883958,
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
          "id": "6d56d40c30e4db85f0457a8bf11671ba68e697bb",
          "message": "Merge pull request #3465 from OnedgeLee/prepare/4.0.0\n\n🔧 Prepare 4.0.0",
          "timestamp": "2023-10-30T15:01:50+09:00",
          "tree_id": "36a091534bd95b64bbd71255b59a5ba272bccca5",
          "url": "https://github.com/planetarium/libplanet/commit/6d56d40c30e4db85f0457a8bf11671ba68e697bb"
        },
        "date": 1698646854317,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48700.8313253012,
            "unit": "ns",
            "range": "± 2488.5008995978765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5167262.314732143,
            "unit": "ns",
            "range": "± 27941.860186903155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1612533.2713541666,
            "unit": "ns",
            "range": "± 5448.618670346911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1131264.370703125,
            "unit": "ns",
            "range": "± 2564.0134310320836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613869.6479166667,
            "unit": "ns",
            "range": "± 5714.002517904665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825712.0377604166,
            "unit": "ns",
            "range": "± 2377.664567438122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736887.6233258928,
            "unit": "ns",
            "range": "± 1102.080145598872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8018092.666666667,
            "unit": "ns",
            "range": "± 45341.11310004988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21786578.666666668,
            "unit": "ns",
            "range": "± 271494.221497482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54567723.941176474,
            "unit": "ns",
            "range": "± 1064483.2801554159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109770387.26666667,
            "unit": "ns",
            "range": "± 1228957.3636178914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215108210.66666666,
            "unit": "ns",
            "range": "± 3072991.5889535225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351489.6842105263,
            "unit": "ns",
            "range": "± 105202.69179941893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517822.512820513,
            "unit": "ns",
            "range": "± 121634.41670169537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285676.714285715,
            "unit": "ns",
            "range": "± 139632.07121123534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4295659.025,
            "unit": "ns",
            "range": "± 151195.79128477792"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10458481.945945946,
            "unit": "ns",
            "range": "± 334088.8438625891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268604.5348837209,
            "unit": "ns",
            "range": "± 9081.626415458006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257970.25,
            "unit": "ns",
            "range": "± 9582.509376948312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227772.625,
            "unit": "ns",
            "range": "± 4372.244669503298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4345792.6,
            "unit": "ns",
            "range": "± 59387.07868094829"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926913,
            "unit": "ns",
            "range": "± 73301.90072374853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18643.44210526316,
            "unit": "ns",
            "range": "± 1385.5037544256008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83319.96907216495,
            "unit": "ns",
            "range": "± 4914.801556806084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71289.73076923077,
            "unit": "ns",
            "range": "± 1940.7112625569482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81391.98969072165,
            "unit": "ns",
            "range": "± 10008.018738632001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.917525773196,
            "unit": "ns",
            "range": "± 468.71107994209075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18396.494505494506,
            "unit": "ns",
            "range": "± 1093.0391512112392"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1357186.9879518072,
            "unit": "ns",
            "range": "± 71966.8525185497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2663688.1960784313,
            "unit": "ns",
            "range": "± 108009.10877403249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1997457.7692307692,
            "unit": "ns",
            "range": "± 66025.19279362913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9323680.855555555,
            "unit": "ns",
            "range": "± 543272.7369104697"
          }
        ]
      }
    ]
  }
}