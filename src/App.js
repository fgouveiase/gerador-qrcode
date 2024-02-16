import { useState } from 'react';
import './App.css';
import QRCode from "react-qr-code";
// import QRCodeLink from 'qrcode.react'

function App() {
  const [link, setLink] = useState('')
  // const [qrcodeLink, setQrcodeLink] = useState('')


  function handleQrcode(e) {
    setLink(e.target.value);
    //handleGenerate(e.target.value)
  }

  return (
    <>
    <div className="container">

      <p> Gerador de QRCode</p>

      <QRCode
        value={link}
      />
    
      <input
        type='text'
        className='input'
        placeholder='Digite aqui o link do site'
        value={link}
        onChange={ (e) => handleQrcode(e) }
      />

    </div>
    </>
  );
}

export default App;
