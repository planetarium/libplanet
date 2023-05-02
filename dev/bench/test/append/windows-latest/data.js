window.BENCHMARK_DATA = {
  "lastUpdate": 1683021481461,
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
        "date": 1683020890704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1756647.8260869565,
            "unit": "ns",
            "range": "± 181923.2029001906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3238992.405063291,
            "unit": "ns",
            "range": "± 167913.705532574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2763542.6315789474,
            "unit": "ns",
            "range": "± 299074.88894998847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7246359.793814433,
            "unit": "ns",
            "range": "± 579307.5379026155"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60273.71134020619,
            "unit": "ns",
            "range": "± 10545.296870286502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8454127.956989247,
            "unit": "ns",
            "range": "± 552399.0805657728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22796891.489361703,
            "unit": "ns",
            "range": "± 1480064.958590406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57760847.54098361,
            "unit": "ns",
            "range": "± 2604372.8904547286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116466016.66666667,
            "unit": "ns",
            "range": "± 6005706.123052631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244830950,
            "unit": "ns",
            "range": "± 11536425.484712686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6054711.997767857,
            "unit": "ns",
            "range": "± 103021.67962789086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030606.1889648438,
            "unit": "ns",
            "range": "± 55920.31382398505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420606.6276041667,
            "unit": "ns",
            "range": "± 17400.882881213347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3336408.359375,
            "unit": "ns",
            "range": "± 111792.57550632456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013386.181640625,
            "unit": "ns",
            "range": "± 6749.860778361836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969054.90234375,
            "unit": "ns",
            "range": "± 10895.790646032221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3675603.409090909,
            "unit": "ns",
            "range": "± 231081.4840853656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3983653.2608695654,
            "unit": "ns",
            "range": "± 273964.8635733538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5057390.860215054,
            "unit": "ns",
            "range": "± 415884.4290332297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4919485.869565218,
            "unit": "ns",
            "range": "± 435589.81980392744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8970719.791666666,
            "unit": "ns",
            "range": "± 565003.5196201118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369078.8732394366,
            "unit": "ns",
            "range": "± 17490.82139289027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297870.78651685396,
            "unit": "ns",
            "range": "± 16392.953047014875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260971.11111111112,
            "unit": "ns",
            "range": "± 18573.747599102237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6578093.333333333,
            "unit": "ns",
            "range": "± 438883.76050607645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4665717.021276596,
            "unit": "ns",
            "range": "± 270090.4474702645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22907.291666666668,
            "unit": "ns",
            "range": "± 5787.049876399011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99747.87234042553,
            "unit": "ns",
            "range": "± 10902.431204877019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94876.5306122449,
            "unit": "ns",
            "range": "± 15873.844148329192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 216296.8085106383,
            "unit": "ns",
            "range": "± 28859.62112780341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12324,
            "unit": "ns",
            "range": "± 5859.5190618653705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24306,
            "unit": "ns",
            "range": "± 6552.8591955240145"
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
          "id": "3f9fe7553f58fbbb5679d171b0e64117886ac7c7",
          "message": "test: add regression test for appending hotfix",
          "timestamp": "2023-05-02T18:42:35+09:00",
          "tree_id": "80e52a1d741b1034963b30010e8348315e3c6ef1",
          "url": "https://github.com/planetarium/libplanet/commit/3f9fe7553f58fbbb5679d171b0e64117886ac7c7"
        },
        "date": 1683021428354,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1520500,
            "unit": "ns",
            "range": "± 29519.040465435188"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2478000,
            "unit": "ns",
            "range": "± 89347.3408505993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2206258.163265306,
            "unit": "ns",
            "range": "± 159927.62275574214"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5171154.761904762,
            "unit": "ns",
            "range": "± 179701.81799693996"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43755.208333333336,
            "unit": "ns",
            "range": "± 2659.357650643307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6998563.333333333,
            "unit": "ns",
            "range": "± 65405.05514174908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17385010,
            "unit": "ns",
            "range": "± 134033.26239621054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45114326.666666664,
            "unit": "ns",
            "range": "± 375330.2973318809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90638096.66666667,
            "unit": "ns",
            "range": "± 911168.2601918003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181436500,
            "unit": "ns",
            "range": "± 1165011.4254497986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4890416.127232143,
            "unit": "ns",
            "range": "± 15629.582409800885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519892.5555889423,
            "unit": "ns",
            "range": "± 1204.779222184692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137244.8521205357,
            "unit": "ns",
            "range": "± 1497.2958033113093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595950.1953125,
            "unit": "ns",
            "range": "± 9374.939242502154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815200.9049479166,
            "unit": "ns",
            "range": "± 3405.4516538857365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734571.4564732143,
            "unit": "ns",
            "range": "± 912.6565784245693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2952988,
            "unit": "ns",
            "range": "± 76507.52860557799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3243186.6666666665,
            "unit": "ns",
            "range": "± 52477.72135006662"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4029246.6666666665,
            "unit": "ns",
            "range": "± 73305.7380980182"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4042560.7843137253,
            "unit": "ns",
            "range": "± 161920.7782570617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6811976.315789473,
            "unit": "ns",
            "range": "± 221291.7353327961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298435.29411764705,
            "unit": "ns",
            "range": "± 8973.99888408058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249947.61904761905,
            "unit": "ns",
            "range": "± 8243.526302506478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229025.88235294117,
            "unit": "ns",
            "range": "± 12304.975309481399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5330693.333333333,
            "unit": "ns",
            "range": "± 64487.44580665811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3599093.3333333335,
            "unit": "ns",
            "range": "± 40687.28244035171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18346.464646464647,
            "unit": "ns",
            "range": "± 2299.7920549880923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89717.3469387755,
            "unit": "ns",
            "range": "± 8895.429447398836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71510.41666666667,
            "unit": "ns",
            "range": "± 6353.58960566332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162204.0404040404,
            "unit": "ns",
            "range": "± 20160.69584557891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5479.591836734694,
            "unit": "ns",
            "range": "± 894.7682051590803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17646.808510638297,
            "unit": "ns",
            "range": "± 2171.848334655069"
          }
        ]
      }
    ]
  }
}