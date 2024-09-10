function App() {
  const message = 'Hello REact'

  const myObj = {
    name: 'katie',
    age: 39
  }

  return (
    // adjacent element but always be wrapped in One parent element
    <>
      <h1>{message}</h1>
      <p>Hi my name is {myObj.name} and I am {myObj.age} </p>
    </>
  );
}

export default App;
