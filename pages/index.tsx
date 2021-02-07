// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { ReactElement } from "react";
import RunningKitList from "../components/RunningKitList";

export default function Home(): ReactElement {
    return (
        <div>
            <h1>Kit list generator</h1>

            <RunningKitList />
        </div>
    );
}
