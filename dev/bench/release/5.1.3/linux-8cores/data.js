window.BENCHMARK_DATA = {
  "lastUpdate": 1722320758547,
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
          "id": "f037f4d6e6b19539c8286664c4021971742909f6",
          "message": "Release 5.1.3",
          "timestamp": "2024-07-30T15:16:44+09:00",
          "tree_id": "6390d9a3eae9dcd8e92fcfd6c15a159ff2e46ca0",
          "url": "https://github.com/planetarium/libplanet/commit/f037f4d6e6b19539c8286664c4021971742909f6"
        },
        "date": 1722320732497,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1000542.1428571428,
            "unit": "ns",
            "range": "± 35349.45814285969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1900391.7575757576,
            "unit": "ns",
            "range": "± 59920.498652396855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1678766.2615384615,
            "unit": "ns",
            "range": "± 70472.93434922307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8327488,
            "unit": "ns",
            "range": "± 277383.0996293754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201693.4090909091,
            "unit": "ns",
            "range": "± 7515.5224526129505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193513.375,
            "unit": "ns",
            "range": "± 7920.099099615312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170281.08333333334,
            "unit": "ns",
            "range": "± 2475.647076416527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3020252.285714286,
            "unit": "ns",
            "range": "± 37260.537486169495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2730296.3666666667,
            "unit": "ns",
            "range": "± 35944.19351253644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12843.621052631579,
            "unit": "ns",
            "range": "± 919.4314406306523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60232.16279069767,
            "unit": "ns",
            "range": "± 3291.626347926491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50492.769230769234,
            "unit": "ns",
            "range": "± 444.77094364143477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50741.27319587629,
            "unit": "ns",
            "range": "± 6403.501181816401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2670.6923076923076,
            "unit": "ns",
            "range": "± 193.3973854992583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11931.313186813188,
            "unit": "ns",
            "range": "± 664.3473139871595"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32486.2,
            "unit": "ns",
            "range": "± 316.8154487575197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10238676.923076924,
            "unit": "ns",
            "range": "± 39809.61262991126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26626503.666666668,
            "unit": "ns",
            "range": "± 168323.98394111733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68263778.8,
            "unit": "ns",
            "range": "± 307523.56109275826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139090817.5,
            "unit": "ns",
            "range": "± 592920.8878685964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 285867028.9285714,
            "unit": "ns",
            "range": "± 604263.2719076454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3690186.4910714286,
            "unit": "ns",
            "range": "± 4261.074080429687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218706.4920372595,
            "unit": "ns",
            "range": "± 1769.921060368923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770598.2893229167,
            "unit": "ns",
            "range": "± 825.3848867467752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1948841.9427083333,
            "unit": "ns",
            "range": "± 2420.127172848883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 650045.9580775669,
            "unit": "ns",
            "range": "± 765.6258850664052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 587043.008203125,
            "unit": "ns",
            "range": "± 1102.9130784240394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2396110.5,
            "unit": "ns",
            "range": "± 49783.74208543801"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2545782.380952381,
            "unit": "ns",
            "range": "± 59284.764932043196"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3035459.1,
            "unit": "ns",
            "range": "± 39465.2777909175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2541592.5,
            "unit": "ns",
            "range": "± 47974.39438561644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3291367,
            "unit": "ns",
            "range": "± 56379.1796917469"
          }
        ]
      }
    ]
  }
}