interface InputProp {
  input: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ input, handleInput }: InputProp) => {
  return (
    <input
      type="text"
      value={input}
      onChange={handleInput}
      placeholder="Insert a task..."
      className="border-b focus:outline-0 placeholder:italic font-medium input"
    />
  );
};

export default Input;
