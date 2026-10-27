import type { Story } from "@ladle/react";
import { House, PanelLeft, ScrollText, Search, Settings, Plus, Blocks } from "lucide-react";
import { useState } from "react";

import { IconButton } from "../src/components/icon-button/root";
import { Pulse } from "../src/components/pulse/root";
import { SidebarAccount } from "../src/components/sidebar/account/root";
import { useSidebarWidth } from "../src/components/sidebar/grip/resize";
import { SidebarGrip } from "../src/components/sidebar/grip/root";
import { SidebarHeading } from "../src/components/sidebar/heading";
import { SidebarPlace } from "../src/components/sidebar/items/place";
import { SidebarProject } from "../src/components/sidebar/items/project";
import { SidebarResource } from "../src/components/sidebar/items/resource";
import { SidebarRoot } from "../src/components/sidebar/root";

import { accountEntries, addEntries, hostEntries, projectEntries } from "./support/entries";

export const Workday: Story = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ "prod-infra": true });
  const [current, setCurrent] = useState("Home");
  const width = useSidebarWidth();
  const toggle = (name: string) => (value: boolean) => setOpen(state => ({ ...state, [name]: value }));

  return (
    <div style={{ position: "relative", width: width.width, height: "100vh" }}>
      <SidebarRoot
        label="Places and projects"
        top={
          <>
            <IconButton label="Search" shortcut="⌘K">
              <Search />
            </IconButton>
            <IconButton label="Hide sidebar" shortcut="⌘\">
              <PanelLeft />
            </IconButton>
          </>
        }
        footer={
          <>
            <SidebarPlace icon={<Blocks />} label="Extensions" trailing="3" />
            <SidebarPlace icon={<Settings />} label="Settings" trailing="⌘," />
            <SidebarAccount name="lantrik" plan="Pro" entries={accountEntries} />
          </>
        }
      >
        <SidebarPlace icon={<House />} label="Home" current={current === "Home"} onSelect={() => setCurrent("Home")} />
        <SidebarPlace icon={<ScrollText />} label="Journal" current={current === "Journal"} onSelect={() => setCurrent("Journal")} />
        <SidebarPlace icon={<Pulse activity="idle" size="small" />} label="Agents" trailing={<Pulse activity="waiting" size="small" />} />

        <SidebarHeading
          title="Projects"
          action={
            <IconButton label="New project" size="small">
              <Plus />
            </IconButton>
          }
        />
        <SidebarProject name="prod-infra" total={6} live={5} unreachable open={!!open["prod-infra"]} onOpenChange={toggle("prod-infra")} add={addEntries} entries={projectEntries}>
          <SidebarResource name="api-1" kind="host" link="online" activity="working" entries={hostEntries} current={current === "api-1"} onOpen={() => setCurrent("api-1")} />
          <SidebarResource name="api-2" kind="host" link="online" entries={hostEntries} />
          <SidebarResource name="bastion" kind="host" link="unreachable" entries={hostEntries} />
          <SidebarResource name="do-k8s" kind="cluster" link="online" entries={hostEntries} />
          <SidebarResource name="orders-db" kind="database" link="online" entries={hostEntries} />
          <SidebarResource name="grafana" kind="tunnel" link="online" entries={hostEntries} />
        </SidebarProject>
        <SidebarProject name="staging" total={3} live={2} busy open={!!open.staging} onOpenChange={toggle("staging")} add={addEntries} entries={projectEntries}>
          <SidebarResource name="stage-1" kind="host" link="online" activity="working" entries={hostEntries} />
          <SidebarResource name="stage-db" kind="database" link="online" entries={hostEntries} />
          <SidebarResource name="stage-redis" kind="database" link="offline" entries={hostEntries} />
        </SidebarProject>
        <SidebarProject name="client-atlas" total={2} live={0} open={!!open["client-atlas"]} onOpenChange={toggle("client-atlas")} add={addEntries} entries={projectEntries}>
          <SidebarResource name="atlas-web" kind="host" link="offline" entries={hostEntries} />
          <SidebarResource name="atlas-pg" kind="database" link="offline" entries={hostEntries} />
        </SidebarProject>

        <SidebarHeading title="This Mac" />
        <SidebarResource name="oracle-vps" kind="host" link="offline" nested={false} entries={hostEntries} />
        <SidebarResource name="home-pi" kind="host" link="offline" nested={false} entries={hostEntries} />
      </SidebarRoot>
      <SidebarGrip width={width.width} min={width.min} max={width.max} onResize={width.resize} onCommit={width.commit} onReset={width.reset} />
    </div>
  );
};
