// Styled Components
import styled from "styled-components";

// Images
import Avatar from "../../public/roger.png"
import IconBell from "../../public/notification.svg"

const Header = () => {
    return(
        <Headerwrap>
            <UserInfo>
                <UserAvatar>
                    <UserImg src={Avatar.src} alt="Avatar" />
                </UserAvatar>
                <UserBox>
                    <WelcomeTxt>Welcome</WelcomeTxt>
                    <UserName>Roger Reyes</UserName>
                </UserBox>
            </UserInfo>
            <NotificationBell>
                <NotificacionIcon src={IconBell.src} alt="Bell" />
            </NotificationBell>
        </Headerwrap>
    )
}

export default Header

const Headerwrap = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 1%;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: flex-start;
`;
const UserAvatar = styled.div`
    width: 60px;
    height: 60px;
`;
const UserImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;
const UserBox = styled.div`
    margin-left: 12px;
`;
const WelcomeTxt = styled.span`
    font-size:12px;
    line-heigth: 1.5rem;
    font-weigth: normal;
    color: #fff;
    opacity: 0.8;

`;
const UserName = styled.h2`
    font-size: 1.3rem;
    line-heigth: 15px;
    font-weigth: 600;
    color: #fff;
`;
const NotificationBell = styled.div`
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        opacity: 0.7;
    }
`;
const NotificacionIcon = styled.img`
    width: 70%;
`;
