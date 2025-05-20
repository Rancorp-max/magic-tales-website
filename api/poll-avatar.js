// /api/poll-avatar.js
export default async function handler(req, res) {
  const id = req.query.id;

  const statusRes = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
    headers: { "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}` }
  });

  const data = await statusRes.json();
  res.status(200).json(data);
  
  if (result.status === "succeeded") {
  outputUrl = result.output[0]; // <- this is correct
}

}
