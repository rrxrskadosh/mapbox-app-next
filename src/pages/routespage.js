// Styled Components
import styled from "styled-components";

// Components
import DecisionBoard from "@/components/DecisionBoard";

const routespages = () => {
    return (
    <RouteWrap>
        <Map></Map>
        <DecisionBoard />
    </RouteWrap>
    )
}

export default routespages;

const RouteWrap = styled.div`
    display: flex;
    flex-direction: column;
    height:100vh;
`;

const Map = styled.div`
    background: #d62828;
    flex: 1;
`;