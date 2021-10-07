import React from "react";
import styled from "styled-components";
import {
  RoomOutlined,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Topbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: #131921;
  height: 60px;
  overflow: hidden;
  z-index: 999;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: #fff;
  width: 100%;
`;
const Logo = styled.img`
  width: 97px;
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
const Address = styled.div`
  display: flex;
  margin-left: 10px;
`;
const AdText = styled.div`
  display: flex;
  flex-direction: column;
`;
const AdTopText = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
const AdBottomText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const NavCenter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
  svg {
    padding: 0 5px;
    background: #febd69;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100%;
    width: 30px;
    fill: #243036;
  }
`;
const Search = styled.input`
  flex: 1;
  padding: 0 5px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  outline: none;
  height: 100%;
  width: 30px;
`;
const Select = styled.select`
  height: 100%;
  outline: none;
  border: none;
  width: 51px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  background: #dadada;
  padding: 0 6px;
  color: #0f1111;
`;
const Option = styled.option``;
const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
const IndianFlag = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 10px 0 15px;
`;
const AccountDetail = styled.div`
  display: flex;
  margin: 0 10px;
  flex-direction: column;
`;
const AcTopText = styled.div`
  font-size: 12px;
  font-weight: 400;
`;
const AcBottomText = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const OrderDetail = styled.span`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;
const OrTop = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
const OrBottom = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const Basket = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    width: 35px !important;
    height: 35px !important;
  }
`;
const Cart = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const BottomBar = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background: #232f3e;
  overflow: hidden;
`;
const BottomNav = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  svg {
    fill: #fff !important;
  }
`;
const Options = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin: 0 10px;
  color: #fff;
`;
const AdImage = styled.img`
  margin-left: 10px;
`;

const Navbar = () => {
  return (
    <>
      <Topbar>
        <Nav>
          <NavLeft>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo src="/assets/amazon-logo.svg" alt="" />
            </Link>
            <Address>
              <RoomOutlined
                style={{
                  alignSelf: "flex-end",
                  height: "21px",
                  marginBottom: "2px",
                }}
              />
              <AdText>
                <AdTopText>Hello</AdTopText>
                <AdBottomText>Select your address</AdBottomText>
              </AdText>
            </Address>
          </NavLeft>
          <NavCenter>
            <Select>
              <Option value="All">All</Option>
              <Option value="All">Electronics</Option>
              <Option value="All">Clothes</Option>
              <Option value="All">Interior</Option>
              <Option value="All">Decoration</Option>
              <Option value="All">Toys</Option>
            </Select>
            <Search></Search>
            <SearchRounded />
          </NavCenter>
          <NavRight>
            <IndianFlag src="/assets/india.png" alt="" />
            <Link to="/signin" style={{textDecoration: "none", color:"#fff", cursor: "pointer"}}>
            <AccountDetail>
              <AcTopText>Hello, Sign in</AcTopText>
              <AcBottomText>Account & Lists</AcBottomText>
            </AccountDetail>
              </Link>
            <OrderDetail>
              <OrTop>Returns</OrTop>
              <OrBottom>& Orders</OrBottom>
            </OrderDetail>
            <Basket>
              <Link to="/cart" style={{textDecoration: "none", color:"#fff", cursor: "pointer",display:"flex",alignItems:"end"}}>
              <ShoppingCartOutlined />
              <Cart>Cart</Cart>
              </Link>
            </Basket>
          </NavRight>
        </Nav>
      </Topbar>
      <BottomBar>
        <BottomNav>
          <Menu />
          <Options>All</Options>
          <Options>Mobile</Options>
          <Options>Best Sellers</Options>
          <Options>Customer Service</Options>
          <Options>Fashion</Options>
          <Options>Electronics</Options>
          <Options>Prime</Options>
          <Options>Amazon Pay</Options>
          <Options>Today's Deals</Options>
          <Options>Computers</Options>
          <Options>Home & Kitchen</Options>
          <Options>New Releases</Options>
          <AdImage src="/assets/shopnow.jpg" alt="" />
        </BottomNav>
      </BottomBar>
    </>
  );
};

export default Navbar;
