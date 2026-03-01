import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock fetch first
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Mock analytics
vi.mock('@/app/utils/analytics', () => ({
	trackDonationSubmit: vi.fn(),
	trackDonationSuccess: vi.fn(),
	trackDonationFailure: vi.fn(),
	trackDonationPageView: vi.fn(),
}));

// Mock DonationService
const mockCreateRecord = vi.fn().mockResolvedValue({ success: true, data: {} });
const mockGenerateId = vi.fn().mockReturnValue('WAYE_TEST_123');
const mockGetRandomDescription = vi.fn().mockReturnValue('Test description');

vi.mock('@/app/services/index.service', () => ({
	DonationService: {
		createRecord: () => mockCreateRecord(),
		generateId: () => mockGenerateId(),
		getRandomDonationDescription: () => mockGetRandomDescription(),
	},
	PaymentMethod: {
		BITCOIN: 'bitcoin',
		FIAT: 'fiat',
	},
}));

import DonatePage from '@/app/donate/page';

describe('DonatePage Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockFetch.mockReset();
		mockCreateRecord.mockResolvedValue({ success: true, data: {} });

		// Reset location mock
		Object.defineProperty(window, 'location', {
			value: {
				href: 'http://localhost:3000/donate',
				assign: vi.fn(),
			},
			writable: true,
		});
	});

	// ============================================
	// RENDERING TESTS
	// ============================================
	describe('Rendering', () => {
		it('should render the page title', () => {
			render(<DonatePage />);

			expect(screen.getByText('Donate to Waye')).toBeInTheDocument();
		});

		it('should render foundation information', () => {
			render(<DonatePage />);

			expect(
				screen.getByText(/OS Waye Foundation \(EIN: 99-5041645\)/i)
			).toBeInTheDocument();
		});

		it('should render preset amount buttons', () => {
			render(<DonatePage />);

			expect(screen.getByRole('button', { name: '$50' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: '$100' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: '$250' })).toBeInTheDocument();
			expect(screen.getByRole('button', { name: '$500' })).toBeInTheDocument();
		});

		it('should render donation buttons', () => {
			render(<DonatePage />);

			expect(
				screen.getByRole('button', { name: /Donate with Bitcoin/i })
			).toBeInTheDocument();
			expect(
				screen.getByRole('button', { name: /Donate with Fiat/i })
			).toBeInTheDocument();
		});

		it('should render tax deductible radio options', () => {
			render(<DonatePage />);

			expect(screen.getByLabelText('Yes')).toBeInTheDocument();
			expect(screen.getByLabelText('No')).toBeInTheDocument();
		});

		it('should render name and email input fields', () => {
			render(<DonatePage />);

			expect(
				screen.getByPlaceholderText('Satoshi Nakamoto')
			).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText('satoshi@nakamoto.com')
			).toBeInTheDocument();
		});

		it('should render custom amount input', () => {
			render(<DonatePage />);

			expect(
				screen.getByPlaceholderText('Or enter custom amount')
			).toBeInTheDocument();
		});
	});

	// ============================================
	// AMOUNT SELECTION TESTS
	// ============================================
	describe('Amount Selection', () => {
		it('should have first preset amount selected by default', () => {
			render(<DonatePage />);

			const button50 = screen.getByRole('button', { name: '$50' });
			expect(button50).toHaveClass('border-orange-500');
		});

		it('should select amount when preset button is clicked', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const button250 = screen.getByRole('button', { name: '$250' });
			await user.click(button250);

			expect(button250).toHaveClass('border-orange-500');
		});

		it('should update amount when custom value is entered', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const customInput = screen.getByPlaceholderText('Or enter custom amount');
			await user.clear(customInput);
			await user.type(customInput, '999');

			expect(customInput).toHaveValue('999');
		});

		it('should filter non-numeric characters from custom amount', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const customInput = screen.getByPlaceholderText('Or enter custom amount');
			await user.clear(customInput);
			await user.type(customInput, 'abc123def');

			expect(customInput).toHaveValue('123');
		});
	});

	// ============================================
	// TAX DEDUCTIBLE TESTS
	// ============================================
	describe('Tax Deductible Option', () => {
		it('should default to "No" for tax deductible', () => {
			render(<DonatePage />);

			const noOption = screen.getByLabelText('No');
			expect(noOption).toBeChecked();
		});

		it('should allow selecting "Yes" for tax deductible', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const yesOption = screen.getByLabelText('Yes');
			await user.click(yesOption);

			expect(yesOption).toBeChecked();
		});

		it('should show optional labels when tax deductible is "No"', () => {
			render(<DonatePage />);

			const optionalTexts = screen.getAllByText('(optional)');
			expect(optionalTexts.length).toBeGreaterThan(0);
		});

		it('should not show optional labels when tax deductible is "Yes"', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const yesOption = screen.getByLabelText('Yes');
			await user.click(yesOption);

			await waitFor(() => {
				const optionalTexts = screen.queryAllByText('(optional)');
				expect(optionalTexts.length).toBe(0);
			});
		});
	});

	// ============================================
	// INPUT FIELD TESTS
	// ============================================
	describe('Input Fields', () => {
		it('should update donor name on input', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const nameInput = screen.getByPlaceholderText('Satoshi Nakamoto');
			await user.type(nameInput, 'John Doe');

			expect(nameInput).toHaveValue('John Doe');
		});

		it('should update donor email on input', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			const emailInput = screen.getByPlaceholderText('satoshi@nakamoto.com');
			await user.type(emailInput, 'john@example.com');

			expect(emailInput).toHaveValue('john@example.com');
		});
	});

	// ============================================
	// VALIDATION TESTS
	// ============================================
	describe('Validation', () => {
		it('should require name and email for tax deductible donations', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			// Select tax deductible
			const yesOption = screen.getByLabelText('Yes');
			await user.click(yesOption);

			// Try to donate without name and email
			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			await user.click(bitcoinButton);

			await waitFor(() => {
				expect(
					screen.getByText(
						'Name and email are required for tax deductible donations'
					)
				).toBeInTheDocument();
			});
		});

		it('should show error for invalid email in tax deductible donations', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			// Select tax deductible
			const yesOption = screen.getByLabelText('Yes');
			await user.click(yesOption);

			// Enter name but invalid email
			const nameInput = screen.getByPlaceholderText('Satoshi Nakamoto');
			const emailInput = screen.getByPlaceholderText('satoshi@nakamoto.com');
			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'invalid-email');

			// Try to donate
			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			await user.click(bitcoinButton);

			await waitFor(() => {
				expect(
					screen.getByText('A valid email address is required')
				).toBeInTheDocument();
			});
		});
	});

	// ============================================
	// BITCOIN DONATION TESTS
	// ============================================
	describe('Bitcoin Donation', () => {
		it('should call API when Bitcoin donation is submitted', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({
						success: true,
						donationUrl: 'https://btcpay.example.com/invoice/123',
					}),
			});

			const user = userEvent.setup();
			render(<DonatePage />);

			// Select amount
			const button100 = screen.getByRole('button', { name: '$100' });
			await user.click(button100);

			// Click donate
			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			await user.click(bitcoinButton);

			await waitFor(() => {
				expect(mockCreateRecord).toHaveBeenCalled();
				expect(mockFetch).toHaveBeenCalledWith(
					'/api/create-donation',
					expect.any(Object)
				);
			});
		});
	});

	// ============================================
	// FIAT DONATION TESTS
	// ============================================
	describe('Fiat Donation', () => {
		it('should call API when Fiat donation is submitted', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({
						success: true,
						url: 'https://checkout.stripe.com/pay/123',
					}),
			});

			const user = userEvent.setup();
			render(<DonatePage />);

			// Select amount
			const button100 = screen.getByRole('button', { name: '$100' });
			await user.click(button100);

			// Click donate
			const fiatButton = screen.getByRole('button', {
				name: /Donate with Fiat/i,
			});
			await user.click(fiatButton);

			await waitFor(() => {
				expect(mockCreateRecord).toHaveBeenCalled();
				expect(mockFetch).toHaveBeenCalledWith(
					'/api/create-stripe-checkout',
					expect.any(Object)
				);
			});
		});
	});

	// ============================================
	// ERROR HANDLING TESTS
	// ============================================
	describe('Error Handling', () => {
		it('should display error message on API failure', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: false,
				json: () =>
					Promise.resolve({
						success: false,
						error: 'Payment failed',
					}),
			});

			const user = userEvent.setup();
			render(<DonatePage />);

			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			await user.click(bitcoinButton);

			await waitFor(() => {
				expect(screen.getByText(/Error: Payment failed/i)).toBeInTheDocument();
			});
		});

		it('should display error when Stripe URL is missing', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({
						success: true,
						url: null,
					}),
			});

			const user = userEvent.setup();
			render(<DonatePage />);

			const fiatButton = screen.getByRole('button', {
				name: /Donate with Fiat/i,
			});
			await user.click(fiatButton);

			await waitFor(() => {
				expect(
					screen.getByText(/Error: No checkout URL received/i)
				).toBeInTheDocument();
			});
		});

		it('should handle network error gracefully', async () => {
			mockCreateRecord.mockRejectedValueOnce(new Error('Network error'));

			const user = userEvent.setup();
			render(<DonatePage />);

			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			await user.click(bitcoinButton);

			await waitFor(() => {
				expect(
					screen.getByText('An unexpected error occurred. Please try again.')
				).toBeInTheDocument();
			});
		});
	});

	// ============================================
	// BUTTON DISABLED STATE TESTS
	// ============================================
	describe('Button Disabled States', () => {
		it('should enable donation buttons when amount is selected', () => {
			render(<DonatePage />);

			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			const fiatButton = screen.getByRole('button', {
				name: /Donate with Fiat/i,
			});

			// Default amount of 50 should be selected, so buttons should be enabled
			expect(bitcoinButton).not.toBeDisabled();
			expect(fiatButton).not.toBeDisabled();
		});

		it('should disable donation buttons when custom amount is empty', async () => {
			const user = userEvent.setup();
			render(<DonatePage />);

			// Clear the amount by entering empty custom amount
			const customInput = screen.getByPlaceholderText('Or enter custom amount');

			// Simulate clearing the amount
			fireEvent.change(customInput, { target: { value: '' } });

			const bitcoinButton = screen.getByRole('button', {
				name: /Donate with Bitcoin/i,
			});
			const fiatButton = screen.getByRole('button', {
				name: /Donate with Fiat/i,
			});

			expect(bitcoinButton).toBeDisabled();
			expect(fiatButton).toBeDisabled();
		});
	});

	// ============================================
	// CONTACT INFO TESTS
	// ============================================
	describe('Contact Information', () => {
		it('should render contact email', () => {
			render(<DonatePage />);

			expect(screen.getByText('hello@waye.dev')).toBeInTheDocument();
		});

		it('should have correct email link', () => {
			render(<DonatePage />);

			const emailLink = screen.getByRole('link', { name: 'hello@waye.dev' });
			expect(emailLink).toHaveAttribute('href', 'mailto:hello@waye.dev');
		});
	});
});
