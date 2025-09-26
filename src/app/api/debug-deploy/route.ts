import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // This will run at build time and runtime
  const deploymentInfo = {
    timestamp: new Date().toISOString(),
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    vercelUrl: process.env.VERCEL_URL,

    // Check all environment variables
    allEnvKeys: Object.keys(process.env).sort(),

    // Specifically check for our variables
    targetVars: {
      NEXT_PUBLIC_INITIATIVES_REDIRECT: process.env.NEXT_PUBLIC_INITIATIVES_REDIRECT ? "SET" : "MISSING",
      NEXT_PUBLIC_SUSTAINABILITY_REDIRECT: process.env.NEXT_PUBLIC_SUSTAINABILITY_REDIRECT ? "SET" : "MISSING",
      DONATION_APP_SCRIPT_URL: process.env.DONATION_APP_SCRIPT_URL ? "SET" : "MISSING",
    },

    // Search for any REDIRECT-related vars
    redirectVars: Object.keys(process.env)
      .filter((key) => key.includes("REDIRECT") || key.includes("INITIATIVE") || key.includes("SUSTAINABILITY"))
      .reduce((obj: any, key) => {
        obj[key] = process.env[key] ? "SET" : "MISSING";
        return obj;
      }, {}),
  };

  console.log("=== DEPLOYMENT DEBUG ===");
  console.log(JSON.stringify(deploymentInfo, null, 2));
  console.log("========================");

  return NextResponse.json(deploymentInfo);
}
