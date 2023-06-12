import { useGalaxyContext } from "../contexts/GalaxyContext";

const StarsWithPhoto: React.FC = () => {
  const galaxyContext = useGalaxyContext();
  const { database2, hoverStar, setHoverStar } = galaxyContext;

  return (
    <>
      {database2.map((star) => {
        if (+star.x <= 0.01 || +star.y <= 0.01 || +star.x <= 0.01) return null;
        return (
          <mesh
            key={star.id}
            position={[+star.x, +star.y, +star.z]}
            onPointerEnter={() => setHoverStar(star)}
            onPointerOut={() => setHoverStar(null)}
          >
            <sphereGeometry />
            <meshBasicMaterial
              transparent
              opacity={hoverStar?.id === star.id ? 0.3 : 0.1}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default StarsWithPhoto;
