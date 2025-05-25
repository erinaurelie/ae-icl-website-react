import { Hero, About, Services, Contact, Footer } from './sections';
import { Header } from './components';


const App = () => {
  return (
    <>
      <Header />
      <main>
          <Hero />
          <About />
          <Services />
          <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;