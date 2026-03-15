import {useState} from 'react'


export default function GenEmails(props){

    const [email, setEmail] = useState('')
    const ELEMENTS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    function genEmail(){
        let email = ''

        for(let i = 0; i < 15; i++){
            email += ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)]
        }

        email += '@gmail.com'

        return email
    }

    return(
        <div className={props.classNameCol}>
            <div className={props.classNameEl}>
                <p className={props.classNameText}>
                    {props.text}
                </p>
                <p className='pd'>
                    Готовый email: {email}
                </p>
                <button
                    onClick={() => {
                        setEmail(genEmail())
                    }}
                    className='button is-primary is-inverted'
                >
                    Сгенерировать email
                </button>
            </div>
        </div>
    )
}
