import { Accordion } from "./components/Accordion/Accordion"
import { Burger } from "./components/Burguer/Burger"
import { CardDev } from "./components/CardDev/CardDev"
import { DateCounter } from "./components/DateCounter/DateCounter"
import { FlashCards } from "./components/FlashCards/FlashCards"
import { Steps } from "./components/Steps/Steps"

const App = () => {

    return (
        <>
            
            <DateCounter />
            <Steps />
            <FlashCards />
            <CardDev /> 
            <Accordion />
           

            <Burger />
        </>
    )
}


export { App }
