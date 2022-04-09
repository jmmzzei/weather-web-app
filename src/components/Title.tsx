import { useContext } from 'react'
import { Context } from './Context'
import Loader from './Loader'

const Title = () => {
  let { main } = useContext(Context)

  return <h1 className="title">{main?.name ?? <Loader />}</h1>
}

export default Title
