const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient(
  `https://api.graph.cool/simple/v1/school-choice-now`
)

exports.handler = async function(event, context, callback) {
  const respond = ({ status, body }) => {
    callback(null, {
      statusCode: status,
      body: JSON.stringify({ body }),
    });
  };

  const d = await client.request(`
    query {
      allCategories {
        name
      }
    }
  `)

  respond({ status: 200, body: d })
};
