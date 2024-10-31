export const main = async (params) => {
  try {
    const { method, path, body, query } = params;
    if (method === "GET") {
      return createResponse(200, {
        message: "Hello GET",
        path,
        query,
      });
    } else if (method === "POST") {
      return createResponse(200, {
        message: "Hello POST",
        path,
        body,
      });
    } else {
      return createResponse(405, { error: "Method not allowed" });
    }
  } catch (error) {
    return createResponse(500, { error: JSON.stringify(error) });
  }
};

/**
 * Helper function to construct a response for serverless functions
 * @param {number} statusCode - HTTP status code (e.g., 200, 404, 500)
 * @param {object} body - The response body, typically a JSON object
 * @returns {object} - Formatted response object for AWS Lambda / API Gateway
 */
function createResponse(statusCode, body) {
  return {
    status: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
