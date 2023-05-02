window.BENCHMARK_DATA = {
  "lastUpdate": 1683021034798,
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "bce0baa3fa24e92c1b95c8ee8ba6e74b4488576c",
          "message": "test: add regression test for appending hotfix",
          "timestamp": "2023-05-02T18:28:50+09:00",
          "tree_id": "f400e95b2070774b59158a345737e976b2b1d308",
          "url": "https://github.com/planetarium/libplanet/commit/bce0baa3fa24e92c1b95c8ee8ba6e74b4488576c"
        },
        "date": 1683021008269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 466474.05319148937,
            "unit": "ns",
            "range": "± 85655.60757661883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375963.1473684211,
            "unit": "ns",
            "range": "± 54740.71752224657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 343152.4731182796,
            "unit": "ns",
            "range": "± 55445.09909137135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7195541.595744681,
            "unit": "ns",
            "range": "± 752911.0043770729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5351269.260416667,
            "unit": "ns",
            "range": "± 502847.6666854013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27686.835051546394,
            "unit": "ns",
            "range": "± 9328.00119898909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122594.67021276595,
            "unit": "ns",
            "range": "± 27317.693240587596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101893.38144329897,
            "unit": "ns",
            "range": "± 24538.470570227117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 263791.0208333333,
            "unit": "ns",
            "range": "± 52028.401990689905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5644.908045977011,
            "unit": "ns",
            "range": "± 846.266432730891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24779.479166666668,
            "unit": "ns",
            "range": "± 9057.945743616388"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4380758.063157895,
            "unit": "ns",
            "range": "± 497417.4442813176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4636424.086021505,
            "unit": "ns",
            "range": "± 448334.59904463566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5475610.097826087,
            "unit": "ns",
            "range": "± 477410.1854509715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5831344.894736842,
            "unit": "ns",
            "range": "± 432479.08324460645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10415157.795918368,
            "unit": "ns",
            "range": "± 970967.8136593149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7502254.690625,
            "unit": "ns",
            "range": "± 78452.56656417956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2561373.60859375,
            "unit": "ns",
            "range": "± 46349.97714633809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1763615.994075521,
            "unit": "ns",
            "range": "± 24609.144852392823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3368636.06171875,
            "unit": "ns",
            "range": "± 53114.74932797326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1147549.8361467633,
            "unit": "ns",
            "range": "± 32343.303859262778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1107215.3071185173,
            "unit": "ns",
            "range": "± 210287.18718294866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67922.91489361702,
            "unit": "ns",
            "range": "± 15468.523679067868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11272794.142857144,
            "unit": "ns",
            "range": "± 894123.8683499347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28650959.303030305,
            "unit": "ns",
            "range": "± 1900405.8620787603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76151334.31746031,
            "unit": "ns",
            "range": "± 3465329.417935918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 149152376.23076922,
            "unit": "ns",
            "range": "± 3830867.572464037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 297538108.15384614,
            "unit": "ns",
            "range": "± 7828859.751382193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1922891.8265306123,
            "unit": "ns",
            "range": "± 216389.47332020183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3922694.5483870967,
            "unit": "ns",
            "range": "± 405528.8442660671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2978898.783505155,
            "unit": "ns",
            "range": "± 268199.01389100763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8204504.838709678,
            "unit": "ns",
            "range": "± 624067.4493744088"
          }
        ]
      }
    ]
  }
}