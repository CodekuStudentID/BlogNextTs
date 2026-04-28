import { Login, AuthResponse } from "../types/Login";

export async function auth(data: Login): Promise<AuthResponse> {
  // Simulasi delay network 1.5 detik agar loading state di UI terlihat
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const DUMMY_ADMIN = {
    email: "admin@sourceasn.id",
    password: "password123", 
    name: "Administrator Utama",
    role: "Editor-in-Chief"
  };

  if (data.email === DUMMY_ADMIN.email && data.password === DUMMY_ADMIN.password) {
    return {
      success: true,
      message: "Login Berhasil! Selamat datang di Panel Redaksi.",
      user: {
        name: DUMMY_ADMIN.name,
        role: DUMMY_ADMIN.role
      }
    };
  } else {
    return {
      success: false,
      message: "Email atau password salah. Silahkan hubungi IT Support."
    };
  }
}