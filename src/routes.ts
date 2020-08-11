import express from 'express'
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';
import ClassesController from './controllers/ClassesControllers';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesConstrollers = new ClassesController;
const connectionsController = new ConnectionsController;

/* Metodos HTTP
GET: Buscar ou listar uma informação
POST: Criar laugma nova informação no back-end
PUT: Atualizar uma informação existente
DELETE: Deletar uma informação existente
*/

// Parametros: 
// Corpo (Request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação 



routes.post('/classes', classesConstrollers.create);
routes.get('/classes', classesConstrollers.index);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
