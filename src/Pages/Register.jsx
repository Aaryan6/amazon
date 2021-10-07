import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  flex-direction: column;
`;
const Logo = styled.img`
  width: 140px;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  background: #ffffff;
`;
const Form = styled.form``;
const Title = styled.span`
  font-size: 25px;
  font-weight: 500;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
const Label = styled.span`
  font-size: 14px;
  margin: 3px 0;
`;
const Input = styled.input`
  outline: none;
  padding: 5px;
`;
const Button = styled.button`
  width: 100%;
  padding: 5px;
  background: linear-gradient(to bottom, #ffedba, #ebc20b);
  border: 1px solid #eee;
  margin: 10px 0;
  cursor: pointer;
`;
const Info = styled.div`
  font-size: 13px;
  padding: 30px 0;
  border-bottom: 1px solid #aaa;
`;
const Option = styled.span`
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 20px 0 0;
`;
const Signin = styled.span`
  margin-left: 5px;
  color: #0d80cc;
  cursor: pointer;
`;
const Blue = styled.span`
  color: #0d80cc;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Logo src="/assets/amazon-logo.png" alt="logo" />
      <Wrapper>
        <Form>
          <Title>Create Account</Title>
          <InputItem>
            <Label>Your Name</Label>
            <Input type="text" />
          </InputItem>
          <InputItem>
            <Label>Email</Label>
            <Input type="email" />
          </InputItem>
          <InputItem>
            <Label>Password</Label>
            <Input type="password" />
          </InputItem>
          <InputItem>
            <Label>Password again</Label>
            <Input type="password" />
          </InputItem>
          <Button>Continue</Button>
        </Form>
        <Info>
          By creating an account or logging in, you agree to{" "}
          <Blue>Amazon’s Conditions</Blue>
          of Use and <Blue>Privacy Policy</Blue>.
        </Info>
        <Option>
          Already have an account? <Link to="signin" style={{textDecoration: "none"}}><Signin>Sign in</Signin></Link>
        </Option>
      </Wrapper>
    </Container>
  );
};

export default Register;
