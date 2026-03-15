import {useState} from 'react'


export default function GenOfPasswords(props){

    const [password, setPassword] = useState('')
    const [length, setLength] = useState('');
    const ELEMENTS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

    function genPass(length){

        length = Number(length)

        if(!length) length = 10

        if(length <= 0) return 'Неверный формат числа'

        let pass = ''

        for(let i = 0; i < length; i++){
            pass += ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)]
        }

        return pass
    }

    return(
        <div className={props.classNameCol}>
            <div className={props.classNameEl}>
                <p className={props.classNameText}>
                    {props.text}
                </p>
                <div className="field">
                    <div className="control">
                        <input
                            className='input is-link inputPass'
                            placeholder='Укажите длину пароля'
                            type='number'
                            value={length}
                            onChange={(e)=>setLength(e.target.value)}
                        />
                    </div>
                </div>
                <p className='pd'>
                    Готовый пароль: {password}
                </p>
                <button
                    onClick={() => {
                        setPassword(genPass(length))
                    }}
                    className='button is-primary is-inverted'
                >
                    Сгенерировать пароль
                </button>
            </div>
        </div>
    )
}
