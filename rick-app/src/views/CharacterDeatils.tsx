import { useParams } from 'react-router-dom'

function CharacterDetails() {
  const { id } = useParams()

  // Fetch the character details using the id
  // ...

  return (
    <div>
      <h1>Character Details</h1>
      {id}
    </div>
  )
}

export default CharacterDetails
