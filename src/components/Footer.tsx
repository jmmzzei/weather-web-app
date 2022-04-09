import { FooterCard } from './FooterCard'
import useFetch from '../hooks/useFetch'

type Props = {
  click?: any
}

const Footer = ({ click }: Props) => {
  const [{ uniqueDate }]: any = useFetch('forecast')

  if (!uniqueDate) {
    return (
      <footer className="footer">
        {Array(5)
          .fill(null)
          .map((el) => (
            <FooterCard />
          ))}
      </footer>
    )
  }

  return (
    <footer className="footer">
      {uniqueDate.map(
        (e: any) =>
          e[1].length !== 0 && (
            <FooterCard
              date={e[0]}
              click={() => click(e[1])}
              key={e[1][0].dt}
            />
          ),
      )}
    </footer>
  )
}

export default Footer
