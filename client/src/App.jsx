import { Hero, About, Services, Contact, Footer } from './sections';
import { Header } from './components';


const App = () => {
  return (
    <>
      <Header />
      <main className="pt-[10vh]">
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