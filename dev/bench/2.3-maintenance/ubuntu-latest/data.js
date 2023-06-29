window.BENCHMARK_DATA = {
  "lastUpdate": 1688029653325,
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
          "id": "4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109",
          "message": "Merge pull request #3252 from greymistcube/release/2.3.0\n\n🚀 Release 2.3.0",
          "timestamp": "2023-06-29T14:35:16+09:00",
          "tree_id": "e73d3fb6303de55230d2e5a46b9e5b507b528da9",
          "url": "https://github.com/planetarium/libplanet/commit/4fefb5cea3ab3b9c4b4caa28c7aba0fafd39e109"
        },
        "date": 1688020495911,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3574737.476190476,
            "unit": "ns",
            "range": "± 130490.32592107059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3703723.5625,
            "unit": "ns",
            "range": "± 113174.713870802"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4524422.9130434785,
            "unit": "ns",
            "range": "± 112668.31885345952"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4587728.725,
            "unit": "ns",
            "range": "± 152853.53435618963"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7398837,
            "unit": "ns",
            "range": "± 113902.17339521598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8045577.933333334,
            "unit": "ns",
            "range": "± 71200.35378269515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22993952.666666668,
            "unit": "ns",
            "range": "± 320076.8851150492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56459498.93333333,
            "unit": "ns",
            "range": "± 877919.7335556095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113845573.73333333,
            "unit": "ns",
            "range": "± 1848405.4490551914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221507973.35714287,
            "unit": "ns",
            "range": "± 3068004.495874592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294796.6666666667,
            "unit": "ns",
            "range": "± 5854.64668145789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 282351.4666666667,
            "unit": "ns",
            "range": "± 10428.0124415834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242427.41666666666,
            "unit": "ns",
            "range": "± 3195.978338142921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4496700.1875,
            "unit": "ns",
            "range": "± 86959.86642524145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4137426.7333333334,
            "unit": "ns",
            "range": "± 74725.45503227766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19005.360824742267,
            "unit": "ns",
            "range": "± 1913.9733768261547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88559.34736842105,
            "unit": "ns",
            "range": "± 5602.391812105734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75565.79166666667,
            "unit": "ns",
            "range": "± 3724.9206095613913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92792.21276595745,
            "unit": "ns",
            "range": "± 10824.163514202883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5110.381443298969,
            "unit": "ns",
            "range": "± 614.2962851117217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19338.436170212764,
            "unit": "ns",
            "range": "± 1621.4918894323378"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47451.88888888889,
            "unit": "ns",
            "range": "± 2358.1586905922272"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997170.913504465,
            "unit": "ns",
            "range": "± 31436.792233878892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1916138.4165736607,
            "unit": "ns",
            "range": "± 7116.258408126682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390076.527734375,
            "unit": "ns",
            "range": "± 2633.0622226565106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710779.3549479167,
            "unit": "ns",
            "range": "± 2432.5008593588373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839776.9734375,
            "unit": "ns",
            "range": "± 1604.5407288289541"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 786492.4348493303,
            "unit": "ns",
            "range": "± 2716.1898383402395"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504068.4680851065,
            "unit": "ns",
            "range": "± 116985.00004183996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2936875.3950617285,
            "unit": "ns",
            "range": "± 153586.76126579716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2408511.594936709,
            "unit": "ns",
            "range": "± 123851.40342532887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760945.368421053,
            "unit": "ns",
            "range": "± 179930.11037087932"
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
          "id": "00a04b95448b57c36f51eef24e613fe85f2b0121",
          "message": "Merge pull request #3254 from greymistcube/prepare/2.3.1\n\n🔧 Prepare 2.3.1",
          "timestamp": "2023-06-29T17:51:53+09:00",
          "tree_id": "bfca3d30a84afe1d5b5d13b8aebd4c855e88bec2",
          "url": "https://github.com/planetarium/libplanet/commit/00a04b95448b57c36f51eef24e613fe85f2b0121"
        },
        "date": 1688029628570,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9149052.84,
            "unit": "ns",
            "range": "± 242877.02325176826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23995562.066666666,
            "unit": "ns",
            "range": "± 226092.91073123857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59262335.733333334,
            "unit": "ns",
            "range": "± 208560.70449099693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117487973.73333333,
            "unit": "ns",
            "range": "± 1101909.101934746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236657356.53846154,
            "unit": "ns",
            "range": "± 288441.6074689455"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59983.463917525776,
            "unit": "ns",
            "range": "± 8315.71866890982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 327823.47,
            "unit": "ns",
            "range": "± 25662.838114479862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321738.0172413793,
            "unit": "ns",
            "range": "± 13355.077744479853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284729.17,
            "unit": "ns",
            "range": "± 24323.47779329075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4744562.68,
            "unit": "ns",
            "range": "± 121633.01114408318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4308869.84375,
            "unit": "ns",
            "range": "± 132036.11701400526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30281.244680851065,
            "unit": "ns",
            "range": "± 2850.820239205153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 127809.22105263158,
            "unit": "ns",
            "range": "± 11191.189764463516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117804.96,
            "unit": "ns",
            "range": "± 21891.608592934917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129566.57142857143,
            "unit": "ns",
            "range": "± 24252.79824943578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8304.183673469388,
            "unit": "ns",
            "range": "± 2279.089831656845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21944.547368421052,
            "unit": "ns",
            "range": "± 2119.8843493566474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1630480.112244898,
            "unit": "ns",
            "range": "± 117082.37684875673"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3066594.108108108,
            "unit": "ns",
            "range": "± 103957.05100953518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2650322.231884058,
            "unit": "ns",
            "range": "± 124312.71404076388"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6039846.828571429,
            "unit": "ns",
            "range": "± 193970.993407669"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6520359.072916667,
            "unit": "ns",
            "range": "± 49031.41221700287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1970986.565625,
            "unit": "ns",
            "range": "± 11994.741988100714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1392318.6817708334,
            "unit": "ns",
            "range": "± 10589.721299013327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2710025.701041667,
            "unit": "ns",
            "range": "± 18259.0356602759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832246.1239583333,
            "unit": "ns",
            "range": "± 2686.7216587605108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760440.0724609375,
            "unit": "ns",
            "range": "± 432.1046377286065"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4049309.4,
            "unit": "ns",
            "range": "± 56611.09049193201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4199175.357142857,
            "unit": "ns",
            "range": "± 118977.7498944311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4883521.4,
            "unit": "ns",
            "range": "± 83147.19141017331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5188192.352941177,
            "unit": "ns",
            "range": "± 105887.4094769659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7756317.884615385,
            "unit": "ns",
            "range": "± 174037.96355998353"
          }
        ]
      }
    ]
  }
}