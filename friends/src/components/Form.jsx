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
            <Field type="text" name="id" placeholder="id" />
          </Form.Field>
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
      id: values.id || "",
      name: values.name || "",
      age: values.age || "",
      email: values.email || ""
    };
  },
  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err));
  }
})(FriendsForm);
export default FormikForm;
