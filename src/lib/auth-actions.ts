// Simple authentication validation (no server actions needed)
export const DEMO_CREDENTIALS = {
  email: 'admin@gmail.com',
  password: 'Admin123',
  name: 'Md Babul Akter',
};

export function validateCredentials(
  email: string,
  password: string
): { success?: boolean; error?: string } {
  if (
    email === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  ) {
    return { success: true };
  } else {
    return { error: 'Invalid credentials' };
  }
}
