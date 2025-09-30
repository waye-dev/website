"use client";

import { useEffect } from "react";

interface HashNavigationProps {
  offset?: number;
  behavior?: ScrollBehavior;
}

export const HashNavigation: React.FC<HashNavigationProps> = ({ offset = 100, behavior = "smooth" }) => {
  useEffect(() => {
    const scrollToHashElement = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      // Try to find the element by ID
      // First try direct ID match
      let element = document.getElementById(hash);

      // If not found, try looking for elements with data-shareable-id attribute
      if (!element) {
        element = document.querySelector(`[data-shareable-id="${decodeURIComponent(hash)}"]`);
      }

      if (element) {
        // Calculate the position to scroll to (element top - offset)
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const scrollToPosition = absoluteElementTop - offset;

        // Scroll to the element
        window.scrollTo({
          top: Math.max(0, scrollToPosition), // Ensure we don't scroll to negative values
          behavior: behavior,
        });

        // Optional: Add a visual highlight to the target element
        element.classList.add("hash-target-highlight");

        // Remove the highlight after a few seconds
        setTimeout(() => {
          element?.classList.remove("hash-target-highlight");
        }, 3000);
      }
    };

    // Scroll on initial page load
    // Use a small delay to ensure all content is rendered
    const timeoutId = setTimeout(scrollToHashElement, 100);

    // Also listen for hash changes (when user navigates with browser back/forward)
    const handleHashChange = () => {
      scrollToHashElement();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [offset, behavior]);

  return null; // This component doesn't render anything
};
