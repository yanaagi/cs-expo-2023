import React from 'react';

interface ButtonComponentProps {
  currentButton: number;
  changeButton: (buttonNumber: number) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ currentButton, changeButton }) => {
  return (
<<<<<<< HEAD
    <div className="flex space-x-2 sm:space-x-3 ml-20 sm:ml-28 mt-1">
      <div className="flex space-x-2 sm:space-x-4">
        <div
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer ${
            currentButton === 1
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
          onClick={() => changeButton(1)}
        ></div>
        <div
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer ${
            currentButton === 2
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
          onClick={() => changeButton(2)}
        ></div>
        <div
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer ${
            currentButton === 3
              ? "bg-coral-pink"
              : "bg-timberwolf"
          }`}
=======
    <div className="flex space-x-2 mt-1 ml-6 sm:ml-28 sm:space-x-3">
      <div className="flex space-x-1 sm:space-x-2">
        <div
          key={1}
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer text-sm sm:text-base ${currentButton === 1 ? "bg-coral-pink" : "bg-timberwolf"}`}
          onClick={() => changeButton(1)}
        ></div>
        <div
          key={2}
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer text-sm sm:text-base ${currentButton === 2 ? "bg-coral-pink" : "bg-timberwolf"}`}
          onClick={() => changeButton(2)}
        ></div>
        <div
          key={3}
          className={`border border-gray-300 p-1 sm:p-2 rounded-md cursor-pointer text-sm sm:text-base ${currentButton === 3 ? "bg-coral-pink" : "bg-timberwolf"}`}
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
          onClick={() => changeButton(3)}
        ></div>
      </div>
    </div>
  );
};

export default ButtonComponent;
