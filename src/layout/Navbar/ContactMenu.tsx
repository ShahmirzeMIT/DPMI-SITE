
import { Box, MenuItem, Link } from "@mui/material";

const resources = [
  { title: "Contact Us", link: "#" },
  { title: "Team Training", link: "#" },
  { title: "Need Community Assistance?", link: "#" },
  { title: "Schedule a Meeting", link: "#" },
];

export default function ContactMenu() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      {resources.map((resource) => (
        <MenuItem key={resource.title} sx={{ py: 1 }}>
          <Link
            href={resource.link}
            underline="hover"
            sx={{ color: "inherit", fontSize: "14px", fontWeight: 500 }}
          >
            {resource.title}
          </Link>
        </MenuItem>
      ))}
    </Box>
  );
}