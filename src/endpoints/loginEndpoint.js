import { baseUrl } from "@/app/layout";

export async function loginEndpoint(userData) {
  const { email, password } = userData;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    body: formData,
    next: {
      revalidate: 1,
    },
  });

  const repos = await response.json();
  return { data: repos, status: response.ok };
}
