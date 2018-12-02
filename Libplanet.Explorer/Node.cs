using System;
using System.Collections.Generic;
using Libplanet;
using Nancy.Routing.Constraints;
using Nancy.Routing.Trie;
using Nancy.Routing.Trie.Nodes;

namespace Libplanet.Explorer
{
    public class HashNode : TrieNode
    {
        private bool shouldBeHashNode;
        private string segmentName;

        public HashNode(
            TrieNode parent,
            string segment,
            ITrieNodeFactory nodeFactory)
        : base(parent, segment, nodeFactory)
        {
            string innerSegment = RouteDefinitionSegment.Trim('[', ']');
            string[] segmentSplit = innerSegment.Split(':');

            segmentName = segmentSplit[0];
            shouldBeHashNode = segmentSplit[1] == "HashDigest";
        }

        public override SegmentMatch Match(string segment)
        {
            HashDigest hash;
            Console.WriteLine(segment);
            try
            {
                hash = segment.ToHashDigest();
            }
            catch (System.FormatException)
            {
                return SegmentMatch.NoMatch;
            }

            Console.WriteLine("hello");
            var match = new SegmentMatch(true);
            match.CapturedParameters.Add(segmentName, hash);
            Console.WriteLine(segment);
            return match;
        }

        public override int Score
        {
            get { return 10; }
        }
    }

    public class CustomTrieNodeFactory : TrieNodeFactory
    {
        public override TrieNode GetNodeForSegment(TrieNode parent,
                                                   string segment)
        {
            if (parent == null)
            {
                return new RootNode(this);
            }

            if (segment.StartsWith("[") && segment.EndsWith("]")
                    && segment.Contains(":"))
            {
                return new HashNode(parent, segment, this);
            }

            return base.GetNodeForSegment(parent, segment);
        }

        public CustomTrieNodeFactory(
            IEnumerable<IRouteSegmentConstraint> routeSegmentConstraints)
            : base(routeSegmentConstraints)
        {
        }
    }
}
