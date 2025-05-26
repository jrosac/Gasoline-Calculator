import { useState, type FormEvent } from 'react'
import './App.css'
import logoImg from "./assets/logo.png"


/* Calculate : alcohol/ gasoline,
  if the result is lower then 0.7, then the answer is alcohol */

  interface infoProps{
    title: string;
    gasoline: string| number;
    alcohol: string | number;
  }



function App() {

  const [gasolineInput, setGasolineInput] = useState(1)
  const [alcoholInput, setAlcoholInput] = useState(1)
  const [info,setInfo] = useState<infoProps>()

  function calculate(event : FormEvent){
    event.preventDefault();

    let calculo = (alcoholInput / gasolineInput)

    if(calculo<=0.7){
      //alert("worth it use alcohol")
      setInfo({
        title : "worth it use alcohol",
        gasoline : gasolineInput,
        alcohol : alcoholInput
      })
    }
    else{
      //alert("worth it use gasoline")
      setInfo({
        title : "worth it use gasoline",
        gasoline : gasolineInput,
        alcohol : alcoholInput
      })
    }


    console.log(calculo)
 

    //alert("test")
  }


  return (
    <div>
       <main className='container'>
        
        <img src={logoImg} alt="Gasoline/Alcohol calculator logo" className='logo'/>
        
        <h1 className='title'>What is the better option?</h1>

        <form className='form' onSubmit={calculate}>
          <label>Alcohol (price by liter):</label>
          <input 
          type="number" 
          className='input'
          placeholder='4.90'
          min="1"
          step="0.01"
          required
          value={alcoholInput}
          onChange={(e)=>setAlcoholInput(Number(e.target.value))}

          />

          <label>Gasoline (price by liter):</label>
          <input 
          type="number" 
          className='input'
          placeholder='4.90'
          min="1"
          step="0.01"
          required
          value={gasolineInput}
          onChange={(e)=>setGasolineInput(Number(e.target.value))}

          />

          <input type="submit" value="Calculate" className='button'/>
        </form>

        {info && Object.keys(info).length > 0 &&(
                  <section className='result'>
                  <h2 className='result-title'>{info.title}</h2>
                  <span>Alcohol {info.alcohol}</span>
                  <span>Gasoline {info.gasoline}</span>
                </section>
        )}

       </main>
    </div>
  )
}

export default App
