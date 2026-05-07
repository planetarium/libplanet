window.BENCHMARK_DATA = {
  "lastUpdate": 1778136451310,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "committer": {
            "email": "qooraven@gmail.com",
            "name": "Yang Chun Ung",
            "username": "ipdae"
          },
          "distinct": true,
          "id": "fb75f7f0b52a003756f010797d61bd03f4671898",
          "message": "test: bump NetMQ from Planetarium fork to upstream 4.0.4.1\n\nThe fork (Planetarium.NetMQ 4.0.0.261-planetarium) hasn't received\nupstream changes since 2021-04 — 124 commits behind zeromq/netmq master.\n\nProduction observation on Heimdall mainnet (2026-05): heimdall validator\ncrashes with Exit 139 due to NullReferenceException at\nNetMQ.Core.Transports.StreamEngine.MechanismReady() during timeout\ncleanup of a peer connection. Pattern repeats every ~2h, accumulating\nNetMQ broadcast-timeout state on remote-headless and surfacing as\nuser-visible tx staging timeouts.\n\nThe fork's distinctive contributions (ReceiveMultipartMessageAsync +\ncancellation support, AsyncReceiveExtensions improvements) have already\nbeen merged into upstream 4.0.x — verified via API signature comparison.\n\nThis branch swaps the package reference to upstream NetMQ 4.0.4.1 so\nCI (check-build + CircleCI test suite) can validate compilation, API\ncompatibility, and unit-test pass against the upstream library.\n\nThis is intentionally a minimal change — no Libplanet code modified —\nto isolate the question of whether Libplanet.Net builds + passes its\nNetMQ-related tests against the upstream package.\n\nNot meant for merge until benchmarks-pr / NetMQTransportTest /\nTransportTest results are reviewed.",
          "timestamp": "2026-05-07T15:34:28+09:00",
          "tree_id": "b920d891f8f09b6fec01f99b1a1190fe0428ffd7",
          "url": "https://github.com/planetarium/libplanet/commit/fb75f7f0b52a003756f010797d61bd03f4671898"
        },
        "date": 1778136353269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2210181,
            "unit": "ns",
            "range": "± 971566.6813461751"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1798451.111111111,
            "unit": "ns",
            "range": "± 244701.5982574752"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3181201,
            "unit": "ns",
            "range": "± 1554092.0048356017"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6058235.52631579,
            "unit": "ns",
            "range": "± 338740.070537454"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 23560,
            "unit": "ns",
            "range": "± 446.8940430507949"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9589771.42857143,
            "unit": "ns",
            "range": "± 75892.57010934732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19660980.588235293,
            "unit": "ns",
            "range": "± 940899.1311536016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47770120,
            "unit": "ns",
            "range": "± 190679.04297161612"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97942606.66666667,
            "unit": "ns",
            "range": "± 269256.15118763945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189652900,
            "unit": "ns",
            "range": "± 525365.7630641722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3972636.0770089286,
            "unit": "ns",
            "range": "± 38738.473741316375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 960348.9606584822,
            "unit": "ns",
            "range": "± 8257.27412950637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 726096.7057291666,
            "unit": "ns",
            "range": "± 4976.443537851031"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1727210.2994791667,
            "unit": "ns",
            "range": "± 17120.907590423205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 488727.16796875,
            "unit": "ns",
            "range": "± 1752.130522034453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 410887.4576822917,
            "unit": "ns",
            "range": "± 1488.5154666112037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2207674.736842105,
            "unit": "ns",
            "range": "± 448755.82138544304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2565259,
            "unit": "ns",
            "range": "± 781925.5690759495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2230471.052631579,
            "unit": "ns",
            "range": "± 76671.51381898268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3173692.8571428573,
            "unit": "ns",
            "range": "± 45281.061829859515"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2572703.2786885244,
            "unit": "ns",
            "range": "± 107370.63839370165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97092.22222222222,
            "unit": "ns",
            "range": "± 31510.979815594856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 142661.25,
            "unit": "ns",
            "range": "± 22739.40701357698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 113436,
            "unit": "ns",
            "range": "± 1407.3852824771664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2239700,
            "unit": "ns",
            "range": "± 66662.08603310966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2182869.230769231,
            "unit": "ns",
            "range": "± 21127.36711059002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11637.64705882353,
            "unit": "ns",
            "range": "± 3074.432834670805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57013.82978723404,
            "unit": "ns",
            "range": "± 17698.342070847695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39921.95121951219,
            "unit": "ns",
            "range": "± 1227.092538303846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60048.97959183674,
            "unit": "ns",
            "range": "± 20822.951477309445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2979.4736842105262,
            "unit": "ns",
            "range": "± 634.9524499218932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10680.722891566265,
            "unit": "ns",
            "range": "± 2425.8495032706305"
          }
        ]
      }
    ]
  }
}