import { Contact, Features, Hero, Information } from "./"

interface HomeProps {
    //......
}

export const Home = () => {
    return (
        <div>
            <Hero />
            <Information />
            <Features />
            <Contact />
        </div>
    )
}