import { Suspense } from "react";
import { generateMetadata } from "./metadata";
import { ResearchReportClient } from "./client";

export { generateMetadata };

export default function ResearchReport() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearchReportClient />
    </Suspense>
  );
}
