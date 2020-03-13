import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: rgba(66,0,130,0.8);
  color: rgba(255,255,255,0.8);
  border: none;

  &:hover {
    background-color: rgba(255,255,255,0.8);
    color: rgba(66,0,130,0.8);
    border: 1px solid purple;
  }
`;

const invertedButtonStyles = css`
  background-color: rgba(255,255,255,0.8);
  color: rgba(66,0,130,0.8);
  border: 1px solid black;

  &:hover {
    background-color: rgba(66,0,130,0.8);
    color: rgba(255,255,255,0.8);
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: RoxboroughCF;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
