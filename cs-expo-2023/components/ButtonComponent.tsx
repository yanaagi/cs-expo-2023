import React from 'react';

interface ButtonComponentProps {
  currentButton: number;
  changeButton: (buttonNumber: number) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ currentButton, changeButton }) => {
  return (
    <div className="flex space-x-3 ml-4 sm:ml-28 mt-1">
      <div className="flex space-x-4">
        <div
          className={`border border-gray-300 p-2 rounded-md cursor-pointer ${
            currentButton === 1
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
          onClick={() => changeButton(1)}
        ></div>
        <div
          className={`border border-gray-300 p-2 rounded-md cursor-pointer ${
            currentButton === 2
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
          onClick={() => changeButton(2)}
        ></div>
        <div
          className={`border border-gray-300 p-2 rounded-md cursor-pointer ${
            currentButton === 3
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
          onClick={() => changeButton(3)}
        ></div>
      </div>
    </div>
  );
};

export default ButtonComponent;
