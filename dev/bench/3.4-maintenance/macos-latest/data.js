window.BENCHMARK_DATA = {
  "lastUpdate": 1695642506964,
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
          "id": "07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b",
          "message": "Merge pull request #3434 from greymistcube/release/3.4.0\n\n🚀 Release 3.4.0",
          "timestamp": "2023-09-25T17:53:38+09:00",
          "tree_id": "260dfc4ebefa249cd7442ff61da7dfb4918da96d",
          "url": "https://github.com/planetarium/libplanet/commit/07fbdfd07601ecaf5ff93e4a6c941e4a7a32be1b"
        },
        "date": 1695642444037,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7498836.692307692,
            "unit": "ns",
            "range": "± 108017.18983521759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18633845.884615384,
            "unit": "ns",
            "range": "± 272464.24440757313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45752970.28571428,
            "unit": "ns",
            "range": "± 704786.0817307977"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90822520.85714285,
            "unit": "ns",
            "range": "± 559340.0943060365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192280924.2,
            "unit": "ns",
            "range": "± 1846089.835876753"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54222.231578947365,
            "unit": "ns",
            "range": "± 7202.995716104946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 287127.8831168831,
            "unit": "ns",
            "range": "± 14652.238013870303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275346.62352941174,
            "unit": "ns",
            "range": "± 14713.81882059019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250228.07272727272,
            "unit": "ns",
            "range": "± 10050.450114951633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3888256.705882353,
            "unit": "ns",
            "range": "± 78927.22285337036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3520791.076923077,
            "unit": "ns",
            "range": "± 41812.75832099883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16041.25294117647,
            "unit": "ns",
            "range": "± 1522.9488540475736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79881.29787234042,
            "unit": "ns",
            "range": "± 7716.874422753979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69839.6,
            "unit": "ns",
            "range": "± 4840.0797625519735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77357.50515463918,
            "unit": "ns",
            "range": "± 11264.59088908295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4393.918604651163,
            "unit": "ns",
            "range": "± 442.530224029056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15642.133333333333,
            "unit": "ns",
            "range": "± 1731.724464940052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1428889.97,
            "unit": "ns",
            "range": "± 160196.16854479833"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2617059.178082192,
            "unit": "ns",
            "range": "± 129296.31601591474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158383.3736842107,
            "unit": "ns",
            "range": "± 149667.82890669408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10270295.657142857,
            "unit": "ns",
            "range": "± 332089.9094833261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3107104.672413793,
            "unit": "ns",
            "range": "± 91002.77270935562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3176610.0714285714,
            "unit": "ns",
            "range": "± 110115.85701413847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4059639.088235294,
            "unit": "ns",
            "range": "± 114643.74531198222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3972012.557471264,
            "unit": "ns",
            "range": "± 215518.12656708257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14917331.542553192,
            "unit": "ns",
            "range": "± 1515044.907193381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5282977.61328125,
            "unit": "ns",
            "range": "± 31100.033318199523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1581735.8591145833,
            "unit": "ns",
            "range": "± 10503.77743481213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 937385.7452473958,
            "unit": "ns",
            "range": "± 5879.151636489097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2434270.2547433036,
            "unit": "ns",
            "range": "± 13958.117400166413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 759424.69921875,
            "unit": "ns",
            "range": "± 4078.9545621395214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 675069.0080078125,
            "unit": "ns",
            "range": "± 3343.0515873714985"
          }
        ]
      }
    ]
  }
}