import styled from "styled-components";

export const StyledWord = styled.input`
  /* display: inline-block; */
  margin: 1em;
  cursor: pointer;
  font-weight: 500;
  font-size: 2em;
  type: "checkbox";
`;

export const ScreenWrapper = styled.div`
  height: 600px;
  width: 95%;
  max-width: 600px;
  border: 1px solid black;
  align-self: center;
  text-align: center;
  padding: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  input[type="checkbox"] + label {
    margin: 1em;
    cursor: pointer;
    font-weight: 500;
    font-size: 2em;
    color: #c8c8c8;
    padding: 5px 20px;
    position: relative;
  }

  input[type="checkbox"]:checked + label {
    color: #000;
  }

  input[type="checkbox"] {
    display: none;
  }

  label.correct::after {
    content: "correct";
    position: absolute;
    top: -0.5em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #32cd32;
  }

  label.incorrect::after {
    content: "incorrect";
    position: absolute;
    top: -0.5em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #e01e1e;
  }
`;
