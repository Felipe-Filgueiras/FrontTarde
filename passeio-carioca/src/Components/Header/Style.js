import { styled } from "styled-components";

const ContainerHeader = styled.div`
.Header{
  position: fixed;
  background-color: lightblue;
  min-width: 100%;
  min-height: 80px;
  margin-top: -100px;
  display: flex;
  flex-direction: row;
  align-items: left;
}

h3 {
  padding-left: 2em;
  padding-top: 0.5em;
  font-size: 15px;
}
p {
  font-size: 15px;
  padding-top: 1em;
  padding-left: 4em;
}
`;

export {ContainerHeader}