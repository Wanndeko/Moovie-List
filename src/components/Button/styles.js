import { styled } from 'styled-components'

export const MainButton = styled.button`
  border: ${(props) =>
    props.red ? '3px solid #ff0000' : ' 4px solid #ffffff'};
  border-radius: 30px;

  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  background-color: ${(props) => (props.red ? '#ff0000' : 'transparent')};
  color: #ffffff;

  &:hover {
    color: ${(props) => (props.red ? '#ffffff' : '#ff0000')};
    background: ${(props) => (props.red ? '' : '#ffffff')};
    box-shadow: ${(props) => (props.red ? '0px 0px 3px 3px #ff0000' : '')};
  }
`
