import React, { ReactElement, Dispatch } from "react";
import PropTypes from "prop-types";
import { ChangeEventStateAction } from "../../Reducers/event";

interface SelectOptionArray {
    value: string | number;
    text: string;
}

interface SelectType {
    id: string;
    value: string;
    options: Array<SelectOptionArray>;
    dispatch: Dispatch<ChangeEventStateAction>;
}

const Select = ({ id, value, options, dispatch }: SelectType): ReactElement => (
    <select value={value} onChange={(e) => dispatch({ type: id, payload: e.target.value })}>
        {options.map((option) => (
            <option value={option.value} key={option.text}>
                {option.text}
            </option>
        ))}
    </select>
);

const NumberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Select.propTypes = {
    id: PropTypes.string.isRequired,
    value: NumberOrString,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: NumberOrString,
            options: NumberOrString
        })
    ).isRequired,
    dispatch: PropTypes.func.isRequired
};

Select.defaultProps = {
    value: null
};

export default Select;
