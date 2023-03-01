import { Navbar } from "components";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Wrapper>
      <Navbar />
      <body>
        <div>ㅇㅇ</div>
      </body>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;
