import * as React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const AboutCard = () => (
  <Grid
    sx={{
      padding: "1.5rem",
      backgroundColor: "#3A9086",
      borderRadius: "0.6rem",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: "#F3F4F6",
      }}
    >
      About
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: "#F3F4F6",
        marginTop: "1rem",
      }}
    >
      Octalogic Tech is a SaaS company based in Goa, India, that provides custom
      software development, mobile app development, and IT consulting services
      to clients worldwide. Our turnkey solutions are designed to simplify the
      process of software development and deployment, providing clients with a
      seamless end-to-end experience.
    </Typography>
    <br />

    <Typography
      variant="body1"
      sx={{
        color: "#F3F4F6",
      }}
    >
      Being sector agnostic, we have provided tailor-made solutions to clients
      in FinTech, MedTech, EdTech, FoodTech, and e-commerce verticals.With a
      proven track record of delivering quality and innovative solutions to
      clients in various industries, our team of experienced professionals
      leverages cutting-edge technology and industry best practices that meet
      client&apos;s specific needs and goals.
    </Typography>
  </Grid>
);

export default AboutCard;
