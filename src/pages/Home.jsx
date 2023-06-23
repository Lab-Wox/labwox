import { Banner, Hero, Onboarding, ProductList } from "../components"
import Cta from "../components"

const Home = () => {
  return (
    <main className="bg-whitebg">
      <Hero/>
      <Banner />
      <ProductList />
      <Onboarding />
      <Cta/>
    </main>
  )
}

export default Home