using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Game {
    public string game {get; set;}

    public List<Player> players {get; set;}
    public string playerOne {get; set;}
    public string playerTwo {get; set;}
    public string winner {get; set;}
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id {get; set;}
}

