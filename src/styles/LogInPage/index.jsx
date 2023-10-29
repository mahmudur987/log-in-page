import styled from "styled-components";

export const Maincontainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 30px;
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 1900px;
  width: 100%;
  display: flex;
  gap: 90px;
  @media only screen and (min-width: 0px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 543px;
  width: 100%;
  margin-top: 5%;
  img {
    width: 100%;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    max-width: 243px;
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 343px;
    width: 100%;
  }
`;

export const LoginFormContainer = styled.div`
  max-width: 1050px;
  width: 100%;
  min-height: 961px;
  display: flex;
  justify-content: center;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
`;

export const LoginForm = styled.form`
  max-width: 445px;
  width: 100%;
  min-height: 460px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;

  h2 {
    color: var(--Text-color, #04072f);
    text-align: center;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }
`;

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`;
export const Inputlabel = styled.label`
  color: var(--Text-color, #04072f);
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%;
`;
export const Input = styled.input`
  max-width: 445px;
  width: 95%;
  min-height: 35px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  outline: none;
  margin: 0px auto;
`;
export const PasswordInputWrapper = styled.p`
  max-width: 445px;
  width: 95%;
  min-height: 35px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  display: flex;
  align-items: center;
  padding-right: 10px;
  margin: 0 auto;
  input {
    border: 0px;
    outline: none;
  }
`;

export const Wrapper1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckboxFullContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  a {
    color: var(--Secondary---1, #f78719);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
  }
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    font-size: 12px;
    a {
      font-size: 12px;
    }
  }
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const ForgotPasswordLink = styled.a`
  color: var(--Secondary---1, #f78719);
  text-align: right;
  text-decoration: none;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  @media only screen and (min-width: 0px) and (max-width: 767px) {
    font-size: 13px;
    a {
      font-size: 12px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RegisterLink = styled.p`
  color: #04072f;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  a {
    color: var(--Secondary---1, #f78719);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
  }
`;
