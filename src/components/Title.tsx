type Props = {
  title?: any
}

export default ({ title }: Props) => (
  <h1 className="title">{title?.name ?? '...'}</h1>
)
