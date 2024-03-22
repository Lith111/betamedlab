// الصفحة التعريفة بالموقع صورة بالخلفية و تحية من الموقع  
import AboutUs from "../../components/AboutUs/AboutUs"
import MyConnect from "../../components/MyConntect/MyConntect"
 import OurAnalytics from "../../components/OurAnalytics/OurAnalytics"
import SidbarHome from "../../components/SidbarHome/SidbarHome"

const Home = () => {
  return (
    <section className='Home'>
      <SidbarHome/>
      <AboutUs/>
      <OurAnalytics/>
      <MyConnect />
    </section>
 ) 
}

export default Home