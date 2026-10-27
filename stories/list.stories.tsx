import type { Story } from "@ladle/react";
import { useState } from "react";

import { Approval } from "../src/components/approval/root";
import { Button } from "../src/components/button/root";
import { ConnectField } from "../src/components/connect-field/root";
import { CopyLine } from "../src/components/copy-line/root";
import { Glyph } from "../src/components/glyph/root";
import { Pulse } from "../src/components/pulse/root";
import { Row } from "../src/components/row/root";
import { Section } from "../src/components/section/root";
import { StatusItem } from "../src/components/status-bar/item";
import { StatusBar } from "../src/components/status-bar/root";

import { Frame } from "./support/frame";

const agent = { color: "var(--synt-agent)" };

const mono = { fontFamily: "var(--synt-mono)" };

export const Sections: Story = () => {
  const [query, setQuery] = useState("");

  return (
    <Frame>
      <ConnectField value={query} onChange={setQuery} hint="A name from your projects, user@host, or a whole ssh command" />
      <Section title="Needs you" count={2}>
        <Approval agent="claude-code" command="sudo systemctl restart api" target="api-1 · prod-infra" reason="privileged, asked every time" privileged onAnswer={() => {}} />
        <Approval agent="cursor" command="kubectl rollout restart deploy/api" target="do-k8s · prod-infra" reason="first time" privileged={false} onAnswer={() => {}} />
        <Row lead={<Glyph kind="host" link="unreachable" />} title="bastion is unreachable" detail="Since 15:31 · do-k8s goes through it" trailing={<Button>Retry</Button>} />
      </Section>
      <Section title="Running" count={2}>
        <Row lead={<Pulse activity="working" />} title={<><span style={agent}>claude-code</span> on api-1</>} detail={<><span style={mono}>journalctl -u api -n 200</span> · 7 commands in 4 min</>} trailing="4 min" onOpen={() => {}} />
        <Row lead={<Glyph kind="tunnel" />} title="grafana" detail={<span style={mono}>do-k8s svc/grafana:3000 → localhost:3000</span>} trailing="1 h" onOpen={() => {}} />
      </Section>
      <Section title="Let your agent in">
        <CopyLine command="claude mcp add synt -- synt-mcp" />
      </Section>
      <StatusBar
        start={
          <>
            <StatusItem tone="online">5 connected</StatusItem>
            <StatusItem>1 tunnel</StatusItem>
            <StatusItem tone="agent">claude-code is waiting for you</StatusItem>
          </>
        }
        end={<StatusItem>Keys in macOS Keychain</StatusItem>}
      />
    </Frame>
  );
};
