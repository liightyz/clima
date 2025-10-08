import { useState } from 'react'
import './App.css'
import { CloudSun, MapPinned } from 'lucide-react';

function App() {
  const [cidade, setCidade] = useState('');
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  //função para buscar dados do clima
  const buscarClima = async () => {
    //validação do campo vazio da cidade
    if (!cidade.trim()){
      setErro('Por favor, digite uma cidade');
      return;
    }

    setCarregando(true);
    setErro('');

    try{

    }catch (error){

    }finally{
      
    }
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <header>
            <h1>
              <CloudSun color="violet" size={48} />
              Consulta de Clima
            </h1>
            <p>Exemplo de consumo de API com React</p>
          </header>
          {/* caixa de busca
           */}
          <div className="busca-box">
            <div className="busca-container">
              <input type="text" 
              placeholder='digite o nome da sua cidade'/>
            <button>Buscar</button>
          </div>
          </div>

          {/* resultado do clima */}
          <div id="card-resultado">
            <div id="cidade-info">
              <div id="cidade-nome">
                <MapPinned color="darkred" size={25} />
                Campinas, BR
              </div>
              <p id="cidade-desc">
                nublado
              </p>
            </div>
            <div id="temperatura-box">
              <div id="temp-valor">
                21º
              </div>
              <div id="temp-sens">
                  sensação termica: 21º
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App