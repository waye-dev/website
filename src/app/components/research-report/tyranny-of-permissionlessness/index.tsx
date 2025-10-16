"use client";

import Link from "next/link";
import Wrapper from "@/app/components/wrapper";
import { Folders } from "./folders";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SimpleShareButton } from "@/app/components/share-mode/simple-share-button";
import { SHAREABLE_description_IDS } from "@/app/data/shareable-content";

gsap.registerPlugin(ScrollTrigger);

export const TyrannyOfPermissionlessness = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div className='text-white flex flex-col pt-12'>
      <Wrapper className='max-w-[1000px] xl:max-w-[1250px]'>
        <section ref={sectionRef} className='flex flex-col gap-4 text-lg'>
          <p>
            If Jo Freeman's tyranny of structurelessness{" "}
            <Link href={"https://www.jofreeman.com/joreen/tyranny.htm"} target='_blank'>
              (1970)
            </Link>{" "}
            speaks to the invisible power dynamics in horizontal collectives, and Nathan Schneider's tyranny of openness{" "}
            <Link href={"https://www.tandfonline.com/doi/abs/10.1080/14680777.2021.1890183"} target='_blank'>
              (2021)
            </Link>{" "}
            addresses how transparency masks exploitation in peer production, in the context of freedom tech tyranny of permissionlessness reveals how
            the promise of total autonomy becomes total responsibility.
          </p>

          <p>
            In technical systems, permissionlessness enables innovation and decentralized participation by removing gatekeepers — anyone can transmit
            data packets, build websites using HTTP, or contribute to and modify open source code by following protocol rules (Nabben and Zargham 2022).
            But when extended to human labor systems, this same design principle can create overwhelming choice. Our findings suggest that the absence
            of gatekeepers results in absence of guides; freedom from oversight means freedom from support; the right to contribute becomes the
            responsibility to self-manage everything.
          </p>

          <p>
            As our paradox exercise showed, this tension intensifies with experience: senior developers report higher burnout while caring more for
            others, embrace "fun" because productivity alone cannot sustain them, and become pragmatic about commercial realities they initially
            resisted. The tyranny doesn't diminish with time — it compounds.
          </p>

          <p>This tyranny emerges at the confluence of four interconnected dimensions that shape the developer experience:</p>

          <ul className='list-disc pl-5 md:pl-8 flex flex-col gap-[7px]'>
            <li>
              <strong>Ideological factors:</strong> how freedom as mission becomes freedom as burden
            </li>
            <li>
              <strong>Structural factors:</strong> how permissionless architecture and work practices create isolated work
            </li>
            <li>
              <strong>Human factors:</strong> how self-management becomes self-exploitation
            </li>
            <li>
              <strong>Institutional factors:</strong> how grant systems reinforce individual struggles, rather than facilitating collective support
            </li>
          </ul>

          <p>
            Below we describe these tensions. Each dimension shows how the very features that attract contributors to the space — mission, openness,
            autonomy — become the primary causes of unsustainable work patterns. <SimpleShareButton shareId={SHAREABLE_description_IDS.PERMISSIONLESSNESS_ENABLES} />
          </p>
        </section>
      </Wrapper>

      <Folders />
    </div>
  );
};
