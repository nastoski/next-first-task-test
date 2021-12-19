import agency from "db/agency.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(agency);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
