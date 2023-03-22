Contribution guide
==================

*See the monorepository's [contribution guide](../../CONTRIBUTING.md) as well.*


Automated tests
---------------

The automated tests are closed to functional tests rather than unit tests.
It requires AWS credentials to run tests, and each test run charges a fee.
Therefore, you should avoid to repeatedly run tests like a habit even when you
change much.

The test suite requires the following environment variables to be configured:

 -  `AWS_ACCESS_KEY_ID`
 -  `AWS_SECRET_ACCESS_KEY`
 -  `AWS_REGION`

The account requires several KMS permissions.  See also
the [*README.md*](README.md) for details.

Note that it creates and immediately delete multiple keys to utilize them as
fixture data.  They are scheduled to be deleted in seven days.  Repeated tests
may make your AWS KMS a mess, so be careful.  We recommend you to run the test
suite on a region you usually don't use.
