// Styled Components
import styled from "styled-components";

// Images
import IconPointer from "../../public/pointer.svg";

const DailyQuote = () => {
    return(
        <QuoteWrapper>
            <Quote>With great power comes great responsibility!</Quote>
            <QuoteSignIcon src={IconPointer.src} alt="Icon Pointer"></QuoteSignIcon>
        </QuoteWrapper>
        
    )
}

export default DailyQuote;

const QuoteWrapper = styled.div`
    display: flex;
    max-width: 360px;
    margin: 3.5rem auto 2rem;
    padding: 18px 16px;
    background: linear-gradient(
        0deg,
        rgba(31, 128, 255, 0.67),
        rgba(31, 128, 255, 0.67)
    ),
    linear-gradient(0deg, #0056c6, #0056c6), rgba(101, 207, 253, 0.3);
    border-radius: 10px;
`;

const Quote = styled.p`
    font-size: 0.9rem;
    font-weigth: 500;
    line-heigth: 20px;
    color: #fff;
`;

const QuoteSignIcon = styled.img`
    width: 12%;
`;