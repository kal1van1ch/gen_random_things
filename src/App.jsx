import '../styles/mystyle.css'
import GenOfPasswords from "./GenOfPasswords.jsx"
import GenEmails from "./GenEmails.jsx"
import GenRandNumbers from "./GenRandNumbers.jsx"
import GenOfUserName from "./GenOFUserName.jsx"


export default function App() {

    return(
        <section className='section marg'>
            <div className='container'>
                <div className='columns'>
                    <GenOfPasswords
                        classNameCol='column has-text-centered'
                        classNameEl='box is-flex is-flex-direction-column is-justify-content-center'
                        classNameText='title'
                        text='Генератор паролей'
                    />
                    <GenEmails
                        classNameCol='column has-text-centered'
                        classNameEl='box is-flex is-flex-direction-column is-justify-content-center'
                        classNameText='title'
                        text='Генератор почтовых адрессов'
                    />
                </div>
                <div className='columns'>
                    <GenRandNumbers
                        classNameCol='column has-text-centered'
                        classNameEl='box is-flex is-flex-direction-column is-justify-content-center'
                        classNameText='title'
                        text='Генератор случайных чисел'
                    />
                    <GenOfUserName
                        classNameCol='column has-text-centered'
                        classNameEl='box is-flex is-flex-direction-column is-justify-content-center'
                        classNameText='title'
                        text='Генератор случайных usernames'
                    />
                </div>
            </div>
        </section>
    )
}

