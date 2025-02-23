import React, { useState } from "react";

export default function ListItem({ itemData, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <li
      className={`p-2 mb-1 rounded flex ${
        isChecked ? "bg-green-700 blur-[0.5px]" : "bg-zinc-200/50"
      }`}
    >
      <input
        type="checkbox"
        className={`mr-2 bg-transparent`}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-slate-50">{itemData.content}</span>
      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200 cursor-pointer"
      >
        X
      </button>
    </li>
  );
}
