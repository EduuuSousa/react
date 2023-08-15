import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react';
import userEvent from '@testing-library/user-event';


export default function Aluno (){

const [nome, setNome] =useState('')
const [chama, setChama] =useState('')

const [ lista, setLista] = useState([])

function adicionar() {
    let q= []

    q.push({
        name : nome,
        num : chama
    })

    setChama([...chama])
}

    return(
        <div className='pagAluno'>
            <h1> Lista de Chamada </h1>
            
            <div>
                nome:
                <input type='text' value={nome} onChange={ e => setNome(e.target.value)}/>

                chamadas:
                <input type='text' value={chama} onChange={ e => setChama(e.target.value)}/>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>Númérôôs</th>
                    </tr>
                    <tbody>
                        tr
                    </tbody>
                </table>
            </div>
        </div>
    )
}

