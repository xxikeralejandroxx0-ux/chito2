export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { prompt } = req.body;

    // Por ahora Chito no genera imágenes reales, pero devuelve un link simulado
    const fakeImage = `https://dummyimage.com/512x512/000/fff&text=${encodeURIComponent(prompt)}`;

    res.status(200).json({ image: fakeImage });
  } catch (error) {
    res.status(500).json({ error: "Error interno en Chito al generar imagen" });
  }
}
