using System;
using RocksDbSharp;

namespace Libplanet.DataBase.Rocksdb
{
    public class RocksDbIterator : IIterator, IDisposable
    {
        private readonly Iterator _iterator;
        private readonly bool _isReverse;
        private bool _isInvalid;

        private readonly byte[] _start, _end;

        public RocksDbIterator(Iterator source, byte[] start, byte[] end, bool isReverse)
        {
            if (isReverse)
            {
                if (end.Length == 0)
                {
                    source.SeekToLast();
                }
                else
                {
                    source.Seek(end);
                    if (
                        source.Valid() &&
                        Utils.ByteCompare(end, source.Key()) <= 0
                    )
                    {
                        source.Prev();
                    }
                    else
                    {
                        source.SeekToLast();
                    }
                }
            }
            else
            {
                if (start.Length == 0)
                {
                    source.SeekToFirst();
                }
                else
                {
                    source.Seek(start);
                }
            }

            _iterator = source;
            _isInvalid = false;
            _isReverse = isReverse;
            _start = start;
            _end = end;
        }

        public bool Valid()
        {
            if (_isInvalid)
            {
                return false;
            }

            if (!_iterator.Valid())
            {
                _isInvalid = true;
                return false;
            }

            if (_isReverse)
            {
                if (_start.Length != 0 && Utils.ByteCompare(_iterator.Key(), _start) < 0)
                {
                    _isInvalid = true;
                    return false;
                }
            }
            else
            {
                if (_end.Length != 0 && Utils.ByteCompare(_end, _iterator.Key()) <= 0)
                {
                    _isInvalid = true;
                    return false;
                }
            }

            return true;
        }

        public void Next()
        {
            if (_isReverse)
            {
                _iterator.Prev();
            }
            else
            {
                _iterator.Next();
            }
        }

        public byte[] Key()
        {
            return _iterator.Key();
        }

        public byte[] Value()
        {
            return _iterator.Value();
        }


        public void Dispose()
        {
            _iterator?.Dispose();
        }
    }
}
