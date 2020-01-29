import Home from "components/Home";
import Form from "components/Form";
import CalorieCalculator from "components/CalorieCalculator";

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
    component: CalorieCalculator
  }
];
