// Styled Components
import styled from "styled-components";

// Icons
import IconCar from "../../public/car.svg";
import IconBike from "../../public/bike.svg";
import IconBus from "../../public/bus.svg";
import IconWalk from "../../public/walk-directions.svg";

const DecisionBoard = () => {
    return(
        <DecisionWrap>
            <Traveltxt>Travel Choose</Traveltxt>
            <ChoiceWrap>
                <PickTravel>
                    <IconImg src={IconCar.src} alt="Car"></IconImg>
                    <TravelTitle>Car</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={IconBike.src} alt="Car"></IconImg>
                    <TravelTitle>Bicycle</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={IconBus.src} alt="Car"></IconImg>
                    <TravelTitle>Bus</TravelTitle>
                </PickTravel>
                <PickTravel>
                    <IconImg src={IconWalk.src} alt="Car"></IconImg>
                    <TravelTitle>Walking</TravelTitle>
                </PickTravel>
            </ChoiceWrap>

            <ReportTxt>Reports</ReportTxt>
            <ReportList>
                <ReportItem>
                    <RTime>
                        <Time>25</Time>
                        <RFormat>Min</RFormat>
                    </RTime>
                    <RBox>  
                        <Rstop>This route takes the longest path</Rstop>
                        <RIcon src={IconCar.src} alt=""></RIcon>
                    </RBox>  
                </ReportItem>
            </ReportList>
        </DecisionWrap>
    )
}

export default DecisionBoard;

const DecisionWrap = styled.div`
    flex:1;
    padding-bottom: 1.8rem;
`;

const Traveltxt = styled.h2`
    position: relative;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2rem;
    color: #fff;
    padding: 1.5rem 2rem;

    &:after {
        content: url(compass.svg);
        margin-left: 1rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        width: 2.8rem;
        height: 2.8rem;
    }
`;

const ChoiceWrap = styled.div`
    display: flex;
    padding: 12px 25px 25px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }
`;

const PickTravel = styled.div` 
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 1rem;
    padding: 1rem 1.4rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    transition: 0.3s all;

    &:hover {
        box-shadow: 0px 16px 20px #000;
        transform: translateY(-10px);
    }
`;

const IconImg = styled.img`
    width: 50px;
    height: 50px;
`;

const TravelTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
`;

const ReportTxt = styled.div`
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2.5rem;
    color: rgba(255, 255, 2555, 0.65);
    padding: 0 2rem;
`;

const ReportList = styled.div`
    padding: 0 2rem;
`;

const ReportItem = styled.div`
    display: flex;
    max-width: 80%;
    background: #fff;
    border-radis: 15px;
    border-radius:10px;
    margin: 1rem;
    margin-inline: auto;
    cursor: pointer;
    transition: 0.3s all;

    &:hover {
        transform: scale(0.95);
    }
    
`;
const RTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #f1c495;
    padding: 1rem;
    width: 120px;
`;

const Time = styled.h6`
    color: #0e2a47;
    font-size: 2.4rem;
    line-height: 1.8rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const RFormat = styled.span`
    color: #0e2a47;
`;

const RBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 1.2rem;
`;

const Rstop = styled.span`
    color: #0e2a47;
    font-weight: 600;
`;
const RIcon = styled.img`
    width: 3rem;
`;
