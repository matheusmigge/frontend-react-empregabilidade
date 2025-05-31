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
            <div className="landingPage">
                <Hero></Hero>
                <UserCta></UserCta>
                <AdvantagesCards></AdvantagesCards>
                <EnterpriseAdvantages></EnterpriseAdvantages>
                <PartnerCompanies></PartnerCompanies>
                <MapView></MapView>
            </div>
        </>
    );
}

export default LandingPage;