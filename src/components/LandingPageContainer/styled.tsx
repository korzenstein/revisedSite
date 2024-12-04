import styled from "styled-components";

export const LandingPageContainer = styled.main<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  transition: background-color 0.5s ease-in-out;
`;

export const GeneralWrapper = styled.div`
  width: 85%;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  max-height: calc(100vh - 10rem);
`;

export const StyledH2 = styled.h2`
  border-bottom: 2px #231f20 solid;
  display: inline-block;
  line-height: 1.8rem;
  padding-bottom: 0.65rem;
  color: #231f20;
  margin-bottom: 18px;
  font-size: 2rem;
`;

export default LandingPageContainer;
