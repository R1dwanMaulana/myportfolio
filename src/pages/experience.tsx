import Nav from '@/components/Nav'
export default function exp() {
  return (
    <>
      <div className="bg-gray-50">
      <div className="lg:max-w-lg max-w-md mx-auto pb-3 pt-4 h-screen bg-white shadow-lg">
        <div className="mx-4">
          <p className="font-semibold text-md">Experience</p>
          <p className="text-sm font-bold mt-4">Internship</p>
          <ul className="text-sm">
            <li>- Build web landing page Reblood (reblood.com)</li>
            <li>- Build web RSVP covid vaccine region Surabaya and employee PT PELINDO</li>
          </ul>
          <p className="text-sm font-bold mt-4">Internship</p>
          <ul className="text-sm">
            <li>- build new feature donor history on PWA reblood</li>
            <li>- Build a blood donor RSVP website</li>
            <li>- Developing an e-commerce web platform (app.farmly.id)</li>
            <li>- Build a reblood webview on the Kitabisa application platform (webview.reblood.com)</li>
          </ul>
        </div>
      </div>
      <Nav />
      </div>
    </>
  )
}