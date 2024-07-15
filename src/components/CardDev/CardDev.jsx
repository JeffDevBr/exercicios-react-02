import foto from '../../assets/img/img-card.png'
import './index.scss'

const Avatar = () => (
    <img
        src={foto}
        alt="minha foto"
        className="avatar"
    />
)

const Intro = () => (
    <div>
        <h1>Jefferson</h1>

        <p>Eu estou estudando programação e construção de projetos com React JS. Quando não estou programando, gosto de tocar viola e cantar moda caipira, aqui estão algumas de minhas habilidades</p>
    </div>
)


const Skill = ({ name, emoji, bgColor }) => (
    <li className={bgColor}>{emoji} {name}</li>
)

const skills = [
    {
        id: crypto.randomUUID(),
        name: "Programação",
        emoji: "🤘",
        bgColor: "bg-lightblue"
    },
    {
        id: crypto.randomUUID(),
        name: "Inglês",
        emoji: "👍",
        bgColor: "skill bg-pink"
    },
    {
        id: crypto.randomUUID(),
        name: "Culinária",
        emoji: "👎",
        bgColor: "skill bg-red"
    },
    {
        id: crypto.randomUUID(),
        name: "Piadas Ruins",
        emoji: "🤘",
        bgColor: "skill bg-yellow"
    }
]

const ListOfSkills = () => (
    <ul className="list-of-skills">
        {
            skills.map(({ id, name, emoji, bgColor }) => (
                <Skill key={id} name={name} emoji={emoji} bgColor={bgColor} />
            ))
        }
    </ul>
)

const CardDev = () => {

    return (
        <>
            <div className="card">
                <Avatar />

                <div className="info">
                    <Intro />
                    <ListOfSkills />
                </div>
            </div>
        </>
    )
}

export { CardDev }