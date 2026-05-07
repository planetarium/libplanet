window.BENCHMARK_DATA = {
  "lastUpdate": 1778137488463,
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
          "id": "a638a5b61598d17095327f7efc8d4f782cf11831",
          "message": "prepare: 5.5.4\n\nBump VersionPrefix to 5.5.4 and open the Version 5.5.4 changelog\nsection with the NetMQ dependency bump entry (#4050).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-07T15:56:20+09:00",
          "tree_id": "62a2f0aba2361f404c4dda050b83ae021e0e7021",
          "url": "https://github.com/planetarium/libplanet/commit/a638a5b61598d17095327f7efc8d4f782cf11831"
        },
        "date": 1778137462710,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11647341.57142857,
            "unit": "ns",
            "range": "± 184105.92624751668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28589299.4,
            "unit": "ns",
            "range": "± 421108.2615267887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70111886.16666667,
            "unit": "ns",
            "range": "± 428267.4475364441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136750893.26666668,
            "unit": "ns",
            "range": "± 809160.7624619885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282292204.76666665,
            "unit": "ns",
            "range": "± 1449739.1598622869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3883907.7338541667,
            "unit": "ns",
            "range": "± 17915.13245171957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1236147.2303185095,
            "unit": "ns",
            "range": "± 1834.7968835851386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776311.2102213542,
            "unit": "ns",
            "range": "± 2470.890083320723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1992015.2509014423,
            "unit": "ns",
            "range": "± 4563.775517102326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 655609.4317157452,
            "unit": "ns",
            "range": "± 714.8377569381622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596085.0981119792,
            "unit": "ns",
            "range": "± 2250.4211640871126"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31231,
            "unit": "ns",
            "range": "± 377.48863117538605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2441236.277777778,
            "unit": "ns",
            "range": "± 49501.679517027864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2503776.625,
            "unit": "ns",
            "range": "± 71611.63304882353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3031721.3684210526,
            "unit": "ns",
            "range": "± 67356.71693900446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2623212.1333333333,
            "unit": "ns",
            "range": "± 45331.240408585254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3223964.1666666665,
            "unit": "ns",
            "range": "± 50102.75667874497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1103709.9516129033,
            "unit": "ns",
            "range": "± 99558.7122586375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1967363.5952380951,
            "unit": "ns",
            "range": "± 71620.52000889387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1653202.782051282,
            "unit": "ns",
            "range": "± 85055.16351163427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8015249.914285715,
            "unit": "ns",
            "range": "± 258245.04697982126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 117259.58045977012,
            "unit": "ns",
            "range": "± 9126.329860683814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 199024.51063829788,
            "unit": "ns",
            "range": "± 12559.024316381248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167608.13333333333,
            "unit": "ns",
            "range": "± 2947.442495904995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2918886.8529411764,
            "unit": "ns",
            "range": "± 57992.22668701081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2821698.9411764704,
            "unit": "ns",
            "range": "± 56898.09367025246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12854.645833333334,
            "unit": "ns",
            "range": "± 1501.4259536514764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69915.7311827957,
            "unit": "ns",
            "range": "± 9094.49521884791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51559.44736842105,
            "unit": "ns",
            "range": "± 1111.82944703684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58013.536082474224,
            "unit": "ns",
            "range": "± 9424.663247810078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2490.0510204081634,
            "unit": "ns",
            "range": "± 424.95853945612157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14313.654639175258,
            "unit": "ns",
            "range": "± 2176.604199302428"
          }
        ]
      }
    ]
  }
}