import React, { Dispatch, ReactElement } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Slider, Checkbox, FormGroup, FormControlLabel, Button, Box } from "@mui/material";

import { EventState, Action } from "../../Reducers/event";

import { Select, CheckBox, RangeSlider } from "../FormFields";

const FilterStyledRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FilterItem = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
`;

interface FormType {
    state: EventState;
    dispatch: Dispatch<Action>;
}

const Form = ({ state, dispatch }: FormType): ReactElement => (
    <>
        <FilterStyledRow>
            <FilterItem>
                {/* eslint-disable-next-line no-nested-ternary */}
                <h6 className="mb-1">Temperature {state.temperature >= 20 ? "🥵" : state.temperature <= 5 ? "🥶" : "🙂"}</h6>
                <Slider min={-20} sx={{
                    marginTop: 4
                }} max={50} step={5} valueLabelDisplay={"on"} value={state.temperature} onChange={({target: {value}}) => dispatch({ type: "temperature", payload: Number(value) }) } />
                <RangeSlider value={state.temperature} step={5} min={-20} max={50} id="temperature" dispatch={dispatch} />
                <h5>{state.temperature}&deg;C</h5>
            </FilterItem>
            <FilterItem>
                <h6 className="mb-1">Duration ⏱</h6>
                <RangeSlider value={state.time} step={10} min={30} max={480} id="time" dispatch={dispatch} />
                <h5>{state.time} mins</h5>
            </FilterItem>
            <FilterItem>
                <h6 className="mb-1">Profile ⛰</h6>
                <Select
                    dispatch={dispatch}
                    id="profile"
                    value={state.profile}
                    options={[
                        { value: "flat", text: "Flat / Gentle" },
                        { value: "medium", text: "Medium hills / inclines" },
                        { value: "climb", text: "Steep / Climb" }
                    ]}
                />
            </FilterItem>
            <FilterItem>
                <h6 className="mb-1">Surface 🗺</h6>
                <Select
                    dispatch={dispatch}
                    id="terrain"
                    value={state.terrain}
                    options={[
                        { value: "paved", text: "Paved / Road" },
                        { value: "trail", text: "Trail / Gravel" },
                        { value: "unmarked", text: "Unmarked/Grass/Rock/Bog" }
                    ]}
                />
            </FilterItem>
        </FilterStyledRow>
        <FilterStyledRow>
            <FilterItem>
                <FormGroup>
                    <FormControlLabel control={<Checkbox value={state.dark} title={"Dark / Dusk"} onChange={() => dispatch({type: "dark", payload: !state.dark})} />
                    } label="Label"  />
                </FormGroup>
                <CheckBox id="dark" checked={state.dark} title="Dark 🌛" dispatch={dispatch} />
            </FilterItem>
            <FilterItem>
                <CheckBox id="race" checked={state.race} title="Race 🏁" dispatch={dispatch} />
            </FilterItem>
            <FilterItem>
                <CheckBox id="wet" checked={state.wet} title="Wet ☔" dispatch={dispatch} />
            </FilterItem>
            <FilterItem>
                <CheckBox id="scenic" checked={state.scenic} title="Scenic 🤳" dispatch={dispatch} />
            </FilterItem>
        </FilterStyledRow>
        <Box mt={4}>
            <Button variant="contained" onClick={() => dispatch({ type: "GENERATE" })} color={"primary"} >Generate</Button>
            <Button variant="contained" onClick={() => dispatch({ type: "RESET" })} color={"warning"} >Reset</Button>

        </Box>
    </>
);

const KitRequirementState = PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    dark: PropTypes.bool.isRequired,
    scenic: PropTypes.bool.isRequired,
    race: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    wet: PropTypes.bool.isRequired,
    remote: PropTypes.bool.isRequired
});

Form.propTypes = {
    state: KitRequirementState.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Form;
