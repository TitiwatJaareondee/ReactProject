import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
  const helloData = [
    { name: "Titiwat", surname: "Jaareondee"},
    { name: "Tom", surname: "Paul"}
  ]

  return (
    <div className='App'>
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} surname={data.surname} />
      ))}

      <Contact email="earth37570@gmail.com" phone="0993516839" />
    </div>
  );
}

export default App;
