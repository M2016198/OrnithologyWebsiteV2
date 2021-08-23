using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using OrnithologyWebsiteV2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrnithologyWebsiteV2.Controllers
{
    public class HomeController : Controller
    {
        private IMongoDatabase _database;
        //Constructor
        public HomeController()
        {
            //Connect to MongoDB Database
            var settings = MongoClientSettings.FromConnectionString("mongodb://nzbirds:nzbirds@cluster0-shard-00-00.amr9m.mongodb.net:27017,cluster0-shard-00-01.amr9m.mongodb.net:27017,cluster0-shard-00-02.amr9m.mongodb.net:27017/nzbirds1?ssl=true&replicaSet=atlas-10rqz7-shard-0&authSource=admin&retryWrites=true&w=majority");
            var client = new MongoClient(settings);
            _database = client.GetDatabase("nzbirds1");
        }


        // GET: HomeController
        [HttpGet("birdquiz")]
        public ActionResult Index()
        {
            var birdsMongoCollection = _database.GetCollection<Bird>("nzbirdspecies");
            //convert to Linq Queryable
            var birdsQueryable = birdsMongoCollection.AsQueryable();

            //convert to IList
            var birdsList = birdsQueryable.ToList();

            //OK converts to JSON 
            return Ok(birdsList);
        }


        [HttpGet("habitats")]
        public ActionResult GetHabitats()
        {
            var birdsMongoCollection = _database.GetCollection<Bird>("nzbirdspecies");
            //convert to Linq Queryable
            var birdsQueryable = birdsMongoCollection.AsQueryable();

            //convert to IList
            var birdsList = birdsQueryable.ToList();

            // get unique habitats and split by commas
            var habitatsList = birdsList.SelectMany(bird => bird.Habitat.Split(',').ToList().Select(habitat => habitat.Trim())).Distinct();

            //OK converts to JSON 
            return Ok(birdsList);
        }

        [HttpGet("order")]
        public ActionResult GetOrder()
        {
            var birdsMongoCollection = _database.GetCollection<Bird>("nzbirdspecies");
            //convert to Linq Queryable
            var birdsQueryable = birdsMongoCollection.AsQueryable();

            //convert to IList
            var birdsList = birdsQueryable.ToList();

            // get unique habitats and split by commas
            var orderList = birdsList.Select(bird => bird.Order).Distinct();

            //OK converts to JSON 
            return Ok(birdsList);
        }

        [HttpGet("status")]
        public ActionResult GetStatus()
        {
            //OK converts to JSON 
            return Ok(getStatusesList());
        }


        [HttpPost("statusQuestion")]
        public ActionResult GetStatusQuestion([FromBody] Bird bird)
        {
            // Get correct answer
            var correctStatus = bird.Status;

            // get two incorrect answers for multiple choice
            //var incorrectStatus = getStatusesList().Select(status => status != correctStatus);

            // TODO need to find code to mix up the position of the answer

            var newQuestion = new Question();

            newQuestion.QuestionText = "What status is " + bird.Name + "?";
            newQuestion.Answers = getStatusesList().Select(status => new Answer
            {
                AnswerText = status,
                IsCorrect = correctStatus == status
            }).ToList();

            return Ok(newQuestion);
        }

        private IEnumerable<string> getStatusesList()
        {
            var birdsMongoCollection = _database.GetCollection<Bird>("nzbirdspecies");

            //convert to Linq Queryable
            var birdsQueryable = birdsMongoCollection.AsQueryable();

            //convert to IList
            var birdsList = birdsQueryable.ToList();

            // get unique habitats and split by commas
            var statusList = birdsList.Select(bird => bird.Status).Distinct();

            return statusList;
        }
    }
}