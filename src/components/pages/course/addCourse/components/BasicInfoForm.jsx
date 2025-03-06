"use client"
import Select from "react-select"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import PropTypes from 'prop-types'

const BasicInfoForm = ({
  courseData,
  errors,
  categoryOptions,
  levelOptions,
  languageOptions,
  handleInputChange,
  handleSelectChange,
  handleEditorChange,
  selectStyle,
  errorStyle,
  onContinue,
}) => {
  return (
    <div className="add-course-info">
      <div className="add-course-inner-header">
        <h4>Basic Information</h4>
      </div>
      <div className="add-course-form">
        <form action="#">
          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Course Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Title of your Course"
              name="course_title"
              value={courseData.course_title || ""}
              onChange={handleInputChange}
            />
            {errors.course_title && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.course_title}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Courses Category / Discipline
            </label>
            <div className="w-full">
              <Select
                options={categoryOptions}
                onChange={handleSelectChange("course_category")}
                placeholder="Select Category"
                styles={selectStyle}
                isMulti
                value={categoryOptions.filter((option) => 
                  courseData.course_category_ids?.includes(option.value)
                )}
              />
            </div>
            {errors.course_category_name && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.course_category_name}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Courses Level
            </label>
            <div className="">
              <Select
                options={levelOptions}
                onChange={handleSelectChange("course_level")}
                placeholder="Select Level"
                styles={selectStyle}
                isMulti
                value={levelOptions.filter((option) => 
                  courseData.course_level_ids?.includes(option.value)
                )}
              />
            </div>
            {errors.course_level_name && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.course_level_name}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Course Language
            </label>
            <div className="position-relative">
              <Select
                options={languageOptions}
                onChange={handleSelectChange("course_language_name")}
                placeholder="Select Language"
                styles={selectStyle}
                value={languageOptions.find((option) => 
                  option.value === courseData.course_language_name
                ) || null}
              />
              <i
                className="fas fa-chevron-down position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              ></i>
            </div>
            {errors.course_language_name && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.course_language_name}
              </span>
            )}
          </div>

          <div className="input-block mb-0">
            <label className="add-course-label rounded-3" style={{ fontWeight: "700" }}>
              Course Description
            </label>
            <ReactQuill
              className="rounded-3 mb-4 pb-4"
              onChange={handleEditorChange}
              placeholder="Enter course description..."
              style={{ height: "100px" }}
              value={courseData.course_description || ""}
            />
            {errors.course_description && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.course_description}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              What you will Learn
            </label>
            <textarea
              className="form-control"
              name="learning_objectives"
              value={courseData.learning_objectives || ""}
              onChange={handleInputChange}
            ></textarea>
            {errors.learning_objectives && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.learning_objectives}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Who is this Course for?
            </label>
            <input
              type="text"
              className="form-control"
              name="target_audience"
              placeholder="Target Audience"
              value={courseData.target_audience || ""}
              onChange={handleInputChange}
            />
            {errors.target_audience && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.target_audience}
              </span>
            )}
          </div>

          <div className="input-block">
            <label className="add-course-label" style={{ fontWeight: "700" }}>
              Time Spent on Course (in hour)
            </label>
            <input
              type="text"
              className="form-control"
              name="time_spent_on_course"
              placeholder="Time spent on courses"
              value={courseData.time_spent_on_course || ""}
              onChange={handleInputChange}
            />
            {errors.time_spent_on_course && (
              <span style={errorStyle} className="error">
                <i className="fas fa-exclamation-circle" style={{ marginRight: "0.25rem" }}></i>
                {errors.time_spent_on_course}
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="widget-btn">
        <button className="btn btn-info-light next_btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  )
}

// Add PropTypes for validation
BasicInfoForm.propTypes = {
  courseData: PropTypes.shape({
    course_title: PropTypes.string,
    course_category_ids: PropTypes.array,
    course_level_ids: PropTypes.array,
    course_language_name: PropTypes.string,
    course_description: PropTypes.string,
    learning_objectives: PropTypes.string,
    target_audience: PropTypes.string,
    time_spent_on_course: PropTypes.string
  }),
  errors: PropTypes.object,
  categoryOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  levelOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  languageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string
    })
  ),
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  selectStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  onContinue: PropTypes.func.isRequired
}

// Add default props
BasicInfoForm.defaultProps = {
  courseData: {},
  errors: {},
  categoryOptions: [],
  levelOptions: [],
  languageOptions: [],
  selectStyle: {},
  errorStyle: { color: 'red' }
}

export default BasicInfoForm