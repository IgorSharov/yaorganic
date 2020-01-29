import Home from "components/Home";
import Form from "components/Form";

export default [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/calc",
    component: Home
  }
];
