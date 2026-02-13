// "use client";

// import posthog from "posthog-js";
// import { PostHogProvider } from "posthog-js/react";
// import { useEffect } from "react";

// export function PHProvider({ children }) {
//   useEffect(() => {
//     const key = "phc_yM2yvy4tmvUDIXwYjowV0wskT8g19nfhNFVuwaR6JCM";

//     if (!key) {
//       console.warn("PostHog key is missing");
//       return;
//     }

//     if (typeof window !== "undefined") {
//      const timer =  setTimeout(() => {
//         posthog.init(key, {
//           api_host: "https://eu.i.posthog.com",
//           person_profiles: "identified_only",
//           capture_pageview: false,
//           capture_pageleave: true,
//           batch_size: 10,
//           batch_flush_interval_ms: 3000,
//           persistence: "localStorage",
//           loaded: (posthog) => {
//             if (process.env.NODE_ENV === "development") posthog.debug();
//           },
//         });
//       }, [2000])
//       return () => clearTimeout(timer)
//     }
//   }, []);

//   return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
// }
