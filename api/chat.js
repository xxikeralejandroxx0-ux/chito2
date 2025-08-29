export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { message } = req.body;

    const respuesta = `Hola soy Chito 🤖, me dijiste: "${message}"`;

    res.status(200).json({ reply: respuesta });
  } catch (error) {
    res.status(500).json({ error: "Error interno en Chito" });
  }
}
