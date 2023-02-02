interface LabelProps {
    htmlFor: string;
    classNames?: string;
    children: React.ReactNode;
}

const Label = ({htmlFor,classNames,children}:LabelProps) => {
  return (
    <label
    htmlFor={htmlFor}
    className={`block mb-2 text-primary-3 text-sm font-bold  ${classNames}}`}
  >
    {children}
  </label>  )
}

export default Label