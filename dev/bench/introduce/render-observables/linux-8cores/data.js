window.BENCHMARK_DATA = {
  "lastUpdate": 1723892031368,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Suho Lee",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "15f8eb55e77733c586dcb97431c888c817c2b502",
          "message": "introduce: IRenderObservables",
          "timestamp": "2024-08-17T19:44:20+09:00",
          "tree_id": "3b3ad6e02b44e81be470edacd1c1177cd58d7984",
          "url": "https://github.com/planetarium/libplanet/commit/15f8eb55e77733c586dcb97431c888c817c2b502"
        },
        "date": 1723892005572,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203954.42592592593,
            "unit": "ns",
            "range": "± 8345.561750318057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190836.625,
            "unit": "ns",
            "range": "± 5829.324155757958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167601,
            "unit": "ns",
            "range": "± 2380.682745208469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3058479.9,
            "unit": "ns",
            "range": "± 20642.77522455323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839899.8,
            "unit": "ns",
            "range": "± 49043.98114258554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12676.987654320988,
            "unit": "ns",
            "range": "± 675.6398355230979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59588.765957446805,
            "unit": "ns",
            "range": "± 3414.238791484898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49799.57142857143,
            "unit": "ns",
            "range": "± 409.8745988874973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50332.93877551021,
            "unit": "ns",
            "range": "± 7185.597982586207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2487.84375,
            "unit": "ns",
            "range": "± 213.75486836561174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11767.175324675325,
            "unit": "ns",
            "range": "± 617.7205219182106"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2405418.588235294,
            "unit": "ns",
            "range": "± 47118.87179923086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551021.382352941,
            "unit": "ns",
            "range": "± 49303.18487922757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2986613.2666666666,
            "unit": "ns",
            "range": "± 30594.50565161442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2639660.1666666665,
            "unit": "ns",
            "range": "± 44077.97627203517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3251582.7666666666,
            "unit": "ns",
            "range": "± 44174.4509667016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10656990.266666668,
            "unit": "ns",
            "range": "± 137692.3108811126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26960261.7,
            "unit": "ns",
            "range": "± 146168.3454368382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67595903.9,
            "unit": "ns",
            "range": "± 466432.8342927843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135128444.66666666,
            "unit": "ns",
            "range": "± 703531.1213439842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282182407.4,
            "unit": "ns",
            "range": "± 1181684.6927859758"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1021526.6133333333,
            "unit": "ns",
            "range": "± 51470.702137076034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1926181.5,
            "unit": "ns",
            "range": "± 55205.58472590044"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1680421.0657894737,
            "unit": "ns",
            "range": "± 85064.51465208989"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8451662,
            "unit": "ns",
            "range": "± 280186.98712365027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3657986.328125,
            "unit": "ns",
            "range": "± 4591.124547023162"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1197335.83515625,
            "unit": "ns",
            "range": "± 2774.502609153475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766867.06015625,
            "unit": "ns",
            "range": "± 1170.2685275188967"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1922819.573939732,
            "unit": "ns",
            "range": "± 1043.4771888182067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626659.7294270833,
            "unit": "ns",
            "range": "± 1792.2388662259007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587163.0147235577,
            "unit": "ns",
            "range": "± 507.03271242710986"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32048.46153846154,
            "unit": "ns",
            "range": "± 281.7941374433398"
          }
        ]
      }
    ]
  }
}