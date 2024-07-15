window.BENCHMARK_DATA = {
  "lastUpdate": 1721033642772,
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
          "id": "9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0",
          "message": "Prepare 5.1.2",
          "timestamp": "2024-07-15T17:45:54+09:00",
          "tree_id": "b98ac14d02e74eef1d4802753356bee3fcc4ff10",
          "url": "https://github.com/planetarium/libplanet/commit/9b7f5df54dfb9656fe2beaece65366dbc7c2c4d0"
        },
        "date": 1721033629358,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10773465.529411765,
            "unit": "ns",
            "range": "± 213129.03582809807"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26536121.46153846,
            "unit": "ns",
            "range": "± 51490.24262035055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67545674.73333333,
            "unit": "ns",
            "range": "± 106292.96716116175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135307133,
            "unit": "ns",
            "range": "± 188621.53534373685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275984479.5,
            "unit": "ns",
            "range": "± 259835.96736306543"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 14284.588235294117,
            "unit": "ns",
            "range": "± 291.0468301716086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109788.81818181818,
            "unit": "ns",
            "range": "± 2819.5181162804797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 105001.33333333333,
            "unit": "ns",
            "range": "± 3764.4550613722176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 93502.89743589744,
            "unit": "ns",
            "range": "± 2842.5475767427156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3054748.3387096776,
            "unit": "ns",
            "range": "± 137717.32315501108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2839303.1944444445,
            "unit": "ns",
            "range": "± 140188.5514934112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 5006.465909090909,
            "unit": "ns",
            "range": "± 412.69407691812336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 26762.21978021978,
            "unit": "ns",
            "range": "± 1614.9782716267787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 22808.666666666668,
            "unit": "ns",
            "range": "± 1489.7319339692358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 29233.90425531915,
            "unit": "ns",
            "range": "± 5284.899578031182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 1241.7888888888888,
            "unit": "ns",
            "range": "± 224.40575682317234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 4707.549450549451,
            "unit": "ns",
            "range": "± 591.0148383874463"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 689842.8131868131,
            "unit": "ns",
            "range": "± 52120.31749496375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1276258.71875,
            "unit": "ns",
            "range": "± 33891.30938011973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1063083.3055555555,
            "unit": "ns",
            "range": "± 52475.476328790864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9359664.85,
            "unit": "ns",
            "range": "± 1271715.0134118486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2170452.3076923075,
            "unit": "ns",
            "range": "± 14159.879674539467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2236952.230769231,
            "unit": "ns",
            "range": "± 23386.717683882896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2572833.75,
            "unit": "ns",
            "range": "± 22239.46005363603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2336480.7735849055,
            "unit": "ns",
            "range": "± 96512.95509126094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3126619.54,
            "unit": "ns",
            "range": "± 223115.45312347452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3019709.2338541667,
            "unit": "ns",
            "range": "± 45271.066808550444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 921969.0839146206,
            "unit": "ns",
            "range": "± 4238.906256990902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 611540.2185872396,
            "unit": "ns",
            "range": "± 485.57081510426866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1653970.0569010417,
            "unit": "ns",
            "range": "± 19169.251228094887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 466386.04583333334,
            "unit": "ns",
            "range": "± 672.0895349986225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 427514.333077567,
            "unit": "ns",
            "range": "± 838.8547997308609"
          }
        ]
      }
    ]
  }
}