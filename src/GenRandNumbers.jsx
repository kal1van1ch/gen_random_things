import {useState} from 'react'


export default function GenRandNumbers(props){

    const [numFrom, setNumFrom] = useState('')
    const [numTo, setNumTo] = useState('')
    const [number, setNumber] = useState('')

    function generateNumber(from, to){
        if(!from) from = 1

        if(!to) to = 10

        if(Number(from) >= Number(to)) return 'Число "до" должно быть больше числа "от"'

        to = Number(to) + 1
        from = Number(from)

        return Math.floor(Math.random() * (to - from + 1)) + from
    }

    return(
        <div className={props.classNameCol}>
            <div className={props.classNameEl}>
                <p className={props.classNameText}>
                    {props.text}
                </p>
                <span className='inputsRNDN'>
                    <input
                        className='input is-link'
                        placeholder='от'
                        type='number'
                        value={numFrom}
                        onChange={e => setNumFrom(e.target.value)}
                    />
                    <input
                        className='input is-link'
                        placeholder='до'
                        type='number'
                        value={numTo}
                        onChange={e => setNumTo(e.target.value)}
                    />
                </span>
                <p className='pd'>
                    Готовое число: {number}
                </p>
                <button
                    onClick={()=>setNumber(generateNumber(numFrom, numTo))}
                    className='button is-primary is-inverted'
                >
                    Сгенерировать число
                </button>

            </div>
        </div>
    )
}