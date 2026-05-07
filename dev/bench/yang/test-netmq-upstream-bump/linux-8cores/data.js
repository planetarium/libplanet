window.BENCHMARK_DATA = {
  "lastUpdate": 1778136395858,
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
        "date": 1778136368011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10964374.802325582,
            "unit": "ns",
            "range": "± 402980.6097181195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24530621.645833332,
            "unit": "ns",
            "range": "± 894723.8922761636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60442358.28571428,
            "unit": "ns",
            "range": "± 189237.45726688247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114283475.36666666,
            "unit": "ns",
            "range": "± 1617390.2728712107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230874579.86666667,
            "unit": "ns",
            "range": "± 1252042.0697599163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3856879.900520833,
            "unit": "ns",
            "range": "± 29572.25785234927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918474.6606119792,
            "unit": "ns",
            "range": "± 8326.462146296757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 796045.5349469866,
            "unit": "ns",
            "range": "± 4717.76754808048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1749062.0997395834,
            "unit": "ns",
            "range": "± 13968.294657690503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 476377.8954031808,
            "unit": "ns",
            "range": "± 2066.2522914476676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 440415.477608817,
            "unit": "ns",
            "range": "± 4283.175730600794"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 25176.253246753247,
            "unit": "ns",
            "range": "± 1333.1769452173467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2468635.81,
            "unit": "ns",
            "range": "± 459407.9490125229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3314735.1875,
            "unit": "ns",
            "range": "± 61729.678813051505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2649912.4,
            "unit": "ns",
            "range": "± 47500.12309878786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3719815.1363636362,
            "unit": "ns",
            "range": "± 91205.06200827287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2870870.2790697673,
            "unit": "ns",
            "range": "± 106369.53424586463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2548013.38,
            "unit": "ns",
            "range": "± 1242512.8338235372"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3165669.31,
            "unit": "ns",
            "range": "± 2050777.8960392973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 5573556.333333333,
            "unit": "ns",
            "range": "± 82631.9098871983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7221013.705882353,
            "unit": "ns",
            "range": "± 199887.48275070093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111585.92941176471,
            "unit": "ns",
            "range": "± 21607.42761555907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178814.43373493975,
            "unit": "ns",
            "range": "± 22036.10732920436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 150144.02631578947,
            "unit": "ns",
            "range": "± 11302.169563747677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2640045.8666666667,
            "unit": "ns",
            "range": "± 38336.48556041372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2563330.86,
            "unit": "ns",
            "range": "± 67759.65360736432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14187.170588235294,
            "unit": "ns",
            "range": "± 3624.388054713301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71738.81914893616,
            "unit": "ns",
            "range": "± 20273.580066403585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46271.597701149425,
            "unit": "ns",
            "range": "± 2743.904769263203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80902.75257731958,
            "unit": "ns",
            "range": "± 30617.09959729439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4017.0204081632655,
            "unit": "ns",
            "range": "± 1407.6936114449497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14124.021739130434,
            "unit": "ns",
            "range": "± 4145.190871619735"
          }
        ]
      }
    ]
  }
}