export default function Filter(props) {
  const years = ["", 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007];

  const handleChange = (event) => {
    props.onFilterChange(event.target.value);
  };
  return (
    <select onChange={handleChange}>
      {years.map((year) => (
        <option value={year}>{year}</option>
      ))}
    </select>
  );
}
