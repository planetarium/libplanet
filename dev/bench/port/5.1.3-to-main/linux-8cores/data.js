window.BENCHMARK_DATA = {
  "lastUpdate": 1722330034607,
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
          "id": "583571d54d82fb099953049b20316af6d93d6d6a",
          "message": "Merge tag '5.1.3' into port/5.1.3-to-main",
          "timestamp": "2024-07-30T17:49:46+09:00",
          "tree_id": "9413af4ceb1933084d79bd200c2c04dd2ebae8e7",
          "url": "https://github.com/planetarium/libplanet/commit/583571d54d82fb099953049b20316af6d93d6d6a"
        },
        "date": 1722330008161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1105282.510989011,
            "unit": "ns",
            "range": "± 75361.4574640106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2080473.923076923,
            "unit": "ns",
            "range": "± 71893.29331555958"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1794770.731707317,
            "unit": "ns",
            "range": "± 93637.36900088881"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8730115.567567568,
            "unit": "ns",
            "range": "± 295255.42093033995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 244689.8108108108,
            "unit": "ns",
            "range": "± 5684.473012992095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222744.79292929292,
            "unit": "ns",
            "range": "± 20160.70595634525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 190893.2409638554,
            "unit": "ns",
            "range": "± 10090.393862832212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3165120.7333333334,
            "unit": "ns",
            "range": "± 32429.147106679615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2919288.9285714286,
            "unit": "ns",
            "range": "± 22570.365405393128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19782.131313131315,
            "unit": "ns",
            "range": "± 3408.737693964494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84245.74,
            "unit": "ns",
            "range": "± 15754.475160673644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53740.63953488372,
            "unit": "ns",
            "range": "± 2937.5796436273686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 53469.26373626374,
            "unit": "ns",
            "range": "± 11858.385971150603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2684.9270833333335,
            "unit": "ns",
            "range": "± 279.5939629192254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12226,
            "unit": "ns",
            "range": "± 1069.0106445876759"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35521.886597938144,
            "unit": "ns",
            "range": "± 5207.974482056917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10696961.75,
            "unit": "ns",
            "range": "± 203001.02465997555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27268442.7,
            "unit": "ns",
            "range": "± 181032.42997209093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68251477.23333333,
            "unit": "ns",
            "range": "± 257556.68452857592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139815326.57142857,
            "unit": "ns",
            "range": "± 567743.0524210909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287880350.23333335,
            "unit": "ns",
            "range": "± 2868163.34283867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3746828.01171875,
            "unit": "ns",
            "range": "± 7052.027450377606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1201003.1905691964,
            "unit": "ns",
            "range": "± 1304.890062311678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 751847.7032552083,
            "unit": "ns",
            "range": "± 1003.3114341275668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942317.2865084135,
            "unit": "ns",
            "range": "± 3149.5802248989316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625011.3110351562,
            "unit": "ns",
            "range": "± 371.8765312585948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578397.6611328125,
            "unit": "ns",
            "range": "± 319.0829900747944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2475821.4285714286,
            "unit": "ns",
            "range": "± 36013.827915793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2625528.5,
            "unit": "ns",
            "range": "± 39526.141642991395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3143182.8125,
            "unit": "ns",
            "range": "± 58468.59914144087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2685157.2333333334,
            "unit": "ns",
            "range": "± 43823.06543601809"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3366939.6428571427,
            "unit": "ns",
            "range": "± 34974.81208748583"
          }
        ]
      }
    ]
  }
}