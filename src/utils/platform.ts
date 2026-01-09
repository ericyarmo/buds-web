/**
 * Platform detection utility for device-specific experiences
 */

export type Platform = 'ios' | 'android' | 'web';

/**
 * Detects the user's platform based on the user agent string
 * @param userAgent - The user agent string (defaults to window.navigator.userAgent in browser)
 * @returns The detected platform: 'ios', 'android', or 'web'
 */
export function detectPlatform(userAgent?: string): Platform {
  if (typeof window === 'undefined' && !userAgent) {
    return 'web';
  }

  const ua = userAgent || window.navigator.userAgent;

  // Check for iOS devices
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return 'ios';
  }

  // Check for Android devices
  if (/android/i.test(ua)) {
    return 'android';
  }

  // Default to web for desktop and other devices
  return 'web';
}

/**
 * Checks if the current device is a mobile device
 */
export function isMobile(userAgent?: string): boolean {
  const platform = detectPlatform(userAgent);
  return platform === 'ios' || platform === 'android';
}

/**
 * Gets the appropriate CTA text based on the platform
 */
export function getCTAText(platform: Platform): string {
  switch (platform) {
    case 'ios':
      return 'Join the Beta on TestFlight';
    case 'android':
      return 'Coming Soon to Android';
    case 'web':
      return 'Download on iOS';
    default:
      return 'Join the Beta';
  }
}

/**
 * Gets the appropriate CTA action based on the platform
 */
export function getCTAAction(platform: Platform): 'link' | 'waitlist' | 'qr' {
  switch (platform) {
    case 'ios':
      return 'link';
    case 'android':
      return 'waitlist';
    case 'web':
      return 'qr';
    default:
      return 'link';
  }
}
