import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sections } from './sections-data';
import { QuoteCards } from '../_components/quotes';
import { SHAREABLE_description_IDS } from '@/app/data/shareable-content';

gsap.registerPlugin(ScrollTrigger);

export function FromTyrannyToPermissionlessness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const section08TitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch('/svgs/research/from-tyranny-to-permissionlessness/full.svg');
        const svgText = await response.text();
        
        if (svgRef.current) {
          svgRef.current.innerHTML = svgText;
          
          const svg = svgRef.current.querySelector('svg');
          if (svg) {
            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';
            svg.style.margin = '0 auto';
          }
          
          setSvgLoaded(true);
        }
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  useGSAP(() => {
    if (!svgLoaded) return;

    const svg = svgRef.current?.querySelector('svg');
    if (!svg) return;

    requestAnimationFrame(() => {
      const strokeElements = svg.querySelectorAll('path[stroke]');
      const fillElements = svg.querySelectorAll('path[fill]:not([stroke])');
      
      console.log(`Found ${strokeElements.length} stroke elements and ${fillElements.length} fill elements`);

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "tyranny-permissionlessness",
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${sections.length * 100}%`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false
        }
      });

    const textSectionDuration = 2;
    const totalTimelineDuration = sections.length * textSectionDuration;

    const svgAnimationStartOffset = 0;
    const svgAnimationEndTime = totalTimelineDuration * 0.8;

    const strokeAnimationDuration = (svgAnimationEndTime - svgAnimationStartOffset) * 0.6;
    const fillAnimationStartTime = svgAnimationStartOffset + strokeAnimationDuration * 0.67;
    
    const lastSectionIndex = sections.findIndex(section => section.id === '08');
    const swapStartTime = lastSectionIndex * textSectionDuration;
    
    strokeElements.forEach((element: Element, index: number) => {
      try {
        const pathElement = element as SVGPathElement;
        const length = pathElement.getTotalLength();
        
        gsap.set(element, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        const strokeStartTime = svgAnimationStartOffset + (index / strokeElements.length) * strokeAnimationDuration;
        const strokeDuration = strokeAnimationDuration / strokeElements.length * 2;

        tl.to(element, {
          strokeDashoffset: 0,
          duration: Math.min(strokeDuration, 1.5),
          ease: "power2.inOut"
        }, strokeStartTime);
      } catch (error) {
        console.log('Skipping stroke element');
      }
    });

    fillElements.forEach((element: Element, index: number) => {
      gsap.set(element, {
        opacity: 0,
        scale: 0.8,
        transformOrigin: "center center"
      });

      const fillStartTime = fillAnimationStartTime + (index / fillElements.length) * (svgAnimationEndTime - fillAnimationStartTime);
      
      tl.to(element, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        transformOrigin: "center center"
      }, fillStartTime);
    });

    tl.to(svg, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    }, svgAnimationEndTime - 0.6)
    .to(svg, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut"
    }, svgAnimationEndTime - 0.3);

    if (lastSectionIndex >= 0) {
      tl.to(svgRef.current, {
        y: '-41vh',
        duration: 1,
        ease: "power2.inOut"
      }, swapStartTime);
    }

    textRefs.current.forEach((textEl, index) => {
      if (!textEl) return;

      if (sections[index]?.id === '00') {
        gsap.set(textEl, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto'
        });
      } else {
        gsap.set(textEl, {
          opacity: 0,
          y: 100,
          pointerEvents: 'none'
        });
      }

      const startTime = index * textSectionDuration;

      if (sections[index]?.id === '08') {
        if (section08TitleRef.current) {
          gsap.set(section08TitleRef.current, {
            opacity: 0,
            y: -50
          });

          tl.to(section08TitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, startTime + 1);
        }

        tl.to(textEl, {
          y: '31vh',
          duration: 1,
          ease: "power2.inOut"
        }, startTime);

        tl.to(textEl, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.8,
          ease: "power2.out"
        }, startTime + 1);

        tl.to(textEl, {
          opacity: 1,
          duration: textSectionDuration - 1.8
        }, startTime + 1.8);
      } else {
        tl.to(textEl, {
          opacity: 1,
          y: 0,
          pointerEvents: 'auto',
          duration: 0.8,
          ease: "power2.out"
        }, startTime);

        tl.to(textEl, {
          opacity: 1,
          y: 0,
          duration: textSectionDuration - 1.6
        }, startTime + 0.8);

        if (index < sections.length - 1) {
          tl.to(textEl, {
            opacity: 0,
            y: -150,
            pointerEvents: 'none',
            duration: 0.8,
            ease: "power2.in"
          }, startTime + textSectionDuration - 0.8);
        }
      }
    });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === 'tyranny-permissionlessness' || trigger.vars.trigger === containerRef.current) {
          trigger.kill(true);
        }
      });
    };
  }, { scope: containerRef, dependencies: [svgLoaded] });

  return (
    <>
      <div className="md:hidden w-full px-4 py-8">
        {sections.map((section, index) => (
          <div key={section.id} className="mb-12">
            {section.id === '08' ? (
              <div className="space-y-6">
                <p className="font-semibold text-base md:text-lg font-inknutAntiqua text-center mb-6">
                  Developers' ideas
                </p>
                <QuoteCards
                  quotes={[
                    {
                      id: "quote-13",
                      text: "One thing I've been doing is mentoring other people getting into open source. There's a developer that I mentored for over a year, and I still mentored and helped him get a grant, and then I just took on a new person, and I'm really trying to give these people what I didn't get, and take all these experiences I had and really help them feel supported, and create a space where they can be a beginner and not have the answers, and that they don't have to feel like they're constantly having to prove themselves and impress somebody. And so that's been really gratifying to be able to kind of support other people and in general, I think Bitcoin open source is an amazing thing, and is and something I continue to be inspired by, and I love working with the open source community and connecting with them.",
                      author: {
                        type: "new",
                        respondentNumber: 13,
                      },
                    },
                    {
                      id: "quote-20",
                      text: "I feel like that might be a huge missing aspect of a lot of open source teams, this idea of an offsite or just getting together in person. It's kind of hard to get people around from around the world to travel for an open source project since they're not getting paid for, but when it does happen, it's actually really productive, and I would hope we do more of that.",
                      author: {
                        type: "expert",
                        respondentNumber: 20,
                      },
                    },
                    {
                      id: "quote-25",
                      text: "Just trying to slip in more mindfulness does make sense. So, a lot of projects and a lot of developers, they'll feel the need to travel around a lot, and go to a lot of conferences and and that can take its toll. There's usually a lot of alcohol involved, and it's quite high energy and then you feel bad because you're actually neglecting the project. So if you can have that space be more nurturing, and have some mindfulness. I think there is probably, maybe even subconscious, an active move to provide … satellite events at some of these conferences. Like, there's the Bitcoin runners, and in the event, I'll go for a jog around the local city or something, and there's a Bitcoin walkers society as well. And maybe something which you could push is, for some of these conferences, some mindfulness exercises or mindfulness workshops where there could be some meditation, or some guided meditation, or some yoga or something like that, I think that could be great for people.",
                      author: {
                        type: "expert",
                        respondentNumber: 25,
                      },
                    },
                  ]}
                />
              </div>
            ) : (
              <>
                {section.textContent}
                {section.id === '03' && (
                  <div className="mt-8 flex justify-center">
                    <img
                      src="/svgs/research/from-tyranny-to-permissionlessness/mobile-mid.svg"
                      alt="Illustration"
                      className="w-full max-w-md"
                    />
                  </div>
                )}
                {section.id === '06' && (
                  <div className="mt-8 flex justify-center">
                    <img
                      src="/svgs/research/from-tyranny-to-permissionlessness/mobile-new.svg"
                      alt="Illustration"
                      className="w-full max-w-md"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div
          ref={containerRef}
          className="min-h-screen flex items-center justify-center relative gsap-no-drag"
        >
        <div
          ref={svgRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 scale-[1.18] flex justify-center items-center"
          style={{ pointerEvents: 'none', zIndex: 1 }}
        />

        <p
          ref={section08TitleRef}
          className="font-semibold text-base md:text-lg font-inknutAntiqua text-center absolute top-[15vh] left-1/2 -translate-x-1/2 w-full"
          style={{ opacity: 0, zIndex: 50 }}
        >
          Developers' ideas
        </p>

        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full"
          style={{ zIndex: 100, userSelect: 'text', touchAction: 'auto' }}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => { textRefs.current[index] = el; }}
              className="absolute w-full flex justify-center items-center"
              style={{ 
                opacity: section.id === '00' ? 1 : 0,
                pointerEvents: section.id === '00' ? 'auto' : 'none'
              }}
            >
              {section.id === '08' ? (
                <div className="max-w-7xl bg-gray-custom-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg">
                      <p className="text-sm italic mb-3">
                        "One thing I've been doing is mentoring other people getting into open source. There's a developer that I mentored for over a year, and I still mentored and helped him get a grant, and then I just took on a new person, and I'm really trying to give these people what I didn't get, and take all these experiences I had and really help them feel supported, and create a space where they can be a beginner and not have the answers, and that they don't have to feel like they're constantly having to prove themselves and impress somebody. And so that's been really gratifying to be able to kind of support other people and in general, I think Bitcoin open source is an amazing thing, and is and something I continue to be inspired by, and I love working with the open source community and connecting with them."
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">— Respondent #13 New contributor</p>
                    </div>

                    <div className="p-4 rounded-lg">
                      <p className="text-sm italic mb-3">
                        "I feel like that might be a huge missing aspect of a lot of open source teams, this idea of an offsite or just getting together in person. It's kind of hard to get people around from around the world to travel for an open source project since they're not getting paid for, but when it does happen, it's actually really productive, and I would hope we do more of that."
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">— Respondent #20 Expert contributor</p>
                    </div>

                    <div className="p-4 rounded-lg">
                      <p className="text-sm italic mb-3">
                        "Just trying to slip in more mindfulness does make sense. So, a lot of projects and a lot of developers, they'll feel the need to travel around a lot, and go to a lot of conferences and and that can take its toll. There's usually a lot of alcohol involved, and it's quite high energy and then you feel bad because you're actually neglecting the project. So if you can have that space be more nurturing, and have some mindfulness. I think there is probably, maybe even subconscious, an active move to provide … satellite events at some of these conferences. Like, there's the Bitcoin runners, and in the event, I'll go for a jog around the local city or something, and there's a Bitcoin walkers society as well. And maybe something which you could push is, for some of these conferences, some mindfulness exercises or mindfulness workshops where there could be some meditation, or some guided meditation, or some yoga or something like that, I think that could be great for people."
                      </p>
                      <p className="text-xs text-gray-600 font-semibold">— Respondent #25 Expert contributor</p>
                    </div>
                  </div>
                </div>
              ) : section.id === '04' || section.id === '06' || section.id === '07' ? (
                <div className="w-full max-w-4xl px-4">
                  {section.textContent}
                </div>
              ) : (
                section.textContent
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}