import { Container } from "./styles";
import  logoImg  from '../../assets/logo.svg'
import { FormEvent, useState } from "react";

export function Form(){

    const [initialValue,setInitialValue] = useState(0)
    const [mensalValue,setMensalValue] = useState(0)
    const [anualTax, setAnualTax] = useState(0)
    const [period,setPeriod] = useState(0) 

    async function handleCreateNewCalculo(event: FormEvent) {
        event.preventDefault()

        const total = () => {
            return 0
        }
        
        const totalInvest = () =>{
            return initialValue + mensalValue * period
        }

        const totalOfJutos = () =>{
            return total() - totalInvest()
        }
    }

    return(
        <Container>
            <div className="react-modal-form">
                <div className="react-modal-image">
                    <img src={logoImg} alt="Cifrão" />
                    <strong>Franco´s <span>Calculator</span></strong>
                </div>
                <div className="react-modal-inputs">
                    <strong>Valor inicial:</strong>
                    <input type="number" value={initialValue} onChange={event => setInitialValue(Number(event.target.value))}/>
                    <strong>Valor mensal:</strong>
                    <input type="number" value={mensalValue} onChange={event => setMensalValue(Number(event.target.value))}/>
                    <strong>Taxa de juros(a.a):</strong>
                    <input type="number" value={anualTax} onChange={event=>setAnualTax(Number(event.target.value))}/>
                    <strong>Período(anos):</strong>
                    <input type="number" value={period} onChange={event=>setPeriod(Number(event.target.value))}/>
                </div>
                <div className="react-modal-footer">
                    <button type="submit" onClick={handleCreateNewCalculo}>
                        Calcular
                    </button>
                </div>
                <div className="react-modal-poweredBy-and-links">
                    <strong>
                        Powered by Eduardo Franco
                    </strong>
                </div>
            </div>
        </Container>
    )
}