import './index.scss'

const DateCounter = () => {
const handleClickDecrementInterval = () =>  console.log('Clicou no menos do Intervalo')
const handleClickIncrementInterval = () =>  console.log('Clicou no mais do Intervalo')
const handleClickDecreaseCount = () => console.log('Clicou no menos da Contagem')
const handleClickIncreaseCount = () => console.log('Clicou no mais da Contagem')



    return (
        <section className='date-counter'>
            <div className='container'>
                <div className='count'>
                    <button onClick={handleClickDecrementInterval}> - </button>
                    <h2>Intervalo: 1</h2>
                    <button onClick={handleClickIncrementInterval}> + </button>
                </div>
                <div className='count'>
                    <button onClick={handleClickDecreaseCount}> - </button>
                    <h2>Contagem: 0</h2>
                    <button onClick={handleClickIncreaseCount}> + </button>
                </div>

                <h2>Hoje é Domingo, 22 de out. de 2023</h2>
            </div>

        </section>
    )
}

export { DateCounter }