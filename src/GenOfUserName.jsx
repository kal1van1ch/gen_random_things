import {useState} from "react";


export default function GenOfUserName(props) {

    const [name, setName] = useState("");
    const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const NUMBERS = '123456789'

    function genName(){
        let n = ''

        for(let i = 0; i < 10; i++){
            n += LETTERS[Math.floor(Math.random() * LETTERS.length)];
        }

        for(let i = 0; i < 3; i++){
            n += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
        }

        return n

    }

    return(
        <div className={props.classNameCol}>
            <div className={props.classNameEl}>
                <p className={props.classNameText}>
                    {props.text}
                </p>
                <p className='pd'>
                    username: {name}
                </p>
                <button
                    onClick={() => {
                        setName(genName())
                    }}
                    className='button is-primary is-inverted'
                >
                    Сгенерировать username
                </button>
            </div>
        </div>
    )
}