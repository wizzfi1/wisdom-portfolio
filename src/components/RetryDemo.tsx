"use client";
import { useState } from "react";
export default function RetryDemo() {
  const [deliveries, setDeliveries] = useState(1);
  const [guarded, setGuarded] = useState(true);
  return (
    <div className="retry-demo">
      <p className="eyebrow">TRY THE IDEA / CLIENT-SIDE ILLUSTRATION</p>
      <h3>Send the same event again.</h3>
      <p>
        This small illustration shows the intended effect of idempotency. The
        repository contains the actual storage and crash-recovery experiments.
      </p>
      <div className="demo-toggle">
        <button aria-pressed={guarded} onClick={() => setGuarded(true)}>
          With idempotency
        </button>
        <button aria-pressed={!guarded} onClick={() => setGuarded(false)}>
          Without idempotency
        </button>
      </div>
      <div className="demo-counts" aria-live="polite">
        <div>
          <strong>{deliveries}</strong>
          <span>deliveries of the same event</span>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <strong>{guarded ? 1 : deliveries}</strong>
          <span>fulfillment effects</span>
        </div>
      </div>
      <div className="demo-actions">
        <button
          className="button primary"
          disabled={deliveries >= 99}
          onClick={() => setDeliveries((n) => Math.min(n + 1, 99))}
        >
          Send duplicate event ↗
        </button>
        <button
          className="reset-button"
          onClick={() => {
            setDeliveries(1);
            setGuarded(true);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
