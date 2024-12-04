import styled from "styled-components";

const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  height: 100%;
  width: 100%;
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
`;

export const H2 = styled.h2`
  border-bottom: 2px black solid;
  display: inline-block;
  color: #231f20;
  line-height: 1.8rem;
  padding-bottom: 0.65rem;
`;

export default LandingPageContainer;
