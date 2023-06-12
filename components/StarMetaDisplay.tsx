import styled from "@emotion/styled";
import { useGalaxyContext } from "../contexts/GalaxyContext";

const MetaContainer = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 480px;
  height: 320px;
  max-width: 40vw;
  max-height: 20vw;
  color: #0000004b;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  pointer-events: none;
`;

const MetaImgContainer = styled.img`
  width: 100%;
  height: 100%;
  padding: 12px;
  object-fit: cover;
`;

const StarMetaDisplay: React.FC = () => {
  const galaxyContext = useGalaxyContext();
  const { hoverStar } = galaxyContext;

  return (
    <>
      {hoverStar && hoverStar.id !== "" ? (
        <MetaContainer>
          <MetaImgContainer src={`/img/img${(+hoverStar.id % 11) + 1}.jpg`} />
        </MetaContainer>
      ) : null}
    </>
  );
};

export default StarMetaDisplay;
