using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace sk_rest_api.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        // GET api/game
        [HttpGet]
        public async Task<List<Game>> Get()
        {
            IMongoClient client = new MongoClient();
            var database = client.GetDatabase("scorekeeper");
            var collection = database.GetCollection<Game>("collectionOne");
            GameList gameList = new GameList();
            gameList.games = new List<Game>();
            await collection.Find(new BsonDocument()).ForEachAsync(X => {
                gameList.games.Add(X);
            });
            return gameList.games;
        }

        // GET api/game/5
        [HttpGet("{value}")]
        public string Get(string value)
        {
            return value;
        }

        // POST api/game
        [HttpPost]
        public void Post([FromBody]Game game)
        {
            IMongoClient client = new MongoClient();
            var database = client.GetDatabase("scorekeeper");
            var collection = database.GetCollection<Game>("collectionOne");
            collection.InsertOneAsync(game);
        }

        // PUT api/game/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/game/5~
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            IMongoClient client = new MongoClient();
            var database = client.GetDatabase("scorekeeper");
            var collection = database.GetCollection<Game>("collectionOne");
            var filter = new BsonDocument();
            var result = collection.DeleteManyAsync(filter);
        }
    }
}