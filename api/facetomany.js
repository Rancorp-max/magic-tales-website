// api/facetomany.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image } = req.body;

  const replicateResponse = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      version: '770e157b26a4c02c30884f9432ec095bdad86dba211b55217eb0edc1b4239b30',
      input: {
        image: image,
        version: 'anime'
      }
    })
  });

  const result = await replicateResponse.json();
  res.status(200).json({ result: result.urls.get });
}
