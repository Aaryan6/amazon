import styled from "styled-components"

const Container = styled.div`
background: #232f3e;
`
const Wrapper = styled.div`
max-width: 900px;
margin: 0px auto;
padding: 60px 0 40px;
display: flex;
justify-content: space-between;
`
const Column = styled.div`
display: flex;
flex-direction: column;
width: ${props=>props.wid};
`
const Title = styled.span`
font-size: 16px;
font-weight: 700;
color: #fff;
margin-bottom: 10px;
`
const Links = styled.span`
color: #fff;
font-size: 14px;
margin: 5px 0;
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Column>
                <Title>Get to Know Us</Title>
                <Links>Careers</Links>
                <Links>Blog</Links>
                <Links>About Amazon</Links>
                <Links>Investor Relations</Links>
                <Links>Amazon Devices</Links>
                </Column>
                <Column>
                <Title>Make Money with Us</Title>
                <Links>Sell products on Amazon</Links>
                <Links>Sell on Amazon Business</Links>
                <Links>Sell apps on Amazon</Links>
                <Links>Become an Affiliate</Links>
                <Links>Advertise Your Products</Links>
                <Links>Sell-Publish with Us</Links>
                <Links>Host on Amazon Hub</Links>
                </Column>
                <Column>
                <Title>Amazon Payment Products</Title>
                <Links>Amazon Business Card</Links>
                <Links>Shop with Points</Links>
                <Links>Reload Your Balance</Links>
                <Links>Amazon Currency Converter</Links>
                <Links>Amazon Devices</Links>
                </Column>
                <Column wid="130px">
                <Title>Let Us Help You</Title>
                <Links>Amazon and Covid-19</Links>
                <Links>Your Account</Links>
                <Links>Your Orders</Links>
                <Links>Shiping Rates and Policies</Links>
                <Links>Return and Replacement</Links>
                <Links>Manage Your Content and Devices</Links>
                <Links>Amazon Assistant</Links>
                <Links>Help</Links>
                </Column>
            </Wrapper>
        </Container>
    )
}

export default Footer
