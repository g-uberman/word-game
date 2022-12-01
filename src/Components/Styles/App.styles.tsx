import styled from "styled-components";

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

export const MainSection = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteWrapper = styled.div`
    width: 95%;
    max-width: 800px;
    align-self: center;
    text-align: center;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (min-width: 800px) {
    padding: 3em;
    min-height: 800px;
    border-radius: 20px;
    border: 1px solid #eee;
    box-shadow: 0 10px 10px #00000011;
  }
`
