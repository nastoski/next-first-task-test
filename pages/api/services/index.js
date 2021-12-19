import services from "db/services.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(services);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
