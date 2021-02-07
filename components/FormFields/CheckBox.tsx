import React, { ReactElement, Dispatch } from "react";
import PropTypes from "prop-types";
import { ChangeEventStateAction } from "../../Reducers/event";

interface CheckBoxType {
    id: string;
    checked: boolean;
    title: string;
    dispatch: Dispatch<ChangeEventStateAction>;
}

const CheckBox = ({ id, checked, title, dispatch }: CheckBoxType): ReactElement => (
    <>
        <input id={id} type="checkbox" checked={checked} onChange={() => dispatch({ type: id, payload: !checked })} /> <label htmlFor={id}>{title}</label>
    </>
);

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default CheckBox;
