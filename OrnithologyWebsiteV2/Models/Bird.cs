using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrnithologyWebsiteV2.Models
{
    [BsonIgnoreExtraElements]
    public class Bird
    {
        //this is the entity class - maps to the database

        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string Number { get; set; }
        public string Name { get; set; }
        public string Order { get; set; }
        public string Status { get; set; }
        public string Habitat { get; set; }
    }
}
