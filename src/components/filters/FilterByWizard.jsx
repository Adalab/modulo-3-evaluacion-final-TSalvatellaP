import PropTypes from "prop-types";

function FilterByWizard({isWizard, setIsWizard}) {
    const handleWizardCheckbox = (ev) =>{
        setIsWizard(ev.target.checked);
    }
  return (
    <div>
        <label htmlFor="">
            <input 
            id="wizard-checkbox"
            type="checkbox" 
            checked = {isWizard}
            onChange={handleWizardCheckbox}
            />
        Solo magos
        </label>
    </div>
  )
}

FilterByWizard.propTypes = {
    isWizard: PropTypes.bool,
    setIsWizard: PropTypes.func
}
export default FilterByWizard