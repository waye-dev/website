"use client";

import { useState } from "react";
import Wrapper from "@/app/components/wrapper";
import Eyeballs from "@/app/components/research-report/_components/eyeballs";

export const ExecutiveSummary = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch("/api/research-report-pdf");
      
      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Permissionless_Paths_Research_Report.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Wrapper>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex flex-col gap-14 items-center w-full pt-16'>
          <section className='flex flex-col items-center gap-5'>
            <h1 className='text-[30px] md:text-[40px] lg:text-[54px] leading-[120%] md:leading-[75.6px] font-inknutAntiqua font-normal text-center'>
              Permissionless Paths
            </h1>
            <p className='text-xl sm:text-3xl font-josefinSlab font-normal text-center'>By Laura Lotti</p>
          </section>

          <Eyeballs 
            guyImageSrc="/svgs/research/intro/guy.svg"
            eyesImageSrc="/svgs/research/intro/eyes.svg"
          />
        </div>

        <div className='flex flex-col gap-5'>
            <h3 className='text-xl md:text-2xl lg:text-[32px] leading-[120%] font-inknutAntiqua font-normal text-center'>Executive Summary</h3>
          <section className='flex flex-col gap-3 text-lg'>
            <p>
              <strong>
                This report is the first-ever deep-dive into the working lives of independent developers building censorship-resistant technology and what they need to sustain their work.
              </strong> Earlier this year, we interviewed 26 independent contributors within the Bitcoin and Nostr ecosystems, where grant funding is critical to ensure freedom from institutional capture. Rather than examining specific projects or funding mechanisms, we focused on the builders themselves: their motivations, work patterns, and the challenges they face navigating open source development.
            </p>

            <p>
              <strong>
                Our core finding: the very values and features that attract developers to Bitcoin and Nostr, including freedom, autonomy and permissionless participation, become the source of their greatest challenges.
              </strong>{" "}
              We call this the "tyranny of permissionlessness." While these principles enable open innovation and resist capture, without
              support structures they lead developers to navigate unlimited responsibility alone, leading to burnout and departure.
            </p>

            <p>
              <strong>
                This isn't inevitable. With intentional design, we can maintain permissionless participation while building sustainable work practices.
              </strong>{" "}
              We provide evidence-based, actionable recommendations for funders and ecosystem leaders to better support decentralized development. These include: team-based funding models, extended renewal cycles, administrative support infrastructure, mental health resources, and structured transition pathways for experienced contributors.
            </p>
          </section>

          <div className='flex justify-center pt-6 pb-3'>
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="pdf-download-button group relative flex items-center justify-center gap-3 text-black hover:text-white hover:bg-blue-custom-1100 rounded-full transition-all duration-300 px-7 py-4 md:px-10 md:py-5 font-medium text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:animate-none border border-black/10 hover:border-blue-custom-1100/30"
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-semibold">Downloading...</span>
                </>
              ) : (
                <>
                  <svg 
                    className="pdf-icon h-5 w-5 md:h-6 md:w-6 flex-shrink-0 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="whitespace-nowrap font-semibold tracking-wide">Read as PDF</span>
                </>
              )}
            </button>
          </div>

          <p className='text-lg'>The report unfolds in six parts:</p>
        </div>
        
      </div>
    </Wrapper>
  );
};

