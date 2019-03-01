const fetch = require('node-fetch')
const { introspectionQuery } = require('graphql')
const { buildClientSchema } = require('graphql')
const fs = require('fs')

fetch(
  'https://api.github.com/graphql?user_name="DianaCarrillo"&access_token=24b938dc5204e083eaa236eaf70e5bcbd397a243',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: introspectionQuery }),
  }
)
  .then((res) => res.json())
  .then((res) =>
    fs.writeFileSync('result.json', JSON.stringify(res.data, null, 2))
  )

const introspectionSchemaResult = JSON.parse(fs.readFileSync('result.json'))
const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult)
fs.writeFileSync('schema.js', JSON.stringify(graphqlSchemaObj, null, 2))
