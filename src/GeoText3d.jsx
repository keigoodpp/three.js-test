import { Text3D } from '@react-three/drei'

const GeoText3d = () => {
  // ランダムな位置を生成する関数
  const getRandomPosition = () => {
    return [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5];
  }

  // テキストの配列
  const texts = ['亜', '伊', '宇', '絵', '尾', '課', 'W', 'o', 'r', 'l', 'd'];

  return (
    <>
      {texts.map((text, index) => (
        <Text3D
          key={index}
          position={getRandomPosition()}
          font="fonts/Noto Sans JP Black_Regular.json"
          height={1}
          lineHeight={0.6}
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.1}
        >
          {text}
          <meshLambertMaterial attach="material" color="yellow" />
        </Text3D>
      ))}
    </>
  )
}

export default GeoText3d