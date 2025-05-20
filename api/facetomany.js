// /api/facetomany.js

import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { image } = req.body;

  if (!image) {
    return res.status(400).json({ error: 'Image is required' });
  }

  try {
    const output = await replicate.run(
      "fofr/face-to-many:a07f252abbbd832009640b27f063ea52d87d7a23a185ca165bec23b5adc8deaf",
      {
        input: {
          image,
          style: "Pixar",
          prompt: "storybook children's character illustration",
          instant_id_strength: 0.8
        }
      }
    );

    if (!output || !output.length) {
      return res.status(500).json({ error: 'No output returned from Replicate' });
    }

    // Send back the first result URL
    return res.status(200).json({ output: output[0] });

  } catch (error) {
    console.error("Replicate API Error:", error);
    return res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
}
