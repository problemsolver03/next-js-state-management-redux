"use client";

import { decrement, increment } from "@/stores/counterSlice";
import { connect } from "react-redux";
import { useAppDispatch } from "@/app/hooks";

const Counter = (props) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span>{props.counter.value}</span>

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state };
};
export default connect(mapStateToProps, { decrement, increment })(Counter);
