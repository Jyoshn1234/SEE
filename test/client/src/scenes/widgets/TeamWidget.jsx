import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import WidgetWrapper from "components/WidgetWrapper";

const TeamWidget = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [scoreInput, setScoreInput] = useState("");

  const addTeamMember = () => {
    if (nameInput && scoreInput) {
      const newMember = { name: nameInput, score: scoreInput };
      setTeamMembers([...teamMembers, newMember]);
      setNameInput("");
      setScoreInput("");
    }
  };

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleScoreChange = (event) => {
    setScoreInput(event.target.value);
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Typography variant="h6" sx={{ mb: "1rem" }}>
        Team Members:
      </Typography>
      {teamMembers.map((member, index) => (
        <Box key={index} sx={{ mb: "1rem" }}>
          <Typography variant="body1">
            Name: {member.name}, Score: {member.score}
          </Typography>
        </Box>
      ))}
      <Box sx={{ mb: "1rem" }}>
        <TextField
          label="Name"
          value={nameInput}
          onChange={handleNameChange}
          sx={{ mr: "1rem" }}
        />
        <TextField
          label="Score"
          value={scoreInput}
          onChange={handleScoreChange}
        />
      </Box>
      <Button variant="contained" onClick={addTeamMember}>
        Add Team Member
      </Button>
    </WidgetWrapper>
  );
};

export default TeamWidget;
