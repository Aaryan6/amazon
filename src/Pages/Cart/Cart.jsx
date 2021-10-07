import styled from "styled-components";

const Container = styled.div`
`;
const Wrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding: 20px;
  border-bottom: 1px solid #444;
`;
const Products = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  margin-right: 10px;
  background: #fff;
  margin: 20px;
  }
`;
const ProductItem = styled.div`
  display: flex;
  padding: 30px;
  border-top: 1px solid #ddd;
`;
const Image = styled.img`
  width: 100px;
  height: 100%;
  object-fit: contain;
  margin-right: 50px;
`;
const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
const Price = styled.span`
  color: #dd8206;
  font-size: 17px;
  margin: 5px 0;
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #${(props) => props.color};
  margin: 5px 0;
  border: 1px solid #999;
`;
const BrandName = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  margin-top: 5px;
`;
const Summery = styled.div`
  flex: 0.8;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px 30px;
  margin: 20px;
`;
const SummeryTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 20px 0;
`;
const SummeryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;
const Text = styled.div``;
const Total = styled.div`
    font-size: 23px;
    font-weight: 700;
`;
const TotalNumber = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
`;
const Number = styled.div`
    display: flex;
    align-items: center;
`;
const Rupee = styled.div`
    margin: 0 5px;
`;
const Checkout = styled.div`
    background: #fddd27;
    padding: 8px;
    text-align: center;
    font-weight: 600;
    color: #333;
    margin-top: 20px;
`

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Products>
          <Title>Shopping Cart</Title>
          <ProductItem>
            <Image src="/assets/m1.jpg" />
            <Info>
              <Name>
                Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek
                Helio G35 Octa core Processor
              </Name>
              <Price>&#8377;9,999</Price>
              <Color color="3f9be6"></Color>
              <BrandName>Redmi</BrandName>
            </Info>
          </ProductItem>
          <ProductItem>
            <Image src="/assets/m2.webp" />
            <Info>
              <Name>
                Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek
                Helio G35 Octa core Processor
              </Name>
              <Price>&#8377;12,300</Price>
              <Color color="e4e3e3"></Color>
              <BrandName>Redmi</BrandName>
            </Info>
          </ProductItem>
          <ProductItem>
            <Image src="/assets/m3.webp" />
            <Info>
              <Name>
                Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek
                Helio G35 Octa core Processor
              </Name>
              <Price>&#8377;8,500</Price>
              <Color color="071b41"></Color>
              <BrandName>Redmi</BrandName>
            </Info>
          </ProductItem>
        </Products>
        <Summery>
          <SummeryTitle>Order Summery</SummeryTitle>
          <SummeryItem>
            <Text>SubTotal Price</Text>
            <Number><Rupee>&#8377;</Rupee>30,799</Number>
          </SummeryItem>
          <SummeryItem>
            <Text>Estimated Price</Text>
            <Number><Rupee>&#8377;</Rupee>32,500</Number>
          </SummeryItem>
          <SummeryItem>
            <Text>Shopping Discount</Text>
            <Number>-<Rupee>&#8377;</Rupee>1,701</Number>
          </SummeryItem>
          <SummeryItem>
            <Total>Total</Total>
            <TotalNumber><Rupee>&#8377;</Rupee>30,799</TotalNumber>
          </SummeryItem>
          <Checkout>CHECKOUT NOW</Checkout>
        </Summery>
      </Wrapper>
    </Container>
  );
};

export default Cart;
