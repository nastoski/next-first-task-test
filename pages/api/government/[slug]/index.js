import government from "db/government.json";

export default function handler(req, res) {
  const governmentDetails = government.filter(
    (gov) => gov.slug === req.query.slug
  );
  if (req.method === "GET") {
    res.status(200).json(governmentDetails);
  } else {
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
