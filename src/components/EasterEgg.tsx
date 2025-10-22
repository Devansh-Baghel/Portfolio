"use client";

import { useEffect } from "react";

export default function EasterEggLogs() {
  useEffect(() => {
    console.log(`
    ╔══════════════════════════════════════╗
    ║          Welcome Developer!          ║
    ║                                      ║
    ║  You found the secret console msg!   ║
    ║  Email me if you're hiring: 👋       ║
    ║  hello@baghel.dev                    ║
    ╚══════════════════════════════════════╝
  `);

    console.log("🎯 Try typing: showSecrets()");

    // Add a global function
    (window as any).showSecrets = () => {
      console.log("🚀 Here are some hidden shortcuts:");
      // console.log("- Press 'k' for Konami code mode");
      // console.log("- Click the spinning shape 10 times");
      console.log('- Want to see something cool? Try /?spin=faster');
    };
  }, []);

  return " ";
}
