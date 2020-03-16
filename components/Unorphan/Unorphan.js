import React, { useState, useEffect} from 'react';

const Unorphan = ({text}) => {
  const [unorphanText, setUnorphanText] = useState(text);

  useEffect(() => {
    setUnorphanText(prev => {
      const arr = [...prev];
      arr[arr.length - 1] = makeUnorphanText(arr[arr.length - 1]);
      return arr;
    })
  }, [])

  const makeUnorphanText = (text) => {
    return  text.replace(/(\s([^\s]+))$/, '\u00A0$2');
  } 

  return (
    <>
      {unorphanText}
    </>
  )
}

export default Unorphan;