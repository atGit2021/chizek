import { Button, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetCurrentUser } from '../../hooks/useGetCurrentUser';
import { useNavigate } from 'react-router-dom';

interface AuthProps<T> {
  submitLabel: string;
  onSubmit: (credentials: T) => Promise<void>;
  children: React.ReactNode;
  defaultValues: T;
  error?: string;
}

const Auth = <T extends object>({
  submitLabel,
  onSubmit,
  children,
  defaultValues,
  error,
}: AuthProps<T>) => {
  const [fields, setFields] = useState<T>(defaultValues);
  const { data: user } = useGetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (key: keyof T, value: string) => {
    setFields((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit(fields);
    }
  };

  return (
    <Stack
      spacing={3}
      sx={{
        height: '100vh',
        maxWidth: {
          xs: '70%',
          md: '30%',
        },
        margin: '0 auto',
        justifyContent: 'center',
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {Object.entries(fields).map(([key, value]) => (
        <TextField
          key={key}
          type={key}
          label={key}
          variant="outlined"
          value={value}
          onChange={(event) => handleChange(key as keyof T, event.target.value)}
          error={!!error}
          helperText={error}
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
