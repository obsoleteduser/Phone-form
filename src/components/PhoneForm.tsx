import { ReactFragment, ReactHTML, useState } from 'react';

const PhoneInput = () =>{
  const [value, setValue] = useState<string>('(555) 555-5555');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;

  
    inputValue = inputValue.replace(/\D/g, '');

    let formattedValue = '';

  
    if (inputValue.length >= 1) {
      formattedValue = '(' + inputValue.substring(0, 1);
    }

  
    if (inputValue.length > 1) {
      formattedValue += inputValue.substring(1, 4);
    }

    if (inputValue.length >= 4) {
      formattedValue += ') ' + inputValue.substring(4, 5);
    }

   
    if (inputValue.length > 5) {
      formattedValue += inputValue.substring(5, 8);
    }

   
    if (inputValue.length >= 7) {
      formattedValue += '-' + inputValue.substring(8, 10);
    }

    setValue(formattedValue);
  };

  const handleSubmit = () => {
 
    setValue('');
  };

  const isInputComplete = value.replace(/\D/g, '').length === 10;

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <button disabled={!isInputComplete} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default PhoneInput;
