window.BENCHMARK_DATA = {
  "lastUpdate": 1680672717919,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "distinct": true,
          "id": "d841327d8540052291f6b101b94eea9432e91493",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:13:01+09:00",
          "tree_id": "b9a03bf1c8c3bfbc6943ae8a7f1ad710ef3fd7f4",
          "url": "https://github.com/planetarium/libplanet/commit/d841327d8540052291f6b101b94eea9432e91493"
        },
        "date": 1680672679048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7965582.785714285,
            "unit": "ns",
            "range": "± 92241.72092945508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21169591.285714287,
            "unit": "ns",
            "range": "± 247568.7100274242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54323680.33529412,
            "unit": "ns",
            "range": "± 3998138.766448476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109553521.34810127,
            "unit": "ns",
            "range": "± 5646544.834159153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213450384.0172414,
            "unit": "ns",
            "range": "± 4875534.07889671"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73960.86315789474,
            "unit": "ns",
            "range": "± 7881.934875060314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 424731.2157894737,
            "unit": "ns",
            "range": "± 41239.22468358821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347788.84065934067,
            "unit": "ns",
            "range": "± 41735.64270426679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 341659.73913043475,
            "unit": "ns",
            "range": "± 34807.04046703851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5785846.383333334,
            "unit": "ns",
            "range": "± 258007.60691269682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4104276.4285714286,
            "unit": "ns",
            "range": "± 240281.39815883274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21653.885416666668,
            "unit": "ns",
            "range": "± 3766.8640800085636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102906.0612244898,
            "unit": "ns",
            "range": "± 17607.242218254833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116040.34831460674,
            "unit": "ns",
            "range": "± 12745.190273822302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 277061.2604166667,
            "unit": "ns",
            "range": "± 33397.35489959293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10040.010638297872,
            "unit": "ns",
            "range": "± 1627.4009062191863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22764.34375,
            "unit": "ns",
            "range": "± 4124.569839971513"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1639634.6262626264,
            "unit": "ns",
            "range": "± 173231.84602814255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3007154.1219512196,
            "unit": "ns",
            "range": "± 107095.82383319041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2635752.7021276597,
            "unit": "ns",
            "range": "± 263757.2509570108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6983541.908163265,
            "unit": "ns",
            "range": "± 277308.433117795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3750156.3586956523,
            "unit": "ns",
            "range": "± 481982.1787547291"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3678974.3833333333,
            "unit": "ns",
            "range": "± 163326.93297697144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4647447.764150944,
            "unit": "ns",
            "range": "± 193276.079237124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4878825.901098901,
            "unit": "ns",
            "range": "± 364202.6118486813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9805375.326315789,
            "unit": "ns",
            "range": "± 804621.9290649365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7184500.279947917,
            "unit": "ns",
            "range": "± 226366.93530583166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107196.8351151315,
            "unit": "ns",
            "range": "± 67802.38623522244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1346850.6999023438,
            "unit": "ns",
            "range": "± 30126.546346303432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2623074.399658203,
            "unit": "ns",
            "range": "± 49302.574616007376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 893072.3270089285,
            "unit": "ns",
            "range": "± 13161.084868569154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764346.9174804688,
            "unit": "ns",
            "range": "± 12767.966146012011"
          }
        ]
      }
    ]
  }
}