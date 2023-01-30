/*
    Copyright (c) 2007-2012 iMatix Corporation
    Copyright (c) 2009-2011 250bpm s.r.o.
    Copyright (c) 2011 VMware, Inc.
    Copyright (c) 2007-2015 Other contributors as noted in the AUTHORS file

    This file is part of 0MQ.

    0MQ is free software; you can redistribute it and/or modify it under
    the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.

    0MQ is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

namespace NetMQ.Core.Transports
{
    internal class V1Encoder : EncoderBase
    {
        private const int SizeReadyState = 0;
        private const int MessageReadyState = 1;

        private readonly ByteArraySegment m_tmpbuf = new byte[10];
        
        public V1Encoder(int bufferSize, Endianness endian)
            : base(bufferSize, endian)
        {
            // Write 0 bytes to the batch and go to message_ready state.
            NextStep(m_tmpbuf, 0, MessageReadyState, true);
        }

        protected override void Next()
        {
            switch (State)
            {
                case SizeReadyState:
                    SizeReady();
                    break;
                case MessageReadyState:
                    MessageReady();
                    break;
            }
        }

        private void SizeReady()
        {
            Assumes.NotNull(m_inProgress.UnsafeData);

            // Write message body into the buffer.
            NextStep(new ByteArraySegment(m_inProgress.UnsafeData, m_inProgress.UnsafeOffset),
                m_inProgress.Size, MessageReadyState, true);
        }

        private void MessageReady()
        {
            m_tmpbuf.Reset();

            // Get the message size.
            int size = m_inProgress.Size;

            // Account for the 'flags' byte.
            size++;

            // For messages less than 255 bytes long, write one byte of message size.
            // For longer messages write 0xff escape character followed by 8-byte
            // message size. In both cases 'flags' field follows.

            if (size < 255)
            {
                m_tmpbuf[0] = (byte)size;
                m_tmpbuf[1] = (byte)(m_inProgress.Flags & MsgFlags.More);
                NextStep(m_tmpbuf, 2, SizeReadyState, false);
            }
            else
            {
                m_tmpbuf[0] = 0xff;
                m_tmpbuf.PutLong(Endian, size, 1);
                m_tmpbuf[9] = (byte)(m_inProgress.Flags & MsgFlags.More);
                NextStep(m_tmpbuf, 10, SizeReadyState, false);
            }
        }
    }
}
