import './index.scss'
import '../../images/fundo.png'
import logo from '../../images/icon-buscar.png'
import { useState } from 'react'
import axios from 'axios';


export default function Film() {

    const [filme, setFilme] = useState('');
    const [lista, setLista] = useState([]);
    const [mostrar, setMostrar] = useState(false)




    async function Pesquisar() {
        let url = 'http://www.omdbapi.com/?apikey=584d9e6&s=' + filme;

        let Response = await axios.get(url);
        setLista(Response.data.Search);
    }


    function excluir (itemsexluaidos){
        let novosit= lista.filter( item => item.imdbID != itemsexluaidos);

        setLista([...novosit])
    }

    return (

        <div className='pag-fil'>
            <div className='paradas'>
                <div className='titulo'>
                    <h1> IMDB</h1>
                </div>

                <section className='pesquisador'>
                    <h2>
                        Consulta de Filmes
                    </h2>

                    <i className='fa fa-chevron-down' onClick={() => setMostrar(!mostrar)}></i>


                    {mostrar === true &&
                        <>
                            <div className='pesquisa'>
                                <label>Nome</label>
                                <input type='text' value={filme} onChange={(e) => setFilme(e.target.value)} />
                                <button onClick={Pesquisar} > <img src={logo} /> </button>
                            </div>
                        </>
                    }

                    <table>
                        <thead>
                            <tr>
                                <th> Códigos </th>
                                <th> Título</th>
                                <th> Ano</th>
                            </tr>
                        </thead>
                        <tbody>

                            {lista.map(item =>
                                <tr className='linha'>

                                    <td> {item.imdbID} </td>
                                    <td> {item.Title} </td>
                                    <td> {item.Year} </td>
                                    <td className='poster'> <img src={item.Poster} /> </td>
                                    <td> <i className='fa fa-trash-can' onClick={excluir}></i></td>

                                </tr>
                            )}


                        </tbody>
                    </table>
                </section>
            </div>

        </div >
    )
}