import React from 'react';
import Link from "next/link";

const ButtonComponent = ({ currentButton, changeButton }) => {
    return (
      <div className="flex space-x-4 ml-10">
        <div className="flex space-x-4">
          <button
            className={`border border-gray-300 p-2 rounded-md ${
              currentButton === 1
                ? "bg-coral-pink"
                : "bg-timberwolf"
            }`}
            onClick={() => changeButton(1)}
          ></button>
          <button
            className={`border border-gray-300 p-2 rounded-md ${
              currentButton === 2
                ? "bg-coral-pink"
                : "bg-timberwolf"
            }`}
            onClick={() => changeButton(2)}
          ></button>
          <button
            className={`border border-gray-300 p-2 rounded-md ${
              currentButton === 3
                ? "bg-coral-pink"
                : "bg-timberwolf"
            }`}
            onClick={() => changeButton(3)}
          ></button>
        </div>
      </div>
    );
  };
  
  export default ButtonComponent;
  