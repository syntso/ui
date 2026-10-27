import styles from "./styles.module.css";

const elevated = /^(sudo|doas|pkexec|su)(\s|$)/;

export function ApprovalCommand({ command }: { command: string }) {
  const match = elevated.exec(command);

  return (
    <code className={styles.command}>
      {match ? (
        <>
          <span className={styles.elevated}>{match[1]}</span>
          {command.slice(match[1]?.length ?? 0)}
        </>
      ) : (
        command
      )}
    </code>
  );
}
