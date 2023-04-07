import { listElements } from './constants';
import ListElement from './ListElement';
const Landing = () => {
  return (
    <section className="mt-12">
      {listElements.map((item, idx) => (
        <ListElement title={item} index={idx} key={item} />
      ))}
    </section>
  );
};

export default Landing;
