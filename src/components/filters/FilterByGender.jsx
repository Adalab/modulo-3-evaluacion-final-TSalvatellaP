import PropTypes from "prop-types";


function FilterByGender({filterGender, setFilterGender}) {
    const handleCheckbox = (ev) =>{
        const { value, checked } = ev.target;
        if (checked) {
            setFilterGender([...filterGender, value]); // 
          } else {
            setFilterGender(filterGender.filter(gender => gender !== value)); 
          }
    }
  return (
    <div>
        <label htmlFor="female">
            <input
            type="checkbox"
            value= "female"
            checked = {filterGender.includes ("female")}
            onChange={handleCheckbox}
            />
            Mujer
        </label>

        <label htmlFor="male">
            <input
            type="checkbox"
            value= "male"
            checked = {filterGender.includes ("male")}
            onChange={handleCheckbox}
            />
            Hombre
        </label>

    </div>
  )
}

FilterByGender.propTypes = {
    filterGender: PropTypes.array,
    setFilterGender: PropTypes.func
  };

export default FilterByGender