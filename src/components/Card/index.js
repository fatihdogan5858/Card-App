import './Card.css'

// function Card({ title, par }) {
//   return (
//     <div className="card">
//       <h6>{title} </h6>
//       <p>{par}</p>
//       <button>DEVAMI</button>
//     </div>
//   )
// }
const Card = ({ title, par, lesson, index }) => (
  <div className="card">
    <h6>{title} </h6>
    <b>{index}</b>
    <p>{par}</p>
    {lesson > 20 && index === 0 && <div> ileri düzey</div>}
    <button>DEVAMI</button>
  </div>
)

export default Card
