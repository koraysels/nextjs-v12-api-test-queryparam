export default async function test(req, res) {
  res.status(200).json({query: req.query})
}
