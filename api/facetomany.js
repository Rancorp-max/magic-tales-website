// /api/facetomany.js

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const body = await req.body;
  const image = body.image;

  const replicateRes = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `r8_cNzgVmT1Xp6ApHDdFRRYkkO1oQlhi7c35tM0s`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      version: "770e157b26a4c02c30884f9432ec095bdad86dba211b55217eb0edc1b4239b30", // model version ID
      input: {
        image: image,
        version: "anime" // or "disney", etc.
      }
    })
  });

  const json = await replicateRes.json();
  res.status(200).json({ result: json?.urls?.get });
}
