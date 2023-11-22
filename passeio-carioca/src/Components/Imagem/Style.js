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
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
.image-container, p {
  max-width: 88%;
  
}
img{
  border-radius: 10px;
  max-width: 300px;
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
h2 {
  font-size: 18px;
  padding-right: 6.5em;
}

#end p{
  font-size: 13px;
}

#saiba-mais {
  padding-top: 1.5em;
  padding-bottom: 1.5em;
}

#saiba-mais a{
  text-decoration: none;
  margin-right: 30px;
  margin-left: 15px;
}
#mapa{
  min-width: 80%;
  min-height: 80%;
}
`;



export {ContainerImagem}