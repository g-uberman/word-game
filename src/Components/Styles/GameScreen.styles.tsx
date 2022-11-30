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
  }

  input[type="checkbox"]:checked + label {
    color: #000;
  }

  input[type="checkbox"] {
    display: none;
  }
`;
