import { listElements } from './constants';
import ListElement from './ListElement';
const Landing = () => {
  return (
    <section>
      {listElements.map((item, idx) => (
        <ListElement title={item} index={idx + 1} key={item} />
      ))}
    </section>
  );
};

export default Landing;
