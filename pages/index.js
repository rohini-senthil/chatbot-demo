import dynamic from "next/dynamic"

export default function Home() {
  const Chat = dynamic(() => import('./chatwidget'), {
    ssr: false
  })
  return (
    <>
      <Chat></Chat>
    </>
  )
}
