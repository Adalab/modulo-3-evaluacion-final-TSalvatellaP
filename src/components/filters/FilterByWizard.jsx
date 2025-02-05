import PropTypes from "prop-types";

function FilterByWizard({isWizard, setIsWizard}) {
    const handleWizardCheckbox = (ev) =>{
        setIsWizard(ev.target.checked);
    }
  return (
    <div className="checkbox-container" >
        <label htmlFor="wizard-checkbox" className="check-label"  >
            <input className="checkbox"
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