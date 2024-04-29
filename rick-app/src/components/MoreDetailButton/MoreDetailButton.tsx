import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type MoreDetailButtonProps = {
  id: number
  name: string
}
const MoreDetailButton: FC<MoreDetailButtonProps> = ({
  id,
  name
}): JSX.Element => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`/characters/${id}`)}
    >{`About ${name}`}</button>
  )
}

export default MoreDetailButton
