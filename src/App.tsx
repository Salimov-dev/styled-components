import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled, { keyframes } from "styled-components";

interface LogoImageProps {
  $shadowColor?: string;
  $isAnimation?: boolean;
}

interface StyledParagraphProps {
  $color?: string;
}

const Component = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const StyledLink = styled.a`
  transition: transform 0.2s ease-in-out, opacity 0.3s;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LogoImage = styled.img<LogoImageProps>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  animation: ${(props) => (props.$isAnimation ? logoSpin : "none")} 20s linear
    infinite;

  &:hover {
    filter: drop-shadow(0 0 2em ${(props) => props.$shadowColor || "white"});
  }
`;

const StyledHeader = styled.h1`
  color: yellow;
`;

const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${(props) => props.$color};
`;

const StyledCard = styled.div`
  padding: 2em;
`;

const StyledButton = styled.button`
  color: red;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Component>
      <LogoContainer>
        <StyledLink href="https://vite.dev" target="_blank">
          <LogoImage
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            $shadowColor="#646cffaa"
          />
        </StyledLink>

        <StyledLink href="https://react.dev" target="_blank">
          <LogoImage
            src={reactLogo}
            className="logo react"
            alt="React logo"
            $shadowColor="#61dafbaa"
            $isAnimation
          />
        </StyledLink>
      </LogoContainer>

      <StyledHeader>Vite + React</StyledHeader>

      <StyledCard>
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
        <StyledParagraph>
          Edit <code>src/App.tsx</code> and save to test HMR
        </StyledParagraph>
      </StyledCard>

      <StyledParagraph $color="#888">
        Click on the Vite and React logos to learn more
      </StyledParagraph>
    </Component>
  );
}

export default App;
