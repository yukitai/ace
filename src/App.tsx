import './App.css'
import Page from './components/Page'
import cardList from './data/cards.json'
import { CardDefition } from './utils/cardDefition'

function App() {
  return (
    <>
      <Page
        cardList={ cardList as CardDefition[] }
        layout={[4, 5]}
        layoutSize={[360, 480]}
      />
    </>
  )
}

export default App
