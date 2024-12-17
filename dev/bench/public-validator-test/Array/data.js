window.BENCHMARK_DATA = {
  "lastUpdate": 1734413346836,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f80d526b4fed53fcf98be3d097d3e17b0fd39fea",
          "message": "Merge pull request #4007 from planetarium/feature/delayed-consensus\n\nDelayed consensus step transition",
          "timestamp": "2024-12-12T21:09:39+09:00",
          "tree_id": "1f2efb8a4accea2eb651d5d0a537ef47eaec92e6",
          "url": "https://github.com/planetarium/libplanet/commit/f80d526b4fed53fcf98be3d097d3e17b0fd39fea"
        },
        "date": 1734005872395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10622788.846153846,
            "unit": "ns",
            "range": "± 106788.85474371546"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26159672.85714286,
            "unit": "ns",
            "range": "± 181462.40540201627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66610519.733333334,
            "unit": "ns",
            "range": "± 110209.62152738534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133600250.28571428,
            "unit": "ns",
            "range": "± 297909.1092354353"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269639488.3333333,
            "unit": "ns",
            "range": "± 429952.542309475"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 12692.63829787234,
            "unit": "ns",
            "range": "± 444.0172551255341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53883.65060240964,
            "unit": "ns",
            "range": "± 2869.1063852013735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 106193.20588235294,
            "unit": "ns",
            "range": "± 3422.049623105231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93315.9705882353,
            "unit": "ns",
            "range": "± 4459.939359304594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2827502.6767676766,
            "unit": "ns",
            "range": "± 177621.14327622033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2643328.25,
            "unit": "ns",
            "range": "± 194252.6652735199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5215.0888888888885,
            "unit": "ns",
            "range": "± 571.6666083576258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26873.620689655174,
            "unit": "ns",
            "range": "± 1706.777803561363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 23119.18947368421,
            "unit": "ns",
            "range": "± 1659.3672999243508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 31123.177083333332,
            "unit": "ns",
            "range": "± 5165.024186002967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1391.4263157894736,
            "unit": "ns",
            "range": "± 280.0303646949306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4740.994382022472,
            "unit": "ns",
            "range": "± 513.2061681145375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 672147.4942528736,
            "unit": "ns",
            "range": "± 36794.21875337861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1263837.1458333333,
            "unit": "ns",
            "range": "± 49024.0093414895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1030475.9714285714,
            "unit": "ns",
            "range": "± 49589.97035223356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8826378.93,
            "unit": "ns",
            "range": "± 1218903.3617217618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2118353,
            "unit": "ns",
            "range": "± 74535.46766726133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2265984.073170732,
            "unit": "ns",
            "range": "± 81031.35006693096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2572837.393939394,
            "unit": "ns",
            "range": "± 81221.47738280936"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2242958.6885245903,
            "unit": "ns",
            "range": "± 95622.41466911075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2865290.325,
            "unit": "ns",
            "range": "± 100817.13662137352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3062427.9078125,
            "unit": "ns",
            "range": "± 49464.566112253095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 920607.6141183035,
            "unit": "ns",
            "range": "± 3882.3483926935187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 614112.60546875,
            "unit": "ns",
            "range": "± 4854.377133809387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1643091.0868489584,
            "unit": "ns",
            "range": "± 10817.334973996487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 463029.5715332031,
            "unit": "ns",
            "range": "± 705.225603558649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 418062.35891927086,
            "unit": "ns",
            "range": "± 1552.0611788433291"
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
          "id": "d176fe70fd9eb51970e4c8f704a8d7364e326408",
          "message": "temp: remove static validator from NetMQTransport",
          "timestamp": "2024-12-17T14:20:58+09:00",
          "tree_id": "4635574b8873c312aa51eb4fabaf2ef2cc9f9690",
          "url": "https://github.com/planetarium/libplanet/commit/d176fe70fd9eb51970e4c8f704a8d7364e326408"
        },
        "date": 1734413334103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10667345.57142857,
            "unit": "ns",
            "range": "± 183298.34756303905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26240012.14285714,
            "unit": "ns",
            "range": "± 133121.23799746615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66499932,
            "unit": "ns",
            "range": "± 96255.10659300508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134582979.14285713,
            "unit": "ns",
            "range": "± 213978.0639722777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270315166.4285714,
            "unit": "ns",
            "range": "± 344807.76863336127"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 13076.09090909091,
            "unit": "ns",
            "range": "± 316.4068973257768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 53301.62962962963,
            "unit": "ns",
            "range": "± 2718.877058844536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 104848.28571428571,
            "unit": "ns",
            "range": "± 3281.614619960315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 91491.07142857143,
            "unit": "ns",
            "range": "± 1319.44986871194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2802833.72,
            "unit": "ns",
            "range": "± 186152.29076048287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2746018.824742268,
            "unit": "ns",
            "range": "± 158250.1875428069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5237.25,
            "unit": "ns",
            "range": "± 737.2036208344534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 27012.5989010989,
            "unit": "ns",
            "range": "± 1979.0030096824291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 25398.50505050505,
            "unit": "ns",
            "range": "± 3507.7260625761915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 30422.043956043955,
            "unit": "ns",
            "range": "± 4044.5603494407915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1472.2315789473685,
            "unit": "ns",
            "range": "± 255.1733016711942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4912.406593406594,
            "unit": "ns",
            "range": "± 622.1478919932138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 669000.3720930233,
            "unit": "ns",
            "range": "± 35083.93393095595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1286451.5142857144,
            "unit": "ns",
            "range": "± 41776.0425577454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1032102.0519480519,
            "unit": "ns",
            "range": "± 50648.74716092147"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8702805.8,
            "unit": "ns",
            "range": "± 1405563.7934467734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2167900.03125,
            "unit": "ns",
            "range": "± 67361.31757699422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2241461.269230769,
            "unit": "ns",
            "range": "± 22078.132726576034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2563875.3636363638,
            "unit": "ns",
            "range": "± 60215.022989082696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2259344,
            "unit": "ns",
            "range": "± 85852.09731836223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 2855196.263157895,
            "unit": "ns",
            "range": "± 119777.27065288518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3043890.7158203125,
            "unit": "ns",
            "range": "± 56538.08088500866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 918380.8245442709,
            "unit": "ns",
            "range": "± 5906.07590279716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 617152.2404947917,
            "unit": "ns",
            "range": "± 5731.788870906344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1635736.3599609374,
            "unit": "ns",
            "range": "± 18102.45896355127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 460899.39805385045,
            "unit": "ns",
            "range": "± 866.8489431188318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 420531.7232096354,
            "unit": "ns",
            "range": "± 1560.156143283491"
          }
        ]
      }
    ]
  }
}