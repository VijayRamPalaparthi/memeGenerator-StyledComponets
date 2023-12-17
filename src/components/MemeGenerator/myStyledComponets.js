// Style your components here
import styled from 'styled-components'

export const SubmitButton = styled.button`
  font-family: 'open sans';
  font-size: 12px;
  font-weight: 500;
  color: white;
  background-color: #0b69ff;
  border: none;
  margin-top: 15px;
  height: 40px;
  border-radius: 5px;
  width: 150px;
  cursor: pointer;
`
export const BgContainer = styled.div`
  background-color: white;
  width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 70px;
`
export const FormHeading = styled.h1`
  font-family: 'open sans';
  font-size: 30px;
  font-weight: bold;
  color: #35469c;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #7e858e;
  margin-bottom: 2px;
`
export const InputBox = styled.input`
  border-radius: 4px;
  border: 1.5px solid #d7dfe9;
  width: 270px;
  height: 30px;
  outline: none;
  color: #5a7184;
`
export const Selection = styled.select`
  border-radius: 4px;
  border: 1.5px solid #d7dfe9;
  width: 270px;
  height: 30px;
  outline: none;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Text = styled.p`
text-align:center;
font-family:"open sans"
font-weight:bold;
color:white;
font-size:${props => props.fontSize}px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
`
