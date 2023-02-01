interface InputProps {
    updateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
    required?: boolean;
    autoComplete?: string;
    classNames?: string;
    name?: string;
    id?: string;
    type: string;
    }


const Input = ({updateInput ,value,placeholder, required=false ,autoComplete="off", classNames ,name , id ,type }:InputProps) => {
  return (
    <input onChange={updateInput}
    type={type}
    id={id}
    name={name}
    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${classNames}`}
    value={value}
    placeholder={placeholder}
    required={required}
    autoComplete={autoComplete}

  />  )
}

export default Input