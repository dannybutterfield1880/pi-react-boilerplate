import logo from './logo.svg';
import './App.css';
import PiNetworkClient from './utils/pi'

console.log('PiNetworkClient', PiNetworkClient)

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '2em' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
        Tobias
        </h3>

        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li>VS - Code : http://localhost:8080 </li>
          <li>React App: http://localhost:3000 </li>
          <li>Wifi Keyboard: http://localhost:7777 </li>
        </ul>

        <h3>Remote Connection:</h3>
        <p>
          First Connect phone through adb then 
          forward all needed ports to device
           localhost
        </p>

        <p>ports needed: <code>3000, 8080, 7777</code></p>
        <code>$ adb forward tcp:8080 tcp:8080 (vs-code)</code>
        <code>$ adb forward tcp:3000 tcp:3000 (node server)</code>
        <code>$ adb forward tcp:7777 tcp:7777 (wifi-keyboard)</code>


        <br />        
        <small>with multiple devices attached to adb</small>
        <code>$ adb -s 192.168.1.21:5555 forward tcp:8080 tcp:8080</code>
        <br />
        <small>connect to Termux via ssh</small>
        <code>$ ssh -p 8022 -i C:\Users\danny\Desktop\id_rsa 192.168.1.21</code>
      </header>
    </div>
  );
}

export default App;
