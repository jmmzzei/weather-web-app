type Props = {
  date?: string
  click?: () => void
}

export const FooterCard = ({ date, click }: Props) => (
  <div className="footerCard" onClick={click}>
    <h3>{date ?? ''}</h3>
  </div>
)
