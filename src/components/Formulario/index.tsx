import { Container } from "./styles";
import  logoImg  from '../../assets/logo.svg'
import { useState } from "react";

export function Form(){

    const [initialValue,setInitialValue] = useState(0)
    const [mensalValue,setMensalValue] = useState(0)
    const [anualTax, setAnualTax] = useState(0)
    const [period,setPeriod] = useState(0) 
    const [totalInvest, setTotalInvest] = useState(0)
    const [total,setTotal] = useState(0)
    const [totalTax, setTotalTax] = useState(0)

    async function handleCreateNewCalculo() {
        const tax = Math.pow(1 + anualTax*0.01,period) 

        setTotalInvest(initialValue + mensalValue * period * 12)
        setTotal(initialValue + mensalValue * period * tax)
        setTotalTax(total - totalInvest)
        
        console.log(tax)

        setAnualTax(0)
        setMensalValue(0)
        setInitialValue(0)
        setPeriod(0)
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
                <div className="box-of-values">
                    <div>
                        Total investido:
                        <strong>
                            {
                                new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(totalInvest)
                            }
                        </strong>
                    </div>
                    <div>
                        Total de Juros:
                        <strong>
                            {
                                new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(totalTax)
                            }
                        </strong>
                    </div>
                    <div>
                        Total:
                        <strong>
                            {
                                new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(total)
                            }
                        </strong>
                    </div>
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