export default function Foot() {
  return (
    <div className="fixed bottom-2 sm:bottom-6 sm:right-0 w-screen sm:w-[225px] sm:h-[150px] opacity-40 text-center">
      <div className="sm:rotate-90 sm:w-[400px] text-dynamicFooter"> © {(new Date().getFullYear())} Andrew Neeley. All Rights Reserved.</div>
    </div>
  )
}