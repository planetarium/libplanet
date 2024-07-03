window.BENCHMARK_DATA = {
  "lastUpdate": 1720001592781,
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
          "id": "fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8",
          "message": "feat: remove feecollector",
          "timestamp": "2024-07-03T18:42:32+09:00",
          "tree_id": "30e6bcd4736388bfd88c89a2a5761353d1af500c",
          "url": "https://github.com/planetarium/libplanet/commit/fc6753889dd22b752b6c4d96ab7e3fd1d1f88ce8"
        },
        "date": 1720000345519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10844264.57142857,
            "unit": "ns",
            "range": "± 163483.7385767556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26564756.35714286,
            "unit": "ns",
            "range": "± 231491.50954412232"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67931017.57142857,
            "unit": "ns",
            "range": "± 117743.89658375196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136438510.15384614,
            "unit": "ns",
            "range": "± 124203.91424377236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273615211.84615386,
            "unit": "ns",
            "range": "± 430919.90114556986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15625.0625,
            "unit": "ns",
            "range": "± 1122.878048517338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110329.83018867925,
            "unit": "ns",
            "range": "± 3765.170604653664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105581.82142857143,
            "unit": "ns",
            "range": "± 4537.950563083186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91597.11111111111,
            "unit": "ns",
            "range": "± 3026.829196915741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3104275.75,
            "unit": "ns",
            "range": "± 138491.34133609955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2703535.47,
            "unit": "ns",
            "range": "± 180509.2751974599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4991.967391304348,
            "unit": "ns",
            "range": "± 555.9621587859297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27147.23404255319,
            "unit": "ns",
            "range": "± 1844.9373983349353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22830.36170212766,
            "unit": "ns",
            "range": "± 1355.1565227301776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31190.39175257732,
            "unit": "ns",
            "range": "± 5882.954606949748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1117.3777777777777,
            "unit": "ns",
            "range": "± 175.51878658549475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4841.611111111111,
            "unit": "ns",
            "range": "± 318.22480550932573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 686868.7315789474,
            "unit": "ns",
            "range": "± 41025.28822138765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1261270.3703703703,
            "unit": "ns",
            "range": "± 32414.859853454374"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1056951.177419355,
            "unit": "ns",
            "range": "± 47212.78302432968"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9373473.59,
            "unit": "ns",
            "range": "± 1206865.900305323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2164769.785714286,
            "unit": "ns",
            "range": "± 58390.24327323818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2277073.88,
            "unit": "ns",
            "range": "± 90289.32483482288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2562322.1923076925,
            "unit": "ns",
            "range": "± 21467.348246366368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2296958.6,
            "unit": "ns",
            "range": "± 50750.04473982991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3148441.7282608696,
            "unit": "ns",
            "range": "± 265808.9528588425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3023202.9483816964,
            "unit": "ns",
            "range": "± 40405.959876431654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 913852.0013521635,
            "unit": "ns",
            "range": "± 2645.1402014864207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 608432.9120442708,
            "unit": "ns",
            "range": "± 3112.3552100819256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1603850.8411458333,
            "unit": "ns",
            "range": "± 26135.821490203238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 459535.5752929688,
            "unit": "ns",
            "range": "± 641.5026029143372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 414790.19231770834,
            "unit": "ns",
            "range": "± 1822.6650335794052"
          }
        ]
      },
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
          "id": "821f6ea9be9ac01f81a122d24b776fa7e7f8c398",
          "message": "test: remove unused test",
          "timestamp": "2024-07-03T18:54:38+09:00",
          "tree_id": "07d0f8f57eaa6f486b6b23cd83a7e4cc91907561",
          "url": "https://github.com/planetarium/libplanet/commit/821f6ea9be9ac01f81a122d24b776fa7e7f8c398"
        },
        "date": 1720001548212,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11075683.666666666,
            "unit": "ns",
            "range": "± 203741.8860058925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26646208.64285714,
            "unit": "ns",
            "range": "± 166548.94720245834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67571249.35714285,
            "unit": "ns",
            "range": "± 142563.21255801804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136289739.4,
            "unit": "ns",
            "range": "± 237282.76788579245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274163436.53333336,
            "unit": "ns",
            "range": "± 362062.1887424603"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 16166.905263157894,
            "unit": "ns",
            "range": "± 1391.6260814255818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111466.4074074074,
            "unit": "ns",
            "range": "± 4524.1827095485505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105129.62,
            "unit": "ns",
            "range": "± 4230.026303242387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 90801.95348837209,
            "unit": "ns",
            "range": "± 2935.9101205385014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3128371.294117647,
            "unit": "ns",
            "range": "± 98700.58095705092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2740767.232323232,
            "unit": "ns",
            "range": "± 164623.8248112535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5052.836956521739,
            "unit": "ns",
            "range": "± 604.123127635817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26721.172413793105,
            "unit": "ns",
            "range": "± 2080.8352985508654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22335.401408450703,
            "unit": "ns",
            "range": "± 1088.652747402292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29466.340425531915,
            "unit": "ns",
            "range": "± 5139.524285657608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1126.6421052631579,
            "unit": "ns",
            "range": "± 220.87909062736514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4774.61797752809,
            "unit": "ns",
            "range": "± 449.8042126004778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689472.6304347826,
            "unit": "ns",
            "range": "± 45290.000298617066"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1273476.3170731708,
            "unit": "ns",
            "range": "± 42781.87393653942"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1090577.152173913,
            "unit": "ns",
            "range": "± 61020.747116697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11151796.76,
            "unit": "ns",
            "range": "± 2242910.5118464394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2198558.1333333333,
            "unit": "ns",
            "range": "± 35116.707112278105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2282613.4285714286,
            "unit": "ns",
            "range": "± 82987.2396030486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2572015.6923076925,
            "unit": "ns",
            "range": "± 27219.27189322734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2278392.8421052634,
            "unit": "ns",
            "range": "± 75452.95912329007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3155390.88,
            "unit": "ns",
            "range": "± 301997.790288032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3038282.8015625,
            "unit": "ns",
            "range": "± 54179.88532266308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 932269.5467447917,
            "unit": "ns",
            "range": "± 2473.868839100527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 613478.2391276042,
            "unit": "ns",
            "range": "± 5182.640301737522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1619327.085186298,
            "unit": "ns",
            "range": "± 5645.334712296104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 456588.6960611979,
            "unit": "ns",
            "range": "± 981.4467943762875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427511.6650390625,
            "unit": "ns",
            "range": "± 948.3189880728326"
          }
        ]
      }
    ]
  }
}