import "./LandingPage.css"
import Hero from "./sections/Hero"
import UserCta from "./sections/UserCta"
import AdvantagesCards from "./sections/AdvantagesCards"

function LandingPage () {

    return (
        <>
            <body className="landingPage">
                <Hero></Hero>
                <UserCta></UserCta>
                <AdvantagesCards></AdvantagesCards> 
            </body>
        </>
    );
}

export default LandingPage;