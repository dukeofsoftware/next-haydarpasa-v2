interface ListElementProps {
  index: number;
  title: string;
}

const ListElement = ({ index, title }: ListElementProps) => {
  return (
    <li className="list-none	py-3">
      <p className=" text-[0.7rem] xs:text-sm sm:text-base md:text-lg">
        <span className="md:text-extrabold text-[0.7rem] xs:text-sm sm:text-base md:text-lg text-primary-3 ">
          {index +1})
        </span>{' '}
        {title}
      </p>
    </li>
  );
};

export default ListElement;
