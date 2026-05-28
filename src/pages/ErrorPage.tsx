import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const routeError = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(routeError)
            ? "This page does not exits "
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
