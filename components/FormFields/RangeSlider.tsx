import React, { Dispatch, ReactElement } from "react";
import PropTypes from "prop-types";
import { ChangeEventStateAction } from "../../Reducers/event";

interface RangeSliderType {
    id: string;
    value: number;
    dispatch: Dispatch<ChangeEventStateAction>;
    step: number;
    min: number;
    max: number;
}

const RangeSlider = ({ id, value, dispatch, step, min, max }: RangeSliderType): ReactElement => (
    <>
        <input id={id} type="range" min={min} max={max} value={value} step={step} onChange={(e) => dispatch({ type: id, payload: Number(e.target.value) })} />
    </>
);

RangeSlider.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default RangeSlider;
