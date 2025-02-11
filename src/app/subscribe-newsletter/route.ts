import { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } from "@/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        {
          error: "Email and name are required",
        },
        { status: 400 }
      );
    }

    const customUrl = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
          LNAME: "",
        },
      }),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Success! Thank you for subscribing :)" }, { status: 200 });
    } else {
      const res = await response.json();
      return NextResponse.json(res, { status: response.status });
    }
  } catch (error: any) {
    console.error(error);
    if (error.status === 400) {
      return new Response(error.response.text, {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "An Error Occurred",
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
