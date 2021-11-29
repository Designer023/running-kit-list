// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { ReactElement } from "react";
import RunningKitList from "../components/RunningKitList";
import { Box, Container, Typography } from "@mui/material";

export default function Home(): ReactElement {
    return (
      <>
        <Container>
            <Box>
                <Typography variant="h1" color="primary.dark" marginBottom={2} marginTop={2}>
                    Kit list generator
                </Typography>
                <Typography variant="h2" color="primary.light" marginBottom={2}>
                    Generate a list of required items for a run
                </Typography>
            </Box>
        </Container>

          <Container>
            <Box>
                <RunningKitList />
            </Box>
          </Container>
      </>
    );
}
