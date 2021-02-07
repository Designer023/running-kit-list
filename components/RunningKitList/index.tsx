import React, { useMemo, useReducer, ReactElement } from "react";

import camelCase from "lodash/camelCase";
import { preActivity, items, baseClothing, kit, after } from "./items";
import Form from "./form";
import { ULStyled } from "../UI";
import KitItem, { ListItemType } from "../KitItem";
import eventReducer, { initialState } from "../../Reducers/event";
import useFilteredList from "../../hooks/useFilteredList";

const Index = (): ReactElement => {
    const [state, dispatch] = useReducer(eventReducer, initialState);

    const waterRequirement = useMemo(
        () => ({
            min: Math.floor(((state.time / 60) * 900) / 100) * 100,
            max: Math.ceil(((state.time / 60) * 1100) / 100) * 100,
            electrolyte: state.time > 90 || state.temperature > 20
        }),
        [state]
    );

    const calorieRequirement = useMemo(
        () => ({
            min: Math.floor(((state.time / 60) * 200) / 100) * 100,
            max: Math.ceil(((state.time / 60) * 300) / 100) * 100
        }),
        [state]
    );

    const filteredBaseClothing = useFilteredList(baseClothing, state);
    const filteredKit = useFilteredList(kit, state);
    const filteredItems = useFilteredList(items, state);
    const filteredPre = useFilteredList(preActivity, state);
    const filteredAfter = useFilteredList(after, state);

    return (
        <div>
            <div>
                <h4>Criteria</h4>
                <Form state={state} dispatch={dispatch} />
                <hr />
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Pre-Activity prep</h3>
                    <ULStyled>
                        {filteredPre.map(({ item, tags }: ListItemType) => (
                            <KitItem item={item} tags={tags} key={camelCase(item.name)} />
                        ))}
                    </ULStyled>
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Hydration</h3>
                    <div>
                        {waterRequirement.min} ml - {waterRequirement.max} ml {waterRequirement.electrolyte ? "with electrolytes" : ""}
                    </div>
                    <small className="text-muted">~1 litre per hour, more if it's hot.</small>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Calories</h3>
                    {calorieRequirement.min} kCal - {calorieRequirement.max} kCal
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Clothing</h3>
                    <ULStyled>
                        {filteredBaseClothing.map(({ item, tags }) => (
                            <KitItem item={item} tags={tags} key={camelCase(item.name)} />
                        ))}
                    </ULStyled>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Kit & Bag</h3>
                    <ULStyled>
                        {filteredKit.map(({ item, tags }) => (
                            <KitItem item={item} tags={tags} key={camelCase(item.name)} />
                        ))}
                    </ULStyled>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>Extra items</h3>
                    <ULStyled>
                        {filteredItems.map(({ item, tags }) => (
                            <KitItem item={item} tags={tags} key={camelCase(item.name)} />
                        ))}
                    </ULStyled>
                </div>
                <div className="col-12 col-md-6">
                    <h3>Recovery & post run</h3>
                    <ULStyled>
                        {filteredAfter.map(({ item, tags }) => (
                            <KitItem item={item} tags={tags} key={camelCase(item.name)} />
                        ))}
                    </ULStyled>
                </div>
            </div>

            <hr />
        </div>
    );
};

export default Index;
