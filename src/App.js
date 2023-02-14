import Card from './component/card/Card'

const App = () => {
  document.title = 'Card Component'
  return (
    <Card className="container">
      <h1>Card Component</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, earum!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, ipsa
        quam deleniti inventore atque rem quod quidem saepe fugit error?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        consectetur sed aliquid adipisci consequatur animi ratione debitis alias
        provident natus odio eligendi sint facilis, ipsum repellendus quidem
        iusto deleniti, dolorem et ad porro unde nostrum! Molestiae corrupti
        voluptatum, cumque ab excepturi ipsa sunt necessitatibus perferendis.
        Libero nemo provident suscipit nisi.
      </p>
    </Card>
  )
}

export default App
