"use client";

import { GooeyToaster } from "@baghel/goey-toast";
import "@baghel/goey-toast/styles.css";

export default function GooeyToasterClient() {
  return <GooeyToaster position="top-center" theme="dark" />;
}
