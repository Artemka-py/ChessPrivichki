import React from "react";
import { hot } from "react-hot-loader/root";
import { Counter } from "./components/Counter";

export const App = hot(_App);
export function _App(): JSX.Element | null {
  return (
    <div>
      <h1>Hello world!123</h1>
      <Counter />
    </div>
  );
}
