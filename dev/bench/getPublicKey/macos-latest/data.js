window.BENCHMARK_DATA = {
  "lastUpdate": 1680685390410,
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
      },
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
          "id": "a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:17:10+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/a3a8ae2d01be5f29ee5b20cc35cc82149dc5922e"
        },
        "date": 1680672851481,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9252584.8,
            "unit": "ns",
            "range": "± 300626.0750409346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22402354.785714287,
            "unit": "ns",
            "range": "± 624173.0387536098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55405721.071428575,
            "unit": "ns",
            "range": "± 763573.3525802032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108513192.86206897,
            "unit": "ns",
            "range": "± 2908995.174936034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225986398.2820513,
            "unit": "ns",
            "range": "± 7865626.874783873"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68709.3125,
            "unit": "ns",
            "range": "± 9415.279463457258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 448943.9,
            "unit": "ns",
            "range": "± 22706.144753514796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378644.71428571426,
            "unit": "ns",
            "range": "± 19742.766346227196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 323595.7916666667,
            "unit": "ns",
            "range": "± 12548.523427518989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6370936.653846154,
            "unit": "ns",
            "range": "± 83769.93422846304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4746068.714285715,
            "unit": "ns",
            "range": "± 82060.1843840413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20745.933333333334,
            "unit": "ns",
            "range": "± 2344.3154473862796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108641.23737373737,
            "unit": "ns",
            "range": "± 11781.504228641916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109111.82474226804,
            "unit": "ns",
            "range": "± 11377.478525771054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 280435.61855670105,
            "unit": "ns",
            "range": "± 25701.27242247425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7034.808510638298,
            "unit": "ns",
            "range": "± 571.2512775279614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21158.577777777777,
            "unit": "ns",
            "range": "± 2076.1258160321127"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1635504.2921348314,
            "unit": "ns",
            "range": "± 173098.8676683726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275891.188235294,
            "unit": "ns",
            "range": "± 221675.21935574245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2698992.9239130435,
            "unit": "ns",
            "range": "± 256017.29495700882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7670892.431818182,
            "unit": "ns",
            "range": "± 565309.7630536426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3690053.785714286,
            "unit": "ns",
            "range": "± 120073.65914685854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3997295.246031746,
            "unit": "ns",
            "range": "± 178491.55220228102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5106098.472222222,
            "unit": "ns",
            "range": "± 252165.46496656124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5034125.15,
            "unit": "ns",
            "range": "± 317492.4584237348"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10257835.75,
            "unit": "ns",
            "range": "± 316966.30449726037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7197766.821428572,
            "unit": "ns",
            "range": "± 104471.96700805001"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2018786.3203125,
            "unit": "ns",
            "range": "± 24441.138814455026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1466338.6136610243,
            "unit": "ns",
            "range": "± 47676.85185473207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2918341.7569754464,
            "unit": "ns",
            "range": "± 8234.38084557407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989227.2694128788,
            "unit": "ns",
            "range": "± 30620.808141855217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 851527.0913783482,
            "unit": "ns",
            "range": "± 4949.879230028483"
          }
        ]
      },
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
          "id": "db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T14:36:26+09:00",
          "tree_id": "599e0906639d833ccfe5a7e765c82913ed61a81e",
          "url": "https://github.com/planetarium/libplanet/commit/db8bb077b2eef3c6d6eb75c32082896a5d0c9f8c"
        },
        "date": 1680674349562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367861.05882353,
            "unit": "ns",
            "range": "± 394717.98535023927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21026398.8125,
            "unit": "ns",
            "range": "± 639634.3723421312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56635370.17391305,
            "unit": "ns",
            "range": "± 4867201.538394148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110470551.21568628,
            "unit": "ns",
            "range": "± 4495322.02935784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225267473.58974358,
            "unit": "ns",
            "range": "± 7868795.875387822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69349.9945054945,
            "unit": "ns",
            "range": "± 9567.8807456959"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381588.25581395347,
            "unit": "ns",
            "range": "± 20722.950319242413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325489.42553191487,
            "unit": "ns",
            "range": "± 23068.297372973655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321733.1842105263,
            "unit": "ns",
            "range": "± 11057.97781194526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5622364.25,
            "unit": "ns",
            "range": "± 160406.94091813162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3977814.34,
            "unit": "ns",
            "range": "± 102202.82438435839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18525.433333333334,
            "unit": "ns",
            "range": "± 2863.678243060013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99606.6105263158,
            "unit": "ns",
            "range": "± 22914.102671505894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115561.52173913043,
            "unit": "ns",
            "range": "± 25173.20325374717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 264748.7688172043,
            "unit": "ns",
            "range": "± 34104.294796205904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9122.105263157895,
            "unit": "ns",
            "range": "± 2257.1239159116885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22398.159574468085,
            "unit": "ns",
            "range": "± 3442.3418996131218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1500784.6,
            "unit": "ns",
            "range": "± 136123.39440269125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964803.194117647,
            "unit": "ns",
            "range": "± 159567.38944244452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2589920.574468085,
            "unit": "ns",
            "range": "± 277584.9342937981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7322666.955056179,
            "unit": "ns",
            "range": "± 632563.7856906014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3684849.8372093025,
            "unit": "ns",
            "range": "± 473147.0912876786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575271.202247191,
            "unit": "ns",
            "range": "± 257197.79195358494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5028579.096774193,
            "unit": "ns",
            "range": "± 749671.5429256924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4844804.673469388,
            "unit": "ns",
            "range": "± 423333.83466364496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8860475.341269841,
            "unit": "ns",
            "range": "± 365697.8427287455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7407728.376412899,
            "unit": "ns",
            "range": "± 418242.6243695502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2436713.717789447,
            "unit": "ns",
            "range": "± 108290.76220118902"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1473307.465029762,
            "unit": "ns",
            "range": "± 61518.32677151501"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2854331.671549479,
            "unit": "ns",
            "range": "± 210509.07996579347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022423.97265625,
            "unit": "ns",
            "range": "± 56585.46026388358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787348.7105514172,
            "unit": "ns",
            "range": "± 25388.480998043942"
          }
        ]
      },
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
          "id": "630fdad82a887960678a5793dfc61d56289ee410",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:21:35+09:00",
          "tree_id": "0e4718ba6facc794d72d1d3aaec75ab0cdff5b0f",
          "url": "https://github.com/planetarium/libplanet/commit/630fdad82a887960678a5793dfc61d56289ee410"
        },
        "date": 1680680300089,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8206204.686813187,
            "unit": "ns",
            "range": "± 471600.06651559024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18835850.625,
            "unit": "ns",
            "range": "± 366945.83564514894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50165469.9137931,
            "unit": "ns",
            "range": "± 1976988.3853380599"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102524666.6923077,
            "unit": "ns",
            "range": "± 1234106.2650577263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201410005.42307693,
            "unit": "ns",
            "range": "± 1949467.1163754151"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59175.10638297872,
            "unit": "ns",
            "range": "± 9949.635445008073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392761.40425531915,
            "unit": "ns",
            "range": "± 42604.95810091893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343281.28125,
            "unit": "ns",
            "range": "± 45475.45727271108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304995.4210526316,
            "unit": "ns",
            "range": "± 33868.096821495456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5915638.025316455,
            "unit": "ns",
            "range": "± 293648.1417129366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4393730.819444444,
            "unit": "ns",
            "range": "± 216472.03230410238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19523.335051546394,
            "unit": "ns",
            "range": "± 3492.1376025306604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102778.02173913043,
            "unit": "ns",
            "range": "± 16998.194375329997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101056.01041666667,
            "unit": "ns",
            "range": "± 13781.584310417777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 242007.15625,
            "unit": "ns",
            "range": "± 21097.84430161833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7074.382978723404,
            "unit": "ns",
            "range": "± 1158.6158418364876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17816.452631578948,
            "unit": "ns",
            "range": "± 3096.4487131826772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470729.6397849463,
            "unit": "ns",
            "range": "± 123881.79451059399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2924425.597826087,
            "unit": "ns",
            "range": "± 269986.372317301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2483902.376344086,
            "unit": "ns",
            "range": "± 294396.289912635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6574059.44,
            "unit": "ns",
            "range": "± 325869.8406858606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333183.1,
            "unit": "ns",
            "range": "± 234396.06653008872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3496144.197674419,
            "unit": "ns",
            "range": "± 272995.33152758237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4552339.747252747,
            "unit": "ns",
            "range": "± 284118.48443749244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4674568.510869565,
            "unit": "ns",
            "range": "± 361085.4564937607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9359555.924731182,
            "unit": "ns",
            "range": "± 598633.4304670648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6090306.907451923,
            "unit": "ns",
            "range": "± 71475.95276628862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901508.5620659722,
            "unit": "ns",
            "range": "± 38122.34196182595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1222584.88671875,
            "unit": "ns",
            "range": "± 7210.075079426689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2422231.35546875,
            "unit": "ns",
            "range": "± 22713.836600002465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822546.0648716518,
            "unit": "ns",
            "range": "± 7882.951885945785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693836.8911830357,
            "unit": "ns",
            "range": "± 5238.618357099777"
          }
        ]
      },
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
          "id": "a5d51a6bcad69927aab3783ce460ee9d0b62fa41",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:39:45+09:00",
          "tree_id": "231eef32ef7a06676c1bab568527df42b407cb29",
          "url": "https://github.com/planetarium/libplanet/commit/a5d51a6bcad69927aab3783ce460ee9d0b62fa41"
        },
        "date": 1680681480805,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9292301.5,
            "unit": "ns",
            "range": "± 765262.7458569739"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22429882.18478261,
            "unit": "ns",
            "range": "± 1261952.648213286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56810036.08585858,
            "unit": "ns",
            "range": "± 3783890.156402141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112950276.28846154,
            "unit": "ns",
            "range": "± 4631973.013833998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 250154696.0952381,
            "unit": "ns",
            "range": "± 5727887.269170929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75312.68674698795,
            "unit": "ns",
            "range": "± 4785.22167829579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399061.8153846154,
            "unit": "ns",
            "range": "± 18595.012213370137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329499.13333333336,
            "unit": "ns",
            "range": "± 19172.69588778839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322406.5,
            "unit": "ns",
            "range": "± 11798.248316310915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5726339.928571428,
            "unit": "ns",
            "range": "± 49446.65079225719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4010442.5147058824,
            "unit": "ns",
            "range": "± 159763.62618311742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21544.885057471263,
            "unit": "ns",
            "range": "± 1920.9284057775196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 129126.68817204301,
            "unit": "ns",
            "range": "± 19879.77391447993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132145.4,
            "unit": "ns",
            "range": "± 18747.689269928647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 293516.36734693876,
            "unit": "ns",
            "range": "± 38236.8711705758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9567.855670103092,
            "unit": "ns",
            "range": "± 1106.843851808024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26171.578651685395,
            "unit": "ns",
            "range": "± 4484.118014586996"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598504.3469387756,
            "unit": "ns",
            "range": "± 147444.21965101568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3078482.2786885244,
            "unit": "ns",
            "range": "± 138320.90810203293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2538423.4065934066,
            "unit": "ns",
            "range": "± 144086.20510606206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7130526.06701031,
            "unit": "ns",
            "range": "± 486296.55729586503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3791159.414893617,
            "unit": "ns",
            "range": "± 344933.69346677704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789124.24,
            "unit": "ns",
            "range": "± 328541.6069016642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4875362.2105263155,
            "unit": "ns",
            "range": "± 412322.73628729786"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5163235.636363637,
            "unit": "ns",
            "range": "± 478754.7130983109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9807646.02247191,
            "unit": "ns",
            "range": "± 925313.8068898568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7840608.666015625,
            "unit": "ns",
            "range": "± 239155.96655252844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005195.331752232,
            "unit": "ns",
            "range": "± 32110.460832583867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1332720.8510044643,
            "unit": "ns",
            "range": "± 16132.553356872195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2721769.077421875,
            "unit": "ns",
            "range": "± 61049.46343563359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 955006.6293569711,
            "unit": "ns",
            "range": "± 12853.713231205102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783595.8863002232,
            "unit": "ns",
            "range": "± 10511.562197647228"
          }
        ]
      },
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
          "id": "8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1",
          "message": "tslib: accounts have async getPublicKey i/o publicKey\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T16:41:41+09:00",
          "tree_id": "083841b01eeb4aa37dbed492698016aad0322a24",
          "url": "https://github.com/planetarium/libplanet/commit/8056ce90c481cdbbfdcaeb46df435d23a9cbcbb1"
        },
        "date": 1680681764182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9986513.479166666,
            "unit": "ns",
            "range": "± 2154489.7051139115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20896206.444444444,
            "unit": "ns",
            "range": "± 980082.4547223075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63945416.016853936,
            "unit": "ns",
            "range": "± 15583258.718254285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106647889.65714286,
            "unit": "ns",
            "range": "± 3406182.975065499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212053653.63333333,
            "unit": "ns",
            "range": "± 6129673.23325015"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72349.08695652174,
            "unit": "ns",
            "range": "± 6952.737367716644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 393043.3894736842,
            "unit": "ns",
            "range": "± 29435.872303391825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347500.44329896907,
            "unit": "ns",
            "range": "± 42034.55009497373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309941.8522727273,
            "unit": "ns",
            "range": "± 23805.322533184888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5829654.642857143,
            "unit": "ns",
            "range": "± 409819.6355474281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4715766.132653061,
            "unit": "ns",
            "range": "± 489529.7698777992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22500.670454545456,
            "unit": "ns",
            "range": "± 3868.7578977962303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 109265.93010752689,
            "unit": "ns",
            "range": "± 17271.035184854292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114884.11956521739,
            "unit": "ns",
            "range": "± 17779.341617399237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 267112.9659090909,
            "unit": "ns",
            "range": "± 31037.05128281612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8767.467391304348,
            "unit": "ns",
            "range": "± 1196.6187293956134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22077.05319148936,
            "unit": "ns",
            "range": "± 4963.701739038062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1668695.48989899,
            "unit": "ns",
            "range": "± 217074.98912242262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3519841.125,
            "unit": "ns",
            "range": "± 495725.05535016186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2767498.06185567,
            "unit": "ns",
            "range": "± 316393.48112739745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6876931.70967742,
            "unit": "ns",
            "range": "± 312672.60695957666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3513782.3469387754,
            "unit": "ns",
            "range": "± 355814.2583027674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3674983.3625,
            "unit": "ns",
            "range": "± 190815.9865878307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4552024.378787879,
            "unit": "ns",
            "range": "± 189962.30242945696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4768702.979166667,
            "unit": "ns",
            "range": "± 324332.9307945603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9723549.474226804,
            "unit": "ns",
            "range": "± 1000335.6777318144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7686755.47890625,
            "unit": "ns",
            "range": "± 309171.6111259099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2325763.6146689965,
            "unit": "ns",
            "range": "± 114977.15446664166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1400320.1937839673,
            "unit": "ns",
            "range": "± 32101.664704777657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3355981.00744299,
            "unit": "ns",
            "range": "± 112860.72191559957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919965.3201450893,
            "unit": "ns",
            "range": "± 29868.12121480536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 861962.6692612591,
            "unit": "ns",
            "range": "± 40608.37417416716"
          }
        ]
      },
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
          "id": "d7b24c2de86a7795beb0516b034132901f049711",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:25:50+09:00",
          "tree_id": "dbf942dc4382f805b444e2a8793372e571b21e92",
          "url": "https://github.com/planetarium/libplanet/commit/d7b24c2de86a7795beb0516b034132901f049711"
        },
        "date": 1680684339405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8444409.35,
            "unit": "ns",
            "range": "± 296993.2854008786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21440979.75882353,
            "unit": "ns",
            "range": "± 2030027.9780790098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50241755.22,
            "unit": "ns",
            "range": "± 2009361.7924563712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103688376.38311689,
            "unit": "ns",
            "range": "± 4792307.77149249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208323405.6,
            "unit": "ns",
            "range": "± 4650050.93561462"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67923.07777777778,
            "unit": "ns",
            "range": "± 7793.702939600442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384819.64285714284,
            "unit": "ns",
            "range": "± 26341.85008712749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336389.5833333333,
            "unit": "ns",
            "range": "± 38400.59314856221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292077.8804347826,
            "unit": "ns",
            "range": "± 22289.116938242438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5895903.0322580645,
            "unit": "ns",
            "range": "± 432712.4385251725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4562961.765306123,
            "unit": "ns",
            "range": "± 421213.4621367996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24584.837209302324,
            "unit": "ns",
            "range": "± 3667.1851382079553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106746.77083333333,
            "unit": "ns",
            "range": "± 24529.58464963832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105294.33333333333,
            "unit": "ns",
            "range": "± 18077.582029549412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248075.1717171717,
            "unit": "ns",
            "range": "± 29332.75633633053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8833.536082474227,
            "unit": "ns",
            "range": "± 1913.2188358336482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23831.097826086956,
            "unit": "ns",
            "range": "± 3297.5284519506113"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1640100.9175257732,
            "unit": "ns",
            "range": "± 171169.78382044815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3071595.8630136987,
            "unit": "ns",
            "range": "± 152148.22464361257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2390990.143678161,
            "unit": "ns",
            "range": "± 150869.71329517037"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6438368.5,
            "unit": "ns",
            "range": "± 170734.03852093077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3382963.2101449277,
            "unit": "ns",
            "range": "± 162578.15476202982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3534493.510638298,
            "unit": "ns",
            "range": "± 202507.5831249605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4500491.974025974,
            "unit": "ns",
            "range": "± 228055.76585522914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4727272.321052631,
            "unit": "ns",
            "range": "± 354615.1866388613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9295280.043478262,
            "unit": "ns",
            "range": "± 604705.4124223804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7611239.174183238,
            "unit": "ns",
            "range": "± 778348.3600505562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2095570.800078125,
            "unit": "ns",
            "range": "± 84283.6502937491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1286717.2857572115,
            "unit": "ns",
            "range": "± 10069.03787267747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2516076.73046875,
            "unit": "ns",
            "range": "± 24774.40922290238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 898078.942679269,
            "unit": "ns",
            "range": "± 38406.9606687088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801086.0490910456,
            "unit": "ns",
            "range": "± 21217.76566236163"
          }
        ]
      },
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
          "id": "80d4528f5fe2a2608955fb3c31b4149d8ad13d80",
          "message": "Web3Account\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-05T17:41:58+09:00",
          "tree_id": "574200cd6e8e2d3d35e7eec95a0ed9e105c50d2c",
          "url": "https://github.com/planetarium/libplanet/commit/80d4528f5fe2a2608955fb3c31b4149d8ad13d80"
        },
        "date": 1680685347757,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8769369,
            "unit": "ns",
            "range": "± 261559.5745087993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21084534.833333332,
            "unit": "ns",
            "range": "± 819012.1064097642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53477774.32926829,
            "unit": "ns",
            "range": "± 2816759.095931683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108536464.28571428,
            "unit": "ns",
            "range": "± 5273397.305318031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210867349.91666666,
            "unit": "ns",
            "range": "± 2576289.5988731706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66250.63684210526,
            "unit": "ns",
            "range": "± 7736.666330313525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396395.6978021978,
            "unit": "ns",
            "range": "± 29278.3468955851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 347455.2978723404,
            "unit": "ns",
            "range": "± 35142.94657869341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320419.55555555556,
            "unit": "ns",
            "range": "± 20097.62098510478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5824729.5245901635,
            "unit": "ns",
            "range": "± 253259.46752350027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4227089.619047619,
            "unit": "ns",
            "range": "± 96982.62001280239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23027.902173913044,
            "unit": "ns",
            "range": "± 4297.0342853723605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104213.06382978724,
            "unit": "ns",
            "range": "± 17449.725481285546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119127,
            "unit": "ns",
            "range": "± 17062.504372959815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252611.84782608695,
            "unit": "ns",
            "range": "± 23739.992991581206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7666.71875,
            "unit": "ns",
            "range": "± 1059.4893974097542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21297.147368421054,
            "unit": "ns",
            "range": "± 4721.831892905552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1649657.29,
            "unit": "ns",
            "range": "± 169600.06591713597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3027957.686567164,
            "unit": "ns",
            "range": "± 142440.53153979615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658764.758241758,
            "unit": "ns",
            "range": "± 279995.0958350418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7335667.684782608,
            "unit": "ns",
            "range": "± 706604.9649712804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3439928.25,
            "unit": "ns",
            "range": "± 272517.4536382849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3519791.6354166665,
            "unit": "ns",
            "range": "± 231786.5225942826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4797122.802197802,
            "unit": "ns",
            "range": "± 425591.7418975665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4993029.34375,
            "unit": "ns",
            "range": "± 688606.7206222599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9271955.064516129,
            "unit": "ns",
            "range": "± 404553.0637731694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6940424.395432692,
            "unit": "ns",
            "range": "± 87251.12437035792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061441.143329327,
            "unit": "ns",
            "range": "± 33596.962143831704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1333956.8481069712,
            "unit": "ns",
            "range": "± 16592.74375102436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2780870.185546875,
            "unit": "ns",
            "range": "± 221373.02090044998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890500.545024671,
            "unit": "ns",
            "range": "± 19415.924784247916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 813965.7909532912,
            "unit": "ns",
            "range": "± 46155.29864070729"
          }
        ]
      }
    ]
  }
}