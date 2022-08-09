import React, {useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import api from '../../services/api'; 
import Loading from '../Loading';
import Historic from '../Historic';

type historicObject = {
    input: number;
    response: number;
};

const Home = () => {
    const [responseValue, setResponseValue] = useState<number>(0);
    const [responseTime, setResponseTime] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [displayResponse, setDisplayResponse] = useState<boolean>(false);
    const [inputNumber, setInputNumber] = useState<number>(0);
    const [responseHistoric, setResponseHistoric] = useState<historicObject[]>([]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {value} = event.target;
    
        setInputNumber(parseInt(value))
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const data = {
            value: inputNumber
        };

        setLoading(true);
        await api.post('/calculate', data)
            .then(response => {
                setLoading(false);
                setDisplayResponse(true);
                setResponseValue(response.data.value)
                setResponseTime(response.data.time)
                setResponseHistoric([{
                    input: inputNumber,
                    response: response.data.value
                }, ...responseHistoric])
            });        
    }

    return(
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Helper logo"/>
                    <h1> Helper</h1>
                </header>

                <main>
                    <form onSubmit={handleSubmit}>
                        <h1>Calculadora de números de inteiros positivos n menores que k, para os quais n e n + 1 têm o mesmo número de divisores positivos</h1>

                        <div className="field">
                            <label htmlFor="intNumber">Número inteiro</label>
                            <input 
                                type="number"
                                name="intNumber"
                                id="intNumber"
                                onChange={handleInputChange}
                                min="0"
                            />
                        </div>

                        <div className="send">
                            <button type="submit" className={loading ? 'none' : ''}>
                                Calcular
                            </button>
                            <Loading show={loading}/>
                        </div>
                    </form>

                    <h2 className={displayResponse ? '' : 'none'}>Resposta</h2>
                    <h3 className={displayResponse ? '' : 'none'}>{responseValue}</h3>
                    <p className={displayResponse ? '' : 'none'}>tempo de cálculo: {responseTime}s</p>

                    <Historic show={displayResponse} responseHistoric={responseHistoric} />
                </main>

                
            </div>
        </div>
    )
}

export default Home;