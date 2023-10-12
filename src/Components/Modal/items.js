import React from 'react'

function DigitarInfo({Name}) {
  return (
    <div>
        <li>
            <div class="text-sm my-1">
              {Name}
            </div>
            <input className="text-sm w-5/6 border hover:border-2 border-black rounded" />
        </li>
    </div>
  );
}

export default DigitarInfo;