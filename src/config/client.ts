import { createClient } from "@/prismicio";

import vars from "@/config/vars";

const client = createClient({
  accessToken: vars.apiAccessToken,
});

export default client;
