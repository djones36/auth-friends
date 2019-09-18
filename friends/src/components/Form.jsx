import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
const FriendsForm = props => {
  return(
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
    handleSubmit(values, props) {
      axios
        .post("/api/login", values)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          console.log("res", res);
        })
        .then(res =>
          setTimeout(() => {
            props.props.history.push("/display");
          }, 1000)
        )
        .catch(err => console.log(err));
    }
  })(FriendsForm);
  export default FormikForm;

export default Form;
