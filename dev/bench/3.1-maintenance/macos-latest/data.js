window.BENCHMARK_DATA = {
  "lastUpdate": 1691650942985,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509048402,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8583366.57142857,
            "unit": "ns",
            "range": "± 79560.32005457755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21438703.566666666,
            "unit": "ns",
            "range": "± 274609.94122793427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52731801.766666666,
            "unit": "ns",
            "range": "± 465600.84786273236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106380173.91666667,
            "unit": "ns",
            "range": "± 278832.62723246013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217314814.63333333,
            "unit": "ns",
            "range": "± 2623061.1640420617"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60095.24731182796,
            "unit": "ns",
            "range": "± 11947.810133765928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317338.52857142856,
            "unit": "ns",
            "range": "± 15313.124445448111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 310665.72164948453,
            "unit": "ns",
            "range": "± 21877.978250468295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309429.78571428574,
            "unit": "ns",
            "range": "± 18561.05865548544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4047173.1363636362,
            "unit": "ns",
            "range": "± 95879.68215551417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3766292.1739130435,
            "unit": "ns",
            "range": "± 93480.13433960285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20287.815789473683,
            "unit": "ns",
            "range": "± 2861.6205617869145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87369.58888888889,
            "unit": "ns",
            "range": "± 6337.512869289852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91203.47474747474,
            "unit": "ns",
            "range": "± 14749.234944768777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108582.6530612245,
            "unit": "ns",
            "range": "± 18948.64070545901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5715.333333333333,
            "unit": "ns",
            "range": "± 1016.3833577073968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20477.367346938776,
            "unit": "ns",
            "range": "± 4483.093368682483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1464567,
            "unit": "ns",
            "range": "± 145708.525108445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2773628.593023256,
            "unit": "ns",
            "range": "± 140893.31216085437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1984382.297979798,
            "unit": "ns",
            "range": "± 179850.3590395433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5760218.02247191,
            "unit": "ns",
            "range": "± 316738.21965203446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376967.6296296297,
            "unit": "ns",
            "range": "± 91968.0905854551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3667676.8181818184,
            "unit": "ns",
            "range": "± 116221.49661340279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4584146.934782608,
            "unit": "ns",
            "range": "± 167168.17475244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3899923.275,
            "unit": "ns",
            "range": "± 203797.9558938354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7068366.714285715,
            "unit": "ns",
            "range": "± 228174.78314474467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6198461.865885417,
            "unit": "ns",
            "range": "± 51611.34387791149"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924498.4001302083,
            "unit": "ns",
            "range": "± 14364.503912236192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284098.1307198661,
            "unit": "ns",
            "range": "± 19876.592729319054"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2624402.8795072115,
            "unit": "ns",
            "range": "± 41387.62516991345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871318.515234375,
            "unit": "ns",
            "range": "± 7625.782080871088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 713612.5549665178,
            "unit": "ns",
            "range": "± 1725.3144337356864"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509399596,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8571589.25,
            "unit": "ns",
            "range": "± 284822.2493772338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21922246.692307692,
            "unit": "ns",
            "range": "± 907443.7078436312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51770738.705882356,
            "unit": "ns",
            "range": "± 999572.7179537617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105898410.3902439,
            "unit": "ns",
            "range": "± 3816271.973916016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208218306.07142857,
            "unit": "ns",
            "range": "± 2284101.0343270963"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69308.12765957447,
            "unit": "ns",
            "range": "± 9155.910458399943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 338354.0625,
            "unit": "ns",
            "range": "± 38702.24357995759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322428.6354166667,
            "unit": "ns",
            "range": "± 37540.01441412946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297321.7311827957,
            "unit": "ns",
            "range": "± 18161.840515056374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4186748.3225806453,
            "unit": "ns",
            "range": "± 190332.12769843644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716716.2916666665,
            "unit": "ns",
            "range": "± 94663.47939295702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18370.209677419356,
            "unit": "ns",
            "range": "± 3515.4191833068576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100469.76923076923,
            "unit": "ns",
            "range": "± 16788.796344306473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96780.39690721649,
            "unit": "ns",
            "range": "± 23054.160088024484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103812.96391752578,
            "unit": "ns",
            "range": "± 21922.91513227933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5584.297872340426,
            "unit": "ns",
            "range": "± 1438.1388422794387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16984.733333333334,
            "unit": "ns",
            "range": "± 3162.9312276054625"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1719557.4213483145,
            "unit": "ns",
            "range": "± 195374.5492846092"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3269975.6785714286,
            "unit": "ns",
            "range": "± 396895.5861632064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2248927.095505618,
            "unit": "ns",
            "range": "± 222278.52803560547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7605897.89010989,
            "unit": "ns",
            "range": "± 2011710.4542557886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721881.824742268,
            "unit": "ns",
            "range": "± 403863.5902848007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3919498.005154639,
            "unit": "ns",
            "range": "± 379625.87181340257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4763936.785714285,
            "unit": "ns",
            "range": "± 375779.2681975038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4381285.9130434785,
            "unit": "ns",
            "range": "± 430247.63501408364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7549417.31443299,
            "unit": "ns",
            "range": "± 535374.0602662646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7191283.348958333,
            "unit": "ns",
            "range": "± 169725.2131414947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069155.6385416666,
            "unit": "ns",
            "range": "± 58573.594810384755"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378426.8973214286,
            "unit": "ns",
            "range": "± 23875.56378652488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3268097.080436862,
            "unit": "ns",
            "range": "± 130284.9128994271"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887462.1707899305,
            "unit": "ns",
            "range": "± 33504.395360509465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 839901.0643404447,
            "unit": "ns",
            "range": "± 22459.16383905602"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7d8fe2b4efcbda008fa422ca3ad0ed14890a669",
          "message": "Merge pull request #3360 from moreal/cherry-pick-network-bug\n\nCherry-pick #3353 to 3.1.1 version",
          "timestamp": "2023-08-09T19:58:55+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/planetarium/libplanet/commit/e7d8fe2b4efcbda008fa422ca3ad0ed14890a669"
        },
        "date": 1691579939807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8628972.82857143,
            "unit": "ns",
            "range": "± 401637.20059183455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21200544.462962963,
            "unit": "ns",
            "range": "± 589365.3355843882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53696502.51428571,
            "unit": "ns",
            "range": "± 1755657.5069790864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103855771.14285715,
            "unit": "ns",
            "range": "± 1294250.761569655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211749938.23333332,
            "unit": "ns",
            "range": "± 2298319.8718983354"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74078.87931034483,
            "unit": "ns",
            "range": "± 6617.473127033373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340938.376344086,
            "unit": "ns",
            "range": "± 31300.990549305225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350769.1354166667,
            "unit": "ns",
            "range": "± 38650.71038541541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 327678.5208333333,
            "unit": "ns",
            "range": "± 25788.76629117054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4409137.265957447,
            "unit": "ns",
            "range": "± 261625.42431085918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3953351,
            "unit": "ns",
            "range": "± 185840.01533693107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23990.106382978724,
            "unit": "ns",
            "range": "± 3258.6550476759217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110755.01578947369,
            "unit": "ns",
            "range": "± 8850.532851927388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115543.59090909091,
            "unit": "ns",
            "range": "± 4310.314264796801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116604.29347826086,
            "unit": "ns",
            "range": "± 9036.085006991876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7787.280219780219,
            "unit": "ns",
            "range": "± 968.7126142142101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23100.227272727272,
            "unit": "ns",
            "range": "± 4532.78272533658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1567719.1578947369,
            "unit": "ns",
            "range": "± 188781.83083290546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023888.4583333335,
            "unit": "ns",
            "range": "± 255451.36724480524"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2067487.9105263157,
            "unit": "ns",
            "range": "± 208785.15881792828"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5768134.710144928,
            "unit": "ns",
            "range": "± 260866.5701751456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3369190.4784946237,
            "unit": "ns",
            "range": "± 208769.7270879828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3631086.0833333335,
            "unit": "ns",
            "range": "± 53109.90224132721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4606352.776595744,
            "unit": "ns",
            "range": "± 258209.8250943002"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4182323.1224489794,
            "unit": "ns",
            "range": "± 307858.66938139626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7418734.935294118,
            "unit": "ns",
            "range": "± 399676.6097493979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7713125.884497549,
            "unit": "ns",
            "range": "± 312467.07714150945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2238245.5863517993,
            "unit": "ns",
            "range": "± 70148.41271133977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501108.3425,
            "unit": "ns",
            "range": "± 40041.496564278474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3241374.284296875,
            "unit": "ns",
            "range": "± 226445.4640966984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 901919.8966362848,
            "unit": "ns",
            "range": "± 32736.256980009366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 874677.284765625,
            "unit": "ns",
            "range": "± 31052.893954349613"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69bac89710a373b9bf4405b81353d1f99b79f3eb",
          "message": "Merge pull request #3363 from riemannulus/3.1-maintenance\n\n🚀  Release 3.1.1",
          "timestamp": "2023-08-09T20:17:25+09:00",
          "tree_id": "4275059f286345ce564096eb8fa9e68fb3c9d947",
          "url": "https://github.com/planetarium/libplanet/commit/69bac89710a373b9bf4405b81353d1f99b79f3eb"
        },
        "date": 1691580718890,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7712104.2,
            "unit": "ns",
            "range": "± 125437.51334611645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18635666,
            "unit": "ns",
            "range": "± 214888.18063503716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46681731.35714286,
            "unit": "ns",
            "range": "± 723306.9929942618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93400967.61538461,
            "unit": "ns",
            "range": "± 667444.4477879212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 187658155.2,
            "unit": "ns",
            "range": "± 1586567.1796134121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53713.82608695652,
            "unit": "ns",
            "range": "± 5050.613053004568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298933.5714285714,
            "unit": "ns",
            "range": "± 15293.359699752538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283316.4810126582,
            "unit": "ns",
            "range": "± 14725.361634896477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279933.868852459,
            "unit": "ns",
            "range": "± 12442.892776568491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4032132.3571428573,
            "unit": "ns",
            "range": "± 68660.97527440073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3525645.2,
            "unit": "ns",
            "range": "± 63135.05468687174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17093.222222222223,
            "unit": "ns",
            "range": "± 1556.322384916685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87970.62121212122,
            "unit": "ns",
            "range": "± 8324.361963995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94856.85858585859,
            "unit": "ns",
            "range": "± 15957.742475631494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115004.37804878049,
            "unit": "ns",
            "range": "± 7360.789610824429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6581.580645161291,
            "unit": "ns",
            "range": "± 1044.1731211885424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17103.774193548386,
            "unit": "ns",
            "range": "± 1781.7113666667215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467898.0107526882,
            "unit": "ns",
            "range": "± 142846.4611097383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2761395.6117647057,
            "unit": "ns",
            "range": "± 148105.23566129577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1995386.375,
            "unit": "ns",
            "range": "± 215781.97232149082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5631724.382352941,
            "unit": "ns",
            "range": "± 249253.5853571397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3084309.0379746836,
            "unit": "ns",
            "range": "± 155585.4269931048"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3330045.6666666665,
            "unit": "ns",
            "range": "± 141384.59005446473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4117339.523255814,
            "unit": "ns",
            "range": "± 150159.08353499923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3644271.2702702703,
            "unit": "ns",
            "range": "± 171444.19243129555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6913501.344262295,
            "unit": "ns",
            "range": "± 311829.8896165924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6646431.35,
            "unit": "ns",
            "range": "± 46335.08731209923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2030090.1223958333,
            "unit": "ns",
            "range": "± 7882.047420289047"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1267646.7580729167,
            "unit": "ns",
            "range": "± 23360.49258448853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2496930.287109375,
            "unit": "ns",
            "range": "± 19257.564147437897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 862576.1897786459,
            "unit": "ns",
            "range": "± 5844.461587891391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 727917.3732421875,
            "unit": "ns",
            "range": "± 7031.8004215464625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d28c1e2dc3a793fefa41a70432581312c7ca839",
          "message": "Merge pull request #3366 from greymistcube/prepare/3.1.2\n\n🔧 Prepare 3.1.2",
          "timestamp": "2023-08-10T15:03:54+09:00",
          "tree_id": "d30ecd7404f1df3761d2e07603c5ace4f72df8b9",
          "url": "https://github.com/planetarium/libplanet/commit/9d28c1e2dc3a793fefa41a70432581312c7ca839"
        },
        "date": 1691648402362,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8447574.535211267,
            "unit": "ns",
            "range": "± 410148.2463237907"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22957391.033333335,
            "unit": "ns",
            "range": "± 3176470.329084146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57838578.5,
            "unit": "ns",
            "range": "± 1637997.8250775933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100565017.53333333,
            "unit": "ns",
            "range": "± 1138980.1267412042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210716576.26666668,
            "unit": "ns",
            "range": "± 2842369.6052646805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61914.979166666664,
            "unit": "ns",
            "range": "± 8243.154507295152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321276.2417582418,
            "unit": "ns",
            "range": "± 19179.98923029512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315444.6382978723,
            "unit": "ns",
            "range": "± 29367.691974802936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 310780.475,
            "unit": "ns",
            "range": "± 10620.893062038449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4111538.5,
            "unit": "ns",
            "range": "± 102890.35136197807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3828382.4545454546,
            "unit": "ns",
            "range": "± 93121.48242240056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19489.360824742267,
            "unit": "ns",
            "range": "± 3445.8964520183495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84544.15217391304,
            "unit": "ns",
            "range": "± 6953.037132950825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84777.6170212766,
            "unit": "ns",
            "range": "± 11303.690881535045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113186.65625,
            "unit": "ns",
            "range": "± 15873.21144658385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6067.193548387097,
            "unit": "ns",
            "range": "± 809.7135330535721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17956.133333333335,
            "unit": "ns",
            "range": "± 1425.9165114945577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1689492.8979591837,
            "unit": "ns",
            "range": "± 214891.33763636008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2858107.595744681,
            "unit": "ns",
            "range": "± 162684.3735501334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2020153.293814433,
            "unit": "ns",
            "range": "± 140192.39188031465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5718067.039215687,
            "unit": "ns",
            "range": "± 229262.49132110216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3381063.9891304346,
            "unit": "ns",
            "range": "± 195267.4075340987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3513224.172413793,
            "unit": "ns",
            "range": "± 194199.31471289566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4531063.617647059,
            "unit": "ns",
            "range": "± 182097.11187096263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4010621.652777778,
            "unit": "ns",
            "range": "± 196922.7868376126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7296486.224489796,
            "unit": "ns",
            "range": "± 287119.8729519944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6496710.353027344,
            "unit": "ns",
            "range": "± 113745.4532769019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2017672.9910714286,
            "unit": "ns",
            "range": "± 16666.04854363474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1305836.2391927084,
            "unit": "ns",
            "range": "± 13985.707808375108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2699074.777083333,
            "unit": "ns",
            "range": "± 28697.492285025608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813395.1326822917,
            "unit": "ns",
            "range": "± 5538.455506110155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826659.2436147836,
            "unit": "ns",
            "range": "± 8424.637410594893"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24",
          "message": "Merge pull request #3367 from greymistcube/backport/bencodex-bump\n\n🔀 ⬆️ Backport Bencodex bump to 0.14.0",
          "timestamp": "2023-08-10T15:18:00+09:00",
          "tree_id": "2fd4fb29c11262bfa240ed8ebc6a274ff8869231",
          "url": "https://github.com/planetarium/libplanet/commit/d3ebc7aea8d3bd73c422cee6bd4bb8f0def50c24"
        },
        "date": 1691649413781,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8873474.429577464,
            "unit": "ns",
            "range": "± 434767.8446658408"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22075191.326666668,
            "unit": "ns",
            "range": "± 1111036.8580553466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54926168.01428571,
            "unit": "ns",
            "range": "± 1800019.4022538525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108868543.34615384,
            "unit": "ns",
            "range": "± 2973274.6266408283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219552445.65,
            "unit": "ns",
            "range": "± 4889018.727803117"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78811.38095238095,
            "unit": "ns",
            "range": "± 4821.169356241339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349284.45789473684,
            "unit": "ns",
            "range": "± 35289.68414149833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344431.6041666667,
            "unit": "ns",
            "range": "± 42070.86168071027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315409.64835164836,
            "unit": "ns",
            "range": "± 23463.316038433568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4334182.56741573,
            "unit": "ns",
            "range": "± 339560.38029640744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3782761.42,
            "unit": "ns",
            "range": "± 151534.55205844867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24986.21111111111,
            "unit": "ns",
            "range": "± 2931.6211739821233"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126700.01030927835,
            "unit": "ns",
            "range": "± 17964.303116699033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119050.37078651685,
            "unit": "ns",
            "range": "± 10522.58749653899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116416.93956043955,
            "unit": "ns",
            "range": "± 15476.468965072814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8677.352631578948,
            "unit": "ns",
            "range": "± 1078.9537580888555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25101.766666666666,
            "unit": "ns",
            "range": "± 2853.0180355609305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1504875.394736842,
            "unit": "ns",
            "range": "± 135763.69001535187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2973052.269230769,
            "unit": "ns",
            "range": "± 132948.7939719144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2058458.5,
            "unit": "ns",
            "range": "± 197119.7868172354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5618840.765432099,
            "unit": "ns",
            "range": "± 293265.4556988545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3563509.75,
            "unit": "ns",
            "range": "± 358411.1861474752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4149290.0568181816,
            "unit": "ns",
            "range": "± 887044.4717695025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4523420.116666666,
            "unit": "ns",
            "range": "± 185897.8800656007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4114341.376344086,
            "unit": "ns",
            "range": "± 388342.69840897404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7206638.425531914,
            "unit": "ns",
            "range": "± 490772.6721307917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6662536.055191533,
            "unit": "ns",
            "range": "± 200959.32877754976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1825840.5210193451,
            "unit": "ns",
            "range": "± 41654.388362538106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1049080.29609375,
            "unit": "ns",
            "range": "± 19573.667487323633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161332.381879664,
            "unit": "ns",
            "range": "± 149135.86883335756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837588.5974731445,
            "unit": "ns",
            "range": "± 14845.826916565922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 840410.0957712573,
            "unit": "ns",
            "range": "± 30972.143823632756"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "419d7a510c09c90cfede35fc7973c0af5c10015d",
          "message": "Merge pull request #3369 from greymistcube/release/3.1.2\n\n🚀 Release 3.1.2",
          "timestamp": "2023-08-10T15:46:14+09:00",
          "tree_id": "d1f8a73b811677d56f1cafefd3bd3aa5a52b4c0f",
          "url": "https://github.com/planetarium/libplanet/commit/419d7a510c09c90cfede35fc7973c0af5c10015d"
        },
        "date": 1691650895111,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8295104.833333333,
            "unit": "ns",
            "range": "± 75507.68467313092"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19922765.730769232,
            "unit": "ns",
            "range": "± 295215.23198031686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50756536.15384615,
            "unit": "ns",
            "range": "± 503552.16375926835"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99294180.64285715,
            "unit": "ns",
            "range": "± 1719317.892947167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208072033.26666668,
            "unit": "ns",
            "range": "± 2917976.0479425625"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58438.58947368421,
            "unit": "ns",
            "range": "± 5719.4228869233375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294166.9252873563,
            "unit": "ns",
            "range": "± 16462.49418684518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291618.04395604396,
            "unit": "ns",
            "range": "± 19267.90391062706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290291.0681818182,
            "unit": "ns",
            "range": "± 10798.086564774307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3967172.8,
            "unit": "ns",
            "range": "± 65630.18195943518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3602108.1428571427,
            "unit": "ns",
            "range": "± 62410.595264940195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16484.817204301075,
            "unit": "ns",
            "range": "± 1604.5318628282923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81252.9247311828,
            "unit": "ns",
            "range": "± 8157.887048255762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75048.11235955056,
            "unit": "ns",
            "range": "± 6091.779745239038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86394.77173913043,
            "unit": "ns",
            "range": "± 13264.609204304845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4980.305263157895,
            "unit": "ns",
            "range": "± 560.5287411479054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15943.551724137931,
            "unit": "ns",
            "range": "± 953.30289677058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512909.0206185568,
            "unit": "ns",
            "range": "± 139578.29500655562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2838578.4838709678,
            "unit": "ns",
            "range": "± 122519.23896962653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1904179.5612244897,
            "unit": "ns",
            "range": "± 125837.00725325193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5511740.653846154,
            "unit": "ns",
            "range": "± 280964.14582550665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3358778.6666666665,
            "unit": "ns",
            "range": "± 46524.79435611497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3495862.4494949495,
            "unit": "ns",
            "range": "± 295184.5803841017"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4395107.679245283,
            "unit": "ns",
            "range": "± 182291.3016466495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3793885.3191489363,
            "unit": "ns",
            "range": "± 129459.24571800267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6954512.52112676,
            "unit": "ns",
            "range": "± 326991.47899181274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5269796.2921875,
            "unit": "ns",
            "range": "± 41782.34520973288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1688762.4026442308,
            "unit": "ns",
            "range": "± 16421.270122166905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1015816.583984375,
            "unit": "ns",
            "range": "± 5321.139473909758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2460752.1005208334,
            "unit": "ns",
            "range": "± 26744.699196947346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 781880.7533804086,
            "unit": "ns",
            "range": "± 5540.931887309609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723860.814453125,
            "unit": "ns",
            "range": "± 3834.342389825706"
          }
        ]
      }
    ]
  }
}