window.BENCHMARK_DATA = {
  "lastUpdate": 1683021200277,
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
      },
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
          "id": "cb3efb349cce8b07135c0e002b61778997d5e018",
          "message": "test: add regression test for appending hotfix",
          "timestamp": "2023-05-02T18:39:46+09:00",
          "tree_id": "950e8fc19a458392ea3cefb3d852c7ab8f4df365",
          "url": "https://github.com/planetarium/libplanet/commit/cb3efb349cce8b07135c0e002b61778997d5e018"
        },
        "date": 1683021176887,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317001.1111111111,
            "unit": "ns",
            "range": "± 8452.081507881536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266062.6896551724,
            "unit": "ns",
            "range": "± 11341.246981482187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240405.29032258064,
            "unit": "ns",
            "range": "± 7344.719142320548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5589214.6,
            "unit": "ns",
            "range": "± 31531.31129029864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3934678.3846153845,
            "unit": "ns",
            "range": "± 32090.880627104594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17054.546391752578,
            "unit": "ns",
            "range": "± 1323.2252423892994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85583.3875,
            "unit": "ns",
            "range": "± 4489.402360760707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72936.57894736843,
            "unit": "ns",
            "range": "± 1613.0747491045881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 177089,
            "unit": "ns",
            "range": "± 15945.039825963007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5415.275510204082,
            "unit": "ns",
            "range": "± 905.2466518199227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16475.9375,
            "unit": "ns",
            "range": "± 1640.0411600258535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3220935.785714286,
            "unit": "ns",
            "range": "± 44759.75605071793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320125.45,
            "unit": "ns",
            "range": "± 70999.65533087208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4155845.8571428573,
            "unit": "ns",
            "range": "± 45523.12524565804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4163466.6774193547,
            "unit": "ns",
            "range": "± 178013.58331564994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7144561.217391305,
            "unit": "ns",
            "range": "± 178823.29315733007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5964435.882291666,
            "unit": "ns",
            "range": "± 25058.822109911667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836047.948467548,
            "unit": "ns",
            "range": "± 862.615741543346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336637.0853365385,
            "unit": "ns",
            "range": "± 983.836734323199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2542050.085379464,
            "unit": "ns",
            "range": "± 2504.592794712573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807959.4441266741,
            "unit": "ns",
            "range": "± 255.19087811933227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740085.5758231027,
            "unit": "ns",
            "range": "± 626.0793997521273"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44272.967741935485,
            "unit": "ns",
            "range": "± 2571.185344356774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7760602.6875,
            "unit": "ns",
            "range": "± 148723.08000384193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19211742.64285714,
            "unit": "ns",
            "range": "± 118152.17391834932"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49611004.86666667,
            "unit": "ns",
            "range": "± 300484.1898136755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98364260.46153846,
            "unit": "ns",
            "range": "± 470478.4749039385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198002290.46666667,
            "unit": "ns",
            "range": "± 1042236.0878486127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369091.1351351351,
            "unit": "ns",
            "range": "± 68372.17757653203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2604700.2258064514,
            "unit": "ns",
            "range": "± 79168.0067559742"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2173315.2873563217,
            "unit": "ns",
            "range": "± 115781.30170050333"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5411506.541666667,
            "unit": "ns",
            "range": "± 109302.75942496251"
          }
        ]
      }
    ]
  }
}