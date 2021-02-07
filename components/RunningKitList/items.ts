import { always, raceDiscretionary, darkness, durationOver60, wetWeather, hotWeather, durationOver45, durationOver240, raceForbidden, raceRequired, scenic, temperatureOver5, temperatureOver20, temperatureUnder10, Validator } from "./validators";
import * as VALIDATORS from "./validators";

interface ValidatorTypes {
    all: Array<Validator>;
    success: string;
}

export type ValidatorOptionTypes = Validator | ValidatorTypes;

export interface KitItemSource {
    name: string;
    validators?: Array<ValidatorOptionTypes>;
    description?: string;
}

export const preActivity = [
    {
        name: "Change for carpark",
        validators: [VALIDATORS.always, VALIDATORS.raceRequired]
    },
    {
        name: "Charge watch",
        validators: [VALIDATORS.always]
    },
    {
        name: "Download map to watch & phone",
        validators: [always]
    },
    {
        name: "Charge head torch",
        validators: [{ all: [darkness, raceRequired], success: "race" }, darkness]
    },
    {
        name: "Charge phone",
        validators: [always]
    },
    {
        name: "Charge headphones",
        validators: [raceForbidden, always]
    },
    {
        name: "Prepare energy!",
        description: "Food and/or snacks!",
        validators: [raceDiscretionary, durationOver60]
    }
];

export const baseClothing = [
    {
        name: "Socks",
        validators: [raceRequired, always]
    },
    {
        name: "Shorts",
        validators: [raceRequired, always]
    },
    {
        name: "T-Shirt",
        validators: [raceRequired, always]
    },

    {
        name: "Trail Shoes",
        description: "Suitable footwear",
        validators: [{ all: [raceRequired, VALIDATORS.terrainNonRoad], success: "race" }, VALIDATORS.terrainNonRoad]
    },
    {
        name: "Trainers",
        description: "Suitable footwear",
        validators: [{ all: [raceRequired, VALIDATORS.terrainPaved], success: "race" }, VALIDATORS.terrainPaved]
    },
    {
        name: "Buff",
        validators: [raceDiscretionary, temperatureOver5]
    },

    {
        name: "Hat & Gloves",
        validators: [raceRequired, temperatureUnder10]
    },
    {
        name: "Full body cover with hood",
        description: "Head, shoulders knees and toes with double taped seems",
        validators: [raceRequired, wetWeather]
    },
    {
        name: "Extra warm layer",
        validators: [raceDiscretionary, temperatureUnder10]
    },
    {
        name: "Anti Chaffe",
        validators: [temperatureOver20, durationOver60]
    }
];

export const kit = [
    {
        name: "Kit bag",
        description: "rucksack, race-vest or bumbag",
        validators: [raceRequired, always]
    },
    {
        name: "Map",
        validators: [raceRequired, durationOver45]
    },
    {
        name: "Compass",
        validators: [raceRequired, always]
    },
    {
        name: "Whistle",
        validators: [raceRequired, always]
    },
    {
        name: "Medical kit with basic items",
        validators: [raceDiscretionary, always]
    },
    {
        name: "Emergency Blanket/Bivvy Bag",
        validators: [raceRequired, always]
    },
    {
        name: "Device with GPS with map/route",
        description: "Preloaded - There will be no signal to download the map",
        validators: [raceDiscretionary, always]
    },
    {
        name: "Tracking watch & HR monitor",
        validators: [raceDiscretionary, always]
    },
    {
        name: "Spare battery & cable for phone",
        validators: [{ success: "night race", all: [raceDiscretionary, durationOver240] }, durationOver240]
    },
    {
        name: "Spare battery & cable for torch",
        validators: [
            { success: "race", all: [raceDiscretionary, durationOver240, darkness] },
            { success: "long dark", all: [durationOver240, darkness] }
        ]
    },
    {
        name: "Food",
        validators: [raceDiscretionary, durationOver60]
    },

    {
        name: "Hydration",
        description: "Bottle or Hydration pack. A cup for races. On longer/hotter runs include electrolytes",
        validators: [raceDiscretionary, durationOver60, hotWeather]
    },
    {
        name: "Head torch",
        validators: [{ all: [darkness, raceRequired], success: "race" }, darkness]
    },
    {
        name: "Camera / Phone. It's not a race then always nice to take a pic",
        validators: [always]
    },
    {
        name: "Sun glasses",
        validators: [{ success: "light", all: [VALIDATORS.lightness] }]
    },
    {
        name: "Waterproof storage",
        description: "Container For keys/phone etc eg Dry or ziplock bag",
        validators: [wetWeather]
    },
    {
        name: "Headphones",
        description: "Download Books/Music offline",
        validators: [raceForbidden, always]
    },
    {
        name: "Money / Card",
        description: "You may end up stranded and need a taxi/bus back to base",
        validators: [always]
    }
];

export const after = [
    {
        name: "Recovery drink",
        validators: [durationOver45, hotWeather]
    },
    {
        name: "A change of clothes",
        validators: [durationOver60, wetWeather, hotWeather]
    },
    {
        name: "Towel",
        description: "clean up!",
        validators: [durationOver45, wetWeather, hotWeather]
    }
];

export const items = [
    {
        name: "Pins or bib magnets",
        validators: [raceRequired]
    },

    {
        name: "Selfie stick",
        validators: [raceDiscretionary, scenic]
    },

    {
        name: "Poles",
        validators: [raceDiscretionary]
    }
];
