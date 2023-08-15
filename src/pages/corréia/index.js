import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';  
import axios from 'axios';


export default function Correio(){

    const [cep, setCep] = useState('');
    const [adress, setAdress] = useState('');

    async function endereco(){
        let url = 'viacep.com.br/ws/'+cep+'/json/';

        let resposta = await axios.get(url);

        setAdress(resposta.data.logradouro);
    }

    return(
        <div className='pag-cúreio'>
            <div>
                <h1>
                    Insira o CEP
                </h1>
                <input type='text'value={cep} onChange={ e=> setCep( e.target.value)} />
                <button onClick={endereco}> Buscar</button>       

                <div>{adress}</div>   
            </div>

        </div>
    )
}