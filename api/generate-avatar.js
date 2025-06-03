// /api/generate-avatar.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { image, prompt } = req.body;

  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "ec3176b3caefc364985174bd58f97aa91c9d07f14437a4dfcbfc084efb58071e", // flux-kontext-max
        input: {
          input_image: image,
          prompt: prompt || "storybook portrait with magical atmosphere"
        }
      })
    });

    const prediction = await response.json();
    res.status(200).json(prediction);
  } catch (error) {
    console.error("Replicate error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
}
