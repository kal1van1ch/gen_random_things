import {useState} from 'react'


export default function GenRandNumbers(props){

    const [numFrom, setNumFrom] = useState('')
    const [numTo, setNumTo] = useState('')
    const [number, setNumber] = useState('')

    function generateNumber(from, to){

        to = Number(to)
        from = Number(from)

        if(!from && !to){
            from = 0
            to = 10
        }

        if(from && !to){
            to = from + 10
        }

        if(!from && to){
            from = to - 10
        }

        if(from >= to) return 'Число "до" должно быть больше числа "от"'

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