import type { Story } from "@ladle/react";
import { Blocks, House, PanelLeft, Plus, ScrollText, Search, Settings } from "lucide-react";
import { useState } from "react";

import { IconButton } from "../src/components/icon-button";
import { Pulse } from "../src/components/pulse";
import { Sidebar } from "../src/components/sidebar";
import { SidebarAccount } from "../src/components/sidebar/account";
import { SidebarHeading } from "../src/components/sidebar/heading";
import { SidebarPlace } from "../src/components/sidebar/place";
import { SidebarProject } from "../src/components/sidebar/project";
import { SidebarResource } from "../src/components/sidebar/resource";

import { account, add, host, project } from "./entries";

export const Workday: Story = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ "prod-infra": true });
  const [current, setCurrent] = useState("Home");
  const toggle = (name: string) => (value: boolean) => setOpen(state => ({ ...state, [name]: value }));

  return (
    <div className="h-dvh w-[252px]">
      <Sidebar
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
            <SidebarAccount name="lantrik" plan="Pro" entries={account} />
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
        <SidebarProject name="prod-infra" total={6} live={5} unreachable open={!!open["prod-infra"]} onOpenChange={toggle("prod-infra")} add={add} entries={project}>
          <SidebarResource name="api-1" kind="host" link="online" activity="working" entries={host} current={current === "api-1"} onOpen={() => setCurrent("api-1")} />
          <SidebarResource name="api-2" kind="host" link="online" entries={host} />
          <SidebarResource name="bastion" kind="host" link="unreachable" entries={host} />
          <SidebarResource name="do-k8s" kind="cluster" link="online" entries={host} />
          <SidebarResource name="orders-db" kind="database" link="online" entries={host} />
          <SidebarResource name="grafana" kind="tunnel" link="online" entries={host} />
        </SidebarProject>
        <SidebarProject name="staging" total={3} live={2} busy open={!!open.staging} onOpenChange={toggle("staging")} add={add} entries={project}>
          <SidebarResource name="stage-1" kind="host" link="online" activity="working" entries={host} />
          <SidebarResource name="stage-db" kind="database" link="online" entries={host} />
          <SidebarResource name="stage-redis" kind="database" link="offline" entries={host} />
        </SidebarProject>
        <SidebarHeading title="This Mac" />
        <SidebarResource name="oracle-vps" kind="host" link="offline" nested={false} entries={host} />
        <SidebarResource name="home-pi" kind="host" link="offline" nested={false} entries={host} />
      </Sidebar>
    </div>
  );
};
