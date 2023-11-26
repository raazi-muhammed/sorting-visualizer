import { useAppSelector } from "../../app/hooks";

const SortGraph = () => {
  const numbers = useAppSelector((state) => state.numbers);

  return (
    <section className="graph">
      {numbers.originalArray.map((val, i) => (
        <div
          key={i}
          style={{
            height: `${(val / Math.max(...numbers.originalArray)) * 100}%`,
          }}
          className={`graph--bar ${
            numbers?.switching.includes(i)
              ? "bar--danger"
              : numbers?.comparing.includes(i)
              ? "bar--accent"
              : ""
          }`}
        >
          <p className="graph--text">{val}</p>
        </div>
      ))}
    </section>
  );
};

export default SortGraph;
