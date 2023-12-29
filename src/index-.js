import {useState} from 'react';
import ReactDOM from 'react-dom';
import './myStyle.css';

function Rigged() {
	const [myBag, setMyBag] = useState("chanel");

  const newBag = (event) => {
    setMyBag(event.target.value)
	}

  return (
    <section>
	    <h1>가장 관심있는 백 브랜드는?</h1>
	    <form>
				<select value={myBag} onChange={newBag}>
					<option value="hermes">hermes</option>
					<option value="chanel">chanel</option>
					<option value="dior">dior</option>
				</select>
			</form>
    </section>
	)
}
ReactDOM.render(<Rigged />, document.getElementById('root'));


		