"use client";

import { useEffect } from "react";

interface RobotsMetaProps {
  isModalOpen: boolean;
}

export const RobotsMeta = ({ isModalOpen }: RobotsMetaProps) => {
  useEffect(() => {
    // Create or update robots meta tag when modal opens/closes
    let robotsMetaTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;

    if (isModalOpen) {
      // When modal is open, tell robots not to index
      if (!robotsMetaTag) {
        robotsMetaTag = document.createElement("meta");
        robotsMetaTag.name = "robots";
        document.head.appendChild(robotsMetaTag);
      }
      robotsMetaTag.content = "noindex, nofollow, nosnippet, noarchive";
    } else {
      // When modal is closed, restore normal indexing
      if (robotsMetaTag) {
        robotsMetaTag.content = "index, follow";
      }
    }

    // Cleanup function
    return () => {
      if (robotsMetaTag && !isModalOpen) {
        robotsMetaTag.content = "index, follow";
      }
    };
  }, [isModalOpen]);

  return null; // This component doesn't render anything visible
};
