
// import Greeting from './Components/Greeting'
// import Greeting1 from './Components/Greeting1'
// import ParentComponent from "./ParentComponent"
// import Login from "./Components/conditional_rendering/Login"
// import Login1 from "./Components/conditional_rendering/Login1"
// import BasicRouting from "./Components/BasicRouting/BasicRouting"
// import BasicRouting1 from "./Components/BasicRouting1/BasicRouting1"
// import NestedRouting1 from "./Components/NestedRouting/NestedRouting1"
// import UncontrolledComponent from "./Components/ControlledandUncontrolled/UnControlledComponent";
import MyComponentWithUppercase from "./Components/HigherOrderComponent/HigherOrderComponent";

function App() {
  return (
    <>
      {/* <Greeting name={"john"} age={10} />
      <Greeting1 place={"Ernakulam"} pincode={682026}/> */}
      {/* <ParentComponent /> */}
      {/* <Login /> */}
      {/* <Login1 />  */}
      {/* <BasicRouting />  */}
      {/* <NestedRouting1 /> */}
      {/* <ControlledComponent /> */}
      {/* <UncontrolledComponent /> */}
      <MyComponentWithUppercase text={"hello"} />
    </>
  );
}

export default App;

