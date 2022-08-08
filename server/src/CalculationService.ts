import {Request, Response} from 'express';
import { performance  } from 'perf_hooks';

class CalculationService{

    // Calculates the number of integer numbers n smaller than value, when n and n+1 have the same number of positive divisors
    async calculateIntegers (request: Request, response: Response){
        const start = performance.now();
        
        let value = request.body.value;
        
        
        let lastPositiveDivisors = -1;
        let sequencialPositiveWithSameDivisor = 0;

        for(let i = 2; i <= value; i++){

            // calculate positive divisors
            let positiveDivisors = 2;
            for(let j=2; j< ( Math.floor(Math.sqrt(i))) + 1; j++)
            {
               if(i%j==0)
               {
                    positiveDivisors += (i/j == j) ? 1 : 2;
               }
            }
            
            if(positiveDivisors == lastPositiveDivisors){
                sequencialPositiveWithSameDivisor++;
            }

            lastPositiveDivisors = positiveDivisors;
        }

        const stop = performance.now();
        const inSeconds = (stop - start) / 1000;
        const rounded = Number(inSeconds).toFixed(5 );

        return response.json({
            value: sequencialPositiveWithSameDivisor,
            time: rounded
        });
    }
}

export default CalculationService;