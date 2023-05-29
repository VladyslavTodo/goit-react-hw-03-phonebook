import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  align-items: center;
  border: 1px solid transparent;
  color: black;
  background-color: #d5f9ed;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 20px 20px 30px 20px;
  cursor: pointer;
  transition: all 0.3s linear 0s;
  box-shadow: rgb(67, 135, 112) 9px 9px 18px, rgb(149, 255, 248) -9px -9px 18px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
padding: 10px;

input {
	padding: 6px 10px;
	border-radius: 8px;
	border: 1px solid #ccc;

}`;

	
export const Button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid transparent;
  color: black;
  background-color: aquamarine;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 20px 20px 30px 20px;
  cursor: pointer;
  transition: all 0.3s linear 0s;
  box-shadow: rgb(67, 135, 112) 9px 9px 18px, rgb(149, 255, 248) -9px -9px 18px;

  &:hover {
    background-color: #60bc9d;
  }
`;