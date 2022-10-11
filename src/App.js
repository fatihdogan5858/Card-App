// import logo from './logo.svg'
import './App.css'
import Card from './components/Card'
import { useState } from 'react'

let arr = [
  {
    id: 1,
    title: 'Dağ 1',
    par: 'Açıklama 1',
  },
  {
    id: 2,
    title: 'Dağ 2',
    par: 'Açıklama 2',
  },
  {
    id: 3,
    title: 'Dağ 3',
    par: 'Açıklama 3',
  },
]
// function App() {
//   return (
//     <div>
//       <h1>başlık</h1>
//       <p>başlangıç</p>
//       <div className="Cards">
//         {arr.map(function ({ title, par }) {
//           return <Card title={title} par={par} />
//         })}
//       </div>
//     </div>
//   )
// }
// const kare = (sayi) => sayi * sayi

const App = () => {
  const [lesson, setLesson] = useState(11)
  return (
    <div onResize={() => console.log('resize oldu')}>
      <h1>başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(1)
        }}
      >
        Ders 1
      </button>
      <button
        onClick={() => {
          setLesson(lesson + 1)
        }}
      >
        Ders Arttır
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1)
        }}
      >
        Ders Azalt
      </button>

      <button
        onClick={() => {
          setLesson(100)
        }}
      >
        Ders 100
      </button>

      <p>başlangıç</p>
      <div className="Cards">
        {arr.map(({ title, par }, i) => (
          <Card
            key={`index ${i}`}
            title={title}
            par={par}
            lesson={lesson}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
// console.log('kare hesaplama', kare(5))

// const App = () => (
//   <div>
//     <h1>başlık</h1>
//     <p>başlangıç</p>
//     <div className="Cards">
//       {arr.map(({ title, par }) => (
//         <Card title={title} par={par} />
//       ))}
//     </div>
//   </div>
// )

export default App
