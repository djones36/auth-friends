import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Button, Form } from "semantic-ui-react";
import { axiosWithAuth } from "../utlities/AxiosWithAuth";
const FriendsForm = props => {
  return (
    <Segment raised compact>
      <Form>
        <Formik>
          <Form.Field>
            <Field type="text" name="name" placeholder="name" />
          </Form.Field>
          <Form.Field>
            <Field type="number" name="age" placeholder="age" />
          </Form.Field>
          <Form.Field>
            <Field type="email" name="email" placeholder="email" />
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
  handleSubmit(values, { setStatus, resetForm, setSubmitting }, props) {
    axiosWithAuth()
      .post("/friends", values)
      .then(res => {
        setStatus(res.data);
        resetForm("");
        setSubmitting(false);
      })
      .then(res =>
        setTimeout(() => {
          window.location = "/friends";
        }, 1000)
      )
      .catch(err => console.log(err));
  }
})(FriendsForm);
export default FormikForm;
