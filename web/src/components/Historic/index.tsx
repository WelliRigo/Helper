import React from 'react';
import './styles.css';

type historicObject = {
    input: number;
    response: number;
};

interface Props {
    show: boolean;
    responseHistoric: historicObject[];
}

const Historic: React.FC<Props> = ({show, responseHistoric}) => {
    return (
        <div className='historic'>
            <h2 className={show ? '' : 'none'}>Histórico</h2>

            <div className='historic-columns'>
                <div className='inputs'>
                    <h4 className={show ? '' : 'none'}>Inteiro</h4>
                    {responseHistoric.map((value, index) => {
                        return <div key={index}>{value.input}</div>
                    })}
                </div>
                <div className='results'>
                    <h4 className={show ? '' : 'none'}>Resultado</h4>
                    {responseHistoric.map((value, index) => {
                        return <div key={index}>{value.response}</div>
                    })}
                </div>                           
            </div>
        </div>
    )
}

export default Historic;