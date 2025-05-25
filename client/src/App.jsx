import { Header, Hero, About, Services, Contact, Footer } from './sections';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id='home'>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;