"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Wrapper from "@/app/components/wrapper";
import { StudyOverviewSection } from "@/app/components/research-report/study-overview-section";
import { TopLevelAnalysis } from "@/app/components/research-report/top-level-analysis";
import { TyrannyOfPermissionlessness } from "@/app/components/research-report/tyranny-of-permissionlessness";
import { Strategies } from "@/app/components/research-report/strategies";
import { StrategiesWall } from "@/app/components/research-report/strategies-wall";
import { BeyondFinancialSustainability } from "@/app/components/research-report/beyond-financial-sustainability";
import { RecommendationReveal } from "@/app/components/research-report/mountains/index";
import { Conclusion } from "@/app/components/research-report/conclusion";
import { FromTyrannyToPermissionlessness } from "@/app/components/research-report/from-tyranny-to-permissionlessness";
import { CoreFindingsTheTyrany } from "@/app/components/research-report/core-findings-the-tyrany";
import { ExecutiveSummary } from "@/app/components/research-report/executive-summary";
import { trackResearchReportSection, trackScrollDepth } from "@/app/utils/analytics";
import { Glossary } from "@/app/components/research-report/glossary";

gsap.registerPlugin(ScrollTrigger);

export function ResearchReportClient() {
  const searchParams = useSearchParams();
  const trackedSectionsRef = useRef<Set<string>>(new Set());
  const trackedScrollDepthsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    ScrollTrigger.normalizeScroll({
      allowNestedScroll: true,
      type: "touch,wheel",
      lockAxis: true
    });

    let resizeTimer: NodeJS.Timeout;
    let lastHeight = window.visualViewport?.height || window.innerHeight;
    let isUserScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    // Track when user is actively scrolling
    const handleScroll = () => {
      isUserScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 100);
    };

    const handleVisualViewportResize = () => {
      // Don't interfere if user is actively scrolling
      if (isUserScrolling) {
        lastHeight = window.visualViewport?.height || window.innerHeight;
        return;
      }

      const currentHeight = window.visualViewport?.height || window.innerHeight;
      const heightDiff = Math.abs(currentHeight - lastHeight);

      if (heightDiff > 150) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          ScrollTrigger.refresh();
          lastHeight = currentHeight;
        }, 150);
      } else {
        lastHeight = currentHeight;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.visualViewport?.addEventListener('resize', handleVisualViewportResize);

    return () => {
      ScrollTrigger.normalizeScroll(false);
      window.removeEventListener('scroll', handleScroll);
      window.visualViewport?.removeEventListener('resize', handleVisualViewportResize);
      clearTimeout(resizeTimer);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const shareId = searchParams.get('share');
    if (shareId) {
      const scrollTimeout = setTimeout(() => {
        const shareableElement = document.querySelector(`[data-shareable-id="${shareId}"]`);

        if (shareableElement) {
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 80;

          const elementRect = shareableElement.getBoundingClientRect();
          const absoluteElementTop = elementRect.top + window.scrollY;
          const elementHeight = elementRect.height;

          const viewportHeight = window.visualViewport?.height || window.innerHeight;
          const scrollToPosition = absoluteElementTop - (viewportHeight / 2) + (elementHeight / 2);

          window.scrollTo({
            top: Math.max(0, scrollToPosition),
            behavior: 'smooth'
          });
        } else {
          const sectionMap: { [key: string]: string } = {
            'executive-summary': 'study-overview',
            'study-overview': 'study-overview',
            'top-level-analysis': 'top-level-analysis',
            'sustainability-paradox': 'top-level-analysis',
            'core-finding': 'tyranny-of-permissionlessness',
            'tyranny-of-permissionlessness': 'tyranny-of-permissionlessness',
            'permissionlessness-enables': 'tyranny-of-permissionlessness',
            'permissionlessness-isolation': 'tyranny-of-permissionlessness',
            'four-strategies': 'four-strategies-for-chaos',
            'no-framework': 'four-strategies-for-chaos',
            'beyond-financial': 'beyond-financial-sustainability',
            'ecosystem-replacement': 'beyond-financial-sustainability',
            'recommendations': 'recommendations',
            'not-inevitable': 'recommendations',
            'keeping-open-participation': 'recommendations',
            'fund-teams-recommendation': 'recommendations',
            'make-invisible-visible': 'recommendations',
          };

          const targetSection = sectionMap[shareId];
          if (targetSection) {
            const sectionElement = document.querySelector(`[data-section="${targetSection}"]`);
            if (sectionElement) {
              const navbar = document.querySelector('nav');
              const navbarHeight = navbar ? navbar.offsetHeight : 80;
              const rect = sectionElement.getBoundingClientRect();
              const absoluteTop = rect.top + window.scrollY;

              window.scrollTo({
                top: Math.max(0, absoluteTop - navbarHeight - 20),
                behavior: 'smooth'
              });
            }
          }
        }
      }, 300);

      return () => clearTimeout(scrollTimeout);
    }
  }, [searchParams]);

  useEffect(() => {
    // Scroll depth tracking
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = ((scrollTop + windowHeight) / documentHeight) * 100;

      const depths = [25, 50, 75, 100];
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedScrollDepthsRef.current.has(depth)) {
          trackedScrollDepthsRef.current.add(depth);
          trackScrollDepth(depth, window.location.pathname);
        }
      });
    };

    // Section view tracking
    const sections = document.querySelectorAll('[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName && !trackedSectionsRef.current.has(sectionName)) {
              trackedSectionsRef.current.add(sectionName);
              const order = trackedSectionsRef.current.size;
              trackResearchReportSection(sectionName, order);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    window.addEventListener('scroll', handleScroll);
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main>
      <div className='bg-gray-custom-400 text-black'>
        <ExecutiveSummary />

        <Glossary />

        <div className='flex flex-col gap-16'>
          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='study-overview'>
            <StudyOverviewSection />
          </Wrapper>

          <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='top-level-analysis'>
            <TopLevelAnalysis />
          </Wrapper>
        </div>
      </div>
      <div className='bg-gray-custom-400 relative z-[11]'>
      <CoreFindingsTheTyrany />
      </div>
      <div className='bg-blue-custom-1200 relative z-[2]' data-section='tyranny-of-permissionlessness'>
        <div className='-mt-48 pt-64'>
          <TyrannyOfPermissionlessness />
        </div>
      </div>
      <div className='bg-blue-custom-1200'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='four-strategies-for-chaos'>
          <Strategies />
        </Wrapper>
      </div>

      <div className='bg-blue-custom-1200'>
        <StrategiesWall />
      </div>

      <div className='bg-blue-custom-1200'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='beyond-financial-sustainability'>
          <BeyondFinancialSustainability />
        </Wrapper>
      </div>
      <div className='bg-blue-custom-1100 overflow-hidden relative z-[10]'>
        <RecommendationReveal />
      </div>

      <div className='bg-gray-custom-400' data-section='recommendations'>
        <FromTyrannyToPermissionlessness />
      </div>
      <div className='bg-gray-custom-400 text-black'>
        <Wrapper className='max-w-[1000px] xl:max-w-[1250px] py-24' data-section='toward-sustainable-permissionlessness'>
          <Conclusion />
        </Wrapper>
      </div>
    </main>
  );
}
