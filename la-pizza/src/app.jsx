import logoImg from './assets/logo.svg'
import { Card } from './components/card'
import laCumaImg from './assets/la-cuma.png'

export function App() {
  return (
    <>
      <div className="container">
        <img src={logoImg} alt="La Pizza Pedaço da Itália" className='logo' />
      </div>

      <div className='products-container'>
        <h1 className='title'>Mais vendidas</h1>
       
        <div className='products'>
          <Card
            imgUrl={laCumaImg}
            name='La Cuma'
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            price="29,90"
          />
        </div>
      </div>
    </>
  )
}