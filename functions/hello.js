exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `Hi Zeynep I like your results on your last report, great job! ❤ 👋`
  }
}
