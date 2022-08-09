import { performance  } from 'perf_hooks';

class CalculationService {

    calculatePositiveDivisors = (num: number) => {
        let positiveDivisors = 2;
        for (let i = 2; i < ( Math.floor(Math.sqrt(num))) + 1; i++) {
           if (num % i == 0) {
                positiveDivisors += (num/i == i) ? 1 : 2;
           }
        }

        return positiveDivisors;
    }

    // Calculates the number of integer numbers n smaller than a value,
    // when n and n+1 have the same number of positive divisors
    calculateIntegers = (value: number) => {
        const start = performance.now();
        
        let lastPositiveDivisors = -1;
        let sequencialPositiveWithSameDivisor = 0;

        for(let i = 2; i <= value; i++){

            let positiveDivisors = this.calculatePositiveDivisors(i);
            
            if(positiveDivisors == lastPositiveDivisors){
                sequencialPositiveWithSameDivisor++;
            }

            lastPositiveDivisors = positiveDivisors;
        }

        const stop = performance.now();
        const inSeconds = (stop - start) / 1000;
        const rounded = Number(inSeconds).toFixed(5 );

        return {
            value: sequencialPositiveWithSameDivisor,
            time: rounded
        };
    }
}

export default CalculationService;