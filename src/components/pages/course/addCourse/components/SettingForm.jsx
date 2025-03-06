"use client"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const SettingsForm = ({ courseData, handleInputChange, onPrevious, onSave, isLoading }) => {
  return (
    <div className="add-course-info">
      <div className="add-course-inner-header">
        <h4>Course Settings</h4>
      </div>
      <div className="add-course-form">
        <form action="#">
          <div className="input-block">
            <label className="add-course-label">Note by Trainer</label>
            <textarea
              className="form-control"
              name="requirements"
              value={courseData.requirements || ""}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="input-block">
            <label className="add-course-label">Course Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              name="course_price"
              value={courseData.course_price || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-block">
            <label className="add-course-label">Discount Percent</label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              name="discount_percent"
              value={courseData.discount_percent || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-block">
            <label className="add-course-label">Price After Discount</label>
            <input
              type="number"
              className="form-control"
              placeholder="0"
              name="after_discount_price"
              value={courseData.after_discount_price || ""}
              readOnly
            />
          </div>

          <div className="input-block">
            <label className="add-course-label">Coupon Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter coupon code"
              name="coupon_code"
              value={courseData.coupon_code || ""}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className="widget-btn">
        <Link className="btn btn-black prev_btn" onClick={onPrevious}>
          Previous
        </Link>
        <Link
          to="#"
          className={`btn ${isLoading ? "btn-secondary" : "btn-info-light"} next_btn`}
          onClick={onSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Saving...
            </>
          ) : (
            "Save Course"
          )}
        </Link>
      </div>
    </div>
  )
}

// Add PropTypes for validation
SettingsForm.propTypes = {
  courseData: PropTypes.shape({
    requirements: PropTypes.string,
    course_price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    discount_percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    after_discount_price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    coupon_code: PropTypes.string
  }),
  handleInputChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

// Add default props
SettingsForm.defaultProps = {
  courseData: {},
  isLoading: false
}

export default SettingsForm