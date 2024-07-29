window.BENCHMARK_DATA = {
  "lastUpdate": 1722220280266,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "4b2b797430752f80612f1efbee6968213f1606e1",
          "message": "WIP",
          "timestamp": "2024-07-29T10:14:55+09:00",
          "tree_id": "de80609a63b1284dac24b7b1e72bcfa6411bc926",
          "url": "https://github.com/planetarium/libplanet/commit/4b2b797430752f80612f1efbee6968213f1606e1"
        },
        "date": 1722216324823,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010069.2777777778,
            "unit": "ns",
            "range": "± 48251.22333506378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1952994.7857142857,
            "unit": "ns",
            "range": "± 70692.16081778168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1686521.361111111,
            "unit": "ns",
            "range": "± 82343.69449051114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8268123.75,
            "unit": "ns",
            "range": "± 232907.8717111323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203069.33870967742,
            "unit": "ns",
            "range": "± 8641.238897199695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193899.30434782608,
            "unit": "ns",
            "range": "± 4661.056380798266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169958.8125,
            "unit": "ns",
            "range": "± 3322.5905399000544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3025688.8571428573,
            "unit": "ns",
            "range": "± 30905.323354890334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2775812.5714285714,
            "unit": "ns",
            "range": "± 34433.331530128424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12822.85393258427,
            "unit": "ns",
            "range": "± 716.9026742389443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60226.75,
            "unit": "ns",
            "range": "± 3237.169099710499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50868.333333333336,
            "unit": "ns",
            "range": "± 515.7392458374384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 54714.07692307692,
            "unit": "ns",
            "range": "± 4106.704372023971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2711.4148936170213,
            "unit": "ns",
            "range": "± 246.80907293993963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12014.04347826087,
            "unit": "ns",
            "range": "± 699.0360460614769"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31477.333333333332,
            "unit": "ns",
            "range": "± 400.6267708526347"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10343427.6,
            "unit": "ns",
            "range": "± 63168.00651867097"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27250685.5,
            "unit": "ns",
            "range": "± 76208.89180076036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69008065.14285715,
            "unit": "ns",
            "range": "± 398778.62389987515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137500266.30769232,
            "unit": "ns",
            "range": "± 359333.7685990061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284670885.06666666,
            "unit": "ns",
            "range": "± 1406177.6345223684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3734621.412860577,
            "unit": "ns",
            "range": "± 8250.569053852932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1247825.1013020833,
            "unit": "ns",
            "range": "± 2906.3705326308063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758295.7543619792,
            "unit": "ns",
            "range": "± 1154.0318578734195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1974416.78515625,
            "unit": "ns",
            "range": "± 2119.7274067176218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627456.0199869792,
            "unit": "ns",
            "range": "± 1269.9769795764332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564740.2804827009,
            "unit": "ns",
            "range": "± 688.3083364016987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2424251.9,
            "unit": "ns",
            "range": "± 63430.40855930221"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527650.1333333333,
            "unit": "ns",
            "range": "± 31871.322400433604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2959000.5384615385,
            "unit": "ns",
            "range": "± 33575.27849131308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2567360.1756756757,
            "unit": "ns",
            "range": "± 86219.4184643827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3211216.875,
            "unit": "ns",
            "range": "± 61072.90190897542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "16a5a20d3edf18373ac114ffb51e43f643666293",
          "message": "WIP",
          "timestamp": "2024-07-29T10:20:52+09:00",
          "tree_id": "b11047ac0f18c23dcf799fe0b21d38222f09cdb8",
          "url": "https://github.com/planetarium/libplanet/commit/16a5a20d3edf18373ac114ffb51e43f643666293"
        },
        "date": 1722216560034,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1003614.6384615385,
            "unit": "ns",
            "range": "± 38480.795860921375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1968561.7307692308,
            "unit": "ns",
            "range": "± 64513.83079760639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1704742.1081081082,
            "unit": "ns",
            "range": "± 85172.5369298314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8198206.017241379,
            "unit": "ns",
            "range": "± 237439.79711536816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198766.0909090909,
            "unit": "ns",
            "range": "± 8055.762541262752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191480.5588235294,
            "unit": "ns",
            "range": "± 5566.048770957488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165869.76923076922,
            "unit": "ns",
            "range": "± 2745.81242239421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2994259.8666666667,
            "unit": "ns",
            "range": "± 23967.04064176071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743642.466666667,
            "unit": "ns",
            "range": "± 34234.2021957713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12546.790322580646,
            "unit": "ns",
            "range": "± 817.5710789554997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60397.26373626374,
            "unit": "ns",
            "range": "± 3312.285692304954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 60311.5,
            "unit": "ns",
            "range": "± 920.2114793169376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50825.298969072166,
            "unit": "ns",
            "range": "± 7299.103605302258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2672.1182795698924,
            "unit": "ns",
            "range": "± 226.47453304675798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11946.986842105263,
            "unit": "ns",
            "range": "± 621.6294178671845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32611.266666666666,
            "unit": "ns",
            "range": "± 375.3290873480548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10421856.07142857,
            "unit": "ns",
            "range": "± 38655.79526950108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26845762.533333335,
            "unit": "ns",
            "range": "± 128956.30844197175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71769871.93333334,
            "unit": "ns",
            "range": "± 365577.49381872645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135247946.46153846,
            "unit": "ns",
            "range": "± 873457.900034361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282816231.46153843,
            "unit": "ns",
            "range": "± 534211.161994271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729221.8604910714,
            "unit": "ns",
            "range": "± 4066.58092617407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1213086.8140625,
            "unit": "ns",
            "range": "± 3119.050141617684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761158.1003255208,
            "unit": "ns",
            "range": "± 1385.1722939977694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1977777.140904018,
            "unit": "ns",
            "range": "± 1150.54618079726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 631147.8766043527,
            "unit": "ns",
            "range": "± 849.4926021521345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 577339.2080829327,
            "unit": "ns",
            "range": "± 724.9061637678575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2450417.8333333335,
            "unit": "ns",
            "range": "± 39926.856413888105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2514074.82,
            "unit": "ns",
            "range": "± 65522.10688113847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3007253.714285714,
            "unit": "ns",
            "range": "± 26643.667835337164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2513600.9285714286,
            "unit": "ns",
            "range": "± 90842.50076795145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3263732.6333333333,
            "unit": "ns",
            "range": "± 48185.98941581415"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3c21032a2ddf0191867b4f0190c5394e34d887be",
          "message": "WIP",
          "timestamp": "2024-07-29T10:26:35+09:00",
          "tree_id": "d6ebfe99044609b56ab10db35fe919ac8cf2d5ca",
          "url": "https://github.com/planetarium/libplanet/commit/3c21032a2ddf0191867b4f0190c5394e34d887be"
        },
        "date": 1722216889509,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017866.6962025317,
            "unit": "ns",
            "range": "± 50411.21701397022"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1911040.396551724,
            "unit": "ns",
            "range": "± 54708.638711518746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1658549.5862068965,
            "unit": "ns",
            "range": "± 66752.89623180812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8139514.68,
            "unit": "ns",
            "range": "± 215421.30379690864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200808.2,
            "unit": "ns",
            "range": "± 5759.673780826347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189968.09523809524,
            "unit": "ns",
            "range": "± 6565.418522908679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162082.92857142858,
            "unit": "ns",
            "range": "± 2864.219982803365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2998268.066666667,
            "unit": "ns",
            "range": "± 42491.99317260785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2744742.1428571427,
            "unit": "ns",
            "range": "± 25628.67192035317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12734.197674418605,
            "unit": "ns",
            "range": "± 678.0520857967709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69289.17307692308,
            "unit": "ns",
            "range": "± 2854.15738550307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50151.57692307692,
            "unit": "ns",
            "range": "± 394.5998947327241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56493.673684210524,
            "unit": "ns",
            "range": "± 8062.694013423015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2624.9578947368423,
            "unit": "ns",
            "range": "± 206.04486785646668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11787.76923076923,
            "unit": "ns",
            "range": "± 667.2967535249645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32001.923076923078,
            "unit": "ns",
            "range": "± 368.7658384256107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10360547.357142856,
            "unit": "ns",
            "range": "± 66313.98500241934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27033988.833333332,
            "unit": "ns",
            "range": "± 174409.02424705416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68273782.14285715,
            "unit": "ns",
            "range": "± 274336.5018427628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136948754.57142857,
            "unit": "ns",
            "range": "± 344799.1045375808"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284302621.56666666,
            "unit": "ns",
            "range": "± 1030622.3049292297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3789416.5885416665,
            "unit": "ns",
            "range": "± 4466.829024626836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1233391.1974051339,
            "unit": "ns",
            "range": "± 2037.9177549929955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762938.1988932291,
            "unit": "ns",
            "range": "± 941.98218818979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1914319.5249399038,
            "unit": "ns",
            "range": "± 1532.428097566645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612617.429296875,
            "unit": "ns",
            "range": "± 666.6586907531166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569001.3978515625,
            "unit": "ns",
            "range": "± 578.7138041632329"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2392067.21875,
            "unit": "ns",
            "range": "± 69339.2961615303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2518539.933333333,
            "unit": "ns",
            "range": "± 32808.438575783395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3001819.076923077,
            "unit": "ns",
            "range": "± 34785.86526991852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2590650.785714286,
            "unit": "ns",
            "range": "± 28862.085457405006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3193746.705882353,
            "unit": "ns",
            "range": "± 61361.94046777357"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "f668118be938b78aa7c3b66b59ae208789bd1d89",
          "message": "WIP",
          "timestamp": "2024-07-29T10:32:52+09:00",
          "tree_id": "daee49a6df6ca377f96b8fd83d87df9a5e798207",
          "url": "https://github.com/planetarium/libplanet/commit/f668118be938b78aa7c3b66b59ae208789bd1d89"
        },
        "date": 1722217374435,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1114650.0111111111,
            "unit": "ns",
            "range": "± 79888.04910092348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2100244.3235294116,
            "unit": "ns",
            "range": "± 65728.71711930587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1813522.3835616438,
            "unit": "ns",
            "range": "± 87864.53310314789"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8678797.228571428,
            "unit": "ns",
            "range": "± 271499.80113188317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200830.03846153847,
            "unit": "ns",
            "range": "± 6941.234794010864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195088.78260869565,
            "unit": "ns",
            "range": "± 6824.1746848588655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169164.85211267605,
            "unit": "ns",
            "range": "± 7928.803716466026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3152168.933333333,
            "unit": "ns",
            "range": "± 45085.31691529273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2887885.8571428573,
            "unit": "ns",
            "range": "± 24736.327843282026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17010.113402061856,
            "unit": "ns",
            "range": "± 2583.6593310824373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90322.47,
            "unit": "ns",
            "range": "± 16367.633961081227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57941.826315789476,
            "unit": "ns",
            "range": "± 3491.825351589372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73845.8469387755,
            "unit": "ns",
            "range": "± 11977.307192974866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4162.816326530612,
            "unit": "ns",
            "range": "± 674.4521923240345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26407.31,
            "unit": "ns",
            "range": "± 4908.785469107116"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34536.44117647059,
            "unit": "ns",
            "range": "± 1653.0137820515372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10573039.533333333,
            "unit": "ns",
            "range": "± 131202.75062222625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28994691.64285714,
            "unit": "ns",
            "range": "± 204366.94410134965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69489177.63333334,
            "unit": "ns",
            "range": "± 277376.3838250079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139399121.06666666,
            "unit": "ns",
            "range": "± 973181.0896348757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288247315.2,
            "unit": "ns",
            "range": "± 802019.6577936586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3628096.162109375,
            "unit": "ns",
            "range": "± 6690.9005195766795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1217370.2158203125,
            "unit": "ns",
            "range": "± 1739.87778894668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 772394.3995535715,
            "unit": "ns",
            "range": "± 1178.5223558641626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1912601.309375,
            "unit": "ns",
            "range": "± 2747.8711971253697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628076.7901692708,
            "unit": "ns",
            "range": "± 569.8970860634885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 581798.1530412947,
            "unit": "ns",
            "range": "± 616.048584561741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2366283.8571428573,
            "unit": "ns",
            "range": "± 24600.68994922748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2527232.4,
            "unit": "ns",
            "range": "± 37239.534011585056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3030010.0714285714,
            "unit": "ns",
            "range": "± 33193.88978635001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2601198.0384615385,
            "unit": "ns",
            "range": "± 69550.65422753736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3350262.433333333,
            "unit": "ns",
            "range": "± 60315.19917361114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "3b0fb11b2e9562e2d28554d8431025f68e29ad5a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:50:55+09:00",
          "tree_id": "6cd3d7f6cd76520db6a3217252c3d7bdb9a10f7e",
          "url": "https://github.com/planetarium/libplanet/commit/3b0fb11b2e9562e2d28554d8431025f68e29ad5a"
        },
        "date": 1722218337160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1017983.7671232877,
            "unit": "ns",
            "range": "± 44574.33268757074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1945083.1666666667,
            "unit": "ns",
            "range": "± 63896.8998463261"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682485.7567567567,
            "unit": "ns",
            "range": "± 81150.86142704205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8345261.25,
            "unit": "ns",
            "range": "± 211835.44300280453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204631.1923076923,
            "unit": "ns",
            "range": "± 8444.130990100692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197940.8679245283,
            "unit": "ns",
            "range": "± 6703.207857315366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 159894.2857142857,
            "unit": "ns",
            "range": "± 2340.630994101687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3078482.9,
            "unit": "ns",
            "range": "± 47872.83858276454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2743629.769230769,
            "unit": "ns",
            "range": "± 19031.56208842672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12843.022471910112,
            "unit": "ns",
            "range": "± 719.3109704547453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62060.375,
            "unit": "ns",
            "range": "± 2962.912765266211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50213.61538461538,
            "unit": "ns",
            "range": "± 522.881525532878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49809.291666666664,
            "unit": "ns",
            "range": "± 6872.366753764354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2709.118556701031,
            "unit": "ns",
            "range": "± 178.97936585556968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11851.5,
            "unit": "ns",
            "range": "± 625.2230095640368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32410.928571428572,
            "unit": "ns",
            "range": "± 286.432557315173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10455368.266666668,
            "unit": "ns",
            "range": "± 75248.45604155672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26961425.533333335,
            "unit": "ns",
            "range": "± 149874.17941196382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67935763.66666667,
            "unit": "ns",
            "range": "± 328720.7532525934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136896923.9,
            "unit": "ns",
            "range": "± 689037.6037462688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284881175.4,
            "unit": "ns",
            "range": "± 1089068.5867449043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3718352.4363839286,
            "unit": "ns",
            "range": "± 5842.930637743548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208239.972935268,
            "unit": "ns",
            "range": "± 1418.4320944196993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 758353.7728515625,
            "unit": "ns",
            "range": "± 1600.194454522192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958227.3901041667,
            "unit": "ns",
            "range": "± 2984.310869985412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618431.9725811298,
            "unit": "ns",
            "range": "± 824.6500991878958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566414.2173549107,
            "unit": "ns",
            "range": "± 825.5929176192766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2402178.269230769,
            "unit": "ns",
            "range": "± 64928.22778703124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2492112.6875,
            "unit": "ns",
            "range": "± 48496.65090872256"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3004749.727272727,
            "unit": "ns",
            "range": "± 72318.56570225659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2578977.285714286,
            "unit": "ns",
            "range": "± 30690.65439856387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3221247.6428571427,
            "unit": "ns",
            "range": "± 37117.98413501537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "5b6099a8011c3269a73563aeea9654fb55b49e3c",
          "message": "WIP",
          "timestamp": "2024-07-29T10:52:11+09:00",
          "tree_id": "4c2914b18b02e2330979313cd7e579dc8882501d",
          "url": "https://github.com/planetarium/libplanet/commit/5b6099a8011c3269a73563aeea9654fb55b49e3c"
        },
        "date": 1722218435667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077430.4462365592,
            "unit": "ns",
            "range": "± 71946.24131197536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2057527.9777777777,
            "unit": "ns",
            "range": "± 76778.92137094567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819754.268292683,
            "unit": "ns",
            "range": "± 95780.68864464248"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8502627.777777778,
            "unit": "ns",
            "range": "± 176431.73868618443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201334.0892857143,
            "unit": "ns",
            "range": "± 8657.452304810286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195183.95238095237,
            "unit": "ns",
            "range": "± 7123.69384502711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166232.64285714287,
            "unit": "ns",
            "range": "± 4350.026749294389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3070918.9,
            "unit": "ns",
            "range": "± 33637.76989975066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2802419.529411765,
            "unit": "ns",
            "range": "± 56680.233590641685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12628.467391304348,
            "unit": "ns",
            "range": "± 839.8831610406969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59806.709677419356,
            "unit": "ns",
            "range": "± 3374.501510950222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53539.666666666664,
            "unit": "ns",
            "range": "± 548.8577118696501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53629.926315789475,
            "unit": "ns",
            "range": "± 7926.442632963531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2710.5416666666665,
            "unit": "ns",
            "range": "± 281.18137681337765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12097.130434782608,
            "unit": "ns",
            "range": "± 879.4553848880566"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32648.533333333333,
            "unit": "ns",
            "range": "± 542.6489086833568"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10685752.714285715,
            "unit": "ns",
            "range": "± 44377.77255508155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27719624.785714287,
            "unit": "ns",
            "range": "± 146170.83496805455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70316878.33333333,
            "unit": "ns",
            "range": "± 381035.2044912211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139036536,
            "unit": "ns",
            "range": "± 842262.9445760137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286422573.61538464,
            "unit": "ns",
            "range": "± 385044.65796808084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3767710.364676339,
            "unit": "ns",
            "range": "± 5834.8970714278385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203538.9789341518,
            "unit": "ns",
            "range": "± 1809.2095024857692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 761589.8973214285,
            "unit": "ns",
            "range": "± 848.3808999155335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1958194.4809895833,
            "unit": "ns",
            "range": "± 3319.1290578806197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624220.3478064904,
            "unit": "ns",
            "range": "± 968.9043526857004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568528.6488560268,
            "unit": "ns",
            "range": "± 1048.134442013813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2421801.3095238097,
            "unit": "ns",
            "range": "± 57611.1778057167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2672556.2666666666,
            "unit": "ns",
            "range": "± 48408.32661177601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3006993.566666667,
            "unit": "ns",
            "range": "± 38136.56097587546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2593121.6,
            "unit": "ns",
            "range": "± 38159.01018445241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3384108.8571428573,
            "unit": "ns",
            "range": "± 41515.458176826956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "e065fcf5ede5377003d03b932d7069463702803a",
          "message": "WIP",
          "timestamp": "2024-07-29T10:58:47+09:00",
          "tree_id": "88820a8b1d001575fe0e4ba98afd4e29d8cb3c30",
          "url": "https://github.com/planetarium/libplanet/commit/e065fcf5ede5377003d03b932d7069463702803a"
        },
        "date": 1722218855881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1012324,
            "unit": "ns",
            "range": "± 45986.71611828518"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1955059,
            "unit": "ns",
            "range": "± 74735.96096642144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1691064.92,
            "unit": "ns",
            "range": "± 80104.06239601626"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8302650.3,
            "unit": "ns",
            "range": "± 243220.4888780534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200406.77142857143,
            "unit": "ns",
            "range": "± 6497.317976472674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194579.0294117647,
            "unit": "ns",
            "range": "± 7883.152857462403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163524.0294117647,
            "unit": "ns",
            "range": "± 3232.6300460624752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3007846.230769231,
            "unit": "ns",
            "range": "± 11518.982168243327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2763741.466666667,
            "unit": "ns",
            "range": "± 35291.527961227395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12914.155555555555,
            "unit": "ns",
            "range": "± 838.5078361356702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60422.02247191011,
            "unit": "ns",
            "range": "± 3346.1792050361782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50239.78571428572,
            "unit": "ns",
            "range": "± 855.0017704499375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49862.1030927835,
            "unit": "ns",
            "range": "± 6957.1386666330845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2717.8571428571427,
            "unit": "ns",
            "range": "± 290.53054916824146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16026.088235294117,
            "unit": "ns",
            "range": "± 775.6100100054921"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32441.1,
            "unit": "ns",
            "range": "± 330.95096745158924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10423740.066666666,
            "unit": "ns",
            "range": "± 44676.1418983758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26740001.933333334,
            "unit": "ns",
            "range": "± 151641.70699357023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67621632.53846154,
            "unit": "ns",
            "range": "± 160885.73048834762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137499612.66666666,
            "unit": "ns",
            "range": "± 507332.75676081056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282063728.21428573,
            "unit": "ns",
            "range": "± 666318.2819523065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754200.433035714,
            "unit": "ns",
            "range": "± 4147.766343620976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208349.2046875,
            "unit": "ns",
            "range": "± 2565.9342727172484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 747501.3858119419,
            "unit": "ns",
            "range": "± 893.9840940319785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943446.7124720982,
            "unit": "ns",
            "range": "± 1178.4088970276412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612599.3166155134,
            "unit": "ns",
            "range": "± 622.7224087870229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583067.5573381697,
            "unit": "ns",
            "range": "± 884.4733368354813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2368424.933333333,
            "unit": "ns",
            "range": "± 35147.07328694803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2495405.710526316,
            "unit": "ns",
            "range": "± 55384.820592508266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3018204.066666667,
            "unit": "ns",
            "range": "± 32798.213260277866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2512491.6428571427,
            "unit": "ns",
            "range": "± 43969.06704037622"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3217502.8333333335,
            "unit": "ns",
            "range": "± 52646.39041757753"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "1832e0d0a5190225976235f2c311e111aff7c757",
          "message": "feat: Add repository url arg when dotnet build runs",
          "timestamp": "2024-07-29T11:20:19+09:00",
          "tree_id": "306374b24f8c61b594e8fe8f023c4eff34b8585f",
          "url": "https://github.com/planetarium/libplanet/commit/1832e0d0a5190225976235f2c311e111aff7c757"
        },
        "date": 1722220254286,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040376.7105263158,
            "unit": "ns",
            "range": "± 52636.47316549386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1983417.0285714285,
            "unit": "ns",
            "range": "± 63515.28920128357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1753262.03125,
            "unit": "ns",
            "range": "± 73088.78633812413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8426460.4,
            "unit": "ns",
            "range": "± 248714.38721322845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203582.140625,
            "unit": "ns",
            "range": "± 9448.255212013448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196364.7894736842,
            "unit": "ns",
            "range": "± 7820.5160812005115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175820.63333333333,
            "unit": "ns",
            "range": "± 6653.664272755686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3129350.7,
            "unit": "ns",
            "range": "± 39539.87818682009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2832359.4285714286,
            "unit": "ns",
            "range": "± 16149.601960869051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18685.097826086956,
            "unit": "ns",
            "range": "± 1480.7313537482898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70348.80769230769,
            "unit": "ns",
            "range": "± 3599.6303528033504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54016.19892473118,
            "unit": "ns",
            "range": "± 4366.760845058224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64482.0918367347,
            "unit": "ns",
            "range": "± 11330.508952169379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3076.946808510638,
            "unit": "ns",
            "range": "± 350.1549078705508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12953.13829787234,
            "unit": "ns",
            "range": "± 845.4507813461363"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32454.55128205128,
            "unit": "ns",
            "range": "± 1259.9159490357674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10815663.266666668,
            "unit": "ns",
            "range": "± 93690.11287557558"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27306590.533333335,
            "unit": "ns",
            "range": "± 99393.88503242086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70861164.5,
            "unit": "ns",
            "range": "± 392886.0886567505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138011585.33333334,
            "unit": "ns",
            "range": "± 455895.25008989044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287507793.1333333,
            "unit": "ns",
            "range": "± 1232447.4030615939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3771448.6796875,
            "unit": "ns",
            "range": "± 4383.0544124769995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1203882.8309151786,
            "unit": "ns",
            "range": "± 1581.2491914830405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776158.3694661459,
            "unit": "ns",
            "range": "± 2007.4599774513647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1927012.32578125,
            "unit": "ns",
            "range": "± 5219.878639880918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627100.5972005208,
            "unit": "ns",
            "range": "± 407.1930447538933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571903.7076822916,
            "unit": "ns",
            "range": "± 1315.4354709421211"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2462411.3181818184,
            "unit": "ns",
            "range": "± 42372.198764426124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2536520.3846153845,
            "unit": "ns",
            "range": "± 98129.52262841465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3090268.466666667,
            "unit": "ns",
            "range": "± 38637.933902664445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2663747,
            "unit": "ns",
            "range": "± 26785.056642578784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3334151.8571428573,
            "unit": "ns",
            "range": "± 31692.011766148808"
          }
        ]
      }
    ]
  }
}