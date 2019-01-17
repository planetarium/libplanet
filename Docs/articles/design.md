Libplanet design
================

Libplanet is a network/storage library for [peer-to-peer][P2P] distributed
multiplayer games.  From the perspective of this library's user,
it can be similar to a client library of a [PaaS] for games,
except that autonomous nodes run by gamers communicate with
each other without any authority of the centralized server.

Under the hood, because we need to prevent malicious nodes in the network from
corrupting network autonomy, the library utilizes [digital signature],
[BFT] consensus, and data replication, or simply [blockchain].

Implementing blockchain and BFT consensus for peer-to-peer distributed
multiplayer games is highly complicated, requires a lot of code to
be written, and is difficult and tedious to test.  For the future of
decentralized online games, rather than every single game making such redundant
effort, it will be more cost-efficient to make a high quality open source
library for commonly performed tasks.

[P2P]: https://en.wikipedia.org/wiki/Peer-to-peer
[PaaS]: https://en.wikipedia.org/wiki/Platform_as_a_service
[digital signature]: https://en.wikipedia.org/wiki/Digital_signature
[BFT]: https://en.wikipedia.org/wiki/Byzantine_fault_tolerance
[blockchain]: https://en.wikipedia.org/wiki/Blockchain


Platform and packaging
----------------------

Presently, Libplanet is a .NET library in order to be used along with [Unity],
one of the most popular multiplatform game engines.  (We have a long-running
roadmap to support other platforms, though.)

However, Libplanet is not only a Unity plugin distributed through
the [Unity Asset Store], but also a standard .NET library distributed through
[NuGet].  Because, as [block mining] is indispensable for running
a decentralized public network, mining-only headless nodes need to exist besides
game clients that also act as nodes. A peer-to-peer distributed multiplayer game
based on Libplanet can be packaged as both: a Unity based game application for
multiplatform gaming devices (e.g., Android, iOS, macOS, Windows), and a mining
[daemon] runnable on miners' machines (e.g., Linux).

For the maximum compatibility and portability, we currently target
[.NET Standard] 2.0.

[Unity]: https://unity3d.com/
[Unity Asset Store]: https://assetstore.unity.com/
[NuGet]: https://www.nuget.org/
[block mining]: https://en.bitcoin.it/wiki/Mining
[daemon]: https://en.wikipedia.org/wiki/Daemon_(computing)
[.NET Standard]: https://docs.microsoft.com/en-us/dotnet/standard/net-standard


Transactions and actions
------------------------

Every action that happened in a game built on Libplanet should be recorded in
the blockchain.  Although trivial things like chatting between players could be
an exception as these do not affect rules or incentives of a game, actions such
as a character's movement, battle, progression (i.e., exp), item drops,
reinforcements, breakages, trades, that are non-trivial and affect game states
should be recorded to the append-only log.  Each log has its own digital
signature to prove that the corresponding gamer is responsible.

We call the unit of such pair of log and its signature a
@"Libplanet.Tx.Transaction`1", and it consists of multiple
@"Libplanet.Tx.Transaction`1.Actions".  How transactions and actions grouped is
left to a game engineer's discretion.  For example, if there are four actions
like *A* to *D*, these can be grouped altogether (e.g., *{A, B, C, D}*),
or be into two or three groups (e.g., *{A} & {B, C, D}*), or rather have
their sole group (e.g., *{A} & {B} & {C} & {D}*).

The primary purpose of separating transactions and actions is to have
the flexible granularity of synchronization between nodes in the network.
An actor can at most put one signed transaction into a block. A transaction
included in a block is confirmed by other nodes in the network
when the block is mined.  It is also known as [consensus]
in distributed systems.

It takes 5 to 20 seconds to mine a block.  It means that if we group four
actions *A* to *D* into four distinct transactions like *{A} & {B} & {C} & {D}*
it must take 20 seconds to 80 seconds until four actions are all confirmed in
the network.  On the other hand, if we group the actions into a single
transaction like *{A, B, C, D}* it takes only 5 seconds
at best to 20 seconds even at worst.

Does it imply the best practice is to put as many actions as possible into
as few transactions as possible?  Unfortunately it is not that simple.

Putting many actions into few transactions decreases the immediacy of
each action.  To other nodes (gamers), it looks like there is no change at
all for a while, and then suddenly many things happening at once.
Grouping actions into transactions is a balance between throughput and latency,
 so different strategies should be chosen for the goal that a game aims to.

There is another reason to group actions into transactions besides latency
control.  It is so that actions made by different players can interact with
each other.
For example, in a card game, right after a player ends their turn, they need to
wait until the opponent ends their turn.  Even if it is desirable to increase
throughput, it is nonsense to group two turns of actions into one transaction.
A player's next turn can start only after the opponent's current turn is
determined.  From this perspective, a transaction represents a unit of
dependency, rather than a unit of throughput.

At a code level, another difference between @"Libplanet.Tx.Transaction`1" and
@"Libplanet.Action.IAction" is that @"Libplanet.Tx.Transaction`1" is not
extensible whereas @"Libplanet.Action.IAction" is.  By design, an extension
point for game engineers is @"Libplanet.Action.IAction".  To sum up,
@"Libplanet.Tx.Transaction`1" purposes to control synchronization on
the network and @"Libplanet.Action.IAction" purposes to implement the actual
game logic.

[consensus]: https://en.wikipedia.org/wiki/Consensus_(computer_science)


Accounts and addresses
----------------------

Libplanet creates digital signatures to find which player node made each
transaction, without relying on the authority of a centralized server.
In the similar fashion to [Bitcoin] and [Ethereum], a transaction is signed
with [ECDSA], and a pair of each player's sole @"Libplanet.Crypto.PrivateKey"
and @"Libplanet.Crypto.PublicKey" used to sign transactions construct
an *account*.  Since a pair of keys for an account is *chosen* at offline,
the process of so-called "account creation" can be omitted.

An account can also be identified through the @"Libplanet.Address" which is
derived from the corresponding @"Libplanet.Crypto.PublicKey".  It is shorter
than @"Libplanet.Crypto.PublicKey" and follows the same form to Ethereum's.
This means key pairs that have used for Ethereum can be reused for
Libplanet-backed games too.  For example, a game can raise funding or receive
donations through Ethereum and then reward people when the game is released.

[Bitcoin]: https://bitcoin.org/
[Ethereum]: https://www.ethereum.org/
[ECDSA]: https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm


Actions and states
------------------

Every account starts with an empty state. The current state of the account is
determined by actions that belong to the transactions signed by the account
along with other actions that refer to the account. This means state is not
stored in the blockchain, but only the actions that change the state are.

However, from a game engineer's view, Libplanet probably looks like its
blockchain store states as well. Libplanet exposes methods to query the current
state of an account by computing the effect of actions under the hood. Since
Libplanet's internal workings to calculate states will be further optimized
at storage and network levels soon, game engineers are encouraged to use
Libplanet's states API rather than implementing a similar function.

Since all state changes need to be represented through actions, every object
stored in states should be immutable.  Although the storage API accepts
mutable objects too, in this way collaborators might not understand that every
state change needs to be represented by an action.

A state needs to be serializable as it is transmitted over the network and
sometimes cached in storage. Therefore, every game object that represents states
must be marked with @"System.SerializableAttribute".

