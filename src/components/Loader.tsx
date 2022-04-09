import { FC } from 'react'
import ContentLoader from 'react-content-loader'

type Props = {
  width?: number
  height?: number
  mb?: number
}

const Loader: FC<Props> = ({ width = 350, height = 50, mb = 20 }) => (
  <div style={{ marginBottom: mb }}>
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width={width} height={height} />
    </ContentLoader>
  </div>
)

export default Loader
