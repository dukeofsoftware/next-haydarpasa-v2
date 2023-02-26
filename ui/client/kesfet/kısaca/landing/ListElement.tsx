interface ListElementProps {
  index: number;
  title: string;
}

const ListElement = ({ index, title }: ListElementProps) => {
  return (
    <li className="before list-none	py-3">
      <p className="text-lg">
        <span className="md:text-extrabold text-[1.4rem] text-primary-3 md:text-[1.425rem]">
          {index})
        </span>{' '}
        {title}
      </p>
    </li>
  );
};

export default ListElement;
