import './App.css';


import {Greeting, Message, Button} from './components';

function App() {

  const pam = () => {
    alert("pam");
  };

  return (
    <div>
      <Greeting name="ivan" />
      <Message text="gggjgdffg" />
      <Button onBtnClick={pam} />
    </div>
  );
}

export default App;
