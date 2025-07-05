export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { image, prompt } = req.body;

  try {
    const response = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-kontext-pro/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
        "Prefer": "wait"
      },
      body: JSON.stringify({
        input: {
          prompt: prompt || "storybook portrait of a smiling child in a magical setting",
          input_image: image,
          output_format: "jpg"
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json(error);
    }

    const prediction = await response.json();
    const resultUrl = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output;

    res.status(200).json({ image: resultUrl });
  } catch (error) {
    console.error("Replicate error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
}
