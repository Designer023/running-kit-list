import React, { Fragment, useState, ReactElement } from "react";
import camelCase from "lodash/camelCase";
import { ListCheckStyled, ListDetailStyled, ListRowStyled } from "../UI";

import { KitItemSource } from "../RunningKitList/items";

export interface ListItemType {
    item: KitItemSource;
    tags: Array<string>;
}

const tint = (key: string) => {
    switch (key) {
        case "race":
            return "primary";
        case "discretionary":
            return "secondary";
        case "duration":
            return "danger";
        case "wet":
            return "info";
        case "dark":
            return "dark";
        default:
            return "light";
    }
};

const KitItem = ({ item, tags }: ListItemType): ReactElement => {
    const [checked, setChecked] = useState(false);

    const style = checked ? { textDecoration: "line-through" } : {};

    return (
        <li>
            <ListRowStyled>
                <ListCheckStyled>
                    <input type="checkbox" id={camelCase(item.name)} checked={checked} onChange={() => setChecked(!checked)} />
                </ListCheckStyled>
                <ListDetailStyled>
                    <label htmlFor={camelCase(item.name)} style={style}>
                        {item.name}{" "}
                        {tags &&
                            !tags.includes("race") &&
                            tags
                                .filter((t) => t !== "always")
                                .map((tag) => (
                                    <Fragment key={tag}>
                                        {" "}
                                        <span className={`badge badge-${tint(tag)}`}>{tag}</span>
                                    </Fragment>
                                ))}
                        {tags && tags.includes("race") ? (
                            <span key="race" className={`badge badge-${tint("race")}`}>
                                race
                            </span>
                        ) : null}
                        <br />
                        <span className="text-muted small">{item.description}</span>
                    </label>
                </ListDetailStyled>
            </ListRowStyled>
        </li>
    );
};

export default KitItem;
