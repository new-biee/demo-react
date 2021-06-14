const Home = () => {

    const handldeClick = (e) =>{
        console.log('hello, ninjas', e);
    }

    const handldeClickAgain = (name, e) =>{
        console.log('hello' + name, e.target);
    }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handldeClick}>Click me</button>
      <button onClick={(e) =>{
          handldeClickAgain('mario', e);
      }}>Click me Again</button>
    </div>
  );
};

export default Home;
