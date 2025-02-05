import PropTypes from "prop-types";

function BtnReset({handleReset}) {
   return (
    <div>
      <button onClick={handleReset} className="btnReset">
        Reset
      </button>
    </div>
  )
}

BtnReset.propTypes = {
  handleReset: PropTypes.func,
}

export default BtnReset