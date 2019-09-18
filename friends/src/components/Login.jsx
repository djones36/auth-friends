import React from "react";
import { Form as Formik, Field, withFormik } from "formik";
import { Segment, Button, Form } from "semantic-ui-react";
import { axiosWithAuth } from "../utlities/AxiosWithAuth";

const Login = props => {
  return (
    <div>
      <div>
        <h2>Please Login</h2>
      </div>
      <Segment raised compact>
        <Form>
          <Formik>
            <Form.Field>
              <Field type="text" name="username" placeholder="username" />
            </Form.Field>
            <Form.Field>
              <Field type="password" name="password" placeholder="password" />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Formik>
        </Form>
      </Segment>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || "",
      password: values.password || ""
    };
  },

  handleSubmit(values, props) {
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log("res", res);
      })
      .then(res =>
        setTimeout(() => {
          props.props.history.push("/friends");
        }, 1000)
      )
      .catch(err => console.log(err));
  }
})(Login);
export default FormikForm;
