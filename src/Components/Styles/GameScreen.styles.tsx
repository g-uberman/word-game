import styled from "styled-components";

export const ScreenWrapper = styled.div`
  width: 95%;
  max-width: 500px;
  min-height: 500px;
  padding: 1em;
  margin: 1em;
  border: 1px solid black;
  align-self: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  border: 2px solid #000;

  input {
    display: none;
  }

  label {
    margin: 0.5em;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.7em;
    color: #c8c8c8;
    padding: 5px 20px;
    position: relative;
  }

  input:checked + label {
    color: #000;
  }

  .correct::after {
    content: "correct";
    position: absolute;
    top: -0.7em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #32cd32;
  }

  .incorrect::after {
    content: "incorrect";
    position: absolute;
    top: -0.7em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #e01e1e;
  }

  @media screen and (min-width: 800px) {
    padding: 3em;
  }
`;
