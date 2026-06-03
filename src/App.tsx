import { useState } from "react";
import "./App.css";

function App() {
  const [headValue, setheadValue] = useState(0);
  const [randomNo, setRandomNo] = useState(0);
  const coinFlip = () => {
    const random = Math.floor(Math.random() * 101);
    setRandomNo(random);
    const isHead = randomNo <= headValue;
    alert(
      isHead
        ? `You got heads! (You rolled ${randomNo})`
        : `You got tails! (You rolled ${randomNo})`,
    );
  };
  return (
    <>
      <section id="center">
        <div>
          <h1>Totally not biased 50-50 Coinflip</h1>
          <p>
            User can influence the coinflip odds, simply edit the chance for a
            heads.
          </p>
        </div>
        <div>
          <label htmlFor="heads_rate">
            What percentage should we be hitting heads?
          </label>
          <br></br>
          <input
            type="number"
            name="heads_rate"
            value={headValue}
            min="0"
            max="100"
            placeholder="50"
            onChange={(e) => setheadValue(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <p>
            This means that the current chance of tails is: {100 - headValue}%
          </p>
        </div>
        <div>
          <button onClick={coinFlip}>Hit that shit!</button>
        </div>
      </section>
    </>
  );
}

export default App;
