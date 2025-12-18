"use client";

import Link from "next/link";
import { event } from "@/app/utils/analytics";

export const Conclusion = () => {
  return (
    <div className='font-inter text-lg flex flex-col gap-10'>
      <h1 className='text-[30px] md:text-[33px] leading-[120%] font-inknutAntiqua text-center'>Conclusion</h1>

      <section className='flex flex-col gap-4'>
        <p>
          This research was commissioned by Waye as part of its mission to better understand and support the human side of freedom technology. Waye is a
          research-led organization focused on improving open-source ecosystems, using evidence and observation to identify challenges, spark
          conversations, and turn insights into concrete change.
        </p>

        <p>
          The study was carried out independently, following research ethics standards: voluntary participation, informed consent, anonymity,
          confidentiality, and the right to withdraw.
        </p>

        <p>
          Our heartfelt thanks to the 26 contributors who shared their experiences,
          insights, and time with us. Their openness and generosity made this work possible, and will inform ongoing efforts to improve sustainability
          in open-source Bitcoin and related freedom technologies.
        </p>

        <p>
          We're also grateful to our advisor Nadia Asparouhova for her guidance throughout the project, and to AJ Towns, Neha Narula, Pablo F7z, and Troy Cross for their thoughtful review and feedback on earlier drafts of this report.
        </p>

        <p>
          If this research resonates with you, we invite you to support Waye's work by sharing this report with your networks, donating through{" "}
          <Link 
            href="https://www.waye.dev/" 
            className="underline underline-offset-4"
            onClick={() => event({ action: "donation_link_click", category: "Research Report", label: "conclusion_section" })}
          >
            our website
          </Link>, or joining{" "}
          <Link 
            href="https://www.waye.dev/subscribe" 
            className="underline underline-offset-4"
            onClick={() => event({ action: "subscribe_link_click", category: "Research Report", label: "conclusion_section" })}
          >
            our mailing list
          </Link>{" "}
          for updates on our programs and research initiatives.
        </p>
      </section>
    </div>
  );
};
