export default function Page() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/game.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        title="SentientQuest Game"
      />
    </main>
  )
}
