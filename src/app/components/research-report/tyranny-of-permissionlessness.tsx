import Link from "next/link";

export const TyrannyOfPermissionlessness = () => {
  return (
    <div className='text-white flex flex-col gap-14'>
      <section className='flex flex-col gap-4 text-lg'>
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
          <li>Ideological factors: how freedom as mission becomes freedom as burden</li>
          <li>Structural factors: how permissionless architecture and work practices create isolated work</li>
          <li>Human factors: how self-management becomes self-exploitation</li>
          <li>Institutional factors: how grant systems reinforce individual struggles, rather than facilitating collective support</li>
        </ul>

        <p>
          Below we describe these tensions. Each dimension shows how the very features that attract contributors to the space — mission, openness,
          autonomy — become the primary causes of unsustainable work patterns.
        </p>
      </section>
    </div>
  );
};
