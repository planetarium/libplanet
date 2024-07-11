window.BENCHMARK_DATA = {
  "lastUpdate": 1720679452670,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "0aed441cf58de2985591b89fab2711052c49a4bf",
          "message": "add tracing example",
          "timestamp": "2024-07-11T12:35:53+09:00",
          "tree_id": "9bcc60c7c037fb69c211b1c487672d2bbc1a8b2d",
          "url": "https://github.com/planetarium/libplanet/commit/0aed441cf58de2985591b89fab2711052c49a4bf"
        },
        "date": 1720669526255,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5862030.933333334,
            "unit": "ns",
            "range": "± 89361.17633071715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14339951.76923077,
            "unit": "ns",
            "range": "± 37254.24462875303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36096925.84615385,
            "unit": "ns",
            "range": "± 180468.5871353822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 72827892.57142857,
            "unit": "ns",
            "range": "± 171912.8810221638"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145714677.93333334,
            "unit": "ns",
            "range": "± 491837.638571259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15483.242105263158,
            "unit": "ns",
            "range": "± 1227.2647386093265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109596.1686746988,
            "unit": "ns",
            "range": "± 5836.855177357562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104353.45098039215,
            "unit": "ns",
            "range": "± 3865.492772280013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 89252.5,
            "unit": "ns",
            "range": "± 2311.18358927484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3096522.9210526315,
            "unit": "ns",
            "range": "± 106031.24091731916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776570.1756756757,
            "unit": "ns",
            "range": "± 137977.49271533312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 4890.5888888888885,
            "unit": "ns",
            "range": "± 555.847907708907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26828.659340659342,
            "unit": "ns",
            "range": "± 2026.1500175882566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23102.711340206184,
            "unit": "ns",
            "range": "± 1755.9077540712556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29475.698924731183,
            "unit": "ns",
            "range": "± 5681.02654300096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1161.534090909091,
            "unit": "ns",
            "range": "± 129.67997291862594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4770.05376344086,
            "unit": "ns",
            "range": "± 713.2026872951549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 671642.9882352941,
            "unit": "ns",
            "range": "± 33571.21067348023"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1279507.649122807,
            "unit": "ns",
            "range": "± 52367.12977639259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1130529.68,
            "unit": "ns",
            "range": "± 87538.29038502483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9905410.41,
            "unit": "ns",
            "range": "± 1549023.8504178482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2219745.3518518517,
            "unit": "ns",
            "range": "± 91507.35721950664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2323488.695652174,
            "unit": "ns",
            "range": "± 111899.53246804822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2643992.53125,
            "unit": "ns",
            "range": "± 79036.04790954746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2518678.5263157897,
            "unit": "ns",
            "range": "± 126903.75882759594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3217679.49,
            "unit": "ns",
            "range": "± 384175.32632315805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3029702.5362413195,
            "unit": "ns",
            "range": "± 63060.68496739166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 928418.8800130208,
            "unit": "ns",
            "range": "± 5637.931042704299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 612879.1073567708,
            "unit": "ns",
            "range": "± 4497.7184126333905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1627922.6665364583,
            "unit": "ns",
            "range": "± 17226.336327475707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 455404.2461983817,
            "unit": "ns",
            "range": "± 628.4948237155658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 431312.8458077567,
            "unit": "ns",
            "range": "± 399.43578915501166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "committer": {
            "email": "kidonseo@gmail.com",
            "name": "area363",
            "username": "area363"
          },
          "distinct": true,
          "id": "166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9",
          "message": "Revert \"Added cached migration\"\n\nThis reverts commit 0008aa83d582df1c830f8aa758a253dd8db443b0.",
          "timestamp": "2024-07-11T14:32:59+09:00",
          "tree_id": "9b1a8fcb7d9de0e39e543216925491d449429c82",
          "url": "https://github.com/planetarium/libplanet/commit/166b45e9cb25bd7b903e8a689bdae2c3d9d0b9f9"
        },
        "date": 1720679440068,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5770320.846153846,
            "unit": "ns",
            "range": "± 25356.81259164275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14331984.153846154,
            "unit": "ns",
            "range": "± 45585.60770470974"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36112780.93333333,
            "unit": "ns",
            "range": "± 130450.48964999637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73736506.35714285,
            "unit": "ns",
            "range": "± 208847.04227721196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 145503924.8,
            "unit": "ns",
            "range": "± 369773.68691600696"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 15548.578947368422,
            "unit": "ns",
            "range": "± 1196.1503728401744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109685.05172413793,
            "unit": "ns",
            "range": "± 4769.5471756169445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104313.73134328358,
            "unit": "ns",
            "range": "± 4935.559246756657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91936.30434782608,
            "unit": "ns",
            "range": "± 2267.174461642882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3089343.3666666667,
            "unit": "ns",
            "range": "± 137263.7133791846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746119.6404494382,
            "unit": "ns",
            "range": "± 151437.99245747773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5437.836956521739,
            "unit": "ns",
            "range": "± 509.02104443151654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27790.902173913044,
            "unit": "ns",
            "range": "± 2647.4176099198826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23381.712765957447,
            "unit": "ns",
            "range": "± 1711.3365704821736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29827.0206185567,
            "unit": "ns",
            "range": "± 5889.453057124274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1067.3804347826087,
            "unit": "ns",
            "range": "± 213.90826021642982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4886.38202247191,
            "unit": "ns",
            "range": "± 419.0294116824665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 718981.8469387755,
            "unit": "ns",
            "range": "± 79234.28076493884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1311750.2701149425,
            "unit": "ns",
            "range": "± 85641.95535099538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1102249.612244898,
            "unit": "ns",
            "range": "± 82038.07832108294"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9797219.61,
            "unit": "ns",
            "range": "± 1282863.3226321444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2220522.3636363638,
            "unit": "ns",
            "range": "± 82444.49761410059"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2291445.418604651,
            "unit": "ns",
            "range": "± 84340.96694659875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2610835.4166666665,
            "unit": "ns",
            "range": "± 85191.74767055955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2450563.660714286,
            "unit": "ns",
            "range": "± 104871.50791018273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3101547.1505376343,
            "unit": "ns",
            "range": "± 175145.08277977322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3033814.57265625,
            "unit": "ns",
            "range": "± 67104.51650605131"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 937428.5233072917,
            "unit": "ns",
            "range": "± 6543.73981569051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617287.8774088542,
            "unit": "ns",
            "range": "± 4455.380978266429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1617017.01953125,
            "unit": "ns",
            "range": "± 5791.577626163606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460680.9652018229,
            "unit": "ns",
            "range": "± 1085.963363697904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 422474.7851911272,
            "unit": "ns",
            "range": "± 877.9659668758624"
          }
        ]
      }
    ]
  }
}