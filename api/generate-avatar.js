// /api/generate-avatar.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { image } = req.body;

  try {
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: "e5a939eae5db05a69e5b8c4c56d404cba8787be160058ecf302d4d3b9fc7c7c3",
        input: {
          image,
          style_name: "storybook",
        }
      })
    });

    const prediction = await response.json();
    res.status(200).json(prediction);

  } catch (error) {
    console.error("Replicate error:", error);
    res.status(500).json({ error: "Failed to generate avatar" });
  }
}
