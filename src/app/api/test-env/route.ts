import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("=== TEST ENDPOINT CALLED ===");
  console.log("Timestamp:", new Date().toISOString());

  const envVars = {
    INITIATIVES_REDIRECT: process.env.INITIATIVES_REDIRECT,
    SUSTAINABILITY_REDIRECT: process.env.SUSTAINABILITY_REDIRECT,
    NEXT_PUBLIC_INITIATIVES_REDIRECT: process.env.NEXT_PUBLIC_INITIATIVES_REDIRECT,
    NEXT_PUBLIC_SUSTAINABILITY_REDIRECT: process.env.NEXT_PUBLIC_SUSTAINABILITY_REDIRECT,
    DONATION_APP_SCRIPT_URL: process.env.DONATION_APP_SCRIPT_URL,
    NODE_ENV: process.env.NODE_ENV,
  };

  console.log("Environment Variables:", envVars);
  console.log(
    "All env keys with REDIRECT:",
    Object.keys(process.env).filter((key) => key.includes("REDIRECT"))
  );
  console.log("==========================");

  return NextResponse.json({
    message: "Test endpoint working",
    timestamp: new Date().toISOString(),
    envCheck: Object.entries(envVars).map(([key, value]) => ({
      key,
      status: value ? "✓ Set" : "✗ Missing",
      preview: value ? `${value.substring(0, 10)}...` : "UNDEFINED",
    })),
  });
}
