window.BENCHMARK_DATA = {
  "lastUpdate": 1698983708331,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "committer": {
            "email": "ghdwlgud4545@gmail.com",
            "name": "sky1045",
            "username": "sky1045"
          },
          "distinct": true,
          "id": "0d95a809c7915f9fa05077be7fae2cea78d63196",
          "message": "no fingerprint check",
          "timestamp": "2023-11-03T12:43:51+09:00",
          "tree_id": "089f1c7afd2aa770e71acd3f82f294b0ce086dfc",
          "url": "https://github.com/planetarium/libplanet/commit/0d95a809c7915f9fa05077be7fae2cea78d63196"
        },
        "date": 1698983685151,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5663470.5,
            "unit": "ns",
            "range": "± 20765.96694988308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15008925.2,
            "unit": "ns",
            "range": "± 206774.83315992373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37464230.416666664,
            "unit": "ns",
            "range": "± 188829.097034357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75558652.46666667,
            "unit": "ns",
            "range": "± 932673.7058474008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152582052.85714287,
            "unit": "ns",
            "range": "± 1818457.5417122426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1059704.7419354839,
            "unit": "ns",
            "range": "± 83072.06854251721"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1999460.180851064,
            "unit": "ns",
            "range": "± 77917.91629911524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1649496.988372093,
            "unit": "ns",
            "range": "± 89123.16533961752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3997524.3604651163,
            "unit": "ns",
            "range": "± 144855.74646861636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2377342.1304347827,
            "unit": "ns",
            "range": "± 89854.43717593935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2463517.75,
            "unit": "ns",
            "range": "± 45675.85279804798"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3135693.3571428573,
            "unit": "ns",
            "range": "± 35349.8335402612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3220637.2421052633,
            "unit": "ns",
            "range": "± 253990.20025829595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5159136.425925926,
            "unit": "ns",
            "range": "± 208834.18539611864"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42303.33505154639,
            "unit": "ns",
            "range": "± 6330.107300104945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4052202.9226973685,
            "unit": "ns",
            "range": "± 80595.730338163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1314511.7893229167,
            "unit": "ns",
            "range": "± 2732.2261790147572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 904983.5288085938,
            "unit": "ns",
            "range": "± 1248.0635526366243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2003461.0856370192,
            "unit": "ns",
            "range": "± 24356.995465090928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624061.0029994419,
            "unit": "ns",
            "range": "± 1153.120472571775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 588300.7161959135,
            "unit": "ns",
            "range": "± 705.4879541245729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213288.41549295775,
            "unit": "ns",
            "range": "± 10464.609946654184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209445.18279569893,
            "unit": "ns",
            "range": "± 13129.960342953322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 179934.42307692306,
            "unit": "ns",
            "range": "± 4844.4948295819395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3340165.4,
            "unit": "ns",
            "range": "± 26536.906203033002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2971910.8333333335,
            "unit": "ns",
            "range": "± 52472.46810970311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19310.79591836735,
            "unit": "ns",
            "range": "± 4983.030425951919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67150.21212121213,
            "unit": "ns",
            "range": "± 8336.087188712147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78255.02,
            "unit": "ns",
            "range": "± 16572.809918829593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81227.66666666667,
            "unit": "ns",
            "range": "± 18013.222533484015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3023.211111111111,
            "unit": "ns",
            "range": "± 637.5049415000277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14579.697916666666,
            "unit": "ns",
            "range": "± 2554.064975144283"
          }
        ]
      }
    ]
  }
}