import './index.scss'
import Logopke from '../../images/logoPokedex 1.png'
import { useState } from 'react'
import axios from 'axios';






export default function Pokemon() {

    const [pokenome, setPokenome] = useState('');
    const [listapoke, setListapoke] = useState([]);

    async function burcar() {
        let url = 'https://pokeapi.co/api/v2/pokemon';

        let resp = await axios.get(url)

        let pokeeeee = []

        for (let item of resp.data.results) {

            let resppoke = await axios.get(item.url)

            let imagem = '';

            if (parseInt(Math.random() * 10) < 2) {
                imagem = resppoke.data.sprites.other['official-artwork'].front_shiny;

            }
            else {
                imagem = resppoke.data.sprites.other['official-artwork'].front_default;
            }
            
            let tipos = '';

            for (let socoro of resppoke.data.types) {
                tipos = tipos + socoro.type.name + ','
            }

            pokeeeee.push({
                nomelegal: item.nome,
                imagem: imagem,
                tipo: tipos
            })
        }

        setListapoke(pokeeeee);
    }

    return (
        <div className='pokedex'>
            <div className='centro'>
                <img src={Logopke} />
                <button onClick={burcar}> Encontrar Pokémon </button>
            </div>
            <section className='pokes'>

                {listapoke.map(item =>
                    <div className='select'>
                        <img src={item.imagem} />
                        <h1> {item.nomelegal} </h1>
                        <p> {item.tipo}</p>
                    </div>)}

            </section>

        </div>
    )
}