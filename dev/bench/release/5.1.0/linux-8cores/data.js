window.BENCHMARK_DATA = {
  "lastUpdate": 1720602819518,
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
          "id": "75d926d458b48de17425f08b183e0106ce522d4f",
          "message": "Release 5.1.0",
          "timestamp": "2024-07-10T18:05:01+09:00",
          "tree_id": "0d6de7376dc1957e144a0ef6b1a65bada361e378",
          "url": "https://github.com/planetarium/libplanet/commit/75d926d458b48de17425f08b183e0106ce522d4f"
        },
        "date": 1720602793455,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3751659.876953125,
            "unit": "ns",
            "range": "± 7926.754437108919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1226432.8106770834,
            "unit": "ns",
            "range": "± 2348.6393226470495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 760261.4815104167,
            "unit": "ns",
            "range": "± 1286.8888063550467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968720.5670072115,
            "unit": "ns",
            "range": "± 2308.23924050407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620598.1275111607,
            "unit": "ns",
            "range": "± 604.6616492532695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568132.256640625,
            "unit": "ns",
            "range": "± 789.7449120727124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2483472.529411765,
            "unit": "ns",
            "range": "± 48915.957993171374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2581946.9166666665,
            "unit": "ns",
            "range": "± 54416.07967832643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3052935,
            "unit": "ns",
            "range": "± 41076.79224050036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2578308.423076923,
            "unit": "ns",
            "range": "± 69488.41027965632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3351208.9,
            "unit": "ns",
            "range": "± 60374.25505580054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033379.8777777777,
            "unit": "ns",
            "range": "± 71411.64110064368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957417.4146341463,
            "unit": "ns",
            "range": "± 69301.36226654409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714109.6458333333,
            "unit": "ns",
            "range": "± 106554.26942617986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8205821.12,
            "unit": "ns",
            "range": "± 216793.34132846424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198807.95,
            "unit": "ns",
            "range": "± 6993.795176568648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189996.61333333334,
            "unit": "ns",
            "range": "± 9583.170212484041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168911.41666666666,
            "unit": "ns",
            "range": "± 2232.336422118125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3073013.117647059,
            "unit": "ns",
            "range": "± 59804.323856936084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2776694.785714286,
            "unit": "ns",
            "range": "± 24545.375464256373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13207.122222222222,
            "unit": "ns",
            "range": "± 1005.0702790316502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61475.117021276594,
            "unit": "ns",
            "range": "± 4730.772170612827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51242.46153846154,
            "unit": "ns",
            "range": "± 755.2738593146876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58575.02173913043,
            "unit": "ns",
            "range": "± 8949.565604877464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2833.404255319149,
            "unit": "ns",
            "range": "± 395.2233088428177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15265.035353535353,
            "unit": "ns",
            "range": "± 3653.259149657153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10650418.533333333,
            "unit": "ns",
            "range": "± 159091.30421502644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27288045.033333335,
            "unit": "ns",
            "range": "± 181113.27206075314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70308836.42857143,
            "unit": "ns",
            "range": "± 342481.3492672522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140438004.23333332,
            "unit": "ns",
            "range": "± 543691.1954209021"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285275452.3076923,
            "unit": "ns",
            "range": "± 708176.646924149"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31692.19230769231,
            "unit": "ns",
            "range": "± 363.57905711032197"
          }
        ]
      }
    ]
  }
}