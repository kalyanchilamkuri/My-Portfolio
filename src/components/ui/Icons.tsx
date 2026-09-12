type IconProps = {
  size?: number;
  className?: string;
};

export function GitHubIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.87 3.16 9 7.54 10.46.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.07.67-3.72-1.3-3.72-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.45-.28-5.03-1.23-5.03-5.46 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.4.1-2.92 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.52.23 2.64.11 2.92.71.77 1.14 1.76 1.14 2.97 0 4.24-2.58 5.18-5.04 5.45.4.34.75 1.02.75 2.06 0 1.49-.01 2.69-.01 3.06 0 .29.2.64.76.53a10.53 10.53 0 0 0 7.53-10.46C23.01 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21.5h4.16V9.4H2.9v12.1Zm7.03-12.1h3.99v1.65h.06c.56-1.02 1.92-2.1 3.95-2.1 4.22 0 5 2.66 5 6.11v6.44h-4.16v-5.71c0-1.36-.03-3.12-1.94-3.12-1.95 0-2.25 1.48-2.25 3.02v5.81H9.93V9.4Z" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.48 1.35a1.2 1.2 0 0 1 1.7 1.7l-3.2 3.24 4.4 4.4a1.2 1.2 0 1 1-1.7 1.7l-4.4-4.4-3.3 3.35a3.2 3.2 0 0 0 0 4.5l3.3 3.34a3.2 3.2 0 0 0 4.53 0l2.3-2.33a1.2 1.2 0 1 1 1.71 1.69l-2.3 2.33a5.6 5.6 0 0 1-7.94 0l-3.3-3.35a5.6 5.6 0 0 1 0-7.88l6.5-6.6ZM21.1 11.1a1.2 1.2 0 1 1 0 2.4h-7.2a1.2 1.2 0 1 1 0-2.4h7.2Z" />
    </svg>
  );
}
