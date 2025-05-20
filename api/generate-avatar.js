export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { image } = req.body;

  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "a07f252abbbd832009640b27f063ea52d87d7a23a185ca165bec23b5adc8deaf",
        input: {
          image,               // base64 or image URL
          style_name: "storybook" // other options: "pixar", "sketch", etc.
        }
      })
    });

    const prediction = await response.json();
    res.status(200).json(prediction);

  } catch (error) {
    console.error("Replicate error:", error);
    res.status(500).json({ error: "Avatar generation failed." });
  }
}
