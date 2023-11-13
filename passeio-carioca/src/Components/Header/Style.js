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

h3{
    margin-left: 300px;
}
p {
    margin-top: 20px;
    margin-left: 40px;
}
`;

export {ContainerHeader}