interface ButtonProps {
  label: string;
  handle: () => void;
  disabled?: boolean;
}

const Button = ({ label, handle, disabled }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handle}
      className={`${label === "Add task" ? "border-2 border-blue-500 p-1 rounded-[10px] cursor-pointer hover:bg-blue-400" : label === "Edit task" || label === "Save" ? "border-2 border-green-500 p-1 rounded-[10px] cursor-pointer hover:bg-green-400" : !disabled ? "border-2 border-red-500 p-1 rounded-[10px] cursor-pointer hover:bg-red-400" : "cursor-none"} font-medium`}
    >
      {label}
    </button>
  );
};

export default Button;
