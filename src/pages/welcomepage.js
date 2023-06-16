import styled from "styled-components";

// Components
import Header from "@/components/Header";
import DailyQuote from "@/components/DailyQuote";
import MapForm from "@/components/MapForm";

// Images
import IllustrationDelivery from "../../public/tracking-pana.svg";

const welcomepage = () => {
    return(
        <WelcomeWrapper>
            <Header />
            <DailyQuote />
            <MapForm />
            <WelcomeCartoon src={IllustrationDelivery.src} alt="Delivery" />
        </WelcomeWrapper>
    )
}

export default welcomepage;

const WelcomeWrapper = styled.div`
    heigth: 100%;
    padding: 20px 25px;
`;

const WelcomeCartoon = styled.img`
    width: 324px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
`;