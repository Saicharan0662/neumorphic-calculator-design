import './App.css';
import Button from './components/Button';

function App() {

  const btnTexts = ["C", "±", "%", "÷",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+"]

  return (
    <div className="App">
      <div className="container">
        <div className="screen"></div>
        <div className="btnCont">
          {btnTexts.map((text, index) => {
            return <Button key={index} text={text} />
          })}

          {/* long '0' btn */}
          <Button key="0" text={"0"} width={"100px"} />
          {/* '.' and '=' btns */}
          <Button key={'.'} text={"."} />
          <Button key={'='} text={"="} />
        </div>
      </div>
    </div>
  );
}

export default App;
