window.BENCHMARK_DATA = {
  "lastUpdate": 1708406582008,
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
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "94e15d88dbeabdb0d3254ec0f3b491e4baf48109",
          "message": "Disabled fee processing",
          "timestamp": "2024-02-20T14:07:19+09:00",
          "tree_id": "c6e224f14fddc85f3600523f2efe6f98c6385f1a",
          "url": "https://github.com/planetarium/libplanet/commit/94e15d88dbeabdb0d3254ec0f3b491e4baf48109"
        },
        "date": 1708406503809,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8577343.666666666,
            "unit": "ns",
            "range": "± 155366.93401735256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22390939.9375,
            "unit": "ns",
            "range": "± 437852.0751887893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51188129.114583336,
            "unit": "ns",
            "range": "± 3538123.2133549633"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103461613.625,
            "unit": "ns",
            "range": "± 4424024.016902697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212440313.17647058,
            "unit": "ns",
            "range": "± 4358238.40475434"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47915.282608695656,
            "unit": "ns",
            "range": "± 10504.150738799899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 257546.2634408602,
            "unit": "ns",
            "range": "± 45304.180719212694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278045.2888888889,
            "unit": "ns",
            "range": "± 51571.088638003996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242150.02,
            "unit": "ns",
            "range": "± 39122.586266650556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4159483.5,
            "unit": "ns",
            "range": "± 239909.01236053745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3858978.2959183673,
            "unit": "ns",
            "range": "± 151771.13479251412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16466.197802197803,
            "unit": "ns",
            "range": "± 4071.80421440417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88054.28421052631,
            "unit": "ns",
            "range": "± 23656.0017564088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79144.40909090909,
            "unit": "ns",
            "range": "± 21518.10828263209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94561.875,
            "unit": "ns",
            "range": "± 24051.10395507646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5429.693877551021,
            "unit": "ns",
            "range": "± 1382.0480966324683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16904.9010989011,
            "unit": "ns",
            "range": "± 4494.425230969647"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1147340.5515463918,
            "unit": "ns",
            "range": "± 119038.40941550925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436242.424731183,
            "unit": "ns",
            "range": "± 168742.35728272624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1890875.414893617,
            "unit": "ns",
            "range": "± 178328.29589583073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13319021.591836736,
            "unit": "ns",
            "range": "± 5090924.813886956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2916678,
            "unit": "ns",
            "range": "± 92063.30567570067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3029929.6666666665,
            "unit": "ns",
            "range": "± 120686.03902484608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3666405.96,
            "unit": "ns",
            "range": "± 97854.25682466076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3914210.1938775512,
            "unit": "ns",
            "range": "± 283109.2313881132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17663360.57142857,
            "unit": "ns",
            "range": "± 2595139.853662056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4674269.083984375,
            "unit": "ns",
            "range": "± 80225.71750594406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1410227.6606158088,
            "unit": "ns",
            "range": "± 25649.25833672757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 893839.3917518029,
            "unit": "ns",
            "range": "± 8837.100730018128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2121139.2414279515,
            "unit": "ns",
            "range": "± 66510.38087683186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629292.5935407366,
            "unit": "ns",
            "range": "± 8308.072032324473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557892.8030598959,
            "unit": "ns",
            "range": "± 4941.6423008737775"
          }
        ]
      }
    ]
  }
}