const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");
const url = 'mongodb://192.168.1.57:27017/';
const client = new MongoClient(url);
const db = client.db('plexreq');

router.get('/getShow', async (request, response) => {
   const result = await db.collection('show').find({ ...request.body }).toArray();
   response.status(200).json({
      rspCde: 0,
      rspMsg: 'success',
      data: result
   });
});
router.post('/addShow', async (request, response) => {
   const result = await db.collection('show').insertOne(request.body);
   response.status(200).json({
      rspCde: 0,
      rspMsg: 'success'
   });

});

module.exports = router;