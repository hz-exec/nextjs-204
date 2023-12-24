import Image from 'next/image'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h2 className={`mb-3 text-2xl font-semibold`}>
              Servers as Google generate_204
          </h2>
          <p>
              adb shell settings put global captive_portal_http_url http://next-js-boilerplate-theta-two.vercel.app/generate_204 <br />
              adb shell settings put global captive_portal_https_url https://next-js-boilerplate-theta-two.vercel.app/generate_204
          </p>
      </main>
  )
}
