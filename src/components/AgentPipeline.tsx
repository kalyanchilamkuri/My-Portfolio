const SIGNALS = ["PagerDuty", "Grafana", "Kibana", "Graylog"];

function Connector({ delay }: { delay: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-9 w-px overflow-hidden bg-line"
    >
      <span
        className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-accent motion-safe:animate-[flow-down_2.8s_linear_infinite]"
        style={{ animationDelay: delay }}
      />
    </div>
  );
}

function Stage({
  label,
  title,
  detail,
  emphasis = false,
}: {
  label: string;
  title: string;
  detail: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border px-5 py-4 text-center ${
        emphasis
          ? "border-[var(--accent-line)] bg-[var(--accent-soft)]"
          : "border-line bg-surface-2"
      }`}
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
        {label}
      </div>
      <div className="mt-1.5 text-[15px] font-medium tracking-tight text-text">
        {title}
      </div>
      <div className="mt-1 text-[12.5px] leading-snug text-text-muted">{detail}</div>
    </div>
  );
}

/**
 * Schematic of the on-call agent built during the Sprinklr internship:
 * observability signals in, MCP-brokered agent in the middle, structured RCA out.
 */
export default function AgentPipeline() {
  return (
    <figure className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] tracking-wide text-text-muted">
          on-call agent
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-text-faint">
          <span
            aria-hidden="true"
            className="live-dot size-1.5 rounded-full bg-signal"
          />
          Sprinklr
        </span>
      </div>

      <div className="px-5 py-7 sm:px-7">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-faint">
          Signals
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {SIGNALS.map((signal) => (
            <div
              key={signal}
              className="rounded-lg border border-line bg-surface-2 px-3 py-2.5 text-center text-[12.5px] text-text-muted"
            >
              {signal}
            </div>
          ))}
        </div>

        <Connector delay="0s" />

        <Stage
          label="Agent"
          title="MCP server · Python"
          detail="LLM tool orchestration over internal APIs"
          emphasis
        />

        <Connector delay="1.4s" />

        <Stage
          label="Output"
          title="Structured RCA"
          detail="Correlated root-cause analysis, routed to on-call"
        />
      </div>

      <figcaption className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line px-5 py-3.5 font-mono text-[11px] text-text-faint sm:px-7">
        <span>
          <span className="text-text">500+</span> alerts/day
        </span>
        <span>
          <span className="text-text">−40%</span> mean time to triage
        </span>
        <span className="sr-only">
          Diagram: observability signals from PagerDuty, Grafana, Kibana and
          Graylog feed a Python MCP server running an LLM agent, which emits a
          structured root cause analysis to the on-call engineer.
        </span>
      </figcaption>
    </figure>
  );
}
