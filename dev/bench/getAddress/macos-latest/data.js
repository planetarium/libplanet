window.BENCHMARK_DATA = {
  "lastUpdate": 1681448250064,
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
          "id": "1a2a110d339b3b459fb1798d0943487ca75d6cba",
          "message": "tslib: Account.getAddress() async\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:28:20+09:00",
          "tree_id": "ef04124a7bf47b271ebd0039c0734c3f5d9f27ca",
          "url": "https://github.com/planetarium/libplanet/commit/1a2a110d339b3b459fb1798d0943487ca75d6cba"
        },
        "date": 1681375503963,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7491466.2894736845,
            "unit": "ns",
            "range": "± 257271.9711521944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18263212.14285714,
            "unit": "ns",
            "range": "± 286225.25980204344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46323040.166666664,
            "unit": "ns",
            "range": "± 1347174.5068438184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91531964.2,
            "unit": "ns",
            "range": "± 1647918.5781257174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 189648625.07142857,
            "unit": "ns",
            "range": "± 2315521.4564091163"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64451.42857142857,
            "unit": "ns",
            "range": "± 13348.196770760005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 351689.15873015876,
            "unit": "ns",
            "range": "± 15502.084161863371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325908.47777777776,
            "unit": "ns",
            "range": "± 21854.7982134116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295575.9381443299,
            "unit": "ns",
            "range": "± 20207.55493817764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5382756.466666667,
            "unit": "ns",
            "range": "± 95556.66622545918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3907014.9516129033,
            "unit": "ns",
            "range": "± 117509.91429657862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21585.701030927834,
            "unit": "ns",
            "range": "± 3750.4227127444933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93710.34343434343,
            "unit": "ns",
            "range": "± 13722.612763775081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97089.76262626263,
            "unit": "ns",
            "range": "± 20097.8672782563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218918.4375,
            "unit": "ns",
            "range": "± 21076.895018910112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6197.615789473684,
            "unit": "ns",
            "range": "± 2124.5046574770454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16325.397727272728,
            "unit": "ns",
            "range": "± 2280.47152333249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588256.9591836734,
            "unit": "ns",
            "range": "± 140873.68452611097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3139324.2916666665,
            "unit": "ns",
            "range": "± 121737.84200764804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2713543.2989690723,
            "unit": "ns",
            "range": "± 324658.2238790756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7032184.84375,
            "unit": "ns",
            "range": "± 182045.01522728885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3092961.371794872,
            "unit": "ns",
            "range": "± 98031.22835638691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3218934.5588235296,
            "unit": "ns",
            "range": "± 103005.09821192322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4205496.715686275,
            "unit": "ns",
            "range": "± 170205.17785946626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4188745.7555555557,
            "unit": "ns",
            "range": "± 240028.84002226472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7816175.280487805,
            "unit": "ns",
            "range": "± 258752.58769628874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6224017.700120192,
            "unit": "ns",
            "range": "± 28689.540643294335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924183.6391927083,
            "unit": "ns",
            "range": "± 10750.947975794355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1276338.0970552885,
            "unit": "ns",
            "range": "± 4898.500560499351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2500506.5270647323,
            "unit": "ns",
            "range": "± 15423.797153377214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782496.4553571428,
            "unit": "ns",
            "range": "± 3683.2430266376373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774684.6157924107,
            "unit": "ns",
            "range": "± 1924.3158400214206"
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
          "id": "74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63",
          "message": "temp: account-web3: Web3KeyMetadata, need changelog\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-13T17:46:52+09:00",
          "tree_id": "4ea28583e3815c059ee13bdf2975491a7576b2ba",
          "url": "https://github.com/planetarium/libplanet/commit/74ea8a2bc24b33c0bec2bfb76f78a8b124ae9f63"
        },
        "date": 1681377715404,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8318790.728571429,
            "unit": "ns",
            "range": "± 404143.03061505634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20726519.8,
            "unit": "ns",
            "range": "± 1000649.9526043365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51406106.1884058,
            "unit": "ns",
            "range": "± 2469197.713365168"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103827934.55102041,
            "unit": "ns",
            "range": "± 4125401.021440406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207211577.94444445,
            "unit": "ns",
            "range": "± 4231244.427387645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63435.78947368421,
            "unit": "ns",
            "range": "± 10443.675534916403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375134.8939393939,
            "unit": "ns",
            "range": "± 17570.52852331364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339604.6264367816,
            "unit": "ns",
            "range": "± 32312.691295931287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334507.5326086957,
            "unit": "ns",
            "range": "± 40885.38603511875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6023400.556701031,
            "unit": "ns",
            "range": "± 397267.9460262245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4214302.540816327,
            "unit": "ns",
            "range": "± 258535.72298665092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20828.933333333334,
            "unit": "ns",
            "range": "± 3887.344415182065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114783.7,
            "unit": "ns",
            "range": "± 20546.056414382267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128449.65168539326,
            "unit": "ns",
            "range": "± 16347.199589268774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 286947.1789473684,
            "unit": "ns",
            "range": "± 41130.112027093404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7981.663265306122,
            "unit": "ns",
            "range": "± 1837.5001224146256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20054.0625,
            "unit": "ns",
            "range": "± 2987.774982059568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1658481.116161616,
            "unit": "ns",
            "range": "± 201812.8830984896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2908415.2666666666,
            "unit": "ns",
            "range": "± 92517.64893408667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2592534.138297872,
            "unit": "ns",
            "range": "± 312019.59460953384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6774883.109756097,
            "unit": "ns",
            "range": "± 242983.55638878918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3282775.276595745,
            "unit": "ns",
            "range": "± 216785.3004872255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3635254.1404494382,
            "unit": "ns",
            "range": "± 328794.5213746466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4640039.3,
            "unit": "ns",
            "range": "± 216786.46210709863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4651653.225806451,
            "unit": "ns",
            "range": "± 138928.35686585843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8389163.18367347,
            "unit": "ns",
            "range": "± 318187.67894073884"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7812781.555318813,
            "unit": "ns",
            "range": "± 807494.4444645866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2129420.916846742,
            "unit": "ns",
            "range": "± 127705.49712380627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357848.7587280273,
            "unit": "ns",
            "range": "± 42255.92727476108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3236748.8917123065,
            "unit": "ns",
            "range": "± 194085.9448659812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 931484.2955932617,
            "unit": "ns",
            "range": "± 13638.684619704753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788171.980375744,
            "unit": "ns",
            "range": "± 18143.93317276135"
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
          "id": "c5c75bf117d5a8b8d07f9c981610432244c0fcb7",
          "message": "account-web3: Web3KeyMetadata\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-14T13:29:17+09:00",
          "tree_id": "5fbc6e858cf05e77a6573e717a28fdac3fe8cb7f",
          "url": "https://github.com/planetarium/libplanet/commit/c5c75bf117d5a8b8d07f9c981610432244c0fcb7"
        },
        "date": 1681447756771,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7793086.8,
            "unit": "ns",
            "range": "± 137543.585729449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21585823.104166668,
            "unit": "ns",
            "range": "± 2050889.8202698696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50391849.4,
            "unit": "ns",
            "range": "± 1474297.6296289328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102157650.1904762,
            "unit": "ns",
            "range": "± 4998900.529155598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210716570.0882353,
            "unit": "ns",
            "range": "± 9595877.636619534"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70747.39130434782,
            "unit": "ns",
            "range": "± 10200.058410688735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401796.45604395604,
            "unit": "ns",
            "range": "± 38521.95843005566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337411.7078651685,
            "unit": "ns",
            "range": "± 29850.926204681215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313679.82608695654,
            "unit": "ns",
            "range": "± 28303.59474435957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5714751.318181818,
            "unit": "ns",
            "range": "± 481142.4189612651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4011462.346153846,
            "unit": "ns",
            "range": "± 101553.04820238231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21212.948979591838,
            "unit": "ns",
            "range": "± 4157.007977772834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115523.97872340426,
            "unit": "ns",
            "range": "± 15579.901961800897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 123507.15789473684,
            "unit": "ns",
            "range": "± 6294.888585834557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 263756.28723404254,
            "unit": "ns",
            "range": "± 22897.435614445665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9428.979166666666,
            "unit": "ns",
            "range": "± 1178.776073366079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23816.408163265307,
            "unit": "ns",
            "range": "± 2460.4616115669287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1591943.4639175257,
            "unit": "ns",
            "range": "± 191203.25472147335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3207385.445652174,
            "unit": "ns",
            "range": "± 300281.7447700773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2697867.7391304346,
            "unit": "ns",
            "range": "± 354639.618431762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7925964.831460674,
            "unit": "ns",
            "range": "± 1552886.2818302484"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358828.489361702,
            "unit": "ns",
            "range": "± 240251.21167208112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437498.4210526315,
            "unit": "ns",
            "range": "± 241433.92213075163"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4526148.208333333,
            "unit": "ns",
            "range": "± 294401.3917406647"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4552880.208791208,
            "unit": "ns",
            "range": "± 370203.33918847947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8484407.805555556,
            "unit": "ns",
            "range": "± 415743.46057037637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6928683.373007015,
            "unit": "ns",
            "range": "± 495947.4853308698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2013427.01375,
            "unit": "ns",
            "range": "± 52939.98438629185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1315579.119140625,
            "unit": "ns",
            "range": "± 14576.579900568258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592594.0706676138,
            "unit": "ns",
            "range": "± 57753.07564785211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 878635.6100027902,
            "unit": "ns",
            "range": "± 15093.662725088061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735976.0479910715,
            "unit": "ns",
            "range": "± 10548.676780744769"
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
          "id": "4068406c1ae0c9f696a1be949d4c940c74935ec9",
          "message": "account-web3: Web3KeyMetadata\n\nCo-authored-by: Hong Minhee (洪 民憙) <hong.minhee@planetariumhq.com>",
          "timestamp": "2023-04-14T13:33:09+09:00",
          "tree_id": "10e96fc60eda2c1a7e345db24dd4974122b0a4a3",
          "url": "https://github.com/planetarium/libplanet/commit/4068406c1ae0c9f696a1be949d4c940c74935ec9"
        },
        "date": 1681448207872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9760889.301075269,
            "unit": "ns",
            "range": "± 1351650.318939855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22488680.333333332,
            "unit": "ns",
            "range": "± 1246592.0633460893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56286679.5,
            "unit": "ns",
            "range": "± 2868301.6484763976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120765561.25,
            "unit": "ns",
            "range": "± 7985292.899405296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232433460.02808988,
            "unit": "ns",
            "range": "± 16855992.21760287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79404.50561797753,
            "unit": "ns",
            "range": "± 12703.345983819663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 445794.7021276596,
            "unit": "ns",
            "range": "± 57710.4946949151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 351723.6382978723,
            "unit": "ns",
            "range": "± 37326.299276077916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 318729.4456521739,
            "unit": "ns",
            "range": "± 34430.27405180981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5824415.491525424,
            "unit": "ns",
            "range": "± 255676.94382893137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4171445.8441558443,
            "unit": "ns",
            "range": "± 204874.9955232693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18681.55617977528,
            "unit": "ns",
            "range": "± 2979.541157321309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97933.26530612246,
            "unit": "ns",
            "range": "± 18264.573505312102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105509.3829787234,
            "unit": "ns",
            "range": "± 12685.889277898692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258306.37096774194,
            "unit": "ns",
            "range": "± 30739.33324296902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8782.967391304348,
            "unit": "ns",
            "range": "± 1518.1658138969628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18320.77894736842,
            "unit": "ns",
            "range": "± 3797.0414215542705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1857780.6648351648,
            "unit": "ns",
            "range": "± 338086.1420586397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3359393.5222222223,
            "unit": "ns",
            "range": "± 297370.61247813824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2824400.840425532,
            "unit": "ns",
            "range": "± 303254.9160415841"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7169976.22368421,
            "unit": "ns",
            "range": "± 341325.1792522237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3575479.0212765955,
            "unit": "ns",
            "range": "± 398284.5485418666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3712920,
            "unit": "ns",
            "range": "± 370845.2883647715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4830642.988636363,
            "unit": "ns",
            "range": "± 265458.873165763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4675543.18556701,
            "unit": "ns",
            "range": "± 297632.84665249096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9323156.541666666,
            "unit": "ns",
            "range": "± 810395.9486498581"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6974141.640943877,
            "unit": "ns",
            "range": "± 519711.4993765578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2012273.0739182692,
            "unit": "ns",
            "range": "± 28690.69934271021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365014.7392578125,
            "unit": "ns",
            "range": "± 30132.37114924229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2744505.5461516203,
            "unit": "ns",
            "range": "± 115598.23450052114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 890161.0979132401,
            "unit": "ns",
            "range": "± 19534.347033991628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787977.5702373798,
            "unit": "ns",
            "range": "± 20988.587968313328"
          }
        ]
      }
    ]
  }
}