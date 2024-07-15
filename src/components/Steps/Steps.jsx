import './index.scss'

const Steps = () => {
    const handleClickButtonClose = e => console.log(e.target.textContent)
    const handleClickButtonNext = e => console.log(e.target.textContent)
    const handleClickButtonPrevious = e => console.log(e.target.textContent)

    return (
        <section className='steps'>

        <div className='container-close'>
            <button onClick={handleClickButtonClose} className='close'><span>Fechar</span></button>

        </div>
            <div className='steps-content'>
                <div className='numbers'>
                    <div className='active'>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>
                    <p className='message'>Passo 1: Entender o problema do cliente</p>
                </div>
                <div className='buttons'>
                    <button onClick={handleClickButtonNext}><span>Anterior</span></button>
                    <button onClick={handleClickButtonPrevious}><span>Próximo</span></button>
                </div>
            </div>


        </section>

    )
}

export { Steps }