interface LabelProps {
    htmlFor: string;
    classNames?: string;
    children: React.ReactNode;
}

const Label = ({htmlFor,classNames,children}:LabelProps) => {
  return (
    <label
    htmlFor="mail"
    className={`block mb-2 text-sm font-bold text-gray-900 ${classNames}}`}
  >
    {children}
  </label>  )
}

export default Label