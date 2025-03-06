"use client"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const MediaForm = ({ courseData, fileErrors, handleFileChange, onPrevious, onContinue }) => {
  return (
    <div className="add-course-info">
      <div className="add-course-inner-header">
        <h4>Courses Media</h4>
      </div>
      <div className="add-course-form">
        <form>
          <div className="input-block">
            <label className="add-course-label">Course cover image</label>
            <div className="relative-form">
              <span>
                {courseData.course_banner_image
                  ? courseData.course_banner_image.name || "File Selected"
                  : "No File Selected"}
              </span>
              <label className="relative-file-upload">
                Upload File
                <input type="file" name="course_banner_image" onChange={handleFileChange} />
              </label>
              {fileErrors.courseBannerImage && <p className="error-text">{fileErrors.courseBannerImage}</p>}
            </div>
          </div>

          <div className="input-block">
            <label className="add-course-label">Course Intro Video (MP4)</label>
            <div className="relative-form">
              <span>
                {courseData.course_intro_video
                  ? courseData.course_intro_video.name || "File Selected"
                  : "No File Selected"}
              </span>
              <label className="relative-file-upload">
                Upload File
                <input type="file" name="course_intro_video" onChange={handleFileChange} accept=".mp4" />
              </label>
              {fileErrors.courseIntroVideo && <p className="error-text">{fileErrors.courseIntroVideo}</p>}
            </div>
          </div>

          <div className="widget-btn">
            <Link className="btn btn-black prev_btn" onClick={onPrevious}>
              Previous
            </Link>
            <Link className="btn btn-info-light next_btn" onClick={onContinue}>
              Continue
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

// Add PropTypes for validation
MediaForm.propTypes = {
  courseData: PropTypes.shape({
    course_banner_image: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    course_intro_video: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ])
  }),
  fileErrors: PropTypes.shape({
    courseBannerImage: PropTypes.string,
    courseIntroVideo: PropTypes.string
  }),
  handleFileChange: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
}

// Add default props
MediaForm.defaultProps = {
  courseData: {},
  fileErrors: {}
}

export default MediaForm