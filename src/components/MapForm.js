// Styled Components
import styled from "styled-components";

// Next Link (Routes)
import Link from "next/link";

// Icons
import IconLocation from "../../public/gps-location.svg";

const MapForm = () => {
    return(
        <MapFormWrapper>
            <Text>Choose Your Destination</Text>
            <Form>
                <InputBox>
                    <Label>Start</Label>
                    <Input placeholder="Current Location" />
                    <GPSIcon src={IconLocation.src} alt="Icon Location" />
                </InputBox>
                <InputBox>
                    <Label>End</Label>
                    <Input placeholder="Destination" />
                </InputBox>
                <Link href="/routespage">
                    <FormBtn>Get Direction</FormBtn>
                </Link>
            </Form>
        </MapFormWrapper>
    )
}

export default MapForm;

const MapFormWrapper = styled.div``;

const Text = styled.h3`
    font-size: 1.6rem;
    line-heigth: 20px;
    color: #fff;
    font-weigth: normal;
`;

const Form = styled.form`
    position: relative;
    margin: 2%;

    &::before {
        content: "";
        position:absolute;
        background: #fff;
        height: 60px;
        width: 3px;
        left: 10px;
        top: 30px;
    }
`;

const InputBox = styled.div`
    display: flex;    
    background: #fff;
    justify-content: center;
    align-items: center;
    max-width: 97%;
    padding: 0.6rem 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    &::before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        left: 6px;
        border-radius: 50px;
        background: #fff;
    }
`;

const Label = styled.label`
    color: #000;
    font-size: 1.2rem;
    line-heigth: 27px;
    font-weigth: normal;
    padding: 6px;
`;

const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    padding: 0.5rem;
    outline: none;
    text-overflox: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const GPSIcon = styled.img`
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const FormBtn = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 2rem;
    line-heigth: 35px;
    font-size: 1.7rem;
    font-weigth: 700;
    color: #fff;
    background: linear-gradient(
        0deg,
        rgba(31, 128, 255, 0.67),
        rgba(31, 128, 255, 0.67)
    ),
    linear-gradient(0deg, #0056c6, #0056c6), rgba(101, 207, 253, 0.3);
    border-radius: 10px;
    
    border: none;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        transform: scale(0.95)
    }
`;