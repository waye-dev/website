import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  GA_TRACKING_ID,
  pageview,
  event,
  trackDonationClick,
  trackDonationPageView,
  trackDonationSubmit,
  trackDonationSuccess,
  trackDonationFailure,
  trackSectionView,
  trackScrollDepth,
  trackResearchReportSection,
} from '@/app/utils/analytics';

describe('Analytics Functions', () => {
  let mockGtag: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockGtag = vi.fn();
    window.gtag = mockGtag;
    window.dataLayer = [];
  });

  // ============================================
  // CONSTANTS TESTS
  // ============================================
  describe('GA_TRACKING_ID', () => {
    it('should be defined', () => {
      expect(GA_TRACKING_ID).toBeDefined();
    });

    it('should be a non-empty string', () => {
      expect(typeof GA_TRACKING_ID).toBe('string');
      expect(GA_TRACKING_ID.length).toBeGreaterThan(0);
    });

    it('should match Google Analytics ID format', () => {
      expect(GA_TRACKING_ID).toMatch(/^G-[A-Z0-9]+$/);
    });
  });

  // ============================================
  // PAGEVIEW TESTS
  // ============================================
  describe('pageview', () => {
    it('should call gtag with correct parameters', () => {
      pageview('/test-page');

      expect(mockGtag).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
        page_path: '/test-page',
      });
    });

    it('should handle root path', () => {
      pageview('/');

      expect(mockGtag).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
        page_path: '/',
      });
    });

    it('should handle nested paths', () => {
      pageview('/initiatives/os-reboot');

      expect(mockGtag).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
        page_path: '/initiatives/os-reboot',
      });
    });

    it('should handle paths with query strings', () => {
      pageview('/donate?ref=twitter');

      expect(mockGtag).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
        page_path: '/donate?ref=twitter',
      });
    });

    it('should not call gtag when gtag is undefined', () => {
      window.gtag = undefined;
      pageview('/test');

      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  // ============================================
  // EVENT TESTS
  // ============================================
  describe('event', () => {
    it('should call gtag with event action and category', () => {
      event({
        action: 'test_action',
        category: 'Test Category',
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'Test Category',
        event_label: undefined,
        value: undefined,
      });
    });

    it('should include label when provided', () => {
      event({
        action: 'test_action',
        category: 'Test Category',
        label: 'test_label',
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'Test Category',
        event_label: 'test_label',
        value: undefined,
      });
    });

    it('should include value when provided', () => {
      event({
        action: 'test_action',
        category: 'Test Category',
        value: 100,
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'Test Category',
        event_label: undefined,
        value: 100,
      });
    });

    it('should include additional custom parameters', () => {
      event({
        action: 'test_action',
        category: 'Test Category',
        custom_param: 'custom_value',
      });

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'Test Category',
        event_label: undefined,
        value: undefined,
        custom_param: 'custom_value',
      });
    });

    it('should not call gtag when gtag is undefined', () => {
      window.gtag = undefined;
      event({
        action: 'test_action',
        category: 'Test Category',
      });

      expect(mockGtag).not.toHaveBeenCalled();
    });
  });

  // ============================================
  // DONATION TRACKING TESTS
  // ============================================
  describe('trackDonationClick', () => {
    it('should track donation button click with location', () => {
      trackDonationClick('header');

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_button_click', {
        event_category: 'Donation',
        event_label: 'header',
        value: undefined,
      });
    });

    it('should track different locations', () => {
      trackDonationClick('footer');

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_button_click', {
        event_category: 'Donation',
        event_label: 'footer',
        value: undefined,
      });
    });
  });

  describe('trackDonationPageView', () => {
    it('should track donation page view', () => {
      trackDonationPageView();

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_page_view', {
        event_category: 'Donation',
        event_label: undefined,
        value: undefined,
      });
    });
  });

  describe('trackDonationSubmit', () => {
    it('should track bitcoin donation submit', () => {
      trackDonationSubmit('bitcoin', 100);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_submit', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: 100,
        payment_method: 'bitcoin',
      });
    });

    it('should track fiat donation submit', () => {
      trackDonationSubmit('fiat', 250);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_submit', {
        event_category: 'Donation',
        event_label: 'fiat',
        value: 250,
        payment_method: 'fiat',
      });
    });

    it('should handle large amounts', () => {
      trackDonationSubmit('bitcoin', 1000000);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_submit', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: 1000000,
        payment_method: 'bitcoin',
      });
    });
  });

  describe('trackDonationSuccess', () => {
    it('should track successful bitcoin donation', () => {
      trackDonationSuccess('bitcoin', 100);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_success', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: 100,
        payment_method: 'bitcoin',
      });
    });

    it('should track successful fiat donation', () => {
      trackDonationSuccess('fiat', 500);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_success', {
        event_category: 'Donation',
        event_label: 'fiat',
        value: 500,
        payment_method: 'fiat',
      });
    });
  });

  describe('trackDonationFailure', () => {
    it('should track bitcoin donation failure with error message', () => {
      trackDonationFailure('bitcoin', 'Network error');

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_failure', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: undefined,
        error_message: 'Network error',
      });
    });

    it('should track fiat donation failure with error message', () => {
      trackDonationFailure('fiat', 'Card declined');

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_failure', {
        event_category: 'Donation',
        event_label: 'fiat',
        value: undefined,
        error_message: 'Card declined',
      });
    });

    it('should handle long error messages', () => {
      const longError = 'A'.repeat(1000);
      trackDonationFailure('bitcoin', longError);

      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_failure', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: undefined,
        error_message: longError,
      });
    });
  });

  // ============================================
  // RESEARCH REPORT TRACKING TESTS
  // ============================================
  describe('trackSectionView', () => {
    it('should track section view with name only', () => {
      trackSectionView('Introduction');

      expect(mockGtag).toHaveBeenCalledWith('event', 'section_view', {
        event_category: 'Research Report',
        event_label: 'Introduction',
        value: undefined,
      });
    });

    it('should track section view with time spent', () => {
      trackSectionView('Methodology', 30);

      expect(mockGtag).toHaveBeenCalledWith('event', 'section_view', {
        event_category: 'Research Report',
        event_label: 'Methodology',
        value: 30,
      });
    });
  });

  describe('trackScrollDepth', () => {
    it('should track scroll depth with percentage and path', () => {
      trackScrollDepth(50, '/research');

      expect(mockGtag).toHaveBeenCalledWith('event', 'scroll_depth', {
        event_category: 'Engagement',
        event_label: '/research',
        value: 50,
        scroll_percentage: 50,
      });
    });

    it('should handle 0% scroll depth', () => {
      trackScrollDepth(0, '/');

      expect(mockGtag).toHaveBeenCalledWith('event', 'scroll_depth', {
        event_category: 'Engagement',
        event_label: '/',
        value: 0,
        scroll_percentage: 0,
      });
    });

    it('should handle 100% scroll depth', () => {
      trackScrollDepth(100, '/about');

      expect(mockGtag).toHaveBeenCalledWith('event', 'scroll_depth', {
        event_category: 'Engagement',
        event_label: '/about',
        value: 100,
        scroll_percentage: 100,
      });
    });
  });

  describe('trackResearchReportSection', () => {
    it('should track research section with name and order', () => {
      trackResearchReportSection('Executive Summary', 1);

      expect(mockGtag).toHaveBeenCalledWith('event', 'research_section_entered', {
        event_category: 'Research Report',
        event_label: 'Executive Summary',
        value: undefined,
        section_order: 1,
      });
    });

    it('should handle different section orders', () => {
      trackResearchReportSection('Conclusion', 10);

      expect(mockGtag).toHaveBeenCalledWith('event', 'research_section_entered', {
        event_category: 'Research Report',
        event_label: 'Conclusion',
        value: undefined,
        section_order: 10,
      });
    });
  });

  // ============================================
  // EDGE CASES
  // ============================================
  describe('Edge Cases', () => {
    it('should handle empty strings in tracking functions', () => {
      trackDonationClick('');
      expect(mockGtag).toHaveBeenCalled();
    });

    it('should handle special characters in labels', () => {
      trackDonationClick('header-&-footer');
      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_button_click', {
        event_category: 'Donation',
        event_label: 'header-&-footer',
        value: undefined,
      });
    });

    it('should handle zero values', () => {
      trackDonationSubmit('bitcoin', 0);
      expect(mockGtag).toHaveBeenCalledWith('event', 'donation_submit', {
        event_category: 'Donation',
        event_label: 'bitcoin',
        value: 0,
        payment_method: 'bitcoin',
      });
    });
  });
});

