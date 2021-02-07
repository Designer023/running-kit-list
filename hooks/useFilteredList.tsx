import { useMemo } from "react";
import { EventState } from "../Reducers/event";
import { Validator } from "../components/RunningKitList/validators";
import { ListItemType } from "../components/KitItem";
import { KitItemSource, ValidatorOptionTypes } from "../components/RunningKitList/items";

const useFilteredList = (list: Array<KitItemSource>, state: EventState): Array<ListItemType> =>
    useMemo(() => {
        const filteredItems: ListItemType[] = [];

        list.forEach((item) => {
            const itemValidators =
                item.validators &&
                item.validators.length &&
                item.validators.reduce((prev: Array<string>, currentValidator: ValidatorOptionTypes) => {
                    if (typeof currentValidator === "object") {
                        // loop all validators in the array
                        const validated: Array<string> = [];
                        currentValidator.all.forEach((validator: Validator) => {
                            // check the state of each and put it in the array
                            const validatedResult = validator(state);
                            if (validatedResult) {
                                validated.push();
                            }
                        });

                        // any the items are null then the check has failed so return the previous value
                        if (!validated.length) return prev;

                        // return the new validator
                        return [...prev, currentValidator.success];
                    }

                    const validated = currentValidator(state);
                    if (validated) {
                        return [...prev, validated];
                    }

                    return prev;
                }, []);

            // Remove race forbidden items
            if (state.race && itemValidators && itemValidators.length > 0 && itemValidators.includes("forbidden")) return;

            // If the item is tagged then keep it
            if (itemValidators && itemValidators.length > 0) {
                filteredItems.push({
                    item,
                    tags: [...itemValidators]
                });
            }
        });

        filteredItems.sort((a: ListItemType, b: ListItemType) => {
            if (a.tags.includes("race") && b.tags.includes("race")) return 0; // leave in order
            if (a.tags.includes("race") && !b.tags.includes("race")) return -1;
            if (!a.tags.includes("race") && b.tags.includes("race")) return 1;
            return 0;
        });

        return filteredItems;
    }, [state, list]);

export default useFilteredList;
