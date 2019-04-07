Libplanet.Explorer
==================

Explore your block, transaction, and address with Libplanet.Explorer.

The goal of this project is to give you the UI of the web or
native application. But we **only provide JSON API** for the present.


How to run
----------

~~~~ bash
./run.ps1
~~~~


Endpoints
---------

- `/blocks/`: Show a list of blocks. It contains the hash of block and
the creation timestamp.
- `/blocks/{hashString}/`: Show the details of the block that includes index,
difficulty, nonce, the hash of the previous block, reward beneficiary,
creation timestamp, and transaction ids. `{hashString}` is
- `/tx/{txIdString}/`: Show the details of the transaction that includes id,
signature, creation timestamp, signer address, recipient address, and actions.
- `/address/{addressIdString}/`: Show the details of address. The list of
transactions sent/received and state of it.
