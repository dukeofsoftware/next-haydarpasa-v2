import { memo } from 'react';
interface LabelProps {
  htmlFor: string;
  classNames?: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, classNames, children }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-sm font-bold text-primary-3  ${classNames}}`}
    >
      {children}
    </label>
  );
};

export default memo(Label);
