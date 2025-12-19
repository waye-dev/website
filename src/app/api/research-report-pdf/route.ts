import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const pdfPath = join(
      process.cwd(),
      "src/app/initiatives/permissionless-paths/research-report/read_only.pdf"
    );

    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Permissionless_Paths_Research_Report.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return NextResponse.json(
      { error: "Failed to serve PDF" },
      { status: 500 }
    );
  }
}
