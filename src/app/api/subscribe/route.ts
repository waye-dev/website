import { NextRequest, NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID, MAILCHIMP_SERVER } from "@/config";

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER,
});

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

    const response = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: name,
      },
    });

    const data = response as any;
    const clientResponse = {
      status: "success",
      message: `${data.email_address} has been successfully ${data.status}!`,
    };

    return new Response(JSON.stringify(clientResponse), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
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
