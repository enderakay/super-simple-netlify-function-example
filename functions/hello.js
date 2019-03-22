exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  return {
    statusCode: 200,
    body: `:sparkles: Hi Zeynep I like your results on your last report, great job! :bouquet: :+1: :blue_heart: :heart_eyes: </p>`
  }
}
