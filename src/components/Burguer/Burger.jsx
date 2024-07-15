import './index.scss'

const burgers = [
  {
    id: crypto.randomUUID(),
    name: "Duo",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
    price: 37,
    photoName: "img/burgers/duo.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Kids",
    ingredients:
      "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
    price: 29,
    photoName: "img/burgers/kids.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Master",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 51,
    photoName: "img/burgers/master.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Monster",
    ingredients:
      "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 47,
    photoName: "img/burgers/monster.jpg",
    soldOut: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Prime",
    ingredients:
      "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
    price: 43,
    photoName: "img/burgers/prime.jpg",
    soldOut: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Slim",
    ingredients:
      "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
    price: 27,
    photoName: "img/burgers/slim.jpg",
    soldOut: false,
  },
]



const Header = () => (
  <header>
    <img className='logo' src="img/logo-burgao-do-ze.jpg" alt="Logo Burgão do Zé" />
  </header>
)

const BurgerMenu = ({ img, alt, name, ingredients, price, soldOut }) => (
  <li className={`burger ${soldOut} ? "sold-out" : ""`}>
    <img src={img} alt={alt} />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <span>{soldOut ? "CABÔ" : `R$ ${price}`}</span>
    </div>
  </li>
)


const Menu = () => (
  <main className='menu'>
    {
      burgers.length > 0 && (
        <>
          <h2>Cardápio</h2>
          <p>Depois de uma semana desafiadora, nada melhor do que saborear um burger onde cada mordida é um abraço saboroso, não é mesmo?🍔✨</p>

          <ul className='burgers'>
            {
              burgers.map(burger => (
                <BurgerMenu
                  key={burger.id}
                  price={burger.price}
                  name={burger.name}
                  ingredients={burger.ingredients}
                  soldOut={burger.soldOut}
                  img={burger.photoName}
                  alt={`Burger ${burger.name}`}
                />
              ))
            }
          </ul>

        </>
      )
    }

  </main>
)


const OrderMsg = ({ closeHour }) => {
  const handleClick = () => console.log("Direcionando para fazer o pedido")

  return (
    <div className='order'>
      <p>
        🕛 Estamos aberto até às {closeHour}h. Vem visitar a gente ou faça seu pedido online.
      </p>
      <button className='btn' onClick={handleClick}>
        Fazer pedido
      </button>
    </div>
  )
}

const Footer = () => {
  const date = new Date()
  const hour = date.getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour < closeHour

  return (
    <footer className='footer'>
      {
        isOpen
          ? <OrderMsg closeHour={closeHour} />
          : <p>🕛 Vamos abrir às {openHour}h</p>
      }
    </footer>
  )

}

const Burger = () => {
  return (
    <section className="burger-section container  ">
      <Header />
      <Menu />
      <Footer />
    </section>
  )
}

export { Burger }