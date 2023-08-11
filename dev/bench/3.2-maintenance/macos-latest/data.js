window.BENCHMARK_DATA = {
  "lastUpdate": 1691726388553,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3",
          "message": "Merge pull request #3372 from greymistcube/release/3.2.0\n\n🚀 Release 3.2.0",
          "timestamp": "2023-08-11T10:15:50+09:00",
          "tree_id": "1371cd3f03bb4071f0170747f91bc7ad2a1abe94",
          "url": "https://github.com/planetarium/libplanet/commit/97b3d2e597c067f06b4f45c8a7b8ccb2ac4ae3f3"
        },
        "date": 1691723598719,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8364198,
            "unit": "ns",
            "range": "± 282592.7522431201"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20922359.25490196,
            "unit": "ns",
            "range": "± 837492.5091795352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53519960.823529415,
            "unit": "ns",
            "range": "± 1699350.246131319"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100430924.81944445,
            "unit": "ns",
            "range": "± 4913591.393070155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243453244,
            "unit": "ns",
            "range": "± 4598285.747144385"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75755.19565217392,
            "unit": "ns",
            "range": "± 13091.743779232766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332959.8736842105,
            "unit": "ns",
            "range": "± 48434.31099827365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291921.32954545453,
            "unit": "ns",
            "range": "± 15973.33720968444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 288168.3125,
            "unit": "ns",
            "range": "± 20760.863725725812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4093610.34,
            "unit": "ns",
            "range": "± 163644.685242936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3657980.8421052634,
            "unit": "ns",
            "range": "± 126189.15823033213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19955.273684210526,
            "unit": "ns",
            "range": "± 3443.523929343266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101240.61458333333,
            "unit": "ns",
            "range": "± 15553.868553392309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105335.47474747474,
            "unit": "ns",
            "range": "± 15514.34277702176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96255.91237113402,
            "unit": "ns",
            "range": "± 13888.011450042515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4430.620689655172,
            "unit": "ns",
            "range": "± 660.2194357089853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16466.880952380954,
            "unit": "ns",
            "range": "± 1705.5787655268077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1573130.8383838383,
            "unit": "ns",
            "range": "± 140131.41270816425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2956501.868131868,
            "unit": "ns",
            "range": "± 164986.09512684587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1975055.0104166667,
            "unit": "ns",
            "range": "± 172581.6266338609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5629676.46835443,
            "unit": "ns",
            "range": "± 285655.86535244144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3992417.525773196,
            "unit": "ns",
            "range": "± 428444.60562427854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3461258.5888888887,
            "unit": "ns",
            "range": "± 192542.74131781078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4510446.670212766,
            "unit": "ns",
            "range": "± 289942.97108960315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974067.8969072164,
            "unit": "ns",
            "range": "± 269003.2493452482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7428322.934343434,
            "unit": "ns",
            "range": "± 668127.740531065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5111057.85625,
            "unit": "ns",
            "range": "± 32441.095736295872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564128.7622767857,
            "unit": "ns",
            "range": "± 9300.095082392561"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 987352.8197544643,
            "unit": "ns",
            "range": "± 2587.435105143073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2694228.109635417,
            "unit": "ns",
            "range": "± 12433.849797959027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 777370.5117885044,
            "unit": "ns",
            "range": "± 2420.4616145419322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 759234.7128208706,
            "unit": "ns",
            "range": "± 2786.68360005278"
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
          "id": "5ea86df31c3e647c4fc061b1048f707f2cc2e940",
          "message": "Merge pull request #3376 from greymistcube/prepare/3.2.1\n\n🔧 Prepare 3.2.1",
          "timestamp": "2023-08-11T12:38:43+09:00",
          "tree_id": "b4396921fa9482f449cd092c685901864dc9aece",
          "url": "https://github.com/planetarium/libplanet/commit/5ea86df31c3e647c4fc061b1048f707f2cc2e940"
        },
        "date": 1691726336305,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8740223.205128206,
            "unit": "ns",
            "range": "± 303665.2254728604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21972049.227272727,
            "unit": "ns",
            "range": "± 818032.6733446607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52912495.88235294,
            "unit": "ns",
            "range": "± 979457.5093974139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109606784.03846154,
            "unit": "ns",
            "range": "± 3757804.9295677147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224416751.43548387,
            "unit": "ns",
            "range": "± 6646668.359303524"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69943.39583333333,
            "unit": "ns",
            "range": "± 11829.208671739683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 416531.9175824176,
            "unit": "ns",
            "range": "± 133756.06921665405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323013.3333333333,
            "unit": "ns",
            "range": "± 30910.517529508124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303218.1,
            "unit": "ns",
            "range": "± 25783.32250654666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4164036.8666666667,
            "unit": "ns",
            "range": "± 77213.93885161508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3695755.445945946,
            "unit": "ns",
            "range": "± 184328.45303676953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20121.80769230769,
            "unit": "ns",
            "range": "± 3760.2251282848233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96989.16161616161,
            "unit": "ns",
            "range": "± 16947.328547354624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102606.39361702128,
            "unit": "ns",
            "range": "± 20452.163296582254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98136.96907216495,
            "unit": "ns",
            "range": "± 17069.088485264336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7246.456989247312,
            "unit": "ns",
            "range": "± 1086.7286861311807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17078.747311827956,
            "unit": "ns",
            "range": "± 1606.338326320712"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1792294.6263157895,
            "unit": "ns",
            "range": "± 341322.314794889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3202565.5463917525,
            "unit": "ns",
            "range": "± 314595.57956502604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2157753.8541666665,
            "unit": "ns",
            "range": "± 273232.57707624446"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6294522.884210526,
            "unit": "ns",
            "range": "± 699457.5209333524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3371030.222222222,
            "unit": "ns",
            "range": "± 99195.62137430724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399973.1266666665,
            "unit": "ns",
            "range": "± 171630.87845193554"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4495381.14893617,
            "unit": "ns",
            "range": "± 257487.72023004887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031590.8958333335,
            "unit": "ns",
            "range": "± 401381.54594826675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7160787.536842105,
            "unit": "ns",
            "range": "± 552545.7483921978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990567.155729166,
            "unit": "ns",
            "range": "± 67590.15824981073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857378.7378627232,
            "unit": "ns",
            "range": "± 28884.324756127757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1221323.023317921,
            "unit": "ns",
            "range": "± 47754.1423892228"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3693133.443058894,
            "unit": "ns",
            "range": "± 144853.21515112577"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977124.763671875,
            "unit": "ns",
            "range": "± 38877.415079364866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924454.2921463816,
            "unit": "ns",
            "range": "± 31404.52481079356"
          }
        ]
      }
    ]
  }
}