import './index.css'

const Card = props => {
  const {eachItem} = props
  const {image, name} = eachItem
  return (
    <li className="each-card">
      <img src={image} />
      <h1 className="each-card-name">{name}</h1>
    </li>
  )
}

export default Card
