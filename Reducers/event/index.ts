export interface EventState {
    temperature: number;
    time: number;
    dark: boolean;
    scenic: boolean;
    race: boolean;
    profile: string;
    terrain: string;
    wet: boolean;
    remote: boolean;
}

export interface ResetAction {
    type: string;
    payload?: number | string | boolean | undefined;
}

export interface ChangeEventStateAction {
    type: string;
    payload: number | string | boolean | undefined;
}

export type Action = ResetAction | ChangeEventStateAction;

export const initialState: EventState = {
    temperature: 15,
    time: 120,
    dark: false,
    scenic: false,
    race: false,
    profile: "flat",
    terrain: "paved",
    wet: false,
    remote: false // is the route a remote path or is it a "safe" area
};

const eventReducer = (state: EventState, action: Action): EventState => {
    switch (action.type) {
        case "RESET":
            return initialState;

        case "temperature":
            if (typeof action.payload === "number") {
                return { ...state, temperature: action.payload };
            }
            break;

        case "time":
            if (typeof action.payload === "number") {
                return { ...state, time: action.payload };
            }
            break;

        case "dark":
            if (typeof action.payload === "boolean") {
                return { ...state, dark: action.payload };
            }
            break;

        case "race":
            if (typeof action.payload === "boolean") {
                return { ...state, race: action.payload };
            }
            break;

        case "wet":
            if (typeof action.payload === "boolean") {
                return { ...state, wet: action.payload };
            }
            break;

        case "profile":
            if (typeof action.payload === "string") {
                return { ...state, profile: action.payload };
            }
            break;

        case "terrain":
            if (typeof action.payload === "string") {
                return { ...state, terrain: action.payload };
            }
            break;

        case "scenic":
            if (typeof action.payload === "boolean") {
                return { ...state, scenic: action.payload };
            }
            break;

        default:
            return state;
    }
    return state;
};

export default eventReducer;
