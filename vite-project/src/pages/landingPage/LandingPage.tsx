import "./LandingPage.css"
import Hero from "./sections/Hero"
import UserCta from "./sections/UserCta"
import AdvantagesCards from "./sections/AdvantagesCards"
import EnterpriseAdvantages from "./sections/EnterpriseAdvantages"
import PartnerCompanies from "./sections/PartnerCompanies"
import MapView from "./sections/MapView"

function LandingPage () {

    return (
        <>
            <body className="landingPage">
                <Hero></Hero>
                <UserCta></UserCta>
                <AdvantagesCards></AdvantagesCards>
                <EnterpriseAdvantages></EnterpriseAdvantages>
                <PartnerCompanies></PartnerCompanies>
                <MapView></MapView>
            </body>
        </>
    );
}

export default LandingPage;