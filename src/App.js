import UseReducer from "./useReducer/UseReducer";


function App() {

  return (
    <>
    {/* this is for prop drilling **************** */}
    {/* <h1>Hello Prop Driling</h1>
    <ComA/> */}

    { /* this is for context API ********************* */ }
    {/* <h1>Hello Context API</h1>
    <ComA/> */}

    { /* this is for context API ********************* */ }
    {/* <h1>Hello useContext</h1>
    <ComA/> */}
    
    { /* this is use reducer ********************* */ }
    <h1>Hello Use Reducer</h1>
    <UseReducer/>

    </>
  );
}

export default App;
