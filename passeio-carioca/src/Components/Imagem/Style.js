import { styled } from "styled-components";

const ContainerImagem = styled.div`
.image-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
}

.image-container {
  outline: 1px solid blue;
  width:500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
}
.image-container, p {
  max-width: 80%;
}
img{
    border-radius: 10px;
}
.BodyContent{
  margin-top: 80px;
}
#end{
    display: flex;
    flex-direction: row;
}
#end img{
    width: 50px;
    height: 50px;
}
`;

export {ContainerImagem}