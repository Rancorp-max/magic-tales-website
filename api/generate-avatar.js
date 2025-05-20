// /api/generate-avatar.js
export default async function handler(req, res) {
  const { image } = req.body;

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      version: "a07f252abbbd832009640b27f063ea52d87d7a23a185ca165bec23b5adc8deaf",
      input: {
        image,
        style: "Pixels",
        prompt: "storybook character portrait",
        instant_id_strength: 0.8
      }
    })
  });

  const prediction = await response.json();
  res.status(200).json(prediction);
}
