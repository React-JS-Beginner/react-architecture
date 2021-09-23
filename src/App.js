import "./App.css";
import babel from "./1.png";
import uni from "./2.png";
import bi from "./3.png";
import diffing from "./4.png";
import props from "./5.png";
import cycle from "./8.png";
import pvs from "./9.png";

function App() {
  return (
    <div className="App">
      <h1 className="header">React Architecture</h1>

      <h2>Think in React</h2>
      <p>React is a UI focused Library</p>
      <a href="https://reactjs.org/docs/thinking-in-react.html">
        https://reactjs.org/docs/thinking-in-react.html
      </a>

      <br />
      <br />

      <div>
        <h2>React 6 Gems Under The Hood</h2>
        <ul>
          <li>Jsx</li>
          <li>Components</li>
          <li>Props</li>
          <li>Events</li>
          <li>State</li>
          <li>Effect</li>
        </ul>
      </div>

      <br />

      {/* ////////////// Commands //////////////*/}
      <div>
        <h2>Commands</h2>

        <div className="all-center">
          <p>
            {" "}
            <span>npm</span> ( node package manager )
          </p>
          <p>
            {" "}
            <span>nmp</span> –v
          </p>
          <p>
            {" "}
            <span>npx</span> ( node package extension )
          </p>
          <p> cli ( command line interface )</p>
          <p>
            {" "}
            <span>creact-react-app</span> (command line tool)
          </p>

          <div className="nested">
            <li>a complete installed web pack</li>
            <li>
              few years ago developers need to learn <br /> the ( web pack
              installation, babel ) separately.
            </li>
            <li>babel transpiler</li>
            <li>babel compiler try it out like codepen editor</li>
          </div>
        </div>
      </div>

      <br />
      <img width={618} height={472} src={babel} alt="" />
      <br />
      <br />

      {/* ////////////// Files //////////////*/}
      <div>
        <h2>Files </h2>
        <ul>
          <li>package.json file</li>
          <li>Entry file - index.js</li>
          <li>getelementById(root) - index.html</li>
        </ul>
      </div>

      <br />

      {/* ////////////// JSX //////////////*/}
      <div>
        <h2>JSX</h2>

        <ul>
          <li>
            JSX stands for JavaScript XML. It is simply a syntax extension of
            JavaScript. <br /> It allows us to directly write HTML in React
            (within JavaScript code).
          </li>
          <li>JSX ( Syntactic Sugar of HTML )</li>
        </ul>
      </div>

      <br />

      {/* ////////////// Component Rendering //////////////*/}
      <div>
        <h2>Component Rendering</h2>
        <br />
        <a href="https://reactjs.org/docs/rendering-elements.html">
          https://reactjs.org/docs/rendering-elements.html
        </a>

        <div className="all-center">
          <p>
            Empty component tag can be given as{" "}
            <span>&#60;Component /&#62;</span>{" "}
          </p>
          <p>Unidirectional ( React faster than Angular )</p>
          <p>Bi-Directional ( Angular Bad Performance )</p>
        </div>
        <div>
          <img
            style={{ margin: "10px" }}
            width={232}
            height={352}
            src={uni}
            alt=""
          />
          <img
            style={{ margin: "10px" }}
            width={232}
            height={352}
            src={bi}
            alt=""
          />
        </div>

        <div className="all-center">
          <p>DOM rendering in React </p>
          <p>Virtual DOM</p>

          <div className="nested">
            <li>Book page correction soft copy example</li>
            <li>Diff Algo</li>
          </div>
        </div>

        <div>
          <img
            style={{ margin: "10px" }}
            width={626}
            height={286}
            src={diffing}
            alt=""
          />
        </div>
      </div>

      <br />
      <br />

      <div className="hooks">
        <h2>Hooks of React</h2>
        <ul>
          <li>useState Getter &#38; Setter</li>
          <li>
            We can’t just show variable’s value in UI directly <br /> by
            assigning them normallly in react because that’s immutable, <br />{" "}
            this task is belong to react’s default setInitial( ) mechanism.
          </li>
          <li>
            setInitial( ) funtion re-render &#38; shows the initial value on UI
          </li>
          <li>setInitial( ) is a asynchronous function</li>
          <li>Statefull Component</li>
          <li>Stateless Component / Presentational</li>
        </ul>
      </div>

      <br />
      <br />
      {/* /////////////////////props///////////////////// */}
      <div className="props">
        <h2>Props Drilling</h2>
        <br />
        <div>
          <img
            style={{ margin: "10px" }}
            width={626}
            height={386}
            src={props}
            alt=""
          />
        </div>
        <br />
        <h2>React unique key for arr.map( )</h2>
        <a href="https://reactjs.org/docs/lists-and-keys.html">
          https://reactjs.org/docs/lists-and-keys.html
        </a>
        <br />
        <h2>React Component LifeCycle</h2>
        <br />
        <div>
          <img
            style={{ margin: "10px" }}
            width={920}
            height={420}
            src={cycle}
            alt=""
          />
        </div>
                <br />
        <h2>Props V/S State</h2>
        <br />
        <div>
          <img
            style={{ margin: "10px" }}
            width={800}
            height={420}
            src={pvs}
            alt=""
          />
        </div>

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
