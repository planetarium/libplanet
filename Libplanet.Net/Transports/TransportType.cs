namespace Libplanet.Net.Transports
{
    public enum TransportType : byte
    {
        /// <summary>
        /// NetMQ based transport.
        /// </summary>
        NetMQTransport = 0x01,

        /// <summary>
        /// TCP based transport.
        /// </summary>
        TcpTransport = 0x02,
    }
}
