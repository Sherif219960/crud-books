// import './App.css'
import { Addform } from './Components/Addform/Addform'
import { BookContainer } from './Components/BookContainer/BookContainer'
import { Container } from './Components/Container/Container'
import Header from './Components/Header/Header'


export default function App() {

  return (
    <>
      <Header />
      <Container>
        <Addform />
        <BookContainer />
      </Container>
    </>
  )
}
