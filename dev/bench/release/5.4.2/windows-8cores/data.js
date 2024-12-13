window.BENCHMARK_DATA = {
  "lastUpdate": 1734064016584,
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
          "id": "3e7b2c11de7622c9cab18e0d2e35b2d9c4133414",
          "message": "release: 5.4.2",
          "timestamp": "2024-12-13T13:09:48+09:00",
          "tree_id": "81a18e9d75f2b96395fd766d8ef3fc5cc02ee6ef",
          "url": "https://github.com/planetarium/libplanet/commit/3e7b2c11de7622c9cab18e0d2e35b2d9c4133414"
        },
        "date": 1734063660501,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096032,
            "unit": "ns",
            "range": "± 124581.77013714748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1913208.3333333333,
            "unit": "ns",
            "range": "± 75493.85161194038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1643928.4210526317,
            "unit": "ns",
            "range": "± 134217.48202645945"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6766323.684210527,
            "unit": "ns",
            "range": "± 215343.24885935703"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35677.083333333336,
            "unit": "ns",
            "range": "± 5137.938951239755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10296407.142857144,
            "unit": "ns",
            "range": "± 149106.3931678199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25322280,
            "unit": "ns",
            "range": "± 218215.26462254126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63011542.85714286,
            "unit": "ns",
            "range": "± 648906.5829582817"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124823440,
            "unit": "ns",
            "range": "± 1370767.2678363123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249131306.66666666,
            "unit": "ns",
            "range": "± 2825220.396577601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3381016.8229166665,
            "unit": "ns",
            "range": "± 9267.91264222343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1068659.0745192308,
            "unit": "ns",
            "range": "± 756.6083731108101"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 767252.0298549107,
            "unit": "ns",
            "range": "± 1547.7317817655255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1982048.549107143,
            "unit": "ns",
            "range": "± 7722.238226055096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 640894.8177083334,
            "unit": "ns",
            "range": "± 1357.9775003540622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566768.7049278846,
            "unit": "ns",
            "range": "± 436.36189177225697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2341934.8484848486,
            "unit": "ns",
            "range": "± 73215.10312604618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2376368.1818181816,
            "unit": "ns",
            "range": "± 55918.319567056584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2905647.8260869565,
            "unit": "ns",
            "range": "± 72414.06110044713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2481222.4137931033,
            "unit": "ns",
            "range": "± 107743.46244359582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3093743.75,
            "unit": "ns",
            "range": "± 58514.26001411964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 113614.89361702128,
            "unit": "ns",
            "range": "± 11548.941742207597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 183373.77049180327,
            "unit": "ns",
            "range": "± 8238.12077356125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 184227.27272727274,
            "unit": "ns",
            "range": "± 11973.838984933183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2750256.6666666665,
            "unit": "ns",
            "range": "± 47065.7210211221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2603721.4285714286,
            "unit": "ns",
            "range": "± 29558.421384188885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15527.835051546392,
            "unit": "ns",
            "range": "± 1641.0579836928143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68779.59183673469,
            "unit": "ns",
            "range": "± 9651.045124577633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56133.67346938775,
            "unit": "ns",
            "range": "± 7903.528428761251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74628.28282828283,
            "unit": "ns",
            "range": "± 16172.545647965211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3684.6938775510203,
            "unit": "ns",
            "range": "± 840.8822123304046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15341.237113402061,
            "unit": "ns",
            "range": "± 3049.410891785753"
          }
        ]
      }
    ]
  }
}