import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react';


function Media() {
    const[ N1, setN1]= useState(0)
    const[ N2, setN2]= useState(0)
    const[ N3, setN3]= useState(0) 
    const[ Resultado, setResultado]= useState(0)
    const[ Situacao, setSituacao]= useState(0)

    function calc(){
        let m = (N1 + N2 + N3) /3;
        setResultado (m);

        if(Resultado < 0 || Resultado > 10 ||  isNaN(Resultado) ){
            setSituacao('Inválido')
        }
        else if(Resultado > 3){
            setSituacao
        }

    }

    return (
      <div className="pag-med">
        <h1>
          Calcular a Média
        </h1>

        <div className='calculadora'>
            <input type='number' min={0} max={10} value={N1} onChange={e => setN1(Number( e.target.value)) } />

            <input type='number' min={0} max={10} value={N2} onChange={e => setN2 (Number( e.target.value))}/>

            <input type='number' min={0} max={10} value={N3} onChange={e => setN3 (Number(e.target.value))}/>

            <button onClick={calc}> Calcular</button>
            {Resultado}
        </div>
        
        <Link to='/'> Voltar a home</Link>
      </div>
    );
  }
  
  export default Media;
  