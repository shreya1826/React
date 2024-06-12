import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.username.trim()) { // Changed to trim the username
    errors.username = 'Username cannot be empty!';
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: "5",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm(); // Added resetForm after submission
    },
  });

  return (
    <div>
      <h4>Give a Comment!</h4>
      <form onSubmit={formik.handleSubmit}> {/* Ensured this is in form's onSubmit */}
        <label htmlFor="username">Username:</label>
        &nbsp; &nbsp;
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <p style={{ color: "red" }}>{formik.errors.username}</p> : null}
        <br /><br />

        <label htmlFor="remark">Remarks:</label>
        &nbsp; &nbsp;
        <textarea
          placeholder="Enter remarks"
          name="remark"
          value={formik.values.remark}
          onChange={formik.handleChange}
          id="remark"
        />
        <br /><br />

        <label htmlFor="rating">Rating (out of 5):</label>
        &nbsp; &nbsp;
        <input
          type="number"
          min={0}
          max={5}
          placeholder="Give rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br /><br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}