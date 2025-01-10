import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface AuthProps<T> {
  submitLabel: string;
  onSubmit: (credentials: T) => Promise<void>;
  children: React.ReactNode;
  defaultValues: T;
}

const Auth = <T extends {}>({
  submitLabel,
  onSubmit,
  children,
  defaultValues
}: AuthProps<T>) => {
  const [fields, setFields] = useState<T>(defaultValues);

  const handleChange = (key: keyof T, value: string) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {Object.entries(fields).map(([key, value]) => (
        <TextField
          key={key}
          type={key}
          label={key}
          variant="outlined"
          value={value}
          onChange={(event) => handleChange(key as keyof T, event.target.value)}
        />
      ))}
      <Button variant="contained" onClick={() => onSubmit(fields)}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;