import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Button, Form } from "semantic-ui-react";
import { axiosWithAuth } from "../utlities/AxiosWithAuth";
import * as Yup from "yup";

const FriendsForm = props => {
  return (
    <Segment raised compact>
      <Form>
        <Formik className="add_friend">
          <Form.Field>
            <Field type="text" name="name" placeholder="name" required />
          </Form.Field>
          <Form.Field>
            <Field
              type="number"
              min="0"
              name="age"
              placeholder="age"
              required
            />
          </Form.Field>
          <Form.Field>
            <Field type="email" name="email" placeholder="email" required />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Formik>
      </Form>
    </Segment>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      name: values.name || "",
      age: values.age || "",
      email: values.email || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("required"),
    age: Yup.number().required("required")
  }),
  handleSubmit(values, { setStatus, resetForm, setSubmitting }, event) {
    axiosWithAuth()
      .post("/friends", values)
      .then(res => {
        setStatus(res.data);
        resetForm("");
        setSubmitting(false);
      })
      // //   .then(res =>
      // //     setTimeout(() => {
      // //       window.location = "/friends";
      // //     }, 1000)
      //   )
      .catch(err => console.log(err));
  }
})(FriendsForm);
export default FormikForm;
