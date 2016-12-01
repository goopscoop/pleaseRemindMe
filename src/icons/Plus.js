import React from 'react';

export default function Plus({width = '50px', height = '50px'}) {
  return (
  <svg version="1.1" id="Plus"  x="0px" y="0px" viewBox="0 0 20 20" enableBackground="new 0 0 20 20" >
  <path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
  	C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
  	C15.952,9,16,9.447,16,10z"/>
</svg>
  );
}

Plus.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string
}
