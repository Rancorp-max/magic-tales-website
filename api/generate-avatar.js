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
        version: "95e8698ad794d3d8c8c4c60d685cf5a36092753c0194b44273540470b26fa51a", // flux-kontext-pro
        input: {
          input_image: image,
          prompt: prompt || "storybook portrait of a smiling child in a magical setting"
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
