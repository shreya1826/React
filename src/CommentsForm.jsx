import { useState } from "react";
import { useFormik } from 'formik';
import Comment from "./Comment";

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username cannot be empty!';
    }
    return errors;
  };

  export default function CommentsForm({addNewComment}){

    // let [formData, setFormData] = useState({
    //     username: " ",
    //     remark: " ",
    //     rating: "5",
    // })

    const formik = useFormik({
        initialValues: {
        username: " ",
        remark: " ",
        rating: "5",
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });


    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return{...currData, [event.target.name] : event.target.value};
    //     });
    // };

    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username: " ",
    //     remark: " ",
    //     rating: "5",
    //     });
    // }

    return(
        <div>
            <h4>Give a Comment!</h4>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username:</label>
            &nbsp; &nbsp;
            <input type="text" 
            placeholder="Enter username" 
            id="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}/>
            {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
            <br /> <br />

            <label htmlFor="remark">Remarks:</label>
            &nbsp; &nbsp;
            <textarea
            placeholder="Enter remarks"
            name="remark"
            value={formik.values.remark}
            onChange={formik.handleChange} 
            id="remark">
            </textarea>
            <br /> <br />

<label htmlFor="rating">Rating(out of 5):</label>
            &nbsp; &nbsp;
            <input type="number" 
            min={0}
            max={5}
            placeholder="Give rating"
            value={formik.values.rating}
            onChange={formik.handleChange} 
            id="rating"
            name="rating"/>
            <br /> <br />

<button onClick={formik.handleSubmit} type="submit">Add Comment</button>
        </form>
        </div>
    )
}