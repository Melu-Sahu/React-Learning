import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(10);
  const [numAllow, setNumAllow] = useState(false);
  const [sCharAllow, setSCharAllow] = useState(false);


  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (numAllow) {
      str += '1234567890';
    }

    if (sCharAllow) {
      str += "!@#$%^&*-_=+\|;:~'\",<.>/?";
    }

    for (let i = 1; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);

  }, [length, sCharAllow, numAllow, setPassword]);


  useEffect(() => {
    passwordGenerator();

  }, [length, passwordGenerator, numAllow, sCharAllow]);


  const onCopyClick = useCallback(() => {

    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);

    
    // if (!navigator || !navigator?.clipboard) {
    window.navigator.clipboard.writeText(`${password}`);
    // or
    // navigator.clipboard.writeText(`${password}`);

    // }
  }, [password]);

  // OR, Above is effecient way.

  /*
    function onCopyClick(){
  
      window.navigator.clipboard.writeText(`${password}`);
        // or
        // navigator.clipboard.writeText(`${password}`);
    }
    */


  return (
    <div className='border-2 border-zinc-400 p-4  px-7 rounded-xl bg-stone-600'>

      <h1 className='p-3 text-'>Password Generator</h1>

      <input className='rounded-l-xl w-96 px-3 py-2 border-1 outline-none my-4' readOnly type='text' value={password} ref={passwordRef} />
      <button className='px-4 py-2 bg-blue-600 rounded-r-xl' onClick={onCopyClick}>Copy</button>

      <div>
        <input type='range' className='cursor-pointer mx-1' min={5} max={20} value={length} onChange={(e) => { setLength(e.target.value) }} />
        <label className='mx-1'>Length :{length}</label>
        <input type='checkbox' className='mx-1' defaultChecked={numAllow} onChange={() => { setNumAllow((numPrev) => !numPrev) }} />
        <label className='mx-1'>Number Allowed</label>
        <input type='checkbox' className='mx-1' defaultChecked={sCharAllow} onChange={() => { setSCharAllow((charPrev) => !charPrev) }} />
        <label className='mx-1'>Special Character Allowed</label>
      </div>
    </div>
  )
}

export default App
