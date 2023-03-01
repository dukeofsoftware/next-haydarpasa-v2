interface ListElementProps {
  index: number;
  title: string;
}

const ListElement = ({ index, title }: ListElementProps) => {
  return (
    <li className="list-none	py-3">
      <p className=" text-[0.7rem] xs:text-sm sm:text-base md:text-lg">
        <span className="md:text-extrabold text-[0.7rem] text-primary-3 xs:text-sm sm:text-base md:text-lg ">
          {index + 1})
        </span>{' '}
        {title}
      </p>
    </li>
  );
};

export default ListElement;
