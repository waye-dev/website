import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock fetch
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Mock next/navigation
vi.mock('next/navigation', () => ({
	usePathname: vi.fn(() => '/'),
}));

import EmailSignup from '@/app/components/email-signup';

describe('EmailSignup Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockFetch.mockReset();
	});

	// ============================================
	// RENDERING TESTS
	// ============================================
	describe('Rendering', () => {
		it('should render the component with all elements', () => {
			render(<EmailSignup />);

			expect(screen.getByPlaceholderText('Name / Nym')).toBeInTheDocument();
			expect(
				screen.getByPlaceholderText('yourname@email.com')
			).toBeInTheDocument();
			expect(
				screen.getByRole('button', { name: 'Subscribe' })
			).toBeInTheDocument();
		});

		it('should render heading on non-subscribe page', () => {
			render(<EmailSignup />);

			expect(screen.getByText('Join our mailing list')).toBeInTheDocument();
			expect(
				screen.getByText("We have a lot brewing and can't wait to tell you all about it!")
			).toBeInTheDocument();
		});

		it('should not render heading on subscribe page', async () => {
			const { usePathname } = await import('next/navigation');
			vi.mocked(usePathname).mockReturnValue('/subscribe');

			render(<EmailSignup />);

			expect(screen.queryByText('Join our mailing list')).not.toBeInTheDocument();
		});

		it('should have required attribute on input fields', () => {
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			expect(nameInput).toHaveAttribute('required');
			expect(emailInput).toHaveAttribute('required');
		});

		it('should have correct input types', () => {
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			expect(nameInput).toHaveAttribute('type', 'text');
			expect(emailInput).toHaveAttribute('type', 'email');
		});
	});

	// ============================================
	// INPUT HANDLING TESTS
	// ============================================
	describe('Input Handling', () => {
		it('should update name value on change', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			await user.type(nameInput, 'John Doe');

			expect(nameInput).toHaveValue('John Doe');
		});

		it('should update email value on change', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			await user.type(emailInput, 'john@example.com');

			expect(emailInput).toHaveValue('john@example.com');
		});

		it('should handle name input with special characters', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			await user.type(nameInput, "O'Connor-Smith");

			expect(nameInput).toHaveValue("O'Connor-Smith");
		});
	});

	// ============================================
	// VALIDATION TESTS
	// ============================================
	describe('Validation', () => {
		it('should show error for invalid email format', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'invalid-email');

			await waitFor(() => {
				expect(
					screen.getByText('Please enter a valid email address')
				).toBeInTheDocument();
			});
		});

		it('should show error for invalid name (too short) when email is also provided', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			// Need to provide both fields to see the name validation error
			// Otherwise "Please fill in all fields" is shown first
			await user.type(nameInput, 'A');
			await user.type(emailInput, 'test@example.com');

			await waitFor(() => {
				expect(
					screen.getByText(
						'Please enter a valid name (2-50 characters, letters only)'
					)
				).toBeInTheDocument();
			});
		});

		it('should show error for name with numbers when email is also provided', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			// Need to provide both fields to see the name validation error
			await user.type(nameInput, 'John123');
			await user.type(emailInput, 'test@example.com');

			await waitFor(() => {
				expect(
					screen.getByText(
						'Please enter a valid name (2-50 characters, letters only)'
					)
				).toBeInTheDocument();
			});
		});

		it('should not show error for valid inputs', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');

			await waitFor(() => {
				expect(
					screen.queryByText('Please enter a valid email address')
				).not.toBeInTheDocument();
				expect(
					screen.queryByText(
						'Please enter a valid name (2-50 characters, letters only)'
					)
				).not.toBeInTheDocument();
			});
		});
	});

	// ============================================
	// BUTTON STATE TESTS
	// ============================================
	describe('Button State', () => {
		it('should disable button when name is invalid', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'A');
			await user.type(emailInput, 'test@example.com');

			expect(button).toBeDisabled();
		});

		it('should disable button when email is invalid', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'invalid');

			expect(button).toBeDisabled();
		});

		it('should enable button when inputs are valid', async () => {
			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');

			expect(button).not.toBeDisabled();
		});
	});

	// ============================================
	// SUBMISSION TESTS
	// ============================================
	describe('Form Submission', () => {
		it('should call API with correct data on submit', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () => Promise.resolve({ message: 'Success! Thank you for subscribing :)' }),
			});

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');
			await user.click(button);

			expect(mockFetch).toHaveBeenCalledWith(
				'/subscribe-newsletter',
				expect.objectContaining({
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: 'John Doe',
						email: 'john@example.com',
					}),
				})
			);
		});

		it('should show success message on successful subscription', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({ message: 'Success! Thank you for subscribing :)' }),
			});

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');
			await user.click(button);

			await waitFor(() => {
				expect(
					screen.getByText('Success! Thank you for subscribing :)')
				).toBeInTheDocument();
			});
		});

		it('should clear form on successful subscription', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: true,
				json: () =>
					Promise.resolve({ message: 'Success!' }),
			});

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');
			await user.click(button);

			await waitFor(() => {
				expect(nameInput).toHaveValue('');
				expect(emailInput).toHaveValue('');
			});
		});
	});

	// ============================================
	// ERROR HANDLING TESTS
	// ============================================
	describe('Error Handling', () => {
		it('should show error for already subscribed member', async () => {
			mockFetch.mockResolvedValueOnce({
				ok: false,
				status: 400,
				json: () =>
					Promise.resolve({
						title: 'Member Exists',
						detail: 'Already subscribed',
					}),
			});

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'existing@test.com');
			await user.click(button);

			await waitFor(() => {
				expect(
					screen.getByText('You are already subscribed to our newsletter')
				).toBeInTheDocument();
			});
		});

		it('should show generic error message on fetch failure', async () => {
			mockFetch.mockRejectedValueOnce(new Error('Network error'));

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');
			await user.click(button);

			await waitFor(() => {
				expect(screen.getByText('Network error')).toBeInTheDocument();
			});
		});

		it('should show fallback error message for unknown errors', async () => {
			mockFetch.mockRejectedValueOnce({});

			const user = userEvent.setup();
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');
			const button = screen.getByRole('button', { name: 'Subscribe' });

			await user.type(nameInput, 'John Doe');
			await user.type(emailInput, 'john@example.com');
			await user.click(button);

			await waitFor(() => {
				expect(
					screen.getByText('An error occurred, please try again later.')
				).toBeInTheDocument();
			});
		});
	});

	// ============================================
	// ACCESSIBILITY TESTS
	// ============================================
	describe('Accessibility', () => {
		it('should have accessible button', () => {
			render(<EmailSignup />);

			const button = screen.getByRole('button', { name: 'Subscribe' });
			expect(button).toBeInTheDocument();
		});

		it('should have accessible input fields', () => {
			render(<EmailSignup />);

			const nameInput = screen.getByPlaceholderText('Name / Nym');
			const emailInput = screen.getByPlaceholderText('yourname@email.com');

			expect(nameInput).toBeInTheDocument();
			expect(emailInput).toBeInTheDocument();
		});
	});
});
