import styled from "styled-components";

export const GameField = styled.div`
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

  /* prevent text selection */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

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

  input:checked + label.correct {
    color: #2ab72a;
  }

  .correct::after {
    content: "correct";
    position: absolute;
    top: -0.7em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #2ab72a;
  }

  input:checked + label.incorrect {
    color: #e35e4c;
  }

  .incorrect::after {
    content: "incorrect";
    position: absolute;
    top: -0.7em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #e35e4c;
  }

  .unselected::after {
    content: "incorrect";
    position: absolute;
    top: -0.7em;
    right: 0;
    left: 0;
    font-size: 0.7em;
    color: #e35e4c;
  }

  @media screen and (max-width: 350px) {
    label {
      line-height: 1.55em;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 3em;
  }
`;
