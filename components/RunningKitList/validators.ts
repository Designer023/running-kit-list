import * as ENVIRONMENT from "./constants";
import { EventState } from "../../Reducers/event";

export type Validator = (state: EventState) => string | null;

export const raceRequired = (state: EventState): string | null => (state.race ? "race" : null);
export const raceDiscretionary = (state: EventState): string | null => (state.race ? "discretionary" : null);
export const raceForbidden = (state: EventState): string | null => (state.race ? "forbidden" : null);

export const terrainPaved = (state: EventState): string | null => (state.terrain === "paved" ? "road" : null);
export const terrainNonRoad = (state: EventState): string | null => (state.terrain !== "paved" ? "off-road" : null);

export const temperatureOver5 = (state: EventState): string | null => (state.temperature > 5 ? "warm" : null);
export const temperatureUnder10 = (state: EventState): string | null => (state.temperature <= 10 ? "cold" : null);
export const temperatureOver20 = (state: EventState): string | null => (state.temperature >= 20 ? ENVIRONMENT.HOT_WEATHER : null);

export const hotWeather = (state: EventState): string | null => (state.temperature >= 25 ? ENVIRONMENT.HOT_WEATHER : null);
export const warmWeather = (state: EventState): string | null => (state.temperature >= 15 ? "warm" : null);
export const mixedWeather = (state: EventState): string | null => (state.temperature >= 10 && state.temperature <= 15 ? "mixed" : null);
export const coldWeather = (state: EventState): string | null => (state.temperature <= 10 ? "cold" : null);
export const freezingWeather = (state: EventState): string | null => (state.temperature <= 0 ? "freezing" : null);

export const durationOver60 = (state: EventState): string | null => (state.time > 60 ? "duration" : null);
export const durationOver240 = (state: EventState): string | null => (state.time >= 240 ? "duration" : null);
export const durationOver45 = (state: EventState): string | null => (state.time >= 45 ? "duration" : null);

export const wetWeather = (state: EventState): string | null => (state.wet ? "wet" : null);
export const dryWeather = (state: EventState): string | null => (!state.wet ? "dry" : null);

export const darkness = (state: EventState): string | null => (state.dark ? "dark" : null);
export const lightness = (state: EventState): string | null => (!state.dark ? "light" : null);

export const scenic = (state: EventState): string | null => (state.scenic ? "scenic" : null);

export const always = (): string => "always";
