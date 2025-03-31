import styled from "styled-components";
import { Card } from "./components/Card.styled.tsx";
import { CardImage } from "./components/CardImage.styled.tsx";
import { CardBody } from "./components/CardBody.styled.tsx";
import { CardTitle } from "./components/CardTitle.styled.tsx";
import { CardButtonsStyled } from "./components/CardButtons.styled.tsx";
import { CardButton } from "./components/CardButton.styled.tsx";
import { CardText } from "./components/CardText.styled.tsx";
import cardImage from "./img/imageContent.jpg";

function App() {
  return (
    <div className={`App`}>
      <Wrapper>
        <Card>
          <CardImage>
            <img src={cardImage} alt="" />
          </CardImage>
          <CardBody>
            <CardTitle>headline</CardTitle>
            <CardText>
              Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
              ornare in venen.
            </CardText>
            <CardButtonsStyled>
              <CardButton>See more </CardButton>
              <CardButton>Save</CardButton>
            </CardButtonsStyled>
          </CardBody>
        </Card>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100%;
  overflow: hidden;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  padding: 10px 15px;
  //background-color: #242424;
`;
