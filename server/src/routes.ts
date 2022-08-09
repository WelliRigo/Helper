import express from 'express';
import { celebrate, Joi } from 'celebrate';
import CalculationController from './controllers/CalculationController';

const routes = express.Router();
const calculationController = new CalculationController();

routes.post(
    '/calculate', 
    celebrate({
        body: Joi.object().keys({
            value: Joi.number().integer().required()
        })
    }, {
        abortEarly: false
    }),
    calculationController.calculateIntegers
);

export default routes;