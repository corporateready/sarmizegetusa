export function track(event, properties) {
  if (typeof window !== "undefined" && window.posthog)
    window.posthog.capture(event, properties);
}
