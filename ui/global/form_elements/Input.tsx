interface InputProps {
  updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  classNames?: string;
  name?: string;
  id?: string;
  type?: string;
}

const Input = ({
  updateInput,
  value,
  placeholder,
  required = false,
  autoComplete = 'off',
  classNames,
  name,
  id,
  type = 'text',
}: InputProps) => {
  return (
    <input
      onChange={updateInput}
      type={type}
      id={id}
      name={name}
      className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ${classNames}`}
      value={value}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
