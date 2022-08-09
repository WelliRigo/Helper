import {Request, Response} from 'express';
import CalculationService from '../services/CalculationService';

const calculationService = new CalculationService();

class CalculationController {
    calculateIntegers = (request: Request, response: Response) => {
        let value = request.body.value;
        let dataObject = calculationService.calculateIntegers(value)
        return response.json(dataObject);
    }
}

export default CalculationController;