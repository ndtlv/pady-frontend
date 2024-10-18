import NavBar from './navbar'

export default function LayoutTemplate({ pageContent }) {
    return (
      <div className="bg-sage-green w-full h-full min-h-screen">
        <div className="p-6 flex flex-col gap-4 h-full">
          <NavBar/>
          {pageContent}
        </div>
      </div>
    )
}