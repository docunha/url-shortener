import { MongoConnection } from './database/MongoConnection';
import { URLController } from './controller/URLController';
import express from 'express';


const api = express();
api.use(express.json())

const database = new MongoConnection
database.connect()

api.listen(5000, () => console.log('Express listening'))

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)
