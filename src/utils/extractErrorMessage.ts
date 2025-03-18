interface GraphQLError {
  graphQLErrors: {
    extensions?: {
      originalError?: {
        message: string | string[];
      };
    };
  }[];
}

const extractErrorMessage = (err: unknown) => {
  if (isGraphQLError(err)) {
    const errorMessage =
      err.graphQLErrors[0]?.extensions?.originalError?.message;
    if (!errorMessage) return "";
    return formatErrorMessage(
      Array.isArray(errorMessage) ? errorMessage[0] : errorMessage
    );
  }
  return "";
};

function isGraphQLError(error: unknown): error is GraphQLError {
  return (
    typeof error === "object" &&
    error !== null &&
    "graphQLErrors" in error &&
    Array.isArray((error as GraphQLError).graphQLErrors)
  );
}

const formatErrorMessage = (errorMessage: string) => {
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

export { extractErrorMessage };
