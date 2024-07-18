import { useState } from 'react'
import './index.scss'

const steps = [
    {
        id: crypto.randomUUID(),
        description: 'Entenda o problema do cliente'
    },
    {
        id: crypto.randomUUID(),
        description: 'Desenvolver a solução do problema'
    },
    {
        id: crypto.randomUUID(),
        description: 'Repetir até o cliente ficar feliz e encher seu 👜 de dinheiro '
    }
]

const Toggle = ({ shouldBeOpen, onClickButtonToggle }) => (
    <div className='container-close'>
        <button onClick={onClickButtonToggle} className='close'>
            <span>{shouldBeOpen ? "Fechar" : "Abrir"}</span>
        </button>
    </div>
)

const StepsComp = ({ shouldBeOpen, step, onClickButtonPrevious, onClickButtonNext }) =>
    shouldBeOpen && (
        <div className='steps-content'>
            <ul className='numbers'>
                {
                    steps.map((item, i) => (
                        <li key={item.id} className={i + 1 === step ? "active" : ""}>
                            {i + 1}
                        </li>
                    ))
                }
            </ul>
            <div>
                <p className='message'>
                    Passo {step}: {steps[step - 1].description}
                </p>
            </div>
            <div className='buttons'>
                <button onClick={onClickButtonPrevious}><span>Anterior</span></button>
                <button onClick={onClickButtonNext}><span>Próximo</span></button>
            </div>
        </div>
    )

const Steps = () => {
    const [shouldBeOpen, setShouldBeOpen] = useState(true)
    const [step, setStep] = useState(1)


    const handleClickButtonToggle = () => setShouldBeOpen((s) => !s)
    const handleClickButtonPrevious = () => setStep((s) => (s - 1 === 0 ? s : s - 1))
    const handleClickButtonNext = () => setStep((s) => (s === steps.length ? s : s + 1))

    return (
        <section className='steps'>
            <Toggle shouldBeOpen={shouldBeOpen} onClickButtonToggle={handleClickButtonToggle} />

            <StepsComp
                shouldBeOpen={shouldBeOpen}
                step={step}
                onClickButtonPrevious={handleClickButtonPrevious}
                onClickButtonNext={handleClickButtonNext}
            />



        </section>
    )
}
export { Steps }