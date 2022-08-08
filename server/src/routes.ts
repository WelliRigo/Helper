import express from 'express';
import { celebrate, Joi } from 'celebrate';
import CalculationService from './CalculationService';

const routes = express.Router();
const calculationService = new CalculationService();

routes.post(
    '/calculate', 
    celebrate({
        body: Joi.object().keys({
            value: Joi.number().required()
        })
    }, {
        abortEarly: false
    }),
    calculationService.calculateIntegers
);

export default routes;