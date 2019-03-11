Libplanet changelog
===================

Version 0.2.0
-------------

To be released.

 - Since we decided to depend on TURN ([RFC 5766]) and STUN ([RFC 5389]) to work around NAT so that `Peer`'s endpoints don't have to be multiple,
`Peer.Urls` was renamed to `Peer.EndPoint` and its type also was changed from `IImmutableList<Uri>` to `IPEndPoint`. (See also [#120], [#126])
 - `Address` and `TxId` are now serializable.


Version 0.1.1
-------------

Released on March 5, 2019.

 -  Improved stability of `Swarm` and `SwarmTest`.


Version 0.1.0
-------------

Initial release.  Released on February 26, 2019.


[#120]: https://github.com/planetarium/libplanet/issues/120
[#126]: https://github.com/planetarium/libplanet/issues/126
[RFC 5389]: https://tools.ietf.org/html/rfc5389
[RFC 5766]: https://tools.ietf.org/html/rfc5766
